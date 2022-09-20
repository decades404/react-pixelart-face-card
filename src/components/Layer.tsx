import React, { useContext } from 'react';
import { PixelArtCardContext } from './PixelArtCard';

interface Props {
    data: string;
    animation? : string;
    animate?: boolean;
    size?: number;
    children?: React.ReactElement | React.ReactElement[];
    zIndex?: number;
}

const initialWidth = 26;


export const Layer = ({ data, size, children, zIndex}: Props) => {
   // 1/30 * 300
    const { newWidth, newHeight } = useContext(PixelArtCardContext)

    const operation = ( 1/initialWidth )  *  ( size ? size : (  newWidth >= newHeight ? newHeight : newWidth  ) )
    
  return (
    <div style={{ fontSize: operation +'px',  boxShadow: data,  background: 'transparent', 
    width: '1.2em', height: '1.2em', position: 'absolute', zIndex }}>
      {children}
        
    </div>
  )
}
