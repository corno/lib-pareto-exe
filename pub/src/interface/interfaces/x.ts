
export type IStreamConsumer<TData, TEnd> = {
    readonly  onData: ($: TData) => void
    readonly  onEnd: ($: TEnd) => void
}

export type IWriter = {
    readonly  write: ($: string) => void
}

export type ILog = ($: string) => void
