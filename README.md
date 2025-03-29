# Task Manager App

A simple and intuitive task management application built with React Native and Expo.

#Video-Show Case
https://youtu.be/MUgAz5Zm5fA

## Features

- Add new tasks with descriptions
- Mark tasks as complete/incomplete
- Delete tasks from the list
- Clean and intuitive user interface
- Visual feedback for user interactions

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device (for testing)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TaskManager
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npx expo start
```

4. Run the app:
- Scan the QR code with your mobile device using the Expo Go app
- Press 'a' to open on Android emulator
- Press 'i' to open on iOS simulator

## Usage

1. To add a new task:
   - Tap the "Add Task" button
   - Enter the task description
   - Press "Add" or "Enter" to save

2. To mark a task as complete:
   - Tap the checkbox next to the task

3. To delete a task:
   - Swipe left on the task
   - Tap the delete button

## Technologies Used

- React Native
- Expo
- TypeScript
- React Native's built-in components

## Project Structure

- `app/` - Main application screens and navigation
- `components/` - Reusable UI components
- `constants/` - App-wide constants and theme
- `hooks/` - Custom React hooks
