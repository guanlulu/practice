var parseString = require('xml2js').parseString;
// <?xml version="1.0" encoding="utf-8"?><o><a>  <u n="1006_00010078" a="o" nm="fengchunyan" r="895" /> </a></o>
var xml = '<?xml version="1.0" encoding="utf-8"?><cc a="80" n="1009_00010078" m="2" s="3"><mn b="1522739892"></mn></cc>'
parseString(xml, function (err, result) {
    // console.log(result.o.a[0].u[0].$);
    console.log(result.cc.$)
    console.log(result.cc.mn)
});