const db=require('../config/database');
const express=require('express');
const router=express.Router();
router.post('/add',(req,res)=>{
    const {name}=req.body;
    let sql='insert into type set ?';
    let body={name:name};
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            req.flash('success_msg','type created');
            res.redirect('/type');
        }
        else
        {
            req.flash('error',err);
            res.redirect('/type');
        }
    });
});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    let sql='select * from type where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                type:result[0]
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
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    let sql='update type set name=? where id=?';
    let body=[name,id];
    db.query(sql,body,(err,response)=>{
        if(!err)
        {
           res.status(200).json({
            msg:'type updated'
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
    let sql='DELETE FROM type where id=?';
    let body=[id];
    db.query(sql,body,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'type deleted'
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