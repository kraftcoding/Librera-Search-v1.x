CREATE TABLE [dbo].[IndexedBookContent] (
    [id]          INT            IDENTITY (1, 1) NOT NULL,
    [bookId]      INT            NOT NULL,
    [Modified]    DATETIME       NOT NULL,
    [TextContent] TEXT           NOT NULL,
    [PageNumber]  INT            NOT NULL,
    [Title]       NVARCHAR (MAX) NOT NULL,
    [Authors]     NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_IndexedBookContent] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_IndexedBookContent_Books] FOREIGN KEY ([bookId]) REFERENCES [dbo].[Books] ([id]) ON DELETE CASCADE ON UPDATE CASCADE
);

