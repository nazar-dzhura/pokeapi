import React from "react";
import {Provider} from "react-redux";
import {store} from "../store";
import {Alert} from "antd";
const { ErrorBoundary } = Alert;

interface IProviders {
    /** Content that will be wrapped by providers. */
    readonly children: JSX.Element
}

export const Providers: React.FC<IProviders> = ({ children }) => {
    return <ErrorBoundary>
        <Provider store={store}>
            {children}
        </Provider>
    </ErrorBoundary>
}