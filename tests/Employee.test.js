const Employee = require('../lib/Employee');

describe('Employee', () => {
    test ('getting correct name', () => {
        const name = new Employee('Maria', 1, 'test@email.com');
        expect(name.getName()).toBe('Maria');
    })
    test ('getting correct id', () => {
        const id = new Employee('Maria', 1, 'test@email.com');
        expect(id.getId()).toBe(1);
    })
    test ('getting correct email', () => {
        const email = new Employee('Maria', 1, 'test@email.com');
        expect(email.getEmail()).toBe('test@email.com');
    })
    test ('getting correct rol', () => {
        const role = new Employee('Maria', 1, 'test@email.com');
        expect(role.getRole()).toBe('Employee');
    })
})