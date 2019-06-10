import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 var(--m-size);
`

const HeaderDiv = styled.div`
    background: var(--off-black);
    color: white;
    margin-bottom: var(--m-size);
    padding: var(--m-size) 0;

    @media (min-width: 45rem) {
        margin-bottom: var(--xl-size);
    }
`

const Title = styled.div`
    font-size: var(--l-size);
    margin: 0;
`

const Subtitle = styled.div`
    color: var(--off-white);
    font-size: var(--m-size);
    font-weight: 500;
    margin: 0;
`

const Header = (props) => (
    <HeaderDiv>
        <Container>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
        </Container>
    </HeaderDiv>
);

Header.defaultProps = {
    title: 'Pilihan',
    subtitle: 'Choice randomizer app'
}

export default Header;