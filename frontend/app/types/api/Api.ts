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

export interface GeneralErrorResponse {
  /** @example "An error has ocurred" */
  error: string;
}

export interface Task {
  /** @example "asdjasdj123123" */
  _id?: string;
  /** @example "Create Redux Store" */
  title: string;
  /** @example "todo" */
  status: string;
  /** @example "epic" */
  label: string;
  /** @example "high" */
  priority: string;
}

export interface TaskSuccessResponseSchema {
  /** @example "Task added successfully" */
  message: string;
  task: {
    /** @example "asdjasdj123123" */
    _id: string;
    /** @example "Create Redux Store" */
    title: string;
    /** @example "todo" */
    status: string;
    /** @example "epic" */
    label: string;
    /** @example "high" */
    priority: string;
  };
}

export interface Label {
  /** @example "dksl1m2ss" */
  _id?: string;
  /** @example "epic" */
  value: string;
  /** @example "Epic" */
  label: string;
}

export interface LabelSuccessResponse {
  /** @example "Label added successfully" */
  message?: string;
  label?: {
    /** @example "sdkaskd2222" */
    _id?: string;
    /** @example "epic" */
    value: string;
    /** @example "Epic" */
    label: string;
  };
}

export interface Status {
  /** @example "sjsdla222" */
  _id?: string;
  /** @example "in-progress" */
  value: string;
  /** @example "In-progress" */
  label: string;
}

export interface StatusSuccessResponse {
  /** @example "Status added successfully" */
  message?: string;
  label?: {
    /** @example "sjsdla222" */
    _id?: string;
    /** @example "in-progress" */
    value: string;
    /** @example "In-progress" */
    label: string;
  };
}

export interface Priority {
  /** @example "kslak212ss" */
  _id?: string;
  /** @example "medium" */
  value: string;
  /** @example "Medium" */
  label: string;
}

export interface PrioritySuccessResponse {
  /** @example "Priority added successfully" */
  message?: string;
  label?: {
    /** @example "kslak212ss" */
    _id?: string;
    /** @example "medium" */
    value: string;
    /** @example "Medium" */
    label: string;
  };
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://localhost:8080";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title FrontBuild API Documentacion
 * @version 1.0.0
 * @baseUrl http://localhost:8080
 *
 * FrontBuild backend api for creating task and other funcionalidades generated with swagger-jsdoc
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  swaggerJson = {
    /**
     * No description
     *
     * @name SwaggerJsonList
     * @request GET:/swagger.json
     */
    swaggerJsonList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/swagger.json`,
        method: "GET",
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @name TasksList
     * @request GET:/api/tasks/
     */
    tasksList: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/tasks/`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name TasksAddCreate
     * @request POST:/api/tasks/add
     */
    tasksAddCreate: (data: Task, params: RequestParams = {}) =>
      this.request<TaskSuccessResponseSchema, any>({
        path: `/api/tasks/add`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TasksUpdate
     * @request PUT:/api/tasks/{id}
     */
    tasksUpdate: (id: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/tasks/${id}`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @name TasksDeleteDelete
     * @request DELETE:/api/tasks/delete
     */
    tasksDeleteDelete: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/tasks/delete`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name LabelsList
     * @request GET:/api/labels/
     */
    labelsList: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/labels/`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name LabelsAddCreate
     * @request POST:/api/labels/add
     */
    labelsAddCreate: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/labels/add`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @name LabelsDeleteDelete
     * @request DELETE:/api/labels/delete
     */
    labelsDeleteDelete: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/labels/delete`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatusList
     * @request GET:/api/status/
     */
    statusList: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/status/`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatusAddCreate
     * @request POST:/api/status/add
     */
    statusAddCreate: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/status/add`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatusDeleteDelete
     * @request DELETE:/api/status/delete
     */
    statusDeleteDelete: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/status/delete`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name PrioritiesList
     * @request GET:/api/priorities/
     */
    prioritiesList: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/priorities/`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name PrioritiesAddCreate
     * @request POST:/api/priorities/add
     */
    prioritiesAddCreate: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/priorities/add`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @name PrioritiesDeleteDelete
     * @request DELETE:/api/priorities/delete
     */
    prioritiesDeleteDelete: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/priorities/delete`,
        method: "DELETE",
        ...params,
      }),
  };
}
