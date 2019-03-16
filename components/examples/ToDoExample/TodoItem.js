// import React from "react"

class TodoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            completed: false
        }

        this.completedStyle = { color: "#AAA", fontStyle: "italic" }
    }


    render() {
        return (
            <div className="todo-item">
                <input type="checkbox"
                    checked={this.props.todo.completed}
                    onChange={ (event) => this.props.handleChange(this.props.todo.id) }
                />
                <p
                    className={this.props.todo.completed?"completed":null}
                    style={this.props.todo.completed?this.completedStyle:null}>
                    {this.props.todo.text}</p>
            </div>
        );
    }
}

// export default TodoItem
