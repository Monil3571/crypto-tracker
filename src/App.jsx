import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import CryptoDisplay from "./components/CryptoDisplay";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    ).then((response) => {
      console.log(response.data);
      setListOfCoins(response.data);
    });
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });
  return (
    <div className="App bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen p-10">
      <div className="cryptoHeader p-6 pt-2">
        {" "}
        <input
          className=" p-2 border-2 border-amber-400 rounded-lg"
          type="text"
          placeholder="Search for a Currency..."
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        <CryptoDisplay listOfCoins={filteredCoins} />
      </div>
    </div>
  );
}

export default App;
