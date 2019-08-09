//1：加载第三方模块
const express=require("express");
const mysql=require("mysql");
const cors=require("cors");
const session=require("express-session");
//2：配置数据库连接池
var pool=mysql.createPool({
    host:"127.0.0.1",   //地址
    user:"root",        //用户名
    password:"",        //密码
    port:3306,          //端口
    database:"xz",      //库名称
    connectionLimit:15, //连接数量
})

//3:配置跨域模块
var server=express();
server.use(cors({
    //允许跨域访问程序地址列表
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true,//请求验证
}))
//4：配置session模块
server.use(session({
    secret:"128位字符串",//安全字符串
    resave:true,//请求时更新数据
    saveUninitialized:true,//保存初始数据
}));
//4.1:配置项目的静态目录
server.use(express.static("public"));
//http:127.0.0.1:3000/01.jpg
//5：启动监听
server.listen(3000);
