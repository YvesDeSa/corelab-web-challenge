import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const Text = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 11.45px;
  font-weight: 600;
  line-height: 13.86px;
  text-align: left;
  color: rgba(69, 90, 100, 1);

  @media (min-width: 600px) {
    font-size: 14.45px;
  }
`;

export const ImgLogo = styled.img`
  padding: 7px;
`;
