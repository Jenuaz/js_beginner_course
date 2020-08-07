const hyperquest = require('hyperquest')
    , bl         = require('bl')
    , url        = process.argv[2];

hyperquest(url).pipe(bl(function (err, data) {
  console.log(data.toString())
}))

