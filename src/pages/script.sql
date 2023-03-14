create table users (
id uuid default gen_random_uuid() primary key not null,
username varchar(100) not null unique,
email varchar(100) not null unique,
password varchar(255) not null,
role varchar(50) not null
);

create table player(
id serial primary key not null,
lastName varchar(100) not null,
firstName varchar(100) not null,
age int not null,
country char(3) not null,
position varchar(3) not null,
rate int not null,
speed int not null,
shots int not null,
pass int not null,
dribbles int not null,
defence int not null,
power int not null,
id_typeplayer int not null,
constraint fk_typeplayer foreign key (id_typeplayer) references typeplayer(id)
);

create table typeplayers(
id serial primary key not null,
name_type varchar(50) not null
);

create table savedplayer(
id_user uuid not null,
id_player int not null,
constraint fk_player foreign key (id_player) references player(id),
constraint fk_users foreign key (id_user) references users (id)
);

create table item(
id serial primary key not null,
title text not null,
contain text not null,
id_user uuid not null,
created_at date,
constraint fk_users foreign key (id_user) references users(id)
);

create table message(
id serial primary key not null,
details text not null,
contain text not null,
created_at date
);