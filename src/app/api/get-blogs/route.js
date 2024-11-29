import { NextResponse } from "next/server"
import connectToDB from '../../../database/page'
import Blog from "@/models/blog";


export async function GET() {
  try{

    await connectToDB();
    const extractAllBlogsFromDatabase = await Blog.find({});

    if(extractAllBlogsFromDatabase){
      return NextResponse.json({
        success: true,
        data: extractAllBlogsFromDatabase
      })
      
    } else{
      return NextResponse.json({
        success: false,
        message: 'Something went wrong! Please try again '
      })
    }

  }catch(error){
    console.log(error)
    return NextResponse.json({
      success: false,
      message: 'Something went wrong! Please try again'
    })
  }
}