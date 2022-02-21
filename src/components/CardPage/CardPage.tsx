import React, {useEffect} from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import {StCardWrapper, StLoader} from './styled';
import logo from "../../images/loader1.gif";
import { TCard } from '../../commonTypes';
import {HEADER, SINGL_CARD_URL} from "../../constants/url";
import CardPageInfo from './CardPageInfo';

type TState = {
    isLoading: boolean,
    card: TCard | null
};

const CardPage: React.FC = () => {
    const [state, setState] =  React.useState<TState>({isLoading: true, card: null});
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
    return (
        <StCardWrapper>
            { state.isLoading
                ? <StLoader src={logo} alt="loading..." />
                : state.card ? <CardPageInfo {...state.card}/>
                    : null
            }
        </StCardWrapper>
    );
};

export default CardPage;
