function showQuote() {
    const quotes = [
      "The world is a book, and those who do not travel read only one page.",
      "Travel is the only thing you buy that makes you richer.",
      "Jobs fill your pockets, but adventures fill your soul.",
      "To travel is to live.",
      "Life is short and the world is wide."
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
  }
  