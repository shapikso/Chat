import React from 'react';
import { StContentWrapper, StImageWrapper, StInfoWrapper } from './styled';

type TProps = {
    img: string,
    name: string,
    flavor: string,
    cost: number,
    attack: number,
    health: number
}

const CardPageInfo: React.FC<TProps> = ({img, name, flavor, cost, attack, health}) => {
    return (
        <StContentWrapper>
            <StImageWrapper>
                <img src={img}/>
            </StImageWrapper>
            <StInfoWrapper>
                <div>Card Name: {name}</div>
                <div>Card Favor: {flavor}</div>
                <div>Manacost: {cost}</div>
                <div>Card Attack: {attack}</div>
                <div>Card Health: {health}</div>
            </StInfoWrapper>
        </StContentWrapper>
    );
};

export default CardPageInfo;
