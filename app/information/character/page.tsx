import Card from "@/components/card/Card";
import { getCharacter } from "./services";



async function fetchCharacter() {
    return await getCharacter();  
}

async function Character() {
    const characters = await fetchCharacter();
    return ( characters.map((character)=>{
        return (
            <>
            <Card key={character.id} data={character} />
            </>
        )
    }) );
}

export default Character;