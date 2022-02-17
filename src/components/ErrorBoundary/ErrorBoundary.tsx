import React, {Component} from 'react';
import {StCardWrapper, StH1} from "./styled";

type TProps = { children: React.ReactNode };
type TState = { hasError: boolean };

class ErrorBoundary extends Component<TProps,TState> {
    constructor(props: TProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({ hasError: true});
    }

    render() {
        return this.state.hasError
            ? <StCardWrapper><StH1>Something went wrong, try to reload your page.</StH1></StCardWrapper>
            : this.props.children;
    }
}

export default ErrorBoundary;