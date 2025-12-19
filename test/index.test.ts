/** @jest-config-loader ts-node */
import { merge } from '../src/index';

describe('testing merge', () => {
  test('merge should return merged list', () => {
    let col1 = [1,2,3]
    let col2 = [6,5,4]
    let col3 = [7,8,9]
    let exp = [1,2,3,4,5,6,7,8,9]
    expect(merge(col1,col2,col3)).toBe([exp]);
  });
});