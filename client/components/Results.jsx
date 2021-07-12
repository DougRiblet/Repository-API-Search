import React from 'react';
import PropTypes from 'prop-types';
import limitDescription from '../utils/limitDescription.js';

function Results({ results, error, showDetail }) {
  return (
    <div className="results-container">
      {error && (
        <div className="results-error">
          <p>{error}</p>
        </div>
      )}
      <div className="results-grid">
        {results && results.map((item) => (
          <div className="result" key={item.id}>
            <h3>{item.name}</h3>
            <p>{limitDescription(item.description)}</p>
            <p>&#9733; {item.stars}</p>
            <button type="button" onClick={() => showDetail(item.id)}>
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

Results.propTypes = {
  error: PropTypes.string,
  showDetail: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired,
    issues: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

Results.defaultProps = {
  error: '',
};

export default Results;
