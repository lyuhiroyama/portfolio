CREATE TABLE `project_votes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_id` varchar(10) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_vote` (`project_id`,`ip_address`)
) 