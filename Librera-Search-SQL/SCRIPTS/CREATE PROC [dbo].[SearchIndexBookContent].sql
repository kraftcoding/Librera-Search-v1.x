USE [LibreraSearch]
GO
/****** Object:  StoredProcedure [dbo].[SearchTextFromIndexBookContent]    Script Date: 12/4/2025 3:26:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROC [dbo].[SearchTextFromIndexBookContent] @SearchStr varchar(128)
AS
BEGIN   
    SET NOCOUNT ON
	SELECT * FROM IndexedBookContent
	WHERE TextContent LIKE  '%' + @SearchStr + '%'
END

-- TEST
--use LibreraSearch 
--exec dbo.SearchTextFromIndexBookContent @SearchStr = 'encrypt storage'
