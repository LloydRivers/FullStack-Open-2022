import React from "react";
import { Layout } from "../components";
import { useQuery } from "@apollo/client";
import { TRACKS } from "../query";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

// This component is responsible for rendering a list of tracks on the home page.
const Tracks = () => {
  // useQuery hook is used to fetch data from the server using the TRACKS query.
  const { loading, error, data } = useQuery(TRACKS);

  return (
    // Render a QueryResult component with error, loading and data props.
    <QueryResult error={error} loading={loading} data={data}>
      {/* 
        Render a Layout component with the grid prop, and map through the 
        tracksForHome array returned from the server to render a TrackCard
        component for each track.
      */}
      <Layout grid>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </Layout>
    </QueryResult>
  );
};

export default Tracks;
