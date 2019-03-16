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
        this.generateMeme = this.generateMeme.bind(this);
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
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    generateMeme(event) {
        event.preventDefault();  // prevent form from submitting
        const i = Math.floor(Math.random() * this.state.allMemeImgs.length);
        this.setState(function(prevState) {
            return { randomImg: prevState.allMemeImgs[i].url }
        });
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
                    <button onClick={this.generateMeme}>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="meme"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}
