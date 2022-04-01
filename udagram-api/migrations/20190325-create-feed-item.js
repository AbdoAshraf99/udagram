exports.up = function (db) {
  return db.createTable('FeedItem', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: 'int',
    },
    caption: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
    createdAt: {
      type: 'datetime',
    },
    updatedAt: {
      type: 'datetime',
    },
  });
};

  exports.down= function(db) {
     db.dropTable('FeedItem');
  }

