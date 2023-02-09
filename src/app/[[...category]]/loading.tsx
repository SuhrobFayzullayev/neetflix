import React from "react";

import { FeatureMovieLoading } from "@/components/featured-movie";
import { CategoriesLoading } from "@/components/categories";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
    </>
  );
}

export default HomeLoading;
