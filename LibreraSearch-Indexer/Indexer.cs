using LibreraSearch.Indexer.Managers;
using LibreraSearch.Model.Models;

namespace LibreraSearch.Indexer
{
    public class Indexer
    {
        public void Start()
        {
            BookStoreMngr bookStoreMngr = new BookStoreMngr();
            List<Books> books =  bookStoreMngr.GetBooksToIndex();

            foreach (var book in books)
            {
                List<string> stringsList = PdfTextExtractor.ExtractTextFromPdf(book.Path);
            }
        }

        public void Stop()
        {
           
        }
    }
}
