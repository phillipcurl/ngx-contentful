import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import * as contentful from 'contentful';
import {
  CreateClientParams,
  ContentfulClientApi,
  ContentfulCollection,
  ContentType,
  Asset,
  EntryCollection,
  Entry,
  Space,
  SyncCollection
} from './../models';
import { isQueryString } from './../util';

@Injectable()
export class Contentful {

  private _client: ContentfulClientApi;

  constructor() {}

  config(options: CreateClientParams): void {
    this._client = contentful.createClient(options);
  }

  getAssets(query?: any): Observable<ContentfulCollection<Asset>> {
    let promise: Promise<ContentfulCollection<Asset>>;
    if (isQueryString(query)) {
      promise = this._client.getAssets(query);
    } else {
      promise = this._client.getAssets();
    }
    return Observable.fromPromise(promise);
  }

  getAsset(id: string, query?: any): Observable<Asset> {
    let promise: Promise<Asset>;
    if (isQueryString(query)) {
      promise = this._client.getAsset(id, query);
    } else {
      promise = this._client.getAsset(id);
    }
    return Observable.fromPromise(promise);
  }

  getContentTypes(query?: any): Observable<ContentfulCollection<ContentType>> {
    let promise: Promise<ContentfulCollection<ContentType>>;
    if (isQueryString(query)) {
      promise = this._client.getContentTypes(query);
    } else {
      promise = this._client.getContentTypes();
    }
    return Observable.fromPromise(promise);
  }

  getContentType(id: string): Observable<ContentType> {
    let promise: Promise<ContentType> = this._client.getContentType(id);
    return Observable.fromPromise(promise);
  }

  getEntries(query?: any): Observable<EntryCollection<any>> {
    let promise: Promise<EntryCollection<any>>;
    if (isQueryString(query)) {
      promise = this._client.getEntries(query);
    } else {
      promise = this._client.getEntries();
    }
    return Observable.fromPromise(promise);
  }

  getEntry(id: string, query?: any): Observable<Entry<any>> {
    let promise: Promise<Entry<any>>;
    if (isQueryString(query)) {
      promise = this._client.getEntry(id, query);
    } else {
      promise = this._client.getEntry(id);
    }
    return Observable.fromPromise(promise);
  }

  getSpace(): Observable<Space> {
    let promise: Promise<Space> = this._client.getSpace();
    return Observable.fromPromise(promise);
  }

  sync(query: any): Observable<SyncCollection> {
    let promise: Promise<SyncCollection>;
    if (isQueryString(query)) {
      promise = this._client.sync(query);
    } else {
      promise = Promise.reject('The query was not formatted properly');
    }
    return Observable.fromPromise(promise);
  }

}