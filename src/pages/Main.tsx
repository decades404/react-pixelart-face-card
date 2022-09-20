import React from 'react'

import { Layer } from '../components/Layer';
import  PixelArtCard  from '../components';
import { Hair } from '../components/objects/Hair';


export const Main = () => {
    return (
        <>
            <div >

                <h1>Pixel Art Face Card</h1>
                <div style={{ flexDirection: 'row', display: 'flex', height: 150, backgroundColor: 'pink' }}>
               

                <div style={{ width: '150px', margin: 10 }}>
                        <PixelArtCard  random={true}  tags={['human-male']}/>
                    </div>
                    <div style={{ width: '150px', margin: 10 }}>
                        <PixelArtCard  tags={['human-female']} random={true} >

                            <Hair value='hair-30' />
                         
                           
                        </PixelArtCard>
                    </div>

                    <div style={{ width: '150px', margin: 10 }}>
                        <PixelArtCard color={'#efd0c9'} >
                            <PixelArtCard.Hair value='hair-2'  color='violet'/>
                            <PixelArtCard.Eyes  value="eyes-1" />
                            <PixelArtCard.EarAccessory />
                        </PixelArtCard>
                    </div>
                    <div style={{ width: '150px', margin: 10 }}>
                        <PixelArtCard color={'blue'} >
                            <PixelArtCard.Hair  color='black' />
                            <PixelArtCard.Eyes  />
                            <PixelArtCard.Nose />
                        </PixelArtCard>
                    </div>
                    <div style={{ width: '150px', margin: 10 }}>
                        <PixelArtCard random={true} tags={['human-female']} /> 
                    </div>
                 


                    <div style={{ width: '150px', margin: 10 }}>
                        <PixelArtCard color={'#efd0c9'} >
                            <Layer data={'5em 2em #651fff, 6em 2em #651fff, 9em 2em #651fff, 10em 2em #651fff, 11em 2em #651fff, 12em 2em #651fff, 13em 2em #651fff, 14em 2em #651fff, 15em 2em #651fff, 16em 2em #651fff, 5em 3em #651fff, 6em 3em #651fff, 7em 3em #651fff, 8em 3em #651fff, 9em 3em #651fff, 10em 3em #651fff, 11em 3em #651fff, 12em 3em #651fff, 13em 3em #651fff, 14em 3em #651fff, 15em 3em #651fff, 16em 3em #651fff, 17em 3em #651fff, 2em 4em #651fff, 3em 4em #651fff, 4em 4em #651fff, 5em 4em #651fff, 6em 4em #651fff, 7em 4em #651fff, 8em 4em #651fff, 9em 4em #651fff, 10em 4em #651fff, 11em 4em #651fff, 12em 4em #651fff, 13em 4em #651fff, 14em 4em #651fff, 15em 4em #651fff, 16em 4em #651fff, 17em 4em #651fff, 18em 4em #651fff, 3em 5em #651fff, 4em 5em #651fff, 5em 5em #651fff, 6em 5em #651fff, 7em 5em #651fff, 8em 5em #651fff, 9em 5em #651fff, 10em 5em #651fff, 11em 5em #651fff, 12em 5em #651fff, 13em 5em #651fff, 14em 5em #651fff, 15em 5em #651fff, 16em 5em #651fff, 17em 5em #651fff, 18em 5em #651fff, 19em 5em #651fff, 2em 6em #651fff, 3em 6em #651fff, 4em 6em #651fff, 5em 6em #651fff, 6em 6em #651fff, 7em 6em #651fff, 8em 6em #651fff, 9em 6em #651fff, 10em 6em #651fff, 11em 6em #651fff, 12em 6em #651fff, 13em 6em #651fff, 14em 6em #651fff, 15em 6em #651fff, 16em 6em #651fff, 17em 6em #651fff, 18em 6em #651fff, 19em 6em #651fff, 1em 7em #651fff, 2em 7em #651fff, 3em 7em #651fff, 4em 7em #651fff, 5em 7em #651fff, 6em 7em #651fff, 7em 7em #651fff, 8em 7em #651fff, 9em 7em #651fff, 18em 7em #651fff, 19em 7em #651fff, 3em 8em #651fff, 4em 8em #651fff, 5em 8em #651fff, 6em 8em #651fff, 7em 8em #651fff, 8em 8em #651fff, 19em 8em #651fff, 1em 9em #651fff, 2em 9em #651fff, 3em 9em #651fff, 4em 9em #651fff, 5em 9em #651fff, 6em 9em #fafafa, 7em 9em #fafafa, 8em 9em #fafafa, 9em 9em #fafafa, 10em 9em #fafafa, 11em 9em #fafafa, 12em 9em #fafafa, 13em 9em #fafafa, 14em 9em #fafafa, 15em 9em #fafafa, 16em 9em #fafafa, 17em 9em #fafafa, 18em 9em #fafafa, 19em 9em #fafafa, 1em 10em #651fff, 2em 10em #651fff, 3em 10em #651fff, 4em 10em #651fff, 5em 10em #651fff, 7em 10em #fafafa, 8em 10em #fafafa, 9em 10em #2979ff, 10em 10em #2979ff, 11em 10em #2979ff, 12em 10em #2979ff, 13em 10em #2979ff, 14em 10em #fafafa, 15em 10em #d50000, 16em 10em #d50000, 17em 10em #d50000, 18em 10em #d50000, 19em 10em #fafafa, 1em 11em #651fff, 2em 11em #651fff, 3em 11em #651fff, 4em 11em #651fff, 8em 11em #fafafa, 9em 11em #2979ff, 10em 11em #2979ff, 11em 11em #2979ff, 12em 11em #2979ff, 13em 11em #2979ff, 14em 11em #fafafa, 15em 11em #d50000, 16em 11em #d50000, 17em 11em #d50000, 18em 11em #d50000, 19em 11em #fafafa, 2em 12em #651fff, 3em 12em #651fff, 8em 12em #fafafa, 9em 12em #2979ff, 10em 12em #2979ff, 11em 12em #2979ff, 12em 12em #2979ff, 13em 12em #2979ff, 14em 12em #fafafa, 15em 12em #d50000, 16em 12em #d50000, 17em 12em #d50000, 18em 12em #d50000, 19em 12em #fafafa, 1em 13em #651fff, 2em 13em #651fff, 3em 13em #651fff, 4em 13em #651fff, 8em 13em #fafafa, 9em 13em #fafafa, 10em 13em #fafafa, 11em 13em #fafafa, 12em 13em #fafafa, 13em 13em #fafafa, 14em 13em #fafafa, 15em 13em #fafafa, 16em 13em #fafafa, 17em 13em #fafafa, 18em 13em #fafafa, 19em 13em #fafafa, 1em 14em #651fff, 2em 14em #651fff, 3em 14em #651fff, 4em 14em #651fff, 13em 14em #efd0c9, 2em 15em #651fff, 3em 15em #651fff, 4em 15em #651fff, 13em 15em #efd0c9, 14em 15em black, 15em 15em black, 3em 16em #651fff, 4em 16em #651fff, 5em 16em #651fff, 13em 16em #efd0c9, 3em 17em #651fff, 4em 17em #651fff, 5em 17em #651fff, 4em 18em #651fff, 5em 18em #651fff, 13em 18em black, 14em 18em black, 15em 18em black, 5em 19em #651fff, 13em 21em #6d4c41, 14em 21em #6d4c41, 15em 21em #6d4c41, 13em 22em #6d4c41, 14em 22em #6d4c41, 15em 22em #6d4c41, 13em 23em black, 14em 23em #6d4c41, 15em 23em black, 14em 24em black '} />
                        </PixelArtCard>
                    </div>



                </div>
                <div style={{ flexDirection: 'row', display: 'flex', height: 300, backgroundColor: 'pink' }}>
                    <div style={{ width: '220px', margin: 10 }}>
                    <PixelArtCard  random={true}  tags={['human-female']}>

                            </PixelArtCard>
                    </div>
                    <div style={{ width: '220px', margin: 10 }}>
                        <PixelArtCard  random={true}  tags={['human-female']}/>
                    </div>
                    <div style={{ width: '220px', margin: 10 }}>
                        <PixelArtCard  random={true}  tags={['human-female']}/>
                    </div>
                    <div style={{ width: '220px', margin: 10 }}>
                        <PixelArtCard  random={true}  tags={['human-female']}/>
                    </div>
                    <div style={{ width: '220px', margin: 10 }}>
                        <PixelArtCard  random={true}  tags={['human-female']}/>
                    </div>
                    <div style={{ width: '220px', margin: 10 }}>
                    <PixelArtCard  random={true}  tags={['human-female']}>
        <PixelArtCard.MouthAccessory value='mouth-accessory-4'/>
                            </PixelArtCard>
                    </div>
                    <div style={{ width: '220px', margin: 10 }}>
                        <PixelArtCard  random={true}  tags={['human-male']}>
                        <PixelArtCard.MouthAccessory value='mouth-accessory-4'/>
                            </PixelArtCard>
                    </div>
                 </div>
            </div>
        </>
    )
}
