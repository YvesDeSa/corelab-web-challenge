// App.tsx
import React, { useState, useContext } from 'react';

import CreateNote from '../../components/Note/Create';
import NavBar from '../../components/Navbar';

import { useNotes } from '../../hooks/useNotes';
import { useLoading } from '../../hooks/useLoading';

import { Container, NoteList, FavoriteList, TitleList, ScreenLoading, NoteContainer } from './style';
import Note from '../../components/Note';

interface Note {
  _id: string;
  title: string;
  description: string;
  createdDate: string;
  favorite: boolean;
  color: string;
  src?: string; 
}

export const Home: React.FC = () => { 
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const { dataNotes, errorNotes, dataFavoriteNotes, errorFavoriteNotes } = useNotes(searchValue);

  useLoading(dataFavoriteNotes, dataNotes, errorFavoriteNotes, errorNotes, setLoading);

  if (loading) return <ScreenLoading>Carregando...</ScreenLoading>;

  return (
    <>
      <NavBar onSearchChange={setSearchValue} onCleanInput={() => setSearchValue('')} />
      <Container>
        <CreateNote />
        <FavoriteList>
          <TitleList>Favoritos</TitleList>
          {dataFavoriteNotes &&
          !errorFavoriteNotes &&
          dataFavoriteNotes.length > 0 ? (
            dataFavoriteNotes.map((note: Note) => (
              <NoteContainer key={note._id}>
                <Note
                  title={note.title}
                  createdDate={note.createdDate}
                  description={note.description}
                  favorite={note.favorite}
                  color={note.color}
                  id={note._id}
                  file={''}
                />
              </NoteContainer>
            ))
          ) : (
            <h3>Nenhuma tarefa encontrada</h3>
          )}
        </FavoriteList>
        <NoteList>
          <TitleList>Outros</TitleList>
          {dataNotes && !errorNotes && dataNotes.length > 0 ? (
            dataNotes.map((note: Note) => (
              <NoteContainer key={note._id}>
                <Note
                  title={note.title}
                  createdDate={note.createdDate}
                  description={note.description}
                  favorite={note.favorite}
                  color={note.color}
                  id={note._id}
                  file={''}
                />
              </NoteContainer>
            ))
          ) : (
            <h3>Nenhuma tarefa encontrada</h3>
          )}
        </NoteList>
      </Container>
    </>
  );
}

