import styled from 'styled-components';
import { Input } from '../Form/Input';
import { Button } from '../Form/Button';
import Textarea from '../Form/Textarea';

export const NoteContainer = styled.div`
  position: relative;
  width: 100%;
  height: 337.59px;
  border-radius: 25px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    width: 340px;
    height: 430px;
  }
`;

export const EditingFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Text = styled.h3`
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  text-align: left;
  width: 100%;
  padding: 15px 9px;
  cursor: default;
  color: rgba(79, 79, 77, 1);
`;

export const Title = styled(Text)`
  font-size: 14.2px;
  font-weight: 700;
  text-align: left;
  cursor: default;
  ::placeholder {
    color: rgba(51, 51, 51, 1);
  }
`;

export const EditingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 15px;
`;

export const InputTitle = styled(Input)<{ isEditing: boolean }>`
  font-size: 14.2px;
  font-weight: 700;
  text-align: left;
  ::placeholder {
    color: rgba(51, 51, 51, 1);
  }
  padding: 10px;
  border-radius: 10px;
  border: ${(props) => (props.isEditing ? '1px solid black' : 'none')};
`;

export const Img = styled.img`
  padding: 7px;
  cursor: pointer;
  :hover {
    background: #cacaca;
    border-radius: 15px;
  }
`;

export const ImgPincelAndPaint = styled(Img)`
  padding: 7px;
  border-radius: 15px;
  background: rgba(255, 227, 179, 1);
`;

export const Barra = styled.div`
  width: 100%;
  border: 1px solid rgba(217, 217, 217, 1);
`;

export const TextareaEditing = styled(Textarea)<{ isEditing: boolean }>`
  width: 90%;
  display: flex;
  padding: 10px;
  height: 100%;
  color: rgba(79, 79, 77, 1);
  border: ${(props) => (props.isEditing ? '1px solid black' : 'none')};
`;

export const ButtonEditingNote = styled(Button)`
  width: 130px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const FormTextarea = styled(Form)`
  padding-top: 20px;
`;
