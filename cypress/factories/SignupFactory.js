var faker = require('faker')
var cpf = require('gerador-validador-cpf')

//modulo
export default {
    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '04913090',
                street: 'Rua Sargento Ângelo Penha Santis',
                number: '1000',
                details: 'Apt 142',
                district: 'Jardim Santa Edwiges (Capela do Socorro)',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}