const Position = require('../models/Position.model');

exports.postPosition = async (req,res)=>{
    // console.log(req.body)
    
    try {
        const newPosition= new Position({ ...req.body });
        const cat =await Position.findOne({ name : req.body.name });
         if(cat){
            res.status(400).send({message :"Position already exist"});
            return;
         }
        const response = await newPosition.save();
        res.send({response:response,message:"Position is saved"});
    } catch (error) {
        res.status(500).send("can not save it");
    }
     
 }

 exports.getAll=async (req,res) =>{
    try {
        const result = await Position.find();
        res.send({response:result,message:"getting Positions succefuly"});
    } catch (error) {
        res.status(400).send({message:"can not get Positions"});

        
    }

}

exports.getOne = async (req,res) =>{
    try {
        const result = await Position.findOne({_id:req.params.id});
        if(!result){
            res.status(400).send({message:"there is no Position  with this id"});
            return;
        }
        else{
            res.send({response:result,message:"getting Position succefuly"});
            return;
        }
        } catch (error) {
        res.status(400).send({message:"there is no Position  with this id"});  
    }

}
 exports.deleteOne= async (req,res) =>{
    try {
        const result= await Position.deleteOne({_id:req.params.id});
        console.log(result);
        result.n
        ?res.send({message:"Position deleted"})
        :res.send({message:"there is no Position with this id"});
    } catch (error) {
        res.send({message:"there is no id"});
    }
}

exports.updateOne= async (req,res)=>{
    try {
        const result =await Position.updateOne(
            {_id:req.params.id},
            {$set:{...req.body}
        });
        console.log(result);
        res.nModified 
        ?res.send({message:"update successfully"})
        :res.send({message:"allready updated"});
    } catch (error) {
        res.status(400).send({message:"update rejected"});
    }
}