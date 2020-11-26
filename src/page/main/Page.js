import React, { useState } from 'react';
import './main.css';
import ArticleList from '../article-list/Page.js';

const TABARR = ['工具', '影音', '技术', '生活'];

export default () => {
  const [index, setIndex] = useState(0);
  const [type, setType] = useState(TABARR[0]);

  const pageChange = (index) => {
    setIndex(index);
    setType(TABARR[index]);
  };

  return (
    <div className={'xu-blog-main'}>

      <div className={'xu-blog-tab'}>
        {TABARR.map((s, i) => (
          <div key={'tab' + i}
            className={`tab-item ${+index === i ? 'active' : ''}`}
            onClick={() => pageChange(i)}>{s}</div>
        ))}
      </div>

      <ArticleList type={type} />

    </div>
  );
};
