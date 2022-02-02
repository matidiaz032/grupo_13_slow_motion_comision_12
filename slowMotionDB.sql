-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-02-2022 a las 00:01:32
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `slow_motion_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `bank` tinytext DEFAULT NULL,
  `type` tinytext DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `expiration_date` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Acción'),
(2, 'Animación'),
(3, 'Aventura'),
(4, 'Bélica'),
(5, 'Ciencia Ficción'),
(6, 'Comedia'),
(7, 'Documental'),
(8, 'Drama'),
(9, 'Fantasía'),
(10, 'Post-apocalíptico'),
(11, 'Suspenso'),
(12, 'Terror');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idioms`
--

CREATE TABLE `idioms` (
  `id` int(11) NOT NULL,
  `name` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `idioms`
--

INSERT INTO `idioms` (`id`, `name`) VALUES
(1, 'Inglés'),
(2, 'Latino'),
(3, 'Español'),
(4, 'Alemán'),
(5, 'Japones'),
(6, 'Coreano'),
(7, 'Chino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moviefavorites`
--

CREATE TABLE `moviefavorites` (
  `MovieId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moviegenre`
--

CREATE TABLE `moviegenre` (
  `MovieId` int(11) NOT NULL,
  `GenreId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `moviegenre`
--

INSERT INTO `moviegenre` (`MovieId`, `GenreId`) VALUES
(1, 1),
(1, 6),
(2, 1),
(2, 6),
(3, 6),
(4, 1),
(4, 5),
(5, 1),
(5, 6),
(6, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movieidiom`
--

CREATE TABLE `movieidiom` (
  `IdiomId` int(11) NOT NULL,
  `MovieId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movieidiom`
--

INSERT INTO `movieidiom` (`IdiomId`, `MovieId`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(2, 1),
(2, 3),
(2, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `trailer` varchar(300) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `rating` decimal(3,1) DEFAULT NULL,
  `age` date DEFAULT NULL,
  `director` tinytext DEFAULT NULL,
  `subtitle` tinytext DEFAULT 'No',
  `image` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PriceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `title`, `description`, `trailer`, `duration`, `rating`, `age`, `director`, `subtitle`, `image`, `createdAt`, `updatedAt`, `PriceId`) VALUES
(1, 'Zombieland', 'Después de que un virus transforma a la mayoría de las personas en zombis, los humanos sobrevivientes deben luchar contra los muertos vivientes hambrientos. Cuatro sobrevivientes, Tallahassee y sus amigos, Columbus, Wichita y Little Rock, respetan una serie de reglas de supervivencia y estrategias para matar zombis mientras se dirigen a un refugio seguro en Los Ángeles.', '4KLz9-lUOzo', 88, '4.0', '2009-10-01', 'Ruben Fleischer', 'Latino', '1643647162608.jpg', '2022-01-31 16:39:22', '2022-01-31 16:39:23', 1),
(2, 'Comando Especial', 'Cuando los policías Schmidt y Jenko se unen a la unidad secreta Jump Street, ellos usan sus apariencias juveniles para trabajar de forma encubierta como estudiantes de preparatoria. Ellos cambian sus placas y armas por mochilas e intentan eliminar a un grupo narcotraficante. Schmidt y Jenko descubren que la preparatoria ya no es lo mismo y deben enfrentarse al terror y la ansiedad de la adolescencia que creían haber superado.', 'BFwi5Uv3J4U', 109, '7.0', '2012-03-01', 'Phil Lord', 'Latino', '1643650583914.jpg', '2022-01-31 17:36:23', '2022-01-31 17:36:24', 3),
(3, 'Ted', 'Cuando John Bennett (Mark Wahlberg) era un niño pequeño, pidió el deseo de que Ted (Seth MacFarlane), su querido oso de peluche, cobrara vida. Treinta años más tarde, Ted continúa siendo el compañero de John, ante el disgusto de Lori (Mila Kunis), la novia de John. Aunque el disgusto de Lori se ve agravado por el constante consumo de la pareja de cerveza y marihuana, ella no es quien está más decepcionada con John; ya que puede necesitar la intervención del juguete de John para hacerlo madurar.', '_0RXbJtBk68', 106, '6.4', '2012-06-01', 'Seth MacFarlane', 'Latino', '1643650946938.jpg', '2022-01-31 17:42:27', '2022-01-31 17:42:27', 4),
(4, 'Thor Ragnarok', 'Thor está preso en el otro extremo del universo. Necesita regresar a tiempo para evitar que la todopoderosa Hela destruya su mundo, pero para escapar de su confinamiento y evitar el apocalipsis tendrá que vencer antes al increíble Hulk en un torneo de gladiadores.', 'ue80QwXMRHg', 130, '7.4', '2017-11-01', 'Taika Waititi', 'No', '1643654038530.png', '2022-01-31 18:33:58', '2022-01-31 18:33:58', 8),
(5, 'Un espia y medio', 'Un agente de la CIA que solía sufrir acoso escolar se reencuentra con sus compañeros en una reunión de antiguos alumnos, aunque ahora él es musculoso y fuerte. Allí recluta al que era el chico más popular de la escuela, quien ahora tiene una vida monótona y predecible, para que le ayude en una peligrosa misión en la que ambos tendrán que arriesgarlo todo.', 'eQnbwxzCzQ8', 114, '6.9', '2016-08-01', 'Rawson Marshall Thurber', 'Latino', '1643654249644.jpg', '2022-01-31 18:37:29', '2022-01-31 18:37:29', 9),
(6, 'Hasta el último hombre', 'La película está basada en la historia real del soldado del Ejército de EE. UU. Desmond Doss, un cristiano Adventista del Séptimo día, que se negó a portar armas en el frente, fue objeto de burla y persecución y que, a pesar de aquello, fue condecorado con la Medalla de Honor por el presidente Harry S. Truman, por haber salvado la vida a más de setenta y cinco hombres bajo el constante fuego enemigo en el acantilado de Maeda durante la brutal batalla de Okinawa, en la Segunda Guerra Mundial.', 'QJUsNs7tLFA', 139, '8.6', '2016-10-01', 'Mel Gibson', 'Latino', '1643654992066.jpg', '2022-01-31 18:49:52', '2022-01-31 18:49:52', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `buy` int(11) DEFAULT NULL,
  `rental` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prices`
--

INSERT INTO `prices` (`id`, `buy`, `rental`, `discount`) VALUES
(1, 800, 500, 15),
(2, 1500, 1000, 30),
(3, 700, 500, 0),
(4, 650, 400, 0),
(5, 900, 550, 5),
(6, 1200, 750, 10),
(7, 600, 350, 0),
(8, 1300, 750, 40),
(9, 900, 600, 0),
(10, 1350, 800, 5),
(11, 850, 600, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id` int(11) NOT NULL,
  `type` int(2) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `type`) VALUES
(1, 0),
(2, 1),
(3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seriefavorites`
--

CREATE TABLE `seriefavorites` (
  `SerieId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seriegenre`
--

CREATE TABLE `seriegenre` (
  `SerieId` int(11) NOT NULL,
  `GenreId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `seriegenre`
--

INSERT INTO `seriegenre` (`SerieId`, `GenreId`) VALUES
(1, 12),
(2, 6),
(2, 8),
(3, 1),
(3, 11),
(4, 2),
(5, 8),
(5, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `serieidiom`
--

CREATE TABLE `serieidiom` (
  `IdiomId` int(11) NOT NULL,
  `SerieId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `serieidiom`
--

INSERT INTO `serieidiom` (`IdiomId`, `SerieId`) VALUES
(1, 1),
(1, 2),
(1, 4),
(1, 5),
(2, 1),
(2, 2),
(2, 4),
(2, 5),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `series`
--

CREATE TABLE `series` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `trailer` varchar(300) DEFAULT NULL,
  `seasons` int(11) DEFAULT NULL,
  `rating` decimal(3,1) UNSIGNED DEFAULT NULL,
  `age` date DEFAULT NULL,
  `director` tinytext DEFAULT NULL,
  `subtitle` tinytext DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PriceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `series`
--

INSERT INTO `series` (`id`, `title`, `description`, `trailer`, `seasons`, `rating`, `age`, `director`, `subtitle`, `image`, `createdAt`, `updatedAt`, `PriceId`) VALUES
(1, 'The Walking Dead', 'The Walking Dead tiene lugar después del inicio de un apocalipsis zombi mundial. Los zombis, coloquialmente llamados «caminantes», se arrastran hacia los humanos vivos y otras criaturas para comerlos; se sienten atraídos por el ruido, como los disparos, y por diferentes aromas, por ejemplo humanos.', 'uwgohmYnDu0&t=6s', 11, '4.1', '2010-10-01', 'Frank Darabont', 'Latino', '1643649599697.jpg', '2022-01-31 17:19:59', '2022-01-31 17:20:00', 2),
(2, 'Sex Education', 'Sex Education gira en torno a Otis, un adolescente calificado como \\\"bicho raro\\\" en el instituto, a lo que se le une el hecho de ser virgen. Sin embargo, este vive con su madre sexóloga, por lo que siempre ha tenido un amplio conocimiento respecto al tema.', 'mmksLpityps', 3, '8.3', '2019-01-01', 'Laurie Nunn', 'No', '1643652935425.jpg', '2022-01-31 18:15:35', '2022-01-31 18:15:35', 5),
(3, 'La casa de papel', 'Una banda organizada de ladrones se propone cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.', '3y-6iaveY6c', 3, '7.8', '2017-05-01', 'Jesús Colmenar, Miguel Ángel Vivas', 'Latino', '1643653404601.jpg', '2022-01-31 18:23:24', '2022-01-31 18:23:24', 6),
(4, 'What if...?', 'El espacio explora lo que sucedería si los principales momentos de las películas del Universo Cinematográfico de Marvel ocurrieran de manera diferente.', 'DexqOGh_tzQ', 1, '6.8', '2021-08-01', 'Bryan Andrews', 'Latino', '1643653718570.jpeg', '2022-01-31 18:28:38', '2022-01-31 18:28:39', 7),
(5, 'La maldición de Hill House', 'En el verano de 1992, Hugh y Olivia Crain y sus cinco hijos, Steven, Shirley, Theodora, Luke y Eleanor (Nell), se mudaron a Hill House para renovar la mansión, venderla y construir su propia casa, diseñada por Olivia. Sin embargo, debido a reparaciones inesperadas, tienen que quedarse más tiempo, y empiezan a experimentar un creciente fenómeno paranormal, lo que resulta en una trágica pérdida y en la huida de la familia de la casa. Veintiséis años más tarde, los hermanos Crain y su padre distanc', 'KzGdybdOCY0', 1, '8.1', '2018-10-01', 'Mike Flanagan', 'Latino', '1643654578805.jpg', '2022-01-31 18:42:58', '2022-01-31 18:42:59', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` tinytext DEFAULT NULL,
  `last_name` tinytext DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `date_of_birth` datetime DEFAULT NULL,
  `genre` tinytext DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `country` tinytext DEFAULT NULL,
  `province` tinytext DEFAULT NULL,
  `city` tinytext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RolId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `user_name`, `email`, `password`, `avatar`, `phone`, `date_of_birth`, `genre`, `address`, `country`, `province`, `city`, `createdAt`, `updatedAt`, `RolId`) VALUES
(1, 'Angel Guillermo', 'Montaña', 'Angel', 'angelguillermomontania@gmail.com', '$2a$10$sB.dUv1ZPHnbi3PuyLDbJO10/Zj..eEWz5o8CZXvN1vAbaFa9OS56', '1643649793062.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-01-31 17:23:13', '2022-01-31 17:23:13', 3),
(2, 'Matias', 'Diaz', 'matidiaz032', 'matidiazee@gmail.com', '$2a$10$zHCejhbH6efs.BVgzxrCee88x4SMGFuD9Geit7heTWetS6JsL4x8K', 'default-avatar.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-02-02 02:51:18', '2022-02-02 02:51:20', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `idioms`
--
ALTER TABLE `idioms`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `moviefavorites`
--
ALTER TABLE `moviefavorites`
  ADD PRIMARY KEY (`MovieId`,`UserId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indices de la tabla `moviegenre`
--
ALTER TABLE `moviegenre`
  ADD PRIMARY KEY (`MovieId`,`GenreId`),
  ADD KEY `GenreId` (`GenreId`);

--
-- Indices de la tabla `movieidiom`
--
ALTER TABLE `movieidiom`
  ADD PRIMARY KEY (`IdiomId`,`MovieId`),
  ADD KEY `MovieId` (`MovieId`);

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `PriceId` (`PriceId`);

--
-- Indices de la tabla `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `seriefavorites`
--
ALTER TABLE `seriefavorites`
  ADD PRIMARY KEY (`SerieId`,`UserId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indices de la tabla `seriegenre`
--
ALTER TABLE `seriegenre`
  ADD PRIMARY KEY (`SerieId`,`GenreId`),
  ADD KEY `GenreId` (`GenreId`);

--
-- Indices de la tabla `serieidiom`
--
ALTER TABLE `serieidiom`
  ADD PRIMARY KEY (`IdiomId`,`SerieId`),
  ADD KEY `SerieId` (`SerieId`);

--
-- Indices de la tabla `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PriceId` (`PriceId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `RolId` (`RolId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `idioms`
--
ALTER TABLE `idioms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `series`
--
ALTER TABLE `series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `moviefavorites`
--
ALTER TABLE `moviefavorites`
  ADD CONSTRAINT `moviefavorites_ibfk_1` FOREIGN KEY (`MovieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `moviefavorites_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `moviegenre`
--
ALTER TABLE `moviegenre`
  ADD CONSTRAINT `moviegenre_ibfk_1` FOREIGN KEY (`MovieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `moviegenre_ibfk_2` FOREIGN KEY (`GenreId`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `movieidiom`
--
ALTER TABLE `movieidiom`
  ADD CONSTRAINT `movieidiom_ibfk_1` FOREIGN KEY (`IdiomId`) REFERENCES `idioms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `movieidiom_ibfk_2` FOREIGN KEY (`MovieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`PriceId`) REFERENCES `prices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `seriefavorites`
--
ALTER TABLE `seriefavorites`
  ADD CONSTRAINT `seriefavorites_ibfk_1` FOREIGN KEY (`SerieId`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `seriefavorites_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `seriegenre`
--
ALTER TABLE `seriegenre`
  ADD CONSTRAINT `seriegenre_ibfk_1` FOREIGN KEY (`SerieId`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `seriegenre_ibfk_2` FOREIGN KEY (`GenreId`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `serieidiom`
--
ALTER TABLE `serieidiom`
  ADD CONSTRAINT `serieidiom_ibfk_1` FOREIGN KEY (`IdiomId`) REFERENCES `idioms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `serieidiom_ibfk_2` FOREIGN KEY (`SerieId`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `series`
--
ALTER TABLE `series`
  ADD CONSTRAINT `series_ibfk_1` FOREIGN KEY (`PriceId`) REFERENCES `prices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`RolId`) REFERENCES `rols` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
