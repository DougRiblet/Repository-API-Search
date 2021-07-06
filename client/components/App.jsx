import React, { useState } from 'react';
import Main from './Main.jsx';
import Detail from './Detail.jsx';
import searchGithubApi from '../utils/searchGithubApi.js';

export default function App() {
  const [page, setPage] = useState('main');
  const [results, setResults] = useState([]);

  const fetchRepos = async (searchTerm, langFilter, sortOption) => {
    const newResults = await searchGithubApi(searchTerm, langFilter, sortOption);
    setResults(newResults);
  };

  return (
    <div>
      <header>
        <div className='header-container'>
          <div className='header-title'>
            Search Github Repositories
          </div>
        </div>
      </header>
      <main>
        {(page === 'detail') && (
          <Detail />
        )}
        {(page === 'main') && (
          <Main
            fetchRepos={fetchRepos}
            results={results}
          />
        )}
      </main>
    </div>
  );
}
