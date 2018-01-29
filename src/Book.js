import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                            style={{ width: 128, 
                                    height: 193, 
                                    backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` 
                            }}>
                    </div>
                    <BookshelfChanger/>
                </div>
                <BookDetails title={this.props.book.title} authors={this.props.book.authors} />
            </div>
        )
    }
}

export default Book