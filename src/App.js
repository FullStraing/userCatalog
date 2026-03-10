import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import UsersPage from './pages/UsersPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
