import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {

    static PropTypes = {
        moveBookToShelf: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    moveBook = (event, book) => {
        this.props.moveBookToShelf(book, event.target.value);
    }

    render() {

        const { book } = this.props;

        const currentShelf = book.shelf ? book.shelf : "none";

        return (           
            <div className="book-shelf-changer">
                <select value={currentShelf} onChange={(event) => (this.moveBook(event, book))}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookshelfChanger