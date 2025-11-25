GS.dataCache['A5AFD99A98B01542F08BA8D2F5B76F666170'] = {
    "uid": "A5AFD99A98B01542F08BA8D2F5B76F666170",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "InteragirYosukeCh2",
        "type": "data_record",
        "order": 1,
        "category": "commonEvents",
        "id": "A5AFD99A98B01542F08BA8D2F5B76F666170",
        "isFolder": false,
        "parentId": "6466E0BB214AC6434119A1B3C7171CC2D258",
        "data": {
            "name": "InteragirYosukeCh2",
            "startCondition": 0,
            "conditionEnabled": false,
            "parallel": false,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "ObteveSimboloYosuke",
                            "index": 8,
                            "scope": 1,
                            "domain": "com.degica.vnm.default",
                            "changed": true
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 1,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "A24462A3342637424B1965B5656328E8333C",
                    "indent": 0
                },
                {
                    "id": "vn.CallScene",
                    "params": {
                        "scene": {
                            "uid": "CF279C5079B4C142A68B87A124EAB42FF096",
                            "name": "Interagir Yosuke(Ch2)"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "2268863A8B5DB44E4889D3D27F9C7E0671EB"
                }
            ],
            "index": "A5AFD99A98B01542F08BA8D2F5B76F666170",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}