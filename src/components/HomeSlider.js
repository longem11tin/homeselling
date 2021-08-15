import React , {useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components';
import Button from './Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowForward, IoArrowBack} from 'react-icons/io5'

const HomeSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    overflow: hidden;
    position: relative;
`

const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const HomeSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`

const HomeSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4s;
        background: linear-gradient (
            0deg,
            rgba(0 , 0 , 0 , 0.2) 0%,
            rgba(0 , 0 , 0 , 0.4) 50%,
            rgba(0 , 0 , 0 , 0.6) 100%,
        );
    }
`

const HomeImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const HomeContent = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    color: #fff;
    h1 {
        font-size: clamp(1rem, 3vw, 10rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0 , 0 , 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p {
        margin-bottom: 1.2rem;

    }
`

const ArrowButton = styled.i`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`

const Arrow = styled( IoMdArrowRoundForward )`
    margin-right: 1rem;
`

const constArrow = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #1284FC;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: #000000;
        transform: scale(1.05);
    }
`

const NextArrow = styled(IoArrowForward)`
    ${constArrow}
`

const PrevArrow = styled(IoArrowBack)`
    ${constArrow}
`

const Home = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;   
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent (current === length - 1? 0 : current + 1);
        }

        timeout.current = setTimeout(nextSlide, 1000);

        console.log(timeout);

        return function() {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        }
    },[current, length])
    
    const nextSlide = () => {

        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent (current === length - 1? 0 : current + 1);
        console.log(current);
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent (current === 0 ? length - 1 : current - 1);
        console.log(current);
    }

    return (
        <HomeSection>
            <HomeWrapper>
                {slides.map((slide,index) => {
                    return (
                        <HomeSlide key={index}>
                            {index === current && (
                                <HomeSlider>
                                    <HomeImage src={slide.image } alt={slide.alt} />
                                    <HomeContent>
                                        <h1> { slide.title } </h1>
                                        <p>  { slide.price } </p> 
                                        <h1> Long Em </h1>
                                        <Button>
                                        {/* // to={ slide.path } primary ='true' css ={`max-width: 160px`}> */}
                                            {slide.label}
                                        </Button>
                                    </HomeContent>
                                </HomeSlider>
                            )}
                        </HomeSlide>
                    )
                })}

                <ArrowButton>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </ArrowButton>
            </HomeWrapper>
        </HomeSection>
    )
}

export default Home;
