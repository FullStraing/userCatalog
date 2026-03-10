import { useEffect, useState } from 'react'
import { UsersContext } from './usersContextValue'

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let isCancelled = false

    const loadUsers = async () => {
      setLoading(true)
      setError('')

      const endpoint = search.trim()
        ? `https://dummyjson.com/users/search?q=${encodeURIComponent(search.trim())}`
        : 'https://dummyjson.com/users'

      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error('Request failed')
        }

        const data = await response.json()

        if (!isCancelled) {
          setUsers(data.users || [])
        }
      } catch {
        if (!isCancelled) {
          setUsers([])
          setError('Failed to load users')
        }
      } finally {
        if (!isCancelled) {
          setLoading(false)
        }
      }
    }

    loadUsers()

    return () => {
      isCancelled = true
    }
  }, [search])

  return (
    <UsersContext.Provider value={{ users, search, setSearch, loading, error }}>
      {children}
    </UsersContext.Provider>
  )
}
