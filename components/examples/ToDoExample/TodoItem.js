// import React from "react"

class TodoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            completed: false
        }
    }

    render() {
        return (
            <div className="todo-item">
                <input type="checkbox"
                    checked={this.props.todo.completed}
                    onChange={ (event) => this.props.handleChange(this.props.todo.id) }
                />
                <p>{this.props.todo.text}</p>
            </div>
        );
    }
}

// export default TodoItem
