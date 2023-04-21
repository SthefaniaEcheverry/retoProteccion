import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import getHeroes from './utils/api/heroes';
import Header from './components/header/Header';


function App() {
  const [heroesData, setHeroesData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      if (heroesData.length === 0) {
        setHeroesData(await getHeroes(10))
      }
    }
    getData();
  }, [heroesData])
  console.log(heroesData);
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        {heroesData.map(hero => <Card hero={hero} />)}
      </main>
    </div>
  );
}

export default App;
