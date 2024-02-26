import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) =>{

    const [animationIndex, setAnimationIndex] = useState(2);
    const [animations, setAnimations] = useState([]);
    const [characterIndex, setCharacterIndex] = useState(2)
    const [words, setWords] = useState([])
    const [alphabets, setAlphabets] = useState([])


    return <CharacterAnimationsContext.Provider value={{
            animationIndex,
            setAnimationIndex,
            animations,
            setAnimations,
            characterIndex,
            setCharacterIndex,
            words,
            setWords,
            alphabets,
            setAlphabets,
    }} >
        {props.children}
    </CharacterAnimationsContext.Provider>
}

export const useCharacterAnimations = () =>{
    return useContext(CharacterAnimationsContext);
}