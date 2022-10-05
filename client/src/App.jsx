import { useState } from "react";
import "./index.css";
import Axios from "axios";

function App() {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const payHandler = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:5000/token", {
      amount,
      phone,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
       console.log(error);
      });
  };
  return (
    <div className="  mt-10 justify-center items-center  flex flex-col">
      <h1 className="text-2xl">
        Pay with <span className="text-green-600  font-bold">Mpesa</span>{" "}
      </h1>
      <form className="flex flex-col space-y-5">
        <input
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
          className=" bg-slate-100 text-center rounded-xl"
        />
        <input
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className=" bg-slate-100 text-center rounded-xl"
        />
        <button
          onClick={payHandler}
          className="bg-green-600 text-white px-2 py-1 rounded-2xl"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default App;
