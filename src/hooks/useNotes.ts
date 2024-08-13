import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { API_ENDPOINTS } from '../constants/apiConstants';

interface Note {
  _id: string;
  title: string;
  description: string;
  createdDate: string;
  favorite: boolean;
  color: string;
  src?: string;
}

export const useNotes = (searchValue: string) => {
  const { data, error } = useSWR(`${API_ENDPOINTS.GET_NOTES}`, fetcher);

  const notesData = data?.data || [];

  const lowerSearch = searchValue ? searchValue.toLowerCase() : '';

  const filterDataNotes = notesData.filter((note: Note) =>
    note.title.toLowerCase().includes(lowerSearch)
  );

  const favoriteNotes = filterDataNotes.filter((note: Note) => note.favorite);
  const otherNotes = filterDataNotes.filter((note: Note) => !note.favorite);

  console.log(favoriteNotes)
  console.log(otherNotes)

  return {
    dataNotes: otherNotes,
    errorNotes: error,
    dataFavoriteNotes: favoriteNotes,
    errorFavoriteNotes: error, 
  };
};
