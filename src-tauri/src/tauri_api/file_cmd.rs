use crate::tauri_api::common::ResResult;
use crate::tool::file;
use std::collections::HashMap;

#[tauri::command(async)]
pub fn search_file_by_keyword_api(
    path: &str,
    keyword: &str,
) -> ResResult<HashMap<String, Vec<usize>>> {
    println!("start search!");
    // let result = file::search_file_by_keyword(path, keyword).unwrap();
    match file::search_file_by_keyword(path, keyword) {
        Ok(result) => ResResult::success(result),
        Err(err) => {
            println!("异常：{}", err);
            // HashMap::new()
            ResResult::fail_with_msg(HashMap::new(), err.to_string())
        
        }
    }
}