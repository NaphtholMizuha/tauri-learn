import { Box, Container, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { MetroPath, MetroStop, MetroDirection } from "../../context/types";
import DirectionShower from "./DirectionShower";
import TransferShower from "./TransferShower";
import MetroIcon from "../MetroIcon";

export default function(props: {path: MetroPath}) {
    let info:(MetroStop | MetroDirection | null)[] = []
    for (let i = 0; i < props.path.directions.length; i++) {
        info.push(props.path.directions[i])
        info.push(null)
        info.push(props.path.stops[i])
        info.push(null)
    }
    info.pop()

    return (
        <Container maxW="2xl" borderWidth="2px" borderRadius='lg'>
            <VStack p={4} w='100%'>
                {info.map((item) => {
                    if (!item) {
                        return (<Divider />)
                    }
                    else if ("stops" in item) {
                        return (<DirectionShower lineName={item.lineName}
                                                lineNum={item.lineNum}
                                                isTextWhite={item.isTextWhite}
                                                color={item.color}
                                                terminal={item.terminal}
                                                stops={item.stops}
                                />)
                    } else{
                        return (<TransferShower lineNum={item.lineNum}
                                                color={item.color}
                                                isTextWhite={item.isTextWhite}
                                                isTransfer={item.isTransfer}
                                                stopName={item.stopName}
                                                stopNum={item.stopNum}
                                />)
                    }
                })}
            </VStack>
        </Container>
    )
}
/*
          
*/