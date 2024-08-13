import { useEffect } from 'react';

export const useLoading = (
  dataFavoriteNotes: any,
  dataNotes: any,
  errorFavoriteNotes: any,
  errorNotes: any,
  setLoading: (value: boolean) => void
) => {
  useEffect(() => {

    if (dataFavoriteNotes || dataNotes || errorFavoriteNotes || errorNotes) {
      setLoading(false);
    }
  }, [dataFavoriteNotes, dataNotes, errorFavoriteNotes, errorNotes, setLoading]);
};
