use CSDL

select * from INFORMATION_SCHEMA.TABLES

select * from Users where [_token] <> 'null'

select * from [Posts]
select * from [Comments]
select * from [Like_Post]
select * from [Like_Comments]
-- user = 'easty1p' && pass = 'wM31s6zK'

select * from Users where username = 'admin'

select username from Users where [password] = 'wM31s6zK'