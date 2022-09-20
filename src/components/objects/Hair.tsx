import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,  HairTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: HairTypes
}

export const Hair = ({value,  type  , color, tags, zIndex = 2}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'hair', tags});

  return (
    <Layer data={data} zIndex={zIndex} />
 
  )
}