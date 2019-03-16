function Component(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                value={props.data.firstName} // controlled components
                name="firstName"
                placeholder="First Name"
                onChange={props.handleChange}/>
            <input
                type="text"
                value={props.data.lastName} // controlled components
                name="lastName"
                placeholder="Last Name"
                onChange={props.handleChange}/>
            <h2>{props.data.firstName} {props.data.lastName}</h2>
            <textarea
                value={"some default value"}
                onChange={props.handleChange}/>
            <br/><label for="checked">checkbox</label>
            <input
                type="checkbox"
                name="checked"
                checked={props.data.checked}
                onChange={props.handleChange}/>
            <br/><label for="radios">radio</label>
            <input
                type="radio"
                name="radios"
                value="one"
                checked={props.data.radios === "one"}
                onChange={props.handleChange}/>
            <input
                type="radio"
                name="radios"
                value="two"
                checked={props.data.radios === "two"}
                onChange={props.handleChange}/>
            <h2>{props.data.radios}</h2>
            <br/><label for="selects">select</label>
            <select
                value={props.data.selects}
                name="selects"
                onChange={props.handleChange}>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
            </select>
            <h2>{props.data.selects}</h2>
            <button>Submit</button>
        </form>
    );

}
