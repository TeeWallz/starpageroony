migrate((db) => {
  const collection = new Collection({
    "id": "frxqhp7s0zykm43",
    "created": "2023-04-02 12:02:32.955Z",
    "updated": "2023-04-02 12:02:32.955Z",
    "name": "styles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wl5myt1i",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ypf93yoh",
        "name": "owner",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "username"
          ]
        }
      },
      {
        "system": false,
        "id": "lg8vb3zn",
        "name": "stylesheet",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("frxqhp7s0zykm43");

  return dao.deleteCollection(collection);
})
