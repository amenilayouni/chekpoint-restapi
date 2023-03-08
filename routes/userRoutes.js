const express = require('express')
const router = express.Router()
const User = require('../models/usershema')
router.post('/', async(req,res)=>{
    
    try {
        
        const newUser = await User.create(req.body)
        res.json( newUser)
        
    } 
    
    catch (error) {
        console.log(error)
        
    }
})

router.get('/', async(req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        console.log(error)
    }
 })
 

 router.delete('/:id', async(req,res)=>{
    try {
       
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.json({msg:'user has be deleted'})
    } catch (error) {

        console.log(error)
        
    }

 })

 router.put('/:id', async(req,res)=>{
    try {
        const updatedUser= await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}}, {new:true})
        res.json(updatedUser)
    } catch (error) {
        console.log(error)
    }
 })
module.exports=router
