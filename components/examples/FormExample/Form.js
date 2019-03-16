// https://reactjs.org/docs/forms.html
// {/* Form Library: Formik */}

class Form extends React.Component {
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
        console.log(this.state, "Submitted");
        event.preventDefault();
    }

    render() {
        return (
            <Component
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state} />
        );
    }
}
