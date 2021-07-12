import React, { useState } from 'react';
import Search from './Search.jsx';
import Detail from './Detail.jsx';
import Results from './Results.jsx';
import searchGithubApi from '../utils/searchGithubApi.js';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [detail, setDetail] = useState({});

  const fetchRepos = async (searchTerm, langFilter, sortOption) => {
    setError('');
    const newResults = await searchGithubApi(searchTerm, langFilter, sortOption);
    if (Array.isArray(newResults)) {
      setResults(newResults);
    } else {
      setResults([]);
      setError(newResults.error);
    }
  };

  const showDetail = (repoId) => {
    const selectedRepo = results.filter((el) => el.id === repoId)[0];
    setDetail(selectedRepo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDetail({});
  };

  return (
    <div>
      <main>
        <div>
          <Search
            fetchRepos={fetchRepos}
          />
          <Results
            results={results}
            showDetail={showDetail}
            error={error}
          />
          <Detail
            repo={detail}
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
        </div>
      </main>
    </div>
  );
}
