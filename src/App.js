import React from 'react';
import './App.css';
import './layout.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import ArticleList from './page/article-list/Page.js';
import ArticleEdit from './page/article-edit/Page.js';

function App() {
  return (
    <HashRouter>
      <div className={'App layout-type1-wrap'}>

        <div className={'header'}>
          <header>xuwanwan.com</header>
        </div>

        <div className={'main'}>
          <Switch>
            <Route path={'/'} component={ArticleList} />
            {/* <Route path={'/edit'} component={ArticleEdit} /> */}
          </Switch>
        </div>

        <div className={'footer'}>
          <footer>Copyright © 2018 - 2020 <a href="#/">xuwanwan</a>. All rights reserved.</footer>
        </div>

      </div>
    </HashRouter>
  );
}

export default App;
