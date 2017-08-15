require('babel-register')
require('./config')
import { expect } from 'chai'
import { queryRef } from './config'

describe('it should get all query  from firebase', done => {
  queryRef.once('value', snap => {
    if(snap.exists()) {
      let queries = Object.keys(snap.val()).map(k => snap.val()[k])
      expect(queries).to.be.an('array')
      console.log(queries)
      done()
    }
  })
})