const { Event } = require('../Event/Event');

class Volunteer {
    #email;
    #phone;

    static allVolunteers = [];

    constructor(name, email, phone, age, type) {
        const minimumAge = 18;
        if (age < minimumAge) {
            throw 'Desculpe, não permitimos voluntários menores de 18 anos!';
        };
        this.name = name;
        this.#email = email;
        this.#phone = phone;
        this.age = age;
        this.type = type;
        this.events = [];

        Volunteer.allVolunteers.push({ volunteer: this.name, type: this.type });
    }

    get email() {
        return this.#email;
    }

    get phone() {
        return this.#phone;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }

    participateEvent(event) {
        if (!(event instanceof Event)) {
            return 'Insira um evento válido!';
        }
        this.events.push(event.name);
        event.qtdSubscribers++;
    }
}

module.exports = { Volunteer }

