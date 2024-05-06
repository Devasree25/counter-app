import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [sec, Setsec] = useState(0);
  const [min, Setmin] = useState(0);
  const [hr, Sethr]  = useState(0);

  var time = null;
  useEffect(()=>{
    time = setInterval(()=>{
      Setsec(sec+1);
      if (sec===59){
        Setmin(min +1);
        Setsec(0);
  
      }if (min===9){
        Sethr(hr+1);
        Setmin(0);
        Setsec(0);
      }
  
    },1000)
    return()=>clearInterval(time);
    });
     
 
  return (
    <>
      <div>
       
        <h1>{hr<10? "0" +hr:hr}:{min<10? "0" +min:min}:{sec<10? "0" +sec:sec}</h1>
        <button>Stop</button>
        
       
       
      </div>
      
    </>
  )
}

export default App
