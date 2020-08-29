DROP DATABASE IF EXISTS openquiz_db;

CREATE DATABASE openquiz_db;

USE openquiz_db;

CREATE TABLE player_table (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  email varchar(30),
  PRIMARY KEY (id)
);

CREATE TABLE category_table
(
    id INT NOT NULL,
    category_name varchar(30) NOT NULL,
    primary key (id)
);

CREATE TABLE score_table
(
    id INT NOT NULL AUTO_INCREMENT,
    score INT NOT NULL,
    category_id INT NOT NULL, 
    primary key(id)
);