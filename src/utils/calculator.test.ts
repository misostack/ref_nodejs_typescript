import { Calculator } from '@utils/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add positive and negative numbers correctly', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    it('should handle zero multiplication', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow(
        'Division by zero is not allowed'
      );
    });
  });

  describe('power', () => {
    it('should calculate power correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    it('should handle power of 1', () => {
      expect(calculator.power(5, 1)).toBe(5);
    });
  });

  describe('sqrt', () => {
    it('should calculate square root correctly', () => {
      expect(calculator.sqrt(9)).toBe(3);
    });

    it('should throw error for negative numbers', () => {
      expect(() => calculator.sqrt(-1)).toThrow(
        'Cannot calculate square root of negative number'
      );
    });
  });
});
