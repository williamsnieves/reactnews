/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectNews } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos, loadNews } from '../App/actions';
import { changeUsername, getNewsFromApi } from './actions';
import { makeSelectUsername } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount(){
    this.props.onInitNews()
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
      const { loading, error, repos } = this.props;
      const reposListProps = {
          loading,
          error,
          repos,
      };

      if (this.props.news) {
          return (
              <article >
                  <section className="wrapper-grid">
                      <div className="wrapper-welcome items">
                          <div className="content-welcome">
                              <h2>{this.props.news[0].title}</h2>
                              <p>{this.props.news[0].content}</p>
                          </div>
                      </div>

                      <div className="wrapper-groups items">
                          <div><img src={this.props.news[1].picture} width="300" height="150" alt=""/></div>
                          <div>{this.props.news[1].content}</div>
                      </div>

                      <div className="wrapper-groups-menu items">
                          <div><img src={this.props.news[2].picture} alt="" width="300" height="150" /></div>
                          <div className="wrapper-groups-menu-options wrapper-groups-menu-items">
                              <div className="menu-options wrapper-groups-menu-items">about</div>
                              <div className="menu-options wrapper-groups-menu-items">clients</div>
                          </div>
                      </div>
                      <div className="wrapper-groups items">
                          <div><img src={this.props.news[3].picture} alt="" width="300" height="150"/></div>
                          <div>{this.props.news[3].content}</div>
                      </div>
                      <div className="wrapper-groups items">
                          <div><img src={this.props.news[3].picture}  width="300" height="150" alt=""/></div>
                          <div>{this.props.news[3].content}</div>
                      </div>

                      <div className="wrapper-single items">
                          <div className="menu-options-people">people</div>
                      </div>

                      <div className="wrapper-photo items">
                          <img src={this.props.news[1].picture} width="300" height="300" alt=""/>
                      </div>

                      <div className="wrapper-groups-big items">
                          <div className="wrapper-groups-big-item">
                              <div className="wrapper-groups-menu-items">
                                  <img src={this.props.news[4].picture} width="300" height="150" alt=""/></div>
                              <div className="wrapper-groups-menu-items">
                                  <div className="menu-options-people">news</div>
                              </div>
                          </div>
                          <div className="wrapper-groups-big-item">
                              <div className="wrapper-groups-menu-items">
                                  <div className="menu-options-people">people</div>
                              </div>
                              <div className="wrapper-groups-menu-items">
                                  <img src={this.props.news[4].picture} width="300" height="150" alt=""/></div>
                          </div>
                      </div>

                      <div className="wrapper-social items">
                          <div className="wrapper-social-icon">
                              <img src="http://via.placeholder.com/20X20" alt=""/>
                          </div>
                          <p>asdsdsad asdasdada sdasdadasd asdsadd asds</p>
                      </div>
                      <div className="wrapper-photo items">
                          <img src="http://via.placeholder.com/300X300" alt=""/>
                      </div>
                  </section>
              </article>
          );
      }else{
          return (
              <div>Loading...</div>
          )
      }
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  news: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.bool,
  ]),
  onChangeUsername: React.PropTypes.func,
  onNewsRequest: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onInitNews: (evt) => {
        dispatch(loadNews())
        //dispatch(loadNews());
        //dispatch(getNewsFromApi());
    }
    //onNewsRequest: (evt) => dispatch(getNewsFromApi())
    //dispatch(loadNews());
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  news: makeSelectNews(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
