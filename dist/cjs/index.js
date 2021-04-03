"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analyzer = void 0;
const kuromoji = __importStar(require("kuromoji"));
const path = __importStar(require("path"));
function getTokenizerPromise() {
    return new Promise((resolve, reject) => {
        kuromoji
            .builder({
            dicPath: path.join(__dirname, "../../dict/")
        })
            .build((err, tokenizer) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(tokenizer);
            }
        });
    });
}
class TokenizerManager {
    constructor() {
        this._tokenizer = null;
    }
    getTokenizer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._tokenizer) {
                return this._tokenizer;
            }
            this._tokenizer = yield getTokenizerPromise();
            return this._tokenizer;
        });
    }
    static activate() {
        return new TokenizerManager();
    }
}
;
const manager = TokenizerManager.activate();
class Analyzer {
    static analyze(sentence) {
        return __awaiter(this, void 0, void 0, function* () {
            return manager.getTokenizer()
                .then(tokenizer => tokenizer
                .tokenize(sentence)
                .map((wo) => ({
                surface: wo.surface_form,
                pos: wo.pos
            })));
        });
    }
}
exports.Analyzer = Analyzer;
;
exports.default = Analyzer;
