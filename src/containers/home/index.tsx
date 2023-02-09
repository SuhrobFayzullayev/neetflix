import Categories from "@/components/categories";
import FeaturedMovie from "@/components/featured-movie";
import { MoviesSection } from "@/components/movie-section";
import { useRouter } from "next/router";
import Selector from "./selector";

type PageProps = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number | string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  name?: string;
  movies?: any[];
};

type All = {
  popularMovies: PageProps[];
  topRatedMovies: PageProps[];
  categories: PageProps[];
  selectedCategory: PageProps;
};

export default function HomeContainer({
  popularMovies,
  topRatedMovies,
  categories,
  selectedCategory,
}: All) {
  return (
    <div>
      <FeaturedMovie
        movie={
          topRatedMovies[Math.floor(Math.random() * topRatedMovies.length)]
        }
      />
      <Categories categories={categories} />
      {!!selectedCategory.movies?.length && (
        <MoviesSection
          title={
            categories.find(({ id }) => id === +selectedCategory.id!)?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Popular Films" movies={popularMovies} />
      <Selector />
    </div>
  );
}
