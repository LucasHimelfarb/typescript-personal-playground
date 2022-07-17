type Category = 'terror' | 'comedy' | 'action' | 'romance';
type MovieProperty = 'name' | 'category' | 'autor' | 'date';

interface Movie {
  name: string;
  category: Category;
  autor: string;
  date: Date;
}

const getCategoryOfMovie = (movie: Movie): Category => {
  return movie.category;
}

const getAllMoviesByAutor = (movies: Movie[], author: string): Movie[] => {
  return movies?.filter(movie => movie?.autor?.toLocaleLowerCase() === author.toLocaleLowerCase());
}

const orderMoviesByDate = (movies: Movie[], date: Date): Movie[] => {
  let result = movies?.sort(movie => {
    return movie.date?.getTime() - date?.getTime();
  });

  return result;
}

const getAllMoviesByKey = (movies: Movie[], key: MovieProperty, keyValue: string | Category): Movie[] => {
  const result = movies?.filter(movie => movie[key] === keyValue);

  return result;
}