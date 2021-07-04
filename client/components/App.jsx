import React, { useState } from 'react';
import { Octokit } from '@octokit/rest';
import Main from './Main.jsx';
import Detail from './Detail.jsx';

export default function App() {
  const [page, setPage] = useState('main');
  const [results, setResults] = useState([]);

  const fetchRepos = async (searchterm) => {
    const fetchedData = await Octokit.request('GET /search/repositories', {
      q: searchterm,
      per_page: 4,
    });
    console.log('fetched: ', fetchedData);
    setResults(fetchedData);
  };

  return (
    <div>
      <h1>Home Page</h1>
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
