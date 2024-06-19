import {gql} from '@apollo/client';

export const GET_MASSAGE = gql`
  query GetMassage {
    category(id: "dGVybToxMzM3") {
      id
      name
      uri
      AcfCategory {
        categoryTitleLong1
        categoryDescriptionAnons
      }
      seo {
        title
        metaKeywords
        metaDesc
      }
    }   
  }
`;

export const GET_MASSAGE_ALL = gql`
  query GetMassageAll {
    massages {
      edges {
        node {
          id
          AcfMassage {
            titleLong
            titleShort
            imageAnons {
              uri
              title
              altText
            }
          }
          uri
          title
        }
      }
    }
  }
`;