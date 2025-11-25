GS.dataCache['D1418948992F4845944AB044BCC9E04753AD'] = {
    "uid": "D1418948992F4845944AB044BCC9E04753AD",
    "isLoaded": true,
    "lastModificationTime": null,
    "items": {
        "type": "vn.scene",
        "name": "Interagir com Yumi(Rota feminina)",
        "parentId": "746F6754808A634A94196311050B62F5132E",
        "localizableStrings": {},
        "chapterUid": "49DC3EE6267197419859C9E4D23776294B50",
        "commands": [
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Audio/Music",
                        "name": "Tutorial_-_Good_Mood.ogg",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5A97A06B1CF3A645898AFFF22A3552143D95",
                "expanded": true
            },
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "Entrada.png",
                        "folderPath": "Graphics/Backgrounds/Academia dos Códigos",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1,
                        "easing.type": 1,
                        "animation.type": 0,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1,
                        "loopVertical": 1,
                        "loopHorizontal": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "486564B6322854413829A1B8B343FCBF0385",
                "expanded": false
            },
            {
                "id": "vn.ZoomBackground",
                "params": {
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "zooming": {
                        "x": 135,
                        "y": 135
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "9011F85301DC1140EA6A91F9F30DF175D51F",
                "indent": 0
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 2
                },
                "indent": 0,
                "uid": "BE1684547277D54A58380F794CAC8639EC37"
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 3
                },
                "indent": 0,
                "uid": "D85ECEBD1CAD114C361BFA2641947B80DC9F"
            },
            {
                "id": "gs.EraseHotspot",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 4
                },
                "indent": 0,
                "uid": "9DD5AF7F26727748BD793089DC8B2CFA1F20"
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "5FDD830E06D93643585926687B5F0BA85302",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "2763163A41CC864A890A7107AEC07058FC71",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "5B07158A208A9344513ACC8982ED8ED22CFB",
                    "duration": 0,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "0F389E25964CC54DD5488CD1B214F9267DBD",
                "indent": 0
            },
            {
                "id": "vn.MoveCharacter",
                "params": {
                    "characterId": "BD9659AA5A873340C28BD8F4BAD6B97E2748",
                    "predefinedPositionId": 5,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "649AA3AE7FF6534AFF9A29B6B0E0BA8D95C2",
                "indent": 0
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "3FC2C70568A4984D389A6A69669295952B9D",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "84BCD4236B7CD24DB418B398E832500C4EAE"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Pense assim: 'Se condição, então consequência'. A condição é a sombra apontar ao Norte. A consequência é o portão abrir."
                    },
                    "position": 0,
                    "characterId": "BD9659AA5A873340C28BD8F4BAD6B97E2748",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "1E3AD8E030CF6446DE4A7D225A2D7F479F4C",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "EA06470D8140964F0749A8D76577A39B05E1",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "23BDB46F8FEBE24AD968320927D76DC2C638"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "3FC2C70568A4984D389A6A69669295952B9D",
                    "parameters": {
                        "values": []
                    }
                },
                "indent": 0,
                "uid": "105673DC53077944D75B9142993752D4D3C9"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Hora de resolver o enigma. Boa sorte!"
                    },
                    "position": 0,
                    "characterId": "84A9BB4F9F1CB64CA42A8593885FC649E918",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A729399287BAF54F482BB631114739DD6093",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "EA06470D8140964F0749A8D76577A39B05E1",
                    "parameters": {
                        "values": []
                    }
                },
                "uid": "E89EFB3417C0914D9408DA54E426AA216567",
                "indent": 0
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "1956079938F08341DA4BC4C4283DBC5623B9",
                        "name": "Enigma do Portão Lógico(Protagonista feminina)"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "8C5247272429524CC32B49F7B15E0631161E",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "order": 0
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "o",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}