import React from 'react';
import Select from "react-select";
import axios from "axios";
import {MatchContext} from "src/matchesContext";
import {API_KEY, LEAGUE_OPTIONS, MATCHES_URL, SEASONS_URL} from "./constants";
import {StSelectWrapper} from "src/components/SelectBlock/styled";

type TOption = {
    value: string,
    label: string
};
type TSeasons = {
    season_id: number,
    name: string
};

const SelectBlock = () => {
    const { toggleLoader, setMatches } = React.useContext(MatchContext);
    const [league, setLeague] = React.useState(LEAGUE_OPTIONS[0]);
    const [season, setSeason] = React.useState<TOption>(null);
    const [seasonOptions, setSeasonOptions] = React.useState<Array<TOption>>([]);

    const getSeasons = async (value: string) => {
        try {
            const {data: {data}} = await axios.get(`${SEASONS_URL}?apikey=${API_KEY}&league_id=${value}`);
            console.log(data);
            const seasons = data.map((item: TSeasons) => ({value:item.season_id.toString(), label: item.name}));
            setSeasonOptions(seasons);
            setSeason(seasons[0]);
            getMatches(seasons[0].value);
        } catch {
            return false;
        }
    };

    const getMatches = async (seasonId: string) => {
        try {
            toggleLoader();
            const {data:{data}} = await axios.get(`${MATCHES_URL}?apikey=${API_KEY}&season_id=${seasonId}`);
            console.log(data[0]);
            setMatches(data);
        } catch {
            toggleLoader();
        }

    };

    React.useEffect(() => {
        getSeasons(LEAGUE_OPTIONS[0].value);
    },[]);

    const handleChangeLeague = (league: TOption) => {
        setLeague(league);
        console.log(league);
    };
    const handleChangeSeason = (season: TOption) => {
        setSeason(season);
        getMatches(season.value);
        console.log(season);
    };
    return (
        <StSelectWrapper>
            <Select
                value={league}
                onChange={handleChangeLeague}
                options={LEAGUE_OPTIONS}
            />
            <Select
                value={season}
                onChange={handleChangeSeason}
                options={seasonOptions}
            />
        </StSelectWrapper>
    );
};

export default SelectBlock;
