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
        dopolnitelnyeUslugi {
            ... on Procedure {
              id
              title
              uri
           }
         }
         massazhist {
            ... on Master {
              id
              uri
              title
           }
         }
         aromaty
         czenaPaket
         czenaSeans
         effekty
         kolichestvoPakete
         metodikiMassage {
            ... on Methodology {
              id
              title
              uri
           }
         }
         muzyka
         pokazaniyaMassage {
            ... on Pokazaniya {
              id
              uri
              title
           }
         }
         preimushhestva
         prodolzhitelnostSeansa
         protivopokazaniya
         rekomenduemayaChastota
         sostavlyayushhieProczedury {
            ... on Procedure {
              id
              uri
              title
           }
         }
         zonaMassage {
            ... on Zone {
              id
              uri
              title
           }
         }
      }
    }
    testimonials {
      edges {
        node {
          id
          AcfTestimonial {
            afterTaste
            descriptionAnons
            front
            whatProcess
            whyChiced
            groupInfoPost {
              speciality
              position
              fullName
              imageAuthor {
                altText
                sourceUrl
                uri
              }
            }
          }
          title
          uri
          categories {
            edges {
              node {
                id
                uri
                name
              }
            }
          }
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
            dopolnitelnyeUslugi {
              ... on Procedure {
                id
                title
                uri
              }
            }
            massazhist {
              ... on Master {
                id
                uri
                title
              }
            }
            aromaty
            czenaPaket
            czenaSeans
            effekty
            kolichestvoPakete
            metodikiMassage {
              ... on Methodology {
                id
                title
                uri
              }
            }
            muzyka
            pokazaniyaMassage {
              ... on Pokazaniya {
                id
                uri
                title
              }
            }
            preimushhestva
            prodolzhitelnostSeansa
            protivopokazaniya
            rekomenduemayaChastota
            sostavlyayushhieProczedury {
              ... on Procedure {
                id
                uri
                title
              }
            }
            zonaMassage {
              ... on Zone {
                id
                uri
                title
              }
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
  testimonials {
      edges {
        node {
          id
          AcfTestimonial {
            afterTaste
            descriptionAnons
            front
            whatProcess
            whyChiced
            groupInfoPost {
              speciality
              position
              fullName
              imageAuthor {
                altText
                sourceUrl
                uri
              }
            }
          }
          title
          uri
          categories {
            edges {
              node {
                id
                uri
                name
              }
            }
          }
        }
      }
    }    
}
`;
