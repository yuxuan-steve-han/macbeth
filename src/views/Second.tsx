import Player from './components/Player';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

import { useRef, forwardRef, useImperativeHandle } from 'react';

import vinyl from "../assets/chaconne.jpg";
import chaconne from "../assets/Chaconne in G Minor.webm";

const Second = forwardRef((props: any, ref) => {

  const player = useRef<any>()

  useImperativeHandle(ref, () => ({
    pause: () => {
      player.current.pause()
    }
  }))

  return (
    <Flex bgColor='#191919' py='50px'>
      <Box flexGrow='1' ml='70px'>
        <Text fontSize='40px'>Song #2</Text>
        <Text fontSize='30px'>Chaconne in G Minor - Tomaso Antonio Vitali</Text>

        <Box ml='50px' my='50px'>
          <Text fontSize='20px' color='#CED0CE'>Press play to jump to <Link color='teal.300' onClick={() => {
            if (player.current) player.current.reset()
          }}>8:43</Link></Text>
          <Text fontSize='20px'>No lyrics</Text>
          <Text fontSize='20px' color='#CED0CE'>8:43-9:31</Text>
        </Box>

        <Text fontSize='20px'>The score has a dark and somber atmosphere with its minor key signature, representing the sinful murder he is thinking of committing. Throughout the use of intense and gloomy harmonics, the score keeps building more and more suspense until the final climax at 8:43. The tension can be seen as the inner conflict Macbeth is experiencing as he struggles between his ambition and conscience. The slow build-up throughout the score and the violin with the organ can also be seen as the inevitability of fate controlled by the witches, representing the powerlessness Macbeth had over his future and a false sense of free will he had after the witches implanted the murderous idea into him.</Text>
      </Box>
      <Box mx='70px' display='grid' placeItems='center'>
        <Player id={2} pauseOther={props.pauseOther} ref={player} vinyl={vinyl} song={chaconne} posterResize='28%' start={524} name='Chaconne in G Minor' artist='Tomaso Antonio Vitali' />
      </Box>
    </Flex>
  )
})

export default Second