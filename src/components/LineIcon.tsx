import { Icon } from "@chakra-ui/react"

export default function LineIcon(props: {lineNum: string, isTextWhile?: boolean, color: string}) {
    const textColor = props.isTextWhile ? "white" : "black"
    let wordText
    if (props.lineNum.length === 2) {
        wordText = (<text fill={textColor} xmlSpace="preserve" font-family="JetBrains Mono" font-size="14" font-weight="bold" letter-spacing="0em"><tspan x="1.60547" y="15.04">{props.lineNum}</tspan></text>)
    } else if (props.lineNum.length === 1) {
        wordText = (<text fill={textColor} xmlSpace="preserve" font-family="JetBrains Mono" font-size="14" font-weight="bold" letter-spacing="0em"><tspan x="5.80273" y="15.04">{props.lineNum}</tspan></text>)
    } else if (props.lineNum.length === 3) {
        wordText = (<text fill={textColor} xmlSpace="preserve" font-family="JetBrains Mono" font-size="9" font-weight="bold" letter-spacing="0em"><tspan x="1.90527" y="13.24">{props.lineNum}</tspan></text>)
    } else if (props.lineNum.length === 4) {
        wordText = (<g>
                <text fill={textColor} xmlSpace="preserve" font-family="JetBrains Mono" font-size="8" font-weight="bold" letter-spacing="0em"><tspan x="2.80469" y="7.88">{props.lineNum.slice(0,-1)}</tspan></text>
                <text fill={textColor} xmlSpace="preserve" font-family="JetBrains Mono" font-size="12" font-weight="bold" letter-spacing="0em"><tspan x="6.40234" y="18.32">{props.lineNum.slice(-1)}</tspan></text>
        </g>)
    }

    return (
        <Icon viewBox="0 0 20 20" w='1.25em' h='1.25em'>
            <path d="M2 0.5H18C18.8284 0.5 19.5 1.17157 19.5 2V18C19.5 18.8284 18.8284 19.5 18 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18V2C0.5 1.17157 1.17157 0.5 2 0.5Z" fill={props.color} stroke="black"/>
            {wordText}
        </Icon>
    )
}