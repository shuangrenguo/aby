set names utf8;
DROP DATABASE IF EXISTS aby;
CREATE DATABASE aby CHARSET=UTF8;
use aby;

CREATE TABLE aby_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32), #�û���
    upwd VARCHAR(20),  #����
    gender BOOL,       #�Ա� 0Ů 1��
    realname VARCHAR(32),  #��ʵ����
    birthday VARCHAR(32),  #�������� 
    email VARCHAR(32),     #����
    phone VARCHAR(11),     #�绰
    idcard VARCHAR(32),    #���֤
    u_pic  VARCHAR(32)   #ͷ���ַ
);
#�������������Դ��Ϣ�ı�
create table aby_house(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    hname VARCHAR(64),  #������
    title VARCHAR(128),  #����
    detail VARCHAR(256), #ժҪ
    hdetail VARCHAR(256), #��Դ����
    permission VARCHAR(256), #����ʹ��Ȩ��
    hic VARCHAR(256),    #�ֲ�ͼƬ��ַ
    price DECIMAL(6,2),  #�۸�
    original_price DECIMAL(6,2), #ԭ�۸�
    cid INT,             #��
    h_type VARCHAR(32), #��Դ����
    addr_detail VARCHAR(256),   #��ϸ��ַ
    #h_grade VARCHAR(64),        #���ݼ������
    h_b_discount VARCHAR(64),           #�ŻݼӴ�����
    h_discount VARCHAR(64),             #�Ż�����
    h_zhekou VARCHAR(32),               #�ۿ�
    h_info_member VARCHAR(32),          #��Դ������������
    h_info_rooms VARCHAR(32),           #��Դ����������
    h_info_beds VARCHAR(32), 	   #��Դ������������
    h_subinfo VARCHAR(128),              #��������,0��ʼ��ż���±�Ϊ���⣬�����±�Ϊ���ܣ�����/������֮���ֳ�����ʹ��
    h_server_price INT,         #�����
    h_enterleave_time VARCHAR(32), #��ס���˷���ʱ��
    h_cancel VARCHAR(32),       #ȡ����������
    h_allow VARCHAR(32),       #�洢���ֵ 0������  1����  ���Ÿ���  �������ʹ��
    #��ɫ��ǩ  0û�� 1��
    landlord BOOL,          #���޷���
    new_house BOOL          #�����·�
    #������ɫ��ǩ��Ϊ0ʱ��ɫ��ǩ��ʾ���ֺ�������
);
#�������淿Դ��ǩ�ı�
CREATE TABLE aby_Tags(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    hid INT,
    tags VARCHAR(128) #���淿Դ�Ļ�ɫ��ǩ������/������֮��ָ��������ʹ��
);
#�������淿Դ������ʩ�ı�
CREATE TABLE aby_server(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    hid INT,
    s_type INT,      #0������ס���� 1���������ʩ 2����ϴԡ��ʩ 3���������Ʒ 4����ȫ��ʩ
    pid INT          #��Ӧ�����ͼƬ���
);
#�������������ʩͼƬ��ַ�ı�
CREATE TABLE aby_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    s_type INT,#0������ס���� 1���������ʩ 2����ϴԡ��ʩ 3���������Ʒ 4����ȫ��ʩ
    p_address VARCHAR(256)
);
#�������������Ϣ�ı�
CREATE TABLE aby_story(
    storyid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    type VARCHAR(32),  #������� ������ʳ�����ޣ�����
    subtitle VARCHAR(32),  #С����  ��ʵ�ǵص㶨λ
    story_title VARCHAR(32),  #���±���
    story_content VARCHAR(2048), #��������,������
    story_pic VARCHAR(128),   #ͼƬ·��
    story_date VARCHAR(32),   #��������
    zan  INT                  #������
);
#�����û���Դ���۱�
CREATE TABLE aby_remark(
    rid INT PRIMARY KEY AUTO_INCREMENT,  #���۱�ID
    hid INT,
    uname VARCHAR(32),        #�û���
    r_time VARCHAR(32),       #ʱ��
    r_remark VARCHAR(256)     #����
);
#�����û��������۱�
CREATE TABLE aby_storyremark(
    srid INT PRIMARY KEY AUTO_INCREMENT,  #�������۱�ID
    storyid INT,
    uname VARCHAR(32),        #�û���
    r_time VARCHAR(32),       #ʱ��
    r_remark VARCHAR(256)    #����
);

#�����û���Դ������
CREATE TABLE aby_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,   #Ԥ����id
    s_staet VARCHAR(32),     #����ʱ��
    s_stop VARCHAR(32),     #����ʱ��
    hid INT,                #��ԴID
    o_state INT             #������״̬  0������ʷ������ȡ��Ԥ��  1����Ԥ������  2��������ᶩ��
);
#�����û���Ը��
create table aby_wish(
    wid INT PRIMARY KEY AUTO_INCREMENT,   #��Ը��id
    uid INT,
    storyid INT,
    hid INT
);