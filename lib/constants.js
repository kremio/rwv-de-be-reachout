const  DEFAULT_INDEX_URL = 'https://www.opferberatung-rheinland.de/chronik-der-gewalt'
const  FIRST_PAGE = 2018

module.exports = {
  DEFAULT_INDEX_URL,
  FIRST_PAGE,
  urlOfPage: (pageNum) => `https://www.opferberatung-rheinland.de/chronik-der-gewalt/chronik-${FIRST_PAGE - pageNum}`,
  pageNumberOfURL: (pageURL) => {
    if( pageURL == DEFAULT_INDEX_URL ){
      return 0
    }

    return FIRST_PAGE - Number( pageURL.match(/[0-9]+$/)[0] )
  }
}
