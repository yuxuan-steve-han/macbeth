import { motion } from 'framer-motion';
import { Box, SimpleGrid , Image, Text } from '@chakra-ui/react'

import macbeth from '../assets/macbeth.jpg'
import scroll from '../assets/scroll.gif'

export default function Title() {

  return (
    <SimpleGrid columns={2} minH='100vh' w='100%'>
      <Box display='flex' flexDirection='column'>
        <Box display='grid' placeItems='center' flexGrow='1'>
          <motion.div
            initial={{ opacity: 0, translateY: '70px' }}
            animate={{ opacity: 1, translateY: '0' }}
            transition={{ duration: 0.7 }}
          >
            <Text fontSize='80px' textAlign='center'>Macbeth</Text>
            <Text fontSize='40px' textAlign='center'>Act 1, Scene 7</Text>
            <Text fontSize='20px' textAlign='center' mt='20px'>"In shadows deep, Macbeth ponders fate,</Text>
            <Text fontSize='20px' textAlign='center' mt='5px'>A regal crown tempts, darkness awaits.</Text>
            <Text fontSize='20px' textAlign='center' mt='5px'>Lady Macbeth, ambitious and sly,</Text>
            <Text fontSize='20px' textAlign='center' mt='5px'>Manipulates, persuades, seals the lie.</Text>
            <Text fontSize='20px' textAlign='center' mt='5px'>A moral clash, ambition takes flight,</Text>
            <Text fontSize='20px' textAlign='center' mt='5px'>As power and guilt entwine the night."</Text>
          </motion.div>
        </Box>
        <Image src={scroll} alt='Scroll' h='100px' m='auto' />
      </Box>
      <Box display='grid' placeItems='center'>
        <Image src={macbeth} alt='Macbeth' maxW='80%' m='auto' border='5px solid #A39171' />
      </Box>
    </SimpleGrid>
  )
}


