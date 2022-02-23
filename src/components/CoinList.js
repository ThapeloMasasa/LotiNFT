import React from 'react';
import CollectionCard from './CollectionCard';
import './CoinList.css';



const CoinList = ({coinListData, setSelectedCoin}) => {
  return <div className='coinlist'>
            {coinListData.map( coin =>(
                <div onClick={()=> setSelectedCoin(coin.token_id)}>
                    <CollectionCard 
                        key = {coin.token_id}
                        id = {coin.token_id}
                        nftname = {coin.name}
                        traits = {coin.traits}
                        image = {coin.image_url}
                    />
                </div>
            ))}
        </div>;
};

export default CoinList;
