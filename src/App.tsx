import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/Counter';
import { PersonInput } from './components/InputPerson/PersonInput';
import ToDoList from './components/todolist/ToDoList';
import { ListItemAdder } from './components/todolist/ListItemAdder';

export default function App() {

  return <>
  TO DO LIST <br />

  <ToDoList />

  </>
}

// const [persona, setPersona] = useState("")

  //   return <>
//     {/* <PersonInput test={text => {
//         console.log("pre", persona);
//         console.log(text);
//         setPersona(text);
//         console.log("post" + persona)
//       }}/>

//       <div>persona : {persona}</div> */}

//     <PersonInput onChange={p => {
//       console.log(p);
//       setPersona(p.firstName + " " + p.lastName);
//     }} />

//     <br />
//     {persona != "" && <div>persona: {persona}</div>}
//   </>

