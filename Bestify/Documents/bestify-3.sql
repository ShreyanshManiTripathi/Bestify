-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: bestify_major_project
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `categories` (
  `categoryId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('59ab04f0-d714-11eb-a458-b5d39527b8cd','GK','2021-06-27 06:53:16','2021-06-27 06:53:16'),('604f0040-d714-11eb-a458-b5d39527b8cd','Brain Teaser','2021-06-27 06:53:28','2021-06-27 06:53:28'),('65833ef0-d714-11eb-a458-b5d39527b8cd','Logical Thinking','2021-06-27 06:53:36','2021-06-27 06:53:36');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `games` (
  `gameId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `gameName` varchar(255) DEFAULT NULL,
  `gameTime` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`gameId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES ('086cddc0-d750-11eb-bfa3-790c3f7e4e7e','snake',600,'2021-06-27 14:00:30','2021-06-27 14:00:30'),('0e0339a0-d750-11eb-bfa3-790c3f7e4e7e','tetris',600,'2021-06-27 14:00:39','2021-06-27 14:00:39'),('f680da80-d74f-11eb-bfa3-790c3f7e4e7e','tic-tac-toe',600,'2021-06-27 14:00:00','2021-06-27 14:00:00');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `questions` (
  `quesId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quesStmt` varchar(255) DEFAULT NULL,
  `optionA` varchar(255) DEFAULT NULL,
  `optionB` varchar(255) DEFAULT NULL,
  `optionC` varchar(255) DEFAULT NULL,
  `optionD` varchar(255) DEFAULT NULL,
  `correctAnswer` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `quizId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`quesId`),
  KEY `quizId` (`quizId`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`quizId`) REFERENCES `quizzes` (`quizId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES ('0b9f1770-d73b-11eb-9dcc-01fb09eb7d9e','What is the color of sky ?','Pink','Yellow','Sky-Blue','Red','C','2021-06-27 11:30:16','2021-06-27 11:30:16','ddf99b10-d73a-11eb-9dcc-01fb09eb7d9e'),('0b9f1771-d73b-11eb-9dcc-01fb09eb7d9e','What is Natural State of Water ?','Liquid','Solid','Gas','Plasma','A','2021-06-27 11:30:16','2021-06-27 11:30:16','ddf99b10-d73a-11eb-9dcc-01fb09eb7d9e'),('5353e9c0-d717-11eb-a458-b5d39527b8cd','Oil, natural gas and coal are examples of …','Fossil fuels','Renewable resources','Geothermal resources','Biofuels','A','2021-06-27 07:14:34','2021-06-27 07:14:34','bf318230-d715-11eb-a458-b5d39527b8cd'),('5353e9c1-d717-11eb-a458-b5d39527b8cd','If you were to take a lump of coal and squeeze for a long time at very high temperatures, you would end up with…','Volcanic glass, also known as obsidian','A smaller lump of coal','A diamond','Remains Coal','C','2021-06-27 07:14:34','2021-06-27 07:14:34','bf318230-d715-11eb-a458-b5d39527b8cd'),('5353e9c2-d717-11eb-a458-b5d39527b8cd','What does a caterpillar change into?','A Cat','An Earthworm','A Caterpillar','A Butterfly','D','2021-06-27 07:14:34','2021-06-27 07:14:34','bf318230-d715-11eb-a458-b5d39527b8cd'),('5353e9c3-d717-11eb-a458-b5d39527b8cd','How much does a queen bee have to eat each day to produce her eggs?','Twice her body weight in food','80 times her body weight in food','20 times her body weight in food','Do not need to eat to lay eggs','B','2021-06-27 07:14:34','2021-06-27 07:14:34','bf318230-d715-11eb-a458-b5d39527b8cd'),('5353e9c4-d717-11eb-a458-b5d39527b8cd','It is now believed that dinosaurs became extinct because of:','Diseases','Hunting by early humans','A meteorite impact','None of the Above','C','2021-06-27 07:14:34','2021-06-27 07:14:34','bf318230-d715-11eb-a458-b5d39527b8cd');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quizzes`
--

DROP TABLE IF EXISTS `quizzes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `quizzes` (
  `quizId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quizName` varchar(255) DEFAULT NULL,
  `quizTimer` int(11) DEFAULT NULL,
  `noOfQuestions` int(11) DEFAULT NULL,
  `quizScore` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`quizId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `quizzes_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`categoryId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quizzes`
--

LOCK TABLES `quizzes` WRITE;
/*!40000 ALTER TABLE `quizzes` DISABLE KEYS */;
INSERT INTO `quizzes` VALUES ('bf318230-d715-11eb-a458-b5d39527b8cd','Science Quiz-1',300,5,50,'2021-06-27 07:03:16','2021-06-27 07:03:16','59ab04f0-d714-11eb-a458-b5d39527b8cd'),('ddf99b10-d73a-11eb-9dcc-01fb09eb7d9e','GK Quiz-2',120,2,20,'2021-06-27 11:28:59','2021-06-27 11:28:59','59ab04f0-d714-11eb-a458-b5d39527b8cd');
/*!40000 ALTER TABLE `quizzes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userfavquizzes`
--

DROP TABLE IF EXISTS `userfavquizzes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `userfavquizzes` (
  `favQuizId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `isFav` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `quizId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`favQuizId`),
  KEY `userId` (`userId`),
  KEY `quizId` (`quizId`),
  CONSTRAINT `userfavquizzes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `userfavquizzes_ibfk_2` FOREIGN KEY (`quizId`) REFERENCES `quizzes` (`quizId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userfavquizzes`
--

LOCK TABLES `userfavquizzes` WRITE;
/*!40000 ALTER TABLE `userfavquizzes` DISABLE KEYS */;
/*!40000 ALTER TABLE `userfavquizzes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usergametransactions`
--

DROP TABLE IF EXISTS `usergametransactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usergametransactions` (
  `userGameTranId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userScore` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `isPlayedOn` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `gameId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`userGameTranId`),
  KEY `userId` (`userId`),
  KEY `gameId` (`gameId`),
  CONSTRAINT `usergametransactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `usergametransactions_ibfk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`gameId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usergametransactions`
--

LOCK TABLES `usergametransactions` WRITE;
/*!40000 ALTER TABLE `usergametransactions` DISABLE KEYS */;
INSERT INTO `usergametransactions` VALUES ('11d27f30-d752-11eb-a05c-e93ae66e6ba0',25,1,'2021-06-27 14:15:05','2021-06-27 14:15:05','2021-06-27 14:15:05','55783310-d748-11eb-aadb-676ff0768df9','086cddc0-d750-11eb-bfa3-790c3f7e4e7e'),('1d1a6010-d752-11eb-a05c-e93ae66e6ba0',17,1,'2021-06-27 14:15:24','2021-06-27 14:15:24','2021-06-27 14:15:24','71d62990-d748-11eb-aadb-676ff0768df9','086cddc0-d750-11eb-bfa3-790c3f7e4e7e'),('2950bfa0-d752-11eb-a05c-e93ae66e6ba0',27,1,'2021-06-27 14:15:44','2021-06-27 14:15:44','2021-06-27 14:15:44','920a7c70-d748-11eb-aadb-676ff0768df9','086cddc0-d750-11eb-bfa3-790c3f7e4e7e'),('31370de0-d771-11eb-964c-21121289c345',8,1,'2021-06-27 17:57:52','2021-06-27 17:57:52','2021-06-27 17:57:52','8b6b8300-d770-11eb-964c-21121289c345','086cddc0-d750-11eb-bfa3-790c3f7e4e7e'),('4246eae0-d7d2-11eb-9f75-af8790dd202d',94,1,'2021-06-28 05:32:41','2021-06-28 05:32:41','2021-06-28 05:32:41','920a7c70-d748-11eb-aadb-676ff0768df9','0e0339a0-d750-11eb-bfa3-790c3f7e4e7e'),('84cb4950-d751-11eb-a05c-e93ae66e6ba0',60,1,'2021-06-27 14:11:08','2021-06-27 14:11:08','2021-06-27 14:11:08','55783310-d748-11eb-aadb-676ff0768df9','0e0339a0-d750-11eb-bfa3-790c3f7e4e7e'),('9bb1dda0-d751-11eb-a05c-e93ae66e6ba0',70,1,'2021-06-27 14:11:46','2021-06-27 14:11:46','2021-06-27 14:11:46','71d62990-d748-11eb-aadb-676ff0768df9','0e0339a0-d750-11eb-bfa3-790c3f7e4e7e'),('a7816510-d751-11eb-a05c-e93ae66e6ba0',50,1,'2021-06-27 14:12:06','2021-06-27 14:12:06','2021-06-27 14:12:06','920a7c70-d748-11eb-aadb-676ff0768df9','0e0339a0-d750-11eb-bfa3-790c3f7e4e7e'),('b8107060-d751-11eb-a05c-e93ae66e6ba0',50,1,'2021-06-27 14:12:34','2021-06-27 14:12:34','2021-06-27 14:12:34','920a7c70-d748-11eb-aadb-676ff0768df9','f680da80-d74f-11eb-bfa3-790c3f7e4e7e'),('c11b5990-d751-11eb-a05c-e93ae66e6ba0',60,1,'2021-06-27 14:12:49','2021-06-27 14:12:49','2021-06-27 14:12:49','71d62990-d748-11eb-aadb-676ff0768df9','f680da80-d74f-11eb-bfa3-790c3f7e4e7e'),('ce2b7750-d751-11eb-a05c-e93ae66e6ba0',80,1,'2021-06-27 14:13:11','2021-06-27 14:13:11','2021-06-27 14:13:11','55783310-d748-11eb-aadb-676ff0768df9','f680da80-d74f-11eb-bfa3-790c3f7e4e7e');
/*!40000 ALTER TABLE `usergametransactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userquiztransactions`
--

DROP TABLE IF EXISTS `userquiztransactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `userquiztransactions` (
  `userQuizTranId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `userScore` int(11) DEFAULT NULL,
  `noOfQuesAttempted` int(11) DEFAULT NULL,
  `timeLeft` int(11) DEFAULT NULL,
  `isCompleted` tinyint(1) DEFAULT NULL,
  `isPlayedOn` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `quizId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`userQuizTranId`),
  KEY `userId` (`userId`),
  KEY `quizId` (`quizId`),
  CONSTRAINT `userquiztransactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `userquiztransactions_ibfk_2` FOREIGN KEY (`quizId`) REFERENCES `quizzes` (`quizId`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userquiztransactions`
--

LOCK TABLES `userquiztransactions` WRITE;
/*!40000 ALTER TABLE `userquiztransactions` DISABLE KEYS */;
INSERT INTO `userquiztransactions` VALUES ('03d91d70-d753-11eb-a05c-e93ae66e6ba0',10,100,0,1,'2021-06-27 14:21:51','2021-06-27 14:21:51','2021-06-27 14:21:51','55783310-d748-11eb-aadb-676ff0768df9','ddf99b10-d73a-11eb-9dcc-01fb09eb7d9e'),('10266bf0-d749-11eb-aadb-676ff0768df9',50,100,0,1,'2021-06-27 13:10:36','2021-06-27 13:10:36','2021-06-27 13:10:36','920a7c70-d748-11eb-aadb-676ff0768df9','bf318230-d715-11eb-a458-b5d39527b8cd'),('ce2abe90-d752-11eb-a05c-e93ae66e6ba0',30,100,0,1,'2021-06-27 14:20:21','2021-06-27 14:20:21','2021-06-27 14:20:21','55783310-d748-11eb-aadb-676ff0768df9','bf318230-d715-11eb-a458-b5d39527b8cd'),('d82b5260-d752-11eb-a05c-e93ae66e6ba0',40,100,0,1,'2021-06-27 14:20:37','2021-06-27 14:20:37','2021-06-27 14:20:37','71d62990-d748-11eb-aadb-676ff0768df9','bf318230-d715-11eb-a458-b5d39527b8cd'),('ed8c63b0-d748-11eb-aadb-676ff0768df9',40,100,0,1,'2021-06-27 13:09:38','2021-06-27 13:09:38','2021-06-27 13:09:38','55783310-d748-11eb-aadb-676ff0768df9','bf318230-d715-11eb-a458-b5d39527b8cd'),('fafc2210-d752-11eb-a05c-e93ae66e6ba0',20,100,0,1,'2021-06-27 14:21:36','2021-06-27 14:21:36','2021-06-27 14:21:36','71d62990-d748-11eb-aadb-676ff0768df9','ddf99b10-d73a-11eb-9dcc-01fb09eb7d9e'),('fd564a40-d748-11eb-aadb-676ff0768df9',30,100,0,1,'2021-06-27 13:10:05','2021-06-27 13:10:05','2021-06-27 13:10:05','71d62990-d748-11eb-aadb-676ff0768df9','bf318230-d715-11eb-a458-b5d39527b8cd');
/*!40000 ALTER TABLE `userquiztransactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `userId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('55783310-d748-11eb-aadb-676ff0768df9','rushikesh','cee002a7e0fa6e2e1b2c99ee65e81feddd61ca8d2c552a1116e1a28946b9cbf54ed44d5ad2d6d3c7b2e3cdea414bac5422ae0c4f505eb7aeed8743d68e7b445f4342e449bbc2a7cb3e27d1eb1d5bf5eae6e8b8a63a470458e610d417f7c079aa1863118fb8','rushi@gmail.com',0,'2021-06-27 13:05:23','2021-06-27 13:05:23'),('71d62990-d748-11eb-aadb-676ff0768df9','rohini','265449e1991e8de8cd56eae3ec610fe71912593756c4fd8232647387c2b3439f5d7980868f312c9a885e39d83cb49fc9a0c909e4cc95b79002f243a9045c6406d459700073e314c72541db0f44596720ecf4f8175d3707a53b110d9fb0a5fef894fafcff6865','rohini@gmail.com',0,'2021-06-27 13:06:11','2021-06-27 13:06:11'),('8b6b8300-d770-11eb-964c-21121289c345','ravi','f13f7f67acac987316485b95cc331e4dcc430f2ebd5f26ae16136acbbf1269ecd508224d01a89d285419522c253c14355b54c8d0ed741445e3ff0b543af148473d6f69a86e5e4626124a1f9b297dc76452cb06954bc9c3a11666c0a99b0eba004ff32e9bc9c48229','ravi@gmail.com',0,'2021-06-27 17:53:14','2021-06-27 17:53:14'),('920a7c70-d748-11eb-aadb-676ff0768df9','rasika','7215e38479c72930a3f3b0afb7c4ec1f032d00694f9859d75c5484900d0de929b661f4658e421cf54d2ddc14e0c1202eab5456cd2f6377d99b445313ded8ee0bd181c1c842439c78b21c10de48b2822a84d3905d8727157e151431fe73cf3141b430adab38f1','rasika@gmail.com',0,'2021-06-27 13:07:05','2021-06-27 13:07:05'),('eb73aff0-d713-11eb-a458-b5d39527b8cd','admin','a204675b0d83ccb98e9332028612088492c522ea85bf9ac655df6e5e3d4cd138828798b1ab84016ea67f5b1930f82e4c6dd2c5970a237cc142e0cbc9b3aa807ad3183f44a6c11813b59eba7e934626faf272892ff764e27f1838e1b47f444491344bb3c59f','admin@gmail.com',1,'2021-06-27 06:50:11','2021-06-27 06:50:11');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-28 11:19:58
