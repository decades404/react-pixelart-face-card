import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,   NoseTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: NoseTypes
}

export const Nose = ({value,  type  , color, tags, zIndex = 6}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'nose', tags});

  return (
    <Layer data={data}  zIndex={zIndex}/>
 
  )
}