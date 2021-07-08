import React, { useState } from 'react';
import Main from './Main.jsx';
import Detail from './Detail.jsx';
import searchGithubApi from '../utils/searchGithubApi.js';

export default function App() {
  const [page, setPage] = useState('main');
  const [results, setResults] = useState([]);
  const [detail, setDetail] = useState({});

  const fetchRepos = async (searchTerm, langFilter, sortOption) => {
    const newResults = await searchGithubApi(searchTerm, langFilter, sortOption);
    setResults(newResults);
  };

  const showDetail = (repoId) => {
    const selectedRepo = results.filter((el) => el.id === repoId)[0];
    setDetail(selectedRepo);
    setPage('detail');

  }

  return (
    <div>
      <main>
        {(page === 'detail') && (
          <Detail repo={detail} />
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
