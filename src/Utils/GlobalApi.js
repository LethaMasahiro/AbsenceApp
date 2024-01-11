import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clr9l0s130rvm01wd2t6ejm9j/master";

const getMember= async () => {

    const query = gql`
    query GetMember {
        members {
          id
          password
          accountname
        }
      }
    `
const result = await request(MASTER_URL, query);
return result;
}

export default {
    getMember
}