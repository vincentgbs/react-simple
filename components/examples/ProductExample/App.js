class App extends React.Component {
    constructor() {
        super();
        this.state = {
            clicks: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount() {
    //      // Often used to call API data when component is first rendered
    // }

    // componentWillReceiveProps(nextProps) {
    //      if (nextProps.param !== this.props.param) {
    //          updateProp(nextProps.param);
    //       }
    //      // Deprecated in react 16.3 with componentWillMount() and componentWillUpdate()
    //      // Replaced with getDerivedStateFromProps() and getSnapshotBeforeUpdate()
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false; // don't update
    //     // React by default re-renders components more often than not
    //     // This allows you to choose when to re-render or not
    // }

    // componentWillUnmount() {
    //     // Often used to cleanup event listeners, clean up code, etc
    // }

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
