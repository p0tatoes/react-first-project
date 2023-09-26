import React from "react";

const CheckBox = ({ checked, onchange }) => {
    return (
        <>
            <label>
                <input type="checkbox" checked={checked} onChange={onchange} />
                Only show products in stock
            </label>
        </>
    );
};

export default CheckBox;
