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
  },
  "https://www.reachoutberlin.de/de/content/berlin-wei%C3%9Fensee-35": {
    sources:[
      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2017-02-27T00:00"+TIMEZONE ) ).toIsoString()
      }
    ]
  },
  "https://www.reachoutberlin.de/de/content/berlin-treptow-88": {
    sources:[
      {
        name:'Polizei Berlin',
        publishedDate: ( new tc.DateTime( "2016-09-16T00:00"+TIMEZONE ) ).toIsoString()
      },
      {
        name:'Kleine Anfrage, 17/18824'
      },
      {
        name:'Register Treptow-Köpenick'
      }
    ]
  },
  "https://www.reachoutberlin.de/de/content/berlin-hellersdorf-72": {
    sources:[{
      name: "Antirassistisches Register ASH, Polis*"
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-marzahn-82": {
    sources:[{
      name: "Antirassistisches Register ASH, Polis*"
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-friedrichshain-188": {
    sources:[{
      name: "Polizei Berlin",
      publishedDate: ( new tc.DateTime( "2015-11-07T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name: "Register Friedrichshain-Kreuzberg"
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-marzahn-79": {
    sources:[{
      name: "Antirassistisches Register ASH, Polis*"
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-treptow-78": {
    sources:[{
      name: "Polizei Berlin",
      publishedDate: ( new tc.DateTime( "2015-03-15T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name: "Tagesspiegel",
      publishedDate: ( new tc.DateTime( "2015-03-15T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name: "Berliner Zeitung",
      publishedDate: ( new tc.DateTime( "2015-03-15T00:00"+TIMEZONE ) ).toIsoString()
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-mitte-64": {
    sources:[{
      name: "Polizei Berlin",
      publishedDate: ( new tc.DateTime( "2015-02-20T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name: "Tagesspiegel",
      publishedDate: ( new tc.DateTime( "2015-02-20T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name: "Berliner Zeitung",
      publishedDate: ( new tc.DateTime( "2015-02-20T00:00"+TIMEZONE ) ).toIsoString()
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-pankow-51": {
    sources:[{
      name:"Polizei Berlin",
      publishedDate: ( new tc.DateTime( "2014-06-22T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name:"SPD Pankow",
      publishedDate: ( new tc.DateTime( "2014-06-21T00:00"+TIMEZONE ) ).toIsoString()
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-friedrichshain-170": {
    sources:[{
      name:"Polizei Berlin",
      publishedDate: ( new tc.DateTime( "2013-10-05T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name:"transtagung.de",
      publishedDate: ( new tc.DateTime( "2013-10-04T00:00"+TIMEZONE ) ).toIsoString(),
      url:"http://transtagung.de/"
    },{
       name:"queer.de",
       publishedDate: ( new tc.DateTime( "2013-10-05T00:00"+TIMEZONE ) ).toIsoString(),
       url:"https://www.queer.de/"
    },{
      name:"Tagesspiegel",
      publishedDate: ( new tc.DateTime( "2013-10-05T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name:"Berliner Zeitung",
      publishedDate: ( new tc.DateTime( "2013-10-05T00:00"+TIMEZONE ) ).toIsoString()
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-charlottenburg-23": {
    sources:[{
      name:"siegessäule.de",
      publishedDate: ( new tc.DateTime( "2013-09-29T00:00"+TIMEZONE ) ).toIsoString(),
      url:"https://www.siegessaeule.de/"
    },{
      name:"Tagesspiegel",
      publishedDate: ( new tc.DateTime( "2013-09-30T00:00"+TIMEZONE ) ).toIsoString()
    },{
       name:"Infoportal Charlottenburg Wilmersdorf",
    }]
  },
  "https://www.reachoutberlin.de/de/content/berlin-charlottenburg-17": {
    sources:[{
      name:"Berliner Kurier",
      publishedDate: ( new tc.DateTime( "2013-01-02T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name:"Polizei Berlin",
      publishedDate: ( new tc.DateTime( "2013-01-02T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name:"Berliner Zeitung",
      publishedDate: ( new tc.DateTime( "2013-01-03T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name:"Tageszeitung",
      publishedDate: ( new tc.DateTime( "2013-01-04T00:00"+TIMEZONE ) ).toIsoString()
    },{
      name:"Tagesspiegel",
      publishedDate: ( new tc.DateTime( "2013-01-05T00:00"+TIMEZONE ) ).toIsoString()
    },{
       name:"ReachOut",
    }]

  }
}
