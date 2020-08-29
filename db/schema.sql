DROP DATABASE IF EXISTS openquiz_db;

CREATE DATABASE openquiz_db;

USE openquiz_db;

CREATE TABLE player_table (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  score INT NOT NULL,
  category INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE category_table(
    id INT NOT NULL,
    category_name varchar(30) NOT NULL,
    primary key (id)
);

