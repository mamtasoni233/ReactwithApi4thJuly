-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2024 at 08:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `real_estate_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `address` text DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(4) DEFAULT 0,
  `isActive` tinyint(4) DEFAULT 1,
  `isDeleted` tinyint(4) DEFAULT 0,
  `createdBy` int(11) NOT NULL DEFAULT 1,
  `updatedBy` int(11) DEFAULT NULL,
  `createdOn` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedOn` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`, `phone`, `dob`, `address`, `profile`, `isAdmin`, `isActive`, `isDeleted`, `createdBy`, `updatedBy`, `createdOn`, `updatedOn`) VALUES
(1, 'Mamta', 'Soni', 'mamta.s@gmail.com', '$2a$10$a88Z4WAsh./shABluLuGHOy6vHqnjvz/wlf.LVQ/uXSNid6oYPevO', NULL, NULL, NULL, NULL, 0, 1, 0, 1, NULL, '2024-07-08 12:24:57', NULL),
(2, 'Ravina', 'Soni', 'ravina@gmail.com', '$2a$12$22Nzi1YOc00dN52mcYVDNebZ.qzs6uxcyGR3fXZlzOhOuu8zJl4Ma', NULL, NULL, NULL, NULL, 0, 1, 0, 1, NULL, '2024-07-08 12:31:28', NULL),
(12, 'Mamta', 'asdf', 'ravinasdfgsdfg@gmail.com', '$2a$12$lELCFmxvCyaj1o1oSaTVs.XfI3gbOW.DncjUnuRFD6aW/P8kf9rHe', NULL, NULL, NULL, NULL, 0, 1, 0, 1, NULL, '2024-07-08 18:53:34', NULL),
(13, 'Mamta', 'Soni', 'mamta.s@lucidsolutions.in', '$2a$12$uTijZiMHl7Zz/rLpgfRK5eh5nws6vRaqJfyXccd0T3o8pXz0qvTIy', NULL, NULL, NULL, NULL, 0, 1, 0, 1, NULL, '2024-07-08 18:59:33', NULL),
(14, 'Mamta', 'Soni', 'admin@kumar.com', '$2a$12$NQVh9CukRnAF4HWTJX77EeavFYNw2fLBLKvsxqvHLYPZhm2G4uW.G', NULL, NULL, NULL, NULL, 0, 1, 0, 1, NULL, '2024-07-09 10:51:16', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
