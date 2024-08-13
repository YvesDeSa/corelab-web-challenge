import React, { useState } from 'react';
import Logo from './Logo';

import {
  NavContainer,
  SearchContainer,
  Img,
  StyledFlexSearchAndLogo,
  InputSearch
} from './styles';

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearchChange?: (value: string) => void;
  onCleanInput?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchChange, onCleanInput, ...props }) => {
  const [searchNote, setSearchNote] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchNote(value);
    if (typeof onSearchChange === 'function') {
      onSearchChange(value);
    }
  };

  const cleanInput = () => {
    setSearchNote('');
    if (typeof onCleanInput === 'function') {
      onCleanInput();
    }
  };

  return (
    <NavContainer {...props}>
      <StyledFlexSearchAndLogo>
        <Logo />
        <SearchContainer>
          <InputSearch
            name="searchNote"
            value={searchNote}
            onChange={handleSearchChange}
            placeholder="Pesquisar Notas"
            useControllerFlag={false}
          />
          <Img src="lupa.png" alt="Search" />
        </SearchContainer>
      </StyledFlexSearchAndLogo>
      <Img onClick={cleanInput} src="x.png" alt="Clear" />
    </NavContainer>
  );
};

export default Navbar;
