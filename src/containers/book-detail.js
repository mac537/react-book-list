import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if (!this.props.book) {
      return(
        <div className="col-sm-8">
          <img className="img-fluid" src="https://pbs.twimg.com/media/C6Oya_gXEAAXt64.jpg" />
          <span className="inital-text">Select a book to get started.</span>
        </div>
      )
    }
    return(
      <div className="col-sm-8">
        <div className="card">
          <div className="row ">
            <div className="col col-md-4">
              <img className="card-img-top img-fluid" src={this.props.book.cover} alt={this.props.book.title} />
            </div>
            <div className="col col-md-8">
              <div className="card-block">
                <h4 className="card-title">{this.props.book.title}</h4>
                <p className="card-text">{this.props.book.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);