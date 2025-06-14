const url=require('url')

const adr='https://thecareerresearch.com/category/job/governmebtjobupdate/'
const myURL=url.parse(adr,true);
console.log(myURL.protocol);