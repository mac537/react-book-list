import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  handleClick(book, index) {
    this.props.selectBook(book)
    this.setState({ active: index });
  }

  rederList(){

    return this.props.books.map((book, index) => {
      return (
        <div
          onClick={() => this.handleClick(book, index)}
          key={index}
          className={`list-group-item list-group-item-action ${this.state.active === index ? 'active': '' }`}
        >
          {book.title}
        </div>
      );
    });
  }
  render() {
    return(
      <div className="list-group col-sm-4">
        {this.rederList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    books: state.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);