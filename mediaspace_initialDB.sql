/*
Created: 03/12/2019
Modified: 04/12/2019
Model: MySQL 5.0
Database: MySQL 5.0
*/


-- Create tables section -------------------------------------------------

-- Table Users

CREATE TABLE `Users`
(
  `id` Int NOT NULL,
  `email` Char(40) NOT NULL,
  `password` Char(256) NOT NULL,
  `date_of_birth` Date NOT NULL,
  `subscription_id` Int,
  `user_status` Int NOT NULL,
  `user_rating` Float NOT NULL
)
;

CREATE INDEX `IX_Relationship3` ON `Users` (`subscription_id`)
;

ALTER TABLE `Users` ADD PRIMARY KEY (`id`)
;

-- Table Content_Genre

CREATE TABLE `Content_Genre`
(
  `id` Int NOT NULL,
  `Content_genre_name` Char(50) NOT NULL
)
;

ALTER TABLE `Content_Genre` ADD PRIMARY KEY (`id`)
;

-- Table Subscriptions

CREATE TABLE `Subscriptions`
(
  `id` Int NOT NULL,
  `Subscription_option_name` Char(100) NOT NULL,
  `subscriptionPackage_id` Int
)
;

CREATE INDEX `IX_Relationship2` ON `Subscriptions` (`subscriptionPackage_id`)
;

ALTER TABLE `Subscriptions` ADD PRIMARY KEY (`id`)
;

-- Table Subscription_Packages

CREATE TABLE `Subscription_Packages`
(
  `id` Int NOT NULL
)
;

ALTER TABLE `Subscription_Packages` ADD PRIMARY KEY (`id`)
;

-- Table content_package

CREATE TABLE `content_package`
(
  `subscriptionPackage_id` Int,
  `content_id` Int
)
;

CREATE INDEX `IX_Relationship5` ON `content_package` (`subscriptionPackage_id`)
;

CREATE INDEX `IX_Relationship6` ON `content_package` (`content_id`)
;

-- Table Content

CREATE TABLE `Content`
(
  `id` Int NOT NULL,
  `title` Char(50),
  `content_path` Char(200) NOT NULL,
  `contentGenre_id` Int,
  `rating` Float,
  `uploadingUser_id` Int
)
;

CREATE INDEX `IX_Relationship7` ON `Content` (`contentGenre_id`)
;

CREATE INDEX `IX_Relationship8` ON `Content` (`uploadingUser_id`)
;

ALTER TABLE `Content` ADD PRIMARY KEY (`id`)
;

-- Table recommendation_scores

CREATE TABLE `recommendation_scores`
(
  `content_id` Int,
  `user_id` Int,
  `recommendation_score` Float
)
;

CREATE INDEX `IX_Relationship9` ON `recommendation_scores` (`content_id`)
;

CREATE INDEX `IX_Relationship10` ON `recommendation_scores` (`user_id`)
;

-- Table Comments

CREATE TABLE `Comments`
(
  `id` Int NOT NULL,
  `comment` Char(200) NOT NULL,
  `user_id` Int NOT NULL,
  `content_id` Int NOT NULL,
  `rating` Float NOT NULL
)
;

CREATE INDEX `IX_Relationship1` ON `Comments` (`user_id`)
;

CREATE INDEX `IX_Relationship2` ON `Comments` (`content_id`)
;

ALTER TABLE `Comments` ADD PRIMARY KEY (`id`)
;

-- Create foreign keys (relationships) section ------------------------------------------------- 


ALTER TABLE `Subscriptions` ADD CONSTRAINT `r1` FOREIGN KEY (`subscriptionPackage_id`) REFERENCES `Subscription_Packages` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `Users` ADD CONSTRAINT `r2` FOREIGN KEY (`subscription_id`) REFERENCES `Subscriptions` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `content_package` ADD CONSTRAINT `r4` FOREIGN KEY (`subscriptionPackage_id`) REFERENCES `Subscription_Packages` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `content_package` ADD CONSTRAINT `r3` FOREIGN KEY (`content_id`) REFERENCES `Content` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `Content` ADD CONSTRAINT `r5` FOREIGN KEY (`contentGenre_id`) REFERENCES `Content_Genre` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `Content` ADD CONSTRAINT `r6` FOREIGN KEY (`uploadingUser_id`) REFERENCES `Users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `recommendation_scores` ADD CONSTRAINT `r7` FOREIGN KEY (`content_id`) REFERENCES `Content` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `recommendation_scores` ADD CONSTRAINT `r8` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `Comments` ADD CONSTRAINT `r10` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `Comments` ADD CONSTRAINT `r9` FOREIGN KEY (`content_id`) REFERENCES `Content` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


