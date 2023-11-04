export const swaggerJson = {
  openapi: '3.1.0',
  info: {
    title: 'WhatGeo API Documentation with Swagger',
    version: '1.67.0',
    description:
      'Berikut ini merupakan dokumentasi lengkap terkait API WhatGeo yang dibangun menggunakan Swagger',
    license: {
      name: 'MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
  },
  servers: [
    {
      url: 'https://zulham.ahlitani.com/geo/v1',
    },
  ],
  components: {
    schemas: {
      Province: {
        type: 'object',
        properties: {
          _id: {
            type: 'number',
            example: 33,
          },
          provFeature: {
            type: 'object',
            example: {
              provFeature: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        [
                          [
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                          ],
                        ],
                        [
                          [
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                          ],
                        ],
                      ],
                    },
                    properties: {
                      Kind: 'Province',
                      Code: 33,
                      Name: 'JAWA TENGAH',
                      Year: 2016,
                      Source: 'BPS',
                      Parent: 62,
                      Country: 'INDONESIA',
                    },
                  },
                ],
              },
            },
          },
          island: {
            type: 'string',
            example: 'Jawa',
          },
          capital: {
            type: 'string',
            example: 'Semarang',
          },
          date_created: {
            type: 'string',
            example: '15 Agustus 1950',
          },
          description: {
            type: 'string',
            example: 'Provinsi Jawa Tengah merupakan',
          },
          lat_capital: {
            type: 'number',
            example: -6.966667,
          },
          long_capital: {
            type: 'number',
            example: 110.416664,
          },
          province: {
            type: 'string',
            example: 'Jawa Tengah',
          },
        },
      },
      City: {
        type: 'object',
        properties: {
          _id: {
            type: 'number',
            example: 3318,
          },
          prov_id: {
            type: 'number',
            example: 33,
          },
          provFeature: {
            type: 'object',
            example: {
              provFeature: {
                type: 'FeatureCollection',
                features: [
                  {
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        [
                          [
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                          ],
                        ],
                        [
                          [
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                            [97.47859707099906, 5.242515898990405],
                          ],
                        ],
                      ],
                    },
                    properties: {
                      Kind: 'City',
                      Code: 3318,
                      Name: 'PATI',
                      Year: 2016,
                      Source: 'BPS',
                      Parent: 62,
                      Country: 'INDONESIA',
                    },
                  },
                ],
              },
            },
          },
          island: {
            type: 'string',
            example: 'Jawa',
          },
          destinations: {
            type: 'array',
            example: ['1111', '2222', '3333'],
          },
        },
      },
      Destiny: {
        type: 'object',
        properties: {
          _id: {
            type: 'number',
            example: 123654,
          },
          place_name: {
            type: 'string',
            example: 'Taman Lorem',
          },
          latitude: {
            type: 'number',
            example: -346.43278,
          },
          longitude: {
            type: 'number',
            example: 46.43278,
          },
          destiny_type: {
            type: 'string',
            example: 'Reservoir',
          },
        },
      },
    },
  },
  paths: {
    '/prov/page': {
      get: {
        tags: ['Province'],
        summary: 'Get total page for all Indonesian Province',
        responses: {
          202: {
            description: 'Success get total page',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    page: 13,
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/prov': {
      get: {
        tags: ['Province'],
        summary: 'Get province geojson data base on page number',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number to get 3 geojson data of province',
            required: true,
            schema: {
              type: 'integer',
              example: 1,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get province data by page number',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Province',
                  },
                },
              },
            },
          },
          404: {
            description: "Throw message when in can't find any data",
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Data Provinsi Tidak Ditemukan',
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/prov/isle/page': {
      get: {
        tags: ['Province'],
        summary: 'Get total page of geojson province base on island name',
        parameters: [
          {
            name: 'island',
            in: 'query',
            description: 'island name to get 3 geojson data of province',
            required: true,
            schema: {
              type: 'string',
              example: 'Papua',
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get total page base on island name',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    page: 2,
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/prov/isle': {
      get: {
        tags: ['Province'],
        summary:
          'Get province geojson data base on island name and page number',
        parameters: [
          {
            name: 'island',
            in: 'query',
            description: 'island name to get 3 geojson data of province',
            required: true,
            schema: {
              type: 'string',
              example: 'Jawa',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'page number to get 3 geojson data of province',
            required: true,
            schema: {
              type: 'integer',
              example: 2,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get province data base on island name',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Province',
                  },
                },
              },
            },
          },
          404: {
            description: "Throw message when in can't find any data",
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Data Provinsi Tidak Ditemukan',
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/prov/{id}/map': {
      get: {
        tags: ['Province'],
        summary: 'Get province geojson data base on province id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'get geojson base on province id',
            required: true,
            schema: {
              type: 'integer',
              example: 33,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get province data by page number',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Province',
                },
              },
            },
          },
          404: {
            description: "Throw message when in can't find any data",
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Data Provinsi Tidak Ditemukan',
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/city/page': {
      get: {
        tags: ['City'],
        summary: 'Get total page for all Indonesian City',
        responses: {
          202: {
            description: 'Success get total page',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    page: 103,
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/city': {
      get: {
        tags: ['City'],
        summary: 'Get city geojson data base on page number',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'page number to get 5 geojson data of city',
            required: true,
            schema: {
              type: 'integer',
              example: 15,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get province data by page number',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/City',
                  },
                },
              },
            },
          },
          404: {
            description: "Throw message when in can't find any data",
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Data Provinsi Tidak Ditemukan',
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/city/prov/page': {
      get: {
        tags: ['City'],
        summary: 'Get total page of geojson city base on province id',
        parameters: [
          {
            name: 'prov_id',
            in: 'query',
            description: 'province id to get 5 geojson data of city',
            required: true,
            schema: {
              type: 'integer',
              example: 33,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get total page base on island name',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    page: 2,
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/city/prov': {
      get: {
        tags: ['City'],
        summary: 'Get city geojson data base on province id and page number',
        parameters: [
          {
            name: 'prov_id',
            in: 'query',
            description: 'province id to get 5 geojson data of city',
            required: true,
            schema: {
              type: 'integer',
              example: 33,
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'page number to get 5 geojson data of city',
            required: true,
            schema: {
              type: 'integer',
              example: 2,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get province data base on island name',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/City',
                  },
                },
              },
            },
          },
          404: {
            description: "Throw message when in can't find any data",
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Data Kota Tidak Ditemukan',
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/city/isle/page': {
      get: {
        tags: ['City'],
        summary: 'Get total page of geojson city base on island name',
        parameters: [
          {
            name: 'island',
            in: 'query',
            description: 'island name to get 5 geojson data of city',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get total page base on island name',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    page: 2,
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/city/isle': {
      get: {
        tags: ['City'],
        summary: 'Get city geojson data base on island name and page number',
        parameters: [
          {
            name: 'island',
            in: 'query',
            description: 'island name to get 5 geojson data of city',
            required: true,
            schema: {
              type: 'string',
              example: 'Jawa',
            },
          },
          {
            name: 'page',
            in: 'query',
            description: 'page number to get 5 geojson data of city',
            required: true,
            schema: {
              type: 'integer',
              example: 2,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get province data base on island name',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/City',
                  },
                },
              },
            },
          },
          404: {
            description: "Throw message when in can't find any data",
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Data Kota Tidak Ditemukan',
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/city/{id}/map': {
      get: {
        tags: ['City'],
        summary: 'Get city geojson data base on city id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'get geojson base on city id',
            required: true,
            schema: {
              type: 'integer',
              example: 3318,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get city data by page number',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/City',
                },
              },
            },
          },
          404: {
            description: "Throw message when in can't find any data",
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Denah Kab/Kota Tidak Ditemuka',
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/city/{id}/destiny': {
      get: {
        tags: ['City'],
        summary: 'Get city geojson data base on city id',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'get geojson base on city id',
            required: true,
            schema: {
              type: 'integer',
              example: 3318,
            },
          },
        ],
        responses: {
          202: {
            description: 'Success get city data by page number',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Destiny',
                  },
                },
              },
            },
          },
          404: {
            description: "Throw message when in can't find any data",
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Data lokasi liburan tidak ditemukana',
                  },
                },
              },
            },
          },
          500: {
            description: 'Something wrong in server',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  example: {
                    message: 'Terjadi Kesalahan Pada Server',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
