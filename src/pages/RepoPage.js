import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';

import RepoList from '../components/RepoList';
import { selectRepo, loadReposRequest } from '../actions';
import withKeyboard from '../enhancers/withKeyboard';

const host = 'https://api.github.com';
const repositories =
  `${host}/search/repositories?q=react-native&sort=stars&order=desc`;

export class RepoPage extends Component {
  static propTypes = {
    loadReposRequest: React.PropTypes.func.isRequired,
    repos: React.PropTypes.object.isRequired,
    selectRepo: React.PropTypes.func,
    selected: React.PropTypes.bool
  }

  componentDidMount() {
    this.props.loadReposRequest(repositories);
  }

  renderMainPart() {
    const { isLoading, repos, selected } = this.props.repos;
    if(!repos || isLoading) {
      return (
        <Text style={styles.Loading}>
          Loading...
        </Text>
      );
    }

    return (
      <View>
        <TextInput
          style={styles.search}
          placeholder='search'
        />
        <RepoList
          repos={repos}
          selected={selected}
          selectRepo={this.props.selectRepo}
        />
        <View style={{ height: this.props.keyboardHeight }} />
      </View>
    );
  }

  render() {
    const { isLoading, repos } = this.props.repos;
    return (
      <View style={styles.container}>
        {this.renderMainPart()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 2,
    justifyContent: 'center'
  },
  loading: {
    fontSize: 20,
    alignSelf: 'center'
  },
  search: {
    backgroundColor: '#ededed',
    height: 25,
    marginTop: 70,
    marginHorizontal: 10
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos
  }
}

const RepoPageWithKeyboard = withKeyboard(RepoPage);

export default connect(
  mapStateToProps,
  { loadReposRequest, selectRepo }
)(RepoPageWithKeyboard);
