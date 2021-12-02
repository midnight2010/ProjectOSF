let chai = require('chai');
let chaiHttp = require('chai-http');
const app = require('../app');
let server = require('../app');
const expect = chai.expect;
chai.use(chaiHttp)
let agent = chai.request.agent(server)

describe('Get cart',()=> {
    let credentials = {
        email:'marius@gmail.com',
        password:'123456'
    }
    it('should sign in',(done) => {
        agent
        .post('/login/auth/signIn')
        .send(credentials)
        .redirects(0)
        .end((err, res) => {
            expect(res).to.have.status(302);
            expect(res).to.have.header('set-cookie');
            done()
        })
    })
    it('should get the cart',(done)=> {
        agent
            .get('/logged/cart')
            .end((err,res)=> {
                if(err) throw err;
                expect(res).to.have.status(200)
                expect(res.headers['content-type']).to.have.string('text/html')
                done()
            })
    })
    it('should get the wishlist',(done)=> {
        agent.get('/logged/wishlist')
             .end((err,res)=> {
                 if(err) throw err;
                 expect(res).to.have.status(200)
                 expect(res.headers['content-type']).to.have.string('text/html');
                 done()
             })
    })
    it('should add item to the cart',(done) => {
        agent.post('/logged/addCartItem')
            .send({
                id:'25565189',
                qty:4,
                variant:'701643540013'
            })
            .end((err,res)=> {
                if(err) throw err;
                expect(res).to.have.status(200);
                expect(res.text).to.be.eql('Product added to the Cart')
                done(console.log(res.text))
            })
    })
    
 
})