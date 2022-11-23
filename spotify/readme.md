# ORCID OAuth

Simple implementation of ORCID OAuth using ExpressJs and ReactJs.

## Installation

Install my-project with npm

```bash
  cd orcid-oauth
  npm install
  cd client/
  npm install
```

## Appendix

Make sure you use your own `CLIENT_ID` and `CLIENT_SECRET` in the `config.js` file. (remove the `.template` extension)

Also, make to add `http://localhost:3000/callback` this callback url in orcid developer console.

## Run Locally

Clone the project

```bash
  git clone https://github.com/pratikpakhale/orcid-oauth
```

Go to the project directory

```bash
  cd orcid-oauth
```

Install dependencies

```bash
  npm install
  cd client/
  npm install
```

Start the server [terminal 1]

```bash
  npm start
```

Start react app [terminal 2]

```bash
  cd client/
  npm start
```

## Process

We go to `https://sandbox.orcid.org/oauth/authorize?client_id=${client_id}&response_type=code&scope=/authenticate&redirect_uri=${callback}`
with our `client_id` and `callback_uri`,

This sends a 6-digit aplha code as a parameter to the `callback_uri`

- `http://localhost:3000/callback/?code=XXXXXX`

Now we acccept this code on our callback route and send it to our backend for verification and extraction of Name and ORCID throught `client_id` and `client_secret`

Now we use the ORCID wherever we wish :')

## API Reference

#### Get ORCID of authorised User

```http
  POST /token/:code
```

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `code`    | `string` | code generated by ORCID |

## Documentation

[ORCID Docs](https://github.com/ORCID/ORCID-Source/tree/development/orcid-api-web)