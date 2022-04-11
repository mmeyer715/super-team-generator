const Manager = require('../lib/Manager');

describe('Manager', () => {
    test ('getting correct name', () => {
        const name = new Manager('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(name.getName()).toBe('Maria');
    })
    test ('getting correct id', () => {
        const id = new Manager('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(id.getId()).toBe(1);
    })
    test ('getting correct email', () => {
        const email = new Manager('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(email.getEmail()).toBe('test@email.com');
    })
    test ('getting correct office number', () => {
        const officeNum = new Manager('Maria', 1, 'test@email.com', '1');
        expect(officeNum.getOfficeNumber()).toBe('1');
    })
    test ('getting correct role', () => {
        const role = new Manager('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(role.getRole()).toBe('Manager');
    })
})