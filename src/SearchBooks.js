import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'


class SearchBooks extends Component {

    static propTypes = {
        books: PropTypes.array,
        moveBookToShelf: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) =>{
        this.setState({query: query.trim() })
    }

    render(){

        const { query } = this.state;
        const { books, moveBookToShelf } = this.props;

        let filteredBooks;

        if(this.state.query){
            const match = new RegExp(escapeRegExp(query), 'i')
            filteredBooks = books.filter((book) => match.test(book.title))
        } else {
            filteredBooks = books;
        }

        

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" 
                                value={query} 
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                            {filteredBooks.map((book) => (
                                <li key={book.id}><Book book={book} moveBookToShelf={moveBookToShelf}/></li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks