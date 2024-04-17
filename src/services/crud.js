import Axios from "./taskService";

let store = (task)=>{
    return Axios.post('/tasks',task)
}

let index = ()=>{
    return Axios.get('/tasks')
}

let show = (id)=>{
    return Axios.get(`/tasks/${id}`)
}

let update = (id,task)=>{
    return Axios.put(`/tasks/${id}`,task)
}

let destroy = (id)=>{
    return Axios.delete(`/tasks/${id}`)
}

export const crud={
    store,
    index,
    show,
    update,
    destroy
}