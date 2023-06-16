CREATE TABLE `medicos` (
  `id` int PRIMARY KEY,
  `nombres` varchar(50),
  `apellidos` varchar(50),
  `especialidad` varchar(50),
  `consultorio` char(3),
  `correo` varchar(50)
);

CREATE TABLE `mascotas` (
  `id` int PRIMARY KEY,
  `nombre` varchar(50),
  `nombre_duenio` varchar(100),
  `edad` int,
  `telefono` int
);

CREATE TABLE `cita_medica` (
  `id_mascota` int,
  `id_medico` int,
  `fecha` date
);

ALTER TABLE `cita_medica` ADD FOREIGN KEY (`id_mascota`) REFERENCES `mascotas` (`id`);

ALTER TABLE `cita_medica` ADD FOREIGN KEY (`id_medico`) REFERENCES `medicos` (`id`);
INSERT INTO medicos (id, nombres, apellidos, especialidad, consultorio, correo) VALUES
(1, 'Juan', 'Martinez', 'Medicina General', 101, 'juan@medico.com');
INSERT INTO medicos (id, nombres, apellidos, especialidad, consultorio, correo) VALUES
(2, "Carlos", "Gomez", "Odontologia", 201, "carlos@medico.com");
INSERT INTO medicos (id, nombres, apellidos, especialidad, consultorio,correo) VALUES
(3, "Karen", "Vargas", "Psicologia", 301, "karen@medico.com");

UPDATE medicos
SET nombres = "Karen Tatiana"
WHERE id = 3