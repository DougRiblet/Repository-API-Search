import React, { useState } from 'react';

export default function Main({ fetchRepos, results }) {
  const [searchterm, setSearchterm] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    fetchRepos(searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search Github Repositories:
          <input
            type='text'
            value={searchterm}
            onChange={e => setSearchterm(e.target.value)}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}
