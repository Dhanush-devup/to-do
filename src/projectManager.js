//project.js
import {Todo , Project} from "./class.js";
import { add_project,projectList } from "./index.js";
import {  displayProjects } from "./projectForm.js";


export function project_list_manager(){
    function rename(id,name){
        for (let project of projectList){
            if (project.id==id){
                project.name = name;
                displayProjects();
            }
        }
    }
    function delProject(id){
        for (let project of projectList){
            if (project.id==id){
                const index = projectList.findIndex(project => project.id === id);

                if (index !== -1) {
                    projectList.splice(index, 1);
                }
                displayProjects();
            }
        }
    }
    return {rename,delProject};
}
export function project_manager( ){
    function viewTodo(project){
        for (let task of project.todos){
            console.log(task);
        }
    }
    function delTask(project,task){
        for (let i=0;i < project.todos.length;i++){
            if (project.todos[i].id==task.id){
                project.todos.splice(i,1);
            }
        }
    }
    function addTask(project,task){
        project.todos.push(task);
    }
    return {viewTodo,delTask,addTask}
}


export function taskManager(){
    function updateTask(title , description,dueDate,priority,completed){
        return { id,title , description , dueDate , priority , completed:false};
    }
}