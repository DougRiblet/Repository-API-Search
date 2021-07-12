import React from 'react';
import PropTypes from 'prop-types';
import limitDescription from '../utils/limitDescription.js';

function Detail({ repo, showModal, handleCloseModal }) {
  const onOffClass = showModal ? 'modal display-block' : 'modal display-none';
  return (
    <div className={onOffClass} role="document">
      <div className="modal-container">
        <button
          id="close-modal-button"
          type="button"
          onClick={handleCloseModal}
        >
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
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  repo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
    stars: PropTypes.number,
    forks: PropTypes.number,
    issues: PropTypes.number,
    language: PropTypes.string,
    created: PropTypes.string,
    updated: PropTypes.string,
    url: PropTypes.string,
  }),
};

Detail.defaultProps = {
  repo: {
    id: 0,
    name: '',
    owner: '',
    description: '',
    stars: 0,
    forks: 0,
    issues: 0,
    language: '',
    created: '',
    updated: '',
    url: '',
  },
};

export default Detail;
