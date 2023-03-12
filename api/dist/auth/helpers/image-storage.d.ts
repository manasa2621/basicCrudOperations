export declare const saveImageToStorage: {
    storage: any;
    fileFilter: (req: any, file: any, cb: any) => void;
};
export declare const isFileExtensionSafe: (fullFilePath: string) => Observable<boolean>;
export declare const removeFile: (fullFilePath: string) => void;
