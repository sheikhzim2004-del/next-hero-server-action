import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createATask = async (formData) => {
"use server";
// const name = formData.get('name');
// console.log('Creating a task with name:', formData);
const newTask = Object.fromEntries(formData.entries());

const res = await postTask(newTask);

if(res.ok){
  revalidatePath('/tasks');
}
return res;
}