const options = {
  definition: {
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
      contact: {
        name: 'WhatGeo',
        url: 'https://z4nr.github.io/WhatGeo/',
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
                format: 'int64',
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
                    example: [],
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
    },
  },
  apis: ['./routes.js'],
};

module.exports = options;
