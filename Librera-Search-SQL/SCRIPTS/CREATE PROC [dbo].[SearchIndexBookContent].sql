USE [LibreraSearch]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[SearchTextFromIndexBookContent] 
@SearchStr varchar(128) = '%'
AS
BEGIN   
    SET NOCOUNT ON
	SELECT * FROM IndexedBookContent
	WHERE TextContent LIKE @SearchStr
END

-- TEST use LibreraSearch exec dbo.SearchTextFromIndexBookContent 'angular'