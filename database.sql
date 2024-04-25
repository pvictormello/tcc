CREATE DATABASE IF NOT EXISTS `sisgermo`;
USE `sisgermo`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `city` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `country` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `state` char(3) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(32) CHARACTER SET utf8 DEFAULT NULL,
  `location` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `role` ENUM('Student','Teacher','Researcher','Admin') NOT NULL,
	`parent_id` INT DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__users_users` (`parent_id`),
  CONSTRAINT `FK__users_users` FOREIGN KEY (`parent_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `users` (`id`, `name`, `email`, `city`, `country`, `state`, `password`, `location`, `role`, `parent_id`) VALUES
	(1, 'Paulo Victor', 'administrador@ufu.br', 'Uberlândia', 'Brasil', 'MG', '123', 'Universidade', 'Admin', null);

INSERT INTO `users` (`id`, `name`, `email`, `city`, `country`, `state`, `password`, `location`, `role`, `parent_id`) VALUES
  (2, 'Pesquisador', 'pesquisador@ufu.br', 'Uberlândia', 'Brasil', 'MG', '123', 'Universidade', 'Researcher', null);

INSERT INTO `users` (`id`, `name`, `email`, `city`, `country`, `state`, `password`, `location`, `role`, `parent_id`) VALUES
  (3, 'Professor', 'professor@ufu.br', 'Uberlândia', 'Brasil', 'MG', '123', 'Universidade', 'Teacher', null);

INSERT INTO `users` (`id`, `name`, `email`, `city`, `country`, `state`, `password`, `location`, `role`, `parent_id`) VALUES
  (4, 'Aluno', 'aluno@ufu.br', 'Uberlândia', 'Brasil', 'MG', '123', 'Universidade', 'Student', 3);

CREATE TABLE IF NOT EXISTS `access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sample` varchar(20) CHARACTER SET utf8 NOT NULL,
  `species` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `variety` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `color` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `generation` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `producer_name` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `coordinates` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `location` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `collection_date` char(11) CHARACTER SET utf8 DEFAULT NULL,
  `observation` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `created_by_id` INT NOT NULL,
  `owner_id` INT NOT NULL,
  `public` BOOLEAN DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK__access_created_by_id_users` (`created_by_id`),
  CONSTRAINT `FK__access_created_by_id_users` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  KEY `FK__access_owner_id_users` (`owner_id`),
  CONSTRAINT `FK__access_owner_id_users` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `seedling_phase` (
  `access_id` INT NOT NULL,
  `cod1` INT DEFAULT NULL,
  `cod2` INT DEFAULT NULL,
  `cod3` INT DEFAULT NULL,
  `cod4` INT DEFAULT NULL,
  `cod5` float DEFAULT NULL,
  `cod6` float DEFAULT NULL,
  PRIMARY KEY (`access_id`),
  CONSTRAINT `FK_seedling_phase_access` FOREIGN KEY (`access_id`) REFERENCES `access` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `vegetative_phase` (
  `access_id` INT NOT NULL,
  `cod7` INT DEFAULT NULL,
  `cod8` INT DEFAULT NULL,
  `cod9` INT DEFAULT NULL,
  `cod10` INT DEFAULT NULL,
  `cod11` INT DEFAULT NULL,
  `cod12` INT DEFAULT NULL,
  `cod13` INT DEFAULT NULL,
  `cod14` float DEFAULT NULL,
  `cod15` float DEFAULT NULL,
  `cod16` float DEFAULT NULL,
  `cod17` INT DEFAULT NULL,
  `cod18` INT DEFAULT NULL,
  `cod19` INT DEFAULT NULL,
  `cod20` INT DEFAULT NULL,
  `cod21` INT DEFAULT NULL,
  `cod22` INT DEFAULT NULL,
  `cod23` INT DEFAULT NULL,
  `cod24` float DEFAULT NULL,
  `cod25` float DEFAULT NULL,
  PRIMARY KEY (`access_id`),
  KEY `FK_vegetative_phase_seedling_phase` (`access_id`),
  CONSTRAINT `FK_vegetative_phase_seedling_phase` FOREIGN KEY (`access_id`) REFERENCES `seedling_phase` (`access_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `reproductive_phase` (
  `access_id` INT NOT NULL,
  `cod26` INT DEFAULT NULL,
  `cod27` INT DEFAULT NULL,
  `cod28` INT DEFAULT NULL,
  `cod29` INT DEFAULT NULL,
  `cod30` INT DEFAULT NULL,
  `cod31` INT DEFAULT NULL,
  `cod32` INT DEFAULT NULL,
  `cod33` INT DEFAULT NULL,
  `cod34` float DEFAULT NULL,
  `cod35` INT DEFAULT NULL,
  `cod36` float DEFAULT NULL,
  `cod37` INT DEFAULT NULL,
  `cod38` INT DEFAULT NULL,
  `cod39` INT DEFAULT NULL,
  `cod40` INT DEFAULT NULL,
  `cod41` INT DEFAULT NULL,
  `cod42` INT DEFAULT NULL,
  `cod43` INT DEFAULT NULL,
  `cod44` INT DEFAULT NULL,
  `cod45` INT DEFAULT NULL,
  `cod46` INT DEFAULT NULL,
  `cod47` INT DEFAULT NULL,
  `cod48` INT DEFAULT NULL,
  `cod49` float DEFAULT NULL,
  `cod50` float DEFAULT NULL,
  `cod51` float DEFAULT NULL,
  `cod52` float DEFAULT NULL,
  `cod53` float DEFAULT NULL,
  `cod54` INT DEFAULT NULL,
  `cod55` INT DEFAULT NULL,
  `cod56` INT DEFAULT NULL,
  `cod57` INT DEFAULT NULL,
  `cod58` INT DEFAULT NULL,
  `cod59` INT DEFAULT NULL,
  `cod60` INT DEFAULT NULL,
  `cod61` INT DEFAULT NULL,
  `cod62` INT DEFAULT NULL,
  `cod63` INT DEFAULT NULL,
  `cod64` INT DEFAULT NULL,
  `cod65` INT DEFAULT NULL,
  `cod66` INT DEFAULT NULL,
  `cod67` INT DEFAULT NULL,
  `cod68` float DEFAULT NULL,
  `cod69` float DEFAULT NULL,
  `cod70` INT DEFAULT NULL,
  PRIMARY KEY (`access_id`),
  KEY `FK_reproductive_phase_vegetative_phase` (`access_id`),
  CONSTRAINT `FK_reproductive_phase_vegetative_phase` FOREIGN KEY (`access_id`) REFERENCES `vegetative_phase` (`access_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `banners` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `banners` (`id`, `image_name`, `title`, `description`) VALUES
	(1, 'pimenta1.jpg', '', ' Cultivo de pimenta no município de Monte Carmelo-MG.'),
	(2, 'pimenta2.jpg', '', 'Seleção de frutos realizada pelos produtores.'),
	(3, 'pimenta3.jpg', '', 'Consórcio entre pimenta x café, no município de Monte Carmelo-MG.'),
	(4, 'pimenta4.jpg', '', 'Agricultores familiares colhendo a renda.'),
	(5, 'pimenta5.jpg', '', 'Consórcio entre pimenta x café, no município de Monte Carmelo-MG.');

CREATE TABLE IF NOT EXISTS `access_images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `access_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__access_images_access` (`access_id`),
  CONSTRAINT `FK__access_images_access` FOREIGN KEY (`access_id`) REFERENCES `access` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE logs (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `action_type` VARCHAR(250) NOT NULL,
  `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__logs_users` (`user_id`),
  CONSTRAINT `FK__logs_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;