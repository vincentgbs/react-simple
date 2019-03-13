// Props implementation
// class Hello extends React.Component {
//     render() {
//         return <h1>Hello {this.props.message}!</h1>;
//     }
// }
// ReactDOM.render(
//     <Hello message="my friend (from props)" />,
//     document.getElementById("root")
// );

// State implementation
class Hello extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "my friend (from state)"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
    updateMessage() {
        this.setState({
            message: "my friend (from changed state)"
        });
    }
    render() {
         return (
           <div>
             <h1>Hello {this.state.message}!</h1>
             <button onClick={this.updateMessage}>Click me!</button>
           </div>
        )
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById("root")
);
