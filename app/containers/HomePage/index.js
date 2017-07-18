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
      <article>
        <div>
            {imgTest}
        </div>
        <div>
          <h1>Welcome</h1>
          <p>personalasdaadasdad asdsaadada adsa </p>
        </div>

        <div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/06/22/11/54/town-2430571_960_720.jpg" alt=""/>
            <p>atest</p>
          </div>
        </div>

        <div>
          <img src="https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951_960_720.jpg" alt="react-boilerplate - Logo"/>
        </div>

        <div>
          about
        </div>

        <div>
          clients
        </div>

        <div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/06/22/11/54/town-2430571_960_720.jpg" alt=""/>
            <p>atest</p>
          </div>
        </div>

        <div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/06/22/11/54/town-2430571_960_720.jpg" alt=""/>
            <p>ea sport</p>
          </div>
        </div>

        <div>
          contact
        </div>

        <div>
          <img src="" alt="twitter"/>
          <p>
            asdasdadadsd  asdadsadada asdasddada
          </p>
        </div>

        <div>
          <img src="https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951_960_720.jpg" alt="react-boilerplate - Logo"/>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951_960_720.jpg" alt="react-boilerplate - Logo"/>
        </div>
        <div>
          news
        </div>
        <div>
          people
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951_960_720.jpg" alt="react-boilerplate - Logo"/>
        </div>



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
