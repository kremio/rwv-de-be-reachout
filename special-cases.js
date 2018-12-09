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
  },
  'https://www.reachoutberlin.de/de/content/berlin-marzahn-112': {
    sources:[
      {
        name:'ReachOut'
      }
    ]
  },
  'https://www.reachoutberlin.de/de/content/berlin-k%C3%B6penick-76':{
    sources:[
      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2017-06-23T00:00"+TIMEZONE ) ).toIsoString()
      }
    ]
  },
  'https://www.reachoutberlin.de/de/content/berlin-charlottenburg-62': {
    sources:[
      {
        name:'Tagesspiegel',
        publishedDate: ( new tc.DateTime( "2017-03-12T00:00"+TIMEZONE ) ).toIsoString()
      },      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2017-03-12T00:00"+TIMEZONE ) ).toIsoString()
      }
    ]
  },
  "https://www.reachoutberlin.de/de/content/berlin-lichtenberg-117": {
    sources:[
      {
        name:'ReachOut'
      }
    ]
  },
  "https://www.reachoutberlin.de/de/content/berlin-pankow-75": {
    sources:[
      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2016-09-27T00:00"+TIMEZONE ) ).toIsoString()
      },
      {
        name:'Tagesspiegel',
        publishedDate: ( new tc.DateTime( "2016-09-27T00:00"+TIMEZONE ) ).toIsoString()
      },
      {
        name:'Berliner Zeitung',
        publishedDate: ( new tc.DateTime( "2016-09-27T00:00"+TIMEZONE ) ).toIsoString()
      },
      {
        name:'Berliner Morgenpost',
        publishedDate: ( new tc.DateTime( "2016-09-27T00:00"+TIMEZONE ) ).toIsoString()
      },
      {
        name:'rbb-online.de',
        publishedDate: ( new tc.DateTime( "2016-09-27T00:00"+TIMEZONE ) ).toIsoString(),
        url:'https://rbb-online.de'
      },
      {
        name:'berlinonline.de',
        publishedDate: ( new tc.DateTime( "2016-09-27T00:00"+TIMEZONE ) ).toIsoString(),
        url:'https://berlinonline.de'
      }
    ]
  },
  "https://www.reachoutberlin.de/de/content/berlin-pankow-81": {
    sources:[
      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2017-02-27T00:00"+TIMEZONE ) ).toIsoString()
      }
    ]
  },
  "https://www.reachoutberlin.de/de/content/berlin-k%C3%B6penick-72": {
    sources:[
      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2016-08-16T00:00"+TIMEZONE ) ).toIsoString()
      },
      {
        name:'rbb-online.de',
        publishedDate: ( new tc.DateTime( "2016-08-16T00:00"+TIMEZONE ) ).toIsoString(),
        url:'https://rbb-online.de'
      },
      {
        name:'berlinonline.de',
        publishedDate: ( new tc.DateTime( "2016-08-16T00:00"+TIMEZONE ) ).toIsoString(),
        url:'https://berlinonline.de'
      }
    ]
  },
  "https://www.reachoutberlin.de/de/content/berlin-treptow-89": {
    sources:[
      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2016-08-09T00:00"+TIMEZONE ) ).toIsoString()
      },
      {
        name:'Tagesspiegel',
        publishedDate: ( new tc.DateTime( "2016-08-09T00:00"+TIMEZONE ) ).toIsoString()
      },
      {
        name:'rbb-online.de',
        publishedDate: ( new tc.DateTime( "2016-08-08T00:00"+TIMEZONE ) ).toIsoString(),
        url:'https://rbb-online.de'
      },
      {
        name:'berlinonline.de',
        publishedDate: ( new tc.DateTime( "2016-08-08T00:00"+TIMEZONE ) ).toIsoString(),
        url:'https://berlinonline.de'
      }
    ]

  }
}
