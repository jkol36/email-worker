import firebase from 'firebase'
const serviceAccount = require('./serviceaccount.json')

firebase.initializeApp({
  serviceAccount,
  databaseURL: 'https://trademate-27ec1.firebaseio.com'
})

export const queryRef = firebase.database().ref(`trademate-email-engine/${currentVersion}/queries`)