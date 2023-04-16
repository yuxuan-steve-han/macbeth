import Player from './components/Player';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

import { useRef, forwardRef, useImperativeHandle } from 'react';

import vinyl from "../assets/tears.jpg";
import tears from "../assets/tears.mp3";

const Forth = forwardRef((props: any, ref) => {
  const player = useRef<any>()

  useImperativeHandle(ref, () => ({
    pause: () => {
      player.current.pause()
    }
  }))

  return (
    <Flex bgColor='#1C1F21' py='50px'>
      <Box flexGrow='1' ml='70px'>
        <Text fontSize='40px'>Song #4</Text>
        <Text fontSize='30px'>Everybody Wants To Rule The World - Tears For Tears</Text>

        <Box ml='50px' my='50px'>
          <Text fontSize='20px' color='#CED0CE'>Press play to jump to <Link color='teal.300' onClick={() => {
            if (player.current) player.current.reset()
          }}>1:01</Link></Text>
          <Text fontSize='20px'>Welcome to your life</Text>
          <Text fontSize='20px'>There's no turning back</Text>
          <Text fontSize='20px'>Even while we sleep</Text>
          <Text fontSize='20px'>We will find you</Text>
          <Text fontSize='20px' color='#CED0CE'>1:01-1:18</Text>
        </Box>

        <Text fontSize='20px'>This song resonates with <Text as='i' fontFamily='Roboto' fontWeight='500'>Macbeth</Text> Act 1, Scene 7 with the theme that Macbeth is at the turning point of his own demise, as the lyrics state, “There’s no turning back.” Immediately following Act 1, he would already be executing Lady Macbeth’s plan. If he committed the murder, he would pass the point of returning, and his downfall and fat would be guaranteed. The song’s title, “Everybody Wants To Rule The World,” refers to Macbeth and Lady Macbeth’s unstoppable desire for power and the throne. The lyrics “Even while we sleep \ We will find you” also imply how Duncan is murdered on his bed.</Text>
      </Box>
      <Box mx='70px' display='grid' placeItems='center'>
        <Player id={4} pauseOther={props.pauseOther} ref={player} vinyl={vinyl} song={tears} posterResize='30%' start={61} name='Everybody Wants To Rule The World' artist='Tears For Tears' />
      </Box>
    </Flex>
  )
})

export default Forth

