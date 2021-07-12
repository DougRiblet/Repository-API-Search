const dummyResults = [{
  id: 111,
  name: 'Code',
  owner: 'Owner',
  description: 'Stuff',
  stars: 4,
  forks: 5,
  issues: 6,
  language: 'English',
  created: '',
  updated: '',
  url: 'https://example.com',
},
{
  id: 222,
  name: 'Code',
  owner: 'Owner',
  description: 'Stuff',
  stars: 4,
  forks: 5,
  issues: 6,
  language: 'English',
  created: '',
  updated: '',
  url: 'https://example.com',
}];

const searchGithubApi = (searchTerm) => {
  if (searchTerm === 'Discus') {
    return dummyResults;
  }
  if (searchTerm === 'Jibberish') {
    return { error: 'Zero results found. Please try again.' };
  }
  return { error: 'Search encountered error. Please try again.' };
};

export default searchGithubApi;
