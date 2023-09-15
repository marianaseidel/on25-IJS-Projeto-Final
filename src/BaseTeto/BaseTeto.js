const { Volunteer } = require('../Volunteer/Volunteer')
const { Event } = require('../Event/Event')
const { Community } = require('../Community/Community')

class BaseTeto {
    constructor(){
        this.fixedVolunteers = Volunteer.allVolunteers.filter(element => element.type === 'Voluntário fixo');
        this.punctualVolunteers = Volunteer.allVolunteers.filter(element => element.type === 'Voluntário pontual');
        this.events = Event.allEvents;
        this.communities = Community.allCommunities;
    }
}

module.exports = { BaseTeto }
