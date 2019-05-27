/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50643
Source Host           : localhost:3306
Source Database       : dishesdemo

Target Server Type    : MYSQL
Target Server Version : 50643
File Encoding         : 65001

Date: 2019-05-27 18:17:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `dishadd`
-- ----------------------------
DROP TABLE IF EXISTS `dishadd`;
CREATE TABLE `dishadd` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dishname` varchar(255) NOT NULL,
  `dishclass` varchar(255) NOT NULL,
  `dishmoney` float NOT NULL,
  `dishimg` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dishadd
-- ----------------------------
INSERT INTO `dishadd` VALUES ('8', '可乐鸡翅', ' 热菜', '35', ' 1.png');
INSERT INTO `dishadd` VALUES ('9', ' 红烧排骨', ' 热菜', '60.5', ' 4.png');
INSERT INTO `dishadd` VALUES ('10', ' 小葱拌豆腐', ' 凉菜', '15.5', ' 9.png');
INSERT INTO `dishadd` VALUES ('11', '西红柿鸡蛋汤', ' 汤类', '20.2', ' 8.png');
INSERT INTO `dishadd` VALUES ('12', ' 百事可乐', ' 饮料', '3', ' 6.png');

-- ----------------------------
-- Table structure for `orderadd`
-- ----------------------------
DROP TABLE IF EXISTS `orderadd`;
CREATE TABLE `orderadd` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `randomid` int(11) NOT NULL,
  `timeadd` tinytext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `randomid` (`randomid`),
  KEY `randomid_2` (`randomid`,`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderadd
-- ----------------------------
INSERT INTO `orderadd` VALUES ('2', '5711', '2019-04-26 21:05');
INSERT INTO `orderadd` VALUES ('3', '6868', '2019-04-26 21:10');

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dishname` varchar(255) NOT NULL,
  `num` int(11) NOT NULL,
  `money` float(11,0) NOT NULL,
  `dishtype` varchar(255) NOT NULL,
  `ids` int(11) NOT NULL,
  `orderids` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `eeee` (`ids`) USING BTREE,
  KEY `zzz` (`orderids`),
  CONSTRAINT `eeee` FOREIGN KEY (`ids`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('14', ' 红烧排骨', '3', '180', ' 热菜', '1', '5711');
INSERT INTO `orders` VALUES ('15', '西红柿鸡蛋汤', '1', '20', ' 汤类', '1', '5711');
INSERT INTO `orders` VALUES ('16', '可乐鸡翅', '2', '70', ' 热菜', '1', '6868');
INSERT INTO `orders` VALUES ('17', ' 小葱拌豆腐', '1', '15', ' 凉菜', '1', '6868');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `passwords` varchar(255) CHARACTER SET utf8 COLLATE utf8_slovenian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'sunli', 's19961224');
