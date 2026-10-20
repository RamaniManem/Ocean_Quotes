# 🌊 Ocean Quotes

A beautiful, responsive quote application inspired by the calmness of the ocean and the beauty of nature. Ocean Quotes helps users discover inspiring quotes, explore different categories, save their favorite quotes, and share meaningful thoughts.

## ✨ Features

- 🌊 **Beautiful Interface:** Peaceful ocean and landscape backgrounds.
- 💬 **Random Quotes:** Discover inspiring quotes with every interaction.
- 🗂️ **Quote Categories:** Explore quotes organized by different themes.
- ❤️ **Favorites:** Save favorite quotes for later.
- 💾 **Local Storage:** Favorite quotes remain saved after refreshing the page.
- 📤 **Share Quotes:** Share meaningful quotes with others.
- 📱 **Responsive Design:** Works on desktop, tablet, and mobile devices.
- 📶 **Offline Support:** Access the app shell offline after the app has been loaded and cached.
- 📲 **Installable PWA:** Install the application on supported devices and browsers.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- HTML5
- CSS3
- Local Storage API
- Vite PWA Plugin
- Workbox
- Unsplash images

## 📂 Project Structure

```text
ocean-quotes/
├── public/
│   ├── favicon.svg
│   └── other public assets
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

🚀 Getting Started
Prerequisites
Install the following tools before running the project:
- Node.js
- npm
- Visual Studio Code (recommended)
1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

Replace YOUR_GITHUB_REPOSITORY_URL with your actual GitHub repository URL.

Alternatively, download the project and open its folder in VS Code.
2. Open the Project Folder
Open the project directory in Visual Studio Code.
3. Install Dependencies
Open the VS Code terminal and run:
npm install

4. Start the Development Server
npm run dev

Open the local URL displayed in the terminal, usually:

http://localhost:5173/

🏗️ Production Build
To create an optimized production build, run:
npm run build

To preview the production build locally, run:
npm run preview

Open the preview URL displayed in the terminal, usually:

http://localhost:4173/

📶 Offline Support
Ocean Quotes uses Progressive Web App (PWA) functionality to support offline access.

The service worker caches application resources, and previously requested remote images may also be cached.

To test offline functionality:
1. Run npm run build.
2. Run npm run preview.
3. Open the application in your browser while online.
4. Open Developer Tools.
5. Navigate to the Application tab and select Service Workers.
6. Confirm that the service worker is activated.
7. Enable Offline mode and reload the application.
Note: Offline availability depends on which resources were cached before the internet connection was disabled. Remote images may not be available offline if they were not cached previously.

❤️ Favorites and Local Storage
Favorite quotes are stored in the browser's Local Storage.

This allows users to revisit saved quotes after refreshing the application or reopening it in the same browser profile.

🎨 Design
The application features:
- Ocean-inspired visual styling.
- Beautiful photographic backgrounds.
- A clean, readable quote card.
- Glassmorphism-inspired interface elements.
- Responsive layouts for different screen sizes.

🔒 Privacy
The application stores favorite quotes locally in the user's browser.

Remote background images are loaded from Unsplash, so displaying uncached images requires an internet connection.

🔮 Future Improvements
- Add more quote categories.
- Introduce daily quotes.
- Add search and filtering.
- Allow users to create their own quotes.
- Add additional customization options.
- Deploy the application publicly.

👩‍💻 Project Information
Project Name: Ocean Quotes
Internship: CodeNova Internship
Task: Task 2 — Ocean Quotes
Technology: React + TypeScript
Application Type: Progressive Web App (PWA)
