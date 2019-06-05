import {Common, RetrieveTextOptions, RetrieveTextResult} from './ocr.common';
export declare class Ocr implements Common {
    retrieveText(options: RetrieveTextOptions): Promise<RetrieveTextResult>;
}
