import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0;
`

const Container = styled.div`
    padding: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr; // side by side
    grid-template-rows: 500px;

    @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;

    }

`

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1rem;
    padding: 1rem 2rem;
    order: ${(reverse) => (reverse? '2': '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 6vw, 2rem);
    }
    p {
        margin-bottom: 2rem;
    }
`

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${(reverse) => (reverse? '1': '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 680px) {
        order: ${(reverse) => (reverse? '2': '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 680px) {
            width: 90%;
            height: 90%
        }
    }
`

const InfoHouse = ({
    heading, 
    paragraphOne,
    paragraphTwo,
    reverse,
    buttonLabel,
    image
}) => {

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1> {heading} </h1>
                    <p> {paragraphOne} </p>
                    <p> {paragraphTwo} </p>
                    <Button to='/home'>{buttonLabel} </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home'/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoHouse
