import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Button, CardActions } from '@mui/material';
import { StCardWrapper, StCardActionsWrapper, StLoader } from './styled';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../images/loader1.gif';
//import checkAuth from "../../HOCs/LogHoc";

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


const Cards = () => {
    const [state, setState] = useState({isLoading: true, cards:[]});
    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        try {
            const {data} = await axios.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Vanilla',
                {
                    headers: {
                        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
                        'x-rapidapi-key': '96bc192553mshe6448af4fde60e5p1ee797jsn47eab89bbe17'
                    }});
            setState({isLoading:false, cards:data});
        } catch {
            setState({...state, isLoading:false});
            return false;
        }
    };
    return (
        <StCardWrapper>
            { state.isLoading
                ? <StLoader src={logo} alt="loading..." />
                : ( state.cards.map((card: Tcard) => {
                    return card.img ? (<div key={card.cardId}>
                        <Card sx={{maxWidth: 220}} key={card.cardId}>
                            <CardMedia
                                component="img"
                                height="304"
                                image={card.img}
                            />
                            <StCardActionsWrapper>
                                <CardActions>
                                    <Link
                                        to={`/cards/${card.cardId}`}
                                        target={"_blank"}
                                    >
                                        <Button variant="contained" size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </StCardActionsWrapper>
                        </Card>
                    </div>)
                        : false;
                })
                )
            }
        </StCardWrapper>
    );
};

export default Cards;
