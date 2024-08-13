import React from 'react';
import { LogoContainer, Text, ImgLogo } from './styles';

const LogoNavbar: React.FC = () => {
  return (
    <LogoContainer>
      <ImgLogo src="logo.png" alt="Logo" />
      <Text>CoreNotes</Text>
    </LogoContainer>
  );
};

export default LogoNavbar;
