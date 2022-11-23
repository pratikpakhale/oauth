function Auth() {
  const client_id = 'APP-7G8IOFTX19XJR4I5'
  const callback = 'http://localhost:3000/callback'
  const endpoint = `https://sandbox.orcid.org/oauth/authorize?client_id=${client_id}&response_type=code&scope=/authenticate&redirect_uri=${callback}`
  window.location.replace(endpoint)

  return <div>Auth</div>
}

export default Auth
