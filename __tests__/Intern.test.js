const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Rick', 53, 'rick@gmail.com', 'UT Austin')

    expect(intern.getName()).toBe('Rick');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toBe('UT Austin');
    expect(intern.getRole()).toBe('Intern');
})