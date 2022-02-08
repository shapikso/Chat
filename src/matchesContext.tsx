import React from "react";
import {TMatch} from "src/types";
const Context = React.createContext(null);

type TProps = {
    children: React.ReactNode
};

const MatchesContextProvider: React.FC<TProps> = ({children}) => {
    const [state, setState] = React.useState( {matches:[], match: null, isLoading: false});
    const toggleLoader = () => setState((prevState) => ({...prevState, isLoading: !prevState.isLoading}));
    const setMatches = (matches: Array<TMatch>) => setState((prevState) => ({...prevState, isLoading: false, matches}));
    const setSingleMatch = (matchId: number) => setState((prevState) => ({...prevState,
        match: prevState.matches.find((match: TMatch) => match.match_id === matchId )}));

    const contextValue = { ...state, toggleLoader, setMatches, setSingleMatch};
    return (
        <Context.Provider
            value={contextValue}
        >
            {children}
        </Context.Provider>
    );
};

export { MatchesContextProvider, Context as MatchContext };
