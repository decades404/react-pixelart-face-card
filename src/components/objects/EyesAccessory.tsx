import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,  EyesAccessoryTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: EyesAccessoryTypes
}

export const EyesAccessory = ({value, type  , color, tags, zIndex = 5}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'eyesAccessory', tags});

  return (
    <Layer data={data} zIndex={zIndex} />
 
  )
}