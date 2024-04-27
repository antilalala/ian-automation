const { expect } = require('chai');
const supertest = require('supertest');

describe('GET User Profile', () => {

    it('GET User Profile', async() => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').get ('/contacts')
        console.log(response.status).equal(10)
    })
})