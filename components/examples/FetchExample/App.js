// https://swapi.co/

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        let appObject = this;
        appObject.setState(function(prevState){
            return ({
                loading: true,
                character: prevState.character
            });
        });
        setTimeout(function(){
            fetch("https://swapi.co/api/people/1")
                .then(response => response.json()) // [then] resolve the promise
                .then(data => {
                    appObject.setState(function(prevState) {
                        return ({
                            loading: !prevState.loading,
                            character: data
                        });
                    });
                }); // continue promise chain
        }, 999);
    }

    render() {
        const text = this.state.loading ? "Loading..." : this.state.character.name;
        return (
            <div>
                <p>API call: {text}</p>
            </div>
        )
    }
}
