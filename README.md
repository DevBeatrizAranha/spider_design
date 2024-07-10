# Spider Design Project

This project is a clone of Figma, developed to learn and enhance my skills in React. It leverages modern web development technologies such as Next.js, Tailwind CSS, Liveblocks, and Docker. Additionally, it includes features for live collaboration and contribution.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-rendered applications and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Liveblocks**: A set of tools and APIs to create real-time collaborative experiences.
- **Docker**: A platform for developing, shipping, and running applications inside containers.

## Project Goals

- **Learn React**: Deepen understanding of React by building a complex, interactive application.
- **Use Next.js**: Gain experience with server-side rendering and static site generation.
- **Style with Tailwind CSS**: Utilize Tailwind CSS to create a responsive and modern UI.
- **Implement Real-time Collaboration**: Use Liveblocks to add real-time collaboration features, mimicking the functionality of Figma.
- **Containerize with Docker**: Use Docker to containerize the application for easier development and deployment.

## Features

- **Interactive Canvas**: A canvas where users can draw, move, and resize elements.
- **Real-time Collaboration**: Multiple users can work on the same canvas simultaneously, with changes appearing in real-time.
- **User Authentication**: Secure user login and registration system.
- **Version Control**: Ability to save and revert to previous versions of the canvas.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Contribution

This project also serves as a platform to practice and enhance contribution skills. Features and improvements are welcome, and the project follows a standard Git workflow for collaboration.

## Getting Started

To get started with the project:

1. Clone the repository:
    ```sh
    git clone https://github.com/DevBeatrizAranha/spider_design.git
    ```
2. Install dependencies:
    ```sh
    cd spider_design
    npm install
    ```
3. Run the development server:
    ```sh
    npm run dev
    ```
4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Using Docker

To run the project using Docker:

1. Build the Docker image:
    ```sh
    docker build -t spider_design .
    ```
2. Run the Docker container:
    ```sh
    docker run -p 3000:3000 spider_design
    ```
3. Open your browser and navigate to `http://localhost:3000` to see the application running in the Docker container.

## Learn More

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Liveblocks Documentation](https://liveblocks.io/docs)
- [Docker Documentation](https://docs.docker.com/)

Feel free to explore the project, suggest improvements, and contribute to make it better!
