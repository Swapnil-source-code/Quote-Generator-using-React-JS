import { useState, useEffect } from 'react';
import './QuoteGenerator-style.css'


const QuoteGenerator = () => {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const api_url = 'https://api.quotable.io/random';


  const getQuote = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    getQuote(api_url);
  }, []);
  

  const tweet = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote}  ----by${author}`,
      'tweet window',
      'height=350, width=600'
    );
  };

  const generateQuote = () => {
    getQuote(api_url);
  };

  return (
    <>
      <div className="container">
        <div className="quote-box">
          <h2>Quote of the Day</h2>
          <blockquote id="quote">{quote}</blockquote>
          <span id="author">{author}</span>
          <div>
            <button onClick={generateQuote}>New Quote</button>
            <button onClick={tweet}>Tweet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuoteGenerator