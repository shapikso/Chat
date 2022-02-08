import React from 'react';
import {TMatch} from "src/types";
import {StDiv,StItemWrapper} from "src/components/MatchesList/MatchItem/styled";
import {MatchContext} from "src/matchesContext";

type TProps = {
    match: TMatch
};
const MatchItem: React.FC<TProps> = ({match}) => {
    const { setSingleMatch } = React.useContext(MatchContext);
    const {
        match_id: id,
        home_team:{name:nameFirst, logo:logoFirst},
        away_team:{name:nameSecond, logo:logoSecond},
        stats: {home_score:firstScore, away_score:secondScore} } = match;
    const onClickHandler = () => setSingleMatch(id);

    return (
        <StItemWrapper onClick={onClickHandler}>
            <StDiv >
                <span>{nameFirst}</span>
                <img src={logoFirst} alt="" height="50"/>
                <span>{firstScore.toString()}</span>
            </StDiv>
            <span>:</span>
            <StDiv>
                <span>{secondScore.toString()}</span>
                <img src={logoSecond} alt="" height="50"/>
                <span>{nameSecond}</span>
            </StDiv>
        </StItemWrapper>
    );
};

export default MatchItem;
