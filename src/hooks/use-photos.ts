import { useQuery } from "@apollo/client";
import { calculatePageCount } from "../components/utils/photos";
import { GET_PHOTOS } from "../graphql/queries";
import { IPhoto } from "../types/photos";

interface GetPhotoOptions {
  searchString: string;
  page: number;
}

export interface IPhotoData {
  data: IPhoto[];
  meta: { totalCount: number };
}

export const usePhotos = ({ searchString, page }: GetPhotoOptions) => {
  const itemsPerPage = 5;
  const { loading, error, data } = useQuery<{
    photos: IPhotoData;
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
    pageCount: calculatePageCount(photos?.meta.totalCount ?? 0, itemsPerPage),
  };
};
