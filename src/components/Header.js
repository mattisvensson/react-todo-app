import React from 'react';

function Header (props) {

    let date = new Date();
    let day = date.getDate();
  
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
    let abbre;
    switch (day) {
      case 1: abbre = "st"; break;
      case 2: abbre = "nd"; break;
      case 3: abbre = "rd"; break;
      default: abbre = "th"; break;
    }

    return (
        <header>
            <h1><span>{days[date.getDay()]},</span> {months[date.getMonth()]} {day}{abbre}</h1>
            <p className="taskcounter">{props.todos.length} {props.todos.length === 1 ? "Task" : "Tasks"}</p>
        </header>
    )

}

export default Header;