/* If we were running an actual compiler for the JSX instead of an in-browser Babel transformer, we would use import and export instead of using html include tags */

// import React from "react"
// import TodoItem from "./TodoItem"

function App() {
    return (
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

// export default App
