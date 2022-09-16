import * as api from "../../interface"

export const f_createLogger: api.FCreateLogger = ($) => {
    return (str) => {
        $.writer.write(str)
        $.writer.write($.newline)
    }
}
