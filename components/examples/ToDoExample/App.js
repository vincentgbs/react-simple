/* If we were running an actual compiler for the JSX instead of an in-browser Babel transformer, we would use import and export instead of using html include tags */

// import React from "react"
// import TodoItem from "./TodoItem"
// import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };

    }

    createTodos(JSON) {
        const todoComponents = todosData.map(function(td) {
            return <TodoItem key={td.id} todo={td} />
        });
        return todoComponents;
    }

    render() {
        const display = this.createTodos(this.todosData);

        return (
            <div className="todo-list">
                {display}
            </div>
        );
    }
}

// export default App
