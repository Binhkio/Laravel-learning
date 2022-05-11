CREATE DATABASE [QLKH];

USE [QLKH];


CREATE TABLE [Lecturers] (
  [Lid] varchar(4),
  [FullName] varchar(40),
  [Address] varchar(50),
  [DOB] date,
  PRIMARY KEY ([Lid])
);

CREATE TABLE [Projects] (
    [Pid] varchar(4),
    [Title] varchar(40),
    [Level] varchar(1),
    [Cost] int,
    PRIMARY KEY ([Pid])
);

CREATE TABLE [Participation](
    [Lid] varchar(4),
    [Pid] varchar(4),
    [Duration] int,
    PRIMARY KEY([Lid],[Pid]),
    FOREIGN KEY ([Lid]) REFERENCES [Lecturers]([Lid]),
    FOREIGN KEY ([Pid]) REFERENCES [Projects]([Pid])

);


INSERT INTO [Lecturers]([Lid],[FullName],[Address],[DOB])
VALUES    ('GV01','Vu Tuyet Trinh','Hoang Mai, Hanoi','10/10/1975'),            
        ('GV02','Nguyen Nhat Quang','Hai Ba Trung, Hanoi','03/11/1976'),
        ('GV03','Tran Duc Khanh','Dong Da, Hanoi','04/06/1977'),
        ('GV04','Nguyen Hong Phuong','Tay Ho, Hanoi','10/12/1983'),
        ('GV05','Le Thanh Huong','Hai Ba Trung, Hanoi','10/10/1976')


INSERT INTO [Projects]([Pid],[Title],[Level],[Cost])
VALUES    ('DT01','Grid Computing','A','700'),
        ('DT02','Knowledge Discovery','B','300'),
        ('DT03','Text Classification','B','270'),
        ('DT04','Automatic English-Vietnamese Translation','C','30')
        
        
INSERT INTO [Participation]([Lid],[Pid],[Duration])
VALUES    ('GV01','DT01','100'),
        ('GV01','DT02','80'),
        ('GV01','DT03','80'),
        ('GV02','DT01','120'),
        ('GV02','DT03','140'),
        ('GV03','DT03','150'),
        ('GV04','DT04','180')

-- 1.
SELECT * FROM [Lecturers] WHERE [Address] LIKE 'Hai Ba Trung%' ORDER BY [FullName] DESC

-- 2.
SELECT [FullName],[Address],[DOB]
FROM [Lecturers] Lec, [Participation] Par, [Projects] Prj
WHERE [Prj].[Title] = 'Grid Computing' AND [Lec].[Lid] = [Par].[Lid] AND [Par].[Pid] = [Prj].[Pid]

-- 3.
SELECT [FullName],[Address],[DOB]
FROM [Lecturers] Lec, [Participation] Par, [Projects] Prj
WHERE ([Prj].[Title] = 'Text Classification' OR [Prj].[Title] = 'Automatic English-Vietnamese Translation')
AND [Lec].[Lid] = [Par].[Lid] AND [Par].[Pid] = [Prj].[Pid]

-- 4.
SELECT *
FROM [Lecturers] 
WHERE [Lid] IN(SELECT [Lid] 
            FROM [Participation] 
            GROUP BY [Lid] HAVING COUNT([Pid]) >= 2)
-- 5.
SELECT [FullName]
FROM [Lecturers] 
WHERE [Lid] = (SELECT TOP 1 [Lid] 
            FROM [Participation] 
            GROUP BY [Lid] ORDER BY COUNT([Pid]) desc)

-- 6.
SELECT TOP 1 * FROM [Projects] ORDER BY [Cost] ASC

-- 7.
SELECT [FullName],[DOB],[Title] 
FROM [Lecturers] Lec, [Projects] Prj, [Participation] Par
WHERE [Lec].[Lid] = [Par].[Lid] 
  AND [Par].[Pid] = [Prj].[Pid] 
  AND [Lec].[Address] LIKE 'Tay Ho%'

-- 8.
