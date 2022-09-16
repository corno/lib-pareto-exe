import * as pt from "pareto-core-types"
import { ILog, IStreamConsumer, IWriter } from "../interfaces/x"
import { TArgumentError } from "../types/x"

export type PGetSingleArgument = (

    $: pt.Array<string>,
    $i: {
        readonly "callback": ($: string) => void
        readonly "error": ($: TArgumentError) => void
    }
) => void

export type FCreateUnexpectedStdInHandler = (
    $i: {
        readonly "onError": ($: string) => void
    }
) => IStreamConsumer<string, null>

export type FCreateLogger = (
    $: {
        readonly "writer": IWriter,
        readonly "newline": string
    }
) => ILog
