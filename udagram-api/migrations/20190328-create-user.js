exports.up  = function(db) {
  db.createTable('User', {
      id: {
        autoIncrement: true,
        type: 'int',
      },
      email: {
        type: 'string',
        primaryKey: true,
      },
      passwordHash: {
        type: 'string',
      },
      createdAt: {
        type: 'datetime',
      },
      updatedAt: {
        type: 'datetime',
      },
    });
  },
  exports.down  = function(db){
    db.dropTable('User');
  }

