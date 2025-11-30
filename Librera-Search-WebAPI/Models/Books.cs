
namespace LibreraSearch.WebAPI.Models;

public partial class Books
{
    public int id { get; set; }

    public DateTime modified { get; set; }

    public string Title { get; set; }

    public string? Authors { get; set; }

    public decimal? Series { get; set; }

    public string? Ids { get; set; }

    public DateTime? Published { get; set; }

    public string? Publisher { get; set; }

    public string? Languages { get; set; }

    public string? Tags { get; set; }

    public string? Formats { get; set; }

    public string? Path { get; set; }
}
