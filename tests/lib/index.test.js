const fs = require('fs')
const request = require('request')
const scrapeIndex = require('../../lib/index')

//const reportJson = require('../samples/report.json')
//Mock HTTP requests
jest.mock('request')


const expectedResult = {
  reportsURLs: [ 'https://www.reachoutberlin.de/de/content/berlin-charlottenburg-82',
    'https://www.reachoutberlin.de/de/content/berlin-tempelhof-20',
    'https://www.reachoutberlin.de/de/content/berlin-steglitz-23',
    'https://www.reachoutberlin.de/de/content/berlin-mitte-124',
    'https://www.reachoutberlin.de/de/content/berlin-neuk%C3%B6lln-176',
    'https://www.reachoutberlin.de/de/content/berlin-tempelhof-19',
    'https://www.reachoutberlin.de/de/content/berlin-mitte-123',
    'https://www.reachoutberlin.de/de/content/berlin-charlottenburg-81',
    'https://www.reachoutberlin.de/de/content/berlin-steglitz-22',
    'https://www.reachoutberlin.de/de/content/berlin-tiergarten-94' ],
  pageCount: 245
}


test( 'Base test', async () => {
  //Use a pre-fetched sample report
  const sampleIndex = fs.readFileSync('./tests/samples/index.html', 'utf8')
  request.mockImplementation((...args) => {
    const cb = args.pop()
    cb( null, {statusCode: 200}, sampleIndex )
  })

  const result = await scrapeIndex( 'https://domain.tld/path/to/page.html' )
  expect( result ).toEqual( expectedResult )
})

test( 'Page without link to last page with classname "last"', async () => {
  const sampleIndex = fs.readFileSync('./tests/samples/indexNoLast.html', 'utf8')
  request.mockImplementation((...args) => {
    const cb = args.pop()
    cb( null, {statusCode: 200}, sampleIndex )
  })

  const result = await scrapeIndex( 'https://domain.tld/path/to/page.html' )
  expect( result.pageCount ).toEqual( 245 )
})

