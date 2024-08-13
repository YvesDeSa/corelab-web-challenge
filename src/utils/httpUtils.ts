export const handleResponse = async (response: Response) => {
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Erro ao processar a requisição');
    }
    return response.json();
};
  