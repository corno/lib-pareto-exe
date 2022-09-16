import * as api from "../../interface"
import * as pm from "pareto-core-state"
import * as pt from "pareto-core-types"



export const p_getSingleArgument: api.PGetSingleArgument = (
    $: pt.Array<string>,
    $i: {
        callback: ($: string) => void
        error: ($: api.TArgumentError) => void
    }
) =>{
    const stack = pm.createStack($)

    stack.pop(
        ($) => {
            stack.pop(
                () => {
                    $i.error(["too many arguments found", null])
                },
                () => {
                    $i.callback($)
                }
            )
        },
        () => {
            $i.error(["no arguments found", null])
        }
    )
}