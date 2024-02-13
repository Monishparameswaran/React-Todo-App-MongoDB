const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://admin:5how8HoKUEKibEUG@cluster0.pydstvs.mongodb.net/");
const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo=mongoose.model('todo',todoSchema);
module.exports={
    todo
}