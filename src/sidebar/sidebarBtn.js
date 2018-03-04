import React, { Component } from 'react';


function Greeting(props) {
  
  if (props) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function GuestGreeting(props) {
  return <h6>Please sign up.</h6>;
}

function UserGreeting(props) {
   return (
    
    <div id="toggle_btn" onClick={(event) => {
     document.getElementById('sidebar').classList.toggle('active');
    }}>
             <span></span>
             <span></span>
             <span></span>
             </div>
 );;
}


export default Greeting;
