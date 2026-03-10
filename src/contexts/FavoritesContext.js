import { useState } from 'react'
import { FavoritesContext } from './favoritesContextValue'

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  const addToFavorites = (user) => {
    setFavorites((previousFavorites) => {
      const exists = previousFavorites.some((favorite) => favorite.id === user.id)
      if (exists) {
        return previousFavorites
      }
      return [...previousFavorites, user]
    })
  }

  const removeFromFavorites = (id) => {
    setFavorites((previousFavorites) =>
      previousFavorites.filter((favorite) => favorite.id !== id),
    )
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
