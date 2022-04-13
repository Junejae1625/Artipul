import { GraphQLClient, gql } from 'graphql-request'

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient('https://daseul.shop/graphql', {
      credentials: 'include'
    })
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN)
    const newAccessToken = result.restoreAccessToken.accessToken

    return newAccessToken
  } catch (e) {
    console.log('')
  }
}
