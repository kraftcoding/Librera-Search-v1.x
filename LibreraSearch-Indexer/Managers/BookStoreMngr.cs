using LibreraSearch.Model.Context;
using LibreraSearch.Model.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Reflection.Metadata.BlobBuilder;

namespace LibreraSearch.Indexer.Managers
{
    internal class BookStoreMngr
    {
        private readonly LibreraSearchApiContext _context;

        public BookStoreMngr()
        {
            _context = new LibreraSearchApiContext();
        }

        internal  List<Books> GetBooksToIndex()
        {
            return  _context.Books.ToList();
        }

        internal void ProcessBooks()
        {
            List<Books> books = GetBooksToIndex();

            foreach (var book in books)
            {
                if (File.Exists(book.Path) && !book.Indexed)
                {
                    if (PdfTextExtractor.IsPdf(book.Path))
                    {
                        List<string> stringsList = PdfTextExtractor.ExtractTextFromPdf(book.Path);
                        if (stringsList.Count > 0)
                        {
                            book.Indexed = UpdateBookContent(stringsList, book.id);
                            UpdateBook(book);
                        }
                    }

                    // TODO: Add support for other file types (epub, mobi, etc.
                }
            }
        }

        internal bool UpdateBookContent(List<string> stringList, int bookId)
        {
            string s = string.Join("", stringList);

            IndexedBookContent ibc = _context.IndexedBookContent.Where(ibc => ibc.bookId == bookId).FirstOrDefault();

            if(ibc != null)
            {
                ibc.modified = DateTime.Now;
                ibc.TextContent = s;                
                _context.IndexedBookContent.Update(ibc);                
            }
            else
            {
                _context.IndexedBookContent.AddRange(stringList.Select(s => new IndexedBookContent
                {
                    bookId = bookId,
                    modified = DateTime.Now,
                    TextContent = s
                }));
            }

            _context.SaveChanges();

            return true;
        }

        internal void UpdateBook(Books book)
        {
            _context.Books.Update(book);
            _context.SaveChanges();
        }
    }
}
