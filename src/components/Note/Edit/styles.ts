import styled from 'styled-components';

export const PaintContainer = styled.div`
  width: 267.94px;
  height: 96.58px;
  border-radius: 9px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(217, 217, 217, 1);
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 0;
  left: 5%;
  transform: translateX(-50%);
  transform: translateY(90%);
  z-index: 1;
  padding: 9px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (min-width: 600px) {
    width: auto;
    height: auto;
  }
  @media (min-width: 700px) {
    width: 100%;
  }
  @media (min-width: 1060px) {
    width: 517px;
  }
`;

export const ColorPaint = styled.div`
  width: 36.71px;
  height: 36.71px;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;
