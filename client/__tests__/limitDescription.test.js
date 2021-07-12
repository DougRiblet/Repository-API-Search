import limitDescription from '../utils/limitDescription.js';

describe("limitDescription utility function", () => {
  test("should leave description unedited if not too long", () => {
    const input = 'abcdefghi';
    expect(limitDescription(input)).toBe('abcdefghi');
  });
  test("should return empty string if input is null", () => {
    const input = null;
    expect(limitDescription(input)).toBe('');
  });
  test("should return truncated string if input is too long", () => {
    const tooLong = 'abcdefghi '.repeat(50);
    const shortened = 'abcdefghi '.repeat(24) + 'abcde ...';
    expect(limitDescription(tooLong)).toBe(shortened);
  });
});
