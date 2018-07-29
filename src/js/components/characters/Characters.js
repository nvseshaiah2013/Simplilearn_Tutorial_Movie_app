import React from 'react';
import Character from '../../components/character/Character';
import CharactersStore from '../../stores/CharactersStore';
export default class Characters extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            characters: CharactersStore.getCharacters()
        };
    }
    render()
    {
        const {characters} =this.state;
        const characterList = characters.map((charactor)=>{
            return <Character key={charactor.name} {...charactor}/>;
        });
        return(
            <div>
            <h2>StarWar Characters</h2>
            {characterList}
             </div>       
        );
    }
}