const { Community } = require('./Community');
const { FixedVolunteer } = require('../Volunteer/FixedVolunteer');
const { Event } = require('../Event/Event');

describe('verify class community', () => {
    let community1, community2, fixedVolunteer, event1;

    beforeEach(() => {
        community1 = new Community('Chico Lessa', 'Br-101 - Iputinga, Recife/PE', 2021, 1000, 'Jaci');
        community2 = new Community('Carolina de Jesus', 'Av. Central, 6860 - Mangueira, Recife/PE', 2017, 2000);
        fixedVolunteer = new FixedVolunteer('Camila', 'Camila@reprograma.br', 11112222, 32, 'construções');
        event1 = new Event('Construção');
    });

    afterEach(() => {
        Community.allCommunities = [];
    })

    it('shoul check instance of a community', () => {
        expect(community1).toEqual({
            "name": "Chico Lessa",
            "address": "Br-101 - Iputinga, Recife/PE",
            "yearCreation": 2021,
            "qtdResidents": 1000,
            "communityLeader": 'Jaci',
            "needs": [],
            "events": []
        });
    })

    it('shoul check the array all communities', () => {
        const output = [{ community: 'Chico Lessa' }, { community: 'Carolina de Jesus' }];
        expect(Community.allCommunities).toEqual(output);
    });

    it('shoul check add new needs', () => {
        community1.insertNeeds('melhoria banheiro comunitário');
        const output = 'Sua necessidade foi adicionada à lista.';
        expect(community1.insertNeeds('saneamento')).toEqual(output);
        expect(community1.needs).toEqual(['melhoria banheiro comunitário', 'saneamento']);
    });

    it('shoul check add an event', () => {
        community1.addEvent(event1);
        expect(community1.events).toEqual(['Construção']);
    });

    it('shoul check add event when an event is create by a fixed volunteer', () => {
        fixedVolunteer.createEvent('Pintura', community1);
        expect(community1.events).toEqual(['Pintura']);
    });
})