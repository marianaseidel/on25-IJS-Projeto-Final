const { BaseTeto } = require('./BaseTeto');
const { FixedVolunteer } = require('../Volunteer/FixedVolunteer');
const { PunctualVolunteer } = require('../Volunteer/PunctualVolunteer');
const { Event } = require('../Event/Event');
const { Community } = require('../Community/Community');

describe('verify class teto', () => {
    let volunter1 = new FixedVolunteer('Mariana', 'mariana@reprograma.br', 99990000, 27, 'construções'),
        volunter2 = new FixedVolunteer('Julia', 'julia@reprograma.br', 99009900, 30, 'habitat'),
        volunter3 = new FixedVolunteer('Ellen', 'ellen@reprograma.br', 22221111, 35, 'construções'),
        volunter4 = new PunctualVolunteer('Amanda', 'amanda@reprograma.br', 11110000, 25),

        event1 = new Event('Eco', 'Chico Lessa', '23/09/2023', 'Marcelo'),
        event2 = new Event('Construção', 'Chico Lessa', '20/11/2023', 'Marina'),

        community1 = new Community('Chico Lessa', 'Br-101 - Iputinga, Recife/PE', 2021, 1000, 'Jaci'),
        community2 = new Community('Carolina de Jesus', 'Av. Central, 6860 - Mangueira, Recife/PE', 2017, 2000),

        teto = new BaseTeto();

    it('should check array of fixed volunters', () => {
        expect(teto.fixedVolunteers).toEqual([{ volunteer: 'Mariana', type: 'Voluntário fixo' },
        { volunteer: 'Julia', type: 'Voluntário fixo' },
        { volunteer: 'Ellen', type: 'Voluntário fixo' }]);
    });

    it('should check array of puntual volunters', () => {
        expect(teto.punctualVolunteers).toEqual([{ volunteer: 'Amanda', type: 'Voluntário pontual' }]);
    });

    it('should check array of events', () => {
        expect(teto.events).toEqual([{ event: 'Eco' },
        { event: 'Construção' }]);
    });

    it('should check array of communities', () => {
        expect(teto.communities).toEqual([{ community: 'Chico Lessa' },
        { community: 'Carolina de Jesus' }]);
    });
})


