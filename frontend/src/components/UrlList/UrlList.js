import React, { useState } from 'react';
import UrlChart from '../UrlChart/UrlChart';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  const handleAddUrl = (url) => {
    setUrls([...urls, { url, accesses: Math.floor(Math.random() * 100) }]);
  };

  return (
    <div>
      <h2>URLs Cadastradas</h2>
      {urls.length === 0 ? (
        <p>Nenhuma URL cadastrada ainda.</p>
      ) : (
        urls.map((item, index) => (
          <div key={index}>
            <span>{item.url}</span>
            <UrlChart accesses={item.accesses} />
          </div>
        ))
      )}
    </div>
  );
};

export default UrlList;
