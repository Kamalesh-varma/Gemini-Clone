# React + Vite

🌟 Overview
This project is a sleek and interactive Gemini AI chat application clone built with React. It provides a simple, modern interface to converse with the powerful Google Gemini AI model, featuring a responsive design and intuitive user experience.

✨ Features

Interactive Chat Interface: Send prompts and receive AI responses in real-time.
Recent Prompts History: A dynamic sidebar to view and re-send your past queries.
Example Prompt Cards: Engaging cards on the home screen to kickstart your conversations.
"Send on Enter": Submit prompts effortlessly by pressing the Enter key in the input field.
[Add any other cool features you've implemented, e.g., "Dark Mode Toggle," "Text-to-Speech for AI Responses," "Card click to send prompt"]

🚀 Technologies Used
React: A declarative, component-based JavaScript library for building user interfaces.
Vite: A blazing-fast build tool that offers an incredibly quick development server and optimized production builds.
Google Gemini API: The core AI model providing intelligent responses.
CSS: For styling and animations, ensuring a clean and modern look.

📦 Installation & Local Setup
Follow these steps to get a copy of the project running on your local development machine.

1. Prerequisites
Ensure you have the following installed on your system:

Node.js (LTS version recommended)
npm (Node Package Manager, usually comes with Node.js) or Yarn
2. Get a Google Gemini API Key
Navigate to the Google AI Studio and sign in with your Google account.
Generate a new API Key if you don't have one already.
Copy this API key.
3. Clone the Repository
Open your terminal or command prompt and run:

Bash

git clone :
cd gemini-clone
(Remember to replace your-username/gemini-clone.git with the actual URL of your GitHub repository).

4. Configure Environment Variables
In the root of your project directory, create a new file named .env.
Add your Google Gemini API key to this file:
VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
