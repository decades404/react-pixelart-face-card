import { useState, useEffect, useContext } from 'react';
import { itemsData } from '../data/itemsData';
import { PixelArtType, ObjectTypes} from '../interfaces/interfaces';
import { colorsData } from '../data/colorsData';
import { getRandomValue } from '../components/utils/getRandomValue';
import { PixelArtCardContext } from '../components/PixelArtCard';

interface usePixelArtTypeArgs extends PixelArtType {
    objectType: keyof ObjectTypes
    value?: string
}

export const usePixelArtType = ({ color, value, objectType , tags }: usePixelArtTypeArgs) => {

    const { HOCtags } = useContext(PixelArtCardContext)

    const [data, setData] = useState('');

    const getItemsByTags = (tags: string[]) => {

        let itemsToReturn: any= {};

        const items = itemsData[objectType];

        Object.entries(items).map( ([key, item]) => {
            tags.map( tag => {
                const found = item.tags.find((element: string) => element === tag || element === 'all');
                if(found){
                    itemsToReturn[key] = item;
                }
            })
          
        })
        return itemsToReturn;
    }

    useEffect(() => {
        setItemData();
    }, [])

    const setItemData = () => {

        const _color = color ? color : colorsData[getRandomValue(colorsData.length - 1)]

        let _dataItems;
        if(value){
            _dataItems = itemsData[objectType]
        }
        else {
            if(tags && tags.length >= 1){
                _dataItems = getItemsByTags(tags) ;
            }
            else {
                if (HOCtags && HOCtags.length >= 1) {
            
                    _dataItems = getItemsByTags(HOCtags) ;
                }
                else {
                    _dataItems = itemsData[objectType];
                }
            }
        }
        /* DATA ITEMS */
     //   const _dataItems = value ? itemsData[objectType] : 
        
     //   (tags && tags.length >= 1 ? getItemsByTags(tags) :  itemsData[objectType]) // hair, eyes, ....
       
        let typeKeys = Object.keys(_dataItems);

        if (typeKeys.length == 0){
                _dataItems = itemsData[objectType]
                typeKeys = Object.keys(itemsData[objectType]);
        }
        const randomItemKey = getRandomValue(typeKeys.length, 1);

        /* DATA ITEMS */
        const itemKey: any = value ? value.toString()  : typeKeys[randomItemKey];


        const data = _dataItems[itemKey].data.replaceAll('#color', _color);
        setData(data)
    }



    return {
        data
    }

}