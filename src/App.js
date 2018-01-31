import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks'
import { Route }  from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBookToShelf = (book, shelf) => {

    BooksAPI.update(book, shelf).then(() => {
      console.log('updated book on server')
    })
    this.setState((state, props) => {

      const books = state.books;
      let theBook = books.filter((b) => b.id === book.id);
      theBook[0].shelf = shelf;

      return { books, }
    })
  }


  render() {

    let shelfNames = [{ displayName: 'Currently Reading', name: 'currentlyReading'} , 
                { displayName: 'Want To Read', name: 'wantToRead'}, 
                { displayName: 'Read', name: 'read'}];

    let shelves = [];

    shelfNames.forEach((shelf) => {
      let filteredBooks = this.state.books.filter((book) => book.shelf === shelf.name)
      shelves.push({name: shelf.displayName, books: filteredBooks})
    })

    const { books } = this.state

    console.log(shelves);

    return (
      
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={books} onAddBook={() => this.setState({ showSearchPage: true })} moveBookToShelf={this.moveBookToShelf}/>
        )} />
        <Route path="/search" render={({history}) => (
          <SearchBooks books={books} onBackToList={() => {
            this.setState({ showSearchPage: false })
            history.push('/')
          }} moveBookToShelf={this.moveBookToShelf} />        
        )} />
      </div>
    )
  }
}

export default BooksApp
