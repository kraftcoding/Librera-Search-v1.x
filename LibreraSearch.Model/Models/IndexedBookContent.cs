namespace LibreraSearch.Model.Models
{
    public partial class IndexedBookContent
    {
        public int id { get; set; }

        public int bookId { get; set; }

        public DateTime modified { get; set; }

        public string TextContent { get; set; } = null!;

        public int PageNumber { get; set; }

        public string Title { get; set; }

        public string? Authors { get; set; }
    }
}
