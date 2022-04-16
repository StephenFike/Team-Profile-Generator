// jest.mock('../lib/Employee');
const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Dave', 14, 'dave@gmail.com');

    expect(employee.getName()).toBe('Dave');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee')
});
