import React, { useState } from "react";

const ToDoList = () => {
 // Exemplo de estado para manter a lista de tarefas
 const [tasks, setTasks] = useState([
  {
   id: 1,
   name: "Call Sam For payments",
   priority: "High priority",
   completed: false,
  },
  {
   id: 2,
   name: "Make payment to Bluedart",
   priority: "Low priority",
   completed: false,
  },
  { id: 3, name: "Office rent", priority: "Middle priority", completed: false },
  {
   id: 4,
   name: "Office grocery shopping",
   priority: "High priority",
   completed: false,
  },
  {
   id: 5,
   name: "Ask for Lunch to Clients",
   priority: "Low priority",
   completed: false,
  },
 ]);

 // Função para marcar uma tarefa como concluída
 const handleTaskComplete = (id) => {
  setTasks(
   tasks.map((task) => (task.id === id ? { ...task, completed: true } : task))
  );
 };

 // Função para remover uma tarefa
 const handleTaskRemove = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
 };

 return (
  <section className="vh-100 gradient-custom-2">
   <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
     <div className="col-md-12 col-xl-10">
      <div className="card mask-custom">
       <div className="card-body p-4 text-white">
        <div className="text-center pt-3 pb-2">
         <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
          alt="Check"
          width="60"
         />
         <h2 className="my-4">Task List</h2>
        </div>
        <table className="table text-white mb-0">
         <thead>
          <tr>
           <th scope="col">Team Member</th>
           <th scope="col">Task</th>
           <th scope="col">Priority</th>
           <th scope="col">Actions</th>
          </tr>
         </thead>
         <tbody>
          {tasks.map((task) => (
           <tr key={task.id} className="fw-normal">
            <th>
             <img
              src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava${task.id}-bg.webp`}
              alt={`avatar ${task.id}`}
              style={{ width: "45px", height: "auto" }}
             />
             <span className="ms-2">{task.name}</span>
            </th>
            <td className="align-middle">{task.name}</td>
            <td className="align-middle">
             <h6 className="mb-0">
              <span
               className={`badge ${
                task.priority === "High priority"
                 ? "bg-danger"
                 : task.priority === "Low priority"
                 ? "bg-success"
                 : "bg-warning"
               }`}
              >
               {task.priority}
              </span>
             </h6>
            </td>
            <td className="align-middle">
             {!task.completed && (
              <>
               <a
                href="#!"
                data-mdb-tooltip-init
                title="Done"
                onClick={() => handleTaskComplete(task.id)}
               >
                <i className="fas fa-check fa-lg text-success me-3"></i>
               </a>
               <a
                href="#!"
                data-mdb-tooltip-init
                title="Remove"
                onClick={() => handleTaskRemove(task.id)}
               >
                <i className="fas fa-trash-alt fa-lg text-warning"></i>
               </a>
              </>
             )}
            </td>
           </tr>
          ))}
         </tbody>
        </table>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default ToDoList;
