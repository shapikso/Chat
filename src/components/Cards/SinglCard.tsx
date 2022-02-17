import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {StCardActionsWrapper} from "./styled";
import {Button, CardActions} from "@mui/material";
import {Link} from "react-router-dom";

type TProps ={
    img: string,
    cardId: string
}

const SinglCard: React.FC<TProps> = ({img, cardId}) =>
    (
        <Card sx={{maxWidth: 220}}>
            <CardMedia
                component="img"
                height="304"
                image={img}
            />
            <StCardActionsWrapper>
                <CardActions>
                    <Link to={`/cards/${cardId}`}>
                        <Button variant="contained" size="small">Learn More</Button>
                    </Link>
                </CardActions>
            </StCardActionsWrapper>
        </Card>
    );


export default SinglCard;