export const BASE_URL = "https://api.themoviedb.org/3";
const delay = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function fetchData(
  path: string,
  { query = "" }: { query?: string } = {}
) {
  await delay(1000);

  try {
    return await fetch(
      `${BASE_URL}${path}?api_key=2481024bda58530f443fa9e86a538b82&${query}`
    ).then((res) => res.json());
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function fetchGenres(): Promise<any> {
  try {
    const res = await fetchData("/genre/movie/list");
    return res.genres;
  } catch (error) {
    throw new Error("Error happened while fetching genres", error as Error);
  }
}

export async function fetchPopularMovies(): Promise<any> {
  try {
    const res = await fetchData("/movie/popular");
    return res.results;
  } catch (error) {
    throw new Error(
      "Error happened while fetching popular movies",
      error as Error
    );
  }
}

export async function fetchTopRatedMovies(): Promise<any> {
  try {
    const res = await fetchData("/movie/top_rated");
    return res.results;
  } catch (error) {
    throw new Error(
      "Error happened while fetching top rated movies",
      error as Error
    );
  }
}

export async function fetchSingleMovie(movieId: string | number) {
  try {
    const res = await fetchData(`/movie/${movieId}`);
    return res;
  } catch (error) {
    throw new Error(
      "Error happened while fetching top rated movies",
      error as Error
    );
  }
}

export async function fetchMoviesByGenre(genreId: string | number) {
  try {
    const res = await fetchData(`/discover/movie`, {
      query: `with_genres=${genreId}`,
    });
    return res.results;
  } catch (error) {
    throw new Error(
      "Error happened while fetching top rated movies",
      error as Error
    );
  }
}
