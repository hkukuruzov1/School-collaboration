let assert = chai.assert;
describe('TestoviParser', function() {
 describe('porediRezultate()', function() {
    it('promjena 100%', function() {
        const text1=`{
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
          const text2=`{
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
          const f=TestoviParser.porediRezultate(text1,text2);
assert.equal(JSON.stringify(f), '{"promjena":"100%","greske":["Tabela crtaj() should draw 1 columns in row 1 when parameter are 3,3","Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3","Tabela crtaj() should draw 3 rows when parameter are 2,3"]}' ,"padaju svi");
    });
    it('promjena 50%', function() {
        const text1=`{
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
          const text2=`{
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
          const f=TestoviParser.porediRezultate(text1,text2);
assert.equal(JSON.stringify(f), '{"promjena":"50%","greske":["Tabela crtaj() should draw 3 rows when parameter are 2,3"]}' ,"padaju svi");
    });
    it('postoje testovi koji padaju u rez 1, a nema ih u rez2', function() {
        const text1=`{
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
          const text2=`{
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
                "title": "should draw 4 rows when parameter are 3,4",
                "fullTitle": "Tabela crtaj() should draw 4 rows when parameter are 3,4",
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
                    "title": "should draw 4 rows when parameter are 3,4",
                    "fullTitle": "Tabela crtaj() should draw 4 rows when parameter are 3,4",
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
          const f=TestoviParser.porediRezultate(text1,text2);
          assert.equal(JSON.stringify(f), '{"promjena":"66.7%","greske":["Tabela crtaj() should draw 3 rows when parameter are 2,3","Tabela crtaj() should draw 4 rows when parameter are 3,4"]}' ,"padaju svi");
    });
    it('postoje testovi koji padaju u rez 1, a nema ih u rez2', function() {
        const text1=`{
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
                "title": "should draw 5 columns in row 5 when parameter are 5,5",
                "fullTitle": "Tabela crtaj() should draw 5 columns in row 5 when parameter are 5,5",
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
                "title": "should draw 5 columns in row 5 when parameter are 5,5",
                "fullTitle": "Tabela crtaj() should draw 5 columns in row 5 when parameter are 5,5",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
            ]
          }
          `;
          const text2=`{
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
                "title": "should draw 4 rows when parameter are 3,4",
                "fullTitle": "Tabela crtaj() should draw 4 rows when parameter are 3,4",
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
                    "title": "should draw 4 rows when parameter are 3,4",
                    "fullTitle": "Tabela crtaj() should draw 4 rows when parameter are 3,4",
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
          const f=TestoviParser.porediRezultate(text1,text2);
          assert.equal(JSON.stringify(f), '{"promjena":"66.7%","greske":["Tabela crtaj() should draw 3 rows when parameter are 2,3","Tabela crtaj() should draw 4 rows when parameter are 3,4"]}' ,"padaju svi");
    });
    it('prolaze svi u rezultatu 1, a padaju svi u rezultatu 2, nisu isti testovi', function() {
        const text1=`{
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
          const text2=`{
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
          const f=TestoviParser.porediRezultate(text1,text2);
assert.equal(JSON.stringify(f), '{"promjena":"100%","greske":["Tabela crtaj() should draw 1 columns in row 1 when parameter are 3,3","Tabela crtaj() should draw 2 columns in row 2 when parameter are 2,3","Tabela crtaj() should draw 3 rows when parameter are 2,3"]}' ,"padaju svi");
    });
 });
});