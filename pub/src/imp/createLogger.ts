import * as api from "../interface"

export const createLogger: api.CreateLogger = ($) => {
    return (str) => {
        $.writer.write(str)
        $.writer.write($.newline)
    }
}
