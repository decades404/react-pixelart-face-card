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
    const [rawData, setRawData] = useState('');

    const getItemsData = () => {

        let items = {...itemsData[objectType]};

        items['none'] && delete items['none'];

        return items;
    }

    const getItemsByTags = (tags: string[]) => {

        let itemsToReturn: any= {};

        const items = getItemsData();

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
    }, [value])

    useEffect(() => {
        setItemDataColor();
        
      
    }, [color])

    const setItemDataColor = () => {
        if(color){
            if(data!= '' && rawData != ''){
                const _data = rawData.replaceAll('#color', color);
                setData(_data);
            }
         
        }
    
    }

    const setItemData = () => {

        const _color = color ? color : colorsData[getRandomValue(colorsData.length - 1)]

        let _dataItems;
        if(value){
            _dataItems = getItemsData()
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
                    _dataItems =  getItemsData();
                }
            }
        }
        /* DATA ITEMS */
     //   const _dataItems = value ? itemsData[objectType] : 
        
     //   (tags && tags.length >= 1 ? getItemsByTags(tags) :  itemsData[objectType]) // hair, eyes, ....
       
        let typeKeys = Object.keys(_dataItems);

        if (typeKeys.length == 0){
                _dataItems = getItemsData()
                typeKeys = Object.keys(getItemsData());
        }
        const randomItemKey = getRandomValue(typeKeys.length);
  
        /* DATA ITEMS */
        let data;
        let _rawData;
        if(value) {
     
            const itemData = itemsData[objectType][value.toString()] ? itemsData[objectType][value.toString()]   : itemsData[objectType]['none']
            data = itemData.data.replaceAll('#color', _color);
            _rawData = itemData.data;
        }
        else {
            const itemKey: any = typeKeys[randomItemKey];
            data = _dataItems[itemKey].data.replaceAll('#color', _color);
            _rawData = _dataItems[itemKey].data
        }
        
        setRawData(_rawData);
        setData(data)
    }



    return {
        data
    }

}