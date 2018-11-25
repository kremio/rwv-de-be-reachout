const tc = require("timezonecomplete") //timezone aware dates
const TIMEZONE = ' Europe/Berlin'

module.exports = {
  /*
   * 'uri': {
   *   ...
   *   name/value pairs of properties to override
   *   ...
   * }
   * 
   */
  'https://www.reachoutberlin.de/de/content/berlin-friedrichshain-220': {
    sources:[
      {
        name:'Tagesspiegel',
        publishedDate: ( new tc.DateTime( "2018-08-16T00:00"+TIMEZONE ) ).toIsoString()
    },      {
        name:'taz',
        publishedDate: ( new tc.DateTime( "2018-08-16T00:00"+TIMEZONE ) ).toIsoString()
      },{
        name:'Berliner Register'
      }
    ]
  },
  'https://www.reachoutberlin.de/de/content/berlin-mitte-114': {
    sources:[
      {
        name:'Tagesspiegel',
        publishedDate: ( new tc.DateTime( "2018-05-05T00:00"+TIMEZONE ) ).toIsoString()
    },      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2018-05-05T00:00"+TIMEZONE ) ).toIsoString()
      },{
        name:'Berliner Morgenpost',
        publishedDate: ( new tc.DateTime( "2018-05-05T00:00"+TIMEZONE ) ).toIsoString()
      }
    ]
  }
}
