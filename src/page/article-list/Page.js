import React, { useEffect, useState } from 'react';
import './page.css';
import axios from 'axios';

export default ({ type }) => {
  const [data, setData] = useState([]);
  const [tag, setTag] = useState([]);

  const changeTag = (data, index) => {
    const temp = JSON.parse(JSON.stringify(tag));
    temp[index].value = !temp[index].value;
    setTag(temp);
  };

  useEffect(() => {
    axios.get('/static/article/data.json').then(res => {
      let data = res.data.data.filter(s => s.type === type);
      setData(data);
    });

    // setTag([
    //   { name: 'tag1', value: 1 },
    //   { name: 'tag2', value: 1 },
    //   { name: 'tag3', value: 1 },
    //   { name: 'tag4', value: 1 },
    //   { name: 'tag5', value: 1 },
    //   { name: 'tag6', value: 1 },
    // ]);

  }, [type]);

  return (
    <div className={'article-list-warp'}>

      <div className={'list-tag-wrap'}>

        <div className={'list-ul'}>
          {data.map((s, i) => (
            <div className={'list-li'} key={'list' + i}>
              <a className={'title'} target={'_blank'} rel={'noopener noreferrer'} href={window.baseURL + s.url}>{s.title}</a>
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
