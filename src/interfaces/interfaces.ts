import { Props  as BeardProps} from "../components/objects/Beard";
import { Props  as EarAccessoryProps} from "../components/objects/EarAccessory";
import { Props as EyesProps } from "../components/objects/Eyes";
import { Props as EyesAccessoryProps } from "../components/objects/EyesAccessory";
import { Props  as HairProps} from "../components/objects/Hair";
import { Props as HeadAccessoryProps } from "../components/objects/HeadAccessory";
import { Props as MouthProps } from "../components/objects/Mouth";
import { Props  as MouthAccessoryProps} from "../components/objects/MouthAccessory";
import { Props  as NeckAccessoryProps} from "../components/objects/NeckAccessory";
import { Props as NoseProps } from "../components/objects/Nose";
import { Props as PixelArtCardProps } from "../components/PixelArtCard";


export interface PixelArtObject {
    color? : string;
    children?: React.ReactElement | React.ReactElement[];
    animate?: boolean;
    size? : number;
}

export interface PixelArtType  extends PixelArtObject{
    zIndex?: number;
    type?: string;
    tags?: Tags[]
}

export interface RandomComponentProps extends PixelArtType {
    Component:(Props: PixelArtType) => JSX.Element
}

export type Tags = 'human-male' | 'human-female';

export interface PixelArtCardHOCProps {
    ( Props: PixelArtCardProps) : JSX.Element;
    Eyes: ( Props: EyesProps ) => JSX.Element;
    EyesAccessory: ( Props: EyesAccessoryProps ) => JSX.Element;
    EarAccessory: ( Props: EarAccessoryProps ) => JSX.Element;
    Hair: ( Props: HairProps ) => JSX.Element;
    HeadAccessory: ( Props: HeadAccessoryProps ) => JSX.Element;
    Nose: ( Props: NoseProps ) => JSX.Element;
    Mouth: ( Props: MouthProps ) => JSX.Element;
    MouthAccessory: ( Props: MouthAccessoryProps ) => JSX.Element;
    Beard: ( Props: BeardProps ) => JSX.Element;
    NeckAccessory: ( Props: NeckAccessoryProps ) => JSX.Element;
}

export interface ObjectTypes {
    eyes: { [key: string]: EyesTypes };
    eyesAccessory: { [key: string]: EyesAccessoryTypes };
    earAccessory: { [key: string]: EarAccessoryTypes };
    hair: { [key: string]: HairTypes };
    headAccessory: { [key: string]: HeadAccessoryTypes };
    nose: { [key: string]: NoseTypes };
    mouth: { [key: string]: MouthTypes };
    mouthAccessory: { [key: string]: MouthAccessoryTypes };
    neckAccessory: { [key: string]: NeckAccessoryTypes };
    beard: { [key: string]: BeardTypes };
}

export type EyesTypes = string  | 'eyes-1' | 'eyes-2' ;
export type EyesAccessoryTypes =  string  | 'eyes-accessory-1' | 'eyes-accessory-2' | 'eyes-accessory-3' | 'eyes-accessory-4' | 'eyes-accessory-5'| 'eyes-accessory-6'| 'eyes-accessory-7'| 'eyes-accessory-8'| 'eyes-accessory-9' | 'eyes-accessory-10' | 'eyes-accessory-11';
export type EarAccessoryTypes =  string  | 'ear-accessory-1' | 'ear-accessory-2' | 'ear-accessory-3'  | 'ear-accessory-4'  | 'ear-accessory-5' ;
export type HairTypes =  string  | 'hair-1' | 'hair-2'| 'hair-3'| 'hair-4'| 'hair-5' | 'hair-6'| 'hair-7' | 'hair-8'| 'hair-9'| 'hair-10'| 'hair-11' | 'hair-12'| 'hair-13'| 'hair-14'| 'hair-15'| 'hair-16'| 'hair-17' | 'hair-18' | 'hair-19' | 'hair-20' | 'hair-21' | 'hair-22' | 'hair-23' | 'hair-24' | 'hair-25' | 'hair-26' | 'hair-27' | 'hair-28' | 'hair-29' | 'hair-30' | 'hair-31';
export type HeadAccessoryTypes =  string  | 'head-accessory-1' | 'head-accessory-2'| 'head-accessory-3' | 'head-accessory-4'  | 'head-accessory-5' | 'head-accessory-6' | 'head-accessory-7' | 'head-accessory-8' | 'head-accessory-9' | 'head-accessory-10' | 'head-accessory-11' | 'head-accessory-12' | 'head-accessory-13' | 'head-accessory-14' | 'head-accessory-15' | 'head-accessory-16';
export type NoseTypes =  string  | 'nose-1' | 'nose-2'  | 'nose-3';
export type MouthTypes =  string  | 'mouth-1' | 'mouth-2'  | 'mouth-3' | 'mouth-4' | 'mouth-5';
export type MouthAccessoryTypes =  string  | 'mouth-accessory-1' | 'mouth-accessory-2'| 'mouth-accessory-3' | 'mouth-accessory-4'  ;
export type NeckAccessoryTypes =  string  | 'neck-accessory-1' | 'neck-accessory-2' | 'neck-accessory-3' | 'neck-accessory-4' | 'neck-accessory-5';
export type BeardTypes =  string  | 'beard-1' | 'beard-2' | 'beard-3' | 'beard-4' | 'beard-5'  | 'beard-6' | 'beard-7' | 'beard-8' | 'beard-9' | 'beard-10'  | 'beard-11'  ;


export interface DataItem {
    data: string;
    defaultColor?: string;
    tags: string[];
}
