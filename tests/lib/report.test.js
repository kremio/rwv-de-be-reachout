const specialCases = require('../../special-cases')

jest.mock('../../special-cases', () => ({
  "https://domain.tld/path/to/page_override.html":{
    startDate:( new Date() ).toISOString()
  }
}))

const fs = require('fs')
const request = require('request')
const validateSchema = require('rwv-schema')
const {ReportParserError} = require('../../lib/errors')
const scrapeReport = require('../../lib/report')

const reportJson = require('../samples/report.json')

//const tagnamesJson = require('../samples/tagnames.json')

//Mock HTTP requests
jest.mock('request')




//Use a pre-fetched sample report
const sampleReport = fs.readFileSync('./tests/samples/report.html', 'utf8')
const noSource = fs.readFileSync('./tests/samples/no-source.html', 'utf8')

request.mockImplementation((...args) => {
  const cb = args.pop()
  cb( null, {statusCode: 200}, sampleReport )
})


test( 'Base test', async () => {
  const result = await scrapeReport( 'https://domain.tld/path/to/page.html' )
  expect( result ).toEqual( reportJson )
})

test( 'Source without date', async () => {
  request.mockImplementation((...args) => {
    const cb = args.pop()
    cb( null, {statusCode: 200}, noSource )
  })

  const result = await scrapeReport( 'https://domain.tld/path/to/page.html' )
  expect( result.sources[0] ).toEqual( {name:'Register Mitte'} )
})
