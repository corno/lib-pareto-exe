import * as pt from "pareto-core-types"
import { ILog, IStreamConsumer, IWriter } from "../interfaces/interfaces.p"
import { TArgumentError } from "../types/types.p"

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
        readonly "newline": string
    },
    $i: IWriter,
) => ILog
