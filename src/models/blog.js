import mongoose from "mongoose";

//connnected Database
//Created models
//api routes (crud) - add, fetch/get, update, delete

const BlogSchema = new mongoose.Schema({
  title : String,
  description : String,
})

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;