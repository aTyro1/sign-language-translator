import { Affix, Button, Flex, Textarea} from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useState } from "react";
import { events } from "@react-three/fiber";

const Interface = ()=>{
    const { animations, animationIndex, setAnimationIndex, setCharacterIndex} = useCharacterAnimations();
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
                        for(let i of value)
                        {
                            if( /[a-z]/.test(i))
                            setTimeout(()=>{setCharacterIndex(animations.indexOf(i))},1000)
                        }
                    }}
                    >Convert</Button>
            </Flex>
                   
        </Affix>

        <Affix position={{ bottom: 200, left: 20 }}>
        { animations.map((animation, index)=>(
                <Button 
                color="rgba(10, 10, 10, 1)"
                key={animation} 
                variant={index === animationIndex ? "filled" : "light" } 
                onClick={()=> setAnimationIndex(index)}
                >
                    {animation}
                </Button>
        ))}
        </Affix>
         </>
    );

}

export default Interface;

