using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;

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
}