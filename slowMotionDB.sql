-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: slow_motion_DB
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bank` tinytext DEFAULT NULL,
  `type` tinytext DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `expiration_date` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Acción'),(2,'Animación'),(3,'Aventura'),(4,'Bélica'),(5,'Ciencia Ficción'),(6,'Comedia'),(7,'Documental'),(8,'Drama'),(9,'Fantasía'),(10,'Post-apocalíptico'),(11,'Suspenso'),(12,'Terror');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `idioms`
--

DROP TABLE IF EXISTS `idioms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `idioms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` tinytext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `idioms`
--

LOCK TABLES `idioms` WRITE;
/*!40000 ALTER TABLE `idioms` DISABLE KEYS */;
INSERT INTO `idioms` VALUES (1,'Inglés'),(2,'Latino'),(3,'Español'),(4,'Alemán'),(5,'Japones'),(6,'Coreano'),(7,'Chino');
/*!40000 ALTER TABLE `idioms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moviefavorites`
--

DROP TABLE IF EXISTS `moviefavorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `moviefavorites` (
  `MovieId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`MovieId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `moviefavorites_ibfk_1` FOREIGN KEY (`MovieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moviefavorites_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moviefavorites`
--

LOCK TABLES `moviefavorites` WRITE;
/*!40000 ALTER TABLE `moviefavorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `moviefavorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moviegenre`
--

DROP TABLE IF EXISTS `moviegenre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `moviegenre` (
  `MovieId` int(11) NOT NULL,
  `GenreId` int(11) NOT NULL,
  PRIMARY KEY (`MovieId`,`GenreId`),
  KEY `GenreId` (`GenreId`),
  CONSTRAINT `moviegenre_ibfk_1` FOREIGN KEY (`MovieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `moviegenre_ibfk_2` FOREIGN KEY (`GenreId`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moviegenre`
--

LOCK TABLES `moviegenre` WRITE;
/*!40000 ALTER TABLE `moviegenre` DISABLE KEYS */;
INSERT INTO `moviegenre` VALUES (1,1),(1,6);
/*!40000 ALTER TABLE `moviegenre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movieidiom`
--

DROP TABLE IF EXISTS `movieidiom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movieidiom` (
  `IdiomId` int(11) NOT NULL,
  `MovieId` int(11) NOT NULL,
  PRIMARY KEY (`IdiomId`,`MovieId`),
  KEY `MovieId` (`MovieId`),
  CONSTRAINT `movieidiom_ibfk_1` FOREIGN KEY (`IdiomId`) REFERENCES `idioms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `movieidiom_ibfk_2` FOREIGN KEY (`MovieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movieidiom`
--

LOCK TABLES `movieidiom` WRITE;
/*!40000 ALTER TABLE `movieidiom` DISABLE KEYS */;
INSERT INTO `movieidiom` VALUES (1,1),(2,1);
/*!40000 ALTER TABLE `movieidiom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `PriceId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  KEY `PriceId` (`PriceId`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`PriceId`) REFERENCES `prices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Zombieland','Después de que un virus transforma a la mayoría de las personas en zombis, los humanos sobrevivientes deben luchar contra los muertos vivientes hambrientos. Cuatro sobrevivientes, Tallahassee y sus amigos, Columbus, Wichita y Little Rock, respetan una serie de reglas de supervivencia y estrategias para matar zombis mientras se dirigen a un refugio seguro en Los Ángeles.','4KLz9-lUOzo',88,4.0,'2009-10-01','Ruben Fleischer','Latino','1643647162608.jpg','2022-01-31 16:39:22','2022-01-31 16:39:23',1);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prices`
--

DROP TABLE IF EXISTS `prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buy` int(11) DEFAULT NULL,
  `rental` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prices`
--

LOCK TABLES `prices` WRITE;
/*!40000 ALTER TABLE `prices` DISABLE KEYS */;
INSERT INTO `prices` VALUES (1,800,500,15),(2,1500,1000,30);
/*!40000 ALTER TABLE `prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(2) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,0),(2,1),(3,2);
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seriefavorites`
--

DROP TABLE IF EXISTS `seriefavorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seriefavorites` (
  `SerieId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`SerieId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `seriefavorites_ibfk_1` FOREIGN KEY (`SerieId`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `seriefavorites_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seriefavorites`
--

LOCK TABLES `seriefavorites` WRITE;
/*!40000 ALTER TABLE `seriefavorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `seriefavorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seriegenre`
--

DROP TABLE IF EXISTS `seriegenre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seriegenre` (
  `SerieId` int(11) NOT NULL,
  `GenreId` int(11) NOT NULL,
  PRIMARY KEY (`SerieId`,`GenreId`),
  KEY `GenreId` (`GenreId`),
  CONSTRAINT `seriegenre_ibfk_1` FOREIGN KEY (`SerieId`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `seriegenre_ibfk_2` FOREIGN KEY (`GenreId`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seriegenre`
--

LOCK TABLES `seriegenre` WRITE;
/*!40000 ALTER TABLE `seriegenre` DISABLE KEYS */;
INSERT INTO `seriegenre` VALUES (1,12);
/*!40000 ALTER TABLE `seriegenre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serieidiom`
--

DROP TABLE IF EXISTS `serieidiom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serieidiom` (
  `IdiomId` int(11) NOT NULL,
  `SerieId` int(11) NOT NULL,
  PRIMARY KEY (`IdiomId`,`SerieId`),
  KEY `SerieId` (`SerieId`),
  CONSTRAINT `serieidiom_ibfk_1` FOREIGN KEY (`IdiomId`) REFERENCES `idioms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `serieidiom_ibfk_2` FOREIGN KEY (`SerieId`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serieidiom`
--

LOCK TABLES `serieidiom` WRITE;
/*!40000 ALTER TABLE `serieidiom` DISABLE KEYS */;
INSERT INTO `serieidiom` VALUES (1,1),(2,1);
/*!40000 ALTER TABLE `serieidiom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `series` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `trailer` varchar(300) DEFAULT NULL,
  `seasons` int(11) DEFAULT NULL,
  `rating` decimal(3,1) unsigned DEFAULT NULL,
  `age` date DEFAULT NULL,
  `director` tinytext DEFAULT NULL,
  `subtitle` tinytext DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PriceId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PriceId` (`PriceId`),
  CONSTRAINT `series_ibfk_1` FOREIGN KEY (`PriceId`) REFERENCES `prices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1,'The Walking Dead','The Walking Dead tiene lugar después del inicio de un apocalipsis zombi mundial. Los zombis, coloquialmente llamados «caminantes», se arrastran hacia los humanos vivos y otras criaturas para comerlos; se sienten atraídos por el ruido, como los disparos, y por diferentes aromas, por ejemplo humanos.','uwgohmYnDu0&t=6s',11,4.1,'2010-10-01','Frank Darabont','Latino','1643649599697.jpg','2022-01-31 17:19:59','2022-01-31 17:20:00',2);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `RolId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `RolId` (`RolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`RolId`) REFERENCES `rols` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Angel Guillermo','Montaña','Angel','angelguillermomontania@gmail.com','$2a$10$sB.dUv1ZPHnbi3PuyLDbJO10/Zj..eEWz5o8CZXvN1vAbaFa9OS56','1643649793062.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-01-31 17:23:13','2022-01-31 17:23:13',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'slow_motion_DB'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-31 14:24:10
