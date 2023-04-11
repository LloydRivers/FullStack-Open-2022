import React, { useState } from 'react';

import { Authors, Books, NewBook } from './components';

function App() {
  const [page, setPage] = useState('authors');

  return (
    <div>
      <div>
        <button type="button" onClick={() => setPage('authors')}>
          authors
        </button>
        <button type="button" onClick={() => setPage('books')}>
          books
        </button>
        <button type="button" onClick={() => setPage('add')}>
          add book
        </button>
      </div>

      <Authors show={page === 'authors'} />

      <Books show={page === 'books'} />

      <NewBook show={page === 'add'} />
    </div>
  );
}

export default App;
