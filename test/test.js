let chai = require('chai');
let chaiHttp = require('chai-http')
let server = require('../app');
const expect = chai.expect;
chai.use(chaiHttp)


describe('GET Products', () => {
    let url = '/mens/mens-accesories/mens-accessories-luggage'
    
    it('should return html for products', (done) => {
        chai.request(server)
            .get('/categories' + url)
            .end((err, res) => {
                if(err) throw err;
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.have.string('text/html');
                done();
            });
    });

    
    it('should return html', (done) => {
        chai.request(server)
            .get('/products/' + 'P0138')
            .end((err, res) => {
                if(err) throw err;
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.have.string('text/html');
                done();
            });
    });
});


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
            if(err) throw err;
            expect(res).to.have.status(200);
            expect(res.headers['content-type']).to.have.string('text/html');
            done();
        });
 });
})


describe('Login', (done) => {
  
    it('should login html page', (done) => {
        chai.request(server)
            .get('/login')
            .end((err, res) => {
                if(err) throw err;
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.have.string('text/html');
                done();
            });
    });

    
    it('should return html', (done) => {
        chai.request(server)
            .get('/login/signOut')
            .redirects(0)
            .end((err, res) => {
                if(err) throw err;
                expect(res).to.have.status(302);
                expect(res).to.not.have.header('set-cookie');
                done();
            });
    });
});