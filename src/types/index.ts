type IFileSystemItem = {
  name: string;
  path: string;
};

type IFileSystemFolder = IFileSystemItem & {
  content: IFileSystemItem[];
};

interface FilesApiResponse {
  success: boolean;
  result?: IFileSystemItem;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFolder = (item: any): item is IFileSystemFolder =>
  item["content"] != null;

export { isFolder };
export type { IFileSystemItem, IFileSystemFolder, FilesApiResponse };
