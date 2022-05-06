import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../graphql/queries";

interface GetPhotoOptions {
  searchString: string;
  page: number;
}

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

interface Photos {
  data: Photo[];
  meta: { totalCount: number };
}

export const usePhotos = ({ searchString, page }: GetPhotoOptions) => {
  const itemsPerPage = 5;
  const { loading, error, data } = useQuery<{
    photos: Photos;
  }>(GET_PHOTOS, {
    variables: {
      options: {
        search: { q: searchString },
        paginate: { page: page, limit: itemsPerPage },
      },
    },
  });

  const { photos } = data ?? {};

  return {
    photos: photos?.data,
    loading: loading,
    error: error,
    pageCount: photos?.meta.totalCount
      ? Math.ceil(photos?.meta.totalCount / 5)
      : 0,
  };
};
