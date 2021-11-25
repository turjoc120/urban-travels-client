import React from 'react';
import Covid from './Covid/Covid';
import Deals from './Deals/Deals';
import HeroSec from './Header/HeroSec';
import UrbanPacks from './UrbanPacks/UrbanPacks';

const Home = () => {
    return (
        <div>
            <HeroSec></HeroSec>
            <Deals></Deals>
            <Covid></Covid>
            <UrbanPacks></UrbanPacks>
        </div>
    );
};

export default Home;