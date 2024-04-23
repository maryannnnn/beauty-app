import {gql} from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
      menuItems(where: {location: SECONDARY}) {
        edges {
            node {
                id
                path
                order
                label
            }
        }
    }
  }
`;
