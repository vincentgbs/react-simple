class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
    }

    componentDidMounts() {
        // let appObject = this;
        // fetch("https://www.getapidata.com") // fetch some url
        //     .then(response => response.json) // change the response to json
        //     .then(data => {
        //         appObject.setState(data);
        //     });
    }

    render() {
        return (
            <h1>Meme Generator Section</h1>
        )
    }

}
