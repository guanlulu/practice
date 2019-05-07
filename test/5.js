var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: '10.0.0.150:9200',
  log: 'trace'
});

client.bulk({
    body: [
      // action description
    //   { index:  { _index: 'myindex', _type: 'mytype', _id: 1 } },
    //   { index:  { _index: 'myindex', _type: 'mytype', _id: 2 } },
    //   { index:  { _index: 'myindex', _type: 'mytype', _id: 3 } },
      { index:  { _index: 'myindex', _type: 'mytype', _id: 4 } },
       // the document to index
      { title: 'foo' },
    //   // action description
    //   { update: { _index: 'myindex', _type: 'mytype', _id: 2 } },
    //   // the document to update
    //   { doc: { title: 'foo' } },
    //   // action description
    //   { delete: { _index: 'myindex', _type: 'mytype', _id: 3 } },
      // no document needed for this delete
    ]
  }, function (err, resp) {
    // ...
  });