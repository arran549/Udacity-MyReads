import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class BookDetails extends Component {

    static propTypes = {
        bookTitle: PropTypes.string.isRequired,
        bookAuthors: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <div className="book-title">{this.props.bookTitle}</div>
                <div className="book-authors">{this.props.bookAuthors}</div>
            </div>
        )
    }
}

export default BookDetails