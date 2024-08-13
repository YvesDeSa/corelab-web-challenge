export const API_BASE_URL = 'https://yves-corelab-api-challenge.vercel.app/api/notes';

export const API_ENDPOINTS = {
  GET_NOTES: API_BASE_URL,
  CREATE_NOTE: API_BASE_URL,
  UPDATE_NOTE: (id: string) => `${API_BASE_URL}/${id}`,
  DELETE_NOTE: (id: string) => `${API_BASE_URL}/${id}`,
  TOGGLE_FAVORITE: (id: string) => `${API_BASE_URL}/${id}/favorite`,
  UPDATE_COLOR: (id: string) => `${API_BASE_URL}/${id}/color`,
};
