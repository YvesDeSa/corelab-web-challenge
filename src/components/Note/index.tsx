import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useSWRConfig } from 'swr';
import EditPaint from './Edit';

import {
  NoteContainer,
  EditingFlex,
  TextareaContainer,
  Text,
  Title,
  EditingContainer,
  InputTitle,
  Img,
  ImgPincelAndPaint,
  Barra,
  TextareaEditing,
  ButtonEditingNote,
  Form,
  FormTextarea,
} from './styles';
import { API_ENDPOINTS } from '../../constants/apiConstants';

interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  favorite: boolean;
  createdDate: string;
  file: string;
  color: string;
}

interface NoteFormInputs {
  title: string;
  description: string;
}

const Note: React.FC<NoteProps> = ({ title, description, favorite, createdDate, file, color, id, ...props }) => {
  const [currentFavorite, setCurrentFavorite] = useState(favorite);
  const [isEditNote, setIsEditNote] = useState(false);
  const [isEditPaint, setIsEditPaint] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { mutate } = useSWRConfig();
  const { control, handleSubmit, setValue } = useForm<NoteFormInputs>({
    mode: 'all',
  });

  const toggleEditNote = () => {
    setIsEditNote(!isEditNote);
    if (!isEditNote) {
      setValue('title', title);
      setValue('description', description); 
    }
  };

  const toggleEditPaint = () => {
    setIsEditPaint(!isEditPaint);
  };

  const handleSaveEditPaint = () => {
    setIsEditPaint(false);
    mutate(`${API_ENDPOINTS.GET_NOTES}`);
  };

  const handleDelete = async (id: string) => {
    const noteId = id;
    try {
      const response = await axios.delete(`${API_ENDPOINTS.DELETE_NOTE(noteId)}`);
  
      if (response.status === 200) {
        mutate(`${API_ENDPOINTS.GET_NOTES}`);
        setConfirmDelete(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleEditFavorite = async () => {
    try {
      const newFavorite = !currentFavorite;

      const response = await axios.patch(`${API_ENDPOINTS.TOGGLE_FAVORITE(id)}`);

      if (response.status === 200) {
        setCurrentFavorite(newFavorite);

        await mutate(`${API_ENDPOINTS.GET_NOTES}`);
      }
    } catch (err) {
      console.error('Failed to update favorite status:', err);
    }
  };

  const onSubmitNote: SubmitHandler<NoteFormInputs> = async (data) => {
    console.log(data)
    try {
      const response = await axios.put(`${API_ENDPOINTS.UPDATE_NOTE(id)}`, {
        title: data.title,
        description: data.description,
        color,
      });

      if (response.status === 200) {
        setIsEditNote(false);
        mutate(`${API_ENDPOINTS.GET_NOTES}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NoteContainer {...props} style={{ backgroundColor: String(color) }}>
      <EditingFlex>
        {isEditNote ? (
          <Form onSubmit={handleSubmit(onSubmitNote)}>
            <InputTitle name="title" control={control} defaultValue={title} isEditing={isEditNote} />
          </Form>
        ) : (
          <Title>{title}</Title>
        )}
        {currentFavorite ? (
          <Img onClick={handleEditFavorite} src="estrelaYellow.png" />
        ) : (
          <Img onClick={handleEditFavorite} src="estrela.png" />
        )}
      </EditingFlex>
      <Barra />
      <TextareaContainer>
        {isEditNote ? (
          <FormTextarea onSubmit={handleSubmit(onSubmitNote)}>
            <TextareaEditing name="description" control={control} defaultValue={description} isEditing={isEditNote} />
            <ButtonEditingNote type="submit">Salvar alterações</ButtonEditingNote>
          </FormTextarea>
        ) : (
          <Text>{description}</Text>
        )}
        <EditingContainer>
          <EditingFlex>
            {isEditNote ? (
              <ImgPincelAndPaint onClick={toggleEditNote} src="edit.png" />
            ) : (
              <Img onClick={toggleEditNote} src="edit.png" />
            )}
            {isEditPaint ? (
              <ImgPincelAndPaint onClick={toggleEditPaint} src="poteTinta.png" />
            ) : (
              <Img onClick={toggleEditPaint} src="poteTinta.png" />
            )}
          </EditingFlex>
          <Img onClick={() => handleDelete(id)} src="x.png" />
        </EditingContainer>
      </TextareaContainer>
      {isEditPaint && <EditPaint id={id} title={title} description={description} color={color} favorite={currentFavorite} onSave={handleSaveEditPaint} />}
    </NoteContainer>
  );
};

export default Note;