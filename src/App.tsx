import Title from './views/Title'
import First from './views/First'
import Second from './views/Second'
import Third from './views/Third'
import Fourth from './views/Fourth'
import Footer from './views/components/Footer'
import { Box } from '@chakra-ui/react'

import { useRef } from 'react'

function App() {
  const player1 = useRef<any>();
  const player2 = useRef<any>();
  const player3 = useRef<any>();
  const player4 = useRef<any>();

  const pauseOther = (id: number) => {
    if (id !== 1) player1.current.pause()
    if (id !== 2) player2.current.pause()
    if (id !== 3) player3.current.pause()
    if (id !== 4) player4.current.pause()
  }

  return (
    <Box h='100%' bgColor='#14151b' color='white' overflowY='scroll' display='flex' flexDirection='column' css={{
      '&::-webkit-scrollbar': {
        width: '4px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#8A817C',
        borderRadius: '24px',
      },
    }}>
      <Title />
      <First pauseOther={pauseOther} ref={player1} />
      <Second pauseOther={pauseOther} ref={player2} />
      <Third pauseOther={pauseOther} ref={player3} />
      <Fourth pauseOther={pauseOther} ref={player4} />
      <Footer />
    </Box>
  )
}

export default App
