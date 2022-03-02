import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
//import { it } from 'faker/lib/locales'

describe('Signup', function () {

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        //Usar as funções instanciando a classe SignupPage
        signupPage.go()
        signupPage.fillForm(deliver) //necessário usar nesse padrão "function(){} para funcionar"
        signupPage.submit()

        //objeto imutavel
        const expected_message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expected_message)

    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'

        //Removido por que esta no describe
        //var signup = new SignupPage()

        //Usar as funções instanciando a classe SignupPage
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'daniel.com.br'

        //Removido por que esta no describe
        //var signup = new SignupPage()

        //Usar as funções instanciando a classe SignupPage
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

    // it('Required fields', function(){



    //     signupPage.alertMessageShouldBe('É necessário informar o nome')
    //     signupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     signupPage.alertMessageShouldBe('É necessário informar o e-mail')
    //     signupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })

})
