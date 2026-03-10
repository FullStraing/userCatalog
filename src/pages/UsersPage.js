import { useMemo, useState } from 'react'
import UserCard from '../components/UserCard'
import { useUsers } from '../hooks/useUsers'
import { useFavorites } from '../hooks/useFavorites'

function UsersPage() {
  const { users, search, setSearch, loading, error } = useUsers()
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites()
  const [maxAge, setMaxAge] = useState('')

  const filteredUsers = useMemo(() => {
    const ageLimit = Number(maxAge)
    if (!maxAge || Number.isNaN(ageLimit)) {
      return users
    }
    return users.filter((user) => user.age <= ageLimit)
  }, [users, maxAge])

  return (
    <section className="users-page">
      <div className="users-page__filters">
        <input
          className="users-page__input"
          type="text"
          placeholder={'\u041f\u043e\u0438\u0441\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439'}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <input
          className="users-page__input"
          type="number"
          placeholder={'\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442'}
          value={maxAge}
          onChange={(event) => setMaxAge(event.target.value)}
          min="0"
        />
      </div>

      {loading && <p className="users-page__message">{'\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...'}</p>}
      {error && <p className="users-page__message">{error}</p>}
      {!loading && !error && filteredUsers.length === 0 && (
        <p className="users-page__message">{'\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b'}</p>
      )}

      <div className="users-page__grid">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isFavorite={favorites.some((favorite) => favorite.id === user.id)}
            onAdd={addToFavorites}
            onRemove={removeFromFavorites}
          />
        ))}
      </div>
    </section>
  )
}

export default UsersPage
