CREATE DATABASE CSDL

USE CSDL

-- use CSDLproject

CREATE TABLE [Users] (
    [id] int NOT NULL IDENTITY(1,1),
    [nickname] VARCHAR(255) NOT NULL,
    [username] VARCHAR(255) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    [isAdmin] BIT NOT NULL,
    PRIMARY KEY ([id])
);

CREATE TABLE [Posts] (
    [id] int NOT NULL IDENTITY(1,1),
    [user_id] int NOT NULL,
    [title] VARCHAR(500) NOT NULL,
    [post_text] TEXT NOT NULL,
    [image] TEXT NOT NULL,
    [isCheck] BIT NOT NULL,
    [creat_at] DATETIME,
    PRIMARY KEY ([id]),
    CONSTRAINT userIdFK FOREIGN KEY ([user_id]) REFERENCES Users([id])
);

CREATE TABLE [Comments] (
    [id] int NOT NULL IDENTITY(1,1),
    [post_id] int NOT NULL,
    [user_id] int NOT NULL,
    [comment_text] TEXT NOT NULL,
    [creat_at] DATETIME,
    PRIMARY KEY ([id]),
    CONSTRAINT commentPostIdFK FOREIGN KEY ([post_id]) REFERENCES Posts([id]),
    CONSTRAINT commentUserIdFK FOREIGN KEY ([user_id]) REFERENCES Users([id])
)

CREATE TABLE [Like_Post] (
    [id] int NOT NULL IDENTITY(1,1),
    [post_id] int NOT NULL,
    [user_id] int NOT NULL,
    PRIMARY KEY ([id]),
    CONSTRAINT likePostIdFK FOREIGN KEY ([post_id]) REFERENCES Posts([id]),
    CONSTRAINT likeUserIdFK FOREIGN KEY ([user_id]) REFERENCES Users([id])
)

CREATE TABLE [Like_Comments] (
    [id] int NOT NULL IDENTITY(1,1),
    [comment_id] int NOT NULL,
    [user_id] int NOT NULL,
    PRIMARY KEY ([id]),
    CONSTRAINT likeCommentIdFK FOREIGN KEY ([comment_id]) REFERENCES Comments([id]),
    CONSTRAINT likeCommentUserIdFK FOREIGN KEY ([user_id]) REFERENCES Users([id])
)