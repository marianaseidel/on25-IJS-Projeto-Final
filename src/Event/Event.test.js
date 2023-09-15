const { Event } = require('./Event');
const { FixedVolunteer } = require('../Volunteer/FixedVolunteer');

describe('verify class event', () => {
    let event1, event2, fixedVolunteer;

    beforeEach(() => {
        event1 = new Event('Eco', 'Chico Lessa', '23/09/2023', 'Marcelo');
        event2 = new Event('Construção', 'Chico Lessa', '20/11/2023', 'Marina');
        fixedVolunteer = new FixedVolunteer('Camila', 'Camila@reprograma.br', 11112222, 32, 'construções');
    });

    afterEach(() => {
        Event.allEvents = [];
    })

    it('shoul check instance of an event', () => {
        expect(event1).toEqual({
            "community": "Chico Lessa",
            "date": "23/09/2023",
            "leaderEvent": "Marcelo",
            "name": "Eco",
            "qtdSubscribers": 0,
            "status": "Confirmado",
            "type": undefined
        });
    })

    it('shoul check the array all events', () => {
        expect(Event.allEvents).toEqual([{ event: 'Eco' }, { event: 'Construção' }]);
    });

    it('shoul check get the array events', () => {
        expect(event1.events).toEqual(['eco',
            'construção',
            'pintura',
            'coleta']);
    });

    it('shoul check put a type in an event', () => {
        event1.typeEvent('eco');
        expect(event1.type).toEqual('eco');
    });

    it('shoul check try to put a type that does not exist in an event', () => {
        const output = 'Tipo de evento não encontrado!';
        expect(event2.typeEvent('construções')).toEqual(output);
    });

    it('shoul check quantity subscribers when a volunteer starts participate an event', () => {
        fixedVolunteer.participateEvent(event1);
        expect(event1.qtdSubscribers).toEqual(1);
    });

    it('shoul check when a fixed volunteer create an event', () => {
        fixedVolunteer.createEvent('Pintura');
        const output = [{ event: 'Eco' }, { event: 'Construção' }, { event: 'Pintura' }];
        expect(Event.allEvents).toEqual(output);
    });

    it('shoul check event status and the array allEvents when the event is canceled', () => {
        fixedVolunteer.cancelEvent(event2);
        expect(event2.status).toEqual('Cancelado');
        expect(Event.allEvents).toEqual([{ event: 'Eco' }]);
    });
})

