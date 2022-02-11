import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import {StCardWrapper, StLoader, StContentWrapper, StImageWrapper, StInfoWrapper} from './styled';
import logo from "../../images/loader1.gif";
import checkAuth from "../../HOCs/LogHoc";
import { TCard } from '../../commonTypes';


type TState = {
    isLoading: boolean,
    card: TCard | null
};

const CardPage: React.FC = () => {
    const [state, setState] = useState<TState>({isLoading: true, card: null});
    const { pathname } = useLocation();
    const cardId = pathname.split('/')[2];
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

export default checkAuth(CardPage);
