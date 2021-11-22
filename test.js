let assert = chai.assert;
describe('TestoviParser', function() {
 describe('dajTacnost()', function() {
   it('test1', function() {
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
     const obj=JSON.parse(text);
     const f=TestoviParser.dajTacnost(JSON.stringify(obj));
     assert.equal(JSON.stringify(f), '{"tacnost":"100%","greske":[]}' ,"Sve tačno!");
   });
   it('test2', function() {
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
  const obj=JSON.parse(text);
  const f=TestoviParser.dajTacnost(JSON.stringify(obj));
  assert.equal(JSON.stringify(f), '{"tacnost":"50%","greske":[]}' ,"Sve tačno!");
});
 });
});
