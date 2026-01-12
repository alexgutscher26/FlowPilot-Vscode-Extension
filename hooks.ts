import { useState } from 'react';
import { Book, Plus, Trash2, Edit2, Check, X } from 'lucide-react';

export default function BooksApp() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, read: true },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949, read: false },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, read: true },
  ]);
  
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', author: '', year: '' });
  const [filter, setFilter] = useState('all');

  const addBook = () => {
    if (newBook.title && newBook.author) {
      setBooks([...books, {
        id: Date.now(),
        title: newBook.title,
        author: newBook.author,
        year: parseInt(newBook.year) || new Date().getFullYear(),
        read: false
      }]);
      setNewBook({ title: '', author: '', year: '' });
    }
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const toggleRead = (id) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, read: !book.read } : book
    ));
  };

  const startEdit = (book) => {
    setEditingId(book.id);
    setEditForm({ title: book.title, author: book.author, year: book.year });
  };

  const saveEdit = (id) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, ...editForm, year: parseInt(editForm.year) || book.year } : book
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ title: '', author: '', year: '' });
  };

  const filteredBooks = books.filter(book => {
    if (filter === 'read') return book.read;
    if (filter === 'unread') return !book.read;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Book className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">My Book Library</h1>
          </div>

          <div className="bg-indigo-50 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Add New Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Book Title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Author"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <input
                type="number"
                placeholder="Year"
                value={newBook.year}
                onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                onClick={addBook}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Book
              </button>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All ({books.length})
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-4 py-2 rounded-lg transition ${filter === 'read' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Read ({books.filter(b => b.read).length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-4 py-2 rounded-lg transition ${filter === 'unread' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Unread ({books.filter(b => !b.read).length})
            </button>
          </div>

          <div className="space-y-3">
            {filteredBooks.map(book => (
              <div key={book.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition">
                {editingId === book.id ? (
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      value={editForm.author}
                      onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      value={editForm.year}
                      onChange={(e) => setEditForm({ ...editForm, year: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <button
                      onClick={() => saveEdit(book.id)}
                      className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={book.read}
                        onChange={() => toggleRead(book.id)}
                        className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                      />
                      <div>
                        <h3 className={`font-semibold text-lg ${book.read ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                          {book.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {book.author} • {book.year}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEdit(book)}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => deleteBook(book.id)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No books found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}