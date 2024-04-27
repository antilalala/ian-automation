const { expect } = require('chai');
const supertest = require('supertest');

describe('ADD_USER', () => {

    it('ADD_USER', async() => {
        const response = await supertest('https://thinking-tester-contact-list.herokuapp.com').add ('/users')
        console.log(response.status).equal(10)
    })
})