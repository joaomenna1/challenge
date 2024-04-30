import React, { useState } from 'react';

const AddUrlForm = ({ onAdd }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Digite a URL..."
        required
      />
      <button type="submit">Adicionar URL</button>
    </form>
  );
};

export default AddUrlForm;
