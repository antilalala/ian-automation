const { expect } = require('chai');
const supertest = require('supertest');

describe('UPDATE_CONTACT', () => {

    it('UPDATE_CONTACT', async() => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').PATCH ('/contacts')
        console.log(response.status).equal(10)
    })
})