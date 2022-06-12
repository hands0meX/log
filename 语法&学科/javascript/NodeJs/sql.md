文档： https://www.npmjs.com/package/mysql

下载数据库图形化工具： https://www.navicat.com/en/

1. 安装sql服务
下载sql包 https://dev.mysql.com/downloads/mysql/


安装之后 https://juejin.cn/post/6982133511029276680

登录： mysql -u root -p
(tips: 密码是hhhhxxxx

navigate连接sql服务时候的问题: 
 权限问题：
    create user ‘tom’@’localhost’ identified by ‘123123’;
    grant all privileges on *.* to ‘tom’@’localhost’ ;
  单独授予某种权限的写法：
    GRANT SELECT
    ON oilsystem.input
    TO ‘u5’@’localhost’

    刷新权限并查看权限的写法：
    FLUSH PRIVILEGES;
    select * from user;

    注意：在创建用户前需要加一句
    Use mysql;

    另外，收回某种权限的写法是：
    REVOKE select
    ON .
FROM ‘u1’@’localhost’;