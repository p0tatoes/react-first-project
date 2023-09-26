import React from "react";

const TextInput = ({ onchange }) => {
    return (
        <>
            <input type="text" onChange={onchange} />
        </>
    );
};

export default TextInput;
