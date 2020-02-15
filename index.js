const kuromoji = require("kuromoji");

const gettokenizer = (function(){var cache = null;return function(){return new Promise(function(resolve,reject){
    if(cache){resolve(cache);return;}
    kuromoji.builder({dicPath:"./node_modules/kuromoji/dict/"}).build(function(err, tokenizer){
        if(err){reject(err);return;}
        cache = tokenizer; resolve(cache);
    });
});};})();

function analyzeit(sentence){return new Promise(function(resolve,reject){
    gettokenizer().then(function(tokenizer){
        resolve(tokenizer.tokenize(sentence).map(function(wo){return {surface:wo.surface_form,pos:wo.pos};}));
    },reject);
});}
exports.analyze = analyzeit;
