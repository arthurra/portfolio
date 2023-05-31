//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  id: Scalars['ID'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  service: Service;
  serviceConnection: ServiceConnection;
  case_study: Case_Study;
  case_studyConnection: Case_StudyConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryServiceArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryServiceConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ServiceFilter>;
};


export type QueryCase_StudyArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryCase_StudyConnectionArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Case_StudyFilter>;
};

export type DocumentFilter = {
  service?: InputMaybe<ServiceFilter>;
  case_study?: InputMaybe<Case_StudyFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<DocumentFilter>;
};

export type DocumentNode = Service | Case_Study;

export type ServiceTags = {
  __typename?: 'ServiceTags';
  name?: Maybe<Scalars['String']>;
};

export type Service = Node & Document & {
  __typename?: 'Service';
  active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  permalink?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  frame_url?: Maybe<Scalars['String']>;
  services_tagline?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ServiceTags>>>;
  order?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceTagsFilter = {
  name?: InputMaybe<StringFilter>;
};

export type NumberFilter = {
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ServiceFilter = {
  active?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  permalink?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  frame_url?: InputMaybe<StringFilter>;
  services_tagline?: InputMaybe<StringFilter>;
  tags?: InputMaybe<ServiceTagsFilter>;
  order?: InputMaybe<NumberFilter>;
};

export type ServiceConnectionEdges = {
  __typename?: 'ServiceConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Service>;
};

export type ServiceConnection = Connection & {
  __typename?: 'ServiceConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<ServiceConnectionEdges>>>;
};

export type Case_StudyServicesTags = {
  __typename?: 'Case_studyServicesTags';
  name?: Maybe<Scalars['String']>;
};

export type Case_StudyServices = {
  __typename?: 'Case_studyServices';
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Case_StudyServicesTags>>>;
};

export type Case_StudyTags = {
  __typename?: 'Case_studyTags';
  name?: Maybe<Scalars['String']>;
};

export type Case_StudySolutions = {
  __typename?: 'Case_studySolutions';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
};

export type Case_Study = Node & Document & {
  __typename?: 'Case_study';
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<Case_StudyServices>>>;
  testimonial?: Maybe<Scalars['String']>;
  cite?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Case_StudyTags>>>;
  size?: Maybe<Scalars['String']>;
  aspect?: Maybe<Scalars['String']>;
  visible?: Maybe<Scalars['Boolean']>;
  solutions?: Maybe<Array<Maybe<Case_StudySolutions>>>;
  id: Scalars['ID'];
  _sys: SystemInfo;
  _values: Scalars['JSON'];
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Case_StudyServicesTagsFilter = {
  name?: InputMaybe<StringFilter>;
};

export type Case_StudyServicesFilter = {
  name?: InputMaybe<StringFilter>;
  tags?: InputMaybe<Case_StudyServicesTagsFilter>;
};

export type Case_StudyTagsFilter = {
  name?: InputMaybe<StringFilter>;
};

export type Case_StudySolutionsFilter = {
  title?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  media?: InputMaybe<ImageFilter>;
};

export type Case_StudyFilter = {
  title?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  hero_image?: InputMaybe<ImageFilter>;
  category?: InputMaybe<StringFilter>;
  services?: InputMaybe<Case_StudyServicesFilter>;
  testimonial?: InputMaybe<StringFilter>;
  cite?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringFilter>;
  color?: InputMaybe<StringFilter>;
  tags?: InputMaybe<Case_StudyTagsFilter>;
  size?: InputMaybe<StringFilter>;
  aspect?: InputMaybe<StringFilter>;
  visible?: InputMaybe<BooleanFilter>;
  solutions?: InputMaybe<Case_StudySolutionsFilter>;
};

export type Case_StudyConnectionEdges = {
  __typename?: 'Case_studyConnectionEdges';
  cursor: Scalars['String'];
  node?: Maybe<Case_Study>;
};

export type Case_StudyConnection = Connection & {
  __typename?: 'Case_studyConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<Case_StudyConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateService: Service;
  createService: Service;
  updateCase_study: Case_Study;
  createCase_study: Case_Study;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateServiceArgs = {
  relativePath: Scalars['String'];
  params: ServiceMutation;
};


export type MutationCreateServiceArgs = {
  relativePath: Scalars['String'];
  params: ServiceMutation;
};


export type MutationUpdateCase_StudyArgs = {
  relativePath: Scalars['String'];
  params: Case_StudyMutation;
};


export type MutationCreateCase_StudyArgs = {
  relativePath: Scalars['String'];
  params: Case_StudyMutation;
};

export type DocumentUpdateMutation = {
  service?: InputMaybe<ServiceMutation>;
  case_study?: InputMaybe<Case_StudyMutation>;
  relativePath?: InputMaybe<Scalars['String']>;
};

export type DocumentMutation = {
  service?: InputMaybe<ServiceMutation>;
  case_study?: InputMaybe<Case_StudyMutation>;
};

export type ServiceTagsMutation = {
  name?: InputMaybe<Scalars['String']>;
};

export type ServiceMutation = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  permalink?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  frame_url?: InputMaybe<Scalars['String']>;
  services_tagline?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<ServiceTagsMutation>>>;
  order?: InputMaybe<Scalars['Float']>;
};

export type Case_StudyServicesTagsMutation = {
  name?: InputMaybe<Scalars['String']>;
};

export type Case_StudyServicesMutation = {
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Case_StudyServicesTagsMutation>>>;
};

export type Case_StudyTagsMutation = {
  name?: InputMaybe<Scalars['String']>;
};

export type Case_StudySolutionsMutation = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
};

export type Case_StudyMutation = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hero_image?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  services?: InputMaybe<Array<InputMaybe<Case_StudyServicesMutation>>>;
  testimonial?: InputMaybe<Scalars['String']>;
  cite?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Case_StudyTagsMutation>>>;
  size?: InputMaybe<Scalars['String']>;
  aspect?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
  solutions?: InputMaybe<Array<InputMaybe<Case_StudySolutionsMutation>>>;
};

export type ServicePartsFragment = { __typename?: 'Service', active?: boolean | null, name?: string | null, permalink?: string | null, title: string, description?: string | null, frame_url?: string | null, services_tagline?: string | null, order?: number | null, tags?: Array<{ __typename: 'ServiceTags', name?: string | null } | null> | null };

export type Case_StudyPartsFragment = { __typename?: 'Case_study', title: string, description?: string | null, hero_image?: string | null, category?: string | null, testimonial?: string | null, cite?: string | null, icon?: string | null, color?: string | null, size?: string | null, aspect?: string | null, visible?: boolean | null, services?: Array<{ __typename: 'Case_studyServices', name?: string | null, tags?: Array<{ __typename: 'Case_studyServicesTags', name?: string | null } | null> | null } | null> | null, tags?: Array<{ __typename: 'Case_studyTags', name?: string | null } | null> | null, solutions?: Array<{ __typename: 'Case_studySolutions', title?: string | null, description?: string | null, media?: string | null } | null> | null };

export type ServiceQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type ServiceQuery = { __typename?: 'Query', service: { __typename?: 'Service', id: string, active?: boolean | null, name?: string | null, permalink?: string | null, title: string, description?: string | null, frame_url?: string | null, services_tagline?: string | null, order?: number | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, tags?: Array<{ __typename: 'ServiceTags', name?: string | null } | null> | null } };

export type ServiceConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ServiceFilter>;
}>;


export type ServiceConnectionQuery = { __typename?: 'Query', serviceConnection: { __typename?: 'ServiceConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'ServiceConnectionEdges', cursor: string, node?: { __typename?: 'Service', id: string, active?: boolean | null, name?: string | null, permalink?: string | null, title: string, description?: string | null, frame_url?: string | null, services_tagline?: string | null, order?: number | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, tags?: Array<{ __typename: 'ServiceTags', name?: string | null } | null> | null } | null } | null> | null } };

export type Case_StudyQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type Case_StudyQuery = { __typename?: 'Query', case_study: { __typename?: 'Case_study', id: string, title: string, description?: string | null, hero_image?: string | null, category?: string | null, testimonial?: string | null, cite?: string | null, icon?: string | null, color?: string | null, size?: string | null, aspect?: string | null, visible?: boolean | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, services?: Array<{ __typename: 'Case_studyServices', name?: string | null, tags?: Array<{ __typename: 'Case_studyServicesTags', name?: string | null } | null> | null } | null> | null, tags?: Array<{ __typename: 'Case_studyTags', name?: string | null } | null> | null, solutions?: Array<{ __typename: 'Case_studySolutions', title?: string | null, description?: string | null, media?: string | null } | null> | null } };

export type Case_StudyConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Case_StudyFilter>;
}>;


export type Case_StudyConnectionQuery = { __typename?: 'Query', case_studyConnection: { __typename?: 'Case_studyConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'Case_studyConnectionEdges', cursor: string, node?: { __typename?: 'Case_study', id: string, title: string, description?: string | null, hero_image?: string | null, category?: string | null, testimonial?: string | null, cite?: string | null, icon?: string | null, color?: string | null, size?: string | null, aspect?: string | null, visible?: boolean | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, services?: Array<{ __typename: 'Case_studyServices', name?: string | null, tags?: Array<{ __typename: 'Case_studyServicesTags', name?: string | null } | null> | null } | null> | null, tags?: Array<{ __typename: 'Case_studyTags', name?: string | null } | null> | null, solutions?: Array<{ __typename: 'Case_studySolutions', title?: string | null, description?: string | null, media?: string | null } | null> | null } | null } | null> | null } };

export const ServicePartsFragmentDoc = gql`
    fragment ServiceParts on Service {
  active
  name
  permalink
  title
  description
  frame_url
  services_tagline
  tags {
    __typename
    name
  }
  order
}
    `;
export const Case_StudyPartsFragmentDoc = gql`
    fragment Case_studyParts on Case_study {
  title
  description
  hero_image
  category
  services {
    __typename
    name
    tags {
      __typename
      name
    }
  }
  testimonial
  cite
  icon
  color
  tags {
    __typename
    name
  }
  size
  aspect
  visible
  solutions {
    __typename
    title
    description
    media
  }
}
    `;
export const ServiceDocument = gql`
    query service($relativePath: String!) {
  service(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ServiceParts
  }
}
    ${ServicePartsFragmentDoc}`;
export const ServiceConnectionDocument = gql`
    query serviceConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ServiceFilter) {
  serviceConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ServiceParts
      }
    }
  }
}
    ${ServicePartsFragmentDoc}`;
export const Case_StudyDocument = gql`
    query case_study($relativePath: String!) {
  case_study(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...Case_studyParts
  }
}
    ${Case_StudyPartsFragmentDoc}`;
export const Case_StudyConnectionDocument = gql`
    query case_studyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Case_studyFilter) {
  case_studyConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...Case_studyParts
      }
    }
  }
}
    ${Case_StudyPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      service(variables: ServiceQueryVariables, options?: C): Promise<{data: ServiceQuery, variables: ServiceQueryVariables, query: string}> {
        return requester<{data: ServiceQuery, variables: ServiceQueryVariables, query: string}, ServiceQueryVariables>(ServiceDocument, variables, options);
      },
    serviceConnection(variables?: ServiceConnectionQueryVariables, options?: C): Promise<{data: ServiceConnectionQuery, variables: ServiceConnectionQueryVariables, query: string}> {
        return requester<{data: ServiceConnectionQuery, variables: ServiceConnectionQueryVariables, query: string}, ServiceConnectionQueryVariables>(ServiceConnectionDocument, variables, options);
      },
    case_study(variables: Case_StudyQueryVariables, options?: C): Promise<{data: Case_StudyQuery, variables: Case_StudyQueryVariables, query: string}> {
        return requester<{data: Case_StudyQuery, variables: Case_StudyQueryVariables, query: string}, Case_StudyQueryVariables>(Case_StudyDocument, variables, options);
      },
    case_studyConnection(variables?: Case_StudyConnectionQueryVariables, options?: C): Promise<{data: Case_StudyConnectionQuery, variables: Case_StudyConnectionQueryVariables, query: string}> {
        return requester<{data: Case_StudyConnectionQuery, variables: Case_StudyConnectionQueryVariables, query: string}, Case_StudyConnectionQueryVariables>(Case_StudyConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars,
    });

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

  