/* If we were running an actual compiler for the JSX instead of an in-browser Babel transformer, we would use import and export instead of using html include tags */

// import React from "react"

function App() {
    const toDoTitle = "To Do List";
    let date = new Date();

    const headerStyle = {
        // These properties can be dynamically changed with JS
        color:"#09F",
        backgroundColor:"#EEE"
    }

    return (
        <div>
            {/* //ES6 Syntax (string templating syntax) */}
            {/* <h1>{`${toDoTitle}`}</h1> */}
            <h1 style={headerStyle}>{toDoTitle}</h1>
            <h2>It is currently about {date.getHours() % 12} o'clock!</h2>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    );
}

// export default App
