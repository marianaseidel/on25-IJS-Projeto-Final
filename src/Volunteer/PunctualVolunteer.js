const { Volunteer } = require('./Volunteer');

class PunctualVolunteer extends Volunteer {
    constructor(name, email, phone, age) {
        super(name, email, phone, age, 'Voluntário pontual');
    }

    exemptionFee() {
        if (this.events.length > 2) {
            return `Vamos processar seu pedido de isenção da taxa de inscrição!`;
        } else {
            return `Você participou de ${this.events.length} evento(s). Essa solicitação só é permitida a partir de 3 eventos.`;
        }
    }
}

module.exports = { PunctualVolunteer }