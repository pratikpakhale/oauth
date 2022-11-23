## Process

We go to `https://sandbox.orcid.org/oauth/authorize?client_id=${client_id}&response_type=code&scope=/authenticate&redirect_uri=${callback}`
with our `client_id` and `callback_uri`,

This sends a 6-digit aplha code as a parameter to the `callback_uri`

- `http://localhost:3000/callback/?code=XXXXXX`

Now we acccept this code on our callback route and send it to our backend for verification and extraction of Name and ORCID throught `client_id` and `client_secret`

Now we use the ORCID wherever we wish :')
