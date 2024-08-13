import styled from 'styled-components';
import { Input } from '../../Form/Input';
import { Button } from '../../Form/Button';

export const CreateContainer = styled.div`
  width: 80%;
  height: 170.36px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(217, 217, 217, 1);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    width: 530.17px;
    height: 120.36px;
    border-radius: 7px;
    border: 1px;
  }
`;

export const TextareaEditing = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  line-height: 1.5;
`;

export const StyledFlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const InputTitle = styled(Input)`
  font-size: 14.2px;
  font-weight: 700;
  text-align: left;
  ::placeholder {
    color: rgba(51, 51, 51, 1);
  }
`;

export const ImgStar = styled.img`
  padding: 1px;
  cursor: pointer;
`;

export const Barra = styled.div`
  width: 100%;
  border: 1px solid rgba(217, 217, 217, 1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 50%;
  align-items: end;

  @media (min-width: 600px) {
    align-items: start;
    height: auto;
  }
`;

export const ButtonCreate = styled(Button)`
  margin: 0px 15px;
  @media (min-width: 600px) {
    margin: 0px 3px;
  }
`;
