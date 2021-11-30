let chai = require('chai');
let chaiHttp = require('chai-http')
let server = require('../app');
const expect = chai.expect;

chai.use(chaiHttp)


describe(' Create an account: ',()=>{
    let obj = {
        name:'hlp',
        email:'help@gmail.com',
        password:'123456'
    }
it('should return html', (done) => {
    chai.request(server)
        .post('/login/auth/signUp')
        .type('form')
        .send(obj)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.headers['content-type']).to.have.string('text/html');
            done();
        });
 });
})
