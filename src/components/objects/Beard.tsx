import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,  BeardTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: BeardTypes
}

export const Beard = ({value,  type  , color, tags, zIndex = 7}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'beard', tags});

  return (
    <Layer data={data} zIndex={zIndex} />
 
  )
}