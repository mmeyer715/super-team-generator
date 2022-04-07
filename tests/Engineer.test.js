const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    test ('getting correct name', () => {
        const name = new Engineer('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(name.getName()).toBe('Maria');
    })
    test ('getting correct id', () => {
        const id = new Engineer('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(id.getId()).toBe(1);
    })
    test ('getting correct email', () => {
        const email = new Engineer('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(email.getEmail()).toBe('test@email.com');
    })
    test ('getting correct github username', () => {
        const github = new Engineer('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(github.getGithub()).toBe('mmeyer715');
    })
    test ('getting correct rol', () => {
        const role = new Engineer('Maria', 1, 'test@email.com', 'mmeyer715');
        expect(role.getRole()).toBe('Engineer');
    })
})