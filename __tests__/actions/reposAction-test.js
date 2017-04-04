import mockStore from '../../mocks/redux-mock-store';
import { loadReposRequest, selectRepo } from '../../src/actions';

const store = mockStore();

describe('reposAction', () => {
  beforeEach (() => {
    store.clearActions();
  });

  it('should handle reposAction for success case', async () => {
    const response = '{"items": [{"id": 1}]}';
    fetch.mockResponseSuccess(response);

    await store.dispatch(loadReposRequest('/test'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should handle reposAction for failure case', async () => {
    const mockError = new Error('ดูสิแม่ ผมชื่อเออเร่อ');
    fetch.mockResponseFailure(mockError);

    await store.dispatch(loadReposRequest('/test'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should handle selectRepo action', () => {
    store.dispatch(selectRepo(1100));
    expect(store.getActions()).toMatchSnapshot();
  });
});
