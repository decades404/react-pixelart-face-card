import {  useState, useRef, useLayoutEffect } from 'react';

interface useSizeArgs {
    size? : number;
}

export const useSize = ( {size} : useSizeArgs) => {

    const [ newWidth, setNewWidth ] = useState(size ? size : 0 )
    const [ newHeight, setNewHeight ] = useState(size ? size :  0)

    const mainRef = useRef<any>(null);
    useLayoutEffect( ()=> {
        const resizeObserver = new ResizeObserver(() => {
            const width = mainRef.current.parentElement.offsetWidth
            let height = mainRef.current.parentElement.offsetHeight;
            if( height > width) height = width;
            setNewWidth( size ? size : width)
            setNewHeight( size ? size : height);
        });
        resizeObserver.observe(mainRef.current.parentElement);   
    }, [ ])

    return {
        newWidth,
        newHeight,
        mainRef
    }
}