import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "237412974d524583b95c3ac3aeb6a349"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "29a8546846ce4066ac6ae7a3a4ae7eeb"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "fa4e8a11375b48f7a031e5784c2875e6"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "7ed5ebbc4f074a47a4686e43448f3d91"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "8d79419a17584fc8b66fa14d8ba125d6",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "476660ef0ec549d39537e44d77045da8",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "80aaf96142ce4a76af6490a55de943f6",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
