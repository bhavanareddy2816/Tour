import {useEffect, useState} from "react";
import './App.css';
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import Empty from "./components/Empty";
const url = 'https://course-api.com/react-tours-project';



function App() {
  const[tours , setTours] = useState([]);
  const[loading , setloading] = useState(true);
  
  const removeTour = (id) => {
    const updateTours = tours.filter(tour => tour.id !== id);
    setTours(updateTours);
  }

  const fetchTours = async () => {
    await fetch(url).then(res => res.json())
    .then(data => setTours(data));
    setloading(false);
  }
  useEffect(()=> {
    fetchTours();
  }, []);

  if(loading){
    return (

        <Loading />
    )
  }

  if(tours.length === 0){
    return(
    
        <Empty fetchTours={fetchTours}/>
    
    )
  }
  return (
    <div className="App">
       <h1 className="text-center mt-4">Our Tours</h1>
       <div className="underline"></div>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default App;
