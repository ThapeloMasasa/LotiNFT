import React from 'react';
import './Header.css';
import logo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png'
const header = () => {
  return <div className='header'>
                <div className='logoContainer'>
                    <img src={logo} className='logo' alt=''/>
                </div>
                <div className='searchBar'>
                    <div className='searchIconContainer'>
                        <img src={searchIcon} alt=''/>
                    </div>
                    <input className='searchInput'
                            placeholder='Collection, item or user ...'/>
                </div>
                <div className='headerItems'>
                        <p>Drops</p>
                        <p>Marketplace</p>
                        <p>Create</p>
                </div>
                <div className='headerActions'>
                        <div className='themeSwitchContainer'>
                                <img src={themeSwitchIcon} className='themeImage' alt=''/>
                        </div>
                </div>
                <div className='logInButton'>
                        LOG IN
                </div>
         </div>;
};

export default header;
