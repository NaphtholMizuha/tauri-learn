import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text, Flex,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  HStack,
  Spacer,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import MyButton from "./components/MyButton"
import MetroIcon from "./components/MetroIcon"
import MetroPathShower from "./components/MetroPathShower/MetroPathShower"
import LineIcon from "./components/LineIcon"
import mode from "./sample.json"
import { invoke } from "@tauri-apps/api/tauri"

export const App = () => {
  const [path, setPath] = React.useState(mode)
  const fetch = async () => {
    const temp = await invoke('path_require_string') as string;
    setPath(JSON.parse(temp))
  }
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
            <MyButton onFetch={fetch}/>
            <MetroPathShower path={path}/>
            <LineIcon lineNum="THP1" color="#CD5228" isTextWhile />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
} 
