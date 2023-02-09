"use client";
import { MoviesSection } from "@/components/movie-section";
import { useAppSelector } from "@/redux/hooks";

export default function Selector() {
  const selector = useAppSelector((state) => state.yourFavoritePlayLists);

  return (
    <>
      {selector.length > 0 && (
        <MoviesSection title="Your favorites" movies={selector} />
      )}
    </>
  );
}
