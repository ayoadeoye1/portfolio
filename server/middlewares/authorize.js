import UserDtl from '../models/psp.model.js'

export const Author = async(req, res, next)=>{
    try {
       // const uID = await UserDtl.findOne( id => id === req.id);
        console.log(uID)
        // if(!uID){
        //     res.status(400).json("user not logged in");
        // }
        // res.status(200).json(uID);
        // next() 
    } catch (error) {
        // res.status(400).json({res_error: error})
    }
}