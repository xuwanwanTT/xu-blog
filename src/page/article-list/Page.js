import React, { useEffect, useState } from 'react';
import './page.css';

export default ({ type }) => {
  const [data, setData] = useState([]);
  const [tag, setTag] = useState([]);

  useEffect(() => {
    console.log(type);

    setData([
      {
        title: '测试标题1', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容',
        url: '/article/1', update_date: ''
      },
      { title: '测试标题2', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容' },
      { title: '测试标题3', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容' },
      { title: '测试标题4', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容' }
    ]);

    setTag([
      { name: 'tag1', value: 1 },
      { name: 'tag2', value: 1 },
      { name: 'tag3', value: 1 },
      { name: 'tag4', value: 1 },
      { name: 'tag5', value: 1 },
      { name: 'tag6', value: 1 },
    ]);

  }, [type]);

  return (
    <div className={'article-list-warp'}>

      <div className={'list-tag-wrap'}>

        <div className={'list-ul'}>
          {data.map((s, i) => (
            <div className={'list-li'} key={'list' + i}>
              <a className={'title'} target={'_blank'} rel={'noopener noreferrer'} href={s.url}>{s.title}</a>
              <div className={'content'}>{s.content}</div>
              <div className={'meta'}></div>
            </div>
          ))}
        </div>

        <div className={'tag-ul'}>
          {tag.map((s, i) => (
            <div key={'tag' + i}
              className={`tag-li ${s.value ? 'active' : ''}`}>{s.name}</div>
          ))}
        </div>

      </div>

    </div>
  );
};
