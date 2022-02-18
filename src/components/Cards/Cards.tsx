import React, {useEffect} from 'react';
import { StCardWrapper, StLoader } from './styled';
import axios from 'axios';
import logo from '../../images/loader1.gif';
import { TCard } from '../../commonTypes';
import {CARDS_URL, HEADER} from "../../constants/url";
import SinglCard from "./SinglCard";

const Cards = () => {
    const [state, setState] =  React.useState({isLoading: true, cards:[]});
    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        try {
            const {data} = await axios.get(CARDS_URL, {headers: HEADER });
            setState({isLoading:false, cards:data});
        } catch {
            setState({...state, isLoading:false});
            return false;
        }
    };
    return (
        <StCardWrapper className="cardsList">
            { state.isLoading
                ? <StLoader src={logo} alt="loading..." />
                : ( state.cards.map((card: TCard) => {
                    return card.img ? <SinglCard img={card.img} cardId={card.cardId} key={card.cardId}/>
                        : null;
                })
                )
            }
        </StCardWrapper>
    );
};

export default Cards;
