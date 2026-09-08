//class.js

export function  Todo(title , description,dueDate,priority){
    let id = crypto.randomUUID();//generate randomly 
    return { id,title , description , dueDate , priority , completed:false};
}

export function Project(name){
    const todos = [];
    let id = crypto.randomUUID();//generate randomly 
    return {name , todos,id};
}
