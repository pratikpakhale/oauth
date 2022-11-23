import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

function Callback() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  const [orcid, setOrcid] = useState(null)

  const getOrcid = useCallback(async () => {
    if (!code) return

    const res = await fetch('/token/' + code) // rather than passing the token here, we could pass the code and the auth details like email and password to the server and then create a user based on the orcid id

    const data = await res.json()

    setOrcid(data.orcid)
    console.log(data.orcid)
  }, [code])

  useEffect(() => {
    getOrcid()
  }, [getOrcid])

  return <div>{orcid}</div>
}

export default Callback
