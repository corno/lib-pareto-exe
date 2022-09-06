import * as pt from "pareto-core-types"
import { ILog, IStreamConsumer, IWriter } from "../interfaces/x"
import { TArgumentError } from "../types/x"
    
export type PGetSingleArgument = (

    $: pt.Array<string>,
    $i: {
        callback: ($: string) => void
        error: ($: TArgumentError) => void
    }
) => void

export type FCreateUnexpectedStdInHandler = (
    $i: {
        onError: ($: string) => void
    }
) => IStreamConsumer<string, null>

export type FCreateLogger = (
    $:{
        writer: IWriter,
        newline: string
    }
) => ILog
