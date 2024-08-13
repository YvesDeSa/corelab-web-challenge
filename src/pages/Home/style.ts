import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(240, 242, 245, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0px;
  overflow-x: auto;
  gap: 60px;
`;

export const NoteList = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%; 
  justify-content: flex-start; 
  padding-bottom: 25px;
`;


export const NoteContainer = styled.div`
  flex: 1 1 calc(33.333% - 5%);
  max-width: calc(33.333% - 5%); 
  box-sizing: border-box; 
  min-width: 250px; 
  max-width: 350px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 5%); 
    max-width: calc(50% - 5%);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%; 
    max-width: 100%;
  }
`;

export const FavoriteList = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  justify-content: flex-start; 
  padding-bottom: 25px;
`;

export const TitleList = styled.h2`
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.52px;
  text-align: left;
  padding: 6px 0;
  color: rgba(70, 70, 70, 1);
  position: absolute;
  left: 10%;
  transform: translateY(-110%);

  @media (min-width: 2000px) {
    left: 15%;
  }
  @media (min-width: 2560px) {
    left: 23%;
  }
`;

export const ScreenLoading = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e4e4e4;
  font-size: 24px;
`;
