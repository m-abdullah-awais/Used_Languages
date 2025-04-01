import React, { FC } from 'react';

interface Props {
    title: string;
}

const App: FC<Props> = ({ title }) => {
    return (
        <div className="app">
            <h1>{title}</h1>
        </div>
    );
};

export default App;
