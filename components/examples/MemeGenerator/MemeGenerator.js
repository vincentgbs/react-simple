class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        let appObject = this;
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(function(response) {
                const {memes} = response.data;
                appObject.setState({ allMemeImgs: memes });
            });
    }

    render() {
        return (
            <h1>Meme Generator Section</h1>
        )
    }

}
