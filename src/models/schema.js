export const schema = {
    "models": {
        "Art": {
            "name": "Art",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "prompt": {
                    "name": "prompt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "negative_prompt": {
                    "name": "negative_prompt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "timestamp": {
                    "name": "timestamp",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Arts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.3.5",
    "version": "8728d6d26733332103a541a24d93658c"
};