import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {
  changePage: PropTypes.func.isRequired,
  total: PropTypes.number,
  limit: PropTypes.number,
  offset: PropTypes.number
}


class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getPager(props);
  }

  componentWillReceiveProps(newProps, prevState) {
    this.setState(this.getPager(newProps));
  }

  setPage(page) {
    if (page < 1 || page > this.state.totalPages) {
      return;
    }
    this.props.changePage(page);
  }

  getPager(props) {
    const {total, limit, offset} = props;

    // calculate total pages
    let totalPages = Math.ceil(total/limit);

    const currentPage = total>0? Math.floor(offset/total)+1:1;

    let startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // create an array of pages to ng-repeat in the pager control
    let pages = []; // _.range(startPage, endPage + 1);

    for (let i = startPage; i < endPage+1; i++){
      pages.push(i);
    }

    // return object with all pager properties required by the view
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      pages: pages
    };
  }

  render() {

    if (!this.state.pages || this.state.pages.length <= 1) {
      // don't display this.state if there is only 1 page
      return null;
    }

    console.log("state", this.state);



    return (
      <div style={{clear:"both"}}>
        <button disabled={this.state.currentPage === 1}
                 onClick={() => this.setPage(1)}>
          First
        </button>
        <button disabled={this.state.currentPage === 1}
          onClick={() => this.setPage(this.state.currentPage - 1)}>
          Previous
        </button>
        {this.state.pages.map((page, index) =>
          <button key={index} style={{color:this.state.currentPage === page ? 'blue' : ''}}
                  onClick={() => this.setPage(page)}>
            {page}
          </button>
        )}
        <button disabled={this.state.currentPage === this.state.totalPages}
                onClick={() => this.setPage(this.state.currentPage + 1)}>
          Next
        </button>
        <button disabled={this.state.currentPage === this.state.totalPages}
                onClick={() => this.setPage(this.state.totalPages)}>
          Last
        </button>
      </div>
    );
  }
}

Pagination.propTypes = propTypes;
export default Pagination;
