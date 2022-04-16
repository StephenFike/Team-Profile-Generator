const Manager = require('../lib/Manager');

test('creates new manager object', () => {
    const manager = new Manager('Jeff', 2, 'jeff@gmail.com', 101);

    expect(manager.getName()).toBe('Jeff');
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toBe('Manager');
})