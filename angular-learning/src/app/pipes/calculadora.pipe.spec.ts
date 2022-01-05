import { CalculadoraPipe } from './calculadora.pipe';

describe('CalculadoraPipe', () => {
  it('create an instance', () => {
    const pipe = new CalculadoraPipe();
    expect(pipe).toBeTruthy();
  });
});
