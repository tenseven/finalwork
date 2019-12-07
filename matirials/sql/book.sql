-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1
-- 生成日期： 2019-11-23 08:23:50
-- 服务器版本： 10.1.36-MariaDB
-- PHP 版本： 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `library`
--

-- --------------------------------------------------------

--
-- 表的结构 `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8_bin NOT NULL,
  `author` text COLLATE utf8_bin NOT NULL,
  `picture` text COLLATE utf8_bin NOT NULL,
  `classification` text COLLATE utf8_bin NOT NULL,
  `introduction` text COLLATE utf8_bin NOT NULL,
  `comeout_year` text COLLATE utf8_bin NOT NULL,
  `publication` text COLLATE utf8_bin NOT NULL,
  `number` text COLLATE utf8_bin NOT NULL,
  `down_addr` text COLLATE utf8_bin NOT NULL,
  `down_times` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `book`
--

INSERT INTO `book` (`id`, `name`, `author`, `picture`, `classification`, `introduction`, `comeout_year`, `publication`, `number`, `down_addr`, `down_times`) VALUES
(1, '生理学', '王庭槐', 'photo/1.jpg', '生理', '第9版生理教材', '2018年', '人民卫生出版社', 'A1', 'wenjian/book_A1.pdf', 3),
(2, '生物化学与分子生物学', '药立波', 'photo/2.jpg', '生化', '第9版生物化学与分子生物学第9版生物化学与分子生物学第9版生物化学与分子生物学第9版生物化学与分子生物学第9版生物化学与分子生物学第9版生物化学与分子生物学第9版生物化学与分子生物学第9版生物化学与分子生物学第9版生物化学与分子生物学', '2018年', '人民卫生出版社', 'B1', '4', 4),
(3, '组织胚胎学', '李建', 'photo/3.jpg', '组胚', '第5版组织胚胎学', '2018年', '人民卫生出版社', 'C1', '2', 2),
(4, '系统解剖学', '李庆涛', 'photo/4.jpg', '解剖', '第9版系统解剖学', '2018年', '人民卫生出版社', 'D1', '3', 3),
(5, '局部解剖学', '李庆涛', 'photo/5.jpg', '解剖', '第9版局部解剖学', '2018年', '人民卫生出版社', 'D2', '2', 2),
(6, '细胞生物学', '刘佳', 'photo/6.jpg', '细胞学', '第9版细胞生物学', '2018年', '人民卫生出版社', 'E1', '3', 3),
(7, '免疫学', '王建', 'photo/7.jpg', '免疫学', '第九版教材', '2018年', '人民卫生出版社', 'F1', '3', 3),
(8, '统计学', '张章', 'photo/8.jpg', '免疫学', '第九版教材', '2018年', '人民卫生出版社', 'G1', '3', 3),
(9, '概率论', '李陈', 'photo/9.jpg', '免疫学', '第九版教材', '2018年', '数学出版社', 'H1', '3', 3),
(10, '神经病学', '王庭槐', 'photo/10.jpg', '生理', '第9版生理教材', '2018年', '人民卫生出版社', 'J1', '3', 3),
(11, '线性代数', '王庭槐', 'photo/11.jpg', '生理', '第9版生理教材', '2018年', '人民卫生出版社', 'I1', '3', 3),
(12, '脂代谢', '吕凤娟', 'photo/moren.jpg', '生化', '脂代谢课件PDF版', '2019', '华工', '', 'wenjian/book12.pdf', 0),
(13, '氨基酸代谢', '吕凤娟', 'photo/13.jpg', '生化', '氨基酸PPT课件pdf版', '2019', '华工', '', 'wenjian/book13.pdf', 0);

--
-- 转储表的索引
--

--
-- 表的索引 `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
