const Project= require("../Models/projectModel");

const projectController = async (req,res)=>{

    try {
        const data = req.body;

        const project = new Project(data);
        await project.save();

        res.status(200).json({
            success:"true",
            message:"Successfully Project added!!",
            project:data
        })
    } catch (error) {
        // res.status(400).json({
        //     success:"false",
        //     message:`Error: ${error.message}`
        // }) 
        console.log(error.message)
    }

}

module.exports = projectController;