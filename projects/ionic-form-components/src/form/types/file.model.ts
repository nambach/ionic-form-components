export interface FileModel extends File {
  lastModifiedDate?: Date;
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

