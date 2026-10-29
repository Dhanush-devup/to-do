//index.js
import "./styles.css";
import { Project ,Todo} from "./class.js";
import { listenProjectForm , displayProjects ,modifyProjects} from "./projectForm.js";

export let projectList = [];
projectList.push(new Project("All projects"));


export function add_project(project){
    projectList.push(project);
    console.log(projectList);
    displayProjects();
}
listenProjectForm();
displayProjects();
modifyProjects();

const dialog = document.querySelector("#hello");
// dialog.showModal();
