import operate from './Operate';

test('Backspace removes last character', () => {
  expect(operate({expr: '123', lastPressed: '3'}, '⌫')).toEqual({
    expr: '12',
    lastPressed: '2'
  });
});

test('Plus/Minus toggles sign of evaluated expression', () => {
  expect(operate({expr: '123', lastPressed: '3'}, '+/-')).toEqual({
    expr: '-123',
    lastPressed: '3'
  });
});

test('Percent divides by 100', () => {
  expect(operate({expr: '123', lastPressed: '3'}, '%')).toEqual({
    expr: '1.23',
    lastPressed: '3'
  });
});
