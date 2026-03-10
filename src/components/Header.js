import { Link } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites'

function Header() {
  const { favorites } = useFavorites()

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{'\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439'}</h1>
        <nav className="header__nav">
          <Link className="header__link" to="/">
            {'\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438'}
          </Link>
          <Link className="header__link" to="/favorites">
            {'\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435'} ({favorites.length})
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
