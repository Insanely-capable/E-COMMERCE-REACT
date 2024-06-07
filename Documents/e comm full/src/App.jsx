// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

// function App() {
//   const [count, setCount] = useState(0);

//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);

//   function handelSubmit() {
//     if (!isEditing) {
//       const obj = {
//         id: Date.now(),
//         task: task,
//       };
//       setTasks([...tasks, obj]);
//     } else {
//       console.log("Editting");
//       let taskToEdit = tasks.find((x) => {
//         return x.id == isEditing;
//       });
//       taskToEdit.task = task;
//       console.log(taskToEdit.task);
//       setTasks(tasks);
//       setIsEditing(false);
//     }
//     setTask("");
//   }

//   function deleteTask(idToDelete) {
//     // console.log(idToDelete);
//     setTasks(tasks.filter((x) => x.id !== idToDelete));
//   }

//   function editTasks(id) {
//     console.log(id);
//     setIsEditing(id);
//     setTask(tasks.find((obj) => obj.id == id).task);
//   }

//   return (
//     <>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Enter tasks.."
//       />
//       &nbsp;
//       <button onClick={handelSubmit}>Add Task</button>
//       <ul>
//         {tasks.map((task, index) => {
//           return (
//             <li key={index}>
//               <label htmlFor={task.id}>{task.task}</label>
//               <FontAwesomeIcon
//                 icon={faTrash}
//                 onClick={() => deleteTask(task.id)}
//               />
//               <FontAwesomeIcon
//                 icon={faPencil}
//                 onClick={() => editTasks(task.id)}
//               />
//               <input
//                 type="checkbox"
//                 id={task.id}
//                 onClick={(e) => {
//                   if (e.target.parentElement.className == "completed")
//                     e.target.parentElement.className = "";
//                   else e.target.parentElement.className = "completed";

//                   console.log(e.target.parentElement.className);
//                 }}

//               ></input>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default App;






import { useState } from "react";
import "./App.css"; // Assuming you have your styles here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // New state for dark mode

  function handelSubmit() {
    if (!isEditing) {
      const obj = {
        id: Date.now(),
        task: task,
      };
      setTasks([...tasks, obj]);
    } else {
      console.log("Editting");
      let taskToEdit = tasks.find((x) => {
        return x.id == isEditing;
      });
      taskToEdit.task = task;
      console.log(taskToEdit.task);
      setTasks(tasks);
      setIsEditing(false);
    }
    setTask("");
  }

  function deleteTask(idToDelete) {
    // console.log(idToDelete);
    setTasks(tasks.filter((x) => x.id !== idToDelete));
  }

  function editTasks(id) {
    console.log(id);
    setIsEditing(id);
    setTask(tasks.find((obj) => obj.id == id).task);
  }

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}> {/* Apply dark mode class */}
      <header>
        <h1>My E-Commerce Site</h1>
        <button onClick={toggleDarkMode}>
          Switch to {isDarkMode ? "Light" : "Dark"} Mode {/* Toggle mode text */}
        </button>
      </header>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter tasks.."
      />
      &nbsp;
      <button onClick={handelSubmit}>Add Task</button>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <label htmlFor={task.id}>{task.task}</label>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deleteTask(task.id)}
              />
              <FontAwesomeIcon
                icon={faPencil}
                onClick={() => editTasks(task.id)}
              />
              <input
                type="checkbox"
                id={task.id}
                onClick={(e) => {
                  if (e.target.parentElement.className == "completed")
                    e.target.parentElement.className = "";
                  else e.target.parentElement.className = "completed";

                  console.log(e.target.parentElement.className);
                }}
              ></input>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
