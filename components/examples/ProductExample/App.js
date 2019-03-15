class App extends React.Component {
    constructor() {
        super();
        this.state = {
            clicks: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(function(prevState) {
            console.log(this.state.clicks);
            return {
                clicks: (prevState.clicks + 1)
            }
        });
    }

    listProducts(JSON) {
        let appObject = this;
        const itemList = JSON.map(function(item) {
            return <Product key={item.id} product={item} count={appObject.state.clicks} />
        });
        return itemList;
    }

    render() {
        const productComponents = this.listProducts(products);

        return (
            <div onClick={this.handleClick}>
                {productComponents}
            </div>
        );
    }
}
