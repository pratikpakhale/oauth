function Auth() {
  const base_url = 'https://accounts.spotify.com'

  const client_id = '72f02e839dc94b738516da180c9526e9'
  const callback = 'http://localhost:3000/callback'
  const scope = 'user-top-read'

  const query_params = new URLSearchParams({
    client_id,
    response_type: 'code',
    redirect_uri: callback,
    scope,
  })

  const endpoint = `${base_url}/authorize?${query_params}`

  window.location.replace(endpoint)

  return <div>Auth</div>
}

export default Auth
