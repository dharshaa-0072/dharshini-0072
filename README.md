# No Code App Builder

A real-time no-code app builder with AI-powered features for building applications in various domains. This app includes UI/UX designing tools and integrates with GitHub Copilot, GPT-4.0, and Gemini 2.0 Flash.

## Features

- User authentication (login/register)
- Project creation and management
- AI-powered project idea suggestions
- UI/UX designing tools
- Real-time collaboration
- Integration with GitHub Copilot, GPT-4.0, and Gemini 2.0 Flash

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/your-username/no-code-app-builder.git
    cd no-code-app-builder
    ```

2. Install backend dependencies
    ```sh
    cd backend
    npm install
    ```

3. Install frontend dependencies
    ```sh
    cd ../frontend
    npm install
    ```

4. Create a `.env` file in the `backend` directory and add your OpenAI API key
    ```env
    OPENAI_API_KEY=your_openai_api_key
    ```

### Running the App

1. Start the backend server
    ```sh
    npm run start
    ```

2. Start the frontend development server
    ```sh
    npm run client
    ```

3. Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.