export const createATask = async (formData) => {
"use server";

const name = formData.get("name");

console.log('add a task with name: ', name);
}