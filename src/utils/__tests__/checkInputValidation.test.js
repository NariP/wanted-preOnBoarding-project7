import { checkInputValidation } from 'utils';
import { VALIDITY_MESSAGE } from 'utils/constants';

describe('checkInputValidation test', () => {
  it('Should be true when input is (1,2,3,4)', () => {
    expect(checkInputValidation('1,2,3,4')).toBeUndefined();
  });
  it('Should be error when comma comes out consecutively', () => {
    expect(checkInputValidation('1,2,3,,4')).toBe(
      VALIDITY_MESSAGE.INPUT_ERROR_MESSAGE,
    );
  });
  it('Should be error when contains a value that exceeds MAX_SAFE_INTEGER', () => {
    expect(
      checkInputValidation('1234123412341234123412341234123412341234'),
    ).toBe(VALIDITY_MESSAGE.NOT_SAFE_INTEGER);
  });
  it('Should be error when contains a value that deceeds MIN_SAFE_INTEGER', () => {
    expect(
      checkInputValidation('-1234123412341234123412341234123412341234'),
    ).toBe(VALIDITY_MESSAGE.NOT_SAFE_INTEGER);
  });
});
