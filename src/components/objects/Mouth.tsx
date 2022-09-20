import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,  MouthTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: MouthTypes
}

export const Mouth = ({value,  type  , color, tags, zIndex = 8}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'mouth', tags});

  return (
    <Layer data={data} zIndex={zIndex} />
 
  )
}