export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars["Boolean"]>;
  readonly ne: Maybe<Scalars["Boolean"]>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Boolean"]>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars["Date"]>;
  readonly ne: Maybe<Scalars["Date"]>;
  readonly gt: Maybe<Scalars["Date"]>;
  readonly gte: Maybe<Scalars["Date"]>;
  readonly lt: Maybe<Scalars["Date"]>;
  readonly lte: Maybe<Scalars["Date"]>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Date"]>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  readonly id: Scalars["ID"];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly sourceInstanceName: Maybe<Scalars["String"]>;
  readonly absolutePath: Maybe<Scalars["String"]>;
  readonly relativePath: Maybe<Scalars["String"]>;
  readonly extension: Maybe<Scalars["String"]>;
  readonly size: Maybe<Scalars["Int"]>;
  readonly prettySize: Maybe<Scalars["String"]>;
  readonly modifiedTime: Maybe<Scalars["Date"]>;
  readonly accessTime: Maybe<Scalars["Date"]>;
  readonly changeTime: Maybe<Scalars["Date"]>;
  readonly birthTime: Maybe<Scalars["Date"]>;
  readonly root: Maybe<Scalars["String"]>;
  readonly dir: Maybe<Scalars["String"]>;
  readonly base: Maybe<Scalars["String"]>;
  readonly ext: Maybe<Scalars["String"]>;
  readonly name: Maybe<Scalars["String"]>;
  readonly relativeDirectory: Maybe<Scalars["String"]>;
  readonly dev: Maybe<Scalars["Int"]>;
  readonly mode: Maybe<Scalars["Int"]>;
  readonly nlink: Maybe<Scalars["Int"]>;
  readonly uid: Maybe<Scalars["Int"]>;
  readonly gid: Maybe<Scalars["Int"]>;
  readonly rdev: Maybe<Scalars["Int"]>;
  readonly blksize: Maybe<Scalars["Int"]>;
  readonly ino: Maybe<Scalars["Int"]>;
  readonly blocks: Maybe<Scalars["Int"]>;
  readonly atimeMs: Maybe<Scalars["Float"]>;
  readonly mtimeMs: Maybe<Scalars["Float"]>;
  readonly ctimeMs: Maybe<Scalars["Float"]>;
  readonly birthtimeMs: Maybe<Scalars["Float"]>;
  readonly atime: Maybe<Scalars["Date"]>;
  readonly mtime: Maybe<Scalars["Date"]>;
  readonly ctime: Maybe<Scalars["Date"]>;
  readonly birthtime: Maybe<Scalars["Date"]>;
};

export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars["String"]>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime"
}

export type DirectoryFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars["String"];
  readonly fieldValue: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  readonly highlight: Maybe<Scalars["String"]>;
  readonly shadow: Maybe<Scalars["String"]>;
  readonly opacity: Maybe<Scalars["Int"]>;
};

export type File = Node & {
  readonly id: Scalars["ID"];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly sourceInstanceName: Maybe<Scalars["String"]>;
  readonly absolutePath: Maybe<Scalars["String"]>;
  readonly relativePath: Maybe<Scalars["String"]>;
  readonly extension: Maybe<Scalars["String"]>;
  readonly size: Maybe<Scalars["Int"]>;
  readonly prettySize: Maybe<Scalars["String"]>;
  readonly modifiedTime: Maybe<Scalars["Date"]>;
  readonly accessTime: Maybe<Scalars["Date"]>;
  readonly changeTime: Maybe<Scalars["Date"]>;
  readonly birthTime: Maybe<Scalars["Date"]>;
  readonly root: Maybe<Scalars["String"]>;
  readonly dir: Maybe<Scalars["String"]>;
  readonly base: Maybe<Scalars["String"]>;
  readonly ext: Maybe<Scalars["String"]>;
  readonly name: Maybe<Scalars["String"]>;
  readonly relativeDirectory: Maybe<Scalars["String"]>;
  readonly dev: Maybe<Scalars["Int"]>;
  readonly mode: Maybe<Scalars["Int"]>;
  readonly nlink: Maybe<Scalars["Int"]>;
  readonly uid: Maybe<Scalars["Int"]>;
  readonly gid: Maybe<Scalars["Int"]>;
  readonly rdev: Maybe<Scalars["Int"]>;
  readonly blksize: Maybe<Scalars["Int"]>;
  readonly ino: Maybe<Scalars["Int"]>;
  readonly blocks: Maybe<Scalars["Int"]>;
  readonly atimeMs: Maybe<Scalars["Float"]>;
  readonly mtimeMs: Maybe<Scalars["Float"]>;
  readonly ctimeMs: Maybe<Scalars["Float"]>;
  readonly birthtimeMs: Maybe<Scalars["Float"]>;
  readonly atime: Maybe<Scalars["Date"]>;
  readonly mtime: Maybe<Scalars["Date"]>;
  readonly ctime: Maybe<Scalars["Date"]>;
  readonly birthtime: Maybe<Scalars["Date"]>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars["String"]>;
  readonly childMdx: Maybe<Mdx>;
  readonly childImageSharp: Maybe<ImageSharp>;
};

export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileBirthtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars["String"]>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

export enum FileFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime",
  PublicUrl = "publicURL"
}

export type FileFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
};

export type FileGroupConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars["String"];
  readonly fieldValue: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars["Float"]>;
  readonly ne: Maybe<Scalars["Float"]>;
  readonly gt: Maybe<Scalars["Float"]>;
  readonly gte: Maybe<Scalars["Float"]>;
  readonly lt: Maybe<Scalars["Float"]>;
  readonly lte: Maybe<Scalars["Float"]>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
};

export enum HeadingsMdx {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6"
}

export enum ImageCropFocus {
  Center = "CENTER",
  North = "NORTH",
  Northeast = "NORTHEAST",
  East = "EAST",
  Southeast = "SOUTHEAST",
  South = "SOUTH",
  Southwest = "SOUTHWEST",
  West = "WEST",
  Northwest = "NORTHWEST",
  Entropy = "ENTROPY",
  Attention = "ATTENTION"
}

export enum ImageFit {
  Cover = "COVER",
  Contain = "CONTAIN",
  Fill = "FILL"
}

export enum ImageFormat {
  NoChange = "NO_CHANGE",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP"
}

export type ImageSharp = Node & {
  readonly id: Scalars["ID"];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  base64Width: Maybe<Scalars["Int"]>;
  jpegProgressive: Scalars["Boolean"];
  pngCompressionSpeed: Scalars["Int"];
  grayscale: Scalars["Boolean"];
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars["Int"]>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars["Int"];
};

export type ImageSharpResolutionsArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  base64Width: Maybe<Scalars["Int"]>;
  jpegProgressive: Scalars["Boolean"];
  pngCompressionSpeed: Scalars["Int"];
  grayscale: Scalars["Boolean"];
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars["Int"]>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars["Int"];
};

export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars["Int"]>;
  maxHeight: Maybe<Scalars["Int"]>;
  base64Width: Maybe<Scalars["Int"]>;
  grayscale: Scalars["Boolean"];
  jpegProgressive: Scalars["Boolean"];
  pngCompressionSpeed: Scalars["Int"];
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars["Int"]>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars["String"];
  rotate: Scalars["Int"];
  sizes: Scalars["String"];
  srcSetBreakpoints: ReadonlyArray<Maybe<Scalars["Int"]>>;
};

export type ImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars["Int"]>;
  maxHeight: Maybe<Scalars["Int"]>;
  base64Width: Maybe<Scalars["Int"]>;
  grayscale: Scalars["Boolean"];
  jpegProgressive: Scalars["Boolean"];
  pngCompressionSpeed: Scalars["Int"];
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars["Int"]>;
  toFormat: ImageFormat;
  toFormatBase64: ImageFormat;
  cropFocus: ImageCropFocus;
  fit: ImageFit;
  background: Scalars["String"];
  rotate: Scalars["Int"];
  sizes: Scalars["String"];
  srcSetBreakpoints: ReadonlyArray<Maybe<Scalars["Int"]>>;
};

export type ImageSharpResizeArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  quality: Maybe<Scalars["Int"]>;
  jpegProgressive: Scalars["Boolean"];
  pngCompressionLevel: Scalars["Int"];
  pngCompressionSpeed: Scalars["Int"];
  grayscale: Scalars["Boolean"];
  duotone: Maybe<DuotoneGradient>;
  base64: Scalars["Boolean"];
  traceSVG: Maybe<Potrace>;
  toFormat: ImageFormat;
  cropFocus: ImageCropFocus;
  rotate: Scalars["Int"];
};

export type ImageSharpConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars["String"]>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  FixedBase64 = "fixed___base64",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcWebp = "fixed___srcWebp",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedOriginalName = "fixed___originalName",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  ResolutionsOriginalName = "resolutions___originalName",
  FluidBase64 = "fluid___base64",
  FluidTracedSvg = "fluid___tracedSVG",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcWebp = "fluid___srcWebp",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSizes = "fluid___sizes",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidPresentationHeight = "fluid___presentationHeight",
  SizesBase64 = "sizes___base64",
  SizesTracedSvg = "sizes___tracedSVG",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcWebp = "sizes___srcWebp",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSizes = "sizes___sizes",
  SizesOriginalImg = "sizes___originalImg",
  SizesOriginalName = "sizes___originalName",
  SizesPresentationWidth = "sizes___presentationWidth",
  SizesPresentationHeight = "sizes___presentationHeight",
  OriginalWidth = "original___width",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
  ResizeHeight = "resize___height",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeOriginalName = "resize___originalName"
}

export type ImageSharpFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFixed = {
  readonly base64: Maybe<Scalars["String"]>;
  readonly tracedSVG: Maybe<Scalars["String"]>;
  readonly aspectRatio: Maybe<Scalars["Float"]>;
  readonly width: Maybe<Scalars["Float"]>;
  readonly height: Maybe<Scalars["Float"]>;
  readonly src: Maybe<Scalars["String"]>;
  readonly srcSet: Maybe<Scalars["String"]>;
  readonly srcWebp: Maybe<Scalars["String"]>;
  readonly srcSetWebp: Maybe<Scalars["String"]>;
  readonly originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  readonly base64: Maybe<Scalars["String"]>;
  readonly tracedSVG: Maybe<Scalars["String"]>;
  readonly aspectRatio: Maybe<Scalars["Float"]>;
  readonly src: Maybe<Scalars["String"]>;
  readonly srcSet: Maybe<Scalars["String"]>;
  readonly srcWebp: Maybe<Scalars["String"]>;
  readonly srcSetWebp: Maybe<Scalars["String"]>;
  readonly sizes: Maybe<Scalars["String"]>;
  readonly originalImg: Maybe<Scalars["String"]>;
  readonly originalName: Maybe<Scalars["String"]>;
  readonly presentationWidth: Maybe<Scalars["Int"]>;
  readonly presentationHeight: Maybe<Scalars["Int"]>;
};

export type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars["String"];
  readonly fieldValue: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
  readonly width: Maybe<Scalars["Float"]>;
  readonly height: Maybe<Scalars["Float"]>;
  readonly src: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  readonly src: Maybe<Scalars["String"]>;
  readonly tracedSVG: Maybe<Scalars["String"]>;
  readonly width: Maybe<Scalars["Int"]>;
  readonly height: Maybe<Scalars["Int"]>;
  readonly aspectRatio: Maybe<Scalars["Float"]>;
  readonly originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars["String"]>;
  readonly tracedSVG: Maybe<Scalars["String"]>;
  readonly aspectRatio: Maybe<Scalars["Float"]>;
  readonly width: Maybe<Scalars["Float"]>;
  readonly height: Maybe<Scalars["Float"]>;
  readonly src: Maybe<Scalars["String"]>;
  readonly srcSet: Maybe<Scalars["String"]>;
  readonly srcWebp: Maybe<Scalars["String"]>;
  readonly srcSetWebp: Maybe<Scalars["String"]>;
  readonly originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  readonly base64: Maybe<Scalars["String"]>;
  readonly tracedSVG: Maybe<Scalars["String"]>;
  readonly aspectRatio: Maybe<Scalars["Float"]>;
  readonly src: Maybe<Scalars["String"]>;
  readonly srcSet: Maybe<Scalars["String"]>;
  readonly srcWebp: Maybe<Scalars["String"]>;
  readonly srcSetWebp: Maybe<Scalars["String"]>;
  readonly sizes: Maybe<Scalars["String"]>;
  readonly originalImg: Maybe<Scalars["String"]>;
  readonly originalName: Maybe<Scalars["String"]>;
  readonly presentationWidth: Maybe<Scalars["Int"]>;
  readonly presentationHeight: Maybe<Scalars["Int"]>;
};

export type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  readonly content: Maybe<Scalars["String"]>;
  readonly contentDigest: Scalars["String"];
  readonly description: Maybe<Scalars["String"]>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly ignoreType: Maybe<Scalars["Boolean"]>;
  readonly mediaType: Maybe<Scalars["String"]>;
  readonly owner: Scalars["String"];
  readonly type: Scalars["String"];
};

export type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars["Int"]>;
  readonly ne: Maybe<Scalars["Int"]>;
  readonly gt: Maybe<Scalars["Int"]>;
  readonly gte: Maybe<Scalars["Int"]>;
  readonly lt: Maybe<Scalars["Int"]>;
  readonly lte: Maybe<Scalars["Int"]>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
};

export type JsonQueryOperatorInput = {
  readonly eq: Maybe<Scalars["JSON"]>;
  readonly ne: Maybe<Scalars["JSON"]>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars["JSON"]>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["JSON"]>>>;
  readonly regex: Maybe<Scalars["JSON"]>;
  readonly glob: Maybe<Scalars["JSON"]>;
};

export type Mdx = Node & {
  readonly id: Scalars["ID"];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly rawBody: Maybe<Scalars["String"]>;
  readonly fileAbsolutePath: Maybe<Scalars["String"]>;
  readonly code: Maybe<MdxCodeMdx>;
  readonly excerpt: Maybe<Scalars["String"]>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars["String"]>;
  readonly tableOfContents: Maybe<Scalars["JSON"]>;
  readonly timeToRead: Maybe<Scalars["Int"]>;
  readonly wordCount: Maybe<WordCountsMdx>;
};

export type MdxExcerptArgs = {
  pruneLength: Scalars["Int"];
};

export type MdxHeadingsArgs = {
  depth: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth: Maybe<Scalars["Int"]>;
};

export type MdxCodeMdx = {
  readonly body: Maybe<Scalars["String"]>;
  readonly scope: Maybe<Scalars["String"]>;
};

export type MdxCodeMdxFilterInput = {
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly scope: Maybe<StringQueryOperatorInput>;
};

export type MdxConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars["String"]>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  FrontmatterTitle = "frontmatter___title",
  FrontmatterId = "frontmatter___id",
  FrontmatterPath = "frontmatter___path",
  FrontmatterPageTitle = "frontmatter___pageTitle",
  FrontmatterDescription = "frontmatter___description",
  FrontmatterQuestion = "frontmatter___question",
  FrontmatterAnswers = "frontmatter___answers",
  FrontmatterCorrectAnswer = "frontmatter___correctAnswer",
  FrontmatterVideoId = "frontmatter___videoId",
  FrontmatterParent = "frontmatter____PARENT",
  FrontmatterDuration = "frontmatter___duration",
  FrontmatterTutorialTitle = "frontmatter___tutorialTitle",
  FrontmatterBanner = "frontmatter___banner",
  RawBody = "rawBody",
  FileAbsolutePath = "fileAbsolutePath",
  CodeBody = "code___body",
  CodeScope = "code___scope",
  Excerpt = "excerpt",
  Headings = "headings",
  HeadingsValue = "headings___value",
  HeadingsDepth = "headings___depth",
  Html = "html",
  TableOfContents = "tableOfContents",
  TimeToRead = "timeToRead",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words"
}

export type MdxFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly frontmatter: Maybe<MdxFrontmatterFilterInput>;
  readonly rawBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly code: Maybe<MdxCodeMdxFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly headings: Maybe<MdxHeadingMdxFilterListInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly tableOfContents: Maybe<JsonQueryOperatorInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly wordCount: Maybe<WordCountsMdxFilterInput>;
};

export type MdxFrontmatter = {
  readonly title: Maybe<Scalars["String"]>;
  readonly id: Maybe<Scalars["String"]>;
  readonly path: Maybe<Scalars["String"]>;
  readonly pageTitle: Maybe<Scalars["String"]>;
  readonly description: Maybe<Scalars["String"]>;
  readonly question: Maybe<Scalars["String"]>;
  readonly answers: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly correctAnswer: Maybe<Scalars["Int"]>;
  readonly videoId: Maybe<Scalars["String"]>;
  readonly _PARENT: Maybe<Scalars["String"]>;
  readonly duration: Maybe<Scalars["Int"]>;
  readonly tutorialTitle: Maybe<Scalars["String"]>;
  readonly banner: Maybe<Scalars["String"]>;
};

export type MdxFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pageTitle: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answers: Maybe<StringQueryOperatorInput>;
  readonly correctAnswer: Maybe<IntQueryOperatorInput>;
  readonly videoId: Maybe<StringQueryOperatorInput>;
  readonly _PARENT: Maybe<StringQueryOperatorInput>;
  readonly duration: Maybe<IntQueryOperatorInput>;
  readonly tutorialTitle: Maybe<StringQueryOperatorInput>;
  readonly banner: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars["String"];
  readonly fieldValue: Maybe<Scalars["String"]>;
};

export type MdxHeadingMdx = {
  readonly value: Maybe<Scalars["String"]>;
  readonly depth: Maybe<Scalars["Int"]>;
};

export type MdxHeadingMdxFilterInput = {
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MdxFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  readonly id: Scalars["ID"];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

export type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  readonly currentPage: Scalars["Int"];
  readonly hasPreviousPage: Scalars["Boolean"];
  readonly hasNextPage: Scalars["Boolean"];
  readonly itemCount: Scalars["Int"];
  readonly pageCount: Scalars["Int"];
  readonly perPage: Maybe<Scalars["Int"]>;
};

export type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars["Float"]>;
  readonly alphaMax: Maybe<Scalars["Float"]>;
  readonly optCurve: Maybe<Scalars["Boolean"]>;
  readonly optTolerance: Maybe<Scalars["Float"]>;
  readonly threshold: Maybe<Scalars["Int"]>;
  readonly blackOnWhite: Maybe<Scalars["Boolean"]>;
  readonly color: Maybe<Scalars["String"]>;
  readonly background: Maybe<Scalars["String"]>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY"
}

export type Query = {
  readonly file: Maybe<File>;
  readonly allFile: Maybe<FileConnection>;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: Maybe<SitePageConnection>;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: Maybe<SitePluginConnection>;
  readonly site: Maybe<Site>;
  readonly allSite: Maybe<SiteConnection>;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: Maybe<DirectoryConnection>;
  readonly mdx: Maybe<Mdx>;
  readonly allMdx: Maybe<MdxConnection>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: Maybe<ImageSharpConnection>;
};

export type QueryFileArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  ino: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
};

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  jsonName: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  _xexperimentalThemes: Maybe<Site_XexperimentalThemesFilterListInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  ino: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryMdxArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  code: Maybe<MdxCodeMdxFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  tableOfContents: Maybe<JsonQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<WordCountsMdxFilterInput>;
};

export type QueryAllMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  readonly id: Scalars["ID"];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars["Int"]>;
  readonly host: Maybe<Scalars["String"]>;
  readonly _xexperimentalThemes: Maybe<
    ReadonlyArray<Maybe<Site_XexperimentalThemes>>
  >;
  readonly pathPrefix: Maybe<Scalars["String"]>;
  readonly polyfill: Maybe<Scalars["Boolean"]>;
  readonly buildTime: Maybe<Scalars["Date"]>;
};

export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type Site_XexperimentalThemes = {
  readonly resolve: Maybe<Scalars["String"]>;
  readonly options: Maybe<Site_XexperimentalThemesOptions>;
};

export type Site_XexperimentalThemesFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly options: Maybe<Site_XexperimentalThemesOptionsFilterInput>;
};

export type Site_XexperimentalThemesFilterListInput = {
  readonly elemMatch: Maybe<Site_XexperimentalThemesFilterInput>;
};

export type Site_XexperimentalThemesOptions = {
  readonly dirname: Maybe<Scalars["String"]>;
};

export type Site_XexperimentalThemesOptionsFilterInput = {
  readonly dirname: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars["String"]>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SiteMetadataTitle = "siteMetadata___title",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataKeywords = "siteMetadata___keywords",
  Port = "port",
  Host = "host",
  XexperimentalThemes = "_xexperimentalThemes",
  XexperimentalThemesResolve = "_xexperimentalThemes___resolve",
  XexperimentalThemesOptionsDirname = "_xexperimentalThemes___options___dirname",
  PathPrefix = "pathPrefix",
  Polyfill = "polyfill",
  BuildTime = "buildTime"
}

export type SiteFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly _xexperimentalThemes: Maybe<Site_XexperimentalThemesFilterListInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars["String"];
  readonly fieldValue: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  readonly id: Scalars["ID"];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly path: Maybe<Scalars["String"]>;
  readonly jsonName: Maybe<Scalars["String"]>;
  readonly internalComponentName: Maybe<Scalars["String"]>;
  readonly component: Maybe<Scalars["String"]>;
  readonly componentChunkName: Maybe<Scalars["String"]>;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars["String"]>;
  readonly componentPath: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars["String"]>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  readonly id: Maybe<Scalars["String"]>;
  readonly folderRegex: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly folderRegex: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Path = "path",
  JsonName = "jsonName",
  InternalComponentName = "internalComponentName",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  ContextId = "context___id",
  ContextFolderRegex = "context___folderRegex",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorVersion = "pluginCreator___version",
  PluginCreatorPluginOptionsExtensions = "pluginCreator___pluginOptions___extensions",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsIgnore = "pluginCreator___pluginOptions___ignore",
  PluginCreatorPluginOptionsPathToConfigModule = "pluginCreator___pluginOptions___pathToConfigModule",
  PluginCreatorPluginOptionsDirname = "pluginCreator___pluginOptions___dirname",
  PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
  PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
  PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
  PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
  PluginCreatorPackageJsonAuthor = "pluginCreator___packageJson___author",
  PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
  PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
  PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
  PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
  PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
  PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
  PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
  PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
  PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
  PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
  PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath"
}

export type SitePageFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly jsonName: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars["String"];
  readonly fieldValue: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  readonly id: Scalars["ID"];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars["String"]>;
  readonly name: Maybe<Scalars["String"]>;
  readonly version: Maybe<Scalars["String"]>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly pluginFilepath: Maybe<Scalars["String"]>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars["String"]>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Resolve = "resolve",
  Name = "name",
  Version = "version",
  PluginOptionsExtensions = "pluginOptions___extensions",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsIgnore = "pluginOptions___ignore",
  PluginOptionsPathToConfigModule = "pluginOptions___pathToConfigModule",
  PluginOptionsDirname = "pluginOptions___dirname",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonAuthor = "packageJson___author",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDependenciesName = "packageJson___dependencies___name",
  PackageJsonDependenciesVersion = "packageJson___dependencies___version",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
  PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
  PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
  PackageJsonKeywords = "packageJson___keywords"
}

export type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  readonly totalCount: Scalars["Int"];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars["String"];
  readonly fieldValue: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  readonly name: Maybe<Scalars["String"]>;
  readonly description: Maybe<Scalars["String"]>;
  readonly version: Maybe<Scalars["String"]>;
  readonly main: Maybe<Scalars["String"]>;
  readonly author: Maybe<Scalars["String"]>;
  readonly license: Maybe<Scalars["String"]>;
  readonly dependencies: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>
  >;
  readonly devDependencies: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>
  >;
  readonly peerDependencies: Maybe<
    ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>
  >;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars["String"]>;
  readonly version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars["String"]>;
  readonly version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<
    SitePluginPackageJsonDependenciesFilterListInput
  >;
  readonly devDependencies: Maybe<
    SitePluginPackageJsonDevDependenciesFilterListInput
  >;
  readonly peerDependencies: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars["String"]>;
  readonly version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  readonly extensions: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly name: Maybe<Scalars["String"]>;
  readonly path: Maybe<Scalars["String"]>;
  readonly ignore: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly pathToConfigModule: Maybe<Scalars["String"]>;
  readonly dirname: Maybe<Scalars["String"]>;
  readonly pathCheck: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  readonly extensions: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly ignore: Maybe<StringQueryOperatorInput>;
  readonly pathToConfigModule: Maybe<StringQueryOperatorInput>;
  readonly dirname: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  readonly title: Maybe<Scalars["String"]>;
  readonly description: Maybe<Scalars["String"]>;
  readonly keywords: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC"
}

export type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars["String"]>;
  readonly ne: Maybe<Scalars["String"]>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly regex: Maybe<Scalars["String"]>;
  readonly glob: Maybe<Scalars["String"]>;
};

export type WordCountsMdx = {
  readonly paragraphs: Maybe<Scalars["Int"]>;
  readonly sentences: Maybe<Scalars["Int"]>;
  readonly words: Maybe<Scalars["Int"]>;
};

export type WordCountsMdxFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};
export type TutorialMdxQueryVariables = {
  id: Scalars["String"];
};

export type TutorialMdxQuery = {
  readonly mdx: Maybe<
    Pick<Mdx, "id"> & {
      readonly code: Maybe<Pick<MdxCodeMdx, "body">>;
      readonly frontmatter: Maybe<Pick<MdxFrontmatter, "path" | "pageTitle">>;
    }
  >;
};

export type TutorialOverviewQueryVariables = {
  folderRegex: Maybe<Scalars["String"]>;
};

export type TutorialOverviewQuery = {
  readonly allMdx: Maybe<
    Pick<MdxConnection, "totalCount"> & {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<Mdx, "id"> & {
          readonly frontmatter: Maybe<
            Pick<MdxFrontmatter, "pageTitle" | "description">
          >;
        };
      }>;
    }
  >;
  readonly overview: Maybe<
    Pick<Mdx, "id"> & {
      readonly frontmatter: Maybe<
        Pick<MdxFrontmatter, "tutorialTitle" | "title" | "banner">
      >;
    }
  >;
};

export type AllTutorialsQueryVariables = {};

export type AllTutorialsQuery = {
  readonly allMdx: Maybe<{
    readonly edges: ReadonlyArray<{
      readonly node: Pick<Mdx, "id" | "excerpt" | "fileAbsolutePath"> & {
        readonly frontmatter: Maybe<
          Pick<MdxFrontmatter, "path" | "pageTitle" | "description">
        >;
        readonly code: Maybe<Pick<MdxCodeMdx, "body">>;
      };
    }>;
  }>;
};

export type LayoutInformationQueryVariables = {};

export type LayoutInformationQuery = {
  readonly site: Maybe<{
    readonly siteMetadata: Maybe<
      Pick<SiteSiteMetadata, "title" | "description" | "keywords">
    >;
  }>;
};
