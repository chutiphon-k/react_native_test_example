jest.mock('../../src/components/RepoList', () => 'Repolist');

import React from 'react';
import renderer from 'react-test-renderer';

import { RepoPage } from '../../src/pages/RepoPage';
import { repos } from '../../config/jest/mockData';

describe('RepoPage', () => {
  let getComponent = {};

  beforeEach(() => {
    getComponent = (props) => {
      return (
        renderer.create(
          <RepoPage
            repos={props}
            loadReposRequest={jest.fn()}
          />
        )
      )
    }
  });

  it('RepoPage จะ render เฉพาะ Loading text เมื่อ isLoading เป็น true และยังดึงข้อมูลไม่เสร็จ', () => {
    let component = getComponent({ isLoading: true, repos: [] });

    expect(component).toMatchSnapshot();
  });

  it('RepoPage จะ render เฉพาะ Loading text เมื่อ isLoading เป็น false และข้อมูล่โหลดเสร็จ', () => {
    let component = getComponent({ isLoading: false, repos });

    expect(component).toMatchSnapshot();
  });
});
