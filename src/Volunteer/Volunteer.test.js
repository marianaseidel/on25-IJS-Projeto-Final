const { Volunteer } = require('./Volunteer');
const { FixedVolunteer } = require('./FixedVolunteer');
const { PunctualVolunteer } = require('./PunctualVolunteer');
const { Event } = require('../Event/Event');
const { Community } = require('../Community/Community');

describe('verify functions of volunteers', () => {
    let event1, event2, event3;

    beforeEach(() => {
        event1 = new Event('eco');
        event2 = new Event('coleta');
        event3 = new Event('pintura');
    })

    afterEach(() => {
        Volunteer.allVolunteers = [];
        Event.allEvents = [];
    })

    describe('verify class volunteer', () => {
        let volunter1, volunter2;

        beforeEach(() => {
            volunter1 = new Volunteer('Mariana', 'mariana@reprograma.br', 99990000, 27);
            volunter2 = new Volunteer('Julia', 'julia@reprograma.br', 99009900, 30);
        });

        it('shoul check instance of a volunteer', () => {
            expect(volunter1).toEqual({ name: 'Mariana', age: 27, events: [] });
        });

        it('shoul check instance of a volunteer under 18 years old', () => {
            const volunter3 = () => new Volunteer('bia', 'bia@reprograma.br', 90900909, 17);
            expect(volunter3).toThrow('Desculpe, não permitimos voluntários menores de 18 anos!');
        });

        it('shoul check the array all volunteers', () => {
            expect(Volunteer.allVolunteers).toEqual([{ volunteer: 'Mariana' }, { volunteer: 'Julia' }]);
        });

        it('shoul check get an email', () => {
            expect(volunter1.email).toEqual('mariana@reprograma.br');
        });

        it('shoul check get a phone', () => {
            expect(volunter1.phone).toEqual(99990000);
        });

        it('shoul check set a new email', () => {
            volunter1.email = 'mari@reprograma.br';
            expect(volunter1.email).toEqual('mari@reprograma.br');
        });

        it('shoul check when a volunteer partipates in events', () => {
            volunter1.participateEvent(event1);
            volunter1.participateEvent(event2);
            expect(volunter1.events).toEqual(['eco', 'coleta']);
        });

        it('shoul check when a volunteer tries to participates an event that is not an instance of Event', () => {
            const event = 'eco';
            expect(volunter1.participateEvent(event)).toEqual('Insira um evento válido!');
        });
    })

    describe('verify class fixed volunteer', () => {
        let volunter4;

        beforeEach(() => {
            volunter4 = new FixedVolunteer('Ellen', 'ellen@reprograma.br', 22221111, 35, 'construções');
        })

        it('shoul check instance of a fixed volunteer', () => {
            expect(volunter4).toEqual({
                name: 'Ellen',
                age: 35,
                type: 'Voluntário fixo',
                events: [],
                meeting: [],
                area: 'construções'
            });
        });

        it('shoul check instance of a fixed volunteer when the area does not exist', () => {
            const volunter5 = () => new FixedVolunteer('Camila', 'camila@reprograma.br', 11112222, 32, 'financeiro')
            expect(volunter5).toThrow('Área de atuação inexistente. Escolha outra opção.');
        });

        it('shoul check create an event', () => {
            const community = new Community();
            const input = volunter4.createEvent('Pintura', community, '20/02/2022', 'Mariana');
            expect(input).toEqual('Evento Pintura criado por Ellen');
        });

        it('shoul check cancel an event', () => {
            const pintura = new Event('pintura');
            expect(volunter4.cancelEvent(pintura)).toEqual('O evento pintura foi removido.');
        });

        it('shoul check try to cancel an event when the parameter is not an object Event', () => {
            expect(volunter4.cancelEvent('pintura')).toEqual('Insira um evento válido!');
        });

        it('shoul check create a meeting', () => {
            const output = 'Reunião online marcada com sucesso!';
            expect(volunter4.createMeeting('18/09/23', 'online')).toEqual(output);
        });

        it('shoul check try to create a meeting when the type is not valid', () => {
            const output = 'Insira um tipo válido de reunião: online ou presencial.';
            expect(volunter4.createMeeting('18/09/23', 'virtual')).toEqual(output);
        });
    })

    describe('verify class punctual volunteer', () => {
        let volunter6;

        beforeEach(() => {
            volunter6 = new PunctualVolunteer('Amanda', 'amanda@reprograma.br', 11110000, 25);
        })

        it('shoul check instance of a punctual volunteer', () => {
            expect(volunter6).toEqual({
                name: 'Amanda',
                age: 25,
                type: 'Voluntário pontual',
                events: []
            });
        });

        it('shoul check exemptionFee function when the volunteer participated of 3 events', () => {
            volunter6.participateEvent(event1);
            volunter6.participateEvent(event2);
            volunter6.participateEvent(event3);
            const output = `Vamos processar seu pedido de isenção da taxa de inscrição!`;
            expect(volunter6.exemptionFee()).toEqual(output);
        });

        it('shoul check exemptionFee function when the volunteer participated of 1 event', () => {
            volunter6.participateEvent(event1);
            const output = `Você participou de 1 evento(s). Essa solicitação só é permitida a partir de 3 eventos.`;
            expect(volunter6.exemptionFee()).toEqual(output);
        });

    })
})
