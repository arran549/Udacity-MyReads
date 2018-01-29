import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    }

    render() {

        const { book, moveBookToShelf } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                            style={{ width: 128, 
                                    height: 193, 
                                    backgroundImage: `url(${book.imageLinks.thumbnail})` 
                            }}>
                    </div>
                    <BookshelfChanger book={book} moveBookToShelf={moveBookToShelf} />
                </div>
                <BookDetails title={book.title} authors={book.authors} />
            </div>
        )
    }
}

export default Book