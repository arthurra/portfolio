export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
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
}
    `;
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
export function getSdk(requester) {
  return {
    case_study(variables, options) {
      return requester(Case_StudyDocument, variables, options);
    },
    case_studyConnection(variables, options) {
      return requester(Case_StudyConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars
    });
    return { data: data?.data, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
