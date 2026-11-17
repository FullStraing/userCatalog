# User Catalog — Каталог пользователей

A React user catalog (Create React App + React Router). Users come from the
public [DummyJSON](https://dummyjson.com) API; the UI is in Russian.

## What it does

- **Users page (`/`)** — a grid of user cards (photo, name, age, email,
  phone, city) loaded from `https://dummyjson.com/users`
- **Search** — typing in the search box queries
  `https://dummyjson.com/users/search?q=...`
- **Max-age filter** — a second input keeps only users with `age <=` the
  entered value
- **Favorites (`/favorites`)** — add any user with «В избранное», remove
  with «Удалить»; the header shows the favorites count. Favorites are
  kept in React context (in-memory, de-duplicated by user id) and reset
  on reload.
- Loading and error states («Загрузка...», «Failed to load users»,
  «Пользователи не найдены»).

## Structure

```
src/
  App.js                      router: / -> UsersPage, /favorites -> FavoritesPage
  pages/
    UsersPage.js              search + max-age filter + user grid
    FavoritesPage.js          saved users grid
  components/
    Header.js                 title + nav with favorites count
    UserCard.js               photo, name, age, email, phone, city + fav button
  contexts/
    UsersContext.js           fetches from DummyJSON, holds users/search/loading/error
    FavoritesContext.js       favorites list + add/remove
  hooks/
    useUsers.js / useFavorites.js   context accessors
  index.js / index.css        entry point (both providers) / styles
```

## Run

```bash
npm install
npm start     # http://localhost:3000
```

```bash
npm test      # test runner (watch mode)
npm run build # production build into build/
```
