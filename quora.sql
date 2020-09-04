create database quora;
use quora;
create table users(
	usrid int(5) auto_increment,
    firstname varchar(20),
    lastname varchar(20),
    email varchar(30),
    mobile varchar(12),
    passwd varchar(20),
    primary key(usrid)
);
drop table users;
desc users;
alter user 'root'@'localhost' identified with mysql_native_password by 'jayu';
flush privileges;
select * from users;

create table ques(
qnum int(4) auto_increment,
quee varchar(500),
cat varchar(30),
primary key(qnum)
);
drop table ques;
select * from ques;