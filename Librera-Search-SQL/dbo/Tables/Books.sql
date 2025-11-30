CREATE TABLE [dbo].[Books] (
    [id]        INT            IDENTITY (1, 1) NOT NULL,
    [modified]  DATETIME       NOT NULL,
    [Title]     NVARCHAR (MAX) NOT NULL,
    [Authors]   NVARCHAR (MAX) NULL,
    [Series]    NUMERIC (18)   NULL,
    [Ids]       NVARCHAR (MAX) NULL,
    [Published] DATETIME       NULL,
    [Publisher] NVARCHAR (MAX) NULL,
    [Languages] NVARCHAR (50)  NULL,
    [Tags]      NVARCHAR (MAX) NULL,
    [Formats]   NVARCHAR (50)  NULL,
    [Path]      NVARCHAR (MAX) NULL,
    PRIMARY KEY CLUSTERED ([id] ASC)
);

