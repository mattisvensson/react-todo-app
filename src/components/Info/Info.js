import React, {useState} from 'react';
import './Info.css'

function Info () {

    const [collapsed, setCollapsed] = useState(true)

    function handleClick () {
        setCollapsed(!collapsed)
    }

    return ( 
        <div id="Info" className={`${collapsed === true ? "collapsed" : "visible"}`} onClick={handleClick}>
            <p>Click here for more info!</p>
            <hr/>
            <h3>To-Do App</h3>
            <h5>Version 1.0</h5>
            <p>If you find a bug or if i messed something up, please let me know via <a href="mailto:matti@mattisvensson.com">email</a> or on any of my linked profiles.</p>
            <a href="https://github.com/mattisvensson/react-todo-app" target="_blank">View project on GitHub</a>
        </div>
     );
}

export default Info;