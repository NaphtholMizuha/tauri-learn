import { Text, HStack } from "@chakra-ui/react"
import { MetroStop } from "../../context/types"
import MetroIcon from "../MetroIcon"
export default function TransferShower(props: MetroStop) {
    return (
        <HStack>
            <Text>在</Text>
            <MetroIcon lineNum={props.lineNum} 
                stopNum={props.stopNum} 
                color={props.color} 
                isTextWhile={props.isTextWhite}
            />
            <Text>{props.stopName} 下车，{props.isTransfer ? ('并换乘'):('到达终点')}。</Text>
            
        </HStack>
    )
}