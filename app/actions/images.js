import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_IMAGES = Symbol('LOADED_IMAGES')
export const CHANGE_FILTER = Symbol('CHANGE_FILTER')
export const CHANGE_SIZE = Symbol('CHANGE_SIZE')
export const CHANGE_PAGE = Symbol('CHANGE_PAGE')


export function loadImages(setting) {
  return {
    [CALL_API]: {
      method: 'get',
      path: `/v1/gifs/search`,
      query: {
        api_key: 'dc6zaTOxFJmzC',
        q: setting?setting.get("filter"):"",
        limit: setting?setting.get("limit"):25,
        offset: setting?setting.get("offset"):0
      },
      successType: LOADED_IMAGES
    }
  };
}

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    payload: filter
  }
}


export function changeSize(size) {
  return {
    type: CHANGE_SIZE,
    payload: size
  }
}


export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    payload: page
  }
}


