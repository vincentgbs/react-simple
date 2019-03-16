// https://reactjs.org/docs/forms.html

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target; // copy name & value before setting
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstName} // controlled components
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}/>
                <input
                    type="text"
                    value={this.state.lastName} // controlled components
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        );
    }
}
