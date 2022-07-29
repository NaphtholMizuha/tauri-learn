type MetroStop = {
    lineNum: string,
    stopNum: number,
    stopName: string,
    color: string
    isTextWhite: boolean,
    isTransfer: boolean,
}

type MetroDirection = {
    lineNum: string,
    lineName: string,
    terminal: string,
    color: string,
    isTextWhite: boolean,
    stops: number,
}

type MetroPath = {
    stops: MetroStop[]
    directions: MetroDirection[]
}

export type {MetroPath, MetroStop, MetroDirection}