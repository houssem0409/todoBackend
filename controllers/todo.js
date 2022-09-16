const Todo = require('../models/todo');
const {errorHandler}  = require('../helpers/dbErrorHandler')
const _ = require("lodash");

exports.create = (req, res ) => {

   const todo = new Todo(req.body)
   todo.save((err, data) => {
       if(err) {
           return res.status(400).json({
               error: errorHandler(err)
           })
       }
       res.json({data});
   })
};

exports.todoById = (req, res , next , id) => {

    Todo.findById(id).exec((err , todo) => {
        if(err || !todo) {
            return res.status(400).json({
                error : 'todo does not exist !'
            })

        }
        req.todo = todo;
        next();
    })
};
exports.read = (req , res ) => {
    return res.json(req.todo)
}
exports.update = (req, res ) => {

    const todo = req.todo
    todo.name= req.body.name
    todo.name= req.body.description
    todo.save((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});
    })
 };
 exports.remove = (req, res ) => {

    const todo = req.todo
    todo.remove((err, data) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message : 'todo deleted !'
        });
    })
 };
 exports.list = (req, res ) => {

    Todo.find().exec((err , data ) => {
        
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});

    })
  
    
 };