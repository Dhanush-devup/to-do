//projectform.js

import { project_manager ,project_list_manager} from "./projectManager.js";
import { add_project,projectList } from "./index.js";
import { Project } from "./class.js";
const projectform = document.querySelector("#new_project_form");

export function listenProjectForm(){
projectform.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("form sybmission  registered");
    const formdata = new FormData(projectform);

    const projectName = formdata.get('project_name');

    if (projectName){

    const newproject = new Project(projectName);

    add_project(newproject);
    projectform.reset();
    }
})
}

export function displayProjects(){
    const project_dashboard = document.querySelector(".project");
    project_dashboard.innerHTML = '';
    for (let project of projectList ){
        // console.log("this is a project....");
        const div = document.createElement("div");
        div.classList.add("project_ele");
        div.dataset.projectId = project.id;
        div.dataset.name = project.name;

        const p = document.createElement("p");
        p.textContent = project.name;
        p.classList.add("project_ele");


        const edit_btt = document.createElement("button");
        edit_btt.textContent = "edit";
        edit_btt.className = 'btt edit_project';
        edit_btt.dataset.projectId = project.id;

        const del_btt = document.createElement("button");
        del_btt.textContent = "del";
        del_btt.className = "btt del_project";
        del_btt.dataset.projectId = project.id;

        div.append(p,edit_btt,del_btt);
        project_dashboard.append(div);
    }
}

export function modifyProjects(){
    const project_dashboard = document.querySelector(".project");

    project_dashboard.addEventListener('click',function(e){
        const project_ele = e.target.closest(".project_ele");
        let project_name = project_ele.dataset.name;
        let project_id = project_ele.dataset.projectId;
        const projectListManager = project_list_manager();
        if (!project_ele) return;

        if (e.target.classList.contains("project_ele")){
            //display or select the project
            //TODO
            
            console.log("prject selected...")
        }
        else if (e.target.classList.contains("edit_project")){
            //rename the project
            console.log("rename selected...");
            
            //create a from dynamically 
            project_ele.innerHTML = `
                <form class="rename_form">
                    <input type="text" name="project_name"  required>
                    <button type="submit">Save</button>
                </form>
            `;
            const form = project_ele.querySelector(".rename_form");
            form.project_name.value = project_name;

            form.addEventListener("submit",function (e){
                e.preventDefault();
                const newname = form.project_name.value;

                projectListManager.rename(project_id,newname);

                displayProjects();
            })
        }
        else if (e.target.classList.contains("del_project")){
            //delete the project
            console.log("delete selected...")
            projectListManager.delProject(project_id);
            displayProjects();
        }
    })

}