using LibreraSearch.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace LibreraSearch.Model.Context;

public partial class LibreraSearchApiContext : DbContext
{
    public LibreraSearchApiContext()
    {
    }

    public LibreraSearchApiContext(DbContextOptions<LibreraSearchApiContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Books> Books { get; set; }
    public virtual DbSet<Login> Login { get; set; }

#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=DEV01-WIN-SERV-2022;Database=LibreraSearch;Trusted_Connection=True; Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        //modelBuilder.Entity<Books>(entity =>
        //{
        //    entity.HasIndex(e => e.id, "id");
        //    //entity.Property(e => e.title).HasColumnName("title");
        //    //entity.HasOne(d => d.User).WithMany(p => p.Books).HasForeignKey(d => d.UserId);
        //});

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasIndex(e => e.id, "id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
