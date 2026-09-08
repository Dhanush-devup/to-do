//index.js
import "./styles.css";
import { listenProjectForm , displayProjects ,modifyProjects} from "./projectForm.js";

export let projectList = [];

export function add_project(project){
    projectList.push(project);
    console.log(projectList);
    displayProjects();
}
listenProjectForm();
displayProjects();
modifyProjects();

