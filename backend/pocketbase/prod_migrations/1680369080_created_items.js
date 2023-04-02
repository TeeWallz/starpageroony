migrate((db) => {
  const collection = new Collection({
    "id": "5ycvzx9efr14xa7",
    "created": "2023-04-01 17:11:20.287Z",
    "updated": "2023-04-01 17:11:20.287Z",
    "name": "items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2a6a6dar",
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
        "id": "7kys8pdq",
        "name": "description",
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
        "id": "vqmsel58",
        "name": "priceInUSDC",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "blse6pqa",
        "name": "dueDate",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "os3zq8mz",
        "name": "invoice",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "alywxiuhp1taxh4",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "listRule": "invoice.owner = @request.auth.id",
    "viewRule": "invoice.owner = @request.auth.id",
    "createRule": "invoice.owner = @request.auth.id",
    "updateRule": "invoice.owner = @request.auth.id",
    "deleteRule": "invoice.owner = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5ycvzx9efr14xa7");

  return dao.deleteCollection(collection);
})
