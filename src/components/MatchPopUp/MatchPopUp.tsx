import React from 'react';
//import {TMatch} from "src/types";
import {PopUpWrapper} from "./styled";
import {MatchContext} from "src/matchesContext";

// const match: TMatch = {
//     "match_id": 146058,
//     "status_code": 3,
//     "status": "finished",
//     "match_start": "2020-08-21 14:00:00",
//     "match_start_iso": "2020-08-21T14:00:00+00:00",
//     "minute": null,
//     "league_id": 602,
//     "season_id": 940,
//     "stage": {
//         "stage_id": 1,
//         "name": "Regular Season"
//     },
//     "group": {
//         "group_id": 103,
//         "group_name": "Premier League"
//     },
//     "round": {
//         "round_id": 21185,
//         "name": "1",
//         "is_current": null
//     },
//     "referee_id": 1237,
//     "home_team": {
//         "team_id": 7448,
//         "name": "FC Olimpik Donetsk",
//         "short_code": "OLD",
//         "common_name": "",
//         "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/2081.png",
//         "country": {
//             "country_id": 122,
//             "name": "Ukraine",
//             "country_code": "ua",
//             "continent": "Europe"
//         }
//     },
//     "away_team": {
//         "team_id": 7441,
//         "name": "FC Dynamo Kiev",
//         "short_code": "DYK",
//         "common_name": "",
//         "logo": "https://cdn.sportdataapi.com/images/soccer/teams/100/87.png",
//         "country": {
//             "country_id": 122,
//             "name": "Ukraine",
//             "country_code": "ua",
//             "continent": "Europe"
//         }
//     },
//     "stats": {
//         "home_score": 1,
//         "away_score": 4,
//         "ht_score": "1-2",
//         "ft_score": "1-4",
//         "et_score": null,
//         "ps_score": null
//     },
//     "venue": {
//         "venue_id": 3419,
//         "name": "Dynamo n.a. Valeriy Lobanovskyi",
//         "capacity": 16873,
//         "city": "Kiev",
//         "country_id": 122
//     }
// };

const MatchPopUp = () => {
    const { match } = React.useContext(MatchContext);
    return (match && <PopUpWrapper>
        <span>{match.home_team.name} VS {match.away_team.name}</span>
    </PopUpWrapper>
    );
};

export default MatchPopUp;
