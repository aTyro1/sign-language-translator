import { Affix, Button, Flex, Textarea} from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useState } from "react";
import { events } from "@react-three/fiber";

const Interface = ()=>{
    const { animations, animationIndex, setAnimationIndex, setCharacterIndex, words, alphabets} = useCharacterAnimations();
    const [value, setValue] = useState('')

    return (

        <>

        <Affix position={{ bottom: 600, left: 300}}>
            <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
            >
                    <Textarea
                     fz="sm"
                     value={value}
                     autosize
                     minRows={5}
                     size="xl"    
                    radius="md"
                    placeholder="write text to convert into sign language"
                    onChange={(event)=> setValue(event.currentTarget.value)}
                    />
                    <Button 
                    variant="filled" 
                    color="rgba(10, 10, 10, 1)"
                    onClick={()=> {
                        let i = 0;
                        while (i<=value.length) {
                          loop(i);
                          i++
                        }
                        function loop(i){
                          setTimeout(function(){
                            if(i == value.length)
                            {
                              setAnimationIndex(0);
                              setCharacterIndex(0);
                            }
                            else
                            {
                              if(/[a-zA-z]/.test(value[i]))
                              setCharacterIndex(animations.indexOf(value[i]))
                            }
                          }, 800 * i)
                        }
                    }}
                    >Convert</Button>
            </Flex>
                   
        </Affix>
          
        <Affix position={{ bottom: 350, left: 40 }}>
        { words.map((word, index)=>(
                <Button 
                color="rgba(10, 10, 10, 1)"
                key={word} 
                variant="filled"
                onClick={()=> setAnimationIndex(animations.indexOf(word))}
                >
                    {word}
                </Button>
        ))}
        </Affix>

        <Affix position={{ bottom: 200, left: 20 }}>
        { alphabets.map((alphabet, index)=>(
                <Button 
                color="rgba(10, 10, 10, 1)"
                key={alphabet} 
                variant="light"
                onClick={()=> setAnimationIndex(animations.indexOf(alphabet))}
                >
                    {alphabet}
                </Button>
        ))}
        </Affix>
         </>
    );

}

export default Interface;

