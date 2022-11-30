db.createUser({
  user: 'user',
  pwd: 'secret',
  roles: [
    {
      role: 'readWrite',
      db: 'demo',
    },
  ],
});
