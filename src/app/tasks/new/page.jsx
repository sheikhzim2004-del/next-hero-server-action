"use client";
import { newTaskAction } from '@/lib/creatATask';
import { Input, Label, ListBox, TextField, Select, Button, Modal, FieldError } from '@heroui/react';
import React from 'react';

const NewTask = () => {
  return (
    <div className='w-1/3 mx-auto'>
      <h1 className='text-5xl font-bold'>Add a New Task</h1>
      <div>
        <form action={newTaskAction} className="flex flex-col gap-4">
          <TextField
          isRequired
          minLength={5}
          validate={(value) => {
            if(value.length < 5){
               return "Password must be at least 5 characters and longer";
            }
          }}
          className="w-full"
          name="title" 
          type="text">
            <Label>Title</Label>
            <Input placeholder="Enter your Task Title" />
            <FieldError></FieldError>
          </TextField>
          <TextField className="w-full" name="description" type="text">
            <Label>Description</Label>
            <Input placeholder="Enter your Task Description" />
          </TextField>

          {/* Select Status */}
          <Select name="status" className="w-[256px]" placeholder="Select one">
            <Label>Status</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="pending" textValue="Pending">
                  Pending
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="in-progress" textValue="In Progress">
                  In Progress
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="completed" textValue="Completed">
                  Completed
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          {/* Select Priority */}
          <Select name="priority" className="w-[256px]" placeholder="Select one">
            <Label>Priority</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="low" textValue="Low">
                  Low
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="medium" textValue="Medium">
                  Medium
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="high" textValue="High">
                  High
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>

          <TextField className="w-full" name="username">
            <Label>Username</Label>
            <Input placeholder="Enter your username" />
          </TextField>
          <Modal.Footer>
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button slot="close" type="submit">Submit Task</Button>
          </Modal.Footer>
        </form>
      </div>
    </div>
  );
};

export default NewTask;