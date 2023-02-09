import { notFound } from "next/navigation";
import React from "react";

import { fetchSingleMovie } from "@/services/movie";
import { MovieContainer } from "@/containers/movie";

type PageProps = {
  params: {
    id: string | number;
  };
  searchParams: {
    error: string;
  };
};
async function MoviePage({ params, searchParams }: PageProps) {
  const movieDetail = await fetchSingleMovie(params.id);

  if (movieDetail.success === false) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
