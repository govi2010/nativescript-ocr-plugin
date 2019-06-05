import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import {ImageSource} from "tns-core-modules/image-source";

export interface Common {
  retrieveText(options: RetrieveTextOptions): Promise<RetrieveTextResult>;
}
export interface RetrieveTextOptions {
  image: ImageSource;
  /**
   * Default "eng".
   */
  language?: string;
  /**
   * For instance to only extract numbers, set: "0123456789".
   */
  whitelist?: string;
  /**
   * For instance to exclude numbers, set: "0123456789".
   */
  blacklist?: string;
  onProgress?: (percentage: number) => void;
}

export interface RetrieveTextResult {
  text: string;
}
