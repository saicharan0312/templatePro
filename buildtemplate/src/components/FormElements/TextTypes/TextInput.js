import React from "react";

const TextInput = () => {
    return (
        <div className="text-input">
            <div className="text-input-block">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="First Name"/>
            </div>
            <div>
                <input type="email" placeholder="email"/>
            </div>
            <div>
                <button>sign up</button>
            </div>
        </div>
    );
};

export default TextInput;