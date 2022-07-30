use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub struct MetroStop {
    line_num: String,
    stop_num: i32,
    stop_name: String,
    color: String,
    is_text_white: bool,
    is_transfer: bool,
}

impl MetroStop {
    pub fn new(line_num: &str,
        stop_num: i32,
        stop_name: &str,
        color: &str,
        is_text_white: bool,
        is_transfer: bool) -> Self {
            Self { line_num: line_num.to_string(), 
                stop_num, 
                stop_name: stop_name.to_string(),
                color: color.to_string(),
                is_text_white,
                is_transfer
            }
        }
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub struct MetroDirection {
    line_num: String,
    line_name: String,
    terminal: String,
    color: String,
    is_text_white: bool,
    passby_stops: i32,
}

impl MetroDirection {
    pub fn new(line_num: &str,
        line_name: &str,
        terminal: &str,
        color: &str,
        is_text_white: bool,
        passby_stops: i32) -> Self {
            Self { line_num: line_num.to_string(),
                line_name: line_name.to_string(),
                terminal: terminal.to_string(), 
                color: color.to_string(), 
                is_text_white,
                passby_stops }
        } 
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub struct MetroPath {
    stops: Vec<MetroStop>,
    directions: Vec<MetroDirection>,
}

impl MetroPath {
    pub fn new(stops: Vec<MetroStop>,
        directions: Vec<MetroDirection>) -> Self {
            Self { stops, directions }
        }
}

pub struct Color {
    r: u8,
    g: u8,
    b: u8,
}

impl Color {
    pub fn new(r: u8, g: u8, b: u8) -> Self {
        Self { r, g, b }
    }

    pub fn to_string(&self) -> String {
        format!("#{:02x}{:02x}{:02x}", self.r, self.g, self.b)
    }
}

