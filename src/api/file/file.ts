import { invoke } from "@tauri-apps/api/tauri";
import { Result } from "../common/model";

export const FileApi = {
    searchFile: (path: string, keyword: string): Promise<Result<[key: string, number[]]>> => {
        return invoke("search_file_by_keyword_api", { path, keyword })
    }
}