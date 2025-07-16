import { formatDate } from './date';

describe('formatDate', () => {
  it('should format valid YYYY-MM-DD date', () => {
    expect(formatDate('2025-04-28')).toBe('Apr 28, 2025');
    expect(formatDate('2025-04-28T15:40:32.679Z')).toBe('Apr 28, 2025');
    expect(formatDate('2025-04-28T15:40:32.6Z')).toBe('Apr 28, 2025');
  });

  it('should format valid DD-MM-YYYY date', () => {
    expect(formatDate('28-04-2025')).toBe('Apr 28, 2025');
  });

  it('should format valid DD/MM/YYYY date', () => {
    expect(formatDate('28/04/2025')).toBe('Apr 28, 2025');
  });

  it('should format valid YYYY/MM/DD date', () => {
    expect(formatDate('2025/04/28')).toBe('Apr 28, 2025');
  });

  it('should return an empty string for invalid date formats', () => {
    expect(formatDate('2025.04.28')).toBe('');
    expect(formatDate('28.04.2025')).toBe('');
    expect(formatDate('invalid-date')).toBe('');
  });

  it('should return an empty string for invalid date/month', () => {
    expect(formatDate('2025-02-30')).toBe('');
    expect(formatDate('2025-13-01')).toBe('');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
  });

  it('should return an empty string for empty or whitespace-only input', () => {
    expect(formatDate('')).toBe('');
    expect(formatDate('   ')).toBe('');
  });

  it('should handle leading and trailing whitespace in valid input', () => {
    expect(formatDate('  2025-04-28  ')).toBe('Apr 28, 2025');
  });
});
