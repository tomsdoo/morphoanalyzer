const analyzer = require("../index.js");
const assert = require("assert");

describe("test", function(){
  const sentence = "ぼく、ドラえもんです。";
  it("analyze()", function(done){
    analyzer.analyze(sentence).then(function(r){
      assert.equal(r.length,5);
      done();
    }, function(e){assert(false); done();});
  });
});
