import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PixelArtCard } from '../.';

const App = () => {
  return (
    <>
      <p>React PixelArt Face Card</p>
      <p>Random</p>
      <PixelArtCard random={true} tags={['human-female', 'human-male']} />
      <p>Custom Values</p>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
