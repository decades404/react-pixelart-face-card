import React, { useEffect, useState } from 'react';
import { Hair } from '../components/objects/Hair';
import { RandomComponentProps, Tags } from '../interfaces/interfaces';
import { getRandomValue } from '../components/utils/getRandomValue';
import {  skinTonesData } from '../data/colorsData';
import { Eyes } from '../components/objects/Eyes';
import { Nose } from '../components/objects/Nose';
import { Mouth } from '../components/objects/Mouth';
import { Beard } from '../components/objects/Beard';
import { EyesAccessory } from '../components/objects/EyesAccessory';
import { EarAccessory } from '../components/objects/EarAccessory';
import { NeckAccessory } from '../components/objects/NeckAccessory';
import { MouthAccessory } from '../components/objects/MouthAccessory';
import { HeadAccessory } from '../components/objects/HeadAccessory';

interface usePixelArtCardArgs {
    random: boolean;
    tags?: Tags[]
    color?: string;
    children?: React.ReactElement | React.ReactElement[];

}
const isFunction = (data: any): data is (...args: any[]) => any => typeof data === 'function'


export const usePixelArtCard = ({ random, tags, color, children, }: usePixelArtCardArgs) => {

    const [randomComponents, setRandomComponents] = useState<RandomComponentProps[]>([]);
    const [randomColor] = useState(color ? color : skinTonesData[getRandomValue(skinTonesData.length - 1)])

    const [isHover, setIsHover] = useState(false);


    const onHover = () => {
        setIsHover(true);
    }
    const onLeave = () => {
        setIsHover(false);
    }

    useEffect(() => {
        if (random) {
            const childrenComponents = getChildrenComponents();

            let tag = getTag();
            const newItems: RandomComponentProps[] = [];

            let newTags;
            if (tag) {
                newTags = [tag] as Tags[]
            }
            !childrenComponents['Hair'] && newItems.push({
                Component: Hair,
                tags: newTags
            })
            !childrenComponents['Eyes']  && newItems.push({
                Component: Eyes,
                tags: newTags
            })
            !childrenComponents['Nose']  && newItems.push({
                Component: Nose,
                tags: newTags
            })
            !childrenComponents['Mouth']  && newItems.push({
                Component: Mouth,
                tags: newTags
            })

            let isBeard = false;
            let isEarAccessory = false;

            if (tag) {
                if (tag == 'human-male') {
                    isBeard = true;
                }
                else if(tag == 'human-female'){
                    isEarAccessory = true;
                }
            } else {
                isBeard = true;
                isEarAccessory = true;
            }

            !childrenComponents['Beard']  && isBeard && getRandomValue(3) == 1 && newItems.push({
                Component: Beard,
                tags: newTags
            })

            !childrenComponents['EyesAccessory']  && getRandomValue(3) == 1 && newItems.push({
                Component: EyesAccessory,
                tags: newTags
            })

            !childrenComponents['EarAccessory'] && isEarAccessory   && newItems.push({
                Component: EarAccessory,
                tags: newTags
            })

            !childrenComponents['NeckAccessory']  && getRandomValue(3) == 1 && newItems.push({
                Component: NeckAccessory,
                tags: newTags
            })

            !childrenComponents['MouthAccessory']  && getRandomValue(3) == 1 && newItems.push({
                Component: MouthAccessory,
                tags: newTags
            })

            !childrenComponents['HeadAccessory']  && getRandomValue(3) == 1 && newItems.push({
                Component: HeadAccessory,
                tags: newTags
            })

            setRandomComponents(newItems);
        }
    }, [])

    const getTag = () => {
        let tag;
        if (tags) {
            if (tags.length >= 2) {
                tag = tags[getRandomValue(tags.length - 1)];
            }
            else if (tags.length == 1) {
                tag = tags[0]
            }
        }
        return tag;
    }

    useEffect(() => {
      //  getChildrenComponents();
    }, [children])

    const getChildrenComponents = () => {
        const childrenComps: { [key: string]: boolean } = {}

        React.Children.map(children, (child) => {
            if (React.isValidElement(child) && isFunction(child.type)) {
                console.log("child", child)
                childrenComps[child.type.name] = true
            }
        });
        return childrenComps;
    }

    return {
        randomComponents,
        randomColor,
        isHover,
        onHover,
        onLeave
    }
}