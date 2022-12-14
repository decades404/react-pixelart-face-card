import { HairTypes, DataItem, EyesTypes, NoseTypes, MouthTypes, BeardTypes, EyesAccessoryTypes, EarAccessoryTypes, NeckAccessoryTypes, MouthAccessoryTypes, HeadAccessoryTypes } from '../interfaces/interfaces';

export const faceData = () => (
    `9em 4em black, 10em 4em black, 11em 4em black, 12em 4em black, 13em 4em black, 14em 4em black, 15em 4em black, 16em 4em black, 17em 4em black, 8em 5em black, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em black, 6em 6em black, 7em 6em black, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em black, 6em 7em black, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em black, 6em 8em black, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em black, 6em 9em black, 7em 9em #color, 8em 9em #color, 9em 9em #color, 10em 9em #color, 11em 9em #color, 12em 9em #color, 13em 9em #color, 14em 9em #color, 15em 9em #color, 16em 9em #color, 17em 9em #color, 18em 9em #color, 19em 9em black, 6em 10em black, 7em 10em #color, 8em 10em #color, 9em 10em #color, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 19em 10em black, 5em 11em black, 6em 11em black, 7em 11em #color, 8em 11em #color, 9em 11em #color, 10em 11em #color, 11em 11em #color, 12em 11em #color, 13em 11em #color, 14em 11em #color, 15em 11em #color, 16em 11em #color, 17em 11em #color, 18em 11em #color, 19em 11em black, 4em 12em black, 5em 12em #color, 6em 12em #color, 7em 12em black, 8em 12em #color, 9em 12em #color, 10em 12em #color, 11em 12em #color, 12em 12em #color, 13em 12em #color, 14em 12em #color, 15em 12em #color, 16em 12em #color, 17em 12em #color, 18em 12em #color, 19em 12em black, 5em 13em black, 6em 13em #color, 7em 13em #color, 8em 13em #color, 9em 13em #color, 10em 13em #color, 11em 13em #color, 12em 13em #color, 13em 13em #color, 14em 13em #color, 15em 13em #color, 16em 13em #color, 17em 13em #color, 18em 13em #color, 19em 13em black, 5em 14em black, 6em 14em #color, 7em 14em #color, 8em 14em #color, 9em 14em #color, 10em 14em #color, 11em 14em #color, 12em 14em #color, 13em 14em #color, 14em 14em #color, 15em 14em #color, 16em 14em #color, 17em 14em #color, 18em 14em #color, 19em 14em black, 5em 15em black, 6em 15em black, 7em 15em #color, 8em 15em #color, 9em 15em #color, 10em 15em #color, 11em 15em #color, 12em 15em #color, 13em 15em #color, 14em 15em #color, 15em 15em #color, 16em 15em #color, 17em 15em #color, 18em 15em #color, 19em 15em black, 6em 16em black, 7em 16em #color, 8em 16em #color, 9em 16em #color, 10em 16em #color, 11em 16em #color, 12em 16em #color, 13em 16em #color, 14em 16em #color, 15em 16em #color, 16em 16em #color, 17em 16em #color, 18em 16em #color, 19em 16em black, 6em 17em black, 7em 17em #color, 8em 17em #color, 9em 17em #color, 10em 17em #color, 11em 17em #color, 12em 17em #color, 13em 17em #color, 14em 17em #color, 15em 17em #color, 16em 17em #color, 17em 17em #color, 18em 17em #color, 19em 17em black, 6em 18em black, 7em 18em #color, 8em 18em #color, 9em 18em #color, 10em 18em #color, 11em 18em #color, 12em 18em #color, 13em 18em #color, 14em 18em #color, 15em 18em #color, 16em 18em #color, 17em 18em #color, 18em 18em #color, 19em 18em black, 6em 19em black, 7em 19em #color, 8em 19em #color, 9em 19em #color, 10em 19em #color, 11em 19em #color, 12em 19em #color, 13em 19em #color, 14em 19em #color, 15em 19em #color, 16em 19em #color, 17em 19em #color, 18em 19em #color, 19em 19em black, 6em 20em black, 7em 20em #color, 8em 20em #color, 9em 20em #color, 10em 20em black, 11em 20em #color, 12em 20em #color, 13em 20em #color, 14em 20em #color, 15em 20em #color, 16em 20em #color, 17em 20em #color, 18em 20em black, 6em 21em black, 7em 21em #color, 8em 21em #color, 9em 21em #color, 10em 21em #color, 11em 21em black, 12em 21em #color, 13em 21em #color, 14em 21em #color, 15em 21em #color, 16em 21em #color, 17em 21em black, 6em 22em black, 7em 22em #color, 8em 22em #color, 9em 22em #color, 10em 22em #color, 11em 22em black, 12em 22em black, 13em 22em black, 14em 22em black, 15em 22em black, 16em 22em black, 6em 23em black, 7em 23em #color, 8em 23em #color, 9em 23em #color, 10em 23em #color, 11em 23em black, 6em 24em black, 7em 24em #color, 8em 24em #color, 9em 24em #color, 10em 24em #color, 11em 24em black `

    //`9em 4em black, 10em 4em black, 11em 4em black, 12em 4em black, 13em 4em black, 14em 4em black, 15em 4em black, 16em 4em black, 17em 4em black, 8em 5em black, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em black, 6em 6em black, 7em 6em black, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em black, 6em 7em black, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em black, 6em 8em black, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em black, 6em 9em black, 7em 9em #color, 8em 9em #color, 9em 9em #color, 10em 9em #color, 11em 9em #color, 12em 9em #color, 13em 9em #color, 14em 9em #color, 15em 9em #color, 16em 9em #color, 17em 9em #color, 18em 9em #color, 19em 9em black, 6em 10em black, 7em 10em #color, 8em 10em #color, 9em 10em #color, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 19em 10em black, 5em 11em black, 6em 11em black, 7em 11em #color, 8em 11em #color, 9em 11em #color, 10em 11em #color, 11em 11em #color, 12em 11em #color, 13em 11em #color, 14em 11em #color, 15em 11em #color, 16em 11em #color, 17em 11em #color, 18em 11em #color, 19em 11em black, 4em 12em black, 5em 12em #color, 6em 12em #color, 7em 12em black, 8em 12em #color, 9em 12em #color, 10em 12em #color, 11em 12em #color, 12em 12em #color, 13em 12em #color, 14em 12em #color, 15em 12em #color, 16em 12em #color, 17em 12em #color, 18em 12em #color, 19em 12em black, 5em 13em black, 6em 13em #color, 7em 13em #color, 8em 13em #color, 9em 13em #color, 10em 13em #color, 11em 13em #color, 12em 13em #color, 13em 13em #color, 14em 13em #color, 15em 13em #color, 16em 13em #color, 17em 13em #color, 18em 13em #color, 19em 13em black, 5em 14em black, 6em 14em #color, 7em 14em #color, 8em 14em #color, 9em 14em #color, 10em 14em #color, 11em 14em #color, 12em 14em #color, 13em 14em #color, 14em 14em #color, 15em 14em #color, 16em 14em #color, 17em 14em #color, 18em 14em #color, 19em 14em black, 5em 15em black, 6em 15em black, 7em 15em #color, 8em 15em #color, 9em 15em #color, 10em 15em #color, 11em 15em #color, 12em 15em #color, 13em 15em #color, 14em 15em #color, 15em 15em #color, 16em 15em #color, 17em 15em #color, 18em 15em #color, 19em 15em black, 6em 16em black, 7em 16em #color, 8em 16em #color, 9em 16em #color, 10em 16em #color, 11em 16em #color, 12em 16em #color, 13em 16em #color, 14em 16em #color, 15em 16em #color, 16em 16em #color, 17em 16em #color, 18em 16em #color, 19em 16em black, 6em 17em black, 7em 17em #color, 8em 17em #color, 9em 17em #color, 10em 17em #color, 11em 17em #color, 12em 17em #color, 13em 17em #color, 14em 17em #color, 15em 17em #color, 16em 17em #color, 17em 17em #color, 18em 17em #color, 19em 17em black, 6em 18em black, 7em 18em #color, 8em 18em #color, 9em 18em #color, 10em 18em #color, 11em 18em #color, 12em 18em #color, 13em 18em #color, 14em 18em #color, 15em 18em #color, 16em 18em #color, 17em 18em #color, 18em 18em #color, 19em 18em black, 6em 19em black, 7em 19em #color, 8em 19em #color, 9em 19em black, 10em 19em #color, 11em 19em #color, 12em 19em #color, 13em 19em #color, 14em 19em #color, 15em 19em #color, 16em 19em #color, 17em 19em #color, 18em 19em #color, 19em 19em black, 6em 20em black, 7em 20em #color, 8em 20em #color, 9em 20em black, 10em 20em #color, 11em 20em #color, 12em 20em #color, 13em 20em #color, 14em 20em #color, 15em 20em #color, 16em 20em #color, 17em 20em #color, 18em 20em #color, 19em 20em black, 6em 21em black, 7em 21em #color, 8em 21em #color, 9em 21em #color, 10em 21em black, 11em 21em #color, 12em 21em #color, 13em 21em #color, 14em 21em #color, 15em 21em #color, 16em 21em #color, 17em 21em #color, 18em 21em black, 6em 22em black, 7em 22em #color, 8em 22em #color, 9em 22em #color, 10em 22em #color, 11em 22em black, 12em 22em black, 13em 22em black, 14em 22em black, 15em 22em black, 16em 22em black, 17em 22em black, 6em 23em black, 7em 23em #color, 8em 23em #color, 9em 23em #color, 10em 23em #color, 11em 23em black, 6em 24em black, 7em 24em #color, 8em 24em #color, 9em 24em #color, 10em 24em #color, 11em 24em black   `
)

export const faceDataHover = () => (
    
    `9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em #color, 7em 3em #color, 8em 3em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em #color, 5em 4em #color, 6em 4em #color, 7em 4em #color, 8em 4em #color, 18em 4em #color, 19em 4em #color, 4em 5em #color, 5em 5em #color, 6em 5em #color, 7em 5em #color, 19em 5em #color, 20em 5em #color, 4em 6em #color, 5em 6em #color, 20em 6em #color, 21em 6em #color, 4em 7em #color, 5em 7em #color, 20em 7em #color, 21em 7em #color, 4em 8em #color, 5em 8em #color, 20em 8em #color, 21em 8em #color, 4em 9em #color, 5em 9em #color, 20em 9em #color, 21em 9em #color, 3em 10em #color, 4em 10em #color, 5em 10em #color, 20em 10em #color, 21em 10em #color, 3em 11em #color, 4em 11em #color, 20em 11em #color, 21em 11em #color, 3em 12em #color, 20em 12em #color, 21em 12em #color, 3em 13em #color, 4em 13em #color, 20em 13em #color, 21em 13em #color, 3em 14em #color, 4em 14em #color, 20em 14em #color, 21em 14em #color, 3em 15em #color, 4em 15em #color, 20em 15em #color, 21em 15em #color, 4em 16em #color, 5em 16em #color, 20em 16em #color, 21em 16em #color, 4em 17em #color, 5em 17em #color, 20em 17em #color, 21em 17em #color, 4em 18em #color, 5em 18em #color, 20em 18em #color, 21em 18em #color, 4em 19em #color, 5em 19em #color, 20em 19em #color, 21em 19em #color, 4em 20em #color, 5em 20em #color, 19em 20em #color, 20em 20em #color, 4em 21em #color, 5em 21em #color, 18em 21em #color, 19em 21em #color, 4em 22em #color, 5em 22em #color, 17em 22em #color, 18em 22em #color, 4em 23em #color, 5em 23em #color, 12em 23em #color, 13em 23em #color, 14em 23em #color, 15em 23em #color, 16em 23em #color, 17em 23em #color, 4em 24em #color, 5em 24em #color, 12em 24em #color, 13em 24em #color, 14em 24em #color, 15em 24em #color, 16em 24em #color `

    //`9em 4em black, 10em 4em black, 11em 4em black, 12em 4em black, 13em 4em black, 14em 4em black, 15em 4em black, 16em 4em black, 17em 4em black, 8em 5em black, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em black, 6em 6em black, 7em 6em black, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em black, 6em 7em black, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em black, 6em 8em black, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em black, 6em 9em black, 7em 9em #color, 8em 9em #color, 9em 9em #color, 10em 9em #color, 11em 9em #color, 12em 9em #color, 13em 9em #color, 14em 9em #color, 15em 9em #color, 16em 9em #color, 17em 9em #color, 18em 9em #color, 19em 9em black, 6em 10em black, 7em 10em #color, 8em 10em #color, 9em 10em #color, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 19em 10em black, 5em 11em black, 6em 11em black, 7em 11em #color, 8em 11em #color, 9em 11em #color, 10em 11em #color, 11em 11em #color, 12em 11em #color, 13em 11em #color, 14em 11em #color, 15em 11em #color, 16em 11em #color, 17em 11em #color, 18em 11em #color, 19em 11em black, 4em 12em black, 5em 12em #color, 6em 12em #color, 7em 12em black, 8em 12em #color, 9em 12em #color, 10em 12em #color, 11em 12em #color, 12em 12em #color, 13em 12em #color, 14em 12em #color, 15em 12em #color, 16em 12em #color, 17em 12em #color, 18em 12em #color, 19em 12em black, 5em 13em black, 6em 13em #color, 7em 13em #color, 8em 13em #color, 9em 13em #color, 10em 13em #color, 11em 13em #color, 12em 13em #color, 13em 13em #color, 14em 13em #color, 15em 13em #color, 16em 13em #color, 17em 13em #color, 18em 13em #color, 19em 13em black, 5em 14em black, 6em 14em #color, 7em 14em #color, 8em 14em #color, 9em 14em #color, 10em 14em #color, 11em 14em #color, 12em 14em #color, 13em 14em #color, 14em 14em #color, 15em 14em #color, 16em 14em #color, 17em 14em #color, 18em 14em #color, 19em 14em black, 5em 15em black, 6em 15em black, 7em 15em #color, 8em 15em #color, 9em 15em #color, 10em 15em #color, 11em 15em #color, 12em 15em #color, 13em 15em #color, 14em 15em #color, 15em 15em #color, 16em 15em #color, 17em 15em #color, 18em 15em #color, 19em 15em black, 6em 16em black, 7em 16em #color, 8em 16em #color, 9em 16em #color, 10em 16em #color, 11em 16em #color, 12em 16em #color, 13em 16em #color, 14em 16em #color, 15em 16em #color, 16em 16em #color, 17em 16em #color, 18em 16em #color, 19em 16em black, 6em 17em black, 7em 17em #color, 8em 17em #color, 9em 17em #color, 10em 17em #color, 11em 17em #color, 12em 17em #color, 13em 17em #color, 14em 17em #color, 15em 17em #color, 16em 17em #color, 17em 17em #color, 18em 17em #color, 19em 17em black, 6em 18em black, 7em 18em #color, 8em 18em #color, 9em 18em #color, 10em 18em #color, 11em 18em #color, 12em 18em #color, 13em 18em #color, 14em 18em #color, 15em 18em #color, 16em 18em #color, 17em 18em #color, 18em 18em #color, 19em 18em black, 6em 19em black, 7em 19em #color, 8em 19em #color, 9em 19em black, 10em 19em #color, 11em 19em #color, 12em 19em #color, 13em 19em #color, 14em 19em #color, 15em 19em #color, 16em 19em #color, 17em 19em #color, 18em 19em #color, 19em 19em black, 6em 20em black, 7em 20em #color, 8em 20em #color, 9em 20em black, 10em 20em #color, 11em 20em #color, 12em 20em #color, 13em 20em #color, 14em 20em #color, 15em 20em #color, 16em 20em #color, 17em 20em #color, 18em 20em #color, 19em 20em black, 6em 21em black, 7em 21em #color, 8em 21em #color, 9em 21em #color, 10em 21em black, 11em 21em #color, 12em 21em #color, 13em 21em #color, 14em 21em #color, 15em 21em #color, 16em 21em #color, 17em 21em #color, 18em 21em black, 6em 22em black, 7em 22em #color, 8em 22em #color, 9em 22em #color, 10em 22em #color, 11em 22em black, 12em 22em black, 13em 22em black, 14em 22em black, 15em 22em black, 16em 22em black, 17em 22em black, 6em 23em black, 7em 23em #color, 8em 23em #color, 9em 23em #color, 10em 23em #color, 11em 23em black, 6em 24em black, 7em 24em #color, 8em 24em #color, 9em 24em #color, 10em 24em #color, 11em 24em black   `
)

/*
const tags = [
    'all',
    'human-male',
    'human-female',
]
*/



const eyesItems : {[key in  EyesTypes ] : DataItem } = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'eyes-1': {
        data: `10em 11em #color, 11em 11em #color, 17em 11em #color, 18em 11em #color, 10em 12em black, 11em 12em #efebe9, 17em 12em black, 18em 12em #efebe9`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-2': {
        data: `10em 11em #color, 11em 11em black, 17em 11em #color, 18em 11em black, 10em 12em black, 11em 12em #color, 17em 12em black, 18em 12em #color `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },

}

const eyesAccesoryItems: {[key in  EyesAccessoryTypes ] : DataItem } = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'eyes-accessory-1': {
        data: `9em 10em #color, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 19em 10em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 8em 11em #color, 9em 11em #color, 10em 11em #color, 11em 11em #color, 12em 11em #color, 13em 11em #color, 15em 11em #color, 16em 11em #color, 17em 11em #color, 18em 11em #color, 19em 11em #color, 20em 11em #color, 10em 12em #color, 11em 12em #color, 12em 12em #color, 16em 12em #color, 17em 12em #color, 18em 12em #color, 11em 13em #color, 17em 13em #color `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-2': {
        data: `7em 10em #color, 8em 10em #color, 9em 10em #color, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 19em 10em #color, 7em 11em #color, 8em 11em #color, 9em 11em #color, 12em 11em #color, 13em 11em #color, 14em 11em #color, 15em 11em #color, 16em 11em #color, 19em 11em #color, 8em 12em #color, 9em 12em #color, 12em 12em #color, 13em 12em #color, 14em 12em #color, 15em 12em #color, 16em 12em #color, 19em 12em #color, 9em 13em #color, 10em 13em #color, 11em 13em #color, 12em 13em #color, 13em 13em #color, 14em 13em #color, 15em 13em #color, 16em 13em #color, 17em 13em #color, 18em 13em #color, 19em 13em #color `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-3': {
        data: `6em 10em black, 7em 10em #color, 8em 10em #color, 9em 10em #color, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 9em 11em #color, 10em 11em #color, 11em 11em #color, 12em 11em #color, 9em 12em #color, 10em 12em #color, 11em 12em #color, 12em 12em #color, 10em 13em #color, 11em 13em #color `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-4': {
        data: `6em 10em black, 7em 10em #efebe9, 8em 10em #efebe9, 9em 10em #efebe9, 10em 10em #efebe9, 11em 10em #efebe9, 12em 10em #efebe9, 13em 10em #efebe9, 14em 10em #efebe9, 15em 10em #efebe9, 16em 10em #efebe9, 17em 10em #efebe9, 18em 10em #efebe9, 19em 10em #efebe9, 20em 10em #efebe9, 8em 11em #efebe9, 9em 11em #efebe9, 10em 11em #ff1744, 11em 11em #ff1744, 12em 11em #ff1744, 13em 11em #ff1744, 14em 11em #efebe9, 15em 11em #efebe9, 16em 11em #3d5afe, 17em 11em #3d5afe, 18em 11em #3d5afe, 19em 11em #3d5afe, 20em 11em #efebe9, 9em 12em #efebe9, 10em 12em #ff1744, 11em 12em #ff1744, 12em 12em #ff1744, 13em 12em #ff1744, 14em 12em #efebe9, 15em 12em #efebe9, 16em 12em #3d5afe, 17em 12em #3d5afe, 18em 12em #3d5afe, 19em 12em #3d5afe, 20em 12em #efebe9, 9em 13em #efebe9, 10em 13em #efebe9, 11em 13em #efebe9, 12em 13em #efebe9, 13em 13em #efebe9, 14em 13em #efebe9, 15em 13em #efebe9, 16em 13em #efebe9, 17em 13em #efebe9, 18em 13em #efebe9, 19em 13em #efebe9, 20em 13em #efebe9`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-5': {
        data: `6em 10em black, 7em 10em #color, 8em 10em #color, 9em 10em #color, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 19em 10em #color, 9em 11em #color, 12em 11em #color, 16em 11em #color, 19em 11em #color, 9em 12em #color, 12em 12em #color, 16em 12em #color, 19em 12em #color, 10em 13em #color, 11em 13em #color, 17em 13em #color, 18em 13em #color `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-6':{
        data: `6em 10em black, 7em 10em black, 8em 10em black, 9em 10em black, 10em 10em black, 11em 10em black, 12em 10em black, 13em 10em black, 14em 10em black, 15em 10em black, 16em 10em black, 17em 10em black, 18em 10em black, 19em 10em black, 9em 11em black, 10em 11em #color, 11em 11em #color, 12em 11em black, 16em 11em black, 17em 11em #color, 18em 11em #color, 19em 11em black, 9em 12em black, 10em 12em #color, 11em 12em #color, 12em 12em black, 16em 12em black, 17em 12em #color, 18em 12em #color, 19em 12em black, 10em 13em black, 11em 13em black, 17em 13em black, 18em 13em black  `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-7': {
        data: `6em 10em black, 7em 10em black, 8em 10em black, 9em 10em black, 10em 10em black, 11em 10em black, 12em 10em black, 13em 10em black, 14em 10em black, 15em 10em black, 16em 10em black, 17em 10em black, 18em 10em black, 19em 10em black, 9em 11em black, 10em 11em #color, 11em 11em #color, 12em 11em #color, 13em 11em #color, 14em 11em black, 15em 11em #color, 16em 11em #color, 17em 11em #color, 18em 11em #color, 19em 11em black, 9em 12em black, 10em 12em #color, 11em 12em #color, 12em 12em #color, 13em 12em #color, 14em 12em black, 15em 12em #color, 16em 12em #color, 17em 12em #color, 18em 12em #color, 19em 12em black, 10em 13em black, 11em 13em black, 12em 13em black, 13em 13em black, 14em 13em black, 15em 13em black, 16em 13em black, 17em 13em black, 18em 13em black`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-8': {
        data: `9em 9em black, 10em 9em black, 11em 9em black, 12em 9em black, 13em 9em black, 14em 9em black, 15em 9em black, 16em 9em black, 17em 9em black, 18em 9em black, 19em 9em black, 20em 9em black, 9em 10em black, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 19em 10em #color, 20em 10em black, 7em 11em black, 8em 11em black, 9em 11em black, 10em 11em #color, 11em 11em #color, 12em 11em #color, 13em 11em #color, 14em 11em #color, 15em 11em #color, 16em 11em #color, 17em 11em #color, 18em 11em #color, 19em 11em #color, 20em 11em black, 9em 12em black, 10em 12em #color, 11em 12em #color, 12em 12em #color, 13em 12em #color, 14em 12em black, 15em 12em black, 16em 12em #color, 17em 12em #color, 18em 12em #color, 19em 12em #color, 20em 12em black, 9em 13em black, 10em 13em black, 11em 13em black, 12em 13em black, 13em 13em black, 16em 13em black, 17em 13em black, 18em 13em black, 19em 13em black, 20em 13em black`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-9': {
        data: `8em 10em black, 9em 10em black, 10em 10em black, 11em 10em black, 12em 10em black, 13em 10em black, 14em 10em black, 15em 10em black, 16em 10em black, 17em 10em black, 18em 10em black, 19em 10em black, 20em 10em black, 7em 11em black, 8em 11em black, 9em 11em #color, 10em 11em #color, 11em 11em #color, 12em 11em #color, 13em 11em #color, 14em 11em #color, 15em 11em #color, 16em 11em #color, 17em 11em #color, 18em 11em #color, 19em 11em #color, 20em 11em black, 7em 12em black, 8em 12em black, 9em 12em #color, 10em 12em #color, 11em 12em #color, 12em 12em #color, 13em 12em #color, 14em 12em #color, 15em 12em #color, 16em 12em #color, 17em 12em #color, 18em 12em #color, 19em 12em #color, 20em 12em black, 8em 13em black, 9em 13em black, 10em 13em black, 11em 13em black, 12em 13em black, 13em 13em black, 14em 13em black, 15em 13em black, 16em 13em black, 17em 13em black, 18em 13em black, 19em 13em black, 20em 13em black`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'eyes-accessory-10': {
        data: ` 8em 10em #color, 9em 10em #color, 10em 10em #color, 11em 10em #color, 12em 10em #color, 13em 10em #color, 14em 10em #color, 15em 10em #color, 16em 10em #color, 17em 10em #color, 18em 10em #color, 19em 10em #color, 20em 10em #color, 7em 11em #color, 8em 11em #color, 9em 11em #color, 10em 11em #color, 11em 11em #color, 12em 11em #color, 13em 11em #color, 14em 11em #color, 15em 11em #color, 16em 11em #color, 17em 11em #color, 18em 11em #color, 19em 11em #color, 20em 11em #color, 7em 12em #color, 8em 12em #color, 9em 12em #color, 10em 12em #color, 11em 12em #color, 12em 12em #color, 13em 12em #color, 14em 12em #color, 15em 12em #color, 16em 12em #color, 17em 12em #color, 18em 12em #color, 19em 12em #color, 20em 12em #color, 8em 13em #color, 9em 13em #color, 10em 13em #color, 11em 13em #color, 12em 13em #color, 13em 13em #color, 14em 13em #color, 15em 13em #color, 16em 13em #color, 17em 13em #color, 18em 13em #color, 19em 13em #color, 20em 13em #color `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    
   
  
}

const hairItems : {[key in  HairTypes ] : DataItem } = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'hair-1': {
        data: ` `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'hair-2': {
        data: `9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 6em 10em #color, 7em 10em #color, 8em 10em #color, 6em 11em #color, 7em 11em #color, 8em 11em #color, 7em 12em #color, 8em 12em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-3': {
        data: `9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em #color, 20em 8em #color, 21em 8em #color, 3em 9em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 9em 9em #color, 10em 9em #color, 19em 9em #color, 20em 9em #color, 21em 9em #color, 2em 10em #color, 3em 10em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 8em 10em #color, 9em 10em #color, 19em 10em #color, 20em 10em #color, 21em 10em #color, 1em 11em #color, 2em 11em #color, 3em 11em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 8em 11em #color, 19em 11em #color, 20em 11em #color, 21em 11em #color, 1em 12em #color, 2em 12em #color, 3em 12em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 19em 12em #color, 20em 12em #color, 21em 12em #color, 1em 13em #color, 2em 13em #color, 3em 13em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 19em 13em #color, 20em 13em #color, 21em 13em #color, 1em 14em #color, 2em 14em #color, 3em 14em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 19em 14em #color, 20em 14em #color, 1em 15em #color, 2em 15em #color, 3em 15em #color, 4em 15em #color, 5em 15em #color, 6em 15em #color, 1em 16em #color, 2em 16em #color, 3em 16em #color, 4em 16em #color, 5em 16em #color, 6em 16em #color, 1em 17em #color, 2em 17em #color, 3em 17em #color, 4em 17em #color, 5em 17em #color, 6em 17em #color, 2em 18em #color, 3em 18em #color, 4em 18em #color, 5em 18em #color, 6em 18em #color, 3em 19em #color, 4em 19em #color, 5em 19em #color, 6em 19em #color, 4em 20em #color, 5em 20em #color, 6em 20em #color, 5em 21em #color, 6em 21em #color, 6em 22em #color`,
        defaultColor: '#4e342e',
        tags: ['human-female']
    },
    'hair-4': {
        data: ` 12em 1em black, 13em 1em black, 11em 2em black, 12em 2em #color, 13em 2em #color, 14em 2em black, 12em 3em black, 13em 3em #color, 14em 3em black, 12em 4em black, 13em 4em #color, 14em 4em black, 12em 5em black, 13em 5em #color, 14em 5em black, 12em 6em black, 13em 6em #color, 14em 6em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'hair-5': {
        data: ` 12em 1em black, 13em 1em black, 11em 2em black, 12em 2em #color, 13em 2em #color, 14em 2em black, 12em 3em black, 13em 3em #color, 14em 3em black, 12em 4em black, 13em 4em #color, 14em 4em black, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em black, 13em 5em #color, 14em 5em black, 15em 5em #color, 16em 5em #color, 17em 5em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em black, 13em 6em #color, 14em 6em black, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'hair-6': {
        data: ` 12em 1em black, 13em 1em black, 11em 2em black, 12em 2em #color, 13em 2em #color, 14em 2em black, 12em 3em black, 13em 3em #color, 14em 3em black, 12em 4em black, 13em 4em #color, 14em 4em black, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em black, 13em 5em #color, 14em 5em black, 15em 5em #color, 16em 5em #color, 17em 5em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em black, 13em 6em #color, 14em 6em black, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 18em 7em #color, 7em 8em #color, 8em 8em #color, 7em 9em #color, 8em 9em #color, 7em 10em #color, 8em 10em #color, 7em 11em #color, 8em 11em #color  `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'hair-7': {
        data: ` 12em 1em black, 13em 1em black, 14em 1em black, 15em 1em black, 16em 1em black, 17em 1em black, 18em 1em black, 19em 1em black, 20em 1em black, 11em 2em black, 12em 2em #color, 13em 2em #color, 14em 2em black, 15em 2em #color, 16em 2em black, 17em 2em #color, 18em 2em black, 19em 2em #color, 20em 2em black, 12em 3em black, 13em 3em #color, 14em 3em black, 15em 3em #color, 16em 3em black, 17em 3em #color, 18em 3em black, 19em 3em #color, 20em 3em black, 12em 4em black, 13em 4em #color, 14em 4em black, 15em 4em #color, 16em 4em black, 17em 4em #color, 18em 4em black, 19em 4em #color, 20em 4em black, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em black, 13em 5em #color, 14em 5em black, 15em 5em #color, 16em 5em black, 17em 5em #color, 18em 5em black, 19em 5em #color, 20em 5em black, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em black, 13em 6em #color, 14em 6em black, 15em 6em #color, 16em 6em black, 17em 6em #color, 18em 6em black, 19em 6em #color, 20em 6em black, 7em 7em #color, 8em 7em #color, 9em 7em #color, 18em 7em #color, 7em 8em #color, 8em 8em #color, 7em 9em #color, 8em 9em #color, 7em 10em #color, 8em 10em #color, 7em 11em #color, 8em 11em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-8': {
        data: `12em 1em black, 13em 1em black, 14em 1em black, 15em 1em black, 16em 1em black, 17em 1em black, 18em 1em black, 19em 1em black, 20em 1em black, 11em 2em black, 12em 2em #color, 13em 2em #color, 14em 2em black, 15em 2em #color, 16em 2em black, 17em 2em #color, 18em 2em black, 19em 2em #color, 20em 2em black, 10em 3em black, 11em 3em #color, 12em 3em black, 13em 3em #color, 14em 3em black, 15em 3em #color, 16em 3em black, 17em 3em #color, 18em 3em black, 19em 3em #color, 20em 3em black, 10em 4em black, 11em 4em #color, 12em 4em black, 13em 4em #color, 14em 4em black, 15em 4em #color, 16em 4em black, 17em 4em #color, 18em 4em black, 19em 4em #color, 20em 4em black, 8em 5em black, 9em 5em #color, 10em 5em black, 11em 5em #color, 12em 5em black, 13em 5em #color, 14em 5em black, 15em 5em #color, 16em 5em black, 17em 5em #color, 18em 5em black, 19em 5em #color, 20em 5em black, 8em 6em black, 9em 6em #color, 10em 6em black, 11em 6em #color, 12em 6em black, 13em 6em #color, 14em 6em black, 15em 6em #color, 16em 6em black, 17em 6em #color, 18em 6em black, 19em 6em #color, 20em 6em black, 7em 7em #color, 8em 7em black, 9em 7em #color, 10em 7em black, 11em 7em #color, 12em 7em black, 13em 7em #color, 14em 7em black, 15em 7em #color, 16em 7em black, 17em 7em #color, 18em 7em black, 19em 7em #color, 20em 7em black, 7em 8em #color, 8em 8em black, 9em 8em #color, 10em 8em black, 11em 8em #color, 12em 8em black, 13em 8em #color, 14em 8em black, 15em 8em #color, 16em 8em black, 17em 8em #color, 18em 8em black, 19em 8em #color, 20em 8em black, 7em 9em #color, 8em 9em #color, 7em 10em #color, 8em 10em #color, 7em 11em #color, 8em 11em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-9': {
        data: ` 13em 1em #color, 14em 1em #color, 15em 1em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 13em 8em #color, 14em 8em #color, 18em 8em #color, 19em 8em #color `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-10': {
        data: ` 13em 1em #color, 14em 1em #color, 15em 1em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 13em 8em #color, 14em 8em #color, 18em 8em #color, 19em 8em #color, 3em 9em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 3em 10em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 3em 11em #color, 4em 11em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-11': {
        data: `5em 1em #color, 6em 1em #color, 7em 1em #color, 8em 1em #color, 9em 1em #color, 10em 1em #color, 11em 1em #color, 12em 1em #color, 13em 1em #color, 14em 1em #color, 15em 1em #color, 5em 2em #color, 6em 2em #color, 7em 2em #color, 8em 2em #color, 9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 5em 3em #color, 6em 3em #color, 7em 3em #color, 8em 3em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 3em 4em #color, 4em 4em #color, 5em 4em #color, 6em 4em #color, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 3em 5em #color, 4em 5em #color, 5em 5em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 3em 6em #color, 4em 6em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 3em 7em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 3em 8em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 13em 8em #color, 14em 8em #color, 18em 8em #color, 19em 8em #color, 3em 9em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 3em 10em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 3em 11em #color, 4em 11em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-12': {
        data: `6em 2em #color, 7em 2em #color, 8em 2em #color, 9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em #color, 5em 3em #color, 6em 3em #color, 7em 3em #color, 8em 3em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em #color, 4em 4em #color, 5em 4em #color, 6em 4em #color, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em #color, 4em 5em #color, 5em 5em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 20em 5em #color, 4em 6em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 18em 8em #color, 19em 8em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 19em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 4em 15em #color, 5em 15em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-13': {
        data: `8em 0em #color, 13em 0em #color, 14em 0em #color, 15em 0em #color, 5em 1em #color, 6em 1em #color, 8em 1em #color, 11em 1em #color, 15em 1em #color, 17em 1em #color, 18em 1em #color, 6em 2em #color, 7em 2em #color, 8em 2em #color, 9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em #color, 2em 3em #color, 5em 3em #color, 6em 3em #color, 7em 3em #color, 8em 3em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em #color, 20em 3em #color, 3em 4em #color, 4em 4em #color, 5em 4em #color, 6em 4em #color, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em #color, 20em 4em #color, 22em 4em #color, 4em 5em #color, 5em 5em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 20em 5em #color, 21em 5em #color, 22em 5em #color, 3em 6em #color, 4em 6em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 2em 8em #color, 3em 8em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 18em 8em #color, 19em 8em #color, 21em 8em #color, 2em 9em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 19em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 3em 11em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 4em 15em #color, 5em 15em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-14': {
        data: `10em 5em #color, 13em 5em #color, 16em 5em #color, 10em 6em #color, 13em 6em #color, 16em 6em #color, 9em 7em #color, 12em 7em #color, 17em 7em #color, 9em 8em #color, 7em 9em #color, 8em 10em #color `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },

    'hair-15': {
        data: `12em 0em #color, 14em 0em #color, 16em 0em #color, 11em 1em #color, 12em 1em #color, 13em 1em #color, 14em 1em #color, 15em 1em #color, 16em 1em #color, 17em 1em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 18em 6em #color, 19em 6em #color, 13em 7em #color `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-16': {
        data: `12em 0em #color, 14em 0em #color, 16em 0em #color, 11em 1em #color, 12em 1em #color, 13em 1em #color, 14em 1em #color, 15em 1em #color, 16em 1em #color, 17em 1em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 18em 6em #color, 19em 6em #color, 5em 7em #color, 6em 7em #color, 13em 7em #color, 19em 7em #color, 20em 7em #color, 6em 8em #color, 19em 8em #color, 5em 9em #color, 6em 9em #color, 19em 9em #color, 20em 9em #color, 6em 10em #color, 19em 10em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-17': {
        data: `9em 3em #color, 10em 3em #color, 16em 3em #color, 17em 3em #color, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 18em 5em #color, 19em 5em #color, 20em 5em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 19em 6em #color, 20em 6em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 20em 7em #color, 3em 8em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 20em 8em #color, 21em 8em #color, 3em 9em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 20em 9em #color, 21em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 20em 10em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 20em 11em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-18': {
        data: ` 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 18em 5em #color, 19em 5em #color, 20em 5em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 19em 6em #color, 20em 6em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 20em 7em #color, 3em 8em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 20em 8em #color, 21em 8em #color, 3em 9em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 20em 9em #color, 21em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 20em 10em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 20em 11em #color `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-19': {
        data: ` 5em 4em #color, 6em 4em #color, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em #color, 20em 4em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-20': {
        data: ` 7em 2em #color, 8em 2em #color, 9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em #color, 18em 2em #color, 19em 2em #color, 5em 3em #color, 6em 3em #color, 7em 3em #color, 8em 3em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em #color, 19em 3em #color, 20em 3em #color, 5em 4em #color, 6em 4em #color, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em #color, 20em 4em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'hair-21': {
        data: ` 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 9em 9em #color, 10em 9em #color, 11em 9em #color, 12em 9em #color, 13em 9em #color, 14em 9em #color, 15em 9em #color, 16em 9em #color, 17em 9em #color, 18em 9em #color, 19em 9em #color, 20em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 8em 10em #color, 20em 10em #color, 4em 11em #color, 7em 11em #color, 8em 11em #color, 20em 11em #color, 7em 12em #color, 8em 12em #color, 20em 12em #color `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    }, 

    'hair-22': {
        data: ` 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 4em 6em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 2em 7em #color, 3em 7em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 22em 7em #color, 2em 8em #color, 3em 8em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em #color, 20em 8em #color, 21em 8em #color, 22em 8em #color, 2em 9em #color, 3em 9em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 18em 9em #color, 19em 9em #color, 20em 9em #color, 21em 9em #color, 22em 9em #color, 2em 10em #color, 3em 10em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 19em 10em #color, 20em 10em #color, 21em 10em #color, 22em 10em #color, 2em 11em #color, 3em 11em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 19em 11em #color, 20em 11em #color, 21em 11em #color, 22em 11em #color, 2em 12em #color, 3em 12em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 19em 12em #color, 20em 12em #color, 21em 12em #color, 22em 12em #color, 2em 13em #color, 3em 13em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em #color, 19em 13em #color, 20em 13em #color, 21em 13em #color, 22em 13em #color, 2em 14em #color, 3em 14em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 7em 14em #color, 19em 14em #color, 20em 14em #color, 21em 14em #color, 22em 14em #color, 2em 15em #color, 3em 15em #color, 4em 15em #color, 5em 15em #color, 6em 15em #color, 7em 15em #color, 19em 15em #color, 20em 15em #color, 21em 15em #color, 22em 15em #color, 2em 16em #color, 3em 16em #color, 4em 16em #color, 5em 16em #color, 6em 16em #color, 7em 16em #color, 19em 16em #color, 20em 16em #color, 21em 16em #color, 22em 16em #color, 3em 17em #color, 4em 17em #color, 5em 17em #color, 6em 17em #color, 7em 17em #color, 19em 17em #color, 20em 17em #color, 21em 17em #color, 3em 18em #color, 4em 18em #color, 5em 18em #color, 6em 18em #color, 7em 18em #color, 19em 18em #color, 20em 18em #color, 21em 18em #color, 4em 19em #color, 5em 19em #color, 6em 19em #color, 7em 19em #color, 19em 19em #color, 20em 19em #color, 4em 20em #color, 5em 20em #color, 6em 20em #color, 7em 20em #color, 19em 20em #color, 20em 20em #color, 4em 21em #color, 5em 21em #color, 6em 21em #color, 7em 21em #color, 18em 21em #color, 19em 21em #color, 20em 21em #color, 5em 22em #color, 6em 22em #color, 7em 22em #color, 8em 22em #color, 17em 22em #color, 18em 22em #color, 19em 22em #color, 5em 23em #color, 6em 23em #color, 7em 23em #color, 8em 23em #color`,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
    'hair-23': {
        data: ` 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 18em 8em #color, 19em 8em #color, 20em 8em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 19em 9em #color, 20em 9em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 8em 10em #color, 19em 10em #color, 20em 10em #color, 21em 10em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 8em 11em #color, 19em 11em #color, 20em 11em #color, 21em 11em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 19em 12em #color, 20em 12em #color, 21em 12em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em #color, 19em 13em #color, 20em 13em #color, 21em 13em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 7em 14em #color, 19em 14em #color, 20em 14em #color, 21em 14em #color, 4em 15em #color, 5em 15em #color, 6em 15em #color, 7em 15em #color, 19em 15em #color, 20em 15em #color, 21em 15em #color, 4em 16em #color, 5em 16em #color, 6em 16em #color, 7em 16em #color, 19em 16em #color, 20em 16em #color, 21em 16em #color, 3em 17em #color, 4em 17em #color, 5em 17em #color, 6em 17em #color, 7em 17em #color, 8em 17em #color, 19em 17em #color, 20em 17em #color, 21em 17em #color, 22em 17em #color, 5em 18em #color, 6em 18em #color, 7em 18em #color, 8em 18em #color, 9em 18em #color, 18em 18em #color, 19em 18em #color, 20em 18em #color `,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
    'hair-24': {
        data: ` 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 9em 9em #color, 10em 9em #color, 18em 9em #color, 19em 9em #color, 6em 10em #color, 7em 10em #color, 8em 10em #color, 19em 10em #color, 6em 11em #color, 7em 11em #color, 8em 11em #color, 19em 11em #color, 7em 12em #color, 8em 12em #color, 19em 12em #color, 7em 13em #color, 8em 13em #color, 19em 13em #color, 7em 14em #color, 8em 14em #color, 19em 14em #color, 6em 15em #color, 7em 15em #color, 8em 15em #color, 19em 15em #color, 6em 16em #color, 7em 16em #color, 8em 16em #color, 19em 16em #color, 6em 17em #color, 7em 17em #color, 8em 17em #color, 19em 17em #color, 6em 18em #color, 7em 18em #color, 8em 18em #color, 19em 18em #color, 6em 19em #color, 7em 19em #color, 8em 19em #color, 19em 19em #color, 6em 20em #color, 7em 20em #color, 8em 20em #color, 19em 20em #color, 5em 21em #color, 6em 21em #color, 7em 21em #color, 8em 21em #color, 9em 21em #color, 18em 21em #color, 19em 21em #color, 20em 21em #color, 21em 21em #color, 7em 22em #color, 8em 22em #color, 19em 22em #color, 20em 22em #color `,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
    'hair-25': {
        data: ` 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em #color, 20em 8em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 19em 9em #color, 20em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 19em 10em #color, 20em 10em #color, 4em 11em #color, 19em 11em #color, 20em 11em #color, 21em 11em #color, 19em 12em #color, 20em 12em #color, 21em 12em #color, 22em 12em #color, 19em 13em #color, 20em 13em #color, 21em 13em #color, 22em 13em #color, 23em 13em #color, 19em 14em #color, 20em 14em #color, 21em 14em #color, 22em 14em #color, 23em 14em #color, 19em 15em #color, 20em 15em #color, 21em 15em #color, 22em 15em #color, 23em 15em #color, 19em 16em #color, 20em 16em #color, 21em 16em #color, 22em 16em #color, 23em 16em #color, 19em 17em #color, 20em 17em #color, 21em 17em #color, 22em 17em #color, 23em 17em #color, 19em 18em #color, 20em 18em #color, 21em 18em #color, 22em 18em #color, 23em 18em #color, 19em 19em #color, 20em 19em #color, 21em 19em #color, 22em 19em #color, 23em 19em #color, 19em 20em #color, 20em 20em #color, 21em 20em #color, 18em 21em #color, 19em 21em #color, 20em 21em #color, 17em 22em #color, 18em 22em #color, 19em 22em #color, 15em 23em #color, 16em 23em #color, 17em 23em #color, 18em 23em #color`,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
    'hair-26': {
        data: ` 12em 2em #color, 13em 2em #color, 10em 3em #color, 12em 3em #color, 15em 3em #color, 18em 3em #color, 6em 4em #color, 7em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 4em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em #color, 20em 8em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 19em 9em #color, 20em 9em #color, 21em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 19em 10em #color, 2em 11em #color, 3em 11em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 19em 11em #color, 20em 11em #color, 3em 12em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 19em 12em #color, 3em 13em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em #color, 19em 13em #color, 20em 13em #color, 2em 14em #color, 3em 14em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 7em 14em #color, 19em 14em #color, 20em 14em #color, 4em 15em #color, 5em 15em #color, 6em 15em #color, 7em 15em #color, 19em 15em #color, 20em 15em #color, 21em 15em #color, 3em 16em #color, 4em 16em #color, 5em 16em #color, 6em 16em #color, 7em 16em #color, 19em 16em #color, 4em 17em #color, 5em 17em #color, 6em 17em #color, 7em 17em #color, 19em 17em #color, 20em 17em #color, 5em 18em #color, 6em 18em #color, 7em 18em #color, 19em 18em #color, 4em 19em #color, 5em 19em #color, 6em 19em #color, 7em 19em #color, 19em 19em #color, 20em 19em #color, 5em 20em #color, 6em 20em #color, 7em 20em #color, 19em 20em #color`,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
    'hair-27': {
        data: `  20em 0em #color, 2em 1em #color, 3em 1em #color, 4em 1em #color, 5em 1em #color, 19em 1em #color, 20em 1em #color, 21em 1em #color, 2em 2em #color, 3em 2em #color, 4em 2em #color, 19em 2em #color, 20em 2em #color, 21em 2em #color, 22em 2em #color, 2em 3em #color, 3em 3em #color, 4em 3em #color, 5em 3em #color, 18em 3em black, 19em 3em #color, 20em 3em #color, 21em 3em #color, 23em 3em #color, 2em 4em #color, 4em 4em #color, 5em 4em black, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 18em 8em #color, 19em 8em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 19em 9em #color, 20em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 19em 10em #color, 20em 10em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 19em 11em #color, 20em 11em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 19em 12em #color, 20em 12em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em #color, 19em 13em #color, 20em 13em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 7em 14em #color, 19em 14em #color, 20em 14em #color, 4em 15em #color, 5em 15em #color, 6em 15em #color, 7em 15em #color, 19em 15em #color, 20em 15em #color, 4em 16em #color, 5em 16em #color, 6em 16em #color, 7em 16em #color, 19em 16em #color, 20em 16em #color, 4em 17em #color, 5em 17em #color, 6em 17em #color, 7em 17em #color, 19em 17em #color, 20em 17em #color, 5em 18em #color, 6em 18em #color, 7em 18em #color, 8em 18em #color, 18em 18em #color, 19em 18em #color, 20em 18em #color, 21em 18em #color, 6em 19em #color, 7em 19em #color, 19em 19em #color, 20em 19em #color    `,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
    'hair-28': {
        data: ` 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 9em 9em #color, 18em 9em #color, 19em 9em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 8em 10em #color, 19em 10em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 8em 11em #color, 19em 11em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 8em 12em #color, 19em 12em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em #color, 8em 13em #color, 19em 13em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 7em 14em #color, 8em 14em #color, 19em 14em #color, 4em 15em #color, 5em 15em #color, 6em 15em #color, 7em 15em #color, 8em 15em #color, 19em 15em #color, 4em 16em #color, 5em 16em #color, 6em 16em #color, 7em 16em #color, 8em 16em #color, 19em 16em #color, 4em 17em #color, 5em 17em #color, 6em 17em #color, 7em 17em #color, 8em 17em #color, 19em 17em #color, 5em 18em #color, 6em 18em #color, 7em 18em #color, 8em 18em #color, 19em 18em #color, 5em 19em #color, 6em 19em #color, 7em 19em #color, 4em 20em #color, 5em 20em #color, 6em 20em #color, 3em 21em #color, 4em 21em #color, 5em 21em #color, 3em 22em #color, 4em 22em #color, 2em 23em #color, 3em 23em #color  `,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
    'hair-29': {
        data: ` 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 6em 8em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color, 19em 8em #color, 6em 9em #color, 7em 9em #color, 8em 9em #color, 9em 9em #color, 18em 9em #color, 19em 9em #color, 6em 10em #color, 7em 10em #color, 8em 10em #color, 19em 10em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 8em 11em #color, 19em 11em #color, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em #color, 8em 12em #color, 19em 12em #color, 20em 12em #color, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em #color, 8em 13em #color, 19em 13em #color, 20em 13em #color, 4em 14em #color, 5em 14em #color, 6em 14em #color, 7em 14em #color, 8em 14em #color, 19em 14em #color, 20em 14em #color, 4em 15em #color, 5em 15em #color, 6em 15em #color, 7em 15em #color, 8em 15em #color, 19em 15em #color, 20em 15em #color, 4em 16em #color, 5em 16em #color, 6em 16em #color, 7em 16em #color, 8em 16em #color, 19em 16em #color, 20em 16em #color, 4em 17em #color, 5em 17em #color, 6em 17em #color, 7em 17em #color, 8em 17em #color, 19em 17em #color, 20em 17em #color, 4em 18em #color, 5em 18em #color, 6em 18em #color, 7em 18em #color, 8em 18em #color, 19em 18em #color, 20em 18em #color, 4em 19em #color, 5em 19em #color, 6em 19em #color, 7em 19em #color, 8em 19em #color, 19em 19em #color, 20em 19em #color, 3em 20em #color, 4em 20em #color, 5em 20em #color, 6em 20em #color, 7em 20em #color, 8em 20em #color, 19em 20em #color, 20em 20em #color, 2em 21em #color, 3em 21em #color, 4em 21em #color, 5em 21em #color, 6em 21em #color, 7em 21em #color, 8em 21em #color, 18em 21em #color, 19em 21em #color, 20em 21em #color, 21em 21em #color, 1em 22em #color, 2em 22em #color, 3em 22em #color, 4em 22em #color, 5em 22em #color, 6em 22em #color, 7em 22em #color, 17em 22em #color, 18em 22em #color, 19em 22em #color, 20em 22em #color, 21em 22em #color, 22em 22em #color  `,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
    'hair-30': {
        data: `  7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 4em 8em #color, 5em 8em #color, 6em 8em #color, 7em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 19em 8em #color, 20em 8em #color, 21em 8em #color, 3em 9em #color, 4em 9em #color, 5em 9em #color, 6em 9em #color, 7em 9em #color, 20em 9em #color, 21em 9em #color, 3em 10em #color, 4em 10em #color, 5em 10em #color, 6em 10em #color, 7em 10em #color, 20em 10em #color, 21em 10em #color, 3em 11em #color, 4em 11em #color, 5em 11em #color, 6em 11em #color, 7em 11em #color, 20em 11em #color, 21em 11em #color, 3em 12em #color, 4em 12em #color, 20em 12em #color, 21em 12em #color, 3em 13em #color, 4em 13em #color, 20em 13em #color, 21em 13em #color, 3em 14em #color, 4em 14em #color, 20em 14em #color, 21em 14em #color, 2em 15em #color, 3em 15em #color, 4em 15em #color, 20em 15em #color, 21em 15em #color, 22em 15em #color, 1em 16em #color, 2em 16em #color, 3em 16em #color, 4em 16em #color, 5em 16em #color, 20em 16em #color, 21em 16em #color, 22em 16em #color, 23em 16em #color `,
        defaultColor: '#4e342e',
        tags: ['human-female']
    }, 
   
  
}
const headAccessoryItems : {[key in  HeadAccessoryTypes ] : DataItem } = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'head-accessory-1': {
        data: `9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 7em 8em #color, 8em 8em #color, 9em 8em #color, 10em 8em #color, 11em 8em #color, 12em 8em #color, 13em 8em #color, 14em 8em #color, 15em 8em #color, 16em 8em #color, 17em 8em #color, 18em 8em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male', 'human-female']
    },
    'head-accessory-2': {
        data: `11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 13em 7em #color, 13em 8em #color`,
        defaultColor: '#4e342e',
        tags: ['human-female']
    },
    'head-accessory-3': {
        data: `  7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 6em 5em #color, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 21em 6em #color, 22em 6em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 22em 7em #color, 23em 7em #color`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-4': {
        data: `9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 3em 7em #color, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 3em 8em #color, 4em 8em #color, 5em 8em #color`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-5': {
        data: ` 9em 3em black, 10em 3em black, 11em 3em black, 12em 3em black, 13em 3em black, 14em 3em black, 15em 3em black, 16em 3em black, 9em 4em black, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em black, 8em 5em black, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em black, 6em 6em black, 7em 6em black, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em black, 12em 6em black, 13em 6em black, 14em 6em black, 15em 6em black, 16em 6em black, 17em 6em black, 18em 6em black, 19em 6em black, 20em 6em black, 21em 6em black, 6em 7em black, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em black, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 22em 7em black, 6em 8em black, 7em 8em black, 8em 8em black, 9em 8em black, 10em 8em black, 11em 8em black, 12em 8em black, 13em 8em black, 14em 8em black, 15em 8em black, 16em 8em black, 17em 8em black, 18em 8em black, 19em 8em black, 20em 8em black, 21em 8em black, 22em 8em black`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-6': {
        data: ` 7em 3em black, 8em 3em black, 9em 3em black, 10em 3em black, 11em 3em black, 12em 3em black, 13em 3em black, 14em 3em black, 15em 3em black, 16em 3em black, 17em 3em black, 18em 3em black, 6em 4em black, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em black, 6em 5em black, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em black, 4em 6em black, 5em 6em black, 6em 6em black, 7em 6em black, 8em 6em black, 9em 6em black, 10em 6em black, 11em 6em black, 12em 6em black, 13em 6em black, 14em 6em black, 15em 6em black, 16em 6em black, 17em 6em black, 18em 6em black, 19em 6em black, 20em 6em black, 21em 6em black, 3em 7em black, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 22em 7em black, 3em 8em black, 4em 8em black, 5em 8em black, 6em 8em black, 7em 8em black, 8em 8em black, 9em 8em black, 10em 8em black, 11em 8em black, 12em 8em black, 13em 8em black, 14em 8em black, 15em 8em black, 16em 8em black, 17em 8em black, 18em 8em black, 19em 8em black, 20em 8em black, 21em 8em black, 22em 8em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-7': {
        data: `9em 1em black, 10em 1em black, 11em 1em black, 12em 1em black, 13em 1em black, 14em 1em black, 15em 1em black, 16em 1em black, 8em 2em black, 9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em black, 7em 3em black, 8em 3em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em black, 6em 4em black, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em black, 6em 5em black, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em black, 4em 6em black, 5em 6em black, 6em 6em black, 7em 6em black, 8em 6em black, 9em 6em black, 10em 6em black, 11em 6em black, 12em 6em black, 13em 6em black, 14em 6em black, 15em 6em black, 16em 6em black, 17em 6em black, 18em 6em black, 19em 6em black, 20em 6em black, 21em 6em black, 3em 7em black, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 22em 7em black, 3em 8em black, 4em 8em black, 5em 8em black, 6em 8em black, 7em 8em black, 8em 8em black, 9em 8em black, 10em 8em black, 11em 8em black, 12em 8em black, 13em 8em black, 14em 8em black, 15em 8em black, 16em 8em black, 17em 8em black, 18em 8em black, 19em 8em black, 20em 8em black, 21em 8em black, 22em 8em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-8': {
        data: `9em 1em black, 10em 1em black, 11em 1em black, 12em 1em black, 13em 1em black, 14em 1em black, 15em 1em black, 16em 1em black, 8em 2em black, 9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em black, 7em 3em black, 8em 3em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em black, 6em 4em black, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em black, 6em 5em black, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em black, 4em 6em black, 5em 6em black, 6em 6em black, 7em 6em black, 8em 6em black, 9em 6em black, 10em 6em black, 11em 6em black, 12em 6em black, 13em 6em black, 14em 6em black, 15em 6em black, 16em 6em black, 17em 6em black, 18em 6em black, 19em 6em black, 20em 6em black, 21em 6em black, 3em 7em black, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 22em 7em black, 3em 8em black, 4em 8em #color, 5em 8em #color, 6em 8em black, 7em 8em black, 8em 8em black, 9em 8em black, 10em 8em black, 11em 8em black, 12em 8em black, 13em 8em black, 14em 8em black, 15em 8em black, 16em 8em black, 17em 8em black, 18em 8em black, 19em 8em black, 20em 8em #color, 21em 8em #color, 22em 8em black, 4em 9em black, 5em 9em #color, 20em 9em #color, 21em 9em black, 5em 10em black, 20em 10em black`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-9': {
        data: `9em 1em black, 10em 1em black, 11em 1em black, 12em 1em black, 13em 1em black, 14em 1em black, 15em 1em black, 16em 1em black, 8em 2em black, 9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em black, 7em 3em black, 8em 3em #color, 9em 3em #color, 10em 3em #color, 11em 3em #color, 12em 3em #color, 13em 3em #color, 14em 3em #color, 15em 3em #color, 16em 3em #color, 17em 3em #color, 18em 3em black, 6em 4em black, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em black, 6em 5em black, 7em 5em #color, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em #color, 19em 5em black, 4em 6em black, 5em 6em black, 6em 6em black, 7em 6em black, 8em 6em black, 9em 6em black, 10em 6em black, 11em 6em black, 12em 6em black, 13em 6em black, 14em 6em black, 15em 6em black, 16em 6em black, 17em 6em black, 18em 6em black, 19em 6em black, 20em 6em black, 21em 6em black, 3em 7em black, 4em 7em #color, 5em 7em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 20em 7em #color, 21em 7em #color, 22em 7em black, 3em 8em black, 4em 8em #color, 5em 8em #color, 6em 8em black, 7em 8em black, 8em 8em black, 9em 8em black, 10em 8em black, 11em 8em black, 12em 8em black, 13em 8em black, 14em 8em black, 15em 8em black, 16em 8em black, 17em 8em black, 18em 8em black, 19em 8em black, 20em 8em #color, 21em 8em #color, 22em 8em black, 4em 9em black, 5em 9em #color, 20em 9em #color, 21em 9em black, 5em 10em black, 20em 10em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-10': {
        data: ` 9em 3em black, 10em 3em black, 11em 3em black, 12em 3em black, 13em 3em black, 14em 3em black, 15em 3em black, 16em 3em black, 8em 4em black, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em black, 7em 5em black, 8em 5em #color, 9em 5em #color, 10em 5em #color, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em #color, 16em 5em #color, 17em 5em #color, 18em 5em black, 6em 6em black, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em black, 5em 7em black, 6em 7em black, 7em 7em black, 8em 7em black, 9em 7em black, 10em 7em black, 11em 7em black, 12em 7em black, 13em 7em black, 14em 7em black, 15em 7em black, 16em 7em black, 17em 7em black, 18em 7em black, 19em 7em black, 20em 7em black, 5em 8em black, 6em 8em #color, 7em 8em black, 8em 8em #color, 9em 8em black, 10em 8em #color, 11em 8em black, 12em 8em #color, 13em 8em black, 14em 8em #color, 15em 8em black, 16em 8em #color, 17em 8em black, 18em 8em #color, 19em 8em #color, 20em 8em black, 5em 9em black, 6em 9em black, 7em 9em black, 8em 9em black, 9em 9em black, 10em 9em black, 11em 9em black, 12em 9em black, 13em 9em black, 14em 9em black, 15em 9em black, 16em 9em black, 17em 9em black, 18em 9em black, 19em 9em black, 20em 9em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-11': {
        data: `9em 3em black, 10em 3em black, 11em 3em black, 12em 3em black, 13em 3em black, 14em 3em black, 15em 3em black, 16em 3em black, 8em 4em black, 9em 4em #color, 10em 4em #color, 11em 4em black, 12em 4em #color, 13em 4em #color, 14em 4em black, 15em 4em #color, 16em 4em #color, 17em 4em black, 7em 5em black, 8em 5em #color, 9em 5em #color, 10em 5em black, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em black, 16em 5em #color, 17em 5em #color, 18em 5em black, 6em 6em black, 7em 6em #color, 8em 6em #color, 9em 6em black, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em black, 17em 6em #color, 18em 6em #color, 19em 6em black, 5em 7em black, 6em 7em black, 7em 7em black, 8em 7em black, 9em 7em black, 10em 7em black, 11em 7em black, 12em 7em black, 13em 7em black, 14em 7em black, 15em 7em black, 16em 7em black, 17em 7em black, 18em 7em black, 19em 7em black, 20em 7em black, 5em 8em black, 6em 8em #color, 7em 8em black, 8em 8em #color, 9em 8em black, 10em 8em #color, 11em 8em black, 12em 8em #color, 13em 8em black, 14em 8em #color, 15em 8em black, 16em 8em #color, 17em 8em black, 18em 8em #color, 19em 8em #color, 20em 8em black, 5em 9em black, 6em 9em black, 7em 9em black, 8em 9em black, 9em 9em black, 10em 9em black, 11em 9em black, 12em 9em black, 13em 9em black, 14em 9em black, 15em 9em black, 16em 9em black, 17em 9em black, 18em 9em black, 19em 9em black, 20em 9em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-12': {
        data: `13em 1em black, 12em 2em black, 13em 2em black, 14em 2em black, 9em 3em black, 10em 3em black, 11em 3em black, 12em 3em black, 13em 3em black, 14em 3em black, 15em 3em black, 16em 3em black, 8em 4em black, 9em 4em #color, 10em 4em #color, 11em 4em black, 12em 4em #color, 13em 4em #color, 14em 4em black, 15em 4em #color, 16em 4em #color, 17em 4em black, 7em 5em black, 8em 5em #color, 9em 5em #color, 10em 5em black, 11em 5em #color, 12em 5em #color, 13em 5em #color, 14em 5em #color, 15em 5em black, 16em 5em #color, 17em 5em #color, 18em 5em black, 6em 6em black, 7em 6em #color, 8em 6em #color, 9em 6em black, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em black, 17em 6em #color, 18em 6em #color, 19em 6em black, 5em 7em black, 6em 7em black, 7em 7em black, 8em 7em black, 9em 7em black, 10em 7em black, 11em 7em black, 12em 7em black, 13em 7em black, 14em 7em black, 15em 7em black, 16em 7em black, 17em 7em black, 18em 7em black, 19em 7em black, 20em 7em black, 5em 8em black, 6em 8em #color, 7em 8em black, 8em 8em #color, 9em 8em black, 10em 8em #color, 11em 8em black, 12em 8em #color, 13em 8em black, 14em 8em #color, 15em 8em black, 16em 8em #color, 17em 8em black, 18em 8em #color, 19em 8em #color, 20em 8em black, 5em 9em black, 6em 9em black, 7em 9em black, 8em 9em black, 9em 9em black, 10em 9em black, 11em 9em black, 12em 9em black, 13em 9em black, 14em 9em black, 15em 9em black, 16em 9em black, 17em 9em black, 18em 9em black, 19em 9em black, 20em 9em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-13': {
        data: `6em 6em #f5f5f5, 7em 6em #f5f5f5, 8em 6em #f5f5f5, 9em 6em #f5f5f5, 10em 6em #f5f5f5, 11em 6em #f5f5f5, 12em 6em #f5f5f5, 13em 6em #f5f5f5, 14em 6em #f5f5f5, 15em 6em #f5f5f5, 16em 6em #f5f5f5, 17em 6em #f5f5f5, 18em 6em #f5f5f5, 19em 6em #f5f5f5, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-14': {
        data: `8em 0em black, 9em 0em black, 10em 0em black, 11em 0em black, 12em 0em black, 13em 0em black, 14em 0em black, 15em 0em black, 16em 0em black, 17em 0em black, 8em 1em black, 9em 1em #color, 10em 1em #color, 11em 1em #color, 12em 1em #color, 13em 1em #color, 14em 1em #color, 15em 1em #color, 16em 1em #color, 17em 1em black, 8em 2em black, 9em 2em #color, 10em 2em #color, 11em 2em #color, 12em 2em #color, 13em 2em #color, 14em 2em #color, 15em 2em #color, 16em 2em #color, 17em 2em black, 7em 3em black, 8em 3em black, 9em 3em black, 10em 3em black, 11em 3em black, 12em 3em black, 13em 3em black, 14em 3em black, 15em 3em black, 16em 3em black, 17em 3em black, 18em 3em black, 3em 4em black, 4em 4em black, 6em 4em black, 7em 4em #color, 8em 4em #color, 9em 4em #color, 10em 4em #color, 11em 4em #color, 12em 4em #color, 13em 4em #color, 14em 4em #color, 15em 4em #color, 16em 4em #color, 17em 4em #color, 18em 4em #color, 19em 4em black, 21em 4em black, 22em 4em black, 3em 5em black, 4em 5em #color, 5em 5em black, 6em 5em black, 7em 5em black, 8em 5em black, 9em 5em black, 10em 5em black, 11em 5em black, 12em 5em black, 13em 5em black, 14em 5em black, 15em 5em black, 16em 5em black, 17em 5em black, 18em 5em black, 19em 5em black, 20em 5em black, 21em 5em #color, 22em 5em black, 3em 6em black, 4em 6em #color, 5em 6em #color, 6em 6em #color, 7em 6em #color, 8em 6em #color, 9em 6em #color, 10em 6em #color, 11em 6em #color, 12em 6em #color, 13em 6em #color, 14em 6em #color, 15em 6em #color, 16em 6em #color, 17em 6em #color, 18em 6em #color, 19em 6em #color, 20em 6em #color, 21em 6em #color, 22em 6em black, 4em 7em black, 5em 7em black, 6em 7em black, 7em 7em black, 8em 7em black, 9em 7em black, 10em 7em black, 11em 7em black, 12em 7em black, 13em 7em black, 14em 7em black, 15em 7em black, 16em 7em black, 17em 7em black, 18em 7em black, 19em 7em black, 20em 7em black, 21em 7em black`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-15': {
        data: `11em 4em black, 12em 4em black, 13em 4em black, 14em 4em black, 15em 4em black, 16em 4em black, 10em 5em black, 16em 5em black, 9em 6em black, 17em 6em black, 8em 7em black, 18em 7em black, 7em 8em black, 19em 8em black, 6em 9em black, 20em 9em black, 5em 10em black, 21em 10em black, 3em 11em black, 4em 11em black, 5em 11em black, 6em 11em black, 7em 11em black, 20em 11em black, 21em 11em black, 3em 12em black, 4em 12em #color, 5em 12em #color, 6em 12em #color, 7em 12em black, 20em 12em #color, 21em 12em black, 3em 13em black, 4em 13em #color, 5em 13em #color, 6em 13em #color, 7em 13em black, 20em 13em #color, 21em 13em black, 3em 14em black, 4em 14em #color, 5em 14em #color, 6em 14em #color, 7em 14em black, 20em 14em #color, 21em 14em black, 3em 15em black, 4em 15em black, 5em 15em black, 6em 15em black, 7em 15em black, 20em 15em black, 21em 15em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'head-accessory-16': {
        data: `7em 6em #color, 9em 6em #color, 11em 6em #color, 13em 6em #color, 15em 6em #color, 17em 6em #color, 6em 7em #color, 7em 7em #color, 8em 7em #color, 9em 7em #color, 10em 7em #color, 11em 7em #color, 12em 7em #color, 13em 7em #color, 14em 7em #color, 15em 7em #color, 16em 7em #color, 17em 7em #color, 18em 7em #color, 19em 7em #color, 8em 8em #color, 10em 8em #color, 12em 8em #color, 14em 8em #color, 16em 8em #color, 18em 8em #color  `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    
    
    
}

const noseItems : {[key in  NoseTypes ] : DataItem } = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'nose-1': {
        data: `14em 15em black, 15em 15em black`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'nose-2': {
        data: `14em 14em black, 14em 15em black`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'nose-3': {
        data: `15em 15em black `,
        defaultColor: '#4e342e',
        tags: [ 'human-female']
    },
}

const mouthItems : {[key in  MouthTypes ] : DataItem } = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'mouth-1': {
        data: `13em 18em black, 14em 18em black, 15em 18em black`,
        defaultColor: '#4e342e',
        tags: ['human-male', ]
    },
    'mouth-2': {
        data: `12em 18em black, 13em 18em black, 14em 18em black, 15em 18em black `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'mouth-3': {
        data: `14em 18em #color, 15em 18em #color `,
        defaultColor: '#4e342e',
        tags: [ 'human-female']
    },

    'mouth-4': {
        data: `13em 18em #color, 16em 18em #color, 14em 19em #color, 15em 19em #color `,
        defaultColor: '#4e342e',
        tags: [ 'human-female']
    },


    
}

const mouthAccessoryItems : {[key in  MouthAccessoryTypes ] : DataItem } = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'mouth-accessory-1': {
        data: `21em 12em #bdbdbd, 21em 13em #bdbdbd, 22em 14em #bdbdbd, 21em 15em #bdbdbd, 15em 17em black, 16em 17em black, 17em 17em black, 18em 17em black, 19em 17em black, 20em 17em black, 21em 17em black, 22em 17em black, 15em 18em #bdbdbd, 16em 18em #bdbdbd, 17em 18em #bdbdbd, 18em 18em #bdbdbd, 19em 18em #bdbdbd, 20em 18em #bdbdbd, 21em 18em #ff6d00, 22em 18em black, 15em 19em black, 16em 19em black, 17em 19em black, 18em 19em black, 19em 19em black, 20em 19em black, 21em 19em black, 22em 19em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'mouth-accessory-2': {
        data: `23em 15em #bdbdbd, 22em 16em #bdbdbd, 15em 18em #bdbdbd, 16em 18em black, 23em 18em #bdbdbd, 15em 19em black, 16em 19em #bdbdbd, 17em 19em black, 16em 20em black, 17em 20em #bdbdbd, 22em 20em #bdbdbd, 18em 21em #bdbdbd, 19em 21em black, 21em 21em #bdbdbd, 18em 22em black, 19em 22em #ff6d00, 20em 22em black, 19em 23em black, 20em 23em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'mouth-accessory-3': {
        data: `22em 9em #bdbdbd, 23em 11em #bdbdbd, 23em 12em #bdbdbd, 24em 13em #bdbdbd, 22em 14em #bdbdbd, 21em 16em black, 22em 16em black, 23em 16em black, 24em 16em black, 15em 17em black, 16em 17em black, 17em 17em black, 18em 17em black, 19em 17em black, 20em 17em black, 21em 17em black, 22em 17em #6d4c41, 23em 17em #6d4c41, 24em 17em black, 15em 18em #6d4c41, 16em 18em #6d4c41, 17em 18em #6d4c41, 18em 18em #6d4c41, 19em 18em #6d4c41, 20em 18em #6d4c41, 21em 18em #6d4c41, 22em 18em #6d4c41, 23em 18em #6d4c41, 24em 18em black, 15em 19em black, 16em 19em black, 17em 19em black, 18em 19em black, 19em 19em black, 20em 19em black, 21em 19em black, 22em 19em black, 23em 19em black, 24em 19em black `,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    'mouth-accessory-4': {
        data: `24em 9em #e0e0e0, 23em 10em #e0e0e0, 24em 12em #e0e0e0, 23em 13em #e0e0e0, 22em 14em #e0e0e0, 22em 15em #e0e0e0, 15em 17em black, 16em 17em black, 17em 17em black, 18em 17em black, 19em 17em black, 20em 17em black, 21em 17em black, 22em 17em black, 23em 17em black, 15em 18em #color, 16em 18em #color, 17em 18em #color, 18em 18em #color, 19em 18em #color, 20em 18em #color, 21em 18em #color, 22em 18em #f5f5f5, 23em 18em black, 15em 19em black, 16em 19em black, 17em 19em black, 18em 19em black, 19em 19em black, 20em 19em black, 21em 19em black, 22em 19em black, 23em 19em black`,
        defaultColor: '#4e342e',
        tags: ['all']
    },
    
    
}
const beardItems : {[key in  BeardTypes ] : DataItem } = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'beard-1': {
        data: `8em 16em #5d4037, 18em 16em #5d4037, 8em 17em #5d4037, 18em 17em #5d4037, 8em 18em #5d4037, 9em 18em #5d4037, 10em 18em #5d4037, 18em 18em #5d4037, 9em 19em #5d4037, 10em 19em #5d4037, 11em 19em #5d4037, 18em 19em #5d4037, 9em 20em #5d4037, 11em 20em #5d4037, 12em 20em #5d4037, 13em 20em #5d4037, 14em 20em #5d4037, 15em 20em #5d4037, 16em 20em #5d4037, 17em 20em #5d4037, 12em 21em #5d4037, 13em 21em #5d4037, 14em 21em #5d4037, 15em 21em #5d4037, 16em 21em #5d4037`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-2': {
        data: `13em 21em #5d4037, 14em 21em #5d4037, 15em 21em #5d4037, 13em 22em #5d4037, 14em 22em #5d4037, 15em 22em #5d4037, 13em 23em black, 14em 23em #5d4037, 15em 23em black, 14em 24em black `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-3': {
        data: `12em 17em #5d4037, 13em 17em #5d4037, 14em 17em #5d4037, 15em 17em #5d4037, 16em 17em #5d4037 `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-4': {
        data: ` 11em 16em #5d4037, 17em 16em #5d4037, 12em 17em #5d4037, 13em 17em #5d4037, 14em 17em #5d4037, 15em 17em #5d4037, 16em 17em #5d4037`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-5': {
        data: ` 12em 17em #5d4037, 13em 17em #5d4037, 14em 17em #5d4037, 15em 17em #5d4037, 16em 17em #5d4037, 11em 18em #5d4037, 17em 18em #5d4037`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-6': {
        data: ` 7em 16em #5d4037, 8em 16em #5d4037, 9em 16em #5d4037, 10em 16em #5d4037, 11em 16em #5d4037, 12em 16em #5d4037, 13em 16em #5d4037, 14em 16em #5d4037, 15em 16em #5d4037, 16em 16em #5d4037, 17em 16em #5d4037, 18em 16em #5d4037, 8em 17em #5d4037, 9em 17em #5d4037, 10em 17em #5d4037, 11em 17em #5d4037, 12em 17em #5d4037, 13em 17em #5d4037, 14em 17em #5d4037, 15em 17em #5d4037, 16em 17em #5d4037, 17em 17em #5d4037, 18em 17em #5d4037, 9em 18em #5d4037, 10em 18em #5d4037, 11em 18em #5d4037, 12em 18em #5d4037, 13em 18em #5d4037, 14em 18em #5d4037, 15em 18em #5d4037, 16em 18em #5d4037, 17em 18em #5d4037, 18em 18em #5d4037, 10em 19em #5d4037, 11em 19em #5d4037, 12em 19em #5d4037, 13em 19em #5d4037, 14em 19em #5d4037, 15em 19em #5d4037, 16em 19em #5d4037, 17em 19em #5d4037, 18em 19em #5d4037, 11em 20em #5d4037, 12em 20em #5d4037, 13em 20em #5d4037, 14em 20em #5d4037, 15em 20em #5d4037, 16em 20em #5d4037, 17em 20em #5d4037, 12em 21em #5d4037, 13em 21em #5d4037, 14em 21em #5d4037, 15em 21em #5d4037, 16em 21em #5d4037 `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-7': {
        data: `  7em 15em #5d4037, 7em 16em #5d4037, 8em 16em #5d4037, 8em 17em #5d4037, 9em 17em #5d4037, 18em 17em #5d4037, 9em 18em #5d4037, 10em 18em #5d4037, 11em 18em #5d4037, 12em 18em #5d4037, 13em 18em #5d4037, 14em 18em #5d4037, 15em 18em #5d4037, 16em 18em #5d4037, 17em 18em #5d4037, 18em 18em #5d4037, 10em 19em #5d4037, 11em 19em #5d4037, 12em 19em #5d4037, 13em 19em #5d4037, 14em 19em #5d4037, 15em 19em #5d4037, 16em 19em #5d4037, 17em 19em #5d4037, 18em 19em #5d4037, 11em 20em #5d4037, 12em 20em #5d4037, 13em 20em #5d4037, 14em 20em #5d4037, 15em 20em #5d4037, 16em 20em #5d4037, 17em 20em #5d4037, 12em 21em #5d4037, 13em 21em #5d4037, 14em 21em #5d4037, 15em 21em #5d4037, 16em 21em #5d4037`,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-8': {
        data: ` 12em 17em #5d4037, 13em 17em #5d4037, 14em 17em #5d4037, 15em 17em #5d4037, 16em 17em #5d4037, 12em 18em #5d4037, 16em 18em #5d4037, 12em 19em #5d4037, 16em 19em #5d4037, 12em 20em #5d4037, 16em 20em #5d4037, 12em 21em #5d4037, 16em 21em #5d4037, 12em 22em #5d4037, 16em 22em #5d4037, 17em 22em black, 12em 23em #5d4037, 13em 23em black, 15em 23em black, 16em 23em #5d4037, 17em 23em black, 12em 24em #5d4037, 13em 24em black, 15em 24em black, 16em 24em #5d4037, 17em 24em black `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-9': {
        data: ` 9em 16em #5d4037, 8em 17em #5d4037, 9em 17em #5d4037, 10em 17em #5d4037, 18em 17em #5d4037, 9em 18em #5d4037, 10em 18em #5d4037, 11em 18em #5d4037, 17em 18em #5d4037, 18em 18em #5d4037, 10em 19em #5d4037, 11em 19em #5d4037, 17em 19em #5d4037, 18em 19em #5d4037, 11em 20em #5d4037, 12em 20em #5d4037, 16em 20em #5d4037, 17em 20em #5d4037  `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },
    'beard-10': {
        data: ` 8em 15em #5d4037, 9em 17em #5d4037, 11em 17em #5d4037, 13em 17em #5d4037, 15em 17em #5d4037, 17em 17em #5d4037, 18em 18em #5d4037, 10em 19em #5d4037, 12em 19em #5d4037, 14em 19em #5d4037, 16em 19em #5d4037, 13em 20em #5d4037, 15em 20em #5d4037, 14em 21em #5d4037  `,
        defaultColor: '#4e342e',
        tags: ['human-male']
    },

    
}


const earAccessoryItems : {[key in  EarAccessoryTypes ] : DataItem }  = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'ear-accessory-1': {
        data: `6em 15em #color`,
        defaultColor: '#4e342e',
        tags: ['human-male', 'human-female' ]
    },
    'ear-accessory-2': {
        data: `5em 15em #color, 5em 16em #color, 4em 17em #color, 5em 17em #color `,
        defaultColor: '#4e342e',
        tags: ['human-male', 'human-female' ]
    },
    'ear-accessory-3': {
        data: `5em 15em #color, 6em 15em #color, 5em 16em #color, 6em 16em #color `,
        defaultColor: '#4e342e',
        tags: ['human-female' ]
    },
    'ear-accessory-4': {
        data: `6em 15em #color, 5em 16em #color, 7em 16em #color, 6em 17em #color`,
        defaultColor: '#4e342e',
        tags: ['human-female' ]
    },
    'ear-accessory-5': {
        data: ` 5em 16em #color, 7em 16em #color, 5em 17em #color, 7em 17em #color, 5em 18em #color, 6em 18em #color, 7em 18em #color `,
        defaultColor: '#4e342e',
        tags: ['human-female' ]
    },
   
}

const neckAccessoryItems : {[key in  NeckAccessoryTypes ] : DataItem }  = {
    'none': {
        data: ``,
        defaultColor: '',
        tags: ['all']
    },
    'neck-accessory-1': {
        data: `7em 21em #color, 8em 22em #color, 9em 23em #color, 10em 24em #color`,
        defaultColor: '#4e342e',
        tags: ['all' ]
    },
    'neck-accessory-2': {
        data: `7em 23em #color, 8em 23em #color, 9em 23em #color, 10em 23em #color `,
        defaultColor: '#4e342e',
        tags: ['human-female' ]
    },
    'neck-accessory-3': {
        data: `7em 23em #color, 8em 23em #color, 9em 23em #color, 10em 23em #color, 7em 24em #color, 8em 24em #color, 9em 24em #color, 10em 24em #color `,
        defaultColor: '#4e342e',
        tags: ['all' ]
    },
    'neck-accessory-4': {
        data: `7em 22em #color, 10em 22em #color, 7em 23em #color, 8em 23em #color, 9em 23em #color, 10em 23em #color, 7em 24em #color, 10em 24em #color `,
        defaultColor: '#4e342e',
        tags: ['all' ]
    },
    'neck-accessory-5': {
        data: `  4em 22em black, 5em 22em black, 3em 23em black, 4em 23em #color, 5em 23em #color, 6em 23em black, 2em 24em black, 3em 24em #color, 4em 24em #color, 5em 24em #color, 6em 24em black `,
        defaultColor: '#4e342e',
        tags: ['all' ]
    },
}

export const itemsData = {
    "eyes": eyesItems,
    "eyesAccessory": eyesAccesoryItems,
    "hair": hairItems,
    "headAccessory": headAccessoryItems,
    "nose": noseItems,
    "mouth": mouthItems,
    "mouthAccessory": mouthAccessoryItems,
    "beard": beardItems,
    "earAccessory": earAccessoryItems,
    "neckAccessory": neckAccessoryItems
}