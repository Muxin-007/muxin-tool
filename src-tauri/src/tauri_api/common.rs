use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct ResResult<T> {
    data: T,
    code: Code,
    msg: String,
}

impl<T> ResResult<T> {
    fn new(data: T, code: Code, msg: String) -> ResResult<T> {
        ResResult { data, code, msg }
    }

    pub fn success(data: T) -> ResResult<T> {
        ResResult::new(data, Code::SUCCESS, "".to_string())
    }

    pub fn fail(data: T) -> ResResult<T> {
        ResResult::new(data, Code::FAIL, "".to_string())
    }

    pub fn warn(data: T) -> ResResult<T> {
        ResResult::new(data, Code::WARN, "".to_string())
    }

    pub fn success_with_msg(data: T, msg: String) -> ResResult<T> {
        ResResult::new(data, Code::SUCCESS, msg)
    }

    pub fn fail_with_msg(data: T, msg: String) -> ResResult<T> {
        ResResult::new(data, Code::FAIL, msg)
    }

    pub fn warn_with_msg(data: T, msg: String) -> ResResult<T> {
        ResResult::new(data, Code::WARN, msg)
    }

}

#[derive(Serialize, Deserialize)]
enum Code {
    SUCCESS = 0,
    FAIL = 1,
    WARN = 2,
}
