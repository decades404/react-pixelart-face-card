import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,   MouthAccessoryTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: MouthAccessoryTypes
}

export const MouthAccessory = ({value, type  , color, tags, zIndex= 10}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'mouthAccessory', tags});

  return (
    <Layer data={data} zIndex={zIndex}/>
 
  )
}