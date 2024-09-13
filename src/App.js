import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios.get("https://cat-fact.herokuapp.com/facts").then((res) => {
      const { data } = res;
      setFetchedData(data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {fetchedData.map((item, index) => (
          <div key={index}>
            <p>{item.text}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
