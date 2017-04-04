import reposReducer,
{
  initialState
} from '../../src/reducers/reposReducer';
import {
  LOAD_REPOS_FAILURE,
  LOAD_REPOS_REQUEST,
  LOAD_REPOS_SUCCESS,
  SELECT_REPO
} from '../../src/actions/types';
import { repos as data } from '../../config/jest/mockData';

describe('reposReducer', () => {
  it('return initialState หากไม่เจอ action ที่ตรงกัน', () => {
    expect(reposReducer(initialState, {type: 'มั่วๆ'})).toMatchSnapshot();
  });

  it('จัดการกับเคส failure action', () => {
    const error = new Error('ดูผมดิ ผมเออเร่อ');
    const action = { type: LOAD_REPOS_FAILURE, error }
    expect(reposReducer(initialState, action)).toMatchSnapshot();
  });

  it('จัดการกับเคส request action', () => {
    const action = { type: LOAD_REPOS_REQUEST };
    expect(reposReducer(initialState, action)).toMatchSnapshot();
  });

  it('จัดการกับเคส success action', () => {
    const action = { type: LOAD_REPOS_SUCCESS, data };
    expect(reposReducer(initialState, action)).toEqual({
      ...initialState,
      repos: data,
      isLoading: false
    });
  });

  it('จัดการกับเคส success action แบบ snapshot', () => {
    const action = { type: LOAD_REPOS_SUCCESS, data };
    expect(reposReducer(initialState, action)).toMatchSnapshot();
  });

  it('จัดการกับเคส SELECT_REPO', () => {
    const action = { type: SELECT_REPO, id: 1000}
    expect(reposReducer(initialState, action)).toMatchSnapshot();
  });

  it('จัดการกับเคส ยิง undefined state กับ unknow action', () => {
    expect(reposReducer(undefined, { type: 'unknown'})).toMatchSnapshot();
  });
});