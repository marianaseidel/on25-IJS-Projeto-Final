class Community {
    needs = [];
    events = [];

    static allCommunities = [];

    constructor(name, address, yearCreation, qtdResidents, communityLeader) {
        this.name = name;
        this.address = address;
        this.yearCreation = yearCreation;
        this.qtdResidents = qtdResidents;
        this.communityLeader = communityLeader;

        Community.allCommunities.push({ community: this.name });
    }

    insertNeeds(needs) {
        this.needs.push(needs);
        return `Sua necessidade foi adicionada à lista.`;
    }

    addEvent(newEvent) {
        this.events.push(newEvent.name);
    }
}

module.exports = { Community }