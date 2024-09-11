import {gql} from '@apollo/client';

export const GET_MASSAGE_BY_SLUG = gql`
  query GetMassageBySlug($slug: String!) {
    massageBy(slug: $slug) {
      id
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
          }
      }
      seo {
          metaDesc
          title
      }
      AcfMassage {
        faqContent
        faqTitle
        videoTitle
        videoDescription
        video
        titleLong
        titleShort
        descriptionAnons
        titleCenter
        imageAnonsPage {
          altText
          sourceUrl
        }
        imageAnons {
          altText
          sourceUrl
        }
      }
    }
  }
`;

export const GET_MASSAGE_ALL = gql`
query  GetMassageAll {
  massages {
    edges {
        node {
          id
          AcfMassage {
            titleLong
            titleShort
            descriptionAnons
            imageAnonsPage {
              uri
              title
              altText
              sourceUrl
            }
            imageAnons {
              uri
              title
              altText
              sourceUrl
            }
          }
          title
          uri
          slug
        }
    }
  }
  massage(id: "cG9zdDo0MTEy") {
        id
        title
        content(format: RENDERED)
        featuredImage {
        node {
          altText
          sourceUrl
          }
        }
        seo {
          metaDesc
          title
        }
        AcfMassage {
         faqContent
         faqTitle
         videoTitle
         videoDescription
         video
         titleLong
         titleShort
         descriptionAnons
         titleCenter
         imageAnonsPage {
          altText
          sourceUrl
        }
      }
  }
}
`;
