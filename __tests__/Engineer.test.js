const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 11, 'bob@gmail.com', 'bob')

    expect(engineer.getName()).toBe('Bob');
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.github).toBe('bob');
    expect(engineer.getRole()).toBe('Engineer')
});