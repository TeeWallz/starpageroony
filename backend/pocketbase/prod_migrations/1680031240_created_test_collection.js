migrate((db) => {
  const collection = new Collection({
    "id": "pqqbdcjkauhb0nv",
    "created": "2023-03-28 19:20:40.414Z",
    "updated": "2023-03-28 19:20:40.414Z",
    "name": "test_collection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hmvs5nz6",
        "name": "name",
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
  const collection = dao.findCollectionByNameOrId("pqqbdcjkauhb0nv");

  return dao.deleteCollection(collection);
})
