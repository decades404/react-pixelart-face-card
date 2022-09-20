# React Pixel Art Face Card
A Pixel Art card React Component .


## Installation

`npm install react-pixelart-face-card --save`

## Example

```
   import { PixelArtCard } from 'react-pixelart-face-card'
```

```
    <PixelArtCard  random={true}  tags={['human-female','human-male']}/>

    <PixelArtCard color={'#efd0c9'}  tags={[ 'human-male']}>
        <PixelArtCard.Hair color='black' />
        <PixelArtCard.HeadAccessory />
        <PixelArtCard.Eyes />
        <PixelArtCard.EyesAccessory/>
        <PixelArtCard.EarAccessory/>
        <PixelArtCard.Nose />
        <PixelArtCard.Beard />
        <PixelArtCard.Mouth/>
        <PixelArtCard.MouthAccessory />
        <PixelArtCard.NeckAccessory />
    </PixelArtCard>
```
