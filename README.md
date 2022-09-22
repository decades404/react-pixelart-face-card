# React Pixel Art Face Card

<div>
 <a href="https://www.npmjs.com/package/react-pixelart-face-card" alt="npm" title="npm">
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg" title="npm" alt="Java" width="40" height="40"/>&nbsp;
  </a>

</div>

## Installation

`npm install react-pixelart-face-card --save`

## ⚙ Usage

Create random and custom cards!

Here you can customize your Pixel Art card with a live preview.

<https://decades404.github.io/react-pixelart-face-card-docs/>


[![Usage](https://github.com/decades404/react-pixelart-face-card-docs/blob/main/public/wallpaper.png?raw=true "Usage")](https://decades404.github.io/react-pixelart-face-card-docs/)



## Example

```
   import { PixelArtCard } from 'react-pixelart-face-card'
```

Random Card
```
    <PixelArtCard random={true} size={200} tags={['human-female','human-male']}/>

```
Custom Card
```
    <PixelArtCard color={'#efd0c9'}  size={200} tags={[ 'human-male']} hover={true} hoverColor={'red'}>
        <PixelArtCard.Hair color='black' />
        <PixelArtCard.HeadAccessory  />
        <PixelArtCard.Eyes />
        <PixelArtCard.EyesAccessory/>
        <PixelArtCard.EarAccessory/>
        <PixelArtCard.Nose />
        <PixelArtCard.Beard />
        <PixelArtCard.Mouth/>
        <PixelArtCard.MouthAccessory />
        <PixelArtCard.NeckAccessory value='neck-accessory-3'  color='blue'/>
    </PixelArtCard>
```
Custom Card With Random Values
```
    <PixelArtCard color={'#efd0c9'}  size={200} tags={[ 'human-male']} hover={true} hoverColor={'red'}>
        <PixelArtCard.Hair color='red' />
    </PixelArtCard>
```

Get fun and create your own avatar!

<div>
 <a href="https://www.npmjs.com/package/react-pixelart-face-card" alt="npm" title="npm">
  <img src="https://github.com/decades404/react-pixelart-face-card-docs/blob/main/public/wallpaper2.png?raw=true" title="npm" alt="Java" width="200" height="70"/>&nbsp;
  </a>


</div>