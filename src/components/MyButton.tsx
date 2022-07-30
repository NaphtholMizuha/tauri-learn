import { Button, HStack } from "@chakra-ui/react"
import { useState } from "react"
import { invoke, path } from "@tauri-apps/api"
import { exit } from "@tauri-apps/api/process"
// import { BaseDirectory, createDir, readTextFile, writeTextFile } from "@tauri-apps/api/fs"

export default function MyButton(props: {onFetch: () => {}}) {
    const [content, setContent] = useState("Update")

    async function handleClick() {
        const arr = JSON.stringify(await invoke('path_require_array'))
        setContent(arr)
        props.onFetch()
    }

    return (
        <HStack>
            <Button colorScheme='facebook' 
            p={5}
            onClick={handleClick}>{content}</Button>
            <Button colorScheme='red' 
            p={5}
            onClick={() => {exit()}}>Shutdown!</Button>
        </HStack>
    )
}