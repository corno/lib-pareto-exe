import * as api from "../../interface"

export const createLogger: api.FCreateLogger = ($) => {
    return (str) => {
        $.writer.write(str)
        $.writer.write($.newline)
    }
}
