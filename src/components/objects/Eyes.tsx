import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType, EyesTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: EyesTypes
}

export const Eyes = ({value, type  , color, tags, zIndex = 4}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'eyes', tags});

  return (
    <Layer data={data} zIndex={zIndex} />
 
  )
}