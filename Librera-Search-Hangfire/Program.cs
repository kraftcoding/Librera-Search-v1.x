using Hangfire;
using Hangfire.SqlServer;
using HangfireExample.Jobs;

var builder = WebApplication.CreateBuilder(args);

var hangfireConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddHangfire(configuration => configuration
    .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
    .UseSimpleAssemblyNameTypeSerializer()
    .UseRecommendedSerializerSettings()
    .UseSqlServerStorage(
        hangfireConnectionString,
        new SqlServerStorageOptions
        {
            CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
            SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
            QueuePollInterval = TimeSpan.Zero,
            UseRecommendedIsolationLevel = true,
            DisableGlobalLocks = true,
        }));

builder.Services.AddHangfireServer();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<ITestRecurringJob, TestRecurringJob>();
builder.Services.AddScoped<ITestJob, TestJob>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();

// Change `Back to site` link URL
var options = new DashboardOptions { AppPath = "http://localhost:4200/" };
// Make `Back to site` link working for subfolder applications
//var options = new DashboardOptions { AppPath = VirtualPathUtility.ToAbsolute("~") };

app.UseHangfireDashboard("/hangfire", options);

//RecurringJob.AddOrUpdate("MyJob", () => app.Services.GetRequiredService<ITestRecurringJob>().RunAsync(), Cron.Minutely);

app.Run();
