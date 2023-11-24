import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedamount, setConvertedamount] = useState();
  const currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(currencyinfo);

  const convert = () => {
    setConvertedamount(amount * currencyinfo[to]);
  };

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setConvertedamount(amount)
    setAmount(convertedamount)
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <h1 className="text-white text-center pb-3 text-2xl">Currency Converter</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoptions={options}
                selectedcurrency={from}
                onchangeamount={(amount) => setAmount(amount)}
                onchangecurrency={(currency) => setFrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/swap-3412562-2851959.png?f=webp&w=256" style={{width:"20px"}} alt="" />
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyoptions={options}
                selectedcurrency={to}
                onchangecurrency={(currency) => setTo(currency)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
