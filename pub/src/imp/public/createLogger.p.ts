import * as api from "../../interface"

export const f_createLogger: api.FCreateLogger = ($, $i) => {
    const config = $
    return ($) => {
        $i.write($)
        $i.write(config.newline)
    }
}
