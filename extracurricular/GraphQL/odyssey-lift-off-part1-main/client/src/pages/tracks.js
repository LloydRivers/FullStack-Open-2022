/*When our component renders, useQuery returns an object from Apollo Client that contains loading, error, and data properties that we can use to render our UI. Let's put all of that into code. 

https://www.apollographql.com/docs/react/api/react/hooks/#usequery
*/

import React from "react";
import { Layout } from "../components";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";
/**
Just like when we defined our schema, we need to wrap all GraphQL strings in the gql template literal. Let's import gql:
 */
import { useQuery, gql } from "@apollo/client";

/* Next we'll declare a constant called TRACKS with an empty GraphQL string (by convention, query constants are in ALL_CAPS): */

const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
