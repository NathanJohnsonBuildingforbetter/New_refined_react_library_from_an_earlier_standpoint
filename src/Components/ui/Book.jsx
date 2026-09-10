import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
             <div className="book">
                <Link to={`/books/${book.id}`}>
                    <figure className="book__img--wrapper">
                        <img src={book.url} alt={book.title} className="book__img"/>
                        
                    </figure>
                </Link>
                <div className="book__title">
                    <Link to={`/books/${book.id}`} className="book__title--link">
                        {book.title}
                    </Link>
                </div>
                <div className="book__ratings">
                   {
                     new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}  />)
                   }
                   {
                    !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />
                   }
                </div>
                <div className="book__price">
                    {book.salePrice ? (
                     <>
                       <span className="book__price--normal"> ${book.originalPrice.toFixed(2)}</span>
                       ${book.salePrice}
                     </>) : (`$${book.originalPrice.toFixed(2)}`)}
                   
                </div>
            </div>
    );
};

export default Book;

//   <div className="book">
//             <a href="">
//                 <figure className="book__img--wrapper">
//                     <img src={image} alt={title} className="book__img"/>
//                 </figure>
//             </a>
//             <div className="book__title">
//                 <a href={`/books/${title.toLowerCase().replace(/\s+/g, '-')}`} className="book__title--link">
//                     {title}
//                 </a>
//             </div>
//             <div className="book__ratings">
//                 {[...Array(5)].map((_, i) => (
//                     <FontAwesomeIcon key={i} icon={i < rating ? "star" : "star-half-alt"} />
//                 ))}
//             </div>
//             <div className="book__price">
//                 <span className="book__price--normal">${price.toFixed(2)}</span>
//             </div>
//         </div>