import { Note } from '../hooks/useFetchNotes';
import { API_ENDPOINTS } from '../constants/apiConstants';
import { handleResponse } from '../utils/httpUtils';

export const fetchNotes = async (): Promise<Note[]> => {
    const response = await fetch(API_ENDPOINTS.GET_NOTES);
    const Notes = await handleResponse(response);
  
    if (!Array.isArray(Notes.data)) {
      throw new Error('A resposta não é um array como esperado.');
    }
  
    return Notes.data;
  };

export const createNote = async (newNote: Omit<Note, 'id'>): Promise<Note> => {
  const response = await fetch(API_ENDPOINTS.CREATE_NOTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
  });
  return handleResponse(response);
};

export const updateNote = async (id: string, updatedNote: Partial<Note>): Promise<Note> => {
  const response = await fetch(API_ENDPOINTS.UPDATE_NOTE(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedNote),
  });
  return handleResponse(response);
};

export const deleteNote = async (id: string): Promise<void> => {
  const response = await fetch(API_ENDPOINTS.DELETE_NOTE(id), {
    method: 'DELETE',
  });
  await handleResponse(response);
};

export const toggleFavorite = async (id: string): Promise<Note> => {
  const response = await fetch(API_ENDPOINTS.TOGGLE_FAVORITE(id), {
    method: 'PATCH',
  });
  return handleResponse(response);
};

export const updateColor = async (id: string, color: string): Promise<Note> => {
  const response = await fetch(API_ENDPOINTS.UPDATE_COLOR(id), {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ color }),
  });
  return handleResponse(response);
};
