import { openModalAction, closeModalAction } from'../../actions';

describe('Toggle modal actions', () => {
  it('should return correct action for open modal state ', () => {
    const action = openModalAction();
    expect(action).toEqual({
      type: 'OPEN_MODAL',
    });
  });

  it('should return correct action for close modal state ', () => {
    const action = closeModalAction();
    expect(action).toEqual({
      type: 'CLOSE_MODAL',
    });
  });
});
