// import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.todo}</p>
        </div>
    );
}

// export default TodoItem
