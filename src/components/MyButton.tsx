import { Button, HStack } from "@chakra-ui/react"
import { useState } from "react"
import { invoke, path } from "@tauri-apps/api"
import { exit } from "@tauri-apps/api/process"
import { BaseDirectory, createDir, readTextFile, writeTextFile } from "@tauri-apps/api/fs"

export default function MyButton() {
    const [greeting, setGreeting] = useState('Hello, world!')

    async function handleClick() {
        // const temp = await invoke('greet', { name: 'naphthol' }) as string;
        // const temp = await invoke('my_read_file', { path: '/Users/nainaizi/hello.txt' }).catch(() => {alert('Error!');}) as string;
        const temp = await readTextFile('hello.txt', {dir: BaseDirectory.Desktop})
        await writeTextFile('time.txt', new Date().toString(), {dir: BaseDirectory.Desktop})
        
        // await createDir('tauri', {dir: BaseDirectory.Desktop, recursive: true})   
        alert('file created!')
        setGreeting(temp)
    }

    return (
        <HStack>
            <Button colorScheme='facebook' 
            p={5}
            onClick={handleClick}>{greeting}</Button>
            <Button colorScheme='red' 
            p={5}
            onClick={() => {exit()}}>Shutdown!</Button>
        </HStack>
    )
}