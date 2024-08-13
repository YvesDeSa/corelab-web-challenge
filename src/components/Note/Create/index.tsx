import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useSWRConfig } from 'swr';
import {
  CreateContainer,
  StyledFlexTitle,
  InputTitle,
  ImgStar,
  Barra,
} from './styles';
import { API_ENDPOINTS } from '../../../constants/apiConstants';
import Textarea from '../../Form/Textarea';

interface NoteFormInputs {
  title: string;
  description: string;
  favorite: boolean;
}

const CreateNote: React.FC = () => {
  const { mutate } = useSWRConfig();
  const { control, handleSubmit, setValue } = useForm<NoteFormInputs>({
    mode: 'all',
  });

  const descriptionRef = useRef<HTMLTextAreaElement>(null); 

  const onSubmit: SubmitHandler<NoteFormInputs> = async (data) => {
    try {
      const response = await axios.post(`${API_ENDPOINTS.CREATE_NOTE}`, {
        title: data.title,
        description: data.description,
        favorite: data.favorite,
      });

      if (response.status === 201) {
        setValue('title', '');
        setValue('description', '');
        mutate(`${API_ENDPOINTS.GET_NOTES}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyDownTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      descriptionRef.current?.focus(); 
    }
  };

  const handleKeyDownDescription = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <CreateContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledFlexTitle>
          <InputTitle
            name="title"
            control={control}
            placeholder="Título"
            onKeyDown={handleKeyDownTitle} 
            required
          />
          <ImgStar src="estrela.png" alt="Not Favorite" />
        </StyledFlexTitle>
        <Barra />
        <Textarea
          name="description"
          control={control}
          placeholder="Criar nota.."
          ref={descriptionRef} 
          onKeyDown={handleKeyDownDescription} 
          required
        />
      </form>
    </CreateContainer>
  );
};

export default CreateNote;
