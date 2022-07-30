import { MetroDirection } from "../../context/types";
import { HStack, Text } from "@chakra-ui/react";
import LineIcon from "../LineIcon";

export default function(props: MetroDirection) {
    return (
        <HStack>
            <Text>乘坐</Text>
            <LineIcon lineNum={props.lineNum} color={props.color} isTextWhile={props.isTextWhite} />
            <Text>{props.lineName} {props.terminal}方向 {props.passbyStops} 站。</Text>
        </HStack>
    )
}