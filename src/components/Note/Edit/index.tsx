import React, { useContext } from 'react';
import axios from 'axios';
import { PaintContainer, ColorPaint } from './styles';
import { colors } from '../../../utils/colors'; 
import { API_ENDPOINTS } from '../../../constants/apiConstants';

interface EditPaintProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description: string;
  color: string;
  favorite: boolean;  
  onSave: () => void;
}

const EditPaint: React.FC<EditPaintProps> = ({ id, title, description, color, favorite, onSave, ...props }) => {

  const handleEditPaint = async (isColor: string) => {
    try {
      const response = await axios.patch(
        `${API_ENDPOINTS.UPDATE_COLOR(id)}`,
        {
          color: isColor,
        }
      );
      if (response.status === 200) {
        onSave();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PaintContainer {...props}>
      {Object.values(colors.cardColors).map((colorValue) => (
        <ColorPaint
          key={colorValue}
          onClick={() => handleEditPaint(colorValue)}
          style={{ background: colorValue }}
        />
      ))}
    </PaintContainer>
  );
};

export default EditPaint;
