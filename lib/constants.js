const  DEFAULT_INDEX_URL = 'https://www.reachoutberlin.de/de/chronik'
const  FIRST_PAGE = 0

module.exports = {
  DEFAULT_INDEX_URL,
  FIRST_PAGE,
  urlOfPage: (pageNum) => `https://www.reachoutberlin.de/de/chronik?page=${pageNum}`,
  pageNumberOfURL: (pageURL) => {
    if( pageURL == DEFAULT_INDEX_URL ){
      return 0
    }

    return Number( pageURL.match(/[0-9]+$/)[0] )
  }
}

