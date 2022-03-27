const Manager = require('../lib/manager');

test('creates engineer object', () => {
    const manager = new Manager('name', 'id', 'email', 'officeNum');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toBe('officeNum');
    expect(manager.type).toBe('manager')
});