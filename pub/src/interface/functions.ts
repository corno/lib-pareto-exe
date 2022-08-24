import * as pt from "pareto-core-types"

export type IStreamConsumer<Data, End> = {
    onData: ($: Data) => void
    onEnd: ($: End) => void
}

export type ArgumentError =
    | ["no arguments found", {}]
    | ["too many arguments found", {}]
    
export type Get1Argument = (

    $: pt.Array<string>,
    $i: {
        callback: ($: string) => void
        error: ($: ArgumentError) => void
    }
) => void

export type CreateUnexpectedStdInHandler = (
    $i: {
        onError: ($: string) => void
    }
) => IStreamConsumer<string, null>


export type Writer = {
    write: (str: string) => void
}

export type Log = (str: string) => void

export type CreateLogger = (
    $:{
        writer: Writer,
        newline: string
    }
) => Log
