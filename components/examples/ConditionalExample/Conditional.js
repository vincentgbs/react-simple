// import React from "react"

function Conditional(props) {
    return (
        props.isLoading ? <h1>Loading...</h1> : <div>The API call has loaded and this is the new display</div>
    );
    // if(props.isLoading) {
    //     return (
    //         <h1>
    //             Loading...
    //         </h1>
    //     );
    // } else {
    //     return (
    //         <div>
    //             The API call has loaded and this is the new display
    //         </div>
    //     );
    // }
}

// export default Conditional
