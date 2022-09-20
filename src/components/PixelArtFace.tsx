import { PixelArtObject } from '../interfaces/interfaces';
//import { gsap } from "gsap";
import {  useRef } from 'react';
import React from 'react';
import { Layer } from './Layer';
import { faceData, faceDataHover } from '../data/itemsData';
import { usePixelArtFace } from '../hooks/usePixelArtFace';

interface PixelArtFace extends PixelArtObject {
  hover?: boolean
  hoverColor? : string
  isHover? : boolean
}
export const PixelArtFace = ({ color = 'white', children, animate = false , size, hover = true, hoverColor = '#8c9eff', isHover = false}: PixelArtFace) => {

  const boxRef = useRef<any>(null);

  const {} = usePixelArtFace();

/*
  useEffect(() => {
    animate && gsap.to(boxRef.current, { top: -1, duration: 1, repeat: -1, yoyo: true , ease: 'bounce.in'});
  }, []);
  */

  return (
    <div ref={boxRef}>  
    {
        hover && isHover && 

        <Layer size={size} data={faceDataHover().replaceAll('#color', hoverColor)} animate={animate}/>
      }
      <Layer size={size} data={faceData().replaceAll('#color', color)} animate={animate}/>
      
       { children }

    </div>
  
  )
}
