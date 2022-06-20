import {useState} from 'react';
import data from "./data.json";

function App() {
  const [ filt, setFilt ] = useState(""); 

  console.log(filt);
  data.filter((item) => item.company.toLowerCase().includes(filt))

  return (
    <div>
      <input type="text" placeholder="pula" onChange={(e) => setFilt(e.target.value) }/>
      {
        data.filter((item) => item.name.includes(filt)).map((item) => (<p key={item._id}>{item.name}</p>))
      }
    </div>
  );
}

export default App;
