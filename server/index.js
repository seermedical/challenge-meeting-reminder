import express from 'express'
import {generateMeetings} from '../utils/mockData'

const app = express()

const requestedMeetings = generateMeetings(8, 8.64e7 * 2)

app.get('/meetings', (_, res) => {
  res.json(requestedMeetings)
})

app.listen(3001)
