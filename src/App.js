
import './App.css';
import Header from './components/Header';
//import CollectionCard from './components/CollectionCard';
import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import CoinList from './components/CoinList';
import Main from './components/Main'



function App() {
const [coinData, setCoinData] = useState([])
const [selectedCoin, setSelectedCoin] = useState(0)

useEffect(()=>{
const getMyNfts = async () =>{
  const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x3b94352e63b93A423D7E5e25E445ac679008fEeE'
  )
  
  setCoinData(openSeaData.data.assets)
  
}
  return getMyNfts()
},[])

  return (
    <div className= 'app'>
      <Header/>
      {coinData.length > 0 && (
        <>
        <Main coinData={coinData} selectedCoin = {selectedCoin} />
        <CoinList coinListData={coinData} setSelectedCoin={setSelectedCoin}/>
        </>
      ) }
      
    </div>
  )
}

export default App;
