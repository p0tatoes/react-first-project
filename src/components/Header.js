import React from "react";

const Header = () => {
    return (
        <tr
            style={{
                color: "red",
                fontWeight: "bold",
            }}
        >
            <td>NAME</td>
            <td>PRICE</td>
            <td style={{ paddingLeft: "50px" }}>STOCK</td>
        </tr>
    );
};

export default Header;
