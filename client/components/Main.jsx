import React, { useState } from 'react';

export default function Main({ fetchRepos, results }) {
  const [searchterm, setSearchterm] = useState('');
  const [language, setLanguage] = useState('All');
  const [sort, setSort] = useState('Default')

  const handleSubmit = evt => {
    evt.preventDefault();
    fetchRepos(searchterm);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
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
    </div>
  )
}
