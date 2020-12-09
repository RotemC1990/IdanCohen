import { Observable } from 'rxjs';

export class FilesUploadMetadata {
    uploadProgress$: Observable<number>;
    downloadUrl$: Observable<string>;
    constructor(){}
  }