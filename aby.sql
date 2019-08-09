set names utf8;
DROP DATABASE IF EXISTS aby;
CREATE DATABASE aby CHARSET=UTF8;
use aby;

CREATE TABLE aby_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32), #用户名
    upwd VARCHAR(20),  #密码
    gender BOOL,       #性别 0女 1男
    realname VARCHAR(32),  #真实姓名
    birthday VARCHAR(32),  #出生日期 
    email VARCHAR(32),     #邮箱
    phone VARCHAR(11),     #电话
    idcard VARCHAR(32),    #身份证
    u_pic  VARCHAR(32)   #头像地址
);
#创建保存地区房源信息的表
create table aby_house(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    hname VARCHAR(64),  #房屋名
    title VARCHAR(128),  #标题
    detail VARCHAR(256), #摘要
    hdetail VARCHAR(256), #房源详情
    permission VARCHAR(256), #房客使用权限
    hic VARCHAR(256),    #轮播图片地址
    price DECIMAL(6,2),  #价格
    original_price DECIMAL(6,2), #原价格
    cid INT,             #市
    h_type VARCHAR(32), #房源类型
    addr_detail VARCHAR(256),   #详细地址
    #h_grade VARCHAR(64),        #房屋级别待定
    h_b_discount VARCHAR(64),           #优惠加粗内容
    h_discount VARCHAR(64),             #优惠内容
    h_zhekou VARCHAR(32),               #折扣
    h_info_member VARCHAR(32),          #房源概览房客人数
    h_info_rooms VARCHAR(32),           #房源概览卧室数
    h_info_beds VARCHAR(32), 	   #房源概览床的数量
    h_subinfo VARCHAR(128),              #概览介绍,0开始的偶数下标为标题，奇数下标为介绍，都用/隔开，之后拆分成数组使用
    h_server_price INT,         #服务费
    h_enterleave_time VARCHAR(32), #入住与退房的时间
    h_cancel VARCHAR(32),       #取消政策内容
    h_allow VARCHAR(32),       #存储五个值 0不允许  1允许  逗号隔开  拆分数组使用
    #绿色标签  0没有 1有
    landlord BOOL,          #超赞房东
    new_house BOOL          #超赞新房
    #两个绿色标签都为0时绿色标签显示评分和评论数
);
#创建保存房源标签的表
CREATE TABLE aby_Tags(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    hid INT,
    tags VARCHAR(128) #保存房源的灰色标签内容用/隔开，之后分割成数组来使用
);
#创建保存房源便利设施的表
CREATE TABLE aby_server(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    hid INT,
    s_type INT,      #0代表入住服务 1代表基础设施 2代表洗浴设施 3代表厨房用品 4代表安全设施
    pid INT          #对应服务的图片编号
);
#创建保存遍历设施图片地址的表
CREATE TABLE aby_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    s_type INT,#0代表入住服务 1代表基础设施 2代表洗浴设施 3代表厨房用品 4代表安全设施
    p_address VARCHAR(256)
);
#创建保存故事信息的表
CREATE TABLE aby_story(
    storyid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    type VARCHAR(32),  #故事类别 例如美食，民宿，景点
    subtitle VARCHAR(32),  #小标题  其实是地点定位
    story_title VARCHAR(32),  #故事标题
    story_content VARCHAR(2048), #故事内容,段落用
    story_pic VARCHAR(128),   #图片路径
    story_date VARCHAR(32),   #发布日期
    zan  INT                  #点赞数
);
#创建用户房源评论表
CREATE TABLE aby_remark(
    rid INT PRIMARY KEY AUTO_INCREMENT,  #评论表ID
    hid INT,
    uname VARCHAR(32),        #用户名
    r_time VARCHAR(32),       #时间
    r_remark VARCHAR(256)     #评论
);
#创建用户故事评论表
CREATE TABLE aby_storyremark(
    srid INT PRIMARY KEY AUTO_INCREMENT,  #故事评论表ID
    storyid INT,
    uname VARCHAR(32),        #用户名
    r_time VARCHAR(32),       #时间
    r_remark VARCHAR(256)    #评论
);

#创建用户房源订单表
CREATE TABLE aby_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,   #预定表id
    s_staet VARCHAR(32),     #出租时间
    s_stop VARCHAR(32),     #结束时间
    hid INT,                #房源ID
    o_state INT             #订单表状态  0代表历史订单已取消预定  1代表预定订单  2代表已完结订单
);
#创建用户心愿单
create table aby_wish(
    wid INT PRIMARY KEY AUTO_INCREMENT,   #心愿单id
    uid INT,
    storyid INT,
    hid INT
);