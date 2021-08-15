import React , { useState } from 'react'
import GlobalStyles from './globalStyle';
import NavBar from './components/NavBar';
import HomeSlider from './components/HomeSlider';
import Dropdown from './components/Dropdown';
import InfoHouse from './components/InfoHouse';
import {InfoData} from './data/InfoData';
import SliderData from './data/SliderData';


const App = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <GlobalStyles />
            <NavBar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <HomeSlider slides={SliderData}/>
            <InfoHouse {...InfoData}/>
        </>
    )
}

export default App
