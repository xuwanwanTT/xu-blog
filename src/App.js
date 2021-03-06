import React from 'react';
import './App.css';
import './layout.css';
import Main from './page/main/Page.js';

function App() {
  return (
    <div className={'App layout-type1-wrap'}>

      <div className={'header'}>

        <header><a href={'https://www.xuwanwan.com'}>xuwanwan.com</a></header>

      </div>

      <div className={'main'}>

        <Main />

      </div>

      <div className={'footer'}>

        <footer>Copyright © 2018 - {new Date().getFullYear()} <a href="#/">xuwanwan</a>. All rights reserved.</footer>

      </div>

    </div>
  );
}

export default App;
