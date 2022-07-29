import { Icon } from "@chakra-ui/react";

export default function MetroIcon(props: {lineNum: string, stopNum: number, isTextWhile?: boolean, color: string}) {
    let textColor = ''
    if (props.isTextWhile) {
        textColor = "white"
    } else {
        textColor = "black"
    }

    return (
        <Icon viewBox="0 0 40 20" w='3em' h='1.5em'>
            <rect x="0.5" y="0.5" width="39" height="19" rx="9.5" fill="white" stroke="black"/>
            <path d="M10 0.5H17.2181V19.5H10C4.7533 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5Z" fill={props.color} stroke="black"/>
            <text fill="black" xmlSpace="preserve" font-family="JetBrains Mono" font-size="14" font-weight="bold" letter-spacing="0em"><tspan x="19.3482" y="14.8212">{String(props.stopNum).padStart(2, '0')}</tspan></text>
            {props.lineNum.length === 1 ? <text fill={textColor} xmlSpace="preserve" font-family="JetBrains Mono" font-size="14" font-weight="bold" letter-spacing="0em"><tspan x="6" y="14.6812">{props.lineNum}</tspan></text> : <text opacity="0.9" fill={textColor} xmlSpace="preserve" font-family="JetBrains Mono" font-size="11" font-weight="bold" letter-spacing="0em"><tspan x="3" y="13.85">{props.lineNum}</tspan></text>}
        </Icon>
    )
}