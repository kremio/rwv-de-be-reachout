const requestAsync = require('./request-async')
const cheerio = require('cheerio')
const url = require('url')
const tc = require("timezonecomplete") //timezone aware dates
const TIMEZONE = ' Europe/Berlin'

const preset = require('./preset')
const {ReportParserError} = require('./errors')


module.exports = async ( url ) => {
  //Get a report preset, this is the mechanism to handle special cases
  //that would otherwise make the parser throw errors
  const report = preset(url)
  try{
    //Fetch the HTML
    const answer = await requestAsync( url )
    //Load it into cheerio
    const $ = cheerio.load( answer.body )

    const article = $('#main').first()

    //Only override the preset where needed
    if( !report.startDate ){
      const startDate = article.find('.date-display-single').first().attr('content')
      Object.assign(report, { startDate })
    }

    if( !report.description ){
      const description = article.find('div.field-type-text-with-summary p').first().text()
      Object.assign(report, { description })
    }

    if( !report.locations ){
      const subdivisions = []
      const bezirk = article.find('.field-name-field-bezirk .field-item.even')
        .first()
        .text()

      subdivisions.push(bezirk)

      const maybeStreet = article.find('h1')
        .first()
        .text()
        .replace(`Berlin-${bezirk}`)
        .trim()

      if(maybeStreet != 'undefined' ){
        subdivisions.push( maybeStreet )
      }

      const scripts = []
      $('head script').not('[src]')
        .each(function(){
          scripts.push( $(this).html() )
        })

      //It is assumed there will be only one script tag that will pass
      //the filtering test.
      const geocoordRegexp = /"type"\:"point","lat":([0-9.]+),"lon"\:([0-9.]+)/
      const {latitude, longitude} = scripts.filter((source) => {
        return geocoordRegexp.test(source)
      }).reduce( (acc, source) => {
        const [all, lat, lon] = source.match(geocoordRegexp)
        return {latitude: Number(lat), longitude: Number(lon)}
      }, {latitude: null, longitude: null})

      Object.assign(report, {
        locations:[{
          subdivisions,
          latitude,
          longitude
        }]
      })
    }

    if( !report.sources ){
      const sources = article.find('.field-type-text-with-summary p:nth-child(2)')
        .first()
        .text()
        .split("\n")
        .map((source) => {
          const [name, dateDDMMYYYY] = source.split(', ')
          const [day, month, year] = dateDDMMYYYY.split('.')
          return {
            name,
            publishedDate: new tc.DateTime( `${year}-${month}-${day}T00:00${TIMEZONE}` ).toIsoString()
          }
        })
       Object.assign(report, { sources })
    }

    return report
  }catch(e){
    throw new ReportParserError( e, url )
  }

}

