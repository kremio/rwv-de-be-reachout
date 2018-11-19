const request =  require('request')
const requestAsync = require('./request-async')
const cheerio = require('cheerio')
const url = require('url')

const BASE_URL = 'https://www.reachoutberlin.de'
/*
 * Given a URL to an report index page, return an array of links
 * to individual report, ordered in the order of appearance in the HTML document, and the total number of pages.
 * 
 * return {
 *  reportsURLs: [string],
 *  pageCount: Integer
 * }
 */
module.exports = async ( url ) => {
  //Fetch the HTML
  const answer = await requestAsync( url )
  //Load it into cheerio
  const $ = cheerio.load( answer.body )

  //Get all the links to reports
  const reportsURLs = $('.views-table tbody a')
    .map( function (){
      return BASE_URL + this.attribs['href']
    } )
    .get()

  //The number of pages
  let pageCount
  const lastLink = $(".pager-last.last a").first()
  if( lastLink.length != 0 ){
    pageCount = lastLink.attr('href')
    .match(/([0-9]+)$/)[1]
  }else{
    pageCount = Number( $(".pager-current.last").last().text() ) - 1
  }

  return {
    reportsURLs,
    pageCount: Number(pageCount)
  }
}
