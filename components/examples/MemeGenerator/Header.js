function Header(props) {
    return (
        <header>
            <img
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?"
            />
            <p>{props.display}</p>
        </header>
    );
}
