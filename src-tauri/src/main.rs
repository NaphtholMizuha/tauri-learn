#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod metro;
use std::vec;

use metro::{MetroDirection, MetroStop, MetroPath};

#[tauri::command]
fn path_require_string() -> String {
  let sample = MetroPath::new(vec![
    MetroStop::new("GF", 10, "沙园", "#c4d600", false, true),
    MetroStop::new("8", 23, "磨碟沙", "#008c95", true, true),
    MetroStop::new("18", 7, "万顷沙", "#0047ba", true, false),
  ], vec![
    MetroDirection::new("GF", "广佛线", "沥滘", "#c4d600", false, 6),
    MetroDirection::new("8", "八号线", "万胜围", "#008c95", true, 7),
    MetroDirection::new("18", "十八号线", "万顷沙", "#0047ba", true, 4),
  ]);
  serde_json::to_string(&sample).unwrap_or_default()
}

#[tauri::command]
fn path_require_array() -> Vec<u8> {
  let sample = MetroPath::new(vec![
    MetroStop::new("GF", 10, "沙园", "#c4d600", false, true),
    MetroStop::new("8", 23, "磨碟沙", "#008c95", true, true),
    MetroStop::new("18", 7, "万顷沙", "#0047ba", true, false),
  ], vec![
    MetroDirection::new("GF", "广佛线", "沥滘", "#c4d600", false, 6),
    MetroDirection::new("8", "八号线", "万胜围", "#008c95", true, 7),
    MetroDirection::new("18", "十八号线", "万顷沙", "#0047ba", true, 4),
  ]);
  serde_json::to_vec(&sample).unwrap_or_default()
}

fn main() {

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![path_require_string])
    .invoke_handler(tauri::generate_handler![path_require_array])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
