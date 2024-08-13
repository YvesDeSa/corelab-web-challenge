import { useState } from 'react';
import { Note } from './useFetchNotes';
import { updateColor } from '../services/api';

const useChangeColor = (
  notes: Note[], 
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChangeColor = async (id: string, newColor: string) => {
    setLoading(true);
    setError(null);

    try {
      const updatedNote = await updateColor(id, newColor);

      setNotes(notes.map(note =>
        note.id === id ? { ...note, color: updatedNote.color } : note
      ));
    } catch (error) {
      console.error('Erro ao atualizar a cor:', error);
      setError('Não foi possível atualizar a cor');
    } finally {
      setLoading(false);
    }
  };

  return { handleChangeColor, loading, error };
};

export default useChangeColor;
