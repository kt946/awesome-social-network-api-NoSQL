# The Awesome Social Network API
[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Description

For this project, I built an API for a social network application using my knowledge of NoSQL, JavaScript, Express, MongoDB, and Mongosse ODM. This back-end application uses a NoSQL database that allows developers to view, create, update, and delete users and thoughts. Developers are also able to add and remove friends to a user's friend list as well as create and remove reactions to thoughts. This challenge expanded my knowledge on NoSQL databases and how full-stack applications can benefit from the flexibility of unstructured data.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Walkthrough Video](#walkthrough-video)
* [Screenshots](#screenshots)
* [Technologies Used](#technologies-used)
* [Credits](#credits)
* [Links](#links)
* [License](#license)

## Installation

To install this application on your local machine:
- Clone the application's repository and place it into a local directory on your computer.
- Ensure that your computer has node.js installed. To check the current version installed, type:
```
    node -v
```
- Ensure that MongoDB is installed on your computer.
- Open a command-line interface (VS Code, Git Bash, etc.) and navigate to the directory containing the application's server.js.
- In the command-line, download the application's dependencies by typing the following command:
```
    npm install
```

## Usage

- To start the server, type the following command:
```
npm start
```
- While the server is running, open Insomnia to test out the different routes and CRUD methods.
- You can view all users, view a single user by id, create, update and delete a user from the database.
- You can add and remove a user from another user's friend list.
- You can view all thoughts, view a single thought by id, create, update and delete a thought from the database.
- You can add and remove a reaction from a thought.

## Walkthrough Video

The following video demonstrate the application's appearance and functionality.

[Link to walkthrough video](https://watch.screencastify.com/v/sECPEzuHfOMcxTIjP0vT)

## Screenshots

The following images demonstrate the application's appearance and functionality.

- Image of GET route for a single user by id
<img width="960" alt="get_route_demo" src="https://user-images.githubusercontent.com/103476893/188060775-60250d0c-b2fb-451a-9021-edbffe815bfc.png">

- Image of POST route for adding a user to another user's friend list
<img width="960" alt="post_route_friend_demo" src="https://user-images.githubusercontent.com/103476893/188060981-90ac4770-95b2-48e9-865b-6965702d20b9.png">

- Image of GET route for all thoughts
<img width="960" alt="get_route_thought_demo" src="https://user-images.githubusercontent.com/103476893/188061089-9d4dd2a4-db15-4652-8f93-da7b328e37fb.png">

- Image of PUT route for updating a thought
<img width="960" alt="put_route_thought_demo" src="https://user-images.githubusercontent.com/103476893/188061095-7e6fc51f-da9d-4762-aab6-f799f0431cc2.png">

- Image of POST route for adding a reaction to a thought
<img width="960" alt="post_route_reaction_demo" src="https://user-images.githubusercontent.com/103476893/188061097-3cfec550-dc7f-4ef4-9746-bedde2cac786.png">

## Technologies Used

- JavaScript
- Express
- NoSQL
- MongoDB
- Mongoose ODM

## Credits

- [kt946](https://github.com/kt946)

## Links

- [Link to GitHub repository](https://github.com/kt946/awesome-social-network-api-NoSQL)

## License

This application is covered under the [MIT](https://opensource.org/licenses/MIT) License.
