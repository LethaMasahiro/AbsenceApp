/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listMembers = /* GraphQL */ `
  query ListMembers($limit: Int, $skip: Int) {
    listMembers(limit: $limit, skip: $skip) {
      id
      name
      email
      hasPayed
      absence
      createdAt
      updatedAt
      __typename
    }
  }
`;
