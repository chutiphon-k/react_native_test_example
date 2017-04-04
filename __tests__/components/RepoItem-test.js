import React from 'react';
import renderer from 'react-test-renderer';

import RepoItem from '../../src/components/RepoItem';
import { repos } from '../../config/jest/mockData';

describe('RepoItem', () => {
  it('ในกรณีที่ไม่คลิก หรือ isSelected = false', () => {
    const component = renderer.create(
      <RepoItem
        repo={repos[0]}
        selectRepo={jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('ในกรณีที่คลิกเลือก หรือ isSelected = true', () => {
    const component = renderer.create(
      <RepoItem
        isSelected
        repo={repos[0]}
        selectRepo={jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
