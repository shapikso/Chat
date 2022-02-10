import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import {StCardWrapper, StLoader, StContentWrapper, StImageWrapper, StInfoWrapper} from './styled';
import logo from "../../images/loader1.gif";

type Tcard = {
    cardId: string,
    dbfId: string,
    name: string,
    cardSet: string,
    type: string,
    faction: string,
    rarity: string,
    cost: number,
    attack: number,
    health: number,
    text: string,
    flavor: string,
    artist: string,
    collectible: boolean,
    elite: boolean,
    playerClass: string,
    howToGetDiamond: string,
    img: string,
    locale: string
};

type TState = {
    isLoading: boolean,
    card: Tcard
};

const CardPage: React.FC = () => {
    // @ts-ignore
    const [state, setState] = useState<TState>({isLoading: true, card:{}});
    const { pathname } = useLocation();
    const cardId: string = pathname.split('/')[2];
    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        try {
            const {data} = await axios.get(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardId}`,
                {
                    headers: {
                        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
                        'x-rapidapi-key': '96bc192553mshe6448af4fde60e5p1ee797jsn47eab89bbe17'
                    }});

            setState({isLoading:false, card: data[0]});
        } catch {
            setState({...state, isLoading:false});
            return false;
        }
    };
    //image={state.card.img}
    return (
        <StCardWrapper>
            { state.isLoading
                ? <StLoader src={logo} alt="loading..." />
                : <StContentWrapper>
                    <StImageWrapper>
                        <img src={state.card.img}/>
                    </StImageWrapper>
                    <StInfoWrapper>
                        <div>Card Name: {state.card.name}</div>
                        <div>Card Favor: {state.card.flavor}</div>
                        <div>Manacost: {state.card.cost}</div>
                        <div>Card Attack: {state.card.attack}</div>
                        <div>Card Health: {state.card.health}</div>
                    </StInfoWrapper>
                </StContentWrapper>
            }
        </StCardWrapper>
    );
};

export default CardPage;
