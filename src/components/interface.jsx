import { Affix, Button, Flex, Textarea, ScrollArea, Loader} from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useState } from "react";
import { events } from "@react-three/fiber";
import { ProgressBar } from "react-loader-spinner";

const Interface = ()=>{
    const { animations, animationIndex, setAnimationIndex, setCharacterIndex, words, alphabets} = useCharacterAnimations();
    const [value, setValue] = useState('')
    let operationPosition = {bottom : 600, left: 300}
    let wordsPosition = { bottom: 350, left: 40 }
    let scrollHeight = 200
    let scrollWeight = 1200
    let alphabetsPositions = { bottom: 200, left: 20 }
    if(window.innerHeight < 850)
    {
      operationPosition = {bottom: 500, left: 200}
      wordsPosition = {bottom: 250, left: 40}
      scrollHeight = 210
      scrollWeight = 1000
      alphabetsPositions = {bottom: 150, left: 10}
    }
    if(animations.length >0)
    {
      return (
        <>

        <Affix position={operationPosition}>
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
          
        <Affix position={wordsPosition}>
          <ScrollArea h= {scrollHeight} w={scrollWeight}p={20}>
        { words.map((word, index)=>(
                <Button 
                color="rgba(10, 10, 10, 1)"
                key={word} 
                variant="filled"
                ml={10}
                mt={10}
                onClick={()=> setAnimationIndex(animations.indexOf(word))}
                >
                    {word}
                </Button>
        ))}
        </ScrollArea>
        </Affix>

        <Affix position={alphabetsPositions}>
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
else
{
  return (
    <Affix position={{top: window.innerHeight/3, left:window.innerWidth/2.18}}>
    <ProgressBar
      visible={true}
      height="150"
      width="150"
      color="#4fa94d"
      ariaLabel="progress-bar-loading"
    />
    </Affix>
  )
}
}

export default Interface;

