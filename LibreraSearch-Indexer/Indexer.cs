using LibreraSearch.Indexer.Managers;
using LibreraSearch.Model.Models;

namespace LibreraSearch.Indexer
{
    public class Indexer
    {
        public void Start()
        {
            BookStoreMngr bookStoreMngr = new BookStoreMngr();
            bookStoreMngr.ProcessBooks();
        }

        public void Stop()
        {
           
        }
    }
}
