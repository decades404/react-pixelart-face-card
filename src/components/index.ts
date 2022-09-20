import { PixelArtCard  as PixelArcCardHOC} from './PixelArtCard';
import { PixelArtCardHOCProps, HairTypes } from '../interfaces/interfaces';
import { Eyes } from './objects/Eyes';
import { Hair } from './objects/Hair';
import { Nose } from './objects/Nose';
import { Mouth } from './objects/Mouth';
import { Beard } from './objects/Beard';
import { EyesAccessory } from './objects/EyesAccessory';
import { EarAccessory } from './objects/EarAccessory';
import { NeckAccessory } from './objects/NeckAccessory';
import { MouthAccessory } from './objects/MouthAccessory';
import { HeadAccessory } from './objects/HeadAccessory';


export { Eyes } from './objects/Eyes';
export { Hair } from './objects/Hair';
export { Nose } from './objects/Nose';
export { Mouth } from './objects/Mouth';
export { Beard } from './objects/Beard';
export { EyesAccessory } from './objects/EyesAccessory';
export { EarAccessory } from './objects/EarAccessory';
export { NeckAccessory } from './objects/NeckAccessory';
export { MouthAccessory } from './objects/MouthAccessory';
export { HeadAccessory } from './objects/HeadAccessory';


export { colorsData } from '../data/colorsData';
export { PixelArtFace } from './PixelArtFace';
export { itemsData } from '../data/itemsData';


export const PixelArtCard : PixelArtCardHOCProps = Object.assign( PixelArcCardHOC , {
    Eyes,
    EyesAccessory,
    EarAccessory,
    Hair,
    HeadAccessory,
    Nose,
    Mouth,
    MouthAccessory,
    NeckAccessory,
    Beard,
   
} );


export default PixelArtCard;