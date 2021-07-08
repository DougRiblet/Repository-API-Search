import React, { useState } from 'react';
import limitDescription from '../utils/limitDescription.js';

export default function Main({ fetchRepos, results }) {
  const [searchterm, setSearchterm] = useState('');
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('default')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchRepos(searchterm, language, sort);
  };

  return (
    <div>
      <div className='search-container'>
        <form onSubmit={handleSubmit}>
          <div className='search-form'>
            <div className='term'>
              <label>
                Search Term (required)
                <input
                  type='text'
                  value={searchterm}
                  onChange={e => setSearchterm(e.target.value)}
                />
              </label>
            </div>
            <div className='language'>
              <label>
                Filter by Language (optional)
                <input
                  type='text'
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                />
              </label>
            </div>
            <div className='sort'>
              <div className='sort-radio-header'>
                Sort Results By
              </div>
              <div className='radio-choices'>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      value='default'
                      checked={sort === 'default'}
                      onChange={e => setSort(e.target.value)}
                    />
                    Default
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      value='stars'
                      checked={sort === 'stars'}
                      onChange={e => setSort(e.target.value)}
                    />
                    Stars
                  </label>
                </div>
              </div>
            </div>
            <div className='submit-button'>
              <input
                type='submit'
                value='Search Github'
                disabled={searchterm.length === 0}
              />
            </div>
          </div>
        </form>
      </div>
      <div className='results-container'>
        <div className='results-grid'>
          {results && results.map((item) => (
            <div className='result' key={item.id}>
              <h3>{item.name}</h3>
              <p>{limitDescription(item.description)}</p>
              <p>&#9733; {item.stars}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
