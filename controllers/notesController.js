const Note = require("../models/Note");

exports.createNote = async(req,res) =>{
    const {title, content} = req.body
    const note = await Note.create({user: req.user.id, title, content });
    res.status(201).json(note);
};

exports.getNotes = async(req,res) =>{
    const notes = await Note.find({user: req.user.id})
    res.status(201).json(notes);
}

exports.updateNote = async(req,res)=>{
    const note= await Note.findOneAndUpdate({
        _id: req.params.id,
        user: req.user.id
    },
      req.body, 
      {new:true} );
      if(!note){
        return res.status(404).json({message: " Note not found"});

      }
      res.json(note)
};

exports.deleteNote = async(req,res)=>{
    const note = await Note.findOneAndDelete({_id: req.params.id, user: req.user.id });
    if(!note){
        return res.status(404).json({message: "Note not found"});
        
    }
    res.json({message: "Note deleted"})
}