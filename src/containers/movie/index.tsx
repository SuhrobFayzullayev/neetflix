import FeaturedMovie, { TypeProps } from "@/components/featured-movie";

function MovieContainer({ movie }: TypeProps) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}

export { MovieContainer };
