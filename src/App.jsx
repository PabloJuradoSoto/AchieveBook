import './App.css'

function App() {
  const books = [
    {
      id: 1,
      title: "Harry Potter y la piedra filosofal",
      pages: 50,
      cover: "./src/assets/books/hp1.jpg"
    },
    {
      id: 2,
      title: "Harry Potter y la cámara de los secretos",
      pages: 320,
      cover: "./src/assets/books/hp2.jpg"
    },
    {
      id: 3,
      title: "Harry Potter y el prisionero de Azkaban",
      pages: 400,
      cover: "./src/assets/books/hp3.jpg"
    }
  ];

  const PAGE_TO_PX_FACTOR = 0.1;

  return (
    <div className="book-container" style={{ display: "flex", gap: "1px", alignItems: "flex-end" }}>
      {
        books.map(book => {
          const calculatedWidth = Math.round(book.pages * PAGE_TO_PX_FACTOR);

          return (
            <div
              className={`book-${book.id}`}
              key={book.id}
              style={{
                width: `${calculatedWidth}px`,
                height: "250px",
                overflow: "hidden",
                background: "lightgray",
                backgroundImage: `url(${book.cover})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
              title={book.title}
            />
          )
        })
      }
    </div>
  );
}

export default App
