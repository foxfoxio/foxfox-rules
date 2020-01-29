// import * as functions from 'firebase-functions'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

import Hero from './Hero'
import Monster from './Monster'
import FFError from './FFError'

export const battle = (a: Hero, b: Monster) => {
  // Guard #1
  if (a.stats.ap < b.stats.req_ap) {
    throw new FFError('0', 'Not enough AP')
  }

  // Process AP
  // TODO : decrease in Firebase
  a.stats.ap = a.stats.ap - b.stats.req_ap

  a.apAt = new Date()

  return {
    a,
    b
  }
}
