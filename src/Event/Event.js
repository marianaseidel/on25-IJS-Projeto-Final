class Event {
    type;
    #events = ['eco',
        'construção',
        'pintura',
        'coleta'];

    static allEvents = [];

    constructor(name, community, date, leaderEvent) {
        this.name = name;
        this.community = community;
        this.date = date;
        this.qtdSubscribers = 0;
        this.leaderEvent = leaderEvent;
        this.status = 'Confirmado';

        Event.allEvents.push({ event: this.name });
    }

    get events() {
        return this.#events;
    }

    typeEvent(type) {
        const findIndexEvent = this.#events.indexOf(type);
        for (let i = findIndexEvent; i < 4; i++) {
            if (!(type = this.#events[i])) {
                return `Tipo de evento não encontrado!`;
            }
            return this.type = this.#events[i];
        }
    }
}

module.exports = { Event }