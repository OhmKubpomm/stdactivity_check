import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

export const useAuth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check for a JWT in local storage
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      // If a JWT is found, decode it and update the user state
      const decoded = jwt_decode(jwt)
      setUser(decoded)
    }
  }, [])

  return { user }
}
