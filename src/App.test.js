import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test("example test", () => {
  render(<App />);
  const element = 3 + 3;
  expect(element).toBe(6);
});
