// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use muxin_tool::tauri_api::file_cmd;


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![file_cmd::search_file_by_keyword_api])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
