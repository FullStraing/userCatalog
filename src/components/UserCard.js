function UserCard({ user, isFavorite, onAdd, onRemove }) {
  return (
    <article className="user-card">
      <img className="user-card__image" src={user.image} alt={user.firstName} />
      <div className="user-card__content">
        <h2 className="user-card__name">
          {user.firstName} {user.lastName}
        </h2>
        <p className="user-card__field">{'\u0412\u043e\u0437\u0440\u0430\u0441\u0442'}: {user.age}</p>
        <p className="user-card__field">Email: {user.email}</p>
        <p className="user-card__field">{'\u0422\u0435\u043b\u0435\u0444\u043e\u043d'}: {user.phone}</p>
        <p className="user-card__field">{'\u0413\u043e\u0440\u043e\u0434'}: {user.address.city}</p>
      </div>
      <div className="user-card__actions">
        {isFavorite ? (
          <button className="user-card__button user-card__button_remove" onClick={() => onRemove(user.id)}>
            {'\u0423\u0434\u0430\u043b\u0438\u0442\u044c'}
          </button>
        ) : (
          <button className="user-card__button user-card__button_add" onClick={() => onAdd(user)}>
            {'\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435'}
          </button>
        )}
      </div>
    </article>
  )
}

export default UserCard
