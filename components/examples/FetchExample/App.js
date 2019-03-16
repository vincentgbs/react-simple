// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// https://swapi.co/

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json()) // [then] resolve the promise
            .then(data => console.log(data)); // continue promise chain
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}
