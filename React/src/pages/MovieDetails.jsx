import React from "react";
import { useParams } from "react-router";
import { fetchMovieDetails } from "../services/api";
import useFetch from "../services/useFetch";

function MovieDetails() {
  const { id: movieId } = useParams();

  const { data: movie, loading } = useFetch(() => fetchMovieDetails(movieId));

  if (loading) {
    return <div className="text-white">Loading...</div>; // should have coded a nicer loader but hey..
  }

  return (
    <div>
      <div className="relative w-full sm:hidden">
        <img
          className="w-full"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "/no-movie.png"
          }
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/100 to-transparent"></div>
      </div>

      <div className="relative w-full max-sm:hidden h-[500px]">
        <img
          className="w-full h-full object-cover"
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              : "/no-banner.png"
          }
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/100 to-transparent"></div>
      </div>

      <div className="relative content-container container m-auto px-4 mt-6 max-sm:-mt-20 sm:-mt-24">
        <div className="sm:flex sm:gap-4">
          <img
            className="h-48 w-32 max-sm:hidden rounded-md overflow-hidden"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "/no-movie.png"
            }
            alt={movie.title}
          />
          <div className="title-header">
            <div>
              <p className="text-purple-50 text-4xl font-bold">{movie.title}</p>
              <p className="text-gray-400 text-l font-semibold mb-6 sm:mb-4">
                {movie.tagline}
              </p>
            </div>

            <div className="flex details-box">
              <img src="/star.svg" alt="Star Icon" />
              <p className="text-white text-sm font-semibold ml-2">
                {Math.round(movie.vote_average)}/10{""}
                <span className="text-gray-100 ml-2">
                  ({movie.vote_count} votes)
                </span>
              </p>
            </div>

            <div className="details-box mt-2">
              <p>{movie.status}</p>
            </div>

            <p className="text-gray-100 font-semibold mt-2.5">
              {movie.release_date.split("-")[0]} - {movie.runtime} min
            </p>
          </div>
        </div>

        <p className="details-heading">Overview</p>
        <p className="text-purple-100 font-semibold ">{movie.overview}</p>

        <p className="details-heading">Genres</p>
        <div className="flex gap-2 flex-wrap">
          {movie.genres.map((genre) => (
            <p key={genre.id} className="details-box">
              {genre.name}
            </p>
          ))}
        </div>

        <p className="details-heading">Details</p>
        <div className="flex gap-6 flex-wrap max-[425px]:flex-col">
          <p className="details-text-light">
            <span className="text-purple-100">Budget:</span>{" "}
            {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}
          </p>
          <p className="details-text-light">
            <span className="text-purple-100">Revenue:</span>{" "}
            {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}
          </p>
          <p className="details-text-light">
            <span className="text-purple-100">Release date:</span>{" "}
            {movie.release_date}
          </p>
          <p className="details-text-light">
            <span className="text-purple-100 min-w">Language:</span>{" "}
            {movie.original_language.toUpperCase()}
          </p>
        </div>

        <p className="details-heading">Production Companies</p>
        <div className="flex gap-4 flex-wrap">
          {movie.production_companies.map((company) => (
            <p key={company.id} className="details-box">
              {company.name}
            </p>
          ))}
        </div>

        <div className="my-8 h-[2px] bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
}

export default MovieDetails;
