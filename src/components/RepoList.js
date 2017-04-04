import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
  Text
} from 'react-native';

import RepoItem from './RepoItem';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
  selected: PropTypes.number,
  selectRepo: PropTypes.func
}

function RepoList (props) {
  const { repos, selected, selectRepo } = props;
  const dataSource = ds.cloneWithRows(repos);

  return (
    <ListView
      dataSource={dataSource}
      renderRow={(repo) => (
        <RepoItem
          isSelected={repo.id === selected}
          repo={repo}
          selectRepo={selectRepo}
        />
      )}
      contentContainerStyle={{ paddingVertical: 40 }}
    />
  );
};

export default RepoList;
