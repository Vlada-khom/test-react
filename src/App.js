import './App.css';
import {Form} from './components/Form/Form';
import {useEffect, useState} from 'react';
import { Comments } from './components/comments/Comments';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dates, setDates] = useState();
debugger;
  useEffect(() => {
    fetch('./db/db.json')
        .then((res) => res.json())
        .then((data) => {
          setDates(data);
          setIsLoaded(false);
        })
        .catch((err) => console.log(err));
  })

  return (
    <div className="App">
      <Form/>
      <Comments 
      dates={dates}
      setDates={setDates}
      />
    </div>
  );
}

export default App;
