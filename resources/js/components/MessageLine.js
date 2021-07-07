import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom';


const MessageLine = ({data}) => {
   
    return(
    <>
  
    {data.map((unit, key) => (
     
      
        <li key={key} className="border border-black-600  grid grid-cols-6 gap-2" >
            <div className="col-span-3">{unit.title}</div>
            <div className="col-span-1">{unit.sender}</div>
            <button onClick={() => {alert('asdf')}} type="button" data={unit.id} className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-green-600 rounded-md bg-green-500 hover:bg-green-400">View</button>
            <button type="button" data="{unit.id}" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-red-600 rounded-md bg-red-500 hover:bg-red-400">Delete</button>
            {/* <button type="button" data="{unit.id}" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-blue-600 rounded-md bg-blue-500 hover:bg-blue-400">Undo Delete</button>
            <button type="button" data="{unit.id}" className="focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-red-600 rounded-md bg-red-500 hover:bg-red-400">delete completely</button> */}
        </li>
       
          
    

    ))}
    </>
    )
    }





export default MessageLine;

