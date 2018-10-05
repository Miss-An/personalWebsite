const express=require("express");

var router=express.Router();
var pool=require("../ys_pool");

router.get("/lo",(req,res)=>{
    var $vname=req.query.vname;
    var $email=req.query.email;
    var sql=`SELECT * FROM ys_visitor WHERE vname=? AND email=?`;
    pool.query(sql,[$vname,$email],(err,result)=>{
        if(err){
            throw err;
        }
        //req.session.vid=result[0].vid;
        res.send(result);
    })
});
// router.get("/islo",(req,res)=>{
//     if(req.session.vid==null)
//       res.send({ok:0});
//     else{
//       var sql="select * from ys_visitor where vid=?";
//       pool.query(sql,[req.session.vid],(err,result)=>{
//         res.send({ok:1,vname:result[0].vname});
//       })
//     }
//   })
router.post("/insert",(req,res)=>{
  var $vname=req.body.vname;
  var $email=req.body.email;
  var sql=`INSERT INTO ys_visitor values (NULL,?,?,false,NULL,NULL,NULL,NULL)`;

  pool.query(sql,[$vname,$email],(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send("ok");
    }
  });
})

router.post("/update",(req,res)=>{
  var $vname=req.body.vname;
  var $comments=req.body.comments;
  var sql=`update ys_visitor set comments=? where vname=?`;
  pool.query(sql,[$comments,$vname],(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send("ok");
    }
  });
})

router.post("/updateProfileLike",(req,res)=>{
  var $vname=req.body.vname;
  var sql=`update ys_visitor set isLikeProfile=1 where vname=?`;
  pool.query(sql,[$vname],(err,result)=>{
    if(err){
      res.send(err);
    }else{
      res.send("ok");
    }
  });
})

module.exports=router;