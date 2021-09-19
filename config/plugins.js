module.exports = () => {
  // ...
    return {
      // upload: {
      //   provider: 'aws-s3',
      //   providerOptions: {
      //     accessKeyId: env('AWS_ACCESS_KEY_ID'),
      //     secretAccessKey: env('AWS_ACCESS_SECRET'),
      //     region: env('AWS_REGION'),
      //     params: {
      //       Bucket: env('AWS_BUCKET'),
      //     },
      //   },
      // },
      upload: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'mehmoh41',
          api_key: '458262958777453',
          api_secret: '3PjJqZlMljZkTG-1JkIwEsijyGw',
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    }

  // ...
};
