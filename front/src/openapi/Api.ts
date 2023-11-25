/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AppRoleAssignmentCollectionPage,
  DirectoryObjectCollectionWithReferencesPage,
  OidcUser,
  Person,
  ProfilePhoto,
  User,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags person-controller
   * @name GetPerson
   * @request GET:/api/person
   * @response `200` `(Person)[]` OK
   */
  getPerson = (
    query?: {
      /**
       * @format int32
       * @default 0
       */
      page?: number;
      /**
       * @format int32
       * @default 25
       */
      pageSize?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<Person[], any>({
      path: `/api/person`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags person-controller
   * @name UpdateUser
   * @request POST:/api/person
   * @response `200` `Person` OK
   */
  updateUser = (data: Person, params: RequestParams = {}) =>
    this.request<Person, any>({
      path: `/api/person`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags welcome-auth-controller
   * @name Welcome
   * @request GET:/api/welcome
   * @response `200` `string` OK
   */
  welcome = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/api/welcome`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags report-controller
   * @name GenerateReport
   * @request GET:/api/report
   * @response `200` `void` OK
   */
  generateReport = (
    query?: {
      /**
       * @format int32
       * @default 1000
       */
      size?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/report`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags ms-graph-controller
   * @name Me
   * @request GET:/api/msgraph
   * @response `200` `User` OK
   */
  me = (params: RequestParams = {}) =>
    this.request<User, any>({
      path: `/api/msgraph`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags ms-graph-controller
   * @name GetProfilePhoto
   * @request GET:/api/msgraph/profilephoto
   * @response `200` `ProfilePhoto` OK
   */
  getProfilePhoto = (params: RequestParams = {}) =>
    this.request<ProfilePhoto, any>({
      path: `/api/msgraph/profilephoto`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags ms-graph-controller
   * @name GetPrincipal
   * @request GET:/api/msgraph/principal
   * @response `200` `OidcUser` OK
   */
  getPrincipal = (params: RequestParams = {}) =>
    this.request<OidcUser, any>({
      path: `/api/msgraph/principal`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags ms-graph-controller
   * @name GetImageAsByteArray
   * @request GET:/api/msgraph/photo
   * @response `200` `void` OK
   */
  getImageAsByteArray = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/msgraph/photo`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags ms-graph-controller
   * @name GetMemberOf
   * @request GET:/api/msgraph/memberof
   * @response `200` `DirectoryObjectCollectionWithReferencesPage` OK
   */
  getMemberOf = (params: RequestParams = {}) =>
    this.request<DirectoryObjectCollectionWithReferencesPage, any>({
      path: `/api/msgraph/memberof`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags ms-graph-controller
   * @name GetAppRoleAssignments
   * @request GET:/api/msgraph/appRoleAssignments
   * @response `200` `AppRoleAssignmentCollectionPage` OK
   */
  getAppRoleAssignments = (params: RequestParams = {}) =>
    this.request<AppRoleAssignmentCollectionPage, any>({
      path: `/api/msgraph/appRoleAssignments`,
      method: "GET",
      ...params,
    });
}
