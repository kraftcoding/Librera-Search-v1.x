using Hangfire;
using LibreraSearch.Indexer;

namespace HangfireExample.Jobs
{
    public interface IBookIndexerJob
    {
        Task RunAsync();
    }

    public class BookIndexerJob : IBookIndexerJob
    {
        [JobDisplayName(nameof(BookIndexerJob))]
        public async Task RunAsync()
        {
            Indexer Indxr = new Indexer();
            Indxr.Start();
        }
    }
}
