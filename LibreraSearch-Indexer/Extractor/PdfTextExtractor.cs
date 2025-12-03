using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using System.Text;

public class PdfTextExtractor
{
    public static List<string> ExtractTextFromPdf(string filePath)
    {
        var stringsList = new List<string>();

        FileStream docStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
        PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);

        foreach (PdfPageBase page in loadedDocument.Pages)
        {
            string extractedText = page.ExtractText();
            stringsList.Add(extractedText);
        }

        loadedDocument.Close(true);

        return stringsList;
    }

    internal static bool IsPdf(string path)
    {
        var pdfString = "%PDF-";
        var pdfBytes = Encoding.ASCII.GetBytes(pdfString);
        var len = pdfBytes.Length;
        var buf = new byte[len];
        var remaining = len;
        var pos = 0;
        using (var f = File.OpenRead(path))
        {
            while (remaining > 0)
            {
                var amtRead = f.Read(buf, pos, remaining);
                if (amtRead == 0) return false;
                remaining -= amtRead;
                pos += amtRead;
            }
        }
        return pdfBytes.SequenceEqual(buf);
    }
}