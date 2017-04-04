import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {
  ListView,
  View,
  Text
} from 'react-native';

import RepoList from '../../src/components/RepoList';
import { repos } from '../../config/jest/mockData';

describe('RepoList', () => {
  it('สามารถ render RepoList พร้อม mock data ได้อย่างถูกต้อง', () => {
    const component = renderer.create(
      <RepoList
        repos={repos}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('สามารถ render RepoList แบบ shallow อย่างถูกต้อง', () => {
    const ds = new ListView.DataSource(
      {
        rowHasChanged: (r1, r2) => (r1.id !== r2.id)
      });
    const dataSource = ds.cloneWithRows(repos);

    const wrapper = shallow(
      <RepoList
        repos={repos}
      />
    );

    expect(wrapper.contains(
      <ListView
        dataSource={dataSource}
        renderRow={(repo) => {
          <View>
            <Text>{repo.name}</Text>
            <Text>{`${repo.stargazers_count} stars`}</Text>
          </View>
        }}
      />
    ))
  });
});
