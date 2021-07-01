DROP DATABASE IF EXISTS docker-fullstack-practice;

CREATE DATABASE docker-fullstack-practice;
USE docker-fullstack-practice;

CREATE TABLE lists (
  id INTEGER AUTO_INCREMENT,
  value TEXT,
  PRIMARY KEY (id)
);
