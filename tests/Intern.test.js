const Intern = require('../lib/Intern');

describe('Intern', () => {
    test ('getting correct name', () => {
        const name = new Intern('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(name.getName()).toBe('Maria');
    })
    test ('getting correct id', () => {
        const id = new Intern('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(id.getId()).toBe(1);
    })
    test ('getting correct email', () => {
        const email = new Intern('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(email.getEmail()).toBe('test@email.com');
    })
    test ('getting correct school', () => {
        const school = new Intern('Maria', 1, 'test@email.com', 'SCCC');
        expect(school.getSchool()).toBe('SCCC');
    })
    test ('getting correct role', () => {
        const role = new Intern('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(role.getRole()).toBe('Intern');
    })
})