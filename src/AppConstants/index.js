export default {
  post: {
    entityFields: {
      userName: 'userName',
      message: 'message',
      identifier: 'identifier',
      type: 'type',
      imageURL: 'imageURL',
      commentsCount: 'commentsCount'
    }
  },
  filters: {
    typeFilter: {
      field: 'type',
      values: ['photoPost', 'messagePost'],
      labels: ['Photo Post', 'Message Posts']
    }
  }
}