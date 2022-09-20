import { usePixelArtType } from '../../hooks/usePixelArtType';
import { PixelArtType,  HeadAccessoryTypes } from '../../interfaces/interfaces';
import { Layer } from '../Layer';
import React from 'react'

export interface Props  extends PixelArtType{
    value?: HeadAccessoryTypes
}

export const HeadAccessory = ({value, type  , color, tags, zIndex = 3}: Props) => {

    const { data } = usePixelArtType({ type, color, value , objectType: 'headAccessory', tags});

  return (
    <Layer data={data}  zIndex={zIndex}/>
 
  )
}