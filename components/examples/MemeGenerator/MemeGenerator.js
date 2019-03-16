class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.onChange = this.onChange.bind(this);
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

    onChange(event) {
        console.log("change");
        // const {name, value} = event.target;
        // this.setState({});
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.onChange}
                    />
                    <input type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.onChange}
                    />
                    <button>Gen</button>
                </form>
            </div>
        )
    }

}
