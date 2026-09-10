import React from 'react';
import Book from './ui/Book';
import { books } from '../data';

const Featured = () => {
    console.log(books);
    const fiveStarBooks = books.filter(book => book.rating === 5).slice(0, 4);
        console.log(fiveStarBooks);
    
    return(    
       <section id="features">
            <div className="container">
                    <div className="row">
                        <h2 className="section__title">
                            Featured <span className="purple">Books</span>
                        </h2>
                        <div className="books">
                        {books
                        .filter(book => book.rating === 5)
                        .slice(0, 4)
                        .map((book => ( <Book book={book} key={book.id}/> )))

                        }

                       {/* <Book title="Atomic Habits" image="https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg" price={10.00} rating={4.5} />
                       <Book title="Can't Hurt Me" image="https://m.media-amazon.com/images/I/81gTRv2HXrL._AC_UF1000,1000_QL80_.jpg" price={15.00} rating={5} />
                       <Book title="Deep Work" image="https://m.media-amazon.com/images/I/812R%2BZVZJNL._AC_UF1000,1000_QL80_.jpg" price={20.00} rating={4.8} />
                        <Book title="Deep Work" image="https://m.media-amazon.com/images/I/812R%2BZVZJNL._AC_UF1000,1000_QL80_.jpg" price={20.00} rating={4.8} /> */}
                        </div>
                    </div>
            </div>
        </section>
      
    );

}

export default Featured;

