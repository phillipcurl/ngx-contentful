export interface AxiosProxyConfig {
  host: string;
  port ? : number;
  auth ? : {
    username: string;
    password: string;
  };
}

export interface CreateClientParams {
  space: string;
  accessToken: string;
  insecure ? : boolean;
  host ? : string;
  httpAgent ? : any;
  httpsAgent ? : any;
  proxy ? : AxiosProxyConfig;
  headers ? : any;
  resolveLinks ? : boolean;
}

export interface ContentfulConfig extends CreateClientParams {

}

export interface ContentfulClientApi {
  getAsset(id: string, query ? : any): Promise < Asset > ;
  getAssets(query ? : any): Promise < AssetCollection > ;
  getContentType(id: string): Promise < ContentType > ;
  getContentTypes(query ? : any): Promise < ContentTypeCollection > ;
  getEntries(query ? : any): Promise < EntryCollection < any >> ;
  getEntry(id: string, query ? : any): Promise < Entry < any >> ;
  getSpace(): Promise < Space > ;
  sync(query: any): Promise < SyncCollection > ;
}

export interface Asset {
  sys: Sys;
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: any;
      fileNmae: string;
      contentType: string;
    };
  };
  toPlainObject(): Asset;
}

export interface ContentfulCollection < T > {
  total: number;
  skip: number;
  limit: number;
  items: Array < T > ;
  toPlainObject(): this;
}

export type AssetCollection = ContentfulCollection < Asset > ;

export interface Entry < T > {
  sys: Sys;
  fields: T;
  toPlainObject(): Entry < T > ;
}

export interface EntryCollection < T > extends ContentfulCollection < Entry < T >> {
  errors ? : Array < any > ;
  includes ? : any;
  stringifySafe(replacer: any, space: any): string;
}

export interface ContentType {
  sys: Sys;
  name: string;
  description: string;
  displayField: string;
  fields: Array < Field > ;
  toPlainObject(): ContentType;
}

export type ContentTypeCollection = ContentfulCollection < ContentType > ;

export interface Space {
  sys: Sys;
  name: string;
  locales: Array < string > ;
  toPlainObject(): Space;
}

export interface SyncCollection {
  entries: Array < Entry < any >> ;
  assets: Array < Asset > ;
  deletedEntries: Array < Entry < any >> ;
  deletedAssets: Array < Asset > ;
  nextSyncToken: string;
  toPlainObject(): SyncCollection;
  stringifySafe(replacer: any, space: any): string;
}

export interface Sys {
  type: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  contentType: {
    sys: ContentTypeLink;
  };
}

export interface ContentTypeLink {
  type: 'Link';
  linkType: 'ContentType';
  id: string;
}

export interface Field {
  disabled: boolean;
  id: string;
  linkType ? : string;
  localized: boolean;
  name: string;
  omitted: boolean;
  required: boolean;
  type: string;
}

// export function createClient(params: CreateClientParams): ContentfulClientApi;
