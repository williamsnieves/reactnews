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

    if(this.props.news){
        var imgTest = <img src={this.props.news[1].picture}/>
    }

    return (
      <article >
          <section className="wrapper-grid">
              <div className="wrapper-welcome">
                  <div className="content-welcome">
                      <h2>Welcome</h2>
                      <p>test asasddasda asdasda sasdasda asdaad asda</p>
                  </div>
              </div>

              <div className="wrapper-groups">
                  <div><img src="http://via.placeholder.com/300X150" alt=""/></div>
                  <div>description</div>
              </div>

              <div className="wrapper-groups-menu">
                  <div><img src="http://via.placeholder.com/300X150" alt=""/></div>
                  <div className="wrapper-groups-menu-options">
                      <div className="menu-options">about</div>
                      <div className="menu-options">clients</div>
                  </div>
              </div>
              <div className="wrapper-groups">
                  <div><img src="http://via.placeholder.com/300X150" alt=""/></div>
                  <div>mas descriptions</div>
              </div>
              <div className="wrapper-groups">
                  <div><img src="http://via.placeholder.com/300X150" alt=""/></div>
                  <div>easport</div>
              </div>

              <div className="wrapper-single">
                  <div className="menu-options-people">people</div>
              </div>

              <div className="wrapper-photo">
                  <img src="http://via.placeholder.com/300X300" alt=""/>
              </div>

              <div className="wrapper-groups-big">
                  <div className="wrapper-groups-big-item">
                      <div><img src="http://via.placeholder.com/300X150" alt=""/></div>
                      <div><div className="menu-options-people">news</div></div>
                  </div>
                  <div className="wrapper-groups-big-item">
                      <div><div className="menu-options-people">people</div></div>
                      <div><img src="http://via.placeholder.com/300X150" alt=""/></div>
                  </div>
              </div>

              <div className="wrapper-social">
                  <div className="wrapper-social-icon">
                      <img src="http://via.placeholder.com/20X20" alt=""/>
                  </div>
                  <p>asdsdsad asdasdada sdasdadasd asdsadd asds</p>
              </div>
          </section>
      </article>
    );
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
