import React from 'react';
import SelectBlock from "src/components/SelectBlock/SelectBlock";
import MatchesList from "src/components/MatchesList/MatchesList";
import MatchPopUp from "src/components/MatchPopUp/MatchPopUp";



function App() {
    return (
        <>
            <SelectBlock/>
            <MatchesList/>
            <MatchPopUp/>
        </>
    );
}

export default App;
