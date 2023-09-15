const { Volunteer } = require('./Volunteer');
const { Event } = require('../Event/Event');
const { Community } = require('../Community/Community');

class FixedVolunteer extends Volunteer {
    constructor(name, email, phone, age, area) {
        super(name, email, phone, age, 'Voluntário fixo');
        this.meeting = [];

        const areas = ['construções',
            'diagnóstico',
            'gestão comunitária',
            'comunicação',
            'habitat',
            'voluntariado'];

        if (!(areas.includes(area))) {
            throw `Área de atuação inexistente. Escolha outra opção.`;
        }
        this.area = area;
    }

    createEvent(name, community, date, liderEvent) {
        const novoEvento = new Event(name, community, date, liderEvent);
        if (!(community instanceof Community)) {
            return `Insira uma comunidade válida!`;
        };
        community.addEvent(novoEvento);
        return `Evento ${name} criado por ${this.name}`;
    }

    cancelEvent(event) {
        if (!(event instanceof Event)) {
            return `Insira um evento válido!`;
        };
        event.status = 'Cancelado';
        const indexEvent = Event.allEvents.indexOf(event.name);
        Event.allEvents.splice(indexEvent, 1);
        return `O evento ${event.name} foi removido.`;
    }

    createMeeting(date, type) {
        if (!(type === 'online' || type === 'presencial')) {
            return `Insira um tipo válido de reunião: online ou presencial.`;
        } else {
            this.meeting.push(date);
            return `Reunião ${type} marcada com sucesso!`;
        }
    }
}

module.exports = { FixedVolunteer }