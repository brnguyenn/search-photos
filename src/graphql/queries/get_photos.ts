import { gql } from "@apollo/client";

const pageLimitPair = `fragment pageLimitPair on PageLimitPair {
  page
  limit
}`;

export const GET_PHOTOS = gql`
  query GetPhoto($options: PageQueryOptions) {
    photos(options: $options) {
      data {
        id
        title
        thumbnailUrl
      }
      links {
        first {
          ...pageLimitPair
        }
        prev {
          ...pageLimitPair
        }
        next {
          ...pageLimitPair
        }
        last {
          ...pageLimitPair
        }
      }
    }
  }

  ${pageLimitPair}
`;
