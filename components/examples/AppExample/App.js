/* If we were running an actual compiler for the JSX instead of an in-browser Babel transformer, we would use import and export instead of using html include tags */

// import React from "react"
// import AwesomeHeader from "./AwesomeHeader"
// import MainContent from "./MainContent"
// import AwesomeFooter from "./AwesomeFooter"

function App() {
    return (
        <div>
            <AwesomeHeader />
            <MainContent />
            <AwesomeFooter />
        </div>
    )
}

// export default App
