// https://reactjs.org/docs/forms.html

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            checked: false,
            radios: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target; // copy name & value before setting
        if (type === "checkbox") {
            this.setState({
                [name]: checked
            });
        } else {
            this.setState({
                [name]: value
            });
        }
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
                <textarea
                    value={"some default value"}
                    onChange={this.handleChange}/>
                <br/><label for="checked">checkbox</label>
                <input
                    type="checkbox"
                    name="checked"
                    checked={this.state.checked}
                    onChange={this.handleChange}/>
                <br/><label for="radios">radio</label>
                <input
                    type="radio"
                    name="radios"
                    value="one"
                    checked={this.state.radios === "one"}
                    onChange={this.handleChange}/>
                <input
                    type="radio"
                    name="radios"
                    value="two"
                    checked={this.state.radios === "two"}
                    onChange={this.handleChange}/>
            </form>
        );
    }
}
