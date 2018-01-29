import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onAddBook: PropTypes.func.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    }

    render() {

        let shelfNames = [{ displayName: 'Currently Reading', name: 'currentlyReading'} , 
        { displayName: 'Want To Read', name: 'wantToRead'}, 
        { displayName: 'Read', name: 'read'}];

        let shelves = [];

        shelfNames.forEach((shelf) => {
            let filteredBooks = this.props.books.filter((book) => book.shelf === shelf.name)
            shelves.push({name: shelf.displayName, books: filteredBooks})
        })

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (
                            <Bookshelf key={shelf.name} title={shelf.name} books={shelf.books} moveBookToShelf={this.props.moveBookToShelf}/>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={this.props.onAddBook}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default ListBooks