function MainContent() {
    let date = new Date();

    const toDoTitle = "Example App";
    const headerStyle = {
        // These properties can be dynamically changed with JS
        color:"#09F",
        backgroundColor:"#EEE"
    }

    return (
        <main>
            {/* //ES6 Syntax (string templating syntax) */}
            {/* <h1>{`${toDoTitle}`}</h1> */}
            <h1 style={headerStyle}>{toDoTitle}</h1>
            <h2>It is currently about {date.getHours() % 12} o'clock!</h2>
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
            <p>This is where most of my content will go...</p>
        </main>
    );
}
