import { gql } from "@apollo/client";

export const GET_PHOTOS = gql`
  query GetPhoto($options: PageQueryOptions) {
    photos(options: $options) {
      data {
        id
        title
        url
        thumbnailUrl
      }
      meta {
        totalCount
      }
    }
  }
`;
