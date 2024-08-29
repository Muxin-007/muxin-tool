use std::fs;
use std::io::{self};
use std::str;
use std::collections::HashMap;

pub fn search_file_by_keyword(path: &str, keyword: &str) -> Result<HashMap<String, Vec<usize>>, io::Error> {
    let mut results = HashMap::new();
    let entries = fs::read_dir(path)?; // 列出目录中的所有条目

    for entry in entries {
        let entry = entry?;
        let path = entry.path();

        if path.is_dir() {
            // 递归搜索子目录
            let sub_results = search_file_by_keyword(&path.to_str().unwrap(), keyword)?;
            results.extend(sub_results);
        }

        if path.is_file() {
            // 使用 fs::read 读取文件为字节数组，以处理潜在的非 UTF-8 文件
            let content = match fs::read(&path) {
                Ok(bytes) => {
                    // 尝试将字节数组转换为 UTF-8 字符串
                    match str::from_utf8(&bytes) {
                        Ok(content) => content.to_string(),
                        Err(_) => continue, // 如果无法转换为 UTF-8 字符串，跳过该文件
                    }
                }
                Err(_) => continue, // 如果读取文件失败，跳过该文件
            };

            let mut line_numbers = Vec::new();

            for (index, line) in content.lines().enumerate() {
                if line.contains(keyword) {
                    line_numbers.push(index + 1); // 将行号（从1开始）加入结果
                }
            }

            if !line_numbers.is_empty() {
                println!("找到文件: {}，关键字出现在行号: {:?}", path.display(), line_numbers);
                results.insert(path.to_str().unwrap().to_string(), line_numbers);
            }
        }
    }
    Ok(results)
}
