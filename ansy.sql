SET NAMES UTF8;
DROP DATABASE IF EXISTS ansy;
CREATE DATABASE ansy CHARSET=UTF8;
USE ansy;

/*用户列表*/
CREATE TABLE ys_visitor(
	vid int PRIMARY KEY AUTO_INCREMENT,#用户ID
	vname varchar(64) unique,#用户名
	email varchar(32),#邮箱
	sex BOOLEAN,#性别
	isLikeProfile BOOLEAN DEFAULT FALSE,#个人信息篇点赞
	isLikeWork BOOLEAN DEFAULT FALSE,#工作篇点赞
	isLikeLife BOOLEAN DEFAULT FALSE,#生活篇点赞
	comments varchar(6225)#建议
);
INSERT INTO ys_visitor VALUES(null,"ansy","yansy@123.com",false,null,null,null,null);
INSERT INTO ys_visitor VALUES(null,"李彦宏","Badu@123.com",false,null,null,null,null);
INSERT INTO ys_visitor VALUES(null,"马云","Alibaba@123.com",false,null,null,null,null);
INSERT INTO ys_visitor VALUES(null,"马化腾","Tengxun@123.com",false,null,null,null,null);

/*website*/
CREATE TABLE ys_website(
	webid INT PRIMARY KEY AUTO_INCREMENT,#网站id
	webname VARCHAR(32)#站点名称
);
CREATE TABLE work_item(
	iid int PRIMARY KEY AUTO_INCREMENT,#编号
	iname varchar(64),#项目名称
	pic varchar(128),#图片
	description varchar(6225)#描述
);
INSERT INTO work_item VALUES(null,"项目1","img/1.jpg",null);
INSERT INTO work_item VALUES(null,"项目2","img/2.jpg",null);
INSERT INTO work_item VALUES(null,"项目3","img/3.jpg",null);
