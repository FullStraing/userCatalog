import UserCard from '../components/UserCard'
import { useFavorites } from '../hooks/useFavorites'

function FavoritesPage() {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites()

  return (
    <section className="favorites-page">
      {favorites.length === 0 && (
        <p className="favorites-page__message">{'\u0421\u043f\u0438\u0441\u043e\u043a \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043f\u0443\u0441\u0442'}</p>
      )}
      <div className="favorites-page__grid">
        {favorites.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isFavorite
            onAdd={addToFavorites}
            onRemove={removeFromFavorites}
          />
        ))}
      </div>
    </section>
  )
}

export default FavoritesPage
