export const post = {
  entityFields: {
    userName: 'userName',
    message: 'message',
    identifier: 'identifier',
    type: 'type',
    imageURL: 'imageURL',
    commentsCount: 'commentsCount'
  }
}

export const filters = {
  typeFilter: {
    field: 'type',
    values: ['', 'photoPost', 'messagePost'],
    labels: ['All', 'Photo Posts', 'Message Posts']
  }
}
