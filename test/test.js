let chai = require('chai');
let chaiHttp = require('chai-http')
let server = require('../app');
const expect = chai.expect;

chai.use(chaiHttp)

describe('GET Products', () => {

    it('should return html', (done) => {
        chai.request(server)
            .get('/products')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.have.string('text/html');
                done();
            });
    });

    
    it('should return html', (done) => {
        chai.request(server)
            .get('/products/:id')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.have.string('text/html');
                done();
            });
    });
});


describe('Login', (done) => {
  
    it('should return html', (done) => {
        chai.request(server)
            .get('/login')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.have.string('text/html');
                done();
            });
    });

    
    it('should return html', (done) => {
        chai.request(server)
            .post('/login/signOut')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.have.string('text/html');
                done();
            });
    });
});




describe('Authenticate a user: ',()=>{
    let credentials = {
        email:'marius@gmail.com',
        password:'123456'
    }
    it('should receive an OK and return html ', (done) => {
       chai.request(server)
        .post('/login/auth/signIn')
        .type('form')
        .send(credentials)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.headers['content-type']).to.have.string('text/html');
            done();
        });
   });
})

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


describe(' Get Cart: ',()=>{
it('should return cart', (done) => {
    chai.request(server)
        .get('/logged/cart')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.headers['content-type']).to.have.string('text/html');
            done();
        });
 });
})