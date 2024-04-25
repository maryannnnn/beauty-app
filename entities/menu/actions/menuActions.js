import {gql} from '@apollo/client';

export const GET_MENU_TOP = gql`
  query GetMenuTop {
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

export const GET_MENU_MAIN = gql`
  query GetMenuMain {
      menuItems(where: {location: PRIMARY}) {
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
