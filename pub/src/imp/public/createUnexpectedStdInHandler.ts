import * as api from "../../interface"

export const createUnexpectedStdInHandler: api.FCreateUnexpectedStdInHandler = ($i) => {
    let reported = false
    return {
        onData: () => {
            $i.onError("unexpected data on stdin")
            reported = true
        },
        onEnd: () => {

        },
    }

}