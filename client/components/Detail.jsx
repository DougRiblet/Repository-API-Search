import React from 'react';
import PropTypes from 'prop-types';
import limitDescription from '../utils/limitDescription.js';

export default function Detail({ repo, showModal, handleCloseModal }) {
  const onOffClass = showModal ? 'modal display-block' : 'modal display-none';
  return (
    <div className={onOffClass}>
      <div className="modal-container">
        <button type="button" onClick={handleCloseModal}>
          Back to Search Results
        </button>
        <div className="detail-display">
          <h2>{repo.name}</h2>

          <ul className="detail-list">
            <li>owner: {repo.owner}</li>
            <li>language: {repo.language}</li>
            <li>created: {repo.created}</li>
            <li>updated: {repo.updated}</li>
            <li>open issues: {repo.issues}</li>
            <li>forks: {repo.forks}</li>
          </ul>

          <p>{limitDescription(repo.description)}</p>
          <p>&#9733; {repo.stars}</p>
          <p>
            <a href={repo.url}>View Repo at Github</a>
          </p>

        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  showModal: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  repo: PropTypes.shape({
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
  }).isRequired,
};
