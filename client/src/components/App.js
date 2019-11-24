import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
    return <div>Page One</div>
};

const PageTwo = () => {
    return <div>Page Two</div>
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' exact component={PageOne}/>
                <Route path='/pagetwo' compoenent={PageTwo}/>
            </BrowserRouter>
        </div>
    )
};

export default App;