import { gql } from '@apollo/client';

export const GET_HOME_DATA = gql`
  query GetHomeData {
    category1: category(id: "dGVybToxMzQx") {
      ...CategoryFields
    }
    category2: category(id: "dGVybToxMzM3") {
      ...CategoryFields
    }
    category3: category(id: "dGVybToxMzQy") {
      ...CategoryFields
    }
    category4: category(id: "dGVybToxODA=") {
      ...CategoryFields
    }
    category5: category(id: "dGVybToxMzM1") {
      ...CategoryFields
    }
    salon(id: "cG9zdDozNjk2") {
      id
      title
      content(format: RENDERED)
    }
    salons {
      edges {
        node {
          id
          title
          uri
        }
      }
    }
    bonuses {
      edges {
        node {
          id
          AcfBonus {
            titleLong
            titleShort
            imageAnons {
              uri
              title
              altText
            }
            banner
          }
          uri
          title
        }
      }
    }
    massages {
      edges {
        node {
          id
          AcfMassage {
            titleLong
            descriptionAnons
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
    courses {
      edges {
        node {
          id
          AcfCourse {
            titleLong
            descriptionAnons
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
    testimonials {
      edges {
        node {
          id
          AcfTestimonial {
            titleLong
            titleShort
          }
          uri
          title
        }
      }
    }
    posts {
      edges {
        node {
          id
          AcfPost {
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

  fragment CategoryFields on Category {
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
`;


