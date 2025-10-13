# 🌦️ Weather App

A simple and responsive web app that displays **real-time weather information** for any city using the **OpenWeatherMap API**. Built with **React.js**, **CSS**, and **OpenWeatherMap API**.

## 🚀 Live Demo

👉 [View Live](https://weather-app-naveen.netlify.app/)

## 🧩 Features

- 🌍 Search weather by city name  
- 🌤️ Displays current temperature, humidity, and wind speed  
- 🕓 Shows real-time date and weather description  
- 🧭 Default city loads on startup  
- ⚠️ Handles errors for invalid or empty city names  
- 💫 Smooth gradient UI with responsive design  
- 📱 Fully responsive for all screen sizes  

## 🛠️ Tech Stack

- **React.js**  
- **JavaScript (ES6+)**  
- **CSS3 (Responsive & Animated UI)**  
- **OpenWeatherMap API**

## 📁 Project Structure

Weather-App/  
├── src/  
│   ├── components/  
│   │   ├── Weather.js  
│   │   └── SearchBar.js  
│   ├── App.js  
│   ├── index.js  
│   └── App.css  
├── package.json  
└── README.md

## 📸 Preview

![Weather App Screenshot](https://github.com/user-attachments/assets/e1f200de-3540-4b97-be2f-f4ba1c70f2f7)

## 🧑‍💻 How to Run Locally

1. Clone the repository:  
   git clone https://github.com/Stack-Naveen/Weather-App.git  
2. Navigate to the project directory:  
   cd Weather-App  
3. Install dependencies:  
   npm install  
4. Start the app:  
   npm start  

> 💡 The app will start automatically at http://localhost:3000

## 🔑 API Setup

This app uses the **OpenWeatherMap API**.  
1. Go to https://openweathermap.org/api  
2. Create a free account and generate your **API key**  
3. Open `Weather.js` and replace the placeholder with your key:  
   const apiKey = "YOUR_API_KEY_HERE";

## ⚙️ Code Highlights

**Weather.js** - Fetches weather data from the API, displays temperature, humidity, wind speed, and includes loading and error handling states.  

**SearchBar.js** - Input field for city name and a “Search” button that triggers the weather fetch.  

**App.css** - Gradient background card design, button hover animations, mobile-friendly layout.

## 🌍 Example Cities to Try

- Vijayawada  
- London  
- New York  
- Tokyo  
- Paris

## 🪪 License

This project is licensed under the **MIT License** — see the LICENSE file for details.

## 🙌 Acknowledgements

Special thanks to **Naveen** for creating this elegant and simple Weather App 🌦️

## 💼 Author

**Talupula Naveen**  
🔗 https://github.com/stack-naveen  
📧 stylistar05@gmail.com
