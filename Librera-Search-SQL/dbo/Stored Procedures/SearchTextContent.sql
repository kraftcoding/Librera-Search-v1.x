
CREATE PROC [dbo].[SearchTextContent] @Key varchar(128)
AS
BEGIN   
    SET NOCOUNT ON
	SELECT * FROM IndexedBookContent
		WHERE TextContent LIKE  '%' + @Key + '%'		
END

-- TEST
-- use LibreraSearch 
-- exec dbo.SearchTextContent @Key = 'encrypt storage'