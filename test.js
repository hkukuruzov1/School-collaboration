let assert = chai.assert;
describe('TestoviParser', function() {
 describe('dajTacnost()', function() {
   it('sve tačno', function() {
       const text=`{
        "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 2,
          "pending": 0,
          "failures": 0,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
        },
        "tests": [
          {
            "title": "should draw 3 rows when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "should draw 2 columns in row 2 when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
        ],
        "pending": [],
        "failures": [],
        "passes": [
          {
            "title": "should draw 3 rows when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "should draw 2 columns in row 2 when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
        ]
      }
      `;
     const f=TestoviParser.dajTacnost(text);
     assert.equal(JSON.stringify(f), '{"tacnost":"100%","greske":[]}' ,"sve tačno");
   });
   it('jedan tačan', function() {
    const text=`{
     "stats": {
       "suites": 2,
       "tests": 2,
       "passes": 1,
       "pending": 0,
       "failures": 1,
       "start": "2021-11-05T15:00:26.343Z",
       "end": "2021-11-05T15:00:26.352Z",
       "duration": 9
     },
     "tests": [
       {
         "title": "should draw 3 rows when parameter are 2,3",
         "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
         "file": null,
         "duration": 1,
         "currentRetry": 0,
         "speed": "fast",
         "err": {}
       },
       {
         "title": "should draw 2 columns in row 2 when parameter are 2,3",
         "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
         "file": null,
         "duration": 0,
         "currentRetry": 0,
         "speed": "fast",
         "err": {}
       }
     ],
     "pending": [],
     "failures": [
        {
            "title": "should draw 3 rows when parameter are 2,3",
            "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
     ],
     "passes": [
       {
         "title": "should draw 2 columns in row 2 when parameter are 2,3",
         "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
         "file": null,
         "duration": 0,
         "currentRetry": 0,
         "speed": "fast",
         "err": {}
       }
     ]
   }
   `;
  const f=TestoviParser.dajTacnost(text);
  assert.equal(JSON.stringify(f), '{"tacnost":"50%","greske":["Tabela crtaj() should draw 3 rows when parameter are 2,3"]}' ,"jedan tačan");
});
it('padaju svi', function() {
  const text=`{
   "stats": {
     "suites": 2,
     "tests": 3,
     "passes": 0,
     "pending": 0,
     "failures": 3,
     "start": "2021-11-05T15:00:26.343Z",
     "end": "2021-11-05T15:00:26.352Z",
     "duration": 9
   },
   "tests": [
     {
       "title": "should draw 3 rows when parameter are 2,3",
       "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
       "file": null,
       "duration": 1,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
       "title": "should draw 2 columns in row 2 when parameter are 2,3",
       "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
      "title": "should draw 1 columns in row 1 when parameter are 3,3",
      "fullTitle": "Tabela crtaj() should draw 1 columns in row 1 when parameter are 3,3",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
   ],
   "pending": [],
   "failures": [
      {
          "title": "should draw 3 rows when parameter are 2,3",
          "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },
        {
          "title": "should draw 2 columns in row 2 when parameter are 2,3",
          "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
          "file": null,
          "duration": 0,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },
        {
         "title": "should draw 1 columns in row 1 when parameter are 3,3",
         "fullTitle": "Tabela crtaj() should draw 1 columns in row 1 when parameter are 3,3",
         "file": null,
         "duration": 0,
         "currentRetry": 0,
         "speed": "fast",
         "err": {}
       }
   ],
   "passes": []
 }
 `;
const f=TestoviParser.dajTacnost(text);
assert.equal(JSON.stringify(f), '{"tacnost":"0%","greske":["Tabela crtaj() should draw 3 rows when parameter are 2,3","Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3","Tabela crtaj() should draw 1 columns in row 1 when parameter are 3,3"]}' ,"padaju svi");
});
it('nevalidan json', function() {
  const text=`{
   "stats": {
     "suites": 2,
     "tests": 2,
     "passes": 2,
     "pending": 0,
     "failures": 0,
     "start": "2021-11-05T15:00:26.343Z",
     "end": "2021-11-05T15:00:26.352Z",
     "duration": 9
   },
   "tests": [
     {
       "title": "should draw 3 rows when parameter are 2,3",
       "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
       "file": null,
       "duration": 1,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     }
     {
       "title": "should draw 2 columns in row 2 when parameter are 2,3",
       "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     }
   ],
   "pending": [],
   "failures": [],
   "passes": [
     {
       "title": "should draw 3 rows when parameter are 2,3",
       "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
       "file": null,
       "duration": 1,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
       "title": "should draw 2 columns in row 2 when parameter are 2,3",
       "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     }
   ]
 }
 `;
const f=TestoviParser.dajTacnost(text);
assert.equal(JSON.stringify(f), '{"tacnost":"0%","greske":["Testovi se ne mogu izvršiti"]}' ,"nevalidan json");
});
it('5 od 7 tačno', function() {
  const text=`{
   "stats": {
     "suites": 2,
     "tests": 7,
     "passes": 5,
     "pending": 0,
     "failures": 2,
     "start": "2021-11-05T15:00:26.343Z",
     "end": "2021-11-05T15:00:26.352Z",
     "duration": 9
   },
   "tests": [
     {
       "title": "should draw 3 rows when parameter are 2,3",
       "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
       "file": null,
       "duration": 1,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
       "title": "should draw 2 columns in row 2 when parameter are 2,3",
       "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
       "title": "should draw 4 columns in row 4 when parameter are 4,4",
       "fullTitle": "Tabela crtaj() should draw 4 columns in row 4 when parameter are 4,4",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
       "title": "should draw 5 columns in row 5 when parameter are 5,5",
       "fullTitle": "Tabela crtaj() should draw 5 columns in row 5 when parameter are 5,5",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
       "title": "should draw 6 columns in row 6 when parameter are 6,6",
       "fullTitle": "Tabela crtaj() should draw 6 columns in row 6 when parameter are 6,6",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
       "title": "should draw 7 columns in row 7 when parameter are 7,7",
       "fullTitle": "Tabela crtaj() should draw 7 columns in row 7 when parameter are 7,7",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     },
     {
       "title": "should draw 8 columns in row 8 when parameter are 8,8",
       "fullTitle": "Tabela crtaj() should draw 8 columns in row 8 when parameter are 8,8",
       "file": null,
       "duration": 0,
       "currentRetry": 0,
       "speed": "fast",
       "err": {}
     }
   ],
   "pending": [],
   "failures": [{
    "title": "should draw 3 rows when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 3 rows when parameter are 2,3",
    "file": null,
    "duration": 1,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  },
  {
    "title": "should draw 2 columns in row 2 when parameter are 2,3",
    "fullTitle": "Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3",
    "file": null,
    "duration": 0,
    "currentRetry": 0,
    "speed": "fast",
    "err": {}
  }],
   "passes": [
    {
      "title": "should draw 4 columns in row 4 when parameter are 4,4",
      "fullTitle": "Tabela crtaj() should draw 4 columns in row 4 when parameter are 4,4",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 5 columns in row 5 when parameter are 5,5",
      "fullTitle": "Tabela crtaj() should draw 5 columns in row 5 when parameter are 5,5",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 6 columns in row 6 when parameter are 6,6",
      "fullTitle": "Tabela crtaj() should draw 6 columns in row 6 when parameter are 6,6",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 7 columns in row 7 when parameter are 7,7",
      "fullTitle": "Tabela crtaj() should draw 7 columns in row 7 when parameter are 7,7",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    },
    {
      "title": "should draw 8 columns in row 8 when parameter are 8,8",
      "fullTitle": "Tabela crtaj() should draw 8 columns in row 8 when parameter are 8,8",
      "file": null,
      "duration": 0,
      "currentRetry": 0,
      "speed": "fast",
      "err": {}
    }
   ]
 }
 `;
const f=TestoviParser.dajTacnost(text);
assert.equal(JSON.stringify(f), '{"tacnost":"71.4%","greske":["Tabela crtaj() should draw 3 rows when parameter are 2,3","Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3"]}' ,"5 od 7 tačno");
});
 });
});
