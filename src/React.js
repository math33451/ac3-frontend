import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Meus dados</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name} - {item.age} anos</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
