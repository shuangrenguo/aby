const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.登陆，post
router.post("/login",(req,res)=>{
	//接收验证数据
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	//查询数据库
	var sql="select * from xz_user where "
	+"uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//注册
router.post("/regCheck",(req,res)=>{
	var $obj=req.body
	var sql="INSERT INTO xz_user SET ?";
	pool.query(sql,[$obj],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("true");
		}
	});
})
router.post("/reg",(req,res)=>{
	var $uname=req.query.body.uname;
	var sql="select * from xz_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("true");
		}else{
			res.send("false");
		}
	})
})

	

// router.post("/reg",(req,res)=>{

module.exports=router;