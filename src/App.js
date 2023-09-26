import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import CheckBox from "./components/CheckBox";
import Header from "./components/Header";
import Items from "./components/Items";
import TextInput from "./components/TextInput";

const sportingGoods = [
    { id: 1, name: "Football", price: 49.99, stock: 1 },
    { id: 2, name: "Basketball", price: 59.99, stock: 2 },
    { id: 3, name: "Baseball", price: 69.99, stock: 3 },
    { id: 4, name: "Meatball", price: 99.99, stock: 0 },
];

function App() {
    const [input, setInput] = useState("");

    const [form, setForm] = useState({
        prod_name: "",
        prod_price: 0,
        prod_quant: 0,
    });

    const [data, setData] = useState(sportingGoods);

    const [showOnlyStock, setShowOnlyStock] = useState(false);

    const handleClick = () => {
        alert("<( ‵□′)>───Ｃε(┬﹏┬)3");
    };

    const handleForm = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        console.log(data);

        setData([
            ...data,
            {
                id: data.length + 1,
                name: form.prod_name,
                price: form.prod_price,
                stock: form.prod_quant,
            },
        ]);
    };

    return (
        <div className="App">
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    paddingBottom: "20px",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="prod_name">Product Name:</label>
                <input
                    type="text"
                    id="prod_name"
                    name="prod_name"
                    value={form.prod_name}
                    onChange={handleForm}
                ></input>

                <label htmlFor="prod_price">Price:</label>
                <input
                    type="number"
                    id="prod_price"
                    name="prod_price"
                    value={form.prod_price}
                    onChange={handleForm}
                ></input>

                <label htmlFor="prod_quant">Product Quantity:</label>
                <input
                    type="number"
                    id="prod_quant"
                    name="prod_quant"
                    value={form.prod_quant}
                    onChange={handleForm}
                ></input>

                <button type="submit">Submit</button>
            </form>

            <TextInput
                value={input}
                onchange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <CheckBox
                checked={showOnlyStock}
                onchange={(e) => setShowOnlyStock(e.target.checked)}
            />
            <button onClick={handleClick}>Submit</button>

            <table>
                <Header />
                <Category />
                <Items
                    items={data}
                    query={input}
                    showOnlyStock={showOnlyStock}
                />
                <tr>
                    <td colSpan="2" style={{ textAlign: "right" }}>
                        Total:
                    </td>
                    <td style={{ paddingLeft: "50px" }}>
                        {data.reduce(
                            (total, sportingGood) =>
                                total + parseInt(sportingGood.stock),
                            0
                        )}
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default App;
