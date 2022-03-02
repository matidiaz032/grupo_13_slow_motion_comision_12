-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: slow_motion_db
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
  `bank` tinytext NOT NULL,
  `type` tinytext NOT NULL,
  `number` int(11) NOT NULL,
  `expiration_date` date NOT NULL,
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
  `name` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Acción'),(2,'Animación'),(3,'Aventura'),(4,'Bélica'),(5,'Ciencia Ficción'),(6,'Comedia'),(7,'Documental'),(8,'Drama'),(9,'Familiar'),(10,'Post-apocalíptico'),(11,'Suspenso'),(12,'Terror'),(13,'Romántico');
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
  `name` tinytext NOT NULL,
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
INSERT INTO `moviegenre` VALUES (1,1),(1,6),(1,10),(2,1),(2,6),(3,6),(4,1),(4,3),(4,5),(5,1),(5,6),(6,4),(6,8),(7,8),(7,11),(8,8),(9,8),(10,8),(11,5),(11,10),(12,1),(12,10),(13,11),(13,12),(14,2),(14,6),(14,9),(15,1),(15,2),(15,3),(16,2),(16,6),(16,9),(17,1),(17,10),(18,2),(18,3),(18,5),(18,9),(19,2),(19,5),(19,8),(20,2),(20,13),(21,1),(21,3),(21,5),(22,4),(22,8),(23,4),(24,4),(24,8),(26,7),(27,7),(28,7),(29,7),(30,11),(30,12),(31,3),(31,11),(32,11),(32,12),(33,8),(33,9),(34,4),(34,8),(35,1),(35,12),(36,11),(36,12),(37,8),(37,13),(38,8),(38,13),(39,4),(39,8),(39,13),(40,6),(40,13),(41,11),(41,12),(42,11),(42,12),(43,11),(43,12),(44,12),(45,1),(45,3),(45,5),(46,6),(46,13);
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
INSERT INTO `movieidiom` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18),(1,19),(1,20),(1,21),(1,22),(1,23),(1,24),(1,26),(1,28),(1,29),(1,30),(1,31),(1,32),(1,33),(1,34),(1,35),(1,39),(1,40),(1,41),(1,42),(1,43),(1,44),(1,45),(2,1),(2,3),(2,4),(2,8),(2,11),(2,12),(2,13),(2,14),(2,15),(2,16),(2,18),(2,20),(2,21),(2,22),(2,23),(2,24),(2,27),(2,30),(2,31),(2,33),(2,34),(2,45),(2,46),(3,10),(3,11),(3,13),(3,18),(3,19),(3,26),(3,28),(3,29),(3,36),(3,37),(3,38),(4,34),(5,15),(5,17),(5,19),(5,20),(6,7);
/*!40000 ALTER TABLE `movieidiom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movieorders`
--

DROP TABLE IF EXISTS `movieorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movieorders` (
  `MovieId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`MovieId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `movieorders_ibfk_1` FOREIGN KEY (`MovieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `movieorders_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movieorders`
--

LOCK TABLES `movieorders` WRITE;
/*!40000 ALTER TABLE `movieorders` DISABLE KEYS */;
/*!40000 ALTER TABLE `movieorders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `trailer` varchar(300) NOT NULL,
  `duration` int(11) NOT NULL,
  `rating` decimal(3,1) NOT NULL,
  `age` date NOT NULL,
  `director` tinytext NOT NULL,
  `subtitle` tinytext DEFAULT 'No',
  `image` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PriceId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  KEY `PriceId` (`PriceId`),
  CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`PriceId`) REFERENCES `prices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Zombieland','Después de que un virus transforma a la mayoría de las personas en zombis, los humanos sobrevivientes deben luchar contra los muertos vivientes hambrientos. Cuatro sobrevivientes, Tallahassee y sus amigos, Columbus, Wichita y Little Rock, respetan una serie de reglas de supervivencia y estrategias para matar zombis mientras se dirigen a un refugio seguro en Los Ángeles.','4KLz9-lUOzo',88,4.0,'2009-10-01','Ruben Fleischer','Latino','1643647162608.jpg','2022-01-31 16:39:22','2022-02-04 22:59:33',1),(2,'Comando Especial','Cuando los policías Schmidt y Jenko se unen a la unidad secreta Jump Street, ellos usan sus apariencias juveniles para trabajar de forma encubierta como estudiantes de preparatoria. Ellos cambian sus placas y armas por mochilas e intentan eliminar a un grupo narcotraficante. Schmidt y Jenko descubren que la preparatoria ya no es lo mismo y deben enfrentarse al terror y la ansiedad de la adolescencia que creían haber superado.','BFwi5Uv3J4U',109,7.0,'2012-03-01','Phil Lord','Latino','1643650583914.jpg','2022-01-31 17:36:23','2022-01-31 17:36:24',3),(3,'Ted','Cuando John Bennett (Mark Wahlberg) era un niño pequeño, pidió el deseo de que Ted (Seth MacFarlane), su querido oso de peluche, cobrara vida. Treinta años más tarde, Ted continúa siendo el compañero de John, ante el disgusto de Lori (Mila Kunis), la novia de John. Aunque el disgusto de Lori se ve agravado por el constante consumo de la pareja de cerveza y marihuana, ella no es quien está más decepcionada con John; ya que puede necesitar la intervención del juguete de John para hacerlo madurar.','_0RXbJtBk68',106,6.4,'2012-06-01','Seth MacFarlane','Latino','1643650946938.jpg','2022-01-31 17:42:27','2022-01-31 17:42:27',4),(4,'Thor Ragnarok','Thor está preso en el otro extremo del universo. Necesita regresar a tiempo para evitar que la todopoderosa Hela destruya su mundo, pero para escapar de su confinamiento y evitar el apocalipsis tendrá que vencer antes al increíble Hulk en un torneo de gladiadores.','ue80QwXMRHg',130,7.4,'2017-11-01','Taika Waititi','No','1643654038530.png','2022-01-31 18:33:58','2022-02-05 05:23:49',8),(5,'Un espia y medio','Un agente de la CIA que solía sufrir acoso escolar se reencuentra con sus compañeros en una reunión de antiguos alumnos, aunque ahora él es musculoso y fuerte. Allí recluta al que era el chico más popular de la escuela, quien ahora tiene una vida monótona y predecible, para que le ayude en una peligrosa misión en la que ambos tendrán que arriesgarlo todo.','eQnbwxzCzQ8',114,6.9,'2016-08-01','Rawson Marshall Thurber','Latino','1643654249644.jpg','2022-01-31 18:37:29','2022-01-31 18:37:29',9),(6,'Hasta el último hombre','La película está basada en la historia real del soldado del Ejército de EE. UU. Desmond Doss, un cristiano Adventista del Séptimo día, que se negó a portar armas en el frente, fue objeto de burla y persecución y que, a pesar de aquello, fue condecorado con la Medalla de Honor por el presidente Harry S. Truman, por haber salvado la vida a más de setenta y cinco hombres bajo el constante fuego enemigo en el acantilado de Maeda durante la brutal batalla de Okinawa, en la Segunda Guerra Mundial.','QJUsNs7tLFA',139,8.6,'2016-10-01','Mel Gibson','Latino','1643654992066.jpg','2022-01-31 18:49:52','2022-02-04 23:51:48',11),(7,'Parasite','Tanto Gi Taek como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo, empieza a impartir clases particulares en la adinerada casa de los Park, las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, entablan una relación de resultados imprevisibles.','9kLlmWPilSE',132,8.0,'2019-05-01','Bong Joon-ho','Latino','1644017262106.jpg','2022-02-04 23:27:42','2022-02-04 23:27:42',12),(8,'En busca de la felicidad','La vida es una lucha para Chris Gardner. Expulsado de su apartamento, él y su joven hijo se encuentran solos sin ningún lugar a donde ir. A pesar de que Chris eventualmente consigue trabajo como interno en una prestigiada firma financiera, la posición no le da dinero. El dúo debe vivir en un albergue y enfrentar muchas dificultades, pero Chris no se da por vencido y lucha por conseguir una vida mejor para él y su hijo.','rxtGMH7OrLc',117,7.7,'2007-02-01','Gabriele Muccino','Latino','1644017459008.jpg','2022-02-04 23:30:59','2022-02-04 23:30:59',13),(9,'Crisis','Tres historias entrelazadas sobre el negocio de las drogas de farmacia: un agente infiltrado en una operación con la mafia armenia y china, una arquitecta exadicta a los analgésicos y un profesor universitario que hace estudios para una farmacéutica.\r\n','3vfifr5L-8I',118,7.3,'2021-03-01','Nicholas Jarecki','Latino','1644017729233.jpg','2022-02-04 23:35:29','2022-02-04 23:35:29',14),(10,'Sueño de fuga','Andrew Dufresne es un hombre inocente que es acusado del asesinato de su mujer. Tras ser condenado a cadena perpetua, es enviado a la cárcel de Shawshank, en Maine. Con el paso de los años, Andrew conseguirá ganarse la confianza del director del centro y el respeto de los otros convictos, especialmente de Red, el jefe de la mafia.','xB4nJg0fyE0',142,8.6,'1995-03-01','Frank Darabont','Latino','1644017978904.jpg','2022-02-04 23:39:38','2022-02-04 23:39:39',15),(11,'Soy Leyenda','Año 2012. Robert Neville es un brillante científico, que, sin embargo, no ha podido impedir la expansión de un incurable virus creado por el hombre. Neville, inexplicablemente inmune al contagio, es el último superviviente humano de la ciudad de Nueva York y, quizá, del mundo. Pero Neville no está completamente solo. Víctimas mutantes de la plaga merodean en las sombras, vigilando cada uno de los movimientos del científico y esperando que cometa un error fatal para beber su sangre.','TXQ7kRnFXS4',101,6.5,'2008-01-01','Francis Lawrence','Latino','1644018239694.jpg','2022-02-04 23:43:59','2022-02-04 23:44:00',16),(12,'Resident Evil 4: la resurrección','En un mundo invadido por los muertos vivientes, Alice continúa su batalla en contra de una corporación, deteniendo a los sobrevivientes a lo largo del camino. Alice, un viejo amigo y sus compañeros se dirigen a un supuesto sitio seguro en Los Ángeles. Sin embargo, en vez de encontrar un santuario, ellos descubren una ciudad controlada por los zombies y una trampa que está por sorprenderlos.','sOcJOafEZdA',100,4.6,'2010-10-01','Paul W. S. Anderson','No','1644018623094.jpg','2022-02-04 23:50:23','2022-02-04 23:50:23',17),(13,'His house','Una pareja de refugiados realiza una angustiosa huida desde Sudán del Sur, país devastado por la guerra, pero luego deben luchar por adaptarse a su nueva vida en un pueblo inglés que tiene un mal al acecho bajo la superficie.','CUOixtXvUrc',93,8.3,'2020-01-01','Remi Weekes','Latino','1644019079430.jpg','2022-02-04 23:57:59','2022-02-04 23:57:59',18),(14,'Toy Story','Los juguetes de Andy, un niño de seis años, temen que un nuevo regalo les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito, trata de tranquilizarlos hasta que aparece Buzz Lightyear. Lo peor es que el arrogante Buzz se cree que es una auténtico astronauta en plena misión para regresar a su planeta.','4KPTXpQehio',81,9.0,'1995-11-01','John Lasseter','No','1644019740134.jpg','2022-02-05 00:09:00','2022-02-05 05:39:32',19),(15,'Kimetsu no Yaiba: Mugen Ressha-hen','Tanjiro, Nezuko, Zenitsu e Inosuke suben a un tren para ayudar al Hashira de la Llama Kyojuro Rengoku en su misión de dar caza a un demonio que ha matado a muchos Cazadores de Demonios. Poco después de subir, todos ellos son encantados y caen en un profundo sueño. Enmu, de rango inferior a uno de los doce Kizuki, ordena a cuatro pasajeros, todos ellos aquejados de un grave insomnio, que entren en los sueños de los Cazadores de Demonios y destruyan sus núcleos espirituales para que no puedan volv','-AwLMRgcEoA',117,8.4,'2020-10-01','Haruo Sotozaki','Latino','1644035921804.jpg','2022-02-05 04:38:41','2022-02-05 04:38:42',20),(16,'Un jefe en pañales 2','Ambientada 30 años después de los acontecimientos de la primera película​ Tim Templeton ya ha crecido por completo y vive con su esposa Carol y sus dos hijas, Tabitha de 7 años y la bebé Tina. El hermano menor de Tim, Ted Jr., es ahora un exitoso CEO y nunca está presente, sino que envía generosos obsequios a Tim y su familia. Tabitha muestra un comportamiento más adulto, y una noche, mientras Tim, desanimado, se pregunta en quién se está convirtiendo su hija, oye algo en la habitación de Tina. ','rLeDzAixQwY',107,7.9,'2021-07-01','Tom McGrath','No','1644036974606.jpg','2022-02-05 04:56:14','2022-02-05 04:56:15',21),(17,'Akira','En el año 2019, han pasado 31 años desde el estallido de la Tercera Guerra Mundial, en la ciudad ficticia de Neo-Tokio, Shotaro Kaneda sale junto con su pandilla de motociclistas bōsōzoku, llamada los Cápsulas, a pelear contra una pandilla rival conocida como los Payasos. Sin embargo, el mejor amigo de Kaneda, Tetsuo Shima, sufre un accidente cuando choca su motocicleta contra Takashi, un niño esper que fue liberado de un laboratorio secreto del gobierno por una organización revolucionaria cland','ooKBenGK3R4',124,7.6,'1988-07-01','Katsuhiro Otomo','Latino','1644037283083.jpg','2022-02-05 05:01:23','2022-02-05 05:01:23',22),(18,'Space Jam 2','Atrapado en el espacio digital, la superestrella del baloncesto LeBron James se une a la banda de los Looney Tunes para derrotar al Goon Squad en un juego de baloncesto y salvar a su hijo.','mVTny9OmJGc',115,6.7,'2021-07-01','	 Malcolm D. Lee','Latino','1644037599931.jpg','2022-02-05 05:06:39','2022-02-05 05:06:40',23),(19,'Ghost in the Shell ','En esta película de animación japonesa, un agente cibernético debe detener a un pirata informático experto en introducirse en los sistemas de programación de híbridos mitad humanos, mitad robots, antes de que pueda lograr sus perversos objetivos. Sin embargo, cuando los detectives descubren quien se esconde tras el pirata, toda la trama toma un giro inesperado.','VO1H_TnQ20s',82,7.3,'1995-11-01','	 Mamoru Oshii','Latino','1644037974523.jpg','2022-02-05 05:12:54','2022-02-05 05:12:56',24),(20,'Your name','Mitsuha es una adolescente que detesta su vida rural en el campo. Por otro lado, Taki es un chico que vive en Tokio y sueña con ser un artista o un arquitecto. Los destinos de estos jóvenes se entrelazan la noche en que dos estrellas caen del cielo, y comienzan a intercambiar sus cuerpos de la noche a la mañana. Con el pasar del tiempo, desarrollan maneras de comunicarse entre ellos y un creciente anhelo de conocerse en persona.','N0nvoAv5q8M&t=63s',106,8.6,'2016-07-01','Makoto Shinkai','Latino','1644038488896.jpg','2022-02-05 05:21:29','2022-02-05 05:21:29',25),(21,'Avengers: End Game','Después de los eventos devastadores de \"Avengers: Infinity War\", el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar detenerlo y restaurar el orden en el universo de una vez por todas.','_kj66UyCGRY',181,9.0,'2019-04-01','Anthony y Joe Russo','Latino','1644038914016.jpg','2022-02-05 05:28:34','2022-02-05 05:28:34',26),(22,'Fury','Al mando del veterano sargento Wardaddy, una brigada de cinco soldados americanos a bordo de un tanque, luchan contra un ejército nazi al borde de la desesperación ya que los alemanes sabían que su derrota estaba ya cantada por aquel entonces.','DNHuK1rteF4',134,6.6,'2014-10-01','David Ayer','No','1644039250426.jpg','2022-02-05 05:34:10','2022-02-05 05:34:10',27),(23,'Dunkerque','En mayo de 1940, durante la Segunda Guerra Mundial, Alemania avanza hacia Francia, atrapando a las tropas aliadas en las playas de Dunkerque. Bajo protección aérea y terrestre de las fuerzas británicas y francesas, las tropas son evacuadas lenta y metódicamente de la playa utilizando cualquier embarcación militar o civil disponible. Al final de la heroica misión, 330.000 soldados franceses, británicos, belgas y holandeses son evacuados sanos y salvos.','qpPHBdI4mU8',106,7.1,'2017-07-01','	 Christopher Nolan','Latino','1644039477718.jpg','2022-02-05 05:37:57','2022-02-05 05:37:57',5),(24,'El pianista','Wladyslaw Szpilman, un brillante pianista polaco de origen judío, vive con su familia en el ghetto de Varsovia. Cuando, en 1939, los alemanes invaden Polonia, consigue evitar la deportación gracias a la ayuda de algunos amigos. Pero tendrá que vivir escondido y completamente aislado durante mucho tiempo, y para sobrevivir tendrá que afrontar constantes peligros.','yDA1mK6v-ME',151,8.5,'2002-09-01','Roman Polanski','Latino','1644040040272.jpg','2022-02-05 05:47:20','2022-02-05 05:47:20',28),(26,'Morir para contar','Un grupo de reporteros de guerra recuerda las experiencias vividas en los diversos conflictos que presenciaron en primera persona. Cada uno de ellos hablará de un conflicto en particular, desde la guerra de Vietnam hasta nuestros días. Al mismo tiempo conoceremos de cerca el trabajo de quienes brindan ayuda a los periodistas que padecen estrés postraumático.','_lF_QG9Re2A',87,6.7,'2018-06-01','Hernán Zin','Latino','1644040504728.jpg','2022-02-05 05:55:04','2022-02-05 05:55:04',29),(27,'El agente topo','Sergio se convierte en infiltrado y espía tras pasar un casting orquestrado por el detective Rómulo. Este necesita que Sergio se infiltre en un hogar de retirada por petición e la hija preocupada de un paciente. La cliente considera que su madre podría estar siendo maltratada y quiere saber lo que ocurre con certeza. Sin embargo, Sergio no es el agente 007 y lo que descubre está muy lejos de la realidad.','3xW2FJaVd-E',90,8.3,'2020-01-01','Maite Alberdi','Latino','1644040700616.jpg','2022-02-05 05:58:20','2022-02-05 05:58:20',30),(28,'American Factory','En el Ohio postindustrial, un multimillonario chino abre una fábrica en una planta abandonada de General Motors, contratando a dos mil estadounidenses. Los primeros días de esperanza y optimismo dan paso a los reveses a medida que ambas culturas chocan.','er-gnbRaO6Q',110,8.4,'2019-01-01','Steven Bognar y Julia Reichert','Latino','1644041168195.jpg','2022-02-05 06:06:08','2022-02-05 06:06:08',31),(29,'Antarctica: A Year on Ice','Anthony Powell tardó más de diez años en filmar esta película para captar lo que se siente en este lugar inmenso y desolado. En la Antártida sólo hay dos estaciones: el verano y un invierno duro y solitario.','2RsWnAUVWQY',92,7.6,'2013-07-01','Anthony Powell','Latino','1644041515965.jpg','2022-02-05 06:11:56','2022-02-05 06:11:56',32),(30,'Fragmentado','A pesar de que Kevin le ha demostrado a su psiquiatra de confianza que posee 23 personalidades diferentes, aún queda una misteriosa por emerger decidida a dominar a todas las demás. Obligado a raptar a tres chicas adolescentes encabezadas por la decidida y observadora Casey, Kevin lucha por sobrevivir contra todas sus personalidades y la gente que le rodea a medida que las paredes de sus compartimentos mentales se derrumban.','3fQ82KWRRfo',117,7.3,'2016-09-01','M. Night Shyamalan','Latino','1644041814449.jpg','2022-02-05 06:16:54','2022-02-05 06:16:54',33),(31,'Ángeles y demonios','Robert Langdon, experto profesor en temas religiosos de la Universidad de Harvard, descubre evidencias del resurgimiento de una antigua hermandad secreta conocida como los Illuminati, la organización clandestina más poderosa de la historia.','kS3HjPPiofM',138,7.0,'2009-05-01','Ron Howard','Latino','1644042214955.jpg','2022-02-05 06:23:34','2022-02-05 06:23:35',27),(32,'A Quiet Place','En un mundo invadido y arrasado por unos letales extraterrestres que se guían por el sonido, Evelyn y Lee Abbott sobreviven con sus hijos en una granja aislada en el bosque, sumidos en el más profundo silencio. Mientras no hagan ruido, estarán a salvo.','0aJIudUnXik',90,9.2,'2018-04-01','John Krasinski','Latino','1644042512009.jpg','2022-02-05 06:28:33','2022-02-05 06:28:34',34),(33,'La razón de estar contigo','Un perro desea descubrir el propósito de su vida al enseñar a reír y amar a seres humanos a lo largo de varias vidas.','t0vbLxwIDv8',120,8.7,'2017-01-01','Lasse Hallström','Latino','1644042825807.jpg','2022-02-05 06:33:45','2022-02-05 06:33:46',13),(34,'La lista de Schindler','El empresario alemán Oskar Schindler, miembro del Partido Nazi, pone en marcha un elaborado, costoso y arriesgado plan para salvar a más de mil judíos del Holocausto.','5btATkiDrI4',195,9.2,'1993-11-01','Steven Spielberg y Marek Brodzki','Latino','1644090761986.jpg','2022-02-05 19:52:41','2022-02-05 19:52:42',33),(35,'Isabelle, La Última Evocación','Una pareja lucha por sobrevivir a la amenaza de una presencia oscura después de mudarse a un vecindario de Nueva Inglaterra.','3ukACGas3NY',80,6.5,'2018-10-01','Robert Heydon','Latino','1644155617035.jpg','2022-02-06 13:53:37','2022-02-06 13:53:37',49),(36,'ruega por nosotros','Un periodista con poca suerte descubre una serie de milagros en un pueblo de Nueva Inglaterra. Después de investigar los acontecimientos con el objetivo de volver al estrellado descubre que el pueblo esconde algo muy oscuro.','a_BYIlWcbVg',99,6.5,'2021-04-01','Evan Spiliotopoulos','No','1644158294490.jpg','2022-02-06 14:37:38','2022-02-06 14:38:14',50),(37,'Contigo a muerte','Después de que Rei ayuda a la mujer que ama a escapar de su marido abusivo, las dos deben huir y sus sentimientos mutuos crecen.','zk93GD6brIc',142,5.0,'2021-04-01','Ryuichi Hiroki','No','1644159219979.jpg','2022-02-06 14:53:40','2022-02-06 14:53:40',51),(38,'Te quiero como amigo','Thibault, un romántico empedernido, cree que su suerte está a punto de cambiar tras conocer a Rose. Sin embargo, no sabe si podrá pasar de ser solo un amigo a convertirse en el hombre de su vida.','vpJD-Uf5gMs&t=11s',88,8.0,'2021-09-01','Charles Van Tieghem','No','1644159999529.jpg','2022-02-06 15:06:39','2022-02-06 15:06:39',52),(39,'Firebird','Sergey es un joven soldado raso en la base de la Fuerza Aérea Soviética que espera los últimos días de su servicio militar junto a Luisa, la secretaria del comandante de la base. Cuando un apuesto piloto de caza, Roman, llega a la base, ambos ponen sus ojos en él. Con el cielo en juego, Pájaro de Fuego pone en marcha un peligroso triángulo amoroso bajo el ojo del régimen soviético que todo lo ve durante el apogeo de la Guerra Fría. Basada en una historia real, este magnífico y arrollador drama h','pwninLJt_1w',107,8.0,'2021-03-01','Peeter Rebane','Latino','1644161317910.png','2022-02-06 15:28:37','2022-02-06 15:28:38',53),(40,'El mapa de los instantes perfectos','Mark, un adolescente ingenioso y ocurrente, vive el mismo día una y otra vez. En una biblioteca, conoce a la misteriosa Margaret y, en ese momento, su vida da un vuelco al enterarse de que ella también está atrapada en un bucle temporal infinito. Juntos, intentan encontrar una salida.','rFuCfDFB2Kg',99,6.0,'2021-02-01','Ian Samuels','Latino','1644161810558.jpg','2022-02-06 15:36:50','2022-02-06 15:36:50',54),(41,'Candyman','Una secuela de la película de terror de 1992, Candyman. El hombre del saco, con las manos de garfio y que escupe enjambres de abeja, regresa al vecindario de Chicago, ahora gentrificado, donde comenzó la leyenda.','DFa8Cj3UpI4',91,5.0,'2021-08-01','Nia DaCosta','Latino','1644162392744.jpg','2022-02-06 15:46:32','2022-02-06 15:46:32',55),(42,'Escape room 2: reto mortal','Continuación del éxito de terror \"Escape Room\" sobre una edición mortal del divertido juego en el que los participantes tienen que librarse de acertijos en las habitaciones.','zXA0nrukD0c',88,7.0,'2021-07-01','Adam Robitel','Latino','1644162841723.jpg','2022-02-06 15:54:01','2022-02-06 15:54:02',56),(43,'La 8.ª noche','Con un hacha en su mano, un monje persigue a un espíritu milenario que posee a los humanos y desata el infierno en la Tierra.','Iymuid2D_k8',115,7.0,'2021-07-01','Kim Tae-hyoung','Latino','1644163105549.jpg','2022-02-06 15:58:25','2022-02-06 15:58:25',57),(44,'El exorcismo de Carmen Farías','Carmen recibe una casa como herencia, pero pronto descubre que su abuela le ha dejado mucho más que eso.','Iymuid2D_k8',93,2.0,'2021-05-01','Rodrigo Fiallega','Latino','1644163388423.jpg','2022-02-06 16:03:08','2022-02-06 16:03:08',58),(45,'Avengers: Infinity War','Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.','823iAZOEKt8',149,9.0,'2018-04-01','Anthony y Joe Russo','Latino','1644191413741.jpg','2022-02-06 23:50:14','2022-02-06 23:50:27',59),(46,'El resort del amor','La aspirante a estrella del pop Erica acepta dar un concierto en la boda de su exnovio, que se celebra en el lujoso resort de una isla. Mientras tratan de mantener su relación pasada en secreto, se da cuenta de que todavía lo ama.','9joN7NF57fg',101,5.0,'2021-07-01','Steven Tsuchida','No','1644346980204.jpg','2022-02-08 19:03:00','2022-02-08 19:03:00',15);
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
  `buy` int(11) NOT NULL,
  `rental` int(11) NOT NULL,
  `discount` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prices`
--

LOCK TABLES `prices` WRITE;
/*!40000 ALTER TABLE `prices` DISABLE KEYS */;
INSERT INTO `prices` VALUES (1,800,500,15),(2,1500,1000,30),(3,700,500,0),(4,650,400,0),(5,900,550,5),(6,1200,750,10),(7,600,350,0),(8,1300,750,40),(9,900,600,0),(10,1350,800,5),(11,850,600,10),(12,1200,750,25),(13,1000,650,30),(14,1400,900,50),(15,800,550,10),(16,800,400,15),(17,750,450,5),(18,1000,650,35),(19,600,400,20),(20,900,600,30),(21,600,350,5),(22,500,300,0),(23,1400,850,50),(24,600,400,10),(25,800,600,15),(26,1500,900,40),(27,950,600,35),(28,1100,650,45),(29,700,400,5),(30,1300,800,25),(31,700,450,0),(32,750,500,0),(33,700,400,10),(34,1400,800,35),(35,1600,900,30),(36,1800,1000,15),(37,1400,800,5),(38,800,500,0),(39,1300,750,20),(40,1500,850,45),(41,1100,650,0),(42,1000,600,10),(43,900,550,0),(44,1400,850,25),(45,1500,850,15),(46,1000,650,45),(47,1500,850,5),(48,800,500,35),(49,950,650,15),(50,1200,850,25),(51,950,650,30),(52,1050,750,20),(53,1200,800,40),(54,1150,800,40),(55,1100,700,25),(56,1000,750,30),(57,1150,750,30),(58,800,550,15),(59,1400,850,40),(60,2000,1100,20);
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
INSERT INTO `seriegenre` VALUES (1,10),(1,12),(2,6),(2,8),(3,1),(3,11),(4,2),(5,11),(5,12),(6,5),(6,11),(7,1),(7,3),(7,5),(7,8),(8,5),(8,8),(8,11),(9,6),(10,3),(10,5),(11,1),(11,8),(12,8),(12,11),(13,8),(14,2),(14,8),(14,11),(15,1),(15,3),(15,5),(16,1),(16,3),(16,12),(17,8),(17,11),(18,1),(18,3),(18,8),(19,2),(19,3),(19,6),(20,7),(21,7),(23,11),(23,12);
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
INSERT INTO `serieidiom` VALUES (1,1),(1,2),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18),(1,19),(1,20),(1,21),(2,1),(2,2),(2,4),(2,5),(2,6),(2,7),(2,10),(2,11),(2,13),(2,14),(2,15),(2,16),(2,17),(2,18),(2,19),(3,3),(3,21),(3,23),(4,6),(5,14),(5,15),(5,16);
/*!40000 ALTER TABLE `serieidiom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `serieorders`
--

DROP TABLE IF EXISTS `serieorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `serieorders` (
  `SerieId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`SerieId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `serieorders_ibfk_1` FOREIGN KEY (`SerieId`) REFERENCES `series` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `serieorders_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `serieorders`
--

LOCK TABLES `serieorders` WRITE;
/*!40000 ALTER TABLE `serieorders` DISABLE KEYS */;
/*!40000 ALTER TABLE `serieorders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `series` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `trailer` varchar(300) NOT NULL,
  `seasons` int(11) NOT NULL,
  `rating` decimal(3,1) unsigned NOT NULL,
  `age` date NOT NULL,
  `director` tinytext NOT NULL,
  `subtitle` tinytext NOT NULL,
  `image` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PriceId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PriceId` (`PriceId`),
  CONSTRAINT `series_ibfk_1` FOREIGN KEY (`PriceId`) REFERENCES `prices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (1,'The Walking Dead','The Walking Dead tiene lugar después del inicio de un apocalipsis zombi mundial. Los zombis, coloquialmente llamados «caminantes», se arrastran hacia los humanos vivos y otras criaturas para comerlos; se sienten atraídos por el ruido, como los disparos, y por diferentes aromas, por ejemplo humanos.','uwgohmYnDu0&t=6s',11,4.1,'2010-10-01','Frank Darabont','Latino','1644192551301.jpg','2022-01-31 17:19:59','2022-02-07 00:09:11',2),(2,'Sex Education','Sex Education gira en torno a Otis, un adolescente calificado como \\\"bicho raro\\\" en el instituto, a lo que se le une el hecho de ser virgen. Sin embargo, este vive con su madre sexóloga, por lo que siempre ha tenido un amplio conocimiento respecto al tema.','mmksLpityps',3,8.3,'2019-01-01','Laurie Nunn','No','1643652935425.jpg','2022-01-31 18:15:35','2022-01-31 18:15:35',5),(3,'La casa de papel','Una banda organizada de ladrones se propone cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.','3y-6iaveY6c',3,7.8,'2017-05-01','Jesús Colmenar, Miguel Ángel Vivas','Latino','1643653404601.jpg','2022-01-31 18:23:24','2022-01-31 18:23:24',6),(4,'What if...?','El espacio explora lo que sucedería si los principales momentos de las películas del Universo Cinematográfico de Marvel ocurrieran de manera diferente.','DexqOGh_tzQ',1,6.8,'2021-08-01','Bryan Andrews','Latino','1643653718570.jpeg','2022-01-31 18:28:38','2022-01-31 18:28:39',7),(5,'La maldición de Hill House','En el verano de 1992, Hugh y Olivia Crain y sus cinco hijos, Steven, Shirley, Theodora, Luke y Eleanor (Nell), se mudaron a Hill House para renovar la mansión, venderla y construir su propia casa, diseñada por Olivia. Sin embargo, debido a reparaciones inesperadas, tienen que quedarse más tiempo, y empiezan a experimentar un creciente fenómeno paranormal, lo que resulta en una trágica pérdida y en la huida de la familia de la casa. Veintiséis años más tarde, los hermanos Crain y su padre distanc','KzGdybdOCY0',1,8.1,'2018-10-01','Mike Flanagan','Latino','1643654578805.jpg','2022-01-31 18:42:58','2022-02-05 05:40:48',10),(6,'Dark','Situada en la ficticia ciudad de Winden (Alemania), Dark sigue las secuelas de la desaparición de un niño que expone los secretos y las conexiones ocultas entre cuatro familias mientras desentrañan lentamente una siniestra conspiración de viaje en el tiempo que abarca tres generaciones.','IJ_AZCvCacw&t=5s',3,8.7,'2017-12-01','Baran bo Odar','Latino','1644043088128.jpg','2022-02-05 06:38:08','2022-02-05 06:38:08',35),(7,'Game Of Thrones','En un mundo fantástico y en un contexto medieval varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.\r\nMientras tiene lugar una guerra civil para conseguir el poder, detrás del Muro que divide el reino de Poniente y la zona norte, los muertos amenazan con librar la batalla contra los vivos.\r\nEntretanto, Daenerys Targaryen, la hij','g1IICkElV0M',8,8.9,'2011-04-01','David Benioff y D. B. Weiss','Latino','1644043399917.jpg','2022-02-05 06:43:19','2022-02-05 06:43:20',36),(8,'Black Mirror','Esta ficción hace un análisis de las nuevas tecnologías de una forma avanzada y futurista que en ocasiones amenazan la integridad de las personas. Un camino por lo peligroso, las obsesiones, la moral, la soledad y los sentimientos envueltos en diferentes mundos controlados por lo tecnológico con un final, en su mayoría, catastrófico, aunque otras veces satisfactorio.','qFPK5ISGOSw',5,8.5,'2011-12-01','Charlie Brooker','Latino','1644043731705.jpg','2022-02-05 06:48:51','2022-02-05 06:48:51',37),(9,'The office','The Office es una serie de televisión estadounidense de humor ambientada en una oficina regional de venta de papel radicada en la localidad de Scranton, en Pensilvania (Estados Unidos). Se emitió a través de la NBC en los Estados Unidos y a través de otros canales de televisión por todo el mundo.','2iKZmRR9AR4',9,7.3,'2005-03-01','Greg Daniels','Latino','1644043945250.jpg','2022-02-05 06:52:25','2022-02-05 06:52:25',38),(10,'Westworld','Westworld (Almas de metal) está ambientada en un parque de atracciones futurista dirigido por el Doctor Robert Ford (Anthony Hopkins). Las instalaciones cuentan con androides cuya apariencia física es humana, y gracias a ellos los visitantes pueden introducirse en cualquier tipo de fantasía por muy oscura que sea.','2ZE4hs77wYU',3,7.4,'2016-10-01','Jonathan Nolan y Lisa Joy','Latino','1644044186887.jpg','2022-02-05 06:56:26','2022-02-05 06:56:27',39),(11,'The blacklist','Durante décadas, el ex agente de gobierno Raymond \'Red\' Reddington (James Spader) ha sido uno de los fugitivos más buscados por el FBI. Haciendo de intermediario en negocios oscuros, \'Red\' es conocido por muchos como \'el conserje de la delincuencia\'. Red era miembro de los servicios de información del ejército.','dfY9V3wGvI0',9,7.7,'2013-09-01','Joe Carnahan','Latino','1644044413118.jpg','2022-02-05 07:00:13','2022-02-05 07:00:13',40),(12,'Mindhunter','A finales de los 70, dos agentes del FBI ampliaron las fronteras de la criminología estudiando la psicología del asesinato y acercándose peligrosamente a monstruos reales. Cameron Britton fue nominado a un Emmy por su retrato de Edmund Kemper en esta serie de David Fincher y Charlize Theron.','Fz5au4VLZjo',2,7.6,'2017-10-01','David Fincher','Latino','1644044702856.jpg','2022-02-05 07:05:02','2022-02-05 07:05:03',41),(13,'Manhunt: Unabomber','“Manhunt: Unabomber” es la recreación de la historia real de la caza de Theodore Kaczynski, un matemático y neoludista estadounidense que aterrorizó los Estados Unidos en la década de los ochenta utilizando correo bomba a personas ligadas a su análisis de la sociedad moderna.','qVK5oqnEuy8',1,7.4,'2017-08-01','Greg Yaitanes','Latino','1644045021450.jpg','2022-02-05 07:10:21','2022-02-05 07:10:21',42),(14,'Death Note','Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes.','rZzG1C2hI8M',1,8.7,'2006-10-01','	Tetsurō Araki','Latino','1644045405830.jpg','2022-02-05 07:16:45','2022-02-05 07:16:46',43),(15,'Shingeki no Kyojin','La historia se desarrolla en un mundo ficticio en el que la humanidad está al borde de la extinción a causa de unas criaturas humanoides llamadas «titanes», lo que obliga a los sobrevivientes a refugiarse en tres enormes murallas que impiden el acceso a dichos monstruos.','Vdf9A1GRHbg',4,7.7,'2013-04-01','Tetsurō Araki','Latino','1644088285921.jpg','2022-02-05 19:11:26','2022-02-05 19:11:26',44),(16,'Kimetsu no Yaiba','Ambientada en las primeras décadas del siglo XX, “Demon Slayer” (“Kimetsu no Yaiba”) sigue a Tanjiro Kamado, hijo mayor de una familia de carboneros. Un día, tras regresar a casa, descubre que su familia ha sido atacada, crimen en el que mueren su madre y cuatro de sus hermanos.','VQGCKyvzIM4',2,7.2,'2019-03-01','Haruo Sotozaki','Latino','1644088613826.jpg','2022-02-05 19:16:53','2022-02-05 19:16:54',45),(17,'Breaking Bad','Walter White (Bryan Cranston) es un frustrado profesor de química en un instituto, padre de un joven discapacitado y con una mujer (Anna Gunn) embarazada. Además, trabaja en un lavadero de vehículos por las tardes. Cuando le diagnostican un cáncer pulmonar terminal se plantea qué pasará con su familia cuando él muera. En una redada de la DEA, a la cual fue invitado por su cuñado, el agente Hank Schrader (Dean Norris), Walt reconoce a un antiguo alumno suyo, Jesse Pinkman (Aaron Paul), a quien co','rJnjxvgvkBM',5,8.9,'2008-01-01','Vince Gilligan','No','1644088930807.jpg','2022-02-05 19:22:10','2022-02-05 19:22:11',5),(18,'Vikingos','Narra las aventuras del héroe Ragnar Lothbrok, de sus hermanos vikingos y su familia, cuando él se subleva para convertirse en el rey de las tribus vikingas. Además de ser un guerrero valiente, Ragnar encarna las tradiciones nórdicas de la devoción a los dioses. Según la leyenda era descendiente directo del dios Odín.','9GgxinPwAGc',6,7.5,'2013-03-01','Michael Hirst','Latino','1644089388199.jpg','2022-02-05 19:29:48','2022-02-05 19:29:48',46),(19,'Rick and Morty','Rick acaba de mudarse a casa de su hija Beth y allí recuerda que tiene un nieto llamado Morty. Sin preguntar a nadie, decide que va a obligarle a que le acompañe a todo tipo de aventuras para que el chico se vuelva inteligente como él y no se convierta en un idiota como Jerry, padre de Morty y yerno de Rick.','qbHYYXj2gMc',5,8.3,'2013-12-01','Pete Michels','Latino','1644089667589.jpg','2022-02-05 19:34:27','2022-02-05 19:34:49',47),(20,'Las cintas de Ted Bundy','Conversaciones con asesinos: Las cintas de Ted Bundy es una serie documental que se centra en la historia del asesino Ted Bundy, que hace 30 años fue ejecutado por el asesinato de Kimberly Leach. Ted es conocido por haberse declarado culpable en más de 30 asesinatos a mujeres durante la década de 1970.','YLGaefId_zY',1,6.7,'2019-01-01','Joe Berlinger','Latino','1644090000867.jpg','2022-02-05 19:40:00','2022-02-05 19:40:01',48),(21,'Cómo se convirtieron en tiranos','Cómo se convirtieron en tiranos es una serie documental sarcástica donde los déspotas históricos demuestras cómo un aspirante a dictador debe aprenderse al pie de la letra el manual del poder absoluto para gobernar con puño de hierro.','w4jsomzDCO0',1,8.1,'2021-07-01',' Peter Dinklage','Latino','1644090371521.jpg','2022-02-05 19:46:11','2022-02-05 19:46:13',17),(22,'The newsroom','Will McCallister es el mordaz presentador de un importante noticiario de televisión por cable. Junto a la nueva productora ejecutiva deberá lidiar con los miembros del equipo para que las estresantes tareas del mundo televisivo lleguen a buen puerto.','gRuYXaJ3OB0',1,8.0,'2012-06-01','Aaron Sorkin','Latino','1644347790294.jpg','2022-02-08 19:16:30','2022-02-08 19:16:30',NULL),(23,'Outcast','Kyle Barnes es un joven que ha sufrido posesiones demoníacas durante toda su vida y, por ello, vive en un exilio autoimpuesto. ... Pero se ve obligado a actuar cuando un niño de su ciudad es poseído. Junto a un reverendo local, tratará de salvar al pequeño de unas circunstancias que le recuerdan a su pasado.','ET6qFtbfSAg',2,9.0,'2016-06-01','Nick Powell','No','1644349214626.jpg','2022-02-08 19:40:14','2022-02-08 19:40:15',60);
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
  `first_name` tinytext NOT NULL,
  `last_name` tinytext NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Angel Guillermo','Montaña','Angel','angelguillermomontania@gmail.com','$2a$10$sB.dUv1ZPHnbi3PuyLDbJO10/Zj..eEWz5o8CZXvN1vAbaFa9OS56','1643649793062.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-01-31 17:23:13','2022-01-31 17:23:13',3),(2,'Matias','Diaz','matidiaz032','matidiazee@gmail.com','$2a$10$zHCejhbH6efs.BVgzxrCee88x4SMGFuD9Geit7heTWetS6JsL4x8K','default-avatar.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-02-02 02:51:18','2022-02-02 02:51:20',3),(3,'Elias David','Galeano','galeanoeliasdavid@gm','galeanoeliasdavid@gmail.com','$2a$10$ScCsxhUL/1go7x1NwxOqV.Zunw4LUCXe8dqFeG7JWAMmBtiVA9JN.','1644003504952.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-02-04 19:38:33','2022-02-04 19:38:34',3),(4,'User','User','User ','user@gmail.com','$2a$10$LU.MAEleIgMXiykR1L9KF.Yr0aKKbO1wP8S.GaxdDqgpenoWNjn.e','default-avatar.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-02-04 22:57:44','2022-02-04 22:57:44',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'slow_motion_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-25 23:21:54
