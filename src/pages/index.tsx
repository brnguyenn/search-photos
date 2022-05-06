import { useQuery } from "@apollo/client";
import { GET_PHOTOS } from "../graphql/queries";

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>test</div>;
};

export default IndexPage;
