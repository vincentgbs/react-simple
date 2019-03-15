class Product extends React.Component {
    render() {
        return (
            <div>
                <h2 onClick={() => {console.log("clicked")} }>{this.props.product.name}</h2>
                <p>{this.props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {this.props.product.description}</p>
            </div>
        )
    }
}
