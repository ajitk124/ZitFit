// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,

    region: 'ap-south-1',
    identityPoolId: 'ap-south-1:d7350469-872d-4d94-be11-365fefd78ab1',
    userPoolId: 'ap-south-1_yxb7FlZbz',
    clientId: '1aa66uu31ofgbe27j8a90r2aj5',

    rekognitionBucket: '',
    albumName: "",
    bucketRegion: '',

    ddbTableName: ''

};
