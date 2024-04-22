#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// Print Welcome Message:
console.log(chalk.bold.redBright("\n \t Welcome to codewith Ilyas - TODO-List Application\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View todo-list", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View todo-list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// Function to add a new task to the list:
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your new task:",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully to the Todo-List\n`);
};
// Function to delete a task from the list:
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:"
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List\n`);
};
// Function to view all Todo-list Tasks:
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
    console.log("\n");
};
// Function to update a task:
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name:",
        }
    ]);
    todoList[update_task_index.index] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index} updated successfully [For updated list check option: "View Todo-List"]\n`);
};
main();
