use crate::tool::file;
use std::collections::HashMap;

#[tauri::command(async)]
pub fn search_file_by_keyword_api(path: &str, keyword: &str) -> HashMap<String, Vec<usize>> {
    println!("start search!");
    // let result = file::search_file_by_keyword(path, keyword).unwrap();
    match file::search_file_by_keyword(path, keyword) {
        Ok(result) => result,
        Err(err) => {
            println!("异常：{}", err);
            HashMap::new() 
        }    
        
    }
    // result
}

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
