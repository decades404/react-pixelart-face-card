import { createContext } from 'react';
import { useSize } from '../hooks/useSize';
import { PixelArtFace } from './PixelArtFace';
import { Tags } from '../interfaces/interfaces';
import { usePixelArtCard } from '../hooks/usePixelArtCard';
import React from 'react';


export interface Props {
    children?: React.ReactElement | React.ReactElement[];
    style? : React.CSSProperties
    size? : number;
    color?: string;
    tags?: Tags[];
    random? : boolean;
    hover?: boolean
    hoverColor?: string
}

interface ContextProps {
  newWidth: number
  newHeight: number
  HOCtags?: Tags[]
}

export const PixelArtCardContext = createContext({} as ContextProps);
const { Provider } = PixelArtCardContext;


export const PixelArtCard = ({size,children, style, color, random = false, tags, hover = true, hoverColor = '#80deea'}: Props) => {
  
  const { newWidth, newHeight , mainRef} = useSize({size})
  const { randomComponents, randomColor, isHover, onHover, onLeave}  = usePixelArtCard({random, tags, color, children})
  

  return (
    <Provider
      value={{ newWidth, newHeight, HOCtags: tags}}
    >
      <div 
        ref={mainRef}
     //   className={styles.mainContainer}
     onMouseOver={onHover}
     onMouseLeave={onLeave}
        style={{ width:newWidth, height: newHeight, ...style,}}
      >
      
        <PixelArtFace color={color ? color: randomColor} hover={hover} hoverColor={hoverColor} isHover={isHover}/>
        {
          random && randomComponents.map( (item) => {
            return(
              <item.Component tags={item.tags} />
            )
          })
        }

        {children}
      </div>
    </Provider>
  )
}
