const Intern = require('../lib/intern');

test('creates engineer object', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
});