import React from "react";
import "./Button.css"

const Button = () => {
    return (
        <div className="marigin-left">
            <button className="uber-button">Request now</button>
            <br></br><br></br>
            <button className="amazon-button">Add to Cart</button>
            <br></br><br></br>
            <button className="github-button-signup">Sign up</button>
            <br></br><br></br>
            <button className="bootstrap-button-get">Get started</button>
            <button className="bootstrap-button-download">Download</button>
            <br></br><br></br>
            <button>Save</button>
            <br></br><br></br>
            <button>Apply on company website</button>
        </div>
    );
};

export default Button;