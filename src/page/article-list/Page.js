import React, { useEffect, useState } from 'react';
import './page.css';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        title: '测试标题1', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容',
        url: '/article/1', update_date: ''
      },
      { title: '测试标题2', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容' },
      { title: '测试标题3', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容' },
      { title: '测试标题4', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容' }
    ]);
  }, []);

  return (
    <div className={'article-list-warp'}>

      <div className={'list-ul'}>
        {data.map((s, i) => (
          <div className={'list-li'} key={'list' + i}>
            <a className={'title'} target={'_blank'} rel={'noopener noreferrer'} href={s.url}>{s.title}</a>
            <div className={'content'}>{s.content}</div>
            <div className={'meta'}></div>
          </div>
        ))}
      </div>

    </div>
  );
};
