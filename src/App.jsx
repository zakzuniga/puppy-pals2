import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p 
          onClick={() => {
            console.log("puppy id: ", puppy.id);
            setFeatPupId(puppy.id);
          }} 
          key={puppy.id}
        >
          {puppy.name}
        </p>
      ))}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App; 