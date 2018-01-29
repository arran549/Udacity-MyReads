import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class BookDetails extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors.join(', ')}</div>
            </div>
        )
    }
}

export default BookDetails