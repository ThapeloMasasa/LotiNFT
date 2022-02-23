import React from 'react';
import ethImg from '../assets/weth.png'
import './CollectionCard.css'
const CollectionCard = ({id, nftname,traits, image}) => {
  return <div className='collectionCard'>
            <img src={image} alt=''/>
            <div className='details'>
            <div className='nftName'>
                {nftname} </div><div className='id'>#{id}</div>
            <div className='priceContainer'>
                <img src={ethImg} className='ethImage' alt=""/>
                <div className='price'>{traits[0]?.value}</div>
            </div>
            </div>
        </div>
};

export default CollectionCard;
