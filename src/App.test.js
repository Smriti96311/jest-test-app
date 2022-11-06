import { render, fireEvent } from '@testing-library/react';
import CardColorChanger from './CardColorChanger/CardColorChanger';

test('tests whether all the buttons have rendered on DOM', () => {
  const { getByText } = render(<CardColorChanger />);

  const redBtn = getByText(/Red/i);
  const blueBtn = getByText(/Blue/i);
  const yellowBtn = getByText(/Yellow/i);
  const greenBtn = getByText(/Green/i);
  const resetBtn = getByText(/Reset/i);

  expect(redBtn).toBeInTheDocument();
  expect(blueBtn).toBeInTheDocument();
  expect(yellowBtn).toBeInTheDocument();
  expect(greenBtn).toBeInTheDocument();
  expect(resetBtn).toBeInTheDocument();
});

describe('Testing buttons', () => {
  it('test red btn', () => {
    const { getByTestId } = render(<CardColorChanger />);
    fireEvent.click(getByTestId('red'));

    let redCardText = getByTestId('red-card');
    expect(redCardText).toBeInTheDocument();
  })
  
  it('test blue btn', () => {
    const { getByTestId } = render(<CardColorChanger />);
    fireEvent.click(getByTestId('blue'));

    let redCardText = getByTestId('blue-card');
    expect(redCardText).toBeInTheDocument();
  })

  it('test yellow btn', () => {
    const { getByTestId } = render(<CardColorChanger />);
    fireEvent.click(getByTestId('yellow'));

    let redCardText = getByTestId('yellow-card');
    expect(redCardText).toBeInTheDocument();
  })
    
  it('test green btn', () => {
    const { getByTestId } = render(<CardColorChanger />);
    fireEvent.click(getByTestId('green'));

    let redCardText = getByTestId('green-card');
    expect(redCardText).toBeInTheDocument();
  })
})

