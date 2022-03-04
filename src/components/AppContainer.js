import React from "react";
import Header from "./Header.js";
import BookListPage from "./BookListPage.js";
import { Route, Switch } from "react-router-dom";
import BookDetailsPage from "./BookDetailsPage.js";

const AppContainer = () => {

    return <div>
        <Header />
        <Switch>
            <Route exact path={'/'} component={BookListPage}></Route>
            <Route exact path={'/bookdetails/:id'} component={BookDetailsPage}></Route>
            
        </Switch>
    </div>

};

export default AppContainer;