import React from "react";

type TContext = {
    user: string,
    setNewUser: (value: string) => void
}

const Context = React.createContext<TContext>({user: '', setNewUser: () => {}});

type TProps = {
    children: React.ReactNode
};

const MatchesContextProvider: React.FC<TProps> = ({children}) => {
    const [user, setUser] = React.useState( '');
    const setNewUser = (user: string) => setUser(user);
    const contextValue: TContext = { user, setNewUser};
    return (
        <Context.Provider
            value={contextValue}
        >
            {children}
        </Context.Provider>
    );
};

export { MatchesContextProvider, Context as UserContext };