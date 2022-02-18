import React, {useEffect} from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import {StCardWrapper, StLoader, StContentWrapper, StImageWrapper, StInfoWrapper} from './styled';
import logo from "../../images/loader1.gif";
//import checkAuth from "../../HOCs/LogHoc";
import { TCard } from '../../commonTypes';
import {HEADER, SINGL_CARD_URL} from "../../constants/url";
import {cardData} from "../../constants/cardData";


type TState = {
    isLoading: boolean,
    card: TCard
};

const CardPage: React.FC = () => {
    const [state, setState] =  React.useState<TState>({isLoading: true, card: cardData});
    const { pathname } = useLocation();
    const cardId = pathname.split('/')[2];
    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        try {
            const {data} = await axios.get(`${SINGL_CARD_URL}${cardId}`, {headers: HEADER});
            setState({isLoading:false, card: data[0]});
        } catch {
            setState({...state, isLoading:false});
            return false;
        }
    };
   // const {img, name, flavor, cost, attack, health} = state.card;
    return (
        <StCardWrapper>
            { state.isLoading
                ? <StLoader src={logo} alt="loading..." />
                : state.card ? (<StContentWrapper>
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
                </StContentWrapper>)
                    : null
            }
        </StCardWrapper>
    );
};

export default CardPage;
