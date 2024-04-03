import { useState, useEffect } from 'react';
import axios from 'axios';

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://dev.iqrakitab.net/api/books');
        setBooks(response.data.data); // Assuming books are stored in response.data.data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error };
};

export default useBooks;
