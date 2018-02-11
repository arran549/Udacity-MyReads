import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        searchResults: []
    }

    setShelvesForSearchResults = (searchResults) => {
        this.setState((state, props) => {
            for (let sr of searchResults) {
                let book = this.props.books.filter((x) => x.id === sr.id)
                if(book.length) {
                    let srbook = searchResults.filter((s) => s.id === book[0].id)

                    if(srbook.length){
                        srbook[0].shelf = book[0].shelf;
                    }
                }
            }
            return { searchResults }
        })
    }

    updateQuery = (query) =>{
        this.setState({query: query.trim() })
        if(query) {
            BooksAPI.search(query).then((searchResults) => {
                this.setShelvesForSearchResults(searchResults);
            })
            .catch(() => {
                this.setState({ searchResults: [] })
            })        
        } else {
            this.setState({ searchResults: [] })
        }
    }

    componentWillReceiveProps(){
        this.setShelvesForSearchResults(this.state.searchResults);
    }

    render(){

        const { query, searchResults } = this.state;
        const { moveBookToShelf } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                                value={query} 
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                            {searchResults.map((book) => (
                                <li key={book.id}><Book book={book} moveBookToShelf={moveBookToShelf}/></li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks