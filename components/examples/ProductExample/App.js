function App() {
    const productComponents = products.map(function(item) {
        return <Product key={item.id} product={item}/>
    });

    return (
        <div>
            {productComponents}
        </div>
    );
}
