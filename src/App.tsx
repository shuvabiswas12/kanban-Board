import React, { useEffect, useState } from 'react';
import AddCard from './components/AddCard';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { IMyCard } from './interfaces';
import './style.css';

const localData: Array<IMyCard> = [
  {
    "cardId": 101,
    "cardName": "In Progress",
    "cardItems": ["Javascript", "Java", "C++"]
  },
  {
    "cardId": 102,
    "cardName": "Testing",
    "cardItems": ["OpenWeatherMap UI", "API", "AWS configuration"]
  },
  {
    "cardId": 103,
    "cardName": "Done",
    "cardItems": ["Make frontend UI", "Unite testing", "buying hosting"]
  }
]

function App() {
  const [data, setData] = useState<Array<IMyCard>>()

  useEffect(() => {
    setData(localData)
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          {
            data?.map((item) => <Card cardName={item.cardName} cardItems={item.cardItems} cardId={item.cardId} key={item.cardId} />)
          }
          <AddCard />
        </div>
      </div>
    </>
  );
}

export default App;
