import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Search({ fetchRepos }) {
  const [searchterm, setSearchterm] = useState('');
  const [language, setLanguage] = useState('');
  const [sort, setSort] = useState('default');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchRepos(searchterm, language, sort);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="search-form">
          <div className="term">
            <label htmlFor="search-text">
              Search Term (required)
              <input
                id="search-text"
                type="text"
                value={searchterm}
                onChange={(e) => setSearchterm(e.target.value)}
              />
            </label>
          </div>
          <div className="language">
            <label htmlFor="lang-text">
              Filter by Language (optional)
              <input
                id="lang-text"
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </label>
          </div>
          <div className="sort">
            <div className="sort-radio-header">
              Sort Results By
            </div>
            <div className="radio-choices">
              <div className="radio">
                <label htmlFor="default-radio">
                  <input
                    id="default-radio"
                    type="radio"
                    value="default"
                    checked={sort === 'default'}
                    onChange={(e) => setSort(e.target.value)}
                  />
                  Default
                </label>
              </div>
              <div className="radio">
                <label htmlFor="stars-radio">
                  <input
                    id="stars-radio"
                    type="radio"
                    value="stars"
                    checked={sort === 'stars'}
                    onChange={(e) => setSort(e.target.value)}
                  />
                  Stars
                </label>
              </div>
            </div>
          </div>
          <div className="submit-button">
            <input
              type="submit"
              value="Search Github"
              disabled={searchterm.length === 0}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

Search.propTypes = {
  fetchRepos: PropTypes.func.isRequired,
};
