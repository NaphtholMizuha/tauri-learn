#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn greet(name: &str) -> String {
  name.to_string()
}



#[tauri::command]
async fn my_read_file(path: std::path::PathBuf) -> String {
  std::fs::read_to_string(path).unwrap()
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .invoke_handler(tauri::generate_handler![my_read_file])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
