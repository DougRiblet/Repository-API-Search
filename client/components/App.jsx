import React, { useState } from 'react';
import Main from './Main.jsx';
import Detail from './Detail.jsx';
import searchGithubApi from '../utils/searchGithubApi.js';

export default function App() {
  const [page, setPage] = useState('main');
  const [results, setResults] = useState([]);

  const fetchRepos = async (searchTerm) => {
    const newResults = await searchGithubApi(searchTerm, 'JavaScript', null);
    setResults(newResults);
  };

  return (
    <div>
      <div>
        {(page === 'detail') && (
          <Detail />
        )}
        {(page === 'main') && (
          <Main
            fetchRepos={fetchRepos}
            results={results}
          />
        )}
      </div>
    </div>
  );
}
