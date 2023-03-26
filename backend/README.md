## Authentication from scratch `TypeScript`

- Sign In
- Sign Up,

### Package list

| Package           | Description                                                                                                                                                                                                                                                                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ts-node-dev       | It restarts target node process when any of required files changes (as standard node-dev) but shares Typescript compilation process between restarts. This significantly increases speed of restarting comparing to node-dev -r ts-node/register ..., nodemon -x ts-node ... variations because there is no need to instantiate ts-node compilation each time. |
| typescript        | TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS                                                                                                                                                    |
| cross-env         | Run scripts that set and use environment variables across platforms                                                                                                                                                                                                                                                                                            |
| express           | Fast, unopinionated, minimalist web framework for Node.js.                                                                                                                                                                                                                                                                                                     |
| cors              | CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.                                                                                                                                                                                                                                     |
| bcrypt            | A library to help you hash passwords.                                                                                                                                                                                                                                                                                                                          |
| dotenv            | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.                                                                                                                                              |
| http-status-codes | Constants enumerating the HTTP status codes. Based on the Java Apache HttpStatus API.                                                                                                                                                                                                                                                                          |
| jsonwebtoken      | An implementation of JSON Web Tokens.                                                                                                                                                                                                                                                                                                                          |
| mongoose          | Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).                                                                                                                                                                                                                        |

<hr/>

### API Start

```bash
npm run dev
```

## API Endpoints

- POST: <http://localhost:3000/users> Sign Up
- POST: <http://localhost:3000/users/sessions> Sign In
- POST: <http://localhost:3000/track_history> Verification Request
- GET: <http://localhost:3000/artists > Get all artists
- POST: <http://localhost:3000/artists > Create artist
- GET: <http://localhost:3000/albums > Get all albums OR get albums by artist with query /albums?artist=
- POST: <http://localhost:3000/albums > Create album
- GET: <http://localhost:3000/albums/:id > Get album by id
- GET: <http://localhost:3000/tracks> Get all tracks OR get tracks by album with query /tracks?album=
- POST: <http://localhost:3000/track > Create track
