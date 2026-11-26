import React , { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Price from './Price';

const Book = ({ book }) => {
     const [img, setImg] = useState();
     const mountedRef = useRef(true);
     useEffect(() => {
        const image = new Image();
        image.src = book.url;
        image.onload = () => {
            setTimeout(() => { 
            if(mountedRef.current){
            setImg(image);}
        }, 300)
                
        }
    })
    return (
        <div className="book">
                {
                    img ? (
                    <>
                    <Link to={`/books/${book.id}`}>
                    <figure className="book__img--wrapper">
                        <img src={book.url} alt={book.title} className="book__img" />
                     </figure>
                </Link>
                <div className="book__title">
                    <Link to={`/books/${book.id}`} className="book__title--link">
                        {book.title}
                    </Link>
                </div>
               <Rating rating={book.rating} />
                <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                 </> ) : (
                 <> <div className="book__img--skeleton"></div>
                <div className="skeleton book__title--skeleton"></div>
                <div className="skeleton book__rating--skeleton"></div>
                <div className="skeleton book__price--skeleton"></div>
                 </> 
                )}
               
                {/*  */}
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