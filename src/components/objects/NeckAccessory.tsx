import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,  EyesAccessoryTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: EyesAccessoryTypes
}

export const NeckAccessory = ({value, type  , color, tags, zIndex = 1}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'neckAccessory', tags});

  return (
    <Layer data={data} zIndex={zIndex} />
 
  )
}