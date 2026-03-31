// import React, { useState } from "react";
// import "./App.css";
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, deleteTodo, toggleTodo, editTodo } from './store';

// function TodoApp() {
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();
//   const [input, setInput] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   const [editingText, setEditingText] = useState("");

//   const handleAdd = () => { 
//     if (input.trim() === "") return;
//     dispatch(addTodo(input.trim()));
//     setInput("");
//   };

//   const handleDelete = (id) => dispatch(deleteTodo(id));
//   const handleToggle = (id) => dispatch(toggleTodo(id));

//   const startEdit = (todo) => {
//     setEditingId(todo.id);
//     setEditingText(todo.text);
//   };
//   const saveEdit = (id) => {
//     if (!editingText.trim()) return;
//     dispatch(editTodo({ id, text: editingText.trim() }));
//     setEditingId(null);
//     setEditingText("");
//   };
//   const cancelEdit = () => {
//     setEditingId(null);
//     setEditingText("");
//   };

//   return (
//     <div className="App">
//       <h1>  To-Do App </h1>
//       <div className="input-row">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter a task here..."
//         />
//         <button onClick={handleAdd}>Add</button>
//       </div>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggle(todo.id)}
//             />
//             {editingId === todo.id ? (
//               <>
//                 <input
//                   value={editingText}
//                   onChange={(e) => setEditingText(e.target.value)}
//                 />
//                 <button onClick={() => saveEdit(todo.id)}>Save</button>
//                 <button onClick={cancelEdit}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//                   {todo.text}
//                 </span>
//                 <button onClick={() => startEdit(todo)}>Edit</button>
//                 <button onClick={() => handleDelete(todo.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
// import Home from "./Home";


// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Home</Link>{" "}
//         <Link to="/contact">About Us</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
