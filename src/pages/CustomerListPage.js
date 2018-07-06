import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { statusEnum } from '../actions/constant';
import customerActions from '../actions/customerActions';

class CustomerPage extends Component {
  constructor(props) {
    super(props);

    this.gotoPage = this.gotoPage.bind(this);
    this.createLink = this.createLink.bind(this);
    this.goUpdate = this.goUpdate.bind(this);
  }

  componentDidMount() {
    this.props.searchCustomers({page: 1, size: 20});
  }

  gotoPage(page) {
    this.props.searchCustomers({page: page, size: 20});
  }

  createLink() {
    this.props.history.push('/customer/create');
  }

  goUpdate(id) {
    this.props.history.push('/customer/update/' + id);
  }

  render() {

    const { isLoading, status, actionResponse, customers, page, totalPage} = this.props;

    const arrPage = _.fill(Array(totalPage), 1);

    return (
      <div>
        <div className="columns">
          <div className="column">
            <h2 className="title is-2">
              Customer
              <button onClick={() => this.createLink()} className="button is-primary">
                <span className="icon is-small">
                  <i className="fas fa-plus"></i>
                </span>
              </button>
            </h2>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {
                  customers && customers.map( (customer, i) => {
                    return (
                      <tr key={i}>
                        <td>{customer.name}</td>
                        <td>{customer.addressStreet}</td>
                        <td>{customer.contactPhone}</td>
                        <td>
                          <button onClick={() => this.goUpdate(customer.id)} 
                            className="button is-small is-primary">
                            <span className="icon is-small">
                              <i class="fas fa-edit"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
              {
                this.props.page > 1 &&
                <a onClick={() => this.gotoPage(this.props.page - 1)}  className="pagination-previous">Previous</a>
              }
              {
                this.props.page < this.props.totalPage &&
                <a onClick={() => this.gotoPage(this.props.page + 1)}  className="pagination-next">Next page</a>
              }
              <ul className="pagination-list">
                {
                  arrPage && arrPage.map( (value, i) => {
                    const page = i + 1;
                    const pagingClass = page === this.props.page ? 'pagination-link  is-current' : 'pagination-link';
                    return (<li><a onClick={() => this.gotoPage(page)} className={pagingClass}>{page}</a></li>);
                  })
                }  
              </ul>
            </nav>  
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.customerList });
const matchDispatchToProps = dispatch => (bindActionCreators({ ...customerActions }, dispatch));

export default connect(mapStateToProps, matchDispatchToProps)(CustomerPage);