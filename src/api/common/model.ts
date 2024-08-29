export type Result<T> = {
    data: any | T;
    code: number | Code;
    msg: string;
}

enum Code {
    SUCCESS = 0,
    FAIL = 1,
    WARN = 2
}
