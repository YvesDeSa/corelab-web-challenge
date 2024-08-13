import { useState } from 'react';
import { Note } from './useFetchNotes';
import { toggleFavorite } from '../services/api';

const useToggleFavorite = (
  notes: Note[], 
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleToggleFavorite = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const updatedNote = await toggleFavorite(id);

      setNotes(notes.map(note =>
        note.id === id ? { ...note, favorite: updatedNote.favorite } : note
      ));
    } catch (error) {
      console.error('Erro ao alternar o estado de favorito:', error);
      setError('Não foi possível alternar o estado de favorito');
    } finally {
      setLoading(false);
    }
  };

  return { handleToggleFavorite, loading, error };
};

export default useToggleFavorite;
