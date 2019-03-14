// import React from "react"

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            {/*<p style={{display: props.contact.phone ? "block" : "none"}}>{props.contact.phone}</p>*/}
            <p style={{display: !props.contact.phone && "none"}}>{props.contact.phone}</p>
            <p style={{'color': !props.contact.phone && "#F00"}}>Email: {props.contact.email}</p>
        </div>
    );
}

// export default ContactCard
