
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StageScalarFieldEnum = {
  id: 'id',
  length: 'length',
  start_id: 'start_id',
  end_id: 'end_id'
};

exports.Prisma.StationScalarFieldEnum = {
  id: 'id',
  station_id: 'station_id',
  latitude: 'latitude',
  longitude: 'longitude'
};

exports.Prisma.TrainScalarFieldEnum = {
  id: 'id',
  train_number: 'train_number',
  train_index: 'train_index',
  is_move: 'is_move',
  start_id: 'start_id',
  end_id: 'end_id'
};

exports.Prisma.WagonScalarFieldEnum = {
  id: 'id',
  wagon_number: 'wagon_number',
  train_id: 'train_id',
  destination_id: 'destination_id'
};

exports.Prisma.ActionHistoryScalarFieldEnum = {
  id: 'id',
  action_date: 'action_date',
  train_id: 'train_id',
  wagon_id: 'wagon_id',
  destination_id: 'destination_id',
  dislocation_id: 'dislocation_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Stage: 'Stage',
  Station: 'Station',
  Train: 'Train',
  Wagon: 'Wagon',
  ActionHistory: 'ActionHistory'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/kxrxh/Dev/Js/ScuffTrainAPI/backend/prisma/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "..",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL3ByaXNtYS8iCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFN0YWdlIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKCiAgbGVuZ3RoIEZsb2F0IEBkZWZhdWx0KDApCgogIHN0YXJ0ICAgIFN0YXRpb24gQHJlbGF0aW9uKG5hbWU6ICJzdGFydF9zdGFnZXMiLCBmaWVsZHM6IFtzdGFydF9pZF0sIHJlZmVyZW5jZXM6IFtzdGF0aW9uX2lkXSkKICBzdGFydF9pZCBJbnQKCiAgZW5kICAgIFN0YXRpb24gQHJlbGF0aW9uKG5hbWU6ICJlbmRfc3RhZ2VzIiwgZmllbGRzOiBbZW5kX2lkXSwgcmVmZXJlbmNlczogW3N0YXRpb25faWRdKQogIGVuZF9pZCBJbnQKCiAgQEB1bmlxdWUoW3N0YXJ0X2lkLCBlbmRfaWRdKQp9Cgptb2RlbCBTdGF0aW9uIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKCiAgc3RhdGlvbl9pZCBJbnQgICBAdW5pcXVlCiAgbGF0aXR1ZGUgICBGbG9hdAogIGxvbmdpdHVkZSAgRmxvYXQKCiAgc3RhcnRfc3RhZ2VzIFN0YWdlW10gQHJlbGF0aW9uKG5hbWU6ICJzdGFydF9zdGFnZXMiKQogIGVuZF9zdGFnZXMgICBTdGFnZVtdIEByZWxhdGlvbihuYW1lOiAiZW5kX3N0YWdlcyIpCgogIHN0YXJ0X3RyYWlucyBUcmFpbltdIEByZWxhdGlvbihuYW1lOiAic3RhcnRfc3RhdGlvbiIpCiAgZW5kX3RyYWlucyAgIFRyYWluW10gQHJlbGF0aW9uKG5hbWU6ICJlbmRfc3RhdGlvbiIpCgogIHdhZ29uc19kZXN0aW5hdGlvbiBXYWdvbltdIEByZWxhdGlvbihuYW1lOiAid2Fnb25fZGVzdGluYXRpb24iKQoKICBhY3Rpb25zX2Rpc2wgQWN0aW9uSGlzdG9yeVtdIEByZWxhdGlvbihuYW1lOiAiYWN0aW9uX2hpc3RvcnlfZGlzbG9jYXRpb24iKQogIGFjdGlvbnNfZGVzdCBBY3Rpb25IaXN0b3J5W10gQHJlbGF0aW9uKG5hbWU6ICJhY3Rpb25faGlzdG9yeV9kZXN0aW5hdGlvbiIpCgogIEBAbWFwKCJTdGF0aW9uQ29vcmRpbmF0ZXMiKQp9Cgptb2RlbCBUcmFpbiB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCgogIHRyYWluX251bWJlciBJbnQgICAgIEB1bmlxdWUKICB0cmFpbl9pbmRleCBTdHJpbmc/CiAgaXNfbW92ZSAgICAgIEJvb2xlYW4gQGRlZmF1bHQoZmFsc2UpCgogIHN0YXJ0ICAgIFN0YXRpb24gQHJlbGF0aW9uKG5hbWU6ICJzdGFydF9zdGF0aW9uIiwgZmllbGRzOiBbc3RhcnRfaWRdLCByZWZlcmVuY2VzOiBbc3RhdGlvbl9pZF0pCiAgc3RhcnRfaWQgSW50CgogIGVuZCAgICBTdGF0aW9uIEByZWxhdGlvbihuYW1lOiAiZW5kX3N0YXRpb24iLCBmaWVsZHM6IFtlbmRfaWRdLCByZWZlcmVuY2VzOiBbc3RhdGlvbl9pZF0pCiAgZW5kX2lkIEludAoKICB3YWdvbnMgIFdhZ29uW10KICBhY3Rpb25zIEFjdGlvbkhpc3RvcnlbXSBAcmVsYXRpb24obmFtZTogImFjdGlvbl9oaXN0b3J5X3RyYWluIikKfQoKbW9kZWwgV2Fnb24gewogIGlkIEludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQoKICB3YWdvbl9udW1iZXIgSW50ICAgIEB1bmlxdWUKICB0cmFpbl9pZCAgICAgSW50PwogIHRyYWluICAgICAgICBUcmFpbj8gQHJlbGF0aW9uKGZpZWxkczogW3RyYWluX2lkXSwgcmVmZXJlbmNlczogW3RyYWluX251bWJlcl0pCgogIGRlc3RpbmF0aW9uX2lkIEludAogIGRlc3RpbmF0aW9uICAgIFN0YXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2Rlc3RpbmF0aW9uX2lkXSwgcmVmZXJlbmNlczogW3N0YXRpb25faWRdLCBuYW1lOiAid2Fnb25fZGVzdGluYXRpb24iKQoKICBhY3Rpb25zIEFjdGlvbkhpc3RvcnlbXSBAcmVsYXRpb24obmFtZTogImFjdGlvbl9oaXN0b3J5X3dhZ29uIikKfQoKbW9kZWwgQWN0aW9uSGlzdG9yeSB7CiAgaWQgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBhY3Rpb25fZGF0ZSBEYXRlVGltZQoKICB0cmFpbl9pZCBJbnQKICB0cmFpbiAgICBUcmFpbiBAcmVsYXRpb24oZmllbGRzOiBbdHJhaW5faWRdLCByZWZlcmVuY2VzOiBbdHJhaW5fbnVtYmVyXSwgbmFtZTogImFjdGlvbl9oaXN0b3J5X3RyYWluIikKCiAgd2Fnb25faWQgSW50CiAgd2Fnb24gICAgV2Fnb24gQHJlbGF0aW9uKGZpZWxkczogW3dhZ29uX2lkXSwgcmVmZXJlbmNlczogW3dhZ29uX251bWJlcl0sIG5hbWU6ICJhY3Rpb25faGlzdG9yeV93YWdvbiIpCgogIGRlc3RpbmF0aW9uX2lkIEludAogIGRlc3RpbmF0aW9uICAgIFN0YXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2Rlc3RpbmF0aW9uX2lkXSwgcmVmZXJlbmNlczogW3N0YXRpb25faWRdLCBuYW1lOiAiYWN0aW9uX2hpc3RvcnlfZGVzdGluYXRpb24iKQoKICBkaXNsb2NhdGlvbl9pZCBJbnQKICBkaXNsb2NhdGlvbiAgICBTdGF0aW9uIEByZWxhdGlvbihmaWVsZHM6IFtkaXNsb2NhdGlvbl9pZF0sIHJlZmVyZW5jZXM6IFtzdGF0aW9uX2lkXSwgbmFtZTogImFjdGlvbl9oaXN0b3J5X2Rpc2xvY2F0aW9uIikKfQ==",
  "inlineSchemaHash": "0d7514ed9966110d7644b8819f6565e96580654fe858c71c260b59985c6dcf31",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Stage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Station\",\"relationName\":\"start_stages\",\"relationFromFields\":[\"start_id\"],\"relationToFields\":[\"station_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Station\",\"relationName\":\"end_stages\",\"relationFromFields\":[\"end_id\"],\"relationToFields\":[\"station_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"start_id\",\"end_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"start_id\",\"end_id\"]}],\"isGenerated\":false},\"Station\":{\"dbName\":\"StationCoordinates\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"station_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"latitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longitude\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_stages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stage\",\"relationName\":\"start_stages\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_stages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stage\",\"relationName\":\"end_stages\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_trains\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Train\",\"relationName\":\"start_station\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_trains\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Train\",\"relationName\":\"end_station\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wagons_destination\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wagon\",\"relationName\":\"wagon_destination\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actions_disl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActionHistory\",\"relationName\":\"action_history_dislocation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actions_dest\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActionHistory\",\"relationName\":\"action_history_destination\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Train\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"train_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"train_index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_move\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Station\",\"relationName\":\"start_station\",\"relationFromFields\":[\"start_id\"],\"relationToFields\":[\"station_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Station\",\"relationName\":\"end_station\",\"relationFromFields\":[\"end_id\"],\"relationToFields\":[\"station_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wagons\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wagon\",\"relationName\":\"TrainToWagon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActionHistory\",\"relationName\":\"action_history_train\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Wagon\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wagon_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"train_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"train\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Train\",\"relationName\":\"TrainToWagon\",\"relationFromFields\":[\"train_id\"],\"relationToFields\":[\"train_number\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destination_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destination\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Station\",\"relationName\":\"wagon_destination\",\"relationFromFields\":[\"destination_id\"],\"relationToFields\":[\"station_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActionHistory\",\"relationName\":\"action_history_wagon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ActionHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"train_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"train\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Train\",\"relationName\":\"action_history_train\",\"relationFromFields\":[\"train_id\"],\"relationToFields\":[\"train_number\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wagon_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wagon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Wagon\",\"relationName\":\"action_history_wagon\",\"relationFromFields\":[\"wagon_id\"],\"relationToFields\":[\"wagon_number\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destination_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destination\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Station\",\"relationName\":\"action_history_destination\",\"relationFromFields\":[\"destination_id\"],\"relationToFields\":[\"station_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dislocation_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dislocation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Station\",\"relationName\":\"action_history_dislocation\",\"relationFromFields\":[\"dislocation_id\"],\"relationToFields\":[\"station_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/prisma/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/prisma/schema.prisma")
