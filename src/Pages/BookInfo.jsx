import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Rating from '../Components/ui/Rating';
import Price from '../Components/ui/Price';
import Book from '../Components/ui/Book';

const BookInfo = ({ books, addToCart }) => {
  const { id }= useParams()
  const book = books.find(book => +book.id == +id)
  // console.log(book)
  return (
   <div id="books__body">
    <main id="books__main">
      <div className="books__container">
        <div className="row">
          <div className="book__selected--top">
            <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/books" className="book__link">
              <h2 className="book__selected--title--top">Books</h2>
            </Link>
          </div>
          <div className="book__selected">
            <figure className="book__selected--figure">
              <img src={book.url} alt="Book Cover" className="book__selected--img" />
            </figure>
            <div className="book__selected--description">
              <h2 className="book__selected--title">{book.title}</h2>
              <Rating rating={book.rating} />
              <div className="book__select--price">
                <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
              </div>
              <h3 className="book__summary--title">
                Summary
              </h3>
              <div className="book__summary--para">
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio voluptates recusandae! Molestias excepturi, delectus quibusdam assumenda tempore similique quam maxime praesentium quia! Obcaecati, pariatur dolore. Tempora, repellat. Voluptate, odio.
                </p>                
              </div>
               <div className="book__summary--para">
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio voluptates recusandae! Molestias excepturi, delectus quibusdam assumenda tempore similique quam maxime praesentium quia! Obcaecati, pariatur dolore. Tempora, repellat. Voluptate, odio.
                </p>             
              </div>
              <button className="btn" onClick={() => addToCart(book)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="books__container">
        <div className="row">
          <div className="book__selected--top">
            <h2 className="book__selected--title--top">
              Recommended Books
            </h2>
          </div>
          <div className="books">
          {
            books.filter(book => book.rating === 5 && +book.id !== +id)
            .slice(0,4)
            .map((book) => (<Book book={book} key ={book.id} />))
          }
          </div>

        </div>
      </div>
    </main>
   </div>
  );
};

export default BookInfo;
