class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    listProducts(JSON) {
        const itemList = JSON.map(function(item) {
            return <Product key={item.id} product={item}/>
        });
        return itemList;
    }

    render() {
        const productComponents = this.listProducts(products);

        return (
            <div>
                {productComponents}
            </div>
        );
    }
}
