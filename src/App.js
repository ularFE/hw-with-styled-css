import {useState} from 'react'
import './App.css';
import Movies from './Components/Movies/Movies';

function App() {
  const  [movieArr, setMovieArr] = useState([])
  return (
    <div className="App">
        <Movies/>
  </div>
  );
}

export default App;
