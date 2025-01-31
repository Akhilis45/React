import React, { useEffect, useState } from "react";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items || []);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            Title: {book.volumeInfo.title} Published on:{" "}
            {book.volumeInfo.publishedDate}
            Description: {book.volumeInfo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
