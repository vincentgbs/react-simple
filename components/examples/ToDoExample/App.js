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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(function(prevState) {
            const updated = prevState.todos.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
            });
            return updated;
        });
    }

    createTodos(JSON) {
        let appObject = this;
        const todoComponents = this.state.todos.map(function(item) {
            return <TodoItem key={item.id} todo={item} handleChange={appObject.handleChange} />
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
