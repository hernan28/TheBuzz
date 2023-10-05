const THE_MOVIE_DB_APIKEY = "5d29cca0cd242ab15fdf1ded49611251";

export const getTrendingFromApiAsync = async (
  setAction: React.Dispatch<any>,
) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${THE_MOVIE_DB_APIKEY}`,
    );
    const json = (await response.json()) as {
      page: number;
      results: Array<any>;
    };
    setAction(json.results);
  } catch (error) {
    console.error(error);
  }
};

export const getNowPlayingFromApiAsync = async (
  setAction: React.Dispatch<any>,
) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${THE_MOVIE_DB_APIKEY}`,
    );
    const json = (await response.json()) as {
      page: number;
      results: Array<any>;
    };
    setAction(json.results);
  } catch (error) {
    console.error(error);
  }
};

// TODO: ADD functions for the other endpoints
// ENDPOINTS:
// https://api.themoviedb.org/3/tv/on_the_air
// https://api.themoviedb.org/3/movie/now_playing
