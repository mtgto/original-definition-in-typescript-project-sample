import { toByteArray } from "base64-js";
// import { toByteArray } from "../types/base64-js/index"; // ビルドは通るが実行時にそのパスにjsがなくて失敗する
import { TextDecoder } from "util";

const encoded = "44GT44KT44Gr44Gh44Gv"; // "こんにちは"
console.log(`encoded: ${encoded}`);
const decoded = new TextDecoder().decode(toByteArray(encoded));
console.log(`decoded: ${decoded}`);
