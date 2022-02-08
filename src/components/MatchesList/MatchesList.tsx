import React from 'react';
import {MatchContext} from "src/matchesContext";
import {TMatch} from "src/types";
import MatchItem from "src/components/MatchesList/MatchItem/MatchItem";
import {StListWrapper} from "src/components/MatchesList/styled";

const MatchesList = () => {
    const { matches, isLoading } = React.useContext(MatchContext);
    return (
        <StListWrapper>
            {isLoading ? <p>Loading Matches</p>
                : <>{ matches.map((match: TMatch) => {
                    return <MatchItem match={match} key={match.match_id}/>; })}</>
            }
        </StListWrapper>
    );
};

export default MatchesList;
