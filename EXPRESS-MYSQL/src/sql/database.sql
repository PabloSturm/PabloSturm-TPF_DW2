CREATE DATABASE libreria;
USE libreria;

CREATE TABLE clientes(
  id_clientes INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50),
  apellido VARCHAR(50)
);

CREATE TABLE socios(
  id_socios INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  fecha_nac DATE,
  genero INT,
  dni VARCHAR(50),
  direccion VARCHAR(50),
  localidad VARCHAR(50),
  provincia INT,
  telefono VARCHAR(50),
  email VARCHAR(50),
  fecha_alta DATE,
  categoria INT
);

CREATE TABLE generos(
  id_genero INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  genero VARCHAR(50)
);

CREATE TABLE categorias(
  id_categoria INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  categoria VARCHAR(50)
);

CREATE TABLE provincias(
  id_provincia INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  provincia VARCHAR(20)
);

DESCRIBE clientes;
DESCRIBE socios;
DESCRIBE generos;
DESCRIBE categorias;
DESCRIBE provincias;


