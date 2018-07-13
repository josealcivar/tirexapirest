CREATE DATABASE  IF NOT EXISTS `tirexdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tirexdb`;
-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: tirexdb
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

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
-- Table structure for table `Caracteristicas`
--

DROP TABLE IF EXISTS `Caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Caracteristicas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  `ProductoId` int(11) NOT NULL,
  PRIMARY KEY (`id`,`ProductoId`),
  KEY `EmpresaId` (`EmpresaId`),
  KEY `ProductoId` (`ProductoId`),
  CONSTRAINT `Caracteristicas_ibfk_1` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Caracteristicas_ibfk_2` FOREIGN KEY (`ProductoId`) REFERENCES `Productos` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Caracteristicas`
--

LOCK TABLES `Caracteristicas` WRITE;
/*!40000 ALTER TABLE `Caracteristicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Clientes`
--

DROP TABLE IF EXISTS `Clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigointerno` varchar(255) DEFAULT NULL,
  `razonsocial` varchar(255) NOT NULL,
  `identificacion` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `tipoprecio` varchar(1) NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `VendedorId` int(11) DEFAULT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `VendedorId` (`VendedorId`),
  KEY `EmpresaId` (`EmpresaId`),
  CONSTRAINT `Clientes_ibfk_1` FOREIGN KEY (`VendedorId`) REFERENCES `Vendedors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Clientes_ibfk_2` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clientes`
--

LOCK TABLES `Clientes` WRITE;
/*!40000 ALTER TABLE `Clientes` DISABLE KEYS */;
INSERT INTO `Clientes` VALUES (2,'ABCD','PEPE JAIME','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1),(3,'QW12','LUIS MEJICA','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1),(4,'123QWE','ANDRE ALCIVAR GARCIA','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1),(5,'AQWE2BCD','ALCIVAR GARCIA','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1),(6,'1123WW','JOSE ANDRE','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1),(7,'QWE11','JOSE ANDRA','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1),(8,'EEFE33','ARCENTALES GARCIA','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1),(9,'DSS211','JOSE ANDRE MANOLO','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1),(10,'AAX22','PARACETAMOL','092545833232001','mail@gmail.com','avenida empresarial','045322431','P','A','2018-03-22 01:58:15','2018-03-22 01:58:15',1,1);
/*!40000 ALTER TABLE `Clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Det_caracters`
--

DROP TABLE IF EXISTS `Det_caracters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Det_caracters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `secuencia` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  `CaracteristicaId` int(11) NOT NULL,
  PRIMARY KEY (`id`,`secuencia`,`CaracteristicaId`),
  KEY `EmpresaId` (`EmpresaId`),
  CONSTRAINT `Det_caracters_ibfk_1` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Det_caracters`
--

LOCK TABLES `Det_caracters` WRITE;
/*!40000 ALTER TABLE `Det_caracters` DISABLE KEYS */;
/*!40000 ALTER TABLE `Det_caracters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Det_pedidos`
--

DROP TABLE IF EXISTS `Det_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Det_pedidos` (
  `secuencia` int(11) NOT NULL,
  `cantidad` int(10) unsigned NOT NULL,
  `tipoprecio` int(1) DEFAULT NULL,
  `preciovta` decimal(10,4) DEFAULT NULL,
  `porcdescto` decimal(2,2) DEFAULT NULL,
  `porcpromo` decimal(2,2) DEFAULT NULL,
  `estado_orden` varchar(1) NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  `PedidoId` int(11) NOT NULL,
  `ProductoId` int(11) NOT NULL,
  PRIMARY KEY (`secuencia`,`PedidoId`,`ProductoId`),
  KEY `EmpresaId` (`EmpresaId`),
  KEY `ProductoId` (`ProductoId`),
  CONSTRAINT `Det_pedidos_ibfk_1` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Det_pedidos_ibfk_2` FOREIGN KEY (`ProductoId`) REFERENCES `Productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Det_pedidos`
--

LOCK TABLES `Det_pedidos` WRITE;
/*!40000 ALTER TABLE `Det_pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Det_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Detpromos`
--

DROP TABLE IF EXISTS `Detpromos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Detpromos` (
  `secuencia` int(11) NOT NULL,
  `fechadesde` datetime NOT NULL,
  `fechahasta` datetime NOT NULL,
  `porcentaje` decimal(2,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  `PromocionId` int(11) NOT NULL,
  PRIMARY KEY (`secuencia`,`PromocionId`),
  KEY `EmpresaId` (`EmpresaId`),
  KEY `PromocionId` (`PromocionId`),
  CONSTRAINT `Detpromos_ibfk_1` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Detpromos_ibfk_2` FOREIGN KEY (`PromocionId`) REFERENCES `Promocions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Detpromos`
--

LOCK TABLES `Detpromos` WRITE;
/*!40000 ALTER TABLE `Detpromos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Detpromos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Empresas`
--

DROP TABLE IF EXISTS `Empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Empresas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `razonsocial` varchar(255) NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empresas`
--

LOCK TABLES `Empresas` WRITE;
/*!40000 ALTER TABLE `Empresas` DISABLE KEYS */;
INSERT INTO `Empresas` VALUES (1,'tirex','A','2018-03-22 01:10:43','2018-03-22 01:10:43');
/*!40000 ALTER TABLE `Empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Grupos`
--

DROP TABLE IF EXISTS `Grupos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Grupos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Grupos`
--

LOCK TABLES `Grupos` WRITE;
/*!40000 ALTER TABLE `Grupos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Grupos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Marcas`
--

DROP TABLE IF EXISTS `Marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Marcas`
--

LOCK TABLES `Marcas` WRITE;
/*!40000 ALTER TABLE `Marcas` DISABLE KEYS */;
/*!40000 ALTER TABLE `Marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pedidos`
--

DROP TABLE IF EXISTS `Pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pedidos` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `subtotal` decimal(10,4) NOT NULL,
  `impuesto` decimal(10,4) DEFAULT NULL,
  `porcdesct` decimal(2,2) DEFAULT NULL,
  `descuento` decimal(10,4) DEFAULT NULL,
  `total` decimal(10,4) DEFAULT NULL,
  `estado_orden` varchar(1) NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `VendedorId` int(11) DEFAULT NULL,
  `ClienteId` int(11) DEFAULT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`fecha`),
  KEY `VendedorId` (`VendedorId`),
  KEY `ClienteId` (`ClienteId`),
  KEY `EmpresaId` (`EmpresaId`),
  CONSTRAINT `Pedidos_ibfk_1` FOREIGN KEY (`VendedorId`) REFERENCES `Vendedors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Pedidos_ibfk_2` FOREIGN KEY (`ClienteId`) REFERENCES `Clientes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Pedidos_ibfk_3` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pedidos`
--

LOCK TABLES `Pedidos` WRITE;
/*!40000 ALTER TABLE `Pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Productos`
--

DROP TABLE IF EXISTS `Productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigoalterno` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `destacado` varchar(1) DEFAULT NULL,
  `stock` int(10) unsigned DEFAULT NULL,
  `precio1` decimal(10,4) DEFAULT NULL,
  `precio2` decimal(10,4) DEFAULT NULL,
  `precio3` decimal(10,4) DEFAULT NULL,
  `precio4` decimal(10,4) DEFAULT NULL,
  `precio5` decimal(10,4) DEFAULT NULL,
  `origen` varchar(1) DEFAULT NULL,
  `rutaimagen` varchar(255) NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `GrupoId` int(11) DEFAULT NULL,
  `MarcaId` int(11) DEFAULT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `GrupoId` (`GrupoId`),
  KEY `MarcaId` (`MarcaId`),
  KEY `EmpresaId` (`EmpresaId`),
  CONSTRAINT `Productos_ibfk_1` FOREIGN KEY (`GrupoId`) REFERENCES `Grupos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Productos_ibfk_2` FOREIGN KEY (`MarcaId`) REFERENCES `Marcas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `Productos_ibfk_3` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Productos`
--

LOCK TABLES `Productos` WRITE;
/*!40000 ALTER TABLE `Productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `Productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Promocions`
--

DROP TABLE IF EXISTS `Promocions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Promocions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` varchar(255) NOT NULL,
  `fecha` datetime NOT NULL,
  `estado` varchar(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `EmpresaId` (`EmpresaId`),
  CONSTRAINT `Promocions_ibfk_1` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Promocions`
--

LOCK TABLES `Promocions` WRITE;
/*!40000 ALTER TABLE `Promocions` DISABLE KEYS */;
/*!40000 ALTER TABLE `Promocions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Vendedors`
--

DROP TABLE IF EXISTS `Vendedors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Vendedors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigointerno` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  `contrasena` varchar(255) NOT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EmpresaId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `EmpresaId` (`EmpresaId`),
  CONSTRAINT `Vendedors_ibfk_1` FOREIGN KEY (`EmpresaId`) REFERENCES `Empresas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vendedors`
--

LOCK TABLES `Vendedors` WRITE;
/*!40000 ALTER TABLE `Vendedors` DISABLE KEYS */;
INSERT INTO `Vendedors` VALUES (1,'ABCD','JOSE ANDRE ALCIVAR GARCIA','jalcivar','1234','A','2018-03-22 01:10:52','2018-03-22 01:10:52',1);
/*!40000 ALTER TABLE `Vendedors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-22  2:42:02
