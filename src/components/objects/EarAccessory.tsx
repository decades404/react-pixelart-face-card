import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,  EarAccessoryTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: EarAccessoryTypes
}

export const EarAccessory = ({value, type  , color, tags, zIndex = 9}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'earAccessory', tags});

  return (
    <Layer data={data} zIndex={zIndex}/>
 
  )
}