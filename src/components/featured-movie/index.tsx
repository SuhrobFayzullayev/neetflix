"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addPlayList, removePlayList } from "@/redux/slice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify/dist/components";
export type TypeProps = {
  movie?: {
    id?: number | string;
    title?: string;
    overview?: string;
    poster_path?: string;
    video?: boolean | [];
  };
  isCompact?: boolean;
};

function FeaturedMovie({ movie = {}, isCompact = true }: TypeProps) {
  const { video, poster_path, title, overview, id } = movie;

  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.yourFavoritePlayLists);

  return (
    <>
      <div className={styles.movieWrapper}>
        <h1 className={styles.movieTitle}>{title}</h1>
        <p
          className={`${styles.overview} ${
            isCompact ? styles.shortOverview : ""
          }`}
        >
          {overview}
        </p>
        <div className={styles.actionButtons} >
          <Link
            className={`${styles.playButton} text-black`}
            href={`/movie/${id}`}
            onClick={() =>
              toast.error("Sorry no video available!", {
                position: toast.POSITION.TOP_RIGHT,
              })
            }
          >
            Play
          </Link>
          {(!selector?.filter((v) => id == v.id)[0]?.check && (
            <button
              className={styles.addAndCheckButton}
              onClick={() =>
                dispatch(
                  addPlayList({
                    video,
                    poster_path,
                    title,
                    overview,
                    id,
                    check: true,
                  })
                )
              }
            >
              <FaPlus />
            </button>
          )) || (
            <button
              className={styles.addAndCheckButton}
              onClick={() => dispatch(removePlayList({ id }))}
            >
              <BsCheckLg />
            </button>
          )}
        </div>
        <div className={styles.moviePoster}>
          <div className={styles.moviePosterOverlay}></div>
          <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title!}
            fill
          />
        </div>
      </div>
    </>
  );
}

export { FeatureMovieLoading } from "./loading";
export default FeaturedMovie;
