import axios from "axios";
import {WP_URL} from "../../../app/config/config";
import {gql} from '@apollo/client';

export const GET_SALON_BY_SLUG = gql`
  query GetSalonBySlug($slug: String!) {
    salonBy(slug: $slug) {
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
      AcfSalon {
        faqContent
        faqTitle
        videoTitle
        videoDescription
        video
        titleLong
        titleShort
        descriptionAnons
        titleCenter
        imageAnons {
          altText
          sourceUrl
         }
      }
    }
  }
`;

export const GET_SALON_ALL = gql`
query  GetSalonAll {
  salons {
    edges {
        node {
          id
          AcfSalon{
            titleLong
            titleShort
            imageAnons {
              uri
              title
              altText
              sourceUrl
            }
          }
          title
          uri
        }
    }
  }
  salon(id: "cG9zdDozNjk2") {
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
        AcfSalon {
         faqContent
         faqTitle
         videoTitle
         videoDescription
         video
         titleLong
         titleShort
         descriptionAnons
         titleCenter
         imageAnons {
          altText
          sourceUrl
        }
      }
  }
}
`;


