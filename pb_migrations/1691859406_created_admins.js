migrate((db) => {
  const collection = new Collection({
    "id": "foek4aub19lgnlu",
    "created": "2023-08-12 16:56:46.943Z",
    "updated": "2023-08-12 16:56:46.943Z",
    "name": "admins",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qynmqlr2",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wliphl2n",
        "name": "e_mail",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "xkhtxsaa",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("foek4aub19lgnlu");

  return dao.deleteCollection(collection);
})
