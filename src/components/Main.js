import React, { useEffect, useState } from 'react';
import './Main.css'
import instaLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

const Main = ({selectedCoin, coinData}) => {
    const [activeCoin, setActiveCoin] = useState(coinData[0])
     
    useEffect(()=>{
        setActiveCoin(coinData[selectedCoin])
    },[coinData, selectedCoin])

  return <div className='main'>
            <div className='mainContent'>
                <div className='coinHighlight'>
                    <div className='coinContainer'>
                        <img 
                        src= {activeCoin.image_url}
                        className='selectedCoin' 
                        alt=""/>
                       
                    </div>
                </div>
                <div className='coinDetails' style={{color:'#fff'}}>
                    <div className='title'>
                        {activeCoin.name}
                    <span className='itemNumber'>#{activeCoin.token_id}</span>
                    </div>
                    <div className='owner'>
                        <div className='ownerImageContainer'>
                           <img src={activeCoin.owner.profile_img_url} alt=''/>
                        </div>
                        <div className='ownerDetails'>
                            <div className='ownerimageAndHandle'>
                                <div>
                                {activeCoin.owner.address}
                                </div>
                                <div>
                                <div className='ownerNameAndHandle'>
                                        @MasasaThapelo
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='ownerImageAndHandle'>
                                <div>
                                    <img src={instaLogo} className='ownerLink' alt=""/>
                                </div>
                                <div>
                                    <img src={twitterLogo} className='ownerLink' alt=""/>
                                </div>
                                <div>
                                    <img src={moreIcon} className='ownerLink' alt=""/>
                                </div>
                    </div>
  </div>;
};

export default Main;
