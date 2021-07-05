import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const searchGithubApi = async (searchTerm, langFilter, sortOption) => {
  const langString = langFilter === 'All' ? '' : ` language:${langFilter}`;
  const queryString = `${searchTerm}${langString}`;
  
  const sortObj = {};
  if (sortOption === 'stars') {
    sortObj.sort = 'stars'
  };

  const fetchedData = await octokit.request('GET /search/repositories', {
    q: queryString,
    per_page: 36,
    ...sortObj,
  });

  const culledData = fetchedData.data.items.map((item) => ({
    id: item.id,
    name: item.name,
    owner: item.owner.login,
    description: item.description,
    stars: item.stargazers_count,
    language: item.language,
    created: item.created_at,
    updated: item.updated_at,
    url: item.url,
  }));

  return culledData;
};

export default searchGithubApi;
