import gql from "graphql-tag";

export const getUsers = gql`
{
  getUsers {
    id
    first_name
    last_name
    avatar
    created_at
  }
}`;