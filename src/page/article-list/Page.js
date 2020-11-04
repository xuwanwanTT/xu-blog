import React, { useEffect, useState } from 'react';
import './page.css';

export default ({ type }) => {
  const [data, setData] = useState([]);
  const [tag, setTag] = useState([]);

  const changeTag = (data, index) => {
    const temp = JSON.parse(JSON.stringify(tag));
    temp[index].value = !temp[index].value;
    setTag(temp);
  };

  useEffect(() => {
    console.log(type);

    setData([
      {
        title: '测试标题1', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容',
        url: '/article/1', update_date: '2020-11-03 18:00', watched: '1', comment: '2', nice: 9999
      },
      {
        title: '测试标题2', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容',
        url: '/article/1', update_date: '2020-11-03 18:00', watched: '1', comment: '2', nice: 9999
      },
      {
        title: '测试标题3', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容',
        url: '/article/1', update_date: '2020-11-03 18:00', watched: '1', comment: '2', nice: 9999
      },
      {
        title: '测试标题4', content: '测试内容测试内容测试内容，测试内容测试内容测试内容，测试内容测试内容测试内容测试内容',
        url: '/article/1', update_date: '2020-11-03 18:00', watched: '1', comment: '2', nice: 9999
      },
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
              <div className={'meta'}>
                <span>浏览量 {s.watched}</span>
                <span>评论 {s.comment}</span>
                <span>赞 {+s.nice > 1000 ? '999+' : s.nice}</span>
                <span>{s.update_date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={'tag-ul'}>
          {tag.map((s, i) => (
            <div key={'tag' + i}
              onClick={() => { changeTag(s, i) }}
              className={`tag-li ${s.value ? 'active' : ''}`}>{s.name}</div>
          ))}
        </div>

      </div>

    </div>
  );
};
