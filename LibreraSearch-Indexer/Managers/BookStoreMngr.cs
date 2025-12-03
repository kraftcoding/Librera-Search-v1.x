using LibreraSearch.Model.Context;
using LibreraSearch.Model.Models;
using Microsoft.EntityFrameworkCore;
using System;
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
    }
}
