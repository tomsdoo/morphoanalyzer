const { Analyzer } = require("../../dist/cjs/index.js");
const assert = require("assert");

describe("test for class", function(){
  const sentence = "ぼく、ドラえもんです。";
  it("analyze()", function(done){
    Analyzer.analyze(sentence).then(function(r){
      assert.equal(r.length,5);
      done();
    }, function(e){assert(false); done();});
  });
});
