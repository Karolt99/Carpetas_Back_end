CREATE TABLE `autor` (
  `id` int PRIMARY KEY,
  `nombre` varchar(50),
  `apellido` varchar(50),
  `fecha_nacimiento` date,
  `editorial_id` int
);

CREATE TABLE `cedula` (
  `numero` int PRIMARY KEY,
  `fecha_expedicion` date,
  `autor_id` int
);

CREATE TABLE `editorial` (
  `id` int PRIMARY KEY,
  `nombre` varchar(50),
  `direccion` varchar(20),
  `correo` varchar(20)
);

CREATE TABLE `libro` (
  `id` int PRIMARY KEY,
  `titulo` varchar(100),
  `anio_publicacion` int
);

CREATE TABLE `libro_autor` (
  `libro_id` int,
  `autor_id` int,
  PRIMARY KEY (`libro_id`, `autor_id`)
);

ALTER TABLE `libro_autor` ADD FOREIGN KEY (`libro_id`) REFERENCES `libro` (`id`);

ALTER TABLE `libro_autor` ADD FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`);


ALTER TABLE `autor` ADD FOREIGN KEY (`editorial_id`) REFERENCES `editorial` (`id`);

ALTER TABLE `cedula` ADD FOREIGN KEY (`autor_id`) REFERENCES `autor` (`id`);
INSERT INTO editorial(id, nombre, direccion, correo) VALUES
(1, "Planeta", "kra 40 #67", "planeta@editorial");
INSERT INTO editorial(id, nombre, direccion, correo) VALUES
(2, "Penguin", "Cl 13 #40", "pemguin@editorial");
INSERT INTO editorial(id, nombre, direccion, correo) VALUES
(3, "El Tiempo", "Cl 40-23", "tiempo@editorial");
INSERT INTO editorial(id, nombre, direccion, correo) VALUES
(4, "Huellas", "Cl 50-98", "huellas@editorial");
INSERT INTO editorial(id, nombre, direccion, correo) VALUES
(5, "Temis", "Kra 64#23", "Temis@editorial");

INSERT INTO autor(id, nombre, apellido, fecha_nacimiento, editorial_id) VALUES (1, "Oscar", "Wilde", "1854/10/16", 1);
INSERT INTO autor(id, nombre, apellido, fecha_nacimiento, editorial_id) VALUES (2, "Charles", "Dickens", "1812/02/07", 2);
INSERT INTO autor(id, nombre, apellido, fecha_nacimiento, editorial_id) VALUES (3, 'Franz', 'Kafka', '1883/06/03', 3);
INSERT INTO autor(id, nombre, apellido, fecha_nacimiento, editorial_id) VALUES (4, 'Jorge', 'Borgues', '1899/02/24', 4);
INSERT INTO autor(id, nombre, apellido, fecha_nacimiento, editorial_id) VALUES (5, 'Ernest', 'Hemingway', '1899/07/21', 5);

INSERT INTO cedula(numero, fecha_expedicion, autor_id) VALUES
(23451, "1873/10/16", 1);
INSERT INTO cedula(numero, fecha_expedicion, autor_id) VALUES
(25756, "1830/02/07", 2);
INSERT INTO cedula(numero, fecha_expedicion, autor_id) VALUES
(23658, "1901/06/03", 3);
INSERT INTO cedula(numero, fecha_expedicion, autor_id) VALUES
(58624, "1917/02/24", 4);
INSERT INTO cedula(numero, fecha_expedicion, autor_id) VALUES
(85345, "1917/07/21", 5);

INSERT INTO libro(id, titulo, anio_publicacion) VALUES
(1, "El retrato de Dorian Gray", 1890);
INSERT INTO libro(id, titulo, anio_publicacion) VALUES
(2, "Grandes Esperanzas", 1861);
INSERT INTO libro(id, titulo, anio_publicacion) VALUES
(3, "La Metamorfosis", 1915);
INSERT INTO libro(id, titulo, anio_publicacion) VALUES
(4, "El Aleph", 1945);
INSERT INTO libro(id, titulo, anio_publicacion) VALUES
(5, "El Viejo y El Mar", 1952);

INSERT INTO libro_autor(libro_id, autor_id) VALUES (1,1);
INSERT INTO libro_autor(libro_id, autor_id) VALUES (2,2);
INSERT INTO libro_autor(libro_id, autor_id) VALUES (3,3);
INSERT INTO libro_autor(libro_id, autor_id) VALUES (4,4);
INSERT INTO libro_autor(libro_id, autor_id) VALUES (5,5);

