// https://reactjs.org/docs/forms.html
// {/*Form Library: Formik*/}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            checked: false,
            radios: "",
            selects: "one"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        console.log("Submitted");
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                <h2>{this.state.firstName} {this.state.lastName}</h2>
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
                <h2>{this.state.radios}</h2>
                <br/><label for="selects">select</label>
                <select
                    value={this.state.selects}
                    name="selects"
                    onChange={this.handleChange}>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                </select>
                <h2>{this.state.selects}</h2>
                <button>Submit</button>
            </form>
        );
    }
}
