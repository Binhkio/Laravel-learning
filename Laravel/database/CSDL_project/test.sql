use CSDL

select * from INFORMATION_SCHEMA.TABLES

select * from Users

ALTER TABLE Users
ADD [_token] VARCHAR(512) default null;

drop TABLE migrations

-- user = 'easty1p' && pass = 'wM31s6zK'

select [password] from Users where username = 'admin'

select username from Users where [password] = 'wM31s6zK'