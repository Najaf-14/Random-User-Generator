# Random User Generator

A simple and interactive React application that fetches and displays random user profiles from the [RandomUser.me](https://randomuser.me) API. Users can view details such as the profile photo, name, phone number, gender, and location, and easily switch to another random user with the click of a button.

## Features

- Fetches real-time random user data from the RandomUser.me API.
- Displays user information in a clean, responsive Bootstrap card.
- Includes a **Change User** button to dynamically load a new random profile.
- Built with functional React components and modern hooks (`useState`, `useEffect`).
- Responsive and centered layout.

## Tech Stack

- [React](https://react.dev/) (v19)
- [React Bootstrap](https://react-bootstrap.github.io/) (v2.10)
- [Bootstrap](https://getbootstrap.com/) (v5.3)
- [Create React App](https://create-react-app.dev/)
- [RandomUser.me API](https://randomuser.me/)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (>= 14 recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd random-user-gen
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Project Structure

```
random-user-gen/
├── public/                  # Static assets
├── src/
│   ├── api/
│   │   └── getData.js       # API utility to fetch random user data
│   ├── Component/
│   │   └── Card.jsx         # UserCard component (Bootstrap card UI)
│   ├── App.js               # Main application component
│   ├── index.js             # Application entry point
│   └── ...                  # Other boilerplate files
├── package.json
└── README.md
```

## API Reference

This application uses the **[RandomUser.me](https://randomuser.me)** API.

- **Endpoint:** `https://randomuser.me/api/`
- **Method:** `GET`
- **Returns:** A JSON object containing an array of random user results.

Example response fields used in this app:

| Field | Description |
|-------|-------------|
| `picture.large` | User's profile image |
| `name.first` | User's first name |
| `cell` | User's phone number |
| `gender` | User's gender |
| `location.city` | User's city |

## Available Scripts

In the project directory, you can run:

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000). |
| `npm test` | Launches the test runner in interactive watch mode. |
| `npm run build` | Builds the app for production to the `build` folder. |
| `npm run eject` | Ejects the app from Create React App (one-way operation). |

## License

This project is open-source and available under the [MIT License](LICENSE).

## Author

Created by **[Your Name]**.

Feel free to contribute, raise issues, or suggest improvements!

