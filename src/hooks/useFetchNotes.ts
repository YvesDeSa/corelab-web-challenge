import { useState, useEffect } from 'react';
import { fetchNotes } from '../services/api';
import { API_ENDPOINTS } from '../constants/apiConstants';

export interface Note {
    id: string;
    title: string;
    content: string;
    favorite: boolean;
    color: string;
  }
  
const useFetchNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        console.log("1")
        const data = await fetchNotes();
        console.log("2")
        console.log(data)
        setNotes(data);
      } catch (error) {
        console.error('Erro ao buscar notas:', error);
        setError('Não foi possível carregar as notas');
      } finally {
        setLoading(false);
      }
    };

    loadNotes();
  }, []);

  return { notes, setNotes, loading, error };
};

export default useFetchNotes;

