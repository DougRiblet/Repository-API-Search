import React from 'react';
import limitDescription from '../utils/limitDescription.js';

export default function Detail({ repo, showModal, handleCloseModal }) {
  const onOffClass = showModal ? "modal display-block" : "modal display-none";
  return (
    <div className={onOffClass}>
      <div className='modal-container'>
        <button type="button" onClick={handleCloseModal}>
          Back to Search Results
        </button>
        <div className='detail-display'>
          <h2>{repo.name}</h2>

          <ul className='detail-list'>
            <li>owner: {repo.owner}</li>
            <li>language: {repo.language}</li>
            <li>created: {repo.created}</li>
            <li>updated: {repo.updated}</li>
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
