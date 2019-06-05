import { Observable } from "tns-core-modules/data/observable";
import { ImageSource } from "tns-core-modules/image-source";
import { Ocr } from "nativescript-ocr";
import {RetrieveTextResult} from "../../../src/ocr.common";

export class HomeViewModel extends Observable {
    private static BUSY_KEY = "isBusy";
    private static RESULT_KEY = "result";
    private ocr: Ocr;
    constructor() {
        super();
        this.ocr = new Ocr();
    }
    public doRetrieveText(): void {
        this.set(HomeViewModel.RESULT_KEY, null);
        this.set(HomeViewModel.BUSY_KEY, true);
        let img: ImageSource = new ImageSource();
        img.fromFile("~/samples/scanned.png").then((success: boolean) => {
            if (success) {
                // @ts-ignore
                this.ocr.retrieveText({
                    image: img,
                    // whitelist: "0123456789",
                    // blacklist: "0123456789",
                    onProgress: (percentage: number ) => {
                        console.log(`Decoding progress: ${percentage}%`);
                    }
                }).then(
                    (result: RetrieveTextResult) => {
                        this.set(HomeViewModel.BUSY_KEY, false);
                        this.set(HomeViewModel.RESULT_KEY, result.text);
                    }, (error: string) => {
                        this.set(HomeViewModel.BUSY_KEY, false);
                        this.set(HomeViewModel.RESULT_KEY, error);
                    });
            }
        });
    }
}
