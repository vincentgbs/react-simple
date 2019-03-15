/* If we were running an actual compiler for the JSX instead of an in-browser Babel transformer, we would use import and export instead of using html include tags */

// import React from "react"
// import TodoItem from "./TodoItem"

function App() {
    const todoComponents = todosData.map(function(td) {
        return <TodoItem key={td.id} todo={td} />
    });

    return (
        <div className="todo-list">
            {todoComponents}
        </div>
    );
}

// export default App
