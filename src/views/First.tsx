import Player from './components/Player';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

import { useRef, forwardRef, useImperativeHandle } from 'react';

import vinyl from "../assets/demons.jpg";
import demons from "../assets/demons.mp3";

const First = forwardRef((props: any, ref) => {
  const player = useRef<any>()

  useImperativeHandle(ref, () => ({
    pause: () => {
      player.current.pause()
    }
  }))

  return (
    <Flex bgColor='#6E2126' py='100px'>
      <Box mx='70px' display='grid' placeItems='center'>
        <Player id={1} pauseOther={props.pauseOther} ref={player} vinyl={vinyl} song={demons} posterResize='28%' start={56} name='Demons' artist='Imagine Dragons' />
      </Box>
      <Box flexGrow='1' ml='70px'>
        <Text fontSize='40px'>Song #1</Text>
        <Text fontSize='30px'>Demons - Imagine Dragons</Text>

        <Box ml='50px' my='50px'>
          <Text fontSize='20px' color='#CED0CE'>Press play to jump to <Link color='teal.300' onClick={() => {
            if (player.current) player.current.reset()
          }}>0:56</Link></Text>
          <Text fontSize='20px'>When you feel my heat</Text>
          <Text fontSize='20px'>Look into my eyes</Text>
          <Text fontSize='20px'>It’s where my demons hide</Text>
          <Text fontSize='20px'>It’s where my demons hide</Text>
          <Text fontSize='20px'>Don’t get too close</Text>
          <Text fontSize='20px'>It’s dark inside</Text>
          <Text fontSize='20px'>It’s where my demons hide</Text>
          <Text fontSize='20px'>It’s where my demons hide</Text>
          <Text fontSize='20px' color='#CED0CE'>0:56-1:17</Text>
        </Box>

        <Text fontSize='20px' pr='90px'>"Demons" by Imagine Dragons explores themes relating to the hidden darkness within people. When the song states, “Don’t get too close \ It’s dark inside \ It’s where my demons hide,” it tries to protect others and from our inner impulses from the demon inside. The demon symbolizes the greed and ambition of Macbeth, as well as his desire for the crown. Overall, the lyrics can relate to Macbeth’s inner conflict with murdering Duncan. Though he realizes the evil nature of the murder, he still cannot resist the temptation of power that drives him towards it, expressed when Macbeth states: “I have no spur \ To prick the sides of my intent, but only \ Vaulting ambition, which o’erleaps itself” (1.7.25-27).</Text>
      </Box>
    </Flex>
  )
})

export default First;
