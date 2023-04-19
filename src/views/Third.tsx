import Player from './components/Player';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

import { useRef, forwardRef, useImperativeHandle } from 'react';

import vinyl from "../assets/sweetDreams.jpg";
import sweetDreams from "../assets/sweetDreams.mp3";

const Third = forwardRef((props: any, ref) => {

  const player = useRef<any>()

  useImperativeHandle(ref, () => ({
    pause: () => {
      player.current.pause()
    }
  }))

  return (
    <Flex bgColor='#242F40' py='50px'>
      <Box mx='70px' display='grid' placeItems='center'>
        <Player id={3} pauseOther={props.pauseOther} ref={player} vinyl={vinyl} song={sweetDreams} posterResize='30%' start={15} name='Sweet Dreams (Are Made Of This)' artist='Eurythmics' />
      </Box>
      <Box flexGrow='1' ml='70px'>
        <Text fontSize='40px'>Song #3</Text>
        <Text fontSize='30px'>Sweet Dreams (Are Made Of This) - Eurythmics</Text>

        <Box ml='50px' my='50px'>
          <Text fontSize='20px' color='#CED0CE'>Press play to jump to <Link color='teal.300' onClick={() => {
            if (player.current) player.current.reset()
          }}>0:15</Link></Text>
          <Text fontSize='20px'>I travelled the world and the seven seas</Text>
          <Text fontSize='20px'>Everybody's looking for something</Text>
          <Text fontSize='20px'>Some of them want to use you</Text>
          <Text fontSize='20px'>Some of them want to get used by you</Text>
          <Text fontSize='20px'>Some of them want to abuse you</Text>
          <Text fontSize='20px'>Some of them want to be abused</Text>
          <Text fontSize='20px' color='#CED0CE'>0:15-0:39</Text>
        </Box>

        <Text fontSize='20px' pr='90px'>This song’s lyrics focus on the dark aspect of human greed and ambitions, and manipulation. The phrase, “Some of them want to use you \ Some of them want to get used by you,” symbolizes the manipulative nature of Lady Macbeth as he persuades Macbeth to continue the evil acts, displaying her own ruthless determination. An example of this would be when Lady Macbeth states, “What not put upon \ His spongy officers, who shall bear the guilt \ Of our great quell” (1.7.77-79), showing her plans to blame the guards for the murder.  Another connection to Macbeht’s desire to pursue power can be found at the beginning of the lyrics: “I travel the world \ And the seven seas \ Everybody’s looking for something.” In conclusion, the song “Sweet Dreams” share the common theme of desire, ambition, and moral ambiguity, and it should be fitting when Lady Macbeth lays out her plan to Macbeth. </Text>
      </Box>
    </Flex>
  )
})

export default Third;
