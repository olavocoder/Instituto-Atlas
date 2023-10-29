import { gql } from '@apollo/client'

import { wordpressApi } from './api'

export async function getAllTags() {
  try {
    const body = `
    query GetTags {
      tags {
        nodes {
          databaseId
          slug
          name
        }
      }
    }
    `
    const response = await wordpressApi.query({
      query: gql`
        ${body}
      `
    })

    return response.data.tags.nodes
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getAllCategories() {
  try {
    const body = `
    query GetCategories {
      categories {
        nodes {
          databaseId
          name
          slug
        }
      }
    }
    `
    const response = await wordpressApi.query({
      query: gql`
        ${body}
      `
    })

    return response.data.categories.nodes
  } catch (error) {
    console.error(error)
    return []
  }
}
