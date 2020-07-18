const db=require('../config/database');
const express=require('express');
const router=express.Router();
router.get('/getbill',(req,res)=>{
let sql='select * from bill';
db.query(sql,(err,result)=>{
 if(!err){
res.status(200).json({bill:result});
 }
 else
 {


 }   
});  




});
router.post('/add',(req,res)=>{
    const {name,quantity,cost}=req.body;
    let price=cost * quantity;
    let body={product_name:name,quantity:quantity,cost:cost,price:price};
    let sql ='insert into bill set ?';
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           req.flash('success_msg','product inserted');
           res.redirect('/');
        }
        else
        {
            req.flash('error',err);
            res.redirect('/');
        }
    });
});
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {quantity,cost}=req.body;
    let price=quantity*cost;
    let sql='update bill set quantity=? price=? where id=? ';
    let body=[quantity,price,id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','bill updated');
            res.redirect('/');
        }
        else
        {
           req.flash('error',err);
           res.redirect('/');
        }
    });
});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='select * from bill where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
           res.status(200).json({
               product:result[0]
           });
        }
        else
        {
           res.status(401).json({
               msg:'error occured',
               error:err
           });
        }
    });
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='delete from bill where id=?';
    db.query(sql,[id],(err,result)=>{
        if(!err)
        {
           res.status(200).json({
               msg:'product deleted'
           });
        }
        else
        {
           res.status(401).json({
               msg:'error occured',
               error:err
           });
        }
    });
});
module.exports=router;