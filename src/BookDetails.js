import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class BookDetails extends Component {

    static propTypes = {
        bookAuthors: PropTypes.string.isRequired
        title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div>
                <div className="book-authors">{this.props.bookAuthors}</div>
                <div className="book-title">{this.props.title}</div>
            </div>
        )
    }
}

export default BookDetails