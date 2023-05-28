create database notes_db;
use notes_db;

create table user (
    id integer primary key auto_increment,
    firstName varchar(255),
    lastName varchar(255),
    password varchar(255),
    email varchar(255)
);

create table note (
    id integer primary key auto_increment,
    userId integer,
    title varchar(255),
    details varchar(1024)
);