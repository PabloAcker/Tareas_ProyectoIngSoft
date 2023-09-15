import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Calculator from "../../components/Calculator";

describe('<Calculator />', () => {
  test('renderiza los campos de entrada y salida', () => {
    const { getByLabelText } = render(<Calculator />);
    
    expect(getByLabelText('input-field')).toBeInTheDocument();
    expect(getByLabelText('output-field')).toBeInTheDocument();
  });

  test('permite a los usuarios ingresar números y operadores', () => {
    const { getByLabelText } = render(<Calculator />);
    const inputField = getByLabelText('input-field').querySelector('input');
    if (!inputField) throw new Error('Input field not found');
    userEvent.type(inputField, '5+5'); 
    expect(inputField).toHaveValue('5+5');
  });

  test('muestra el resultado correcto cuando se presiona el botón "="', () => {
    const { getByLabelText, getByText } = render(<Calculator />);
    const inputField = getByLabelText('input-field').querySelector('input');
    if (!inputField) throw new Error('Input field not found');
    userEvent.type(inputField, '5+5'); 
    fireEvent.click(getByText('='));
    
    const outputField = getByLabelText('output-field').querySelector('input');
    expect(outputField).toHaveValue('10');
  });

  test('muestra "Error" si la expresión es inválida', () => {
    const { getByLabelText, getByText } = render(<Calculator />);
    const inputField = getByLabelText('input-field').querySelector('input');
    if (!inputField) throw new Error('Input field not found');
    userEvent.type(inputField, '5+'); 
    fireEvent.click(getByText('='));
    
    const outputField = getByLabelText('output-field').querySelector('input');
    expect(outputField).toHaveValue('Error');
  });

  test('limpia los campos de entrada y salida cuando se presiona el botón "Clear"', () => {
    const { getByLabelText, getByText } = render(<Calculator />);
    const inputField = getByLabelText('input-field').querySelector('input');
    if (!inputField) throw new Error('Input field not found');
    userEvent.type(inputField, '5+5'); 
    fireEvent.click(getByText('Clear'));
    
    const outputField = getByLabelText('output-field').querySelector('input');
    expect(inputField).toHaveValue('');
    expect(outputField).toHaveValue('');
  });

  test('puede calcular porcentajes', () => {
    const { getByLabelText, getByText } = render(<Calculator />);
    const inputField = getByLabelText('input-field').querySelector('input');
    if (!inputField) throw new Error('Input field not found');
    userEvent.type(inputField, '100'); 
    fireEvent.click(getByText('%'));
    
    const outputField = getByLabelText('output-field').querySelector('input');
    expect(outputField).toHaveValue('1');
  });

});