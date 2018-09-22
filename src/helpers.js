import { GraphQLClient } from 'graphql-request';

require('dotenv').config();

const createSearchQuery = (finalSearchKeyWord) => {
  return (
    `query {
      search(first: 10, query: "${finalSearchKeyWord}", type: REPOSITORY){
        edges{
          node{
            ... on Repository{
              url
              nameWithOwner
              id
              releases(orderBy:{field: CREATED_AT, direction: DESC}, first: 1){
                edges{
                  node{
                    name
                  }
                }
              }
              primaryLanguage{
                name
              }
            }
          }
        }
      }
    }`
  )
}

async function createRequest(finalSearchKeyWord) {
  const endpoint = 'https://api.github.com/graphql';

  const graphQLClient = new GraphQLClient( endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
    }
  });

  const query = createSearchQuery(finalSearchKeyWord);

  const data = await graphQLClient.request(query);
  return data;

}

//eslint-disable-next-line
const versionParser = (versionString) => {
  const regex = /(\d+\.){1,2}\d+/g
  const matches = versionString.match(regex);
  return "v" + matches[0];
}

const parseData = (repository) => {
  const nodeInfo = repository.node;

  // console.log(nodeInfo.releases.edges[0].node);
  const thisRepository = {
    id: nodeInfo.id,
    nameWithOwner: nodeInfo.nameWithOwner,
    url: nodeInfo.url,
    language: nodeInfo.primaryLanguage.name
  };
  if (nodeInfo.releases.edges.length > 0) {
    thisRepository.version = versionParser(nodeInfo.releases.edges[0].node.name)
  } else {
    thisRepository.version = "-";
  }
  return thisRepository;
}

const extractRepoInfo = (data) => {
  let allRepositories = [];
  data.search.edges.forEach((node) => {
    allRepositories.push(parseData(node));
  })
  return allRepositories;
}

// const getAllRepositories = (finalSearchKeyWord) => {
//   const query = createSearchQuery(finalSearchKeyWord);
//   return createRequest(query)
//             .catch(error => console.error(error))
//             .then(data => {
//               return extractRepoInfo(data)
//             });
// }



export { createRequest, extractRepoInfo };