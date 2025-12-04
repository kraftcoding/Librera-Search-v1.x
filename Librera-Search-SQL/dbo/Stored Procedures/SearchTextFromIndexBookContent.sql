
CREATE PROC [dbo].[SearchTextFromIndexBookContent] @TextContetnt varchar(128)
AS
BEGIN   
    SET NOCOUNT ON
	SELECT ibc.bookId, ibc.Modified, ibc.PageNumber, ibc.TextContent, bks.Title, bks.Authors FROM IndexedBookContent ibc
	LEFT JOIN Books bks ON ibc.bookId = bks.id 
	WHERE TextContent LIKE  '%' + @TextContetnt + '%'
	ORDER BY bks.Title
END

-- TEST
--use LibreraSearch 
--exec dbo.SearchTextFromIndexBookContent @TextContetnt = 'encrypt storage'