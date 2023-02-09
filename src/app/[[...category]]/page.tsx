import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchGenres,
  fetchMoviesByGenre,
} from "@/services/movie";

import HomeContainer from "@/containers/home";

type PageProps = {
  params: { category: (string | number)[] };
};

async function HomePage({ params: { category } }: PageProps) {
  const pagePromises: Promise<any>[] = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchGenres(),
  ];

  if (!!category?.length) {
    pagePromises.push(fetchMoviesByGenre(category[0]));
  }

  const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
    await Promise.all(pagePromises);

  return (
    <HomeContainer
      categories={genres}
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      selectedCategory={{
        id: category?.[0] ?? "",
        movies: selectedCategoryMovies ?? [],
      }}
    />
  );
}

export default HomePage;
