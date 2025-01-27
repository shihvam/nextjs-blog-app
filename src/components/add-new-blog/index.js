'use client'

import { Fragment } from "react";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTitle } from "../ui/dialog";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

function AddNewBlog({openBlogDialogue, setOpenBlogDialogue, loading,  blogFormData, setBlogFormData, handleSaveBlogData, currentEditedBlogID, setCurrentEditedBlogID}) {


  return (<Fragment>
  
  <div>
      <Button onClick={ () => {setOpenBlogDialogue(true)} }  >Add new blog</Button>
  </div>

  <Dialog  open={openBlogDialogue} onOpenChange={() => {
    setOpenBlogDialogue(false)
    setBlogFormData({
      title: '',
      description: '',
    });
    setCurrentEditedBlogID(null);
  }} >
      
      <DialogContent className="sm:max-w-[425px]">

        <DialogHeader>
          <DialogTitle>{currentEditedBlogID ? 'Edit Blog' : 'Add New Blog' } </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              name="title" placeholder='Enter blog title' value={blogFormData.title} 
              
              onChange = {(event) => setBlogFormData({
                ...blogFormData, title : event.target.value,
              })}

              id="title"
              className="col-span-3"
            />

          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input
            name='description'
            value={blogFormData.description}
            onChange={(event) =>  setBlogFormData({...blogFormData, 
              description : event.target.value
            }) }
              id="description"
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSaveBlogData} type="button">
          {
            loading? 'Saving Changes' : 'Save changes'
          }
          </Button>
        </DialogFooter>

      </DialogContent>

    </Dialog>

  </Fragment>);
}

export default AddNewBlog;