# Task Board

## Installation

1. Install expo-cli globally

    ```bash
    npm install -g expo-cli
    ```

2. Create your Expo App

    ```bash
    npx create-expo-app@latest <project-name> --template
    ```

    Choose `Blank`

3. Go to the app directory

    ```bash
    cd <project-name>
    ```

4. Install NativeWind

    ```bash
    npm i nativewind
    npm i --include=dev tailwindcss@3.3.2
    ```

5. Create a tailwind.config.js

    ```bash
    npx tailwindcss init
    ```

6. Set up Tailwind CSS

    @tailwind.config.js

    ```bash
    /** @type {import('tailwindcss').Config} */

    module.exports = {
      content: [
        './App.{js,jsx,ts,tsx}',
        './<custom directory>/**/*.{js,jsx,ts,tsx}',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```

7. Configure NativeWind with Babel

    @babel.config.js

    ```bash
    module.exports = function (api) {
      api.cache(true);
      return {
        presets: ['babel-preset-expo'],
        plugins: ['nativewind/babel'],
      };
    };
    ```

## Get started

1. Run the app

    ```bash
    npx expo start
    ```
    