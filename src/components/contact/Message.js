import React from 'react';

const Message = ({msg, bgColor}) => {
    let styles = {
        padding: "1rem",
        margin: "1rem 0",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor,
        borderRadius: "10px",
    };

    return ( 
        <div style={styles}>
            <p> {msg} </p>
        </div>
    );
}
 
export default Message;