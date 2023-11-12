
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Stage
 * 
 */
export type Stage = $Result.DefaultSelection<Prisma.$StagePayload>
/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model Train
 * 
 */
export type Train = $Result.DefaultSelection<Prisma.$TrainPayload>
/**
 * Model Wagon
 * 
 */
export type Wagon = $Result.DefaultSelection<Prisma.$WagonPayload>
/**
 * Model ActionHistory
 * 
 */
export type ActionHistory = $Result.DefaultSelection<Prisma.$ActionHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stages
 * const stages = await prisma.stage.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Stages
   * const stages = await prisma.stage.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.stage`: Exposes CRUD operations for the **Stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stage.findMany()
    * ```
    */
  get stage(): Prisma.StageDelegate<ExtArgs>;

  /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs>;

  /**
   * `prisma.train`: Exposes CRUD operations for the **Train** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trains
    * const trains = await prisma.train.findMany()
    * ```
    */
  get train(): Prisma.TrainDelegate<ExtArgs>;

  /**
   * `prisma.wagon`: Exposes CRUD operations for the **Wagon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wagons
    * const wagons = await prisma.wagon.findMany()
    * ```
    */
  get wagon(): Prisma.WagonDelegate<ExtArgs>;

  /**
   * `prisma.actionHistory`: Exposes CRUD operations for the **ActionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActionHistories
    * const actionHistories = await prisma.actionHistory.findMany()
    * ```
    */
  get actionHistory(): Prisma.ActionHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Stage: 'Stage',
    Station: 'Station',
    Train: 'Train',
    Wagon: 'Wagon',
    ActionHistory: 'ActionHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'stage' | 'station' | 'train' | 'wagon' | 'actionHistory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Stage: {
        payload: Prisma.$StagePayload<ExtArgs>
        fields: Prisma.StageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findFirst: {
            args: Prisma.StageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findMany: {
            args: Prisma.StageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          create: {
            args: Prisma.StageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          createMany: {
            args: Prisma.StageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          update: {
            args: Prisma.StageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          deleteMany: {
            args: Prisma.StageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          aggregate: {
            args: Prisma.StageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStage>
          }
          groupBy: {
            args: Prisma.StageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageCountArgs<ExtArgs>,
            result: $Utils.Optional<StageCountAggregateOutputType> | number
          }
        }
      }
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>,
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      Train: {
        payload: Prisma.$TrainPayload<ExtArgs>
        fields: Prisma.TrainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          findFirst: {
            args: Prisma.TrainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          findMany: {
            args: Prisma.TrainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>[]
          }
          create: {
            args: Prisma.TrainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          createMany: {
            args: Prisma.TrainCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TrainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          update: {
            args: Prisma.TrainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          deleteMany: {
            args: Prisma.TrainDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TrainUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TrainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TrainPayload>
          }
          aggregate: {
            args: Prisma.TrainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrain>
          }
          groupBy: {
            args: Prisma.TrainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrainGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainCountArgs<ExtArgs>,
            result: $Utils.Optional<TrainCountAggregateOutputType> | number
          }
        }
      }
      Wagon: {
        payload: Prisma.$WagonPayload<ExtArgs>
        fields: Prisma.WagonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WagonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WagonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload>
          }
          findFirst: {
            args: Prisma.WagonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WagonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload>
          }
          findMany: {
            args: Prisma.WagonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload>[]
          }
          create: {
            args: Prisma.WagonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload>
          }
          createMany: {
            args: Prisma.WagonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WagonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload>
          }
          update: {
            args: Prisma.WagonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload>
          }
          deleteMany: {
            args: Prisma.WagonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WagonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WagonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WagonPayload>
          }
          aggregate: {
            args: Prisma.WagonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWagon>
          }
          groupBy: {
            args: Prisma.WagonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WagonGroupByOutputType>[]
          }
          count: {
            args: Prisma.WagonCountArgs<ExtArgs>,
            result: $Utils.Optional<WagonCountAggregateOutputType> | number
          }
        }
      }
      ActionHistory: {
        payload: Prisma.$ActionHistoryPayload<ExtArgs>
        fields: Prisma.ActionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload>
          }
          findFirst: {
            args: Prisma.ActionHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload>
          }
          findMany: {
            args: Prisma.ActionHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload>[]
          }
          create: {
            args: Prisma.ActionHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload>
          }
          createMany: {
            args: Prisma.ActionHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ActionHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload>
          }
          update: {
            args: Prisma.ActionHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ActionHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActionHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActionHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActionHistoryPayload>
          }
          aggregate: {
            args: Prisma.ActionHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActionHistory>
          }
          groupBy: {
            args: Prisma.ActionHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ActionHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    start_stages: number
    end_stages: number
    start_trains: number
    end_trains: number
    wagons_destination: number
    actions_disl: number
    actions_dest: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    start_stages?: boolean | StationCountOutputTypeCountStart_stagesArgs
    end_stages?: boolean | StationCountOutputTypeCountEnd_stagesArgs
    start_trains?: boolean | StationCountOutputTypeCountStart_trainsArgs
    end_trains?: boolean | StationCountOutputTypeCountEnd_trainsArgs
    wagons_destination?: boolean | StationCountOutputTypeCountWagons_destinationArgs
    actions_disl?: boolean | StationCountOutputTypeCountActions_dislArgs
    actions_dest?: boolean | StationCountOutputTypeCountActions_destArgs
  }

  // Custom InputTypes

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountStart_stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountEnd_stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountStart_trainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainWhereInput
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountEnd_trainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainWhereInput
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountWagons_destinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WagonWhereInput
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountActions_dislArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionHistoryWhereInput
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountActions_destArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionHistoryWhereInput
  }



  /**
   * Count Type TrainCountOutputType
   */

  export type TrainCountOutputType = {
    wagons: number
    actions: number
  }

  export type TrainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wagons?: boolean | TrainCountOutputTypeCountWagonsArgs
    actions?: boolean | TrainCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes

  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainCountOutputType
     */
    select?: TrainCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeCountWagonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WagonWhereInput
  }


  /**
   * TrainCountOutputType without action
   */
  export type TrainCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionHistoryWhereInput
  }



  /**
   * Count Type WagonCountOutputType
   */

  export type WagonCountOutputType = {
    actions: number
  }

  export type WagonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | WagonCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes

  /**
   * WagonCountOutputType without action
   */
  export type WagonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WagonCountOutputType
     */
    select?: WagonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WagonCountOutputType without action
   */
  export type WagonCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionHistoryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Stage
   */

  export type AggregateStage = {
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  export type StageAvgAggregateOutputType = {
    id: number | null
    length: number | null
    start_id: number | null
    end_id: number | null
  }

  export type StageSumAggregateOutputType = {
    id: number | null
    length: number | null
    start_id: number | null
    end_id: number | null
  }

  export type StageMinAggregateOutputType = {
    id: number | null
    length: number | null
    start_id: number | null
    end_id: number | null
  }

  export type StageMaxAggregateOutputType = {
    id: number | null
    length: number | null
    start_id: number | null
    end_id: number | null
  }

  export type StageCountAggregateOutputType = {
    id: number
    length: number
    start_id: number
    end_id: number
    _all: number
  }


  export type StageAvgAggregateInputType = {
    id?: true
    length?: true
    start_id?: true
    end_id?: true
  }

  export type StageSumAggregateInputType = {
    id?: true
    length?: true
    start_id?: true
    end_id?: true
  }

  export type StageMinAggregateInputType = {
    id?: true
    length?: true
    start_id?: true
    end_id?: true
  }

  export type StageMaxAggregateInputType = {
    id?: true
    length?: true
    start_id?: true
    end_id?: true
  }

  export type StageCountAggregateInputType = {
    id?: true
    length?: true
    start_id?: true
    end_id?: true
    _all?: true
  }

  export type StageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stage to aggregate.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stages
    **/
    _count?: true | StageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageMaxAggregateInputType
  }

  export type GetStageAggregateType<T extends StageAggregateArgs> = {
        [P in keyof T & keyof AggregateStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStage[P]>
      : GetScalarType<T[P], AggregateStage[P]>
  }




  export type StageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
    orderBy?: StageOrderByWithAggregationInput | StageOrderByWithAggregationInput[]
    by: StageScalarFieldEnum[] | StageScalarFieldEnum
    having?: StageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageCountAggregateInputType | true
    _avg?: StageAvgAggregateInputType
    _sum?: StageSumAggregateInputType
    _min?: StageMinAggregateInputType
    _max?: StageMaxAggregateInputType
  }

  export type StageGroupByOutputType = {
    id: number
    length: number
    start_id: number
    end_id: number
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  type GetStageGroupByPayload<T extends StageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageGroupByOutputType[P]>
            : GetScalarType<T[P], StageGroupByOutputType[P]>
        }
      >
    >


  export type StageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    length?: boolean
    start_id?: boolean
    end_id?: boolean
    start?: boolean | StationDefaultArgs<ExtArgs>
    end?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectScalar = {
    id?: boolean
    length?: boolean
    start_id?: boolean
    end_id?: boolean
  }

  export type StageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    start?: boolean | StationDefaultArgs<ExtArgs>
    end?: boolean | StationDefaultArgs<ExtArgs>
  }


  export type $StagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stage"
    objects: {
      start: Prisma.$StationPayload<ExtArgs>
      end: Prisma.$StationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      length: number
      start_id: number
      end_id: number
    }, ExtArgs["result"]["stage"]>
    composites: {}
  }


  type StageGetPayload<S extends boolean | null | undefined | StageDefaultArgs> = $Result.GetResult<Prisma.$StagePayload, S>

  type StageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StageCountAggregateInputType | true
    }

  export interface StageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stage'], meta: { name: 'Stage' } }
    /**
     * Find zero or one Stage that matches the filter.
     * @param {StageFindUniqueArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StageFindUniqueArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Stage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StageFindUniqueOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StageFindFirstArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Stage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stage.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageWithIdOnly = await prisma.stage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Stage.
     * @param {StageCreateArgs} args - Arguments to create a Stage.
     * @example
     * // Create one Stage
     * const Stage = await prisma.stage.create({
     *   data: {
     *     // ... data to create a Stage
     *   }
     * })
     * 
    **/
    create<T extends StageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StageCreateArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stages.
     *     @param {StageCreateManyArgs} args - Arguments to create many Stages.
     *     @example
     *     // Create many Stages
     *     const stage = await prisma.stage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stage.
     * @param {StageDeleteArgs} args - Arguments to delete one Stage.
     * @example
     * // Delete one Stage
     * const Stage = await prisma.stage.delete({
     *   where: {
     *     // ... filter to delete one Stage
     *   }
     * })
     * 
    **/
    delete<T extends StageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StageDeleteArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Stage.
     * @param {StageUpdateArgs} args - Arguments to update one Stage.
     * @example
     * // Update one Stage
     * const stage = await prisma.stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StageUpdateArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stages.
     * @param {StageDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stage.
     * @param {StageUpsertArgs} args - Arguments to update or create a Stage.
     * @example
     * // Update or create a Stage
     * const stage = await prisma.stage.upsert({
     *   create: {
     *     // ... data to create a Stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stage we want to update
     *   }
     * })
    **/
    upsert<T extends StageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StageUpsertArgs<ExtArgs>>
    ): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stage.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends StageCountArgs>(
      args?: Subset<T, StageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StageAggregateArgs>(args: Subset<T, StageAggregateArgs>): Prisma.PrismaPromise<GetStageAggregateType<T>>

    /**
     * Group by Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageGroupByArgs['orderBy'] }
        : { orderBy?: StageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stage model
   */
  readonly fields: StageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    start<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    end<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Stage model
   */ 
  interface StageFieldRefs {
    readonly id: FieldRef<"Stage", 'Int'>
    readonly length: FieldRef<"Stage", 'Float'>
    readonly start_id: FieldRef<"Stage", 'Int'>
    readonly end_id: FieldRef<"Stage", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Stage findUnique
   */
  export type StageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }


  /**
   * Stage findUniqueOrThrow
   */
  export type StageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }


  /**
   * Stage findFirst
   */
  export type StageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Stage findFirstOrThrow
   */
  export type StageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Stage findMany
   */
  export type StageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Stage create
   */
  export type StageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to create a Stage.
     */
    data: XOR<StageCreateInput, StageUncheckedCreateInput>
  }


  /**
   * Stage createMany
   */
  export type StageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Stage update
   */
  export type StageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to update a Stage.
     */
    data: XOR<StageUpdateInput, StageUncheckedUpdateInput>
    /**
     * Choose, which Stage to update.
     */
    where: StageWhereUniqueInput
  }


  /**
   * Stage updateMany
   */
  export type StageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stages.
     */
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StageWhereInput
  }


  /**
   * Stage upsert
   */
  export type StageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The filter to search for the Stage to update in case it exists.
     */
    where: StageWhereUniqueInput
    /**
     * In case the Stage found by the `where` argument doesn't exist, create a new Stage with this data.
     */
    create: XOR<StageCreateInput, StageUncheckedCreateInput>
    /**
     * In case the Stage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageUpdateInput, StageUncheckedUpdateInput>
  }


  /**
   * Stage delete
   */
  export type StageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter which Stage to delete.
     */
    where: StageWhereUniqueInput
  }


  /**
   * Stage deleteMany
   */
  export type StageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stages to delete
     */
    where?: StageWhereInput
  }


  /**
   * Stage without action
   */
  export type StageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
  }



  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
    station_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
    station_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    station_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    station_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    station_id: number
    latitude: number
    longitude: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
    station_id?: true
    latitude?: true
    longitude?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
    station_id?: true
    latitude?: true
    longitude?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    station_id?: true
    latitude?: true
    longitude?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    station_id?: true
    latitude?: true
    longitude?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    station_id?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    station_id: number
    latitude: number
    longitude: number
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    station_id?: boolean
    latitude?: boolean
    longitude?: boolean
    start_stages?: boolean | Station$start_stagesArgs<ExtArgs>
    end_stages?: boolean | Station$end_stagesArgs<ExtArgs>
    start_trains?: boolean | Station$start_trainsArgs<ExtArgs>
    end_trains?: boolean | Station$end_trainsArgs<ExtArgs>
    wagons_destination?: boolean | Station$wagons_destinationArgs<ExtArgs>
    actions_disl?: boolean | Station$actions_dislArgs<ExtArgs>
    actions_dest?: boolean | Station$actions_destArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectScalar = {
    id?: boolean
    station_id?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type StationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    start_stages?: boolean | Station$start_stagesArgs<ExtArgs>
    end_stages?: boolean | Station$end_stagesArgs<ExtArgs>
    start_trains?: boolean | Station$start_trainsArgs<ExtArgs>
    end_trains?: boolean | Station$end_trainsArgs<ExtArgs>
    wagons_destination?: boolean | Station$wagons_destinationArgs<ExtArgs>
    actions_disl?: boolean | Station$actions_dislArgs<ExtArgs>
    actions_dest?: boolean | Station$actions_destArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {
      start_stages: Prisma.$StagePayload<ExtArgs>[]
      end_stages: Prisma.$StagePayload<ExtArgs>[]
      start_trains: Prisma.$TrainPayload<ExtArgs>[]
      end_trains: Prisma.$TrainPayload<ExtArgs>[]
      wagons_destination: Prisma.$WagonPayload<ExtArgs>[]
      actions_disl: Prisma.$ActionHistoryPayload<ExtArgs>[]
      actions_dest: Prisma.$ActionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      station_id: number
      latitude: number
      longitude: number
    }, ExtArgs["result"]["station"]>
    composites: {}
  }


  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Station that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
    **/
    create<T extends StationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StationCreateArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stations.
     *     @param {StationCreateManyArgs} args - Arguments to create many Stations.
     *     @example
     *     // Create many Stations
     *     const station = await prisma.station.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
    **/
    delete<T extends StationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StationDeleteArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpdateArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
    **/
    upsert<T extends StationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StationUpsertArgs<ExtArgs>>
    ): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    start_stages<T extends Station$start_stagesArgs<ExtArgs> = {}>(args?: Subset<T, Station$start_stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findMany'> | Null>;

    end_stages<T extends Station$end_stagesArgs<ExtArgs> = {}>(args?: Subset<T, Station$end_stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, 'findMany'> | Null>;

    start_trains<T extends Station$start_trainsArgs<ExtArgs> = {}>(args?: Subset<T, Station$start_trainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findMany'> | Null>;

    end_trains<T extends Station$end_trainsArgs<ExtArgs> = {}>(args?: Subset<T, Station$end_trainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findMany'> | Null>;

    wagons_destination<T extends Station$wagons_destinationArgs<ExtArgs> = {}>(args?: Subset<T, Station$wagons_destinationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'findMany'> | Null>;

    actions_disl<T extends Station$actions_dislArgs<ExtArgs> = {}>(args?: Subset<T, Station$actions_dislArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    actions_dest<T extends Station$actions_destArgs<ExtArgs> = {}>(args?: Subset<T, Station$actions_destArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Station model
   */ 
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'Int'>
    readonly station_id: FieldRef<"Station", 'Int'>
    readonly latitude: FieldRef<"Station", 'Float'>
    readonly longitude: FieldRef<"Station", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }


  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
  }


  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }


  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }


  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
  }


  /**
   * Station.start_stages
   */
  export type Station$start_stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    where?: StageWhereInput
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    cursor?: StageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Station.end_stages
   */
  export type Station$end_stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StageInclude<ExtArgs> | null
    where?: StageWhereInput
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    cursor?: StageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }


  /**
   * Station.start_trains
   */
  export type Station$start_trainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    where?: TrainWhereInput
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    cursor?: TrainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }


  /**
   * Station.end_trains
   */
  export type Station$end_trainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    where?: TrainWhereInput
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    cursor?: TrainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }


  /**
   * Station.wagons_destination
   */
  export type Station$wagons_destinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    where?: WagonWhereInput
    orderBy?: WagonOrderByWithRelationInput | WagonOrderByWithRelationInput[]
    cursor?: WagonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WagonScalarFieldEnum | WagonScalarFieldEnum[]
  }


  /**
   * Station.actions_disl
   */
  export type Station$actions_dislArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    where?: ActionHistoryWhereInput
    orderBy?: ActionHistoryOrderByWithRelationInput | ActionHistoryOrderByWithRelationInput[]
    cursor?: ActionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionHistoryScalarFieldEnum | ActionHistoryScalarFieldEnum[]
  }


  /**
   * Station.actions_dest
   */
  export type Station$actions_destArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    where?: ActionHistoryWhereInput
    orderBy?: ActionHistoryOrderByWithRelationInput | ActionHistoryOrderByWithRelationInput[]
    cursor?: ActionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionHistoryScalarFieldEnum | ActionHistoryScalarFieldEnum[]
  }


  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StationInclude<ExtArgs> | null
  }



  /**
   * Model Train
   */

  export type AggregateTrain = {
    _count: TrainCountAggregateOutputType | null
    _avg: TrainAvgAggregateOutputType | null
    _sum: TrainSumAggregateOutputType | null
    _min: TrainMinAggregateOutputType | null
    _max: TrainMaxAggregateOutputType | null
  }

  export type TrainAvgAggregateOutputType = {
    id: number | null
    train_number: number | null
    start_id: number | null
    end_id: number | null
  }

  export type TrainSumAggregateOutputType = {
    id: number | null
    train_number: number | null
    start_id: number | null
    end_id: number | null
  }

  export type TrainMinAggregateOutputType = {
    id: number | null
    train_number: number | null
    train_index: string | null
    is_move: boolean | null
    start_id: number | null
    end_id: number | null
  }

  export type TrainMaxAggregateOutputType = {
    id: number | null
    train_number: number | null
    train_index: string | null
    is_move: boolean | null
    start_id: number | null
    end_id: number | null
  }

  export type TrainCountAggregateOutputType = {
    id: number
    train_number: number
    train_index: number
    is_move: number
    start_id: number
    end_id: number
    _all: number
  }


  export type TrainAvgAggregateInputType = {
    id?: true
    train_number?: true
    start_id?: true
    end_id?: true
  }

  export type TrainSumAggregateInputType = {
    id?: true
    train_number?: true
    start_id?: true
    end_id?: true
  }

  export type TrainMinAggregateInputType = {
    id?: true
    train_number?: true
    train_index?: true
    is_move?: true
    start_id?: true
    end_id?: true
  }

  export type TrainMaxAggregateInputType = {
    id?: true
    train_number?: true
    train_index?: true
    is_move?: true
    start_id?: true
    end_id?: true
  }

  export type TrainCountAggregateInputType = {
    id?: true
    train_number?: true
    train_index?: true
    is_move?: true
    start_id?: true
    end_id?: true
    _all?: true
  }

  export type TrainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Train to aggregate.
     */
    where?: TrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trains to fetch.
     */
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trains
    **/
    _count?: true | TrainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainMaxAggregateInputType
  }

  export type GetTrainAggregateType<T extends TrainAggregateArgs> = {
        [P in keyof T & keyof AggregateTrain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrain[P]>
      : GetScalarType<T[P], AggregateTrain[P]>
  }




  export type TrainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainWhereInput
    orderBy?: TrainOrderByWithAggregationInput | TrainOrderByWithAggregationInput[]
    by: TrainScalarFieldEnum[] | TrainScalarFieldEnum
    having?: TrainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainCountAggregateInputType | true
    _avg?: TrainAvgAggregateInputType
    _sum?: TrainSumAggregateInputType
    _min?: TrainMinAggregateInputType
    _max?: TrainMaxAggregateInputType
  }

  export type TrainGroupByOutputType = {
    id: number
    train_number: number
    train_index: string | null
    is_move: boolean
    start_id: number
    end_id: number
    _count: TrainCountAggregateOutputType | null
    _avg: TrainAvgAggregateOutputType | null
    _sum: TrainSumAggregateOutputType | null
    _min: TrainMinAggregateOutputType | null
    _max: TrainMaxAggregateOutputType | null
  }

  type GetTrainGroupByPayload<T extends TrainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainGroupByOutputType[P]>
            : GetScalarType<T[P], TrainGroupByOutputType[P]>
        }
      >
    >


  export type TrainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    train_number?: boolean
    train_index?: boolean
    is_move?: boolean
    start_id?: boolean
    end_id?: boolean
    start?: boolean | StationDefaultArgs<ExtArgs>
    end?: boolean | StationDefaultArgs<ExtArgs>
    wagons?: boolean | Train$wagonsArgs<ExtArgs>
    actions?: boolean | Train$actionsArgs<ExtArgs>
    _count?: boolean | TrainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["train"]>

  export type TrainSelectScalar = {
    id?: boolean
    train_number?: boolean
    train_index?: boolean
    is_move?: boolean
    start_id?: boolean
    end_id?: boolean
  }

  export type TrainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    start?: boolean | StationDefaultArgs<ExtArgs>
    end?: boolean | StationDefaultArgs<ExtArgs>
    wagons?: boolean | Train$wagonsArgs<ExtArgs>
    actions?: boolean | Train$actionsArgs<ExtArgs>
    _count?: boolean | TrainCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TrainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Train"
    objects: {
      start: Prisma.$StationPayload<ExtArgs>
      end: Prisma.$StationPayload<ExtArgs>
      wagons: Prisma.$WagonPayload<ExtArgs>[]
      actions: Prisma.$ActionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      train_number: number
      train_index: string | null
      is_move: boolean
      start_id: number
      end_id: number
    }, ExtArgs["result"]["train"]>
    composites: {}
  }


  type TrainGetPayload<S extends boolean | null | undefined | TrainDefaultArgs> = $Result.GetResult<Prisma.$TrainPayload, S>

  type TrainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrainFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TrainCountAggregateInputType | true
    }

  export interface TrainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Train'], meta: { name: 'Train' } }
    /**
     * Find zero or one Train that matches the filter.
     * @param {TrainFindUniqueArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TrainFindUniqueArgs<ExtArgs>>
    ): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Train that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrainFindUniqueOrThrowArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Train that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainFindFirstArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainFindFirstArgs<ExtArgs>>
    ): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Train that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainFindFirstOrThrowArgs} args - Arguments to find a Train
     * @example
     * // Get one Train
     * const train = await prisma.train.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Trains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trains
     * const trains = await prisma.train.findMany()
     * 
     * // Get first 10 Trains
     * const trains = await prisma.train.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainWithIdOnly = await prisma.train.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Train.
     * @param {TrainCreateArgs} args - Arguments to create a Train.
     * @example
     * // Create one Train
     * const Train = await prisma.train.create({
     *   data: {
     *     // ... data to create a Train
     *   }
     * })
     * 
    **/
    create<T extends TrainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainCreateArgs<ExtArgs>>
    ): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Trains.
     *     @param {TrainCreateManyArgs} args - Arguments to create many Trains.
     *     @example
     *     // Create many Trains
     *     const train = await prisma.train.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Train.
     * @param {TrainDeleteArgs} args - Arguments to delete one Train.
     * @example
     * // Delete one Train
     * const Train = await prisma.train.delete({
     *   where: {
     *     // ... filter to delete one Train
     *   }
     * })
     * 
    **/
    delete<T extends TrainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TrainDeleteArgs<ExtArgs>>
    ): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Train.
     * @param {TrainUpdateArgs} args - Arguments to update one Train.
     * @example
     * // Update one Train
     * const train = await prisma.train.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TrainUpdateArgs<ExtArgs>>
    ): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Trains.
     * @param {TrainDeleteManyArgs} args - Arguments to filter Trains to delete.
     * @example
     * // Delete a few Trains
     * const { count } = await prisma.train.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TrainDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trains
     * const train = await prisma.train.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TrainUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Train.
     * @param {TrainUpsertArgs} args - Arguments to update or create a Train.
     * @example
     * // Update or create a Train
     * const train = await prisma.train.upsert({
     *   create: {
     *     // ... data to create a Train
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Train we want to update
     *   }
     * })
    **/
    upsert<T extends TrainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TrainUpsertArgs<ExtArgs>>
    ): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Trains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainCountArgs} args - Arguments to filter Trains to count.
     * @example
     * // Count the number of Trains
     * const count = await prisma.train.count({
     *   where: {
     *     // ... the filter for the Trains we want to count
     *   }
     * })
    **/
    count<T extends TrainCountArgs>(
      args?: Subset<T, TrainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Train.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrainAggregateArgs>(args: Subset<T, TrainAggregateArgs>): Prisma.PrismaPromise<GetTrainAggregateType<T>>

    /**
     * Group by Train.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainGroupByArgs['orderBy'] }
        : { orderBy?: TrainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Train model
   */
  readonly fields: TrainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Train.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    start<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    end<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    wagons<T extends Train$wagonsArgs<ExtArgs> = {}>(args?: Subset<T, Train$wagonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'findMany'> | Null>;

    actions<T extends Train$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Train$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Train model
   */ 
  interface TrainFieldRefs {
    readonly id: FieldRef<"Train", 'Int'>
    readonly train_number: FieldRef<"Train", 'Int'>
    readonly train_index: FieldRef<"Train", 'String'>
    readonly is_move: FieldRef<"Train", 'Boolean'>
    readonly start_id: FieldRef<"Train", 'Int'>
    readonly end_id: FieldRef<"Train", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Train findUnique
   */
  export type TrainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Train to fetch.
     */
    where: TrainWhereUniqueInput
  }


  /**
   * Train findUniqueOrThrow
   */
  export type TrainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Train to fetch.
     */
    where: TrainWhereUniqueInput
  }


  /**
   * Train findFirst
   */
  export type TrainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Train to fetch.
     */
    where?: TrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trains to fetch.
     */
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trains.
     */
    cursor?: TrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trains.
     */
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }


  /**
   * Train findFirstOrThrow
   */
  export type TrainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Train to fetch.
     */
    where?: TrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trains to fetch.
     */
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trains.
     */
    cursor?: TrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trains.
     */
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }


  /**
   * Train findMany
   */
  export type TrainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter, which Trains to fetch.
     */
    where?: TrainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trains to fetch.
     */
    orderBy?: TrainOrderByWithRelationInput | TrainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trains.
     */
    cursor?: TrainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trains.
     */
    skip?: number
    distinct?: TrainScalarFieldEnum | TrainScalarFieldEnum[]
  }


  /**
   * Train create
   */
  export type TrainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * The data needed to create a Train.
     */
    data: XOR<TrainCreateInput, TrainUncheckedCreateInput>
  }


  /**
   * Train createMany
   */
  export type TrainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trains.
     */
    data: TrainCreateManyInput | TrainCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Train update
   */
  export type TrainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * The data needed to update a Train.
     */
    data: XOR<TrainUpdateInput, TrainUncheckedUpdateInput>
    /**
     * Choose, which Train to update.
     */
    where: TrainWhereUniqueInput
  }


  /**
   * Train updateMany
   */
  export type TrainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trains.
     */
    data: XOR<TrainUpdateManyMutationInput, TrainUncheckedUpdateManyInput>
    /**
     * Filter which Trains to update
     */
    where?: TrainWhereInput
  }


  /**
   * Train upsert
   */
  export type TrainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * The filter to search for the Train to update in case it exists.
     */
    where: TrainWhereUniqueInput
    /**
     * In case the Train found by the `where` argument doesn't exist, create a new Train with this data.
     */
    create: XOR<TrainCreateInput, TrainUncheckedCreateInput>
    /**
     * In case the Train was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainUpdateInput, TrainUncheckedUpdateInput>
  }


  /**
   * Train delete
   */
  export type TrainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    /**
     * Filter which Train to delete.
     */
    where: TrainWhereUniqueInput
  }


  /**
   * Train deleteMany
   */
  export type TrainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trains to delete
     */
    where?: TrainWhereInput
  }


  /**
   * Train.wagons
   */
  export type Train$wagonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    where?: WagonWhereInput
    orderBy?: WagonOrderByWithRelationInput | WagonOrderByWithRelationInput[]
    cursor?: WagonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WagonScalarFieldEnum | WagonScalarFieldEnum[]
  }


  /**
   * Train.actions
   */
  export type Train$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    where?: ActionHistoryWhereInput
    orderBy?: ActionHistoryOrderByWithRelationInput | ActionHistoryOrderByWithRelationInput[]
    cursor?: ActionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionHistoryScalarFieldEnum | ActionHistoryScalarFieldEnum[]
  }


  /**
   * Train without action
   */
  export type TrainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
  }



  /**
   * Model Wagon
   */

  export type AggregateWagon = {
    _count: WagonCountAggregateOutputType | null
    _avg: WagonAvgAggregateOutputType | null
    _sum: WagonSumAggregateOutputType | null
    _min: WagonMinAggregateOutputType | null
    _max: WagonMaxAggregateOutputType | null
  }

  export type WagonAvgAggregateOutputType = {
    id: number | null
    wagon_number: number | null
    train_id: number | null
    destination_id: number | null
  }

  export type WagonSumAggregateOutputType = {
    id: number | null
    wagon_number: number | null
    train_id: number | null
    destination_id: number | null
  }

  export type WagonMinAggregateOutputType = {
    id: number | null
    wagon_number: number | null
    train_id: number | null
    destination_id: number | null
  }

  export type WagonMaxAggregateOutputType = {
    id: number | null
    wagon_number: number | null
    train_id: number | null
    destination_id: number | null
  }

  export type WagonCountAggregateOutputType = {
    id: number
    wagon_number: number
    train_id: number
    destination_id: number
    _all: number
  }


  export type WagonAvgAggregateInputType = {
    id?: true
    wagon_number?: true
    train_id?: true
    destination_id?: true
  }

  export type WagonSumAggregateInputType = {
    id?: true
    wagon_number?: true
    train_id?: true
    destination_id?: true
  }

  export type WagonMinAggregateInputType = {
    id?: true
    wagon_number?: true
    train_id?: true
    destination_id?: true
  }

  export type WagonMaxAggregateInputType = {
    id?: true
    wagon_number?: true
    train_id?: true
    destination_id?: true
  }

  export type WagonCountAggregateInputType = {
    id?: true
    wagon_number?: true
    train_id?: true
    destination_id?: true
    _all?: true
  }

  export type WagonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wagon to aggregate.
     */
    where?: WagonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wagons to fetch.
     */
    orderBy?: WagonOrderByWithRelationInput | WagonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WagonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wagons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wagons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wagons
    **/
    _count?: true | WagonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WagonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WagonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WagonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WagonMaxAggregateInputType
  }

  export type GetWagonAggregateType<T extends WagonAggregateArgs> = {
        [P in keyof T & keyof AggregateWagon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWagon[P]>
      : GetScalarType<T[P], AggregateWagon[P]>
  }




  export type WagonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WagonWhereInput
    orderBy?: WagonOrderByWithAggregationInput | WagonOrderByWithAggregationInput[]
    by: WagonScalarFieldEnum[] | WagonScalarFieldEnum
    having?: WagonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WagonCountAggregateInputType | true
    _avg?: WagonAvgAggregateInputType
    _sum?: WagonSumAggregateInputType
    _min?: WagonMinAggregateInputType
    _max?: WagonMaxAggregateInputType
  }

  export type WagonGroupByOutputType = {
    id: number
    wagon_number: number
    train_id: number | null
    destination_id: number
    _count: WagonCountAggregateOutputType | null
    _avg: WagonAvgAggregateOutputType | null
    _sum: WagonSumAggregateOutputType | null
    _min: WagonMinAggregateOutputType | null
    _max: WagonMaxAggregateOutputType | null
  }

  type GetWagonGroupByPayload<T extends WagonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WagonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WagonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WagonGroupByOutputType[P]>
            : GetScalarType<T[P], WagonGroupByOutputType[P]>
        }
      >
    >


  export type WagonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wagon_number?: boolean
    train_id?: boolean
    destination_id?: boolean
    train?: boolean | Wagon$trainArgs<ExtArgs>
    destination?: boolean | StationDefaultArgs<ExtArgs>
    actions?: boolean | Wagon$actionsArgs<ExtArgs>
    _count?: boolean | WagonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wagon"]>

  export type WagonSelectScalar = {
    id?: boolean
    wagon_number?: boolean
    train_id?: boolean
    destination_id?: boolean
  }

  export type WagonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    train?: boolean | Wagon$trainArgs<ExtArgs>
    destination?: boolean | StationDefaultArgs<ExtArgs>
    actions?: boolean | Wagon$actionsArgs<ExtArgs>
    _count?: boolean | WagonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WagonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wagon"
    objects: {
      train: Prisma.$TrainPayload<ExtArgs> | null
      destination: Prisma.$StationPayload<ExtArgs>
      actions: Prisma.$ActionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      wagon_number: number
      train_id: number | null
      destination_id: number
    }, ExtArgs["result"]["wagon"]>
    composites: {}
  }


  type WagonGetPayload<S extends boolean | null | undefined | WagonDefaultArgs> = $Result.GetResult<Prisma.$WagonPayload, S>

  type WagonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WagonFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WagonCountAggregateInputType | true
    }

  export interface WagonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wagon'], meta: { name: 'Wagon' } }
    /**
     * Find zero or one Wagon that matches the filter.
     * @param {WagonFindUniqueArgs} args - Arguments to find a Wagon
     * @example
     * // Get one Wagon
     * const wagon = await prisma.wagon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WagonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WagonFindUniqueArgs<ExtArgs>>
    ): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wagon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WagonFindUniqueOrThrowArgs} args - Arguments to find a Wagon
     * @example
     * // Get one Wagon
     * const wagon = await prisma.wagon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WagonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WagonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wagon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WagonFindFirstArgs} args - Arguments to find a Wagon
     * @example
     * // Get one Wagon
     * const wagon = await prisma.wagon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WagonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WagonFindFirstArgs<ExtArgs>>
    ): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wagon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WagonFindFirstOrThrowArgs} args - Arguments to find a Wagon
     * @example
     * // Get one Wagon
     * const wagon = await prisma.wagon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WagonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WagonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Wagons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WagonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wagons
     * const wagons = await prisma.wagon.findMany()
     * 
     * // Get first 10 Wagons
     * const wagons = await prisma.wagon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wagonWithIdOnly = await prisma.wagon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WagonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WagonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wagon.
     * @param {WagonCreateArgs} args - Arguments to create a Wagon.
     * @example
     * // Create one Wagon
     * const Wagon = await prisma.wagon.create({
     *   data: {
     *     // ... data to create a Wagon
     *   }
     * })
     * 
    **/
    create<T extends WagonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WagonCreateArgs<ExtArgs>>
    ): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Wagons.
     *     @param {WagonCreateManyArgs} args - Arguments to create many Wagons.
     *     @example
     *     // Create many Wagons
     *     const wagon = await prisma.wagon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WagonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WagonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wagon.
     * @param {WagonDeleteArgs} args - Arguments to delete one Wagon.
     * @example
     * // Delete one Wagon
     * const Wagon = await prisma.wagon.delete({
     *   where: {
     *     // ... filter to delete one Wagon
     *   }
     * })
     * 
    **/
    delete<T extends WagonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WagonDeleteArgs<ExtArgs>>
    ): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wagon.
     * @param {WagonUpdateArgs} args - Arguments to update one Wagon.
     * @example
     * // Update one Wagon
     * const wagon = await prisma.wagon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WagonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WagonUpdateArgs<ExtArgs>>
    ): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Wagons.
     * @param {WagonDeleteManyArgs} args - Arguments to filter Wagons to delete.
     * @example
     * // Delete a few Wagons
     * const { count } = await prisma.wagon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WagonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WagonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wagons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WagonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wagons
     * const wagon = await prisma.wagon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WagonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WagonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wagon.
     * @param {WagonUpsertArgs} args - Arguments to update or create a Wagon.
     * @example
     * // Update or create a Wagon
     * const wagon = await prisma.wagon.upsert({
     *   create: {
     *     // ... data to create a Wagon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wagon we want to update
     *   }
     * })
    **/
    upsert<T extends WagonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WagonUpsertArgs<ExtArgs>>
    ): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Wagons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WagonCountArgs} args - Arguments to filter Wagons to count.
     * @example
     * // Count the number of Wagons
     * const count = await prisma.wagon.count({
     *   where: {
     *     // ... the filter for the Wagons we want to count
     *   }
     * })
    **/
    count<T extends WagonCountArgs>(
      args?: Subset<T, WagonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WagonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wagon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WagonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WagonAggregateArgs>(args: Subset<T, WagonAggregateArgs>): Prisma.PrismaPromise<GetWagonAggregateType<T>>

    /**
     * Group by Wagon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WagonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WagonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WagonGroupByArgs['orderBy'] }
        : { orderBy?: WagonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WagonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWagonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wagon model
   */
  readonly fields: WagonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wagon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WagonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    train<T extends Wagon$trainArgs<ExtArgs> = {}>(args?: Subset<T, Wagon$trainArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    destination<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    actions<T extends Wagon$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Wagon$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Wagon model
   */ 
  interface WagonFieldRefs {
    readonly id: FieldRef<"Wagon", 'Int'>
    readonly wagon_number: FieldRef<"Wagon", 'Int'>
    readonly train_id: FieldRef<"Wagon", 'Int'>
    readonly destination_id: FieldRef<"Wagon", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Wagon findUnique
   */
  export type WagonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * Filter, which Wagon to fetch.
     */
    where: WagonWhereUniqueInput
  }


  /**
   * Wagon findUniqueOrThrow
   */
  export type WagonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * Filter, which Wagon to fetch.
     */
    where: WagonWhereUniqueInput
  }


  /**
   * Wagon findFirst
   */
  export type WagonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * Filter, which Wagon to fetch.
     */
    where?: WagonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wagons to fetch.
     */
    orderBy?: WagonOrderByWithRelationInput | WagonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wagons.
     */
    cursor?: WagonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wagons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wagons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wagons.
     */
    distinct?: WagonScalarFieldEnum | WagonScalarFieldEnum[]
  }


  /**
   * Wagon findFirstOrThrow
   */
  export type WagonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * Filter, which Wagon to fetch.
     */
    where?: WagonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wagons to fetch.
     */
    orderBy?: WagonOrderByWithRelationInput | WagonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wagons.
     */
    cursor?: WagonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wagons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wagons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wagons.
     */
    distinct?: WagonScalarFieldEnum | WagonScalarFieldEnum[]
  }


  /**
   * Wagon findMany
   */
  export type WagonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * Filter, which Wagons to fetch.
     */
    where?: WagonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wagons to fetch.
     */
    orderBy?: WagonOrderByWithRelationInput | WagonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wagons.
     */
    cursor?: WagonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wagons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wagons.
     */
    skip?: number
    distinct?: WagonScalarFieldEnum | WagonScalarFieldEnum[]
  }


  /**
   * Wagon create
   */
  export type WagonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * The data needed to create a Wagon.
     */
    data: XOR<WagonCreateInput, WagonUncheckedCreateInput>
  }


  /**
   * Wagon createMany
   */
  export type WagonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wagons.
     */
    data: WagonCreateManyInput | WagonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Wagon update
   */
  export type WagonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * The data needed to update a Wagon.
     */
    data: XOR<WagonUpdateInput, WagonUncheckedUpdateInput>
    /**
     * Choose, which Wagon to update.
     */
    where: WagonWhereUniqueInput
  }


  /**
   * Wagon updateMany
   */
  export type WagonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wagons.
     */
    data: XOR<WagonUpdateManyMutationInput, WagonUncheckedUpdateManyInput>
    /**
     * Filter which Wagons to update
     */
    where?: WagonWhereInput
  }


  /**
   * Wagon upsert
   */
  export type WagonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * The filter to search for the Wagon to update in case it exists.
     */
    where: WagonWhereUniqueInput
    /**
     * In case the Wagon found by the `where` argument doesn't exist, create a new Wagon with this data.
     */
    create: XOR<WagonCreateInput, WagonUncheckedCreateInput>
    /**
     * In case the Wagon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WagonUpdateInput, WagonUncheckedUpdateInput>
  }


  /**
   * Wagon delete
   */
  export type WagonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
    /**
     * Filter which Wagon to delete.
     */
    where: WagonWhereUniqueInput
  }


  /**
   * Wagon deleteMany
   */
  export type WagonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wagons to delete
     */
    where?: WagonWhereInput
  }


  /**
   * Wagon.train
   */
  export type Wagon$trainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Train
     */
    select?: TrainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrainInclude<ExtArgs> | null
    where?: TrainWhereInput
  }


  /**
   * Wagon.actions
   */
  export type Wagon$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    where?: ActionHistoryWhereInput
    orderBy?: ActionHistoryOrderByWithRelationInput | ActionHistoryOrderByWithRelationInput[]
    cursor?: ActionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionHistoryScalarFieldEnum | ActionHistoryScalarFieldEnum[]
  }


  /**
   * Wagon without action
   */
  export type WagonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wagon
     */
    select?: WagonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WagonInclude<ExtArgs> | null
  }



  /**
   * Model ActionHistory
   */

  export type AggregateActionHistory = {
    _count: ActionHistoryCountAggregateOutputType | null
    _avg: ActionHistoryAvgAggregateOutputType | null
    _sum: ActionHistorySumAggregateOutputType | null
    _min: ActionHistoryMinAggregateOutputType | null
    _max: ActionHistoryMaxAggregateOutputType | null
  }

  export type ActionHistoryAvgAggregateOutputType = {
    id: number | null
    train_id: number | null
    wagon_id: number | null
    destination_id: number | null
    dislocation_id: number | null
  }

  export type ActionHistorySumAggregateOutputType = {
    id: number | null
    train_id: number | null
    wagon_id: number | null
    destination_id: number | null
    dislocation_id: number | null
  }

  export type ActionHistoryMinAggregateOutputType = {
    id: number | null
    action_date: Date | null
    train_id: number | null
    wagon_id: number | null
    destination_id: number | null
    dislocation_id: number | null
  }

  export type ActionHistoryMaxAggregateOutputType = {
    id: number | null
    action_date: Date | null
    train_id: number | null
    wagon_id: number | null
    destination_id: number | null
    dislocation_id: number | null
  }

  export type ActionHistoryCountAggregateOutputType = {
    id: number
    action_date: number
    train_id: number
    wagon_id: number
    destination_id: number
    dislocation_id: number
    _all: number
  }


  export type ActionHistoryAvgAggregateInputType = {
    id?: true
    train_id?: true
    wagon_id?: true
    destination_id?: true
    dislocation_id?: true
  }

  export type ActionHistorySumAggregateInputType = {
    id?: true
    train_id?: true
    wagon_id?: true
    destination_id?: true
    dislocation_id?: true
  }

  export type ActionHistoryMinAggregateInputType = {
    id?: true
    action_date?: true
    train_id?: true
    wagon_id?: true
    destination_id?: true
    dislocation_id?: true
  }

  export type ActionHistoryMaxAggregateInputType = {
    id?: true
    action_date?: true
    train_id?: true
    wagon_id?: true
    destination_id?: true
    dislocation_id?: true
  }

  export type ActionHistoryCountAggregateInputType = {
    id?: true
    action_date?: true
    train_id?: true
    wagon_id?: true
    destination_id?: true
    dislocation_id?: true
    _all?: true
  }

  export type ActionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionHistory to aggregate.
     */
    where?: ActionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionHistories to fetch.
     */
    orderBy?: ActionHistoryOrderByWithRelationInput | ActionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActionHistories
    **/
    _count?: true | ActionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionHistoryMaxAggregateInputType
  }

  export type GetActionHistoryAggregateType<T extends ActionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateActionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionHistory[P]>
      : GetScalarType<T[P], AggregateActionHistory[P]>
  }




  export type ActionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionHistoryWhereInput
    orderBy?: ActionHistoryOrderByWithAggregationInput | ActionHistoryOrderByWithAggregationInput[]
    by: ActionHistoryScalarFieldEnum[] | ActionHistoryScalarFieldEnum
    having?: ActionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionHistoryCountAggregateInputType | true
    _avg?: ActionHistoryAvgAggregateInputType
    _sum?: ActionHistorySumAggregateInputType
    _min?: ActionHistoryMinAggregateInputType
    _max?: ActionHistoryMaxAggregateInputType
  }

  export type ActionHistoryGroupByOutputType = {
    id: number
    action_date: Date
    train_id: number
    wagon_id: number
    destination_id: number
    dislocation_id: number
    _count: ActionHistoryCountAggregateOutputType | null
    _avg: ActionHistoryAvgAggregateOutputType | null
    _sum: ActionHistorySumAggregateOutputType | null
    _min: ActionHistoryMinAggregateOutputType | null
    _max: ActionHistoryMaxAggregateOutputType | null
  }

  type GetActionHistoryGroupByPayload<T extends ActionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ActionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ActionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action_date?: boolean
    train_id?: boolean
    wagon_id?: boolean
    destination_id?: boolean
    dislocation_id?: boolean
    train?: boolean | TrainDefaultArgs<ExtArgs>
    wagon?: boolean | WagonDefaultArgs<ExtArgs>
    destination?: boolean | StationDefaultArgs<ExtArgs>
    dislocation?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionHistory"]>

  export type ActionHistorySelectScalar = {
    id?: boolean
    action_date?: boolean
    train_id?: boolean
    wagon_id?: boolean
    destination_id?: boolean
    dislocation_id?: boolean
  }

  export type ActionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    train?: boolean | TrainDefaultArgs<ExtArgs>
    wagon?: boolean | WagonDefaultArgs<ExtArgs>
    destination?: boolean | StationDefaultArgs<ExtArgs>
    dislocation?: boolean | StationDefaultArgs<ExtArgs>
  }


  export type $ActionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActionHistory"
    objects: {
      train: Prisma.$TrainPayload<ExtArgs>
      wagon: Prisma.$WagonPayload<ExtArgs>
      destination: Prisma.$StationPayload<ExtArgs>
      dislocation: Prisma.$StationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action_date: Date
      train_id: number
      wagon_id: number
      destination_id: number
      dislocation_id: number
    }, ExtArgs["result"]["actionHistory"]>
    composites: {}
  }


  type ActionHistoryGetPayload<S extends boolean | null | undefined | ActionHistoryDefaultArgs> = $Result.GetResult<Prisma.$ActionHistoryPayload, S>

  type ActionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActionHistoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ActionHistoryCountAggregateInputType | true
    }

  export interface ActionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActionHistory'], meta: { name: 'ActionHistory' } }
    /**
     * Find zero or one ActionHistory that matches the filter.
     * @param {ActionHistoryFindUniqueArgs} args - Arguments to find a ActionHistory
     * @example
     * // Get one ActionHistory
     * const actionHistory = await prisma.actionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActionHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActionHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ActionHistoryClient<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ActionHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActionHistoryFindUniqueOrThrowArgs} args - Arguments to find a ActionHistory
     * @example
     * // Get one ActionHistory
     * const actionHistory = await prisma.actionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActionHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActionHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActionHistoryClient<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ActionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryFindFirstArgs} args - Arguments to find a ActionHistory
     * @example
     * // Get one ActionHistory
     * const actionHistory = await prisma.actionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActionHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActionHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__ActionHistoryClient<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ActionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryFindFirstOrThrowArgs} args - Arguments to find a ActionHistory
     * @example
     * // Get one ActionHistory
     * const actionHistory = await prisma.actionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActionHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActionHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActionHistoryClient<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ActionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActionHistories
     * const actionHistories = await prisma.actionHistory.findMany()
     * 
     * // Get first 10 ActionHistories
     * const actionHistories = await prisma.actionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionHistoryWithIdOnly = await prisma.actionHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActionHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActionHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ActionHistory.
     * @param {ActionHistoryCreateArgs} args - Arguments to create a ActionHistory.
     * @example
     * // Create one ActionHistory
     * const ActionHistory = await prisma.actionHistory.create({
     *   data: {
     *     // ... data to create a ActionHistory
     *   }
     * })
     * 
    **/
    create<T extends ActionHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActionHistoryCreateArgs<ExtArgs>>
    ): Prisma__ActionHistoryClient<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ActionHistories.
     *     @param {ActionHistoryCreateManyArgs} args - Arguments to create many ActionHistories.
     *     @example
     *     // Create many ActionHistories
     *     const actionHistory = await prisma.actionHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActionHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActionHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActionHistory.
     * @param {ActionHistoryDeleteArgs} args - Arguments to delete one ActionHistory.
     * @example
     * // Delete one ActionHistory
     * const ActionHistory = await prisma.actionHistory.delete({
     *   where: {
     *     // ... filter to delete one ActionHistory
     *   }
     * })
     * 
    **/
    delete<T extends ActionHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActionHistoryDeleteArgs<ExtArgs>>
    ): Prisma__ActionHistoryClient<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ActionHistory.
     * @param {ActionHistoryUpdateArgs} args - Arguments to update one ActionHistory.
     * @example
     * // Update one ActionHistory
     * const actionHistory = await prisma.actionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActionHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActionHistoryUpdateArgs<ExtArgs>>
    ): Prisma__ActionHistoryClient<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ActionHistories.
     * @param {ActionHistoryDeleteManyArgs} args - Arguments to filter ActionHistories to delete.
     * @example
     * // Delete a few ActionHistories
     * const { count } = await prisma.actionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActionHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActionHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActionHistories
     * const actionHistory = await prisma.actionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActionHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActionHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActionHistory.
     * @param {ActionHistoryUpsertArgs} args - Arguments to update or create a ActionHistory.
     * @example
     * // Update or create a ActionHistory
     * const actionHistory = await prisma.actionHistory.upsert({
     *   create: {
     *     // ... data to create a ActionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActionHistory we want to update
     *   }
     * })
    **/
    upsert<T extends ActionHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActionHistoryUpsertArgs<ExtArgs>>
    ): Prisma__ActionHistoryClient<$Result.GetResult<Prisma.$ActionHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ActionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryCountArgs} args - Arguments to filter ActionHistories to count.
     * @example
     * // Count the number of ActionHistories
     * const count = await prisma.actionHistory.count({
     *   where: {
     *     // ... the filter for the ActionHistories we want to count
     *   }
     * })
    **/
    count<T extends ActionHistoryCountArgs>(
      args?: Subset<T, ActionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionHistoryAggregateArgs>(args: Subset<T, ActionHistoryAggregateArgs>): Prisma.PrismaPromise<GetActionHistoryAggregateType<T>>

    /**
     * Group by ActionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ActionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActionHistory model
   */
  readonly fields: ActionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    train<T extends TrainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainDefaultArgs<ExtArgs>>): Prisma__TrainClient<$Result.GetResult<Prisma.$TrainPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    wagon<T extends WagonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WagonDefaultArgs<ExtArgs>>): Prisma__WagonClient<$Result.GetResult<Prisma.$WagonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    destination<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    dislocation<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ActionHistory model
   */ 
  interface ActionHistoryFieldRefs {
    readonly id: FieldRef<"ActionHistory", 'Int'>
    readonly action_date: FieldRef<"ActionHistory", 'DateTime'>
    readonly train_id: FieldRef<"ActionHistory", 'Int'>
    readonly wagon_id: FieldRef<"ActionHistory", 'Int'>
    readonly destination_id: FieldRef<"ActionHistory", 'Int'>
    readonly dislocation_id: FieldRef<"ActionHistory", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ActionHistory findUnique
   */
  export type ActionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ActionHistory to fetch.
     */
    where: ActionHistoryWhereUniqueInput
  }


  /**
   * ActionHistory findUniqueOrThrow
   */
  export type ActionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ActionHistory to fetch.
     */
    where: ActionHistoryWhereUniqueInput
  }


  /**
   * ActionHistory findFirst
   */
  export type ActionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ActionHistory to fetch.
     */
    where?: ActionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionHistories to fetch.
     */
    orderBy?: ActionHistoryOrderByWithRelationInput | ActionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionHistories.
     */
    cursor?: ActionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionHistories.
     */
    distinct?: ActionHistoryScalarFieldEnum | ActionHistoryScalarFieldEnum[]
  }


  /**
   * ActionHistory findFirstOrThrow
   */
  export type ActionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ActionHistory to fetch.
     */
    where?: ActionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionHistories to fetch.
     */
    orderBy?: ActionHistoryOrderByWithRelationInput | ActionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActionHistories.
     */
    cursor?: ActionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActionHistories.
     */
    distinct?: ActionHistoryScalarFieldEnum | ActionHistoryScalarFieldEnum[]
  }


  /**
   * ActionHistory findMany
   */
  export type ActionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ActionHistories to fetch.
     */
    where?: ActionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActionHistories to fetch.
     */
    orderBy?: ActionHistoryOrderByWithRelationInput | ActionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActionHistories.
     */
    cursor?: ActionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActionHistories.
     */
    skip?: number
    distinct?: ActionHistoryScalarFieldEnum | ActionHistoryScalarFieldEnum[]
  }


  /**
   * ActionHistory create
   */
  export type ActionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ActionHistory.
     */
    data: XOR<ActionHistoryCreateInput, ActionHistoryUncheckedCreateInput>
  }


  /**
   * ActionHistory createMany
   */
  export type ActionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActionHistories.
     */
    data: ActionHistoryCreateManyInput | ActionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ActionHistory update
   */
  export type ActionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ActionHistory.
     */
    data: XOR<ActionHistoryUpdateInput, ActionHistoryUncheckedUpdateInput>
    /**
     * Choose, which ActionHistory to update.
     */
    where: ActionHistoryWhereUniqueInput
  }


  /**
   * ActionHistory updateMany
   */
  export type ActionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActionHistories.
     */
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ActionHistories to update
     */
    where?: ActionHistoryWhereInput
  }


  /**
   * ActionHistory upsert
   */
  export type ActionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ActionHistory to update in case it exists.
     */
    where: ActionHistoryWhereUniqueInput
    /**
     * In case the ActionHistory found by the `where` argument doesn't exist, create a new ActionHistory with this data.
     */
    create: XOR<ActionHistoryCreateInput, ActionHistoryUncheckedCreateInput>
    /**
     * In case the ActionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionHistoryUpdateInput, ActionHistoryUncheckedUpdateInput>
  }


  /**
   * ActionHistory delete
   */
  export type ActionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
    /**
     * Filter which ActionHistory to delete.
     */
    where: ActionHistoryWhereUniqueInput
  }


  /**
   * ActionHistory deleteMany
   */
  export type ActionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActionHistories to delete
     */
    where?: ActionHistoryWhereInput
  }


  /**
   * ActionHistory without action
   */
  export type ActionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionHistory
     */
    select?: ActionHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActionHistoryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StageScalarFieldEnum: {
    id: 'id',
    length: 'length',
    start_id: 'start_id',
    end_id: 'end_id'
  };

  export type StageScalarFieldEnum = (typeof StageScalarFieldEnum)[keyof typeof StageScalarFieldEnum]


  export const StationScalarFieldEnum: {
    id: 'id',
    station_id: 'station_id',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const TrainScalarFieldEnum: {
    id: 'id',
    train_number: 'train_number',
    train_index: 'train_index',
    is_move: 'is_move',
    start_id: 'start_id',
    end_id: 'end_id'
  };

  export type TrainScalarFieldEnum = (typeof TrainScalarFieldEnum)[keyof typeof TrainScalarFieldEnum]


  export const WagonScalarFieldEnum: {
    id: 'id',
    wagon_number: 'wagon_number',
    train_id: 'train_id',
    destination_id: 'destination_id'
  };

  export type WagonScalarFieldEnum = (typeof WagonScalarFieldEnum)[keyof typeof WagonScalarFieldEnum]


  export const ActionHistoryScalarFieldEnum: {
    id: 'id',
    action_date: 'action_date',
    train_id: 'train_id',
    wagon_id: 'wagon_id',
    destination_id: 'destination_id',
    dislocation_id: 'dislocation_id'
  };

  export type ActionHistoryScalarFieldEnum = (typeof ActionHistoryScalarFieldEnum)[keyof typeof ActionHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type StageWhereInput = {
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    id?: IntFilter<"Stage"> | number
    length?: FloatFilter<"Stage"> | number
    start_id?: IntFilter<"Stage"> | number
    end_id?: IntFilter<"Stage"> | number
    start?: XOR<StationRelationFilter, StationWhereInput>
    end?: XOR<StationRelationFilter, StationWhereInput>
  }

  export type StageOrderByWithRelationInput = {
    id?: SortOrder
    length?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
    start?: StationOrderByWithRelationInput
    end?: StationOrderByWithRelationInput
  }

  export type StageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    start_id_end_id?: StageStart_idEnd_idCompoundUniqueInput
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    length?: FloatFilter<"Stage"> | number
    start_id?: IntFilter<"Stage"> | number
    end_id?: IntFilter<"Stage"> | number
    start?: XOR<StationRelationFilter, StationWhereInput>
    end?: XOR<StationRelationFilter, StationWhereInput>
  }, "id" | "start_id_end_id">

  export type StageOrderByWithAggregationInput = {
    id?: SortOrder
    length?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
    _count?: StageCountOrderByAggregateInput
    _avg?: StageAvgOrderByAggregateInput
    _max?: StageMaxOrderByAggregateInput
    _min?: StageMinOrderByAggregateInput
    _sum?: StageSumOrderByAggregateInput
  }

  export type StageScalarWhereWithAggregatesInput = {
    AND?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    OR?: StageScalarWhereWithAggregatesInput[]
    NOT?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stage"> | number
    length?: FloatWithAggregatesFilter<"Stage"> | number
    start_id?: IntWithAggregatesFilter<"Stage"> | number
    end_id?: IntWithAggregatesFilter<"Stage"> | number
  }

  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: IntFilter<"Station"> | number
    station_id?: IntFilter<"Station"> | number
    latitude?: FloatFilter<"Station"> | number
    longitude?: FloatFilter<"Station"> | number
    start_stages?: StageListRelationFilter
    end_stages?: StageListRelationFilter
    start_trains?: TrainListRelationFilter
    end_trains?: TrainListRelationFilter
    wagons_destination?: WagonListRelationFilter
    actions_disl?: ActionHistoryListRelationFilter
    actions_dest?: ActionHistoryListRelationFilter
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    station_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    start_stages?: StageOrderByRelationAggregateInput
    end_stages?: StageOrderByRelationAggregateInput
    start_trains?: TrainOrderByRelationAggregateInput
    end_trains?: TrainOrderByRelationAggregateInput
    wagons_destination?: WagonOrderByRelationAggregateInput
    actions_disl?: ActionHistoryOrderByRelationAggregateInput
    actions_dest?: ActionHistoryOrderByRelationAggregateInput
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    station_id?: number
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    latitude?: FloatFilter<"Station"> | number
    longitude?: FloatFilter<"Station"> | number
    start_stages?: StageListRelationFilter
    end_stages?: StageListRelationFilter
    start_trains?: TrainListRelationFilter
    end_trains?: TrainListRelationFilter
    wagons_destination?: WagonListRelationFilter
    actions_disl?: ActionHistoryListRelationFilter
    actions_dest?: ActionHistoryListRelationFilter
  }, "id" | "station_id">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    station_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _avg?: StationAvgOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
    _sum?: StationSumOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Station"> | number
    station_id?: IntWithAggregatesFilter<"Station"> | number
    latitude?: FloatWithAggregatesFilter<"Station"> | number
    longitude?: FloatWithAggregatesFilter<"Station"> | number
  }

  export type TrainWhereInput = {
    AND?: TrainWhereInput | TrainWhereInput[]
    OR?: TrainWhereInput[]
    NOT?: TrainWhereInput | TrainWhereInput[]
    id?: IntFilter<"Train"> | number
    train_number?: IntFilter<"Train"> | number
    train_index?: StringNullableFilter<"Train"> | string | null
    is_move?: BoolFilter<"Train"> | boolean
    start_id?: IntFilter<"Train"> | number
    end_id?: IntFilter<"Train"> | number
    start?: XOR<StationRelationFilter, StationWhereInput>
    end?: XOR<StationRelationFilter, StationWhereInput>
    wagons?: WagonListRelationFilter
    actions?: ActionHistoryListRelationFilter
  }

  export type TrainOrderByWithRelationInput = {
    id?: SortOrder
    train_number?: SortOrder
    train_index?: SortOrderInput | SortOrder
    is_move?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
    start?: StationOrderByWithRelationInput
    end?: StationOrderByWithRelationInput
    wagons?: WagonOrderByRelationAggregateInput
    actions?: ActionHistoryOrderByRelationAggregateInput
  }

  export type TrainWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    train_number?: number
    AND?: TrainWhereInput | TrainWhereInput[]
    OR?: TrainWhereInput[]
    NOT?: TrainWhereInput | TrainWhereInput[]
    train_index?: StringNullableFilter<"Train"> | string | null
    is_move?: BoolFilter<"Train"> | boolean
    start_id?: IntFilter<"Train"> | number
    end_id?: IntFilter<"Train"> | number
    start?: XOR<StationRelationFilter, StationWhereInput>
    end?: XOR<StationRelationFilter, StationWhereInput>
    wagons?: WagonListRelationFilter
    actions?: ActionHistoryListRelationFilter
  }, "id" | "train_number">

  export type TrainOrderByWithAggregationInput = {
    id?: SortOrder
    train_number?: SortOrder
    train_index?: SortOrderInput | SortOrder
    is_move?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
    _count?: TrainCountOrderByAggregateInput
    _avg?: TrainAvgOrderByAggregateInput
    _max?: TrainMaxOrderByAggregateInput
    _min?: TrainMinOrderByAggregateInput
    _sum?: TrainSumOrderByAggregateInput
  }

  export type TrainScalarWhereWithAggregatesInput = {
    AND?: TrainScalarWhereWithAggregatesInput | TrainScalarWhereWithAggregatesInput[]
    OR?: TrainScalarWhereWithAggregatesInput[]
    NOT?: TrainScalarWhereWithAggregatesInput | TrainScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Train"> | number
    train_number?: IntWithAggregatesFilter<"Train"> | number
    train_index?: StringNullableWithAggregatesFilter<"Train"> | string | null
    is_move?: BoolWithAggregatesFilter<"Train"> | boolean
    start_id?: IntWithAggregatesFilter<"Train"> | number
    end_id?: IntWithAggregatesFilter<"Train"> | number
  }

  export type WagonWhereInput = {
    AND?: WagonWhereInput | WagonWhereInput[]
    OR?: WagonWhereInput[]
    NOT?: WagonWhereInput | WagonWhereInput[]
    id?: IntFilter<"Wagon"> | number
    wagon_number?: IntFilter<"Wagon"> | number
    train_id?: IntNullableFilter<"Wagon"> | number | null
    destination_id?: IntFilter<"Wagon"> | number
    train?: XOR<TrainNullableRelationFilter, TrainWhereInput> | null
    destination?: XOR<StationRelationFilter, StationWhereInput>
    actions?: ActionHistoryListRelationFilter
  }

  export type WagonOrderByWithRelationInput = {
    id?: SortOrder
    wagon_number?: SortOrder
    train_id?: SortOrderInput | SortOrder
    destination_id?: SortOrder
    train?: TrainOrderByWithRelationInput
    destination?: StationOrderByWithRelationInput
    actions?: ActionHistoryOrderByRelationAggregateInput
  }

  export type WagonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    wagon_number?: number
    AND?: WagonWhereInput | WagonWhereInput[]
    OR?: WagonWhereInput[]
    NOT?: WagonWhereInput | WagonWhereInput[]
    train_id?: IntNullableFilter<"Wagon"> | number | null
    destination_id?: IntFilter<"Wagon"> | number
    train?: XOR<TrainNullableRelationFilter, TrainWhereInput> | null
    destination?: XOR<StationRelationFilter, StationWhereInput>
    actions?: ActionHistoryListRelationFilter
  }, "id" | "wagon_number">

  export type WagonOrderByWithAggregationInput = {
    id?: SortOrder
    wagon_number?: SortOrder
    train_id?: SortOrderInput | SortOrder
    destination_id?: SortOrder
    _count?: WagonCountOrderByAggregateInput
    _avg?: WagonAvgOrderByAggregateInput
    _max?: WagonMaxOrderByAggregateInput
    _min?: WagonMinOrderByAggregateInput
    _sum?: WagonSumOrderByAggregateInput
  }

  export type WagonScalarWhereWithAggregatesInput = {
    AND?: WagonScalarWhereWithAggregatesInput | WagonScalarWhereWithAggregatesInput[]
    OR?: WagonScalarWhereWithAggregatesInput[]
    NOT?: WagonScalarWhereWithAggregatesInput | WagonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wagon"> | number
    wagon_number?: IntWithAggregatesFilter<"Wagon"> | number
    train_id?: IntNullableWithAggregatesFilter<"Wagon"> | number | null
    destination_id?: IntWithAggregatesFilter<"Wagon"> | number
  }

  export type ActionHistoryWhereInput = {
    AND?: ActionHistoryWhereInput | ActionHistoryWhereInput[]
    OR?: ActionHistoryWhereInput[]
    NOT?: ActionHistoryWhereInput | ActionHistoryWhereInput[]
    id?: IntFilter<"ActionHistory"> | number
    action_date?: DateTimeFilter<"ActionHistory"> | Date | string
    train_id?: IntFilter<"ActionHistory"> | number
    wagon_id?: IntFilter<"ActionHistory"> | number
    destination_id?: IntFilter<"ActionHistory"> | number
    dislocation_id?: IntFilter<"ActionHistory"> | number
    train?: XOR<TrainRelationFilter, TrainWhereInput>
    wagon?: XOR<WagonRelationFilter, WagonWhereInput>
    destination?: XOR<StationRelationFilter, StationWhereInput>
    dislocation?: XOR<StationRelationFilter, StationWhereInput>
  }

  export type ActionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    action_date?: SortOrder
    train_id?: SortOrder
    wagon_id?: SortOrder
    destination_id?: SortOrder
    dislocation_id?: SortOrder
    train?: TrainOrderByWithRelationInput
    wagon?: WagonOrderByWithRelationInput
    destination?: StationOrderByWithRelationInput
    dislocation?: StationOrderByWithRelationInput
  }

  export type ActionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActionHistoryWhereInput | ActionHistoryWhereInput[]
    OR?: ActionHistoryWhereInput[]
    NOT?: ActionHistoryWhereInput | ActionHistoryWhereInput[]
    action_date?: DateTimeFilter<"ActionHistory"> | Date | string
    train_id?: IntFilter<"ActionHistory"> | number
    wagon_id?: IntFilter<"ActionHistory"> | number
    destination_id?: IntFilter<"ActionHistory"> | number
    dislocation_id?: IntFilter<"ActionHistory"> | number
    train?: XOR<TrainRelationFilter, TrainWhereInput>
    wagon?: XOR<WagonRelationFilter, WagonWhereInput>
    destination?: XOR<StationRelationFilter, StationWhereInput>
    dislocation?: XOR<StationRelationFilter, StationWhereInput>
  }, "id">

  export type ActionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    action_date?: SortOrder
    train_id?: SortOrder
    wagon_id?: SortOrder
    destination_id?: SortOrder
    dislocation_id?: SortOrder
    _count?: ActionHistoryCountOrderByAggregateInput
    _avg?: ActionHistoryAvgOrderByAggregateInput
    _max?: ActionHistoryMaxOrderByAggregateInput
    _min?: ActionHistoryMinOrderByAggregateInput
    _sum?: ActionHistorySumOrderByAggregateInput
  }

  export type ActionHistoryScalarWhereWithAggregatesInput = {
    AND?: ActionHistoryScalarWhereWithAggregatesInput | ActionHistoryScalarWhereWithAggregatesInput[]
    OR?: ActionHistoryScalarWhereWithAggregatesInput[]
    NOT?: ActionHistoryScalarWhereWithAggregatesInput | ActionHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActionHistory"> | number
    action_date?: DateTimeWithAggregatesFilter<"ActionHistory"> | Date | string
    train_id?: IntWithAggregatesFilter<"ActionHistory"> | number
    wagon_id?: IntWithAggregatesFilter<"ActionHistory"> | number
    destination_id?: IntWithAggregatesFilter<"ActionHistory"> | number
    dislocation_id?: IntWithAggregatesFilter<"ActionHistory"> | number
  }

  export type StageCreateInput = {
    length?: number
    start: StationCreateNestedOneWithoutStart_stagesInput
    end: StationCreateNestedOneWithoutEnd_stagesInput
  }

  export type StageUncheckedCreateInput = {
    id?: number
    length?: number
    start_id: number
    end_id: number
  }

  export type StageUpdateInput = {
    length?: FloatFieldUpdateOperationsInput | number
    start?: StationUpdateOneRequiredWithoutStart_stagesNestedInput
    end?: StationUpdateOneRequiredWithoutEnd_stagesNestedInput
  }

  export type StageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    start_id?: IntFieldUpdateOperationsInput | number
    end_id?: IntFieldUpdateOperationsInput | number
  }

  export type StageCreateManyInput = {
    id?: number
    length?: number
    start_id: number
    end_id: number
  }

  export type StageUpdateManyMutationInput = {
    length?: FloatFieldUpdateOperationsInput | number
  }

  export type StageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    start_id?: IntFieldUpdateOperationsInput | number
    end_id?: IntFieldUpdateOperationsInput | number
  }

  export type StationCreateInput = {
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageCreateNestedManyWithoutStartInput
    end_stages?: StageCreateNestedManyWithoutEndInput
    start_trains?: TrainCreateNestedManyWithoutStartInput
    end_trains?: TrainCreateNestedManyWithoutEndInput
    wagons_destination?: WagonCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryCreateNestedManyWithoutDestinationInput
  }

  export type StationUncheckedCreateInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageUncheckedCreateNestedManyWithoutStartInput
    end_stages?: StageUncheckedCreateNestedManyWithoutEndInput
    start_trains?: TrainUncheckedCreateNestedManyWithoutStartInput
    end_trains?: TrainUncheckedCreateNestedManyWithoutEndInput
    wagons_destination?: WagonUncheckedCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryUncheckedCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type StationUpdateInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUpdateManyWithoutStartNestedInput
    end_stages?: StageUpdateManyWithoutEndNestedInput
    start_trains?: TrainUpdateManyWithoutStartNestedInput
    end_trains?: TrainUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUpdateManyWithoutDestinationNestedInput
  }

  export type StationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUncheckedUpdateManyWithoutStartNestedInput
    end_stages?: StageUncheckedUpdateManyWithoutEndNestedInput
    start_trains?: TrainUncheckedUpdateManyWithoutStartNestedInput
    end_trains?: TrainUncheckedUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUncheckedUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUncheckedUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type StationCreateManyInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
  }

  export type StationUpdateManyMutationInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type StationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type TrainCreateInput = {
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start: StationCreateNestedOneWithoutStart_trainsInput
    end: StationCreateNestedOneWithoutEnd_trainsInput
    wagons?: WagonCreateNestedManyWithoutTrainInput
    actions?: ActionHistoryCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateInput = {
    id?: number
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start_id: number
    end_id: number
    wagons?: WagonUncheckedCreateNestedManyWithoutTrainInput
    actions?: ActionHistoryUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainUpdateInput = {
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start?: StationUpdateOneRequiredWithoutStart_trainsNestedInput
    end?: StationUpdateOneRequiredWithoutEnd_trainsNestedInput
    wagons?: WagonUpdateManyWithoutTrainNestedInput
    actions?: ActionHistoryUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start_id?: IntFieldUpdateOperationsInput | number
    end_id?: IntFieldUpdateOperationsInput | number
    wagons?: WagonUncheckedUpdateManyWithoutTrainNestedInput
    actions?: ActionHistoryUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type TrainCreateManyInput = {
    id?: number
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start_id: number
    end_id: number
  }

  export type TrainUpdateManyMutationInput = {
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrainUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start_id?: IntFieldUpdateOperationsInput | number
    end_id?: IntFieldUpdateOperationsInput | number
  }

  export type WagonCreateInput = {
    wagon_number: number
    train?: TrainCreateNestedOneWithoutWagonsInput
    destination: StationCreateNestedOneWithoutWagons_destinationInput
    actions?: ActionHistoryCreateNestedManyWithoutWagonInput
  }

  export type WagonUncheckedCreateInput = {
    id?: number
    wagon_number: number
    train_id?: number | null
    destination_id: number
    actions?: ActionHistoryUncheckedCreateNestedManyWithoutWagonInput
  }

  export type WagonUpdateInput = {
    wagon_number?: IntFieldUpdateOperationsInput | number
    train?: TrainUpdateOneWithoutWagonsNestedInput
    destination?: StationUpdateOneRequiredWithoutWagons_destinationNestedInput
    actions?: ActionHistoryUpdateManyWithoutWagonNestedInput
  }

  export type WagonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    wagon_number?: IntFieldUpdateOperationsInput | number
    train_id?: NullableIntFieldUpdateOperationsInput | number | null
    destination_id?: IntFieldUpdateOperationsInput | number
    actions?: ActionHistoryUncheckedUpdateManyWithoutWagonNestedInput
  }

  export type WagonCreateManyInput = {
    id?: number
    wagon_number: number
    train_id?: number | null
    destination_id: number
  }

  export type WagonUpdateManyMutationInput = {
    wagon_number?: IntFieldUpdateOperationsInput | number
  }

  export type WagonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    wagon_number?: IntFieldUpdateOperationsInput | number
    train_id?: NullableIntFieldUpdateOperationsInput | number | null
    destination_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryCreateInput = {
    action_date: Date | string
    train: TrainCreateNestedOneWithoutActionsInput
    wagon: WagonCreateNestedOneWithoutActionsInput
    destination: StationCreateNestedOneWithoutActions_destInput
    dislocation: StationCreateNestedOneWithoutActions_dislInput
  }

  export type ActionHistoryUncheckedCreateInput = {
    id?: number
    action_date: Date | string
    train_id: number
    wagon_id: number
    destination_id: number
    dislocation_id: number
  }

  export type ActionHistoryUpdateInput = {
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutActionsNestedInput
    wagon?: WagonUpdateOneRequiredWithoutActionsNestedInput
    destination?: StationUpdateOneRequiredWithoutActions_destNestedInput
    dislocation?: StationUpdateOneRequiredWithoutActions_dislNestedInput
  }

  export type ActionHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train_id?: IntFieldUpdateOperationsInput | number
    wagon_id?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
    dislocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryCreateManyInput = {
    id?: number
    action_date: Date | string
    train_id: number
    wagon_id: number
    destination_id: number
    dislocation_id: number
  }

  export type ActionHistoryUpdateManyMutationInput = {
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train_id?: IntFieldUpdateOperationsInput | number
    wagon_id?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
    dislocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StationRelationFilter = {
    is?: StationWhereInput
    isNot?: StationWhereInput
  }

  export type StageStart_idEnd_idCompoundUniqueInput = {
    start_id: number
    end_id: number
  }

  export type StageCountOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type StageAvgOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type StageMaxOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type StageMinOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type StageSumOrderByAggregateInput = {
    id?: SortOrder
    length?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StageListRelationFilter = {
    every?: StageWhereInput
    some?: StageWhereInput
    none?: StageWhereInput
  }

  export type TrainListRelationFilter = {
    every?: TrainWhereInput
    some?: TrainWhereInput
    none?: TrainWhereInput
  }

  export type WagonListRelationFilter = {
    every?: WagonWhereInput
    some?: WagonWhereInput
    none?: WagonWhereInput
  }

  export type ActionHistoryListRelationFilter = {
    every?: ActionHistoryWhereInput
    some?: ActionHistoryWhereInput
    none?: ActionHistoryWhereInput
  }

  export type StageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WagonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    station_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StationAvgOrderByAggregateInput = {
    id?: SortOrder
    station_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    station_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    station_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StationSumOrderByAggregateInput = {
    id?: SortOrder
    station_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrainCountOrderByAggregateInput = {
    id?: SortOrder
    train_number?: SortOrder
    train_index?: SortOrder
    is_move?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type TrainAvgOrderByAggregateInput = {
    id?: SortOrder
    train_number?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type TrainMaxOrderByAggregateInput = {
    id?: SortOrder
    train_number?: SortOrder
    train_index?: SortOrder
    is_move?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type TrainMinOrderByAggregateInput = {
    id?: SortOrder
    train_number?: SortOrder
    train_index?: SortOrder
    is_move?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type TrainSumOrderByAggregateInput = {
    id?: SortOrder
    train_number?: SortOrder
    start_id?: SortOrder
    end_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TrainNullableRelationFilter = {
    is?: TrainWhereInput | null
    isNot?: TrainWhereInput | null
  }

  export type WagonCountOrderByAggregateInput = {
    id?: SortOrder
    wagon_number?: SortOrder
    train_id?: SortOrder
    destination_id?: SortOrder
  }

  export type WagonAvgOrderByAggregateInput = {
    id?: SortOrder
    wagon_number?: SortOrder
    train_id?: SortOrder
    destination_id?: SortOrder
  }

  export type WagonMaxOrderByAggregateInput = {
    id?: SortOrder
    wagon_number?: SortOrder
    train_id?: SortOrder
    destination_id?: SortOrder
  }

  export type WagonMinOrderByAggregateInput = {
    id?: SortOrder
    wagon_number?: SortOrder
    train_id?: SortOrder
    destination_id?: SortOrder
  }

  export type WagonSumOrderByAggregateInput = {
    id?: SortOrder
    wagon_number?: SortOrder
    train_id?: SortOrder
    destination_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TrainRelationFilter = {
    is?: TrainWhereInput
    isNot?: TrainWhereInput
  }

  export type WagonRelationFilter = {
    is?: WagonWhereInput
    isNot?: WagonWhereInput
  }

  export type ActionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    action_date?: SortOrder
    train_id?: SortOrder
    wagon_id?: SortOrder
    destination_id?: SortOrder
    dislocation_id?: SortOrder
  }

  export type ActionHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    train_id?: SortOrder
    wagon_id?: SortOrder
    destination_id?: SortOrder
    dislocation_id?: SortOrder
  }

  export type ActionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    action_date?: SortOrder
    train_id?: SortOrder
    wagon_id?: SortOrder
    destination_id?: SortOrder
    dislocation_id?: SortOrder
  }

  export type ActionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    action_date?: SortOrder
    train_id?: SortOrder
    wagon_id?: SortOrder
    destination_id?: SortOrder
    dislocation_id?: SortOrder
  }

  export type ActionHistorySumOrderByAggregateInput = {
    id?: SortOrder
    train_id?: SortOrder
    wagon_id?: SortOrder
    destination_id?: SortOrder
    dislocation_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StationCreateNestedOneWithoutStart_stagesInput = {
    create?: XOR<StationCreateWithoutStart_stagesInput, StationUncheckedCreateWithoutStart_stagesInput>
    connectOrCreate?: StationCreateOrConnectWithoutStart_stagesInput
    connect?: StationWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutEnd_stagesInput = {
    create?: XOR<StationCreateWithoutEnd_stagesInput, StationUncheckedCreateWithoutEnd_stagesInput>
    connectOrCreate?: StationCreateOrConnectWithoutEnd_stagesInput
    connect?: StationWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StationUpdateOneRequiredWithoutStart_stagesNestedInput = {
    create?: XOR<StationCreateWithoutStart_stagesInput, StationUncheckedCreateWithoutStart_stagesInput>
    connectOrCreate?: StationCreateOrConnectWithoutStart_stagesInput
    upsert?: StationUpsertWithoutStart_stagesInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutStart_stagesInput, StationUpdateWithoutStart_stagesInput>, StationUncheckedUpdateWithoutStart_stagesInput>
  }

  export type StationUpdateOneRequiredWithoutEnd_stagesNestedInput = {
    create?: XOR<StationCreateWithoutEnd_stagesInput, StationUncheckedCreateWithoutEnd_stagesInput>
    connectOrCreate?: StationCreateOrConnectWithoutEnd_stagesInput
    upsert?: StationUpsertWithoutEnd_stagesInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutEnd_stagesInput, StationUpdateWithoutEnd_stagesInput>, StationUncheckedUpdateWithoutEnd_stagesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StageCreateNestedManyWithoutStartInput = {
    create?: XOR<StageCreateWithoutStartInput, StageUncheckedCreateWithoutStartInput> | StageCreateWithoutStartInput[] | StageUncheckedCreateWithoutStartInput[]
    connectOrCreate?: StageCreateOrConnectWithoutStartInput | StageCreateOrConnectWithoutStartInput[]
    createMany?: StageCreateManyStartInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type StageCreateNestedManyWithoutEndInput = {
    create?: XOR<StageCreateWithoutEndInput, StageUncheckedCreateWithoutEndInput> | StageCreateWithoutEndInput[] | StageUncheckedCreateWithoutEndInput[]
    connectOrCreate?: StageCreateOrConnectWithoutEndInput | StageCreateOrConnectWithoutEndInput[]
    createMany?: StageCreateManyEndInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type TrainCreateNestedManyWithoutStartInput = {
    create?: XOR<TrainCreateWithoutStartInput, TrainUncheckedCreateWithoutStartInput> | TrainCreateWithoutStartInput[] | TrainUncheckedCreateWithoutStartInput[]
    connectOrCreate?: TrainCreateOrConnectWithoutStartInput | TrainCreateOrConnectWithoutStartInput[]
    createMany?: TrainCreateManyStartInputEnvelope
    connect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
  }

  export type TrainCreateNestedManyWithoutEndInput = {
    create?: XOR<TrainCreateWithoutEndInput, TrainUncheckedCreateWithoutEndInput> | TrainCreateWithoutEndInput[] | TrainUncheckedCreateWithoutEndInput[]
    connectOrCreate?: TrainCreateOrConnectWithoutEndInput | TrainCreateOrConnectWithoutEndInput[]
    createMany?: TrainCreateManyEndInputEnvelope
    connect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
  }

  export type WagonCreateNestedManyWithoutDestinationInput = {
    create?: XOR<WagonCreateWithoutDestinationInput, WagonUncheckedCreateWithoutDestinationInput> | WagonCreateWithoutDestinationInput[] | WagonUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: WagonCreateOrConnectWithoutDestinationInput | WagonCreateOrConnectWithoutDestinationInput[]
    createMany?: WagonCreateManyDestinationInputEnvelope
    connect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
  }

  export type ActionHistoryCreateNestedManyWithoutDislocationInput = {
    create?: XOR<ActionHistoryCreateWithoutDislocationInput, ActionHistoryUncheckedCreateWithoutDislocationInput> | ActionHistoryCreateWithoutDislocationInput[] | ActionHistoryUncheckedCreateWithoutDislocationInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutDislocationInput | ActionHistoryCreateOrConnectWithoutDislocationInput[]
    createMany?: ActionHistoryCreateManyDislocationInputEnvelope
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
  }

  export type ActionHistoryCreateNestedManyWithoutDestinationInput = {
    create?: XOR<ActionHistoryCreateWithoutDestinationInput, ActionHistoryUncheckedCreateWithoutDestinationInput> | ActionHistoryCreateWithoutDestinationInput[] | ActionHistoryUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutDestinationInput | ActionHistoryCreateOrConnectWithoutDestinationInput[]
    createMany?: ActionHistoryCreateManyDestinationInputEnvelope
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
  }

  export type StageUncheckedCreateNestedManyWithoutStartInput = {
    create?: XOR<StageCreateWithoutStartInput, StageUncheckedCreateWithoutStartInput> | StageCreateWithoutStartInput[] | StageUncheckedCreateWithoutStartInput[]
    connectOrCreate?: StageCreateOrConnectWithoutStartInput | StageCreateOrConnectWithoutStartInput[]
    createMany?: StageCreateManyStartInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type StageUncheckedCreateNestedManyWithoutEndInput = {
    create?: XOR<StageCreateWithoutEndInput, StageUncheckedCreateWithoutEndInput> | StageCreateWithoutEndInput[] | StageUncheckedCreateWithoutEndInput[]
    connectOrCreate?: StageCreateOrConnectWithoutEndInput | StageCreateOrConnectWithoutEndInput[]
    createMany?: StageCreateManyEndInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type TrainUncheckedCreateNestedManyWithoutStartInput = {
    create?: XOR<TrainCreateWithoutStartInput, TrainUncheckedCreateWithoutStartInput> | TrainCreateWithoutStartInput[] | TrainUncheckedCreateWithoutStartInput[]
    connectOrCreate?: TrainCreateOrConnectWithoutStartInput | TrainCreateOrConnectWithoutStartInput[]
    createMany?: TrainCreateManyStartInputEnvelope
    connect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
  }

  export type TrainUncheckedCreateNestedManyWithoutEndInput = {
    create?: XOR<TrainCreateWithoutEndInput, TrainUncheckedCreateWithoutEndInput> | TrainCreateWithoutEndInput[] | TrainUncheckedCreateWithoutEndInput[]
    connectOrCreate?: TrainCreateOrConnectWithoutEndInput | TrainCreateOrConnectWithoutEndInput[]
    createMany?: TrainCreateManyEndInputEnvelope
    connect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
  }

  export type WagonUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<WagonCreateWithoutDestinationInput, WagonUncheckedCreateWithoutDestinationInput> | WagonCreateWithoutDestinationInput[] | WagonUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: WagonCreateOrConnectWithoutDestinationInput | WagonCreateOrConnectWithoutDestinationInput[]
    createMany?: WagonCreateManyDestinationInputEnvelope
    connect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
  }

  export type ActionHistoryUncheckedCreateNestedManyWithoutDislocationInput = {
    create?: XOR<ActionHistoryCreateWithoutDislocationInput, ActionHistoryUncheckedCreateWithoutDislocationInput> | ActionHistoryCreateWithoutDislocationInput[] | ActionHistoryUncheckedCreateWithoutDislocationInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutDislocationInput | ActionHistoryCreateOrConnectWithoutDislocationInput[]
    createMany?: ActionHistoryCreateManyDislocationInputEnvelope
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
  }

  export type ActionHistoryUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<ActionHistoryCreateWithoutDestinationInput, ActionHistoryUncheckedCreateWithoutDestinationInput> | ActionHistoryCreateWithoutDestinationInput[] | ActionHistoryUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutDestinationInput | ActionHistoryCreateOrConnectWithoutDestinationInput[]
    createMany?: ActionHistoryCreateManyDestinationInputEnvelope
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
  }

  export type StageUpdateManyWithoutStartNestedInput = {
    create?: XOR<StageCreateWithoutStartInput, StageUncheckedCreateWithoutStartInput> | StageCreateWithoutStartInput[] | StageUncheckedCreateWithoutStartInput[]
    connectOrCreate?: StageCreateOrConnectWithoutStartInput | StageCreateOrConnectWithoutStartInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutStartInput | StageUpsertWithWhereUniqueWithoutStartInput[]
    createMany?: StageCreateManyStartInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutStartInput | StageUpdateWithWhereUniqueWithoutStartInput[]
    updateMany?: StageUpdateManyWithWhereWithoutStartInput | StageUpdateManyWithWhereWithoutStartInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type StageUpdateManyWithoutEndNestedInput = {
    create?: XOR<StageCreateWithoutEndInput, StageUncheckedCreateWithoutEndInput> | StageCreateWithoutEndInput[] | StageUncheckedCreateWithoutEndInput[]
    connectOrCreate?: StageCreateOrConnectWithoutEndInput | StageCreateOrConnectWithoutEndInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutEndInput | StageUpsertWithWhereUniqueWithoutEndInput[]
    createMany?: StageCreateManyEndInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutEndInput | StageUpdateWithWhereUniqueWithoutEndInput[]
    updateMany?: StageUpdateManyWithWhereWithoutEndInput | StageUpdateManyWithWhereWithoutEndInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type TrainUpdateManyWithoutStartNestedInput = {
    create?: XOR<TrainCreateWithoutStartInput, TrainUncheckedCreateWithoutStartInput> | TrainCreateWithoutStartInput[] | TrainUncheckedCreateWithoutStartInput[]
    connectOrCreate?: TrainCreateOrConnectWithoutStartInput | TrainCreateOrConnectWithoutStartInput[]
    upsert?: TrainUpsertWithWhereUniqueWithoutStartInput | TrainUpsertWithWhereUniqueWithoutStartInput[]
    createMany?: TrainCreateManyStartInputEnvelope
    set?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    disconnect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    delete?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    connect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    update?: TrainUpdateWithWhereUniqueWithoutStartInput | TrainUpdateWithWhereUniqueWithoutStartInput[]
    updateMany?: TrainUpdateManyWithWhereWithoutStartInput | TrainUpdateManyWithWhereWithoutStartInput[]
    deleteMany?: TrainScalarWhereInput | TrainScalarWhereInput[]
  }

  export type TrainUpdateManyWithoutEndNestedInput = {
    create?: XOR<TrainCreateWithoutEndInput, TrainUncheckedCreateWithoutEndInput> | TrainCreateWithoutEndInput[] | TrainUncheckedCreateWithoutEndInput[]
    connectOrCreate?: TrainCreateOrConnectWithoutEndInput | TrainCreateOrConnectWithoutEndInput[]
    upsert?: TrainUpsertWithWhereUniqueWithoutEndInput | TrainUpsertWithWhereUniqueWithoutEndInput[]
    createMany?: TrainCreateManyEndInputEnvelope
    set?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    disconnect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    delete?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    connect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    update?: TrainUpdateWithWhereUniqueWithoutEndInput | TrainUpdateWithWhereUniqueWithoutEndInput[]
    updateMany?: TrainUpdateManyWithWhereWithoutEndInput | TrainUpdateManyWithWhereWithoutEndInput[]
    deleteMany?: TrainScalarWhereInput | TrainScalarWhereInput[]
  }

  export type WagonUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<WagonCreateWithoutDestinationInput, WagonUncheckedCreateWithoutDestinationInput> | WagonCreateWithoutDestinationInput[] | WagonUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: WagonCreateOrConnectWithoutDestinationInput | WagonCreateOrConnectWithoutDestinationInput[]
    upsert?: WagonUpsertWithWhereUniqueWithoutDestinationInput | WagonUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: WagonCreateManyDestinationInputEnvelope
    set?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    disconnect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    delete?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    connect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    update?: WagonUpdateWithWhereUniqueWithoutDestinationInput | WagonUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: WagonUpdateManyWithWhereWithoutDestinationInput | WagonUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: WagonScalarWhereInput | WagonScalarWhereInput[]
  }

  export type ActionHistoryUpdateManyWithoutDislocationNestedInput = {
    create?: XOR<ActionHistoryCreateWithoutDislocationInput, ActionHistoryUncheckedCreateWithoutDislocationInput> | ActionHistoryCreateWithoutDislocationInput[] | ActionHistoryUncheckedCreateWithoutDislocationInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutDislocationInput | ActionHistoryCreateOrConnectWithoutDislocationInput[]
    upsert?: ActionHistoryUpsertWithWhereUniqueWithoutDislocationInput | ActionHistoryUpsertWithWhereUniqueWithoutDislocationInput[]
    createMany?: ActionHistoryCreateManyDislocationInputEnvelope
    set?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    disconnect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    delete?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    update?: ActionHistoryUpdateWithWhereUniqueWithoutDislocationInput | ActionHistoryUpdateWithWhereUniqueWithoutDislocationInput[]
    updateMany?: ActionHistoryUpdateManyWithWhereWithoutDislocationInput | ActionHistoryUpdateManyWithWhereWithoutDislocationInput[]
    deleteMany?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
  }

  export type ActionHistoryUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<ActionHistoryCreateWithoutDestinationInput, ActionHistoryUncheckedCreateWithoutDestinationInput> | ActionHistoryCreateWithoutDestinationInput[] | ActionHistoryUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutDestinationInput | ActionHistoryCreateOrConnectWithoutDestinationInput[]
    upsert?: ActionHistoryUpsertWithWhereUniqueWithoutDestinationInput | ActionHistoryUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: ActionHistoryCreateManyDestinationInputEnvelope
    set?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    disconnect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    delete?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    update?: ActionHistoryUpdateWithWhereUniqueWithoutDestinationInput | ActionHistoryUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: ActionHistoryUpdateManyWithWhereWithoutDestinationInput | ActionHistoryUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
  }

  export type StageUncheckedUpdateManyWithoutStartNestedInput = {
    create?: XOR<StageCreateWithoutStartInput, StageUncheckedCreateWithoutStartInput> | StageCreateWithoutStartInput[] | StageUncheckedCreateWithoutStartInput[]
    connectOrCreate?: StageCreateOrConnectWithoutStartInput | StageCreateOrConnectWithoutStartInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutStartInput | StageUpsertWithWhereUniqueWithoutStartInput[]
    createMany?: StageCreateManyStartInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutStartInput | StageUpdateWithWhereUniqueWithoutStartInput[]
    updateMany?: StageUpdateManyWithWhereWithoutStartInput | StageUpdateManyWithWhereWithoutStartInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type StageUncheckedUpdateManyWithoutEndNestedInput = {
    create?: XOR<StageCreateWithoutEndInput, StageUncheckedCreateWithoutEndInput> | StageCreateWithoutEndInput[] | StageUncheckedCreateWithoutEndInput[]
    connectOrCreate?: StageCreateOrConnectWithoutEndInput | StageCreateOrConnectWithoutEndInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutEndInput | StageUpsertWithWhereUniqueWithoutEndInput[]
    createMany?: StageCreateManyEndInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutEndInput | StageUpdateWithWhereUniqueWithoutEndInput[]
    updateMany?: StageUpdateManyWithWhereWithoutEndInput | StageUpdateManyWithWhereWithoutEndInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type TrainUncheckedUpdateManyWithoutStartNestedInput = {
    create?: XOR<TrainCreateWithoutStartInput, TrainUncheckedCreateWithoutStartInput> | TrainCreateWithoutStartInput[] | TrainUncheckedCreateWithoutStartInput[]
    connectOrCreate?: TrainCreateOrConnectWithoutStartInput | TrainCreateOrConnectWithoutStartInput[]
    upsert?: TrainUpsertWithWhereUniqueWithoutStartInput | TrainUpsertWithWhereUniqueWithoutStartInput[]
    createMany?: TrainCreateManyStartInputEnvelope
    set?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    disconnect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    delete?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    connect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    update?: TrainUpdateWithWhereUniqueWithoutStartInput | TrainUpdateWithWhereUniqueWithoutStartInput[]
    updateMany?: TrainUpdateManyWithWhereWithoutStartInput | TrainUpdateManyWithWhereWithoutStartInput[]
    deleteMany?: TrainScalarWhereInput | TrainScalarWhereInput[]
  }

  export type TrainUncheckedUpdateManyWithoutEndNestedInput = {
    create?: XOR<TrainCreateWithoutEndInput, TrainUncheckedCreateWithoutEndInput> | TrainCreateWithoutEndInput[] | TrainUncheckedCreateWithoutEndInput[]
    connectOrCreate?: TrainCreateOrConnectWithoutEndInput | TrainCreateOrConnectWithoutEndInput[]
    upsert?: TrainUpsertWithWhereUniqueWithoutEndInput | TrainUpsertWithWhereUniqueWithoutEndInput[]
    createMany?: TrainCreateManyEndInputEnvelope
    set?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    disconnect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    delete?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    connect?: TrainWhereUniqueInput | TrainWhereUniqueInput[]
    update?: TrainUpdateWithWhereUniqueWithoutEndInput | TrainUpdateWithWhereUniqueWithoutEndInput[]
    updateMany?: TrainUpdateManyWithWhereWithoutEndInput | TrainUpdateManyWithWhereWithoutEndInput[]
    deleteMany?: TrainScalarWhereInput | TrainScalarWhereInput[]
  }

  export type WagonUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<WagonCreateWithoutDestinationInput, WagonUncheckedCreateWithoutDestinationInput> | WagonCreateWithoutDestinationInput[] | WagonUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: WagonCreateOrConnectWithoutDestinationInput | WagonCreateOrConnectWithoutDestinationInput[]
    upsert?: WagonUpsertWithWhereUniqueWithoutDestinationInput | WagonUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: WagonCreateManyDestinationInputEnvelope
    set?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    disconnect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    delete?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    connect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    update?: WagonUpdateWithWhereUniqueWithoutDestinationInput | WagonUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: WagonUpdateManyWithWhereWithoutDestinationInput | WagonUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: WagonScalarWhereInput | WagonScalarWhereInput[]
  }

  export type ActionHistoryUncheckedUpdateManyWithoutDislocationNestedInput = {
    create?: XOR<ActionHistoryCreateWithoutDislocationInput, ActionHistoryUncheckedCreateWithoutDislocationInput> | ActionHistoryCreateWithoutDislocationInput[] | ActionHistoryUncheckedCreateWithoutDislocationInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutDislocationInput | ActionHistoryCreateOrConnectWithoutDislocationInput[]
    upsert?: ActionHistoryUpsertWithWhereUniqueWithoutDislocationInput | ActionHistoryUpsertWithWhereUniqueWithoutDislocationInput[]
    createMany?: ActionHistoryCreateManyDislocationInputEnvelope
    set?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    disconnect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    delete?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    update?: ActionHistoryUpdateWithWhereUniqueWithoutDislocationInput | ActionHistoryUpdateWithWhereUniqueWithoutDislocationInput[]
    updateMany?: ActionHistoryUpdateManyWithWhereWithoutDislocationInput | ActionHistoryUpdateManyWithWhereWithoutDislocationInput[]
    deleteMany?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
  }

  export type ActionHistoryUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<ActionHistoryCreateWithoutDestinationInput, ActionHistoryUncheckedCreateWithoutDestinationInput> | ActionHistoryCreateWithoutDestinationInput[] | ActionHistoryUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutDestinationInput | ActionHistoryCreateOrConnectWithoutDestinationInput[]
    upsert?: ActionHistoryUpsertWithWhereUniqueWithoutDestinationInput | ActionHistoryUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: ActionHistoryCreateManyDestinationInputEnvelope
    set?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    disconnect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    delete?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    update?: ActionHistoryUpdateWithWhereUniqueWithoutDestinationInput | ActionHistoryUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: ActionHistoryUpdateManyWithWhereWithoutDestinationInput | ActionHistoryUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
  }

  export type StationCreateNestedOneWithoutStart_trainsInput = {
    create?: XOR<StationCreateWithoutStart_trainsInput, StationUncheckedCreateWithoutStart_trainsInput>
    connectOrCreate?: StationCreateOrConnectWithoutStart_trainsInput
    connect?: StationWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutEnd_trainsInput = {
    create?: XOR<StationCreateWithoutEnd_trainsInput, StationUncheckedCreateWithoutEnd_trainsInput>
    connectOrCreate?: StationCreateOrConnectWithoutEnd_trainsInput
    connect?: StationWhereUniqueInput
  }

  export type WagonCreateNestedManyWithoutTrainInput = {
    create?: XOR<WagonCreateWithoutTrainInput, WagonUncheckedCreateWithoutTrainInput> | WagonCreateWithoutTrainInput[] | WagonUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: WagonCreateOrConnectWithoutTrainInput | WagonCreateOrConnectWithoutTrainInput[]
    createMany?: WagonCreateManyTrainInputEnvelope
    connect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
  }

  export type ActionHistoryCreateNestedManyWithoutTrainInput = {
    create?: XOR<ActionHistoryCreateWithoutTrainInput, ActionHistoryUncheckedCreateWithoutTrainInput> | ActionHistoryCreateWithoutTrainInput[] | ActionHistoryUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutTrainInput | ActionHistoryCreateOrConnectWithoutTrainInput[]
    createMany?: ActionHistoryCreateManyTrainInputEnvelope
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
  }

  export type WagonUncheckedCreateNestedManyWithoutTrainInput = {
    create?: XOR<WagonCreateWithoutTrainInput, WagonUncheckedCreateWithoutTrainInput> | WagonCreateWithoutTrainInput[] | WagonUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: WagonCreateOrConnectWithoutTrainInput | WagonCreateOrConnectWithoutTrainInput[]
    createMany?: WagonCreateManyTrainInputEnvelope
    connect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
  }

  export type ActionHistoryUncheckedCreateNestedManyWithoutTrainInput = {
    create?: XOR<ActionHistoryCreateWithoutTrainInput, ActionHistoryUncheckedCreateWithoutTrainInput> | ActionHistoryCreateWithoutTrainInput[] | ActionHistoryUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutTrainInput | ActionHistoryCreateOrConnectWithoutTrainInput[]
    createMany?: ActionHistoryCreateManyTrainInputEnvelope
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StationUpdateOneRequiredWithoutStart_trainsNestedInput = {
    create?: XOR<StationCreateWithoutStart_trainsInput, StationUncheckedCreateWithoutStart_trainsInput>
    connectOrCreate?: StationCreateOrConnectWithoutStart_trainsInput
    upsert?: StationUpsertWithoutStart_trainsInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutStart_trainsInput, StationUpdateWithoutStart_trainsInput>, StationUncheckedUpdateWithoutStart_trainsInput>
  }

  export type StationUpdateOneRequiredWithoutEnd_trainsNestedInput = {
    create?: XOR<StationCreateWithoutEnd_trainsInput, StationUncheckedCreateWithoutEnd_trainsInput>
    connectOrCreate?: StationCreateOrConnectWithoutEnd_trainsInput
    upsert?: StationUpsertWithoutEnd_trainsInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutEnd_trainsInput, StationUpdateWithoutEnd_trainsInput>, StationUncheckedUpdateWithoutEnd_trainsInput>
  }

  export type WagonUpdateManyWithoutTrainNestedInput = {
    create?: XOR<WagonCreateWithoutTrainInput, WagonUncheckedCreateWithoutTrainInput> | WagonCreateWithoutTrainInput[] | WagonUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: WagonCreateOrConnectWithoutTrainInput | WagonCreateOrConnectWithoutTrainInput[]
    upsert?: WagonUpsertWithWhereUniqueWithoutTrainInput | WagonUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: WagonCreateManyTrainInputEnvelope
    set?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    disconnect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    delete?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    connect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    update?: WagonUpdateWithWhereUniqueWithoutTrainInput | WagonUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: WagonUpdateManyWithWhereWithoutTrainInput | WagonUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: WagonScalarWhereInput | WagonScalarWhereInput[]
  }

  export type ActionHistoryUpdateManyWithoutTrainNestedInput = {
    create?: XOR<ActionHistoryCreateWithoutTrainInput, ActionHistoryUncheckedCreateWithoutTrainInput> | ActionHistoryCreateWithoutTrainInput[] | ActionHistoryUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutTrainInput | ActionHistoryCreateOrConnectWithoutTrainInput[]
    upsert?: ActionHistoryUpsertWithWhereUniqueWithoutTrainInput | ActionHistoryUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: ActionHistoryCreateManyTrainInputEnvelope
    set?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    disconnect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    delete?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    update?: ActionHistoryUpdateWithWhereUniqueWithoutTrainInput | ActionHistoryUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: ActionHistoryUpdateManyWithWhereWithoutTrainInput | ActionHistoryUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
  }

  export type WagonUncheckedUpdateManyWithoutTrainNestedInput = {
    create?: XOR<WagonCreateWithoutTrainInput, WagonUncheckedCreateWithoutTrainInput> | WagonCreateWithoutTrainInput[] | WagonUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: WagonCreateOrConnectWithoutTrainInput | WagonCreateOrConnectWithoutTrainInput[]
    upsert?: WagonUpsertWithWhereUniqueWithoutTrainInput | WagonUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: WagonCreateManyTrainInputEnvelope
    set?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    disconnect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    delete?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    connect?: WagonWhereUniqueInput | WagonWhereUniqueInput[]
    update?: WagonUpdateWithWhereUniqueWithoutTrainInput | WagonUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: WagonUpdateManyWithWhereWithoutTrainInput | WagonUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: WagonScalarWhereInput | WagonScalarWhereInput[]
  }

  export type ActionHistoryUncheckedUpdateManyWithoutTrainNestedInput = {
    create?: XOR<ActionHistoryCreateWithoutTrainInput, ActionHistoryUncheckedCreateWithoutTrainInput> | ActionHistoryCreateWithoutTrainInput[] | ActionHistoryUncheckedCreateWithoutTrainInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutTrainInput | ActionHistoryCreateOrConnectWithoutTrainInput[]
    upsert?: ActionHistoryUpsertWithWhereUniqueWithoutTrainInput | ActionHistoryUpsertWithWhereUniqueWithoutTrainInput[]
    createMany?: ActionHistoryCreateManyTrainInputEnvelope
    set?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    disconnect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    delete?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    update?: ActionHistoryUpdateWithWhereUniqueWithoutTrainInput | ActionHistoryUpdateWithWhereUniqueWithoutTrainInput[]
    updateMany?: ActionHistoryUpdateManyWithWhereWithoutTrainInput | ActionHistoryUpdateManyWithWhereWithoutTrainInput[]
    deleteMany?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
  }

  export type TrainCreateNestedOneWithoutWagonsInput = {
    create?: XOR<TrainCreateWithoutWagonsInput, TrainUncheckedCreateWithoutWagonsInput>
    connectOrCreate?: TrainCreateOrConnectWithoutWagonsInput
    connect?: TrainWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutWagons_destinationInput = {
    create?: XOR<StationCreateWithoutWagons_destinationInput, StationUncheckedCreateWithoutWagons_destinationInput>
    connectOrCreate?: StationCreateOrConnectWithoutWagons_destinationInput
    connect?: StationWhereUniqueInput
  }

  export type ActionHistoryCreateNestedManyWithoutWagonInput = {
    create?: XOR<ActionHistoryCreateWithoutWagonInput, ActionHistoryUncheckedCreateWithoutWagonInput> | ActionHistoryCreateWithoutWagonInput[] | ActionHistoryUncheckedCreateWithoutWagonInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutWagonInput | ActionHistoryCreateOrConnectWithoutWagonInput[]
    createMany?: ActionHistoryCreateManyWagonInputEnvelope
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
  }

  export type ActionHistoryUncheckedCreateNestedManyWithoutWagonInput = {
    create?: XOR<ActionHistoryCreateWithoutWagonInput, ActionHistoryUncheckedCreateWithoutWagonInput> | ActionHistoryCreateWithoutWagonInput[] | ActionHistoryUncheckedCreateWithoutWagonInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutWagonInput | ActionHistoryCreateOrConnectWithoutWagonInput[]
    createMany?: ActionHistoryCreateManyWagonInputEnvelope
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
  }

  export type TrainUpdateOneWithoutWagonsNestedInput = {
    create?: XOR<TrainCreateWithoutWagonsInput, TrainUncheckedCreateWithoutWagonsInput>
    connectOrCreate?: TrainCreateOrConnectWithoutWagonsInput
    upsert?: TrainUpsertWithoutWagonsInput
    disconnect?: TrainWhereInput | boolean
    delete?: TrainWhereInput | boolean
    connect?: TrainWhereUniqueInput
    update?: XOR<XOR<TrainUpdateToOneWithWhereWithoutWagonsInput, TrainUpdateWithoutWagonsInput>, TrainUncheckedUpdateWithoutWagonsInput>
  }

  export type StationUpdateOneRequiredWithoutWagons_destinationNestedInput = {
    create?: XOR<StationCreateWithoutWagons_destinationInput, StationUncheckedCreateWithoutWagons_destinationInput>
    connectOrCreate?: StationCreateOrConnectWithoutWagons_destinationInput
    upsert?: StationUpsertWithoutWagons_destinationInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutWagons_destinationInput, StationUpdateWithoutWagons_destinationInput>, StationUncheckedUpdateWithoutWagons_destinationInput>
  }

  export type ActionHistoryUpdateManyWithoutWagonNestedInput = {
    create?: XOR<ActionHistoryCreateWithoutWagonInput, ActionHistoryUncheckedCreateWithoutWagonInput> | ActionHistoryCreateWithoutWagonInput[] | ActionHistoryUncheckedCreateWithoutWagonInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutWagonInput | ActionHistoryCreateOrConnectWithoutWagonInput[]
    upsert?: ActionHistoryUpsertWithWhereUniqueWithoutWagonInput | ActionHistoryUpsertWithWhereUniqueWithoutWagonInput[]
    createMany?: ActionHistoryCreateManyWagonInputEnvelope
    set?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    disconnect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    delete?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    update?: ActionHistoryUpdateWithWhereUniqueWithoutWagonInput | ActionHistoryUpdateWithWhereUniqueWithoutWagonInput[]
    updateMany?: ActionHistoryUpdateManyWithWhereWithoutWagonInput | ActionHistoryUpdateManyWithWhereWithoutWagonInput[]
    deleteMany?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActionHistoryUncheckedUpdateManyWithoutWagonNestedInput = {
    create?: XOR<ActionHistoryCreateWithoutWagonInput, ActionHistoryUncheckedCreateWithoutWagonInput> | ActionHistoryCreateWithoutWagonInput[] | ActionHistoryUncheckedCreateWithoutWagonInput[]
    connectOrCreate?: ActionHistoryCreateOrConnectWithoutWagonInput | ActionHistoryCreateOrConnectWithoutWagonInput[]
    upsert?: ActionHistoryUpsertWithWhereUniqueWithoutWagonInput | ActionHistoryUpsertWithWhereUniqueWithoutWagonInput[]
    createMany?: ActionHistoryCreateManyWagonInputEnvelope
    set?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    disconnect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    delete?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    connect?: ActionHistoryWhereUniqueInput | ActionHistoryWhereUniqueInput[]
    update?: ActionHistoryUpdateWithWhereUniqueWithoutWagonInput | ActionHistoryUpdateWithWhereUniqueWithoutWagonInput[]
    updateMany?: ActionHistoryUpdateManyWithWhereWithoutWagonInput | ActionHistoryUpdateManyWithWhereWithoutWagonInput[]
    deleteMany?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
  }

  export type TrainCreateNestedOneWithoutActionsInput = {
    create?: XOR<TrainCreateWithoutActionsInput, TrainUncheckedCreateWithoutActionsInput>
    connectOrCreate?: TrainCreateOrConnectWithoutActionsInput
    connect?: TrainWhereUniqueInput
  }

  export type WagonCreateNestedOneWithoutActionsInput = {
    create?: XOR<WagonCreateWithoutActionsInput, WagonUncheckedCreateWithoutActionsInput>
    connectOrCreate?: WagonCreateOrConnectWithoutActionsInput
    connect?: WagonWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutActions_destInput = {
    create?: XOR<StationCreateWithoutActions_destInput, StationUncheckedCreateWithoutActions_destInput>
    connectOrCreate?: StationCreateOrConnectWithoutActions_destInput
    connect?: StationWhereUniqueInput
  }

  export type StationCreateNestedOneWithoutActions_dislInput = {
    create?: XOR<StationCreateWithoutActions_dislInput, StationUncheckedCreateWithoutActions_dislInput>
    connectOrCreate?: StationCreateOrConnectWithoutActions_dislInput
    connect?: StationWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TrainUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<TrainCreateWithoutActionsInput, TrainUncheckedCreateWithoutActionsInput>
    connectOrCreate?: TrainCreateOrConnectWithoutActionsInput
    upsert?: TrainUpsertWithoutActionsInput
    connect?: TrainWhereUniqueInput
    update?: XOR<XOR<TrainUpdateToOneWithWhereWithoutActionsInput, TrainUpdateWithoutActionsInput>, TrainUncheckedUpdateWithoutActionsInput>
  }

  export type WagonUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<WagonCreateWithoutActionsInput, WagonUncheckedCreateWithoutActionsInput>
    connectOrCreate?: WagonCreateOrConnectWithoutActionsInput
    upsert?: WagonUpsertWithoutActionsInput
    connect?: WagonWhereUniqueInput
    update?: XOR<XOR<WagonUpdateToOneWithWhereWithoutActionsInput, WagonUpdateWithoutActionsInput>, WagonUncheckedUpdateWithoutActionsInput>
  }

  export type StationUpdateOneRequiredWithoutActions_destNestedInput = {
    create?: XOR<StationCreateWithoutActions_destInput, StationUncheckedCreateWithoutActions_destInput>
    connectOrCreate?: StationCreateOrConnectWithoutActions_destInput
    upsert?: StationUpsertWithoutActions_destInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutActions_destInput, StationUpdateWithoutActions_destInput>, StationUncheckedUpdateWithoutActions_destInput>
  }

  export type StationUpdateOneRequiredWithoutActions_dislNestedInput = {
    create?: XOR<StationCreateWithoutActions_dislInput, StationUncheckedCreateWithoutActions_dislInput>
    connectOrCreate?: StationCreateOrConnectWithoutActions_dislInput
    upsert?: StationUpsertWithoutActions_dislInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutActions_dislInput, StationUpdateWithoutActions_dislInput>, StationUncheckedUpdateWithoutActions_dislInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StationCreateWithoutStart_stagesInput = {
    station_id: number
    latitude: number
    longitude: number
    end_stages?: StageCreateNestedManyWithoutEndInput
    start_trains?: TrainCreateNestedManyWithoutStartInput
    end_trains?: TrainCreateNestedManyWithoutEndInput
    wagons_destination?: WagonCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryCreateNestedManyWithoutDestinationInput
  }

  export type StationUncheckedCreateWithoutStart_stagesInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
    end_stages?: StageUncheckedCreateNestedManyWithoutEndInput
    start_trains?: TrainUncheckedCreateNestedManyWithoutStartInput
    end_trains?: TrainUncheckedCreateNestedManyWithoutEndInput
    wagons_destination?: WagonUncheckedCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryUncheckedCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type StationCreateOrConnectWithoutStart_stagesInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutStart_stagesInput, StationUncheckedCreateWithoutStart_stagesInput>
  }

  export type StationCreateWithoutEnd_stagesInput = {
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageCreateNestedManyWithoutStartInput
    start_trains?: TrainCreateNestedManyWithoutStartInput
    end_trains?: TrainCreateNestedManyWithoutEndInput
    wagons_destination?: WagonCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryCreateNestedManyWithoutDestinationInput
  }

  export type StationUncheckedCreateWithoutEnd_stagesInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageUncheckedCreateNestedManyWithoutStartInput
    start_trains?: TrainUncheckedCreateNestedManyWithoutStartInput
    end_trains?: TrainUncheckedCreateNestedManyWithoutEndInput
    wagons_destination?: WagonUncheckedCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryUncheckedCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type StationCreateOrConnectWithoutEnd_stagesInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutEnd_stagesInput, StationUncheckedCreateWithoutEnd_stagesInput>
  }

  export type StationUpsertWithoutStart_stagesInput = {
    update: XOR<StationUpdateWithoutStart_stagesInput, StationUncheckedUpdateWithoutStart_stagesInput>
    create: XOR<StationCreateWithoutStart_stagesInput, StationUncheckedCreateWithoutStart_stagesInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutStart_stagesInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutStart_stagesInput, StationUncheckedUpdateWithoutStart_stagesInput>
  }

  export type StationUpdateWithoutStart_stagesInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    end_stages?: StageUpdateManyWithoutEndNestedInput
    start_trains?: TrainUpdateManyWithoutStartNestedInput
    end_trains?: TrainUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUpdateManyWithoutDestinationNestedInput
  }

  export type StationUncheckedUpdateWithoutStart_stagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    end_stages?: StageUncheckedUpdateManyWithoutEndNestedInput
    start_trains?: TrainUncheckedUpdateManyWithoutStartNestedInput
    end_trains?: TrainUncheckedUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUncheckedUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUncheckedUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type StationUpsertWithoutEnd_stagesInput = {
    update: XOR<StationUpdateWithoutEnd_stagesInput, StationUncheckedUpdateWithoutEnd_stagesInput>
    create: XOR<StationCreateWithoutEnd_stagesInput, StationUncheckedCreateWithoutEnd_stagesInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutEnd_stagesInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutEnd_stagesInput, StationUncheckedUpdateWithoutEnd_stagesInput>
  }

  export type StationUpdateWithoutEnd_stagesInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUpdateManyWithoutStartNestedInput
    start_trains?: TrainUpdateManyWithoutStartNestedInput
    end_trains?: TrainUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUpdateManyWithoutDestinationNestedInput
  }

  export type StationUncheckedUpdateWithoutEnd_stagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUncheckedUpdateManyWithoutStartNestedInput
    start_trains?: TrainUncheckedUpdateManyWithoutStartNestedInput
    end_trains?: TrainUncheckedUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUncheckedUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUncheckedUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type StageCreateWithoutStartInput = {
    length?: number
    end: StationCreateNestedOneWithoutEnd_stagesInput
  }

  export type StageUncheckedCreateWithoutStartInput = {
    id?: number
    length?: number
    end_id: number
  }

  export type StageCreateOrConnectWithoutStartInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutStartInput, StageUncheckedCreateWithoutStartInput>
  }

  export type StageCreateManyStartInputEnvelope = {
    data: StageCreateManyStartInput | StageCreateManyStartInput[]
    skipDuplicates?: boolean
  }

  export type StageCreateWithoutEndInput = {
    length?: number
    start: StationCreateNestedOneWithoutStart_stagesInput
  }

  export type StageUncheckedCreateWithoutEndInput = {
    id?: number
    length?: number
    start_id: number
  }

  export type StageCreateOrConnectWithoutEndInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutEndInput, StageUncheckedCreateWithoutEndInput>
  }

  export type StageCreateManyEndInputEnvelope = {
    data: StageCreateManyEndInput | StageCreateManyEndInput[]
    skipDuplicates?: boolean
  }

  export type TrainCreateWithoutStartInput = {
    train_number: number
    train_index?: string | null
    is_move?: boolean
    end: StationCreateNestedOneWithoutEnd_trainsInput
    wagons?: WagonCreateNestedManyWithoutTrainInput
    actions?: ActionHistoryCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateWithoutStartInput = {
    id?: number
    train_number: number
    train_index?: string | null
    is_move?: boolean
    end_id: number
    wagons?: WagonUncheckedCreateNestedManyWithoutTrainInput
    actions?: ActionHistoryUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainCreateOrConnectWithoutStartInput = {
    where: TrainWhereUniqueInput
    create: XOR<TrainCreateWithoutStartInput, TrainUncheckedCreateWithoutStartInput>
  }

  export type TrainCreateManyStartInputEnvelope = {
    data: TrainCreateManyStartInput | TrainCreateManyStartInput[]
    skipDuplicates?: boolean
  }

  export type TrainCreateWithoutEndInput = {
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start: StationCreateNestedOneWithoutStart_trainsInput
    wagons?: WagonCreateNestedManyWithoutTrainInput
    actions?: ActionHistoryCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateWithoutEndInput = {
    id?: number
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start_id: number
    wagons?: WagonUncheckedCreateNestedManyWithoutTrainInput
    actions?: ActionHistoryUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainCreateOrConnectWithoutEndInput = {
    where: TrainWhereUniqueInput
    create: XOR<TrainCreateWithoutEndInput, TrainUncheckedCreateWithoutEndInput>
  }

  export type TrainCreateManyEndInputEnvelope = {
    data: TrainCreateManyEndInput | TrainCreateManyEndInput[]
    skipDuplicates?: boolean
  }

  export type WagonCreateWithoutDestinationInput = {
    wagon_number: number
    train?: TrainCreateNestedOneWithoutWagonsInput
    actions?: ActionHistoryCreateNestedManyWithoutWagonInput
  }

  export type WagonUncheckedCreateWithoutDestinationInput = {
    id?: number
    wagon_number: number
    train_id?: number | null
    actions?: ActionHistoryUncheckedCreateNestedManyWithoutWagonInput
  }

  export type WagonCreateOrConnectWithoutDestinationInput = {
    where: WagonWhereUniqueInput
    create: XOR<WagonCreateWithoutDestinationInput, WagonUncheckedCreateWithoutDestinationInput>
  }

  export type WagonCreateManyDestinationInputEnvelope = {
    data: WagonCreateManyDestinationInput | WagonCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type ActionHistoryCreateWithoutDislocationInput = {
    action_date: Date | string
    train: TrainCreateNestedOneWithoutActionsInput
    wagon: WagonCreateNestedOneWithoutActionsInput
    destination: StationCreateNestedOneWithoutActions_destInput
  }

  export type ActionHistoryUncheckedCreateWithoutDislocationInput = {
    id?: number
    action_date: Date | string
    train_id: number
    wagon_id: number
    destination_id: number
  }

  export type ActionHistoryCreateOrConnectWithoutDislocationInput = {
    where: ActionHistoryWhereUniqueInput
    create: XOR<ActionHistoryCreateWithoutDislocationInput, ActionHistoryUncheckedCreateWithoutDislocationInput>
  }

  export type ActionHistoryCreateManyDislocationInputEnvelope = {
    data: ActionHistoryCreateManyDislocationInput | ActionHistoryCreateManyDislocationInput[]
    skipDuplicates?: boolean
  }

  export type ActionHistoryCreateWithoutDestinationInput = {
    action_date: Date | string
    train: TrainCreateNestedOneWithoutActionsInput
    wagon: WagonCreateNestedOneWithoutActionsInput
    dislocation: StationCreateNestedOneWithoutActions_dislInput
  }

  export type ActionHistoryUncheckedCreateWithoutDestinationInput = {
    id?: number
    action_date: Date | string
    train_id: number
    wagon_id: number
    dislocation_id: number
  }

  export type ActionHistoryCreateOrConnectWithoutDestinationInput = {
    where: ActionHistoryWhereUniqueInput
    create: XOR<ActionHistoryCreateWithoutDestinationInput, ActionHistoryUncheckedCreateWithoutDestinationInput>
  }

  export type ActionHistoryCreateManyDestinationInputEnvelope = {
    data: ActionHistoryCreateManyDestinationInput | ActionHistoryCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type StageUpsertWithWhereUniqueWithoutStartInput = {
    where: StageWhereUniqueInput
    update: XOR<StageUpdateWithoutStartInput, StageUncheckedUpdateWithoutStartInput>
    create: XOR<StageCreateWithoutStartInput, StageUncheckedCreateWithoutStartInput>
  }

  export type StageUpdateWithWhereUniqueWithoutStartInput = {
    where: StageWhereUniqueInput
    data: XOR<StageUpdateWithoutStartInput, StageUncheckedUpdateWithoutStartInput>
  }

  export type StageUpdateManyWithWhereWithoutStartInput = {
    where: StageScalarWhereInput
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyWithoutStartInput>
  }

  export type StageScalarWhereInput = {
    AND?: StageScalarWhereInput | StageScalarWhereInput[]
    OR?: StageScalarWhereInput[]
    NOT?: StageScalarWhereInput | StageScalarWhereInput[]
    id?: IntFilter<"Stage"> | number
    length?: FloatFilter<"Stage"> | number
    start_id?: IntFilter<"Stage"> | number
    end_id?: IntFilter<"Stage"> | number
  }

  export type StageUpsertWithWhereUniqueWithoutEndInput = {
    where: StageWhereUniqueInput
    update: XOR<StageUpdateWithoutEndInput, StageUncheckedUpdateWithoutEndInput>
    create: XOR<StageCreateWithoutEndInput, StageUncheckedCreateWithoutEndInput>
  }

  export type StageUpdateWithWhereUniqueWithoutEndInput = {
    where: StageWhereUniqueInput
    data: XOR<StageUpdateWithoutEndInput, StageUncheckedUpdateWithoutEndInput>
  }

  export type StageUpdateManyWithWhereWithoutEndInput = {
    where: StageScalarWhereInput
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyWithoutEndInput>
  }

  export type TrainUpsertWithWhereUniqueWithoutStartInput = {
    where: TrainWhereUniqueInput
    update: XOR<TrainUpdateWithoutStartInput, TrainUncheckedUpdateWithoutStartInput>
    create: XOR<TrainCreateWithoutStartInput, TrainUncheckedCreateWithoutStartInput>
  }

  export type TrainUpdateWithWhereUniqueWithoutStartInput = {
    where: TrainWhereUniqueInput
    data: XOR<TrainUpdateWithoutStartInput, TrainUncheckedUpdateWithoutStartInput>
  }

  export type TrainUpdateManyWithWhereWithoutStartInput = {
    where: TrainScalarWhereInput
    data: XOR<TrainUpdateManyMutationInput, TrainUncheckedUpdateManyWithoutStartInput>
  }

  export type TrainScalarWhereInput = {
    AND?: TrainScalarWhereInput | TrainScalarWhereInput[]
    OR?: TrainScalarWhereInput[]
    NOT?: TrainScalarWhereInput | TrainScalarWhereInput[]
    id?: IntFilter<"Train"> | number
    train_number?: IntFilter<"Train"> | number
    train_index?: StringNullableFilter<"Train"> | string | null
    is_move?: BoolFilter<"Train"> | boolean
    start_id?: IntFilter<"Train"> | number
    end_id?: IntFilter<"Train"> | number
  }

  export type TrainUpsertWithWhereUniqueWithoutEndInput = {
    where: TrainWhereUniqueInput
    update: XOR<TrainUpdateWithoutEndInput, TrainUncheckedUpdateWithoutEndInput>
    create: XOR<TrainCreateWithoutEndInput, TrainUncheckedCreateWithoutEndInput>
  }

  export type TrainUpdateWithWhereUniqueWithoutEndInput = {
    where: TrainWhereUniqueInput
    data: XOR<TrainUpdateWithoutEndInput, TrainUncheckedUpdateWithoutEndInput>
  }

  export type TrainUpdateManyWithWhereWithoutEndInput = {
    where: TrainScalarWhereInput
    data: XOR<TrainUpdateManyMutationInput, TrainUncheckedUpdateManyWithoutEndInput>
  }

  export type WagonUpsertWithWhereUniqueWithoutDestinationInput = {
    where: WagonWhereUniqueInput
    update: XOR<WagonUpdateWithoutDestinationInput, WagonUncheckedUpdateWithoutDestinationInput>
    create: XOR<WagonCreateWithoutDestinationInput, WagonUncheckedCreateWithoutDestinationInput>
  }

  export type WagonUpdateWithWhereUniqueWithoutDestinationInput = {
    where: WagonWhereUniqueInput
    data: XOR<WagonUpdateWithoutDestinationInput, WagonUncheckedUpdateWithoutDestinationInput>
  }

  export type WagonUpdateManyWithWhereWithoutDestinationInput = {
    where: WagonScalarWhereInput
    data: XOR<WagonUpdateManyMutationInput, WagonUncheckedUpdateManyWithoutDestinationInput>
  }

  export type WagonScalarWhereInput = {
    AND?: WagonScalarWhereInput | WagonScalarWhereInput[]
    OR?: WagonScalarWhereInput[]
    NOT?: WagonScalarWhereInput | WagonScalarWhereInput[]
    id?: IntFilter<"Wagon"> | number
    wagon_number?: IntFilter<"Wagon"> | number
    train_id?: IntNullableFilter<"Wagon"> | number | null
    destination_id?: IntFilter<"Wagon"> | number
  }

  export type ActionHistoryUpsertWithWhereUniqueWithoutDislocationInput = {
    where: ActionHistoryWhereUniqueInput
    update: XOR<ActionHistoryUpdateWithoutDislocationInput, ActionHistoryUncheckedUpdateWithoutDislocationInput>
    create: XOR<ActionHistoryCreateWithoutDislocationInput, ActionHistoryUncheckedCreateWithoutDislocationInput>
  }

  export type ActionHistoryUpdateWithWhereUniqueWithoutDislocationInput = {
    where: ActionHistoryWhereUniqueInput
    data: XOR<ActionHistoryUpdateWithoutDislocationInput, ActionHistoryUncheckedUpdateWithoutDislocationInput>
  }

  export type ActionHistoryUpdateManyWithWhereWithoutDislocationInput = {
    where: ActionHistoryScalarWhereInput
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyWithoutDislocationInput>
  }

  export type ActionHistoryScalarWhereInput = {
    AND?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
    OR?: ActionHistoryScalarWhereInput[]
    NOT?: ActionHistoryScalarWhereInput | ActionHistoryScalarWhereInput[]
    id?: IntFilter<"ActionHistory"> | number
    action_date?: DateTimeFilter<"ActionHistory"> | Date | string
    train_id?: IntFilter<"ActionHistory"> | number
    wagon_id?: IntFilter<"ActionHistory"> | number
    destination_id?: IntFilter<"ActionHistory"> | number
    dislocation_id?: IntFilter<"ActionHistory"> | number
  }

  export type ActionHistoryUpsertWithWhereUniqueWithoutDestinationInput = {
    where: ActionHistoryWhereUniqueInput
    update: XOR<ActionHistoryUpdateWithoutDestinationInput, ActionHistoryUncheckedUpdateWithoutDestinationInput>
    create: XOR<ActionHistoryCreateWithoutDestinationInput, ActionHistoryUncheckedCreateWithoutDestinationInput>
  }

  export type ActionHistoryUpdateWithWhereUniqueWithoutDestinationInput = {
    where: ActionHistoryWhereUniqueInput
    data: XOR<ActionHistoryUpdateWithoutDestinationInput, ActionHistoryUncheckedUpdateWithoutDestinationInput>
  }

  export type ActionHistoryUpdateManyWithWhereWithoutDestinationInput = {
    where: ActionHistoryScalarWhereInput
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyWithoutDestinationInput>
  }

  export type StationCreateWithoutStart_trainsInput = {
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageCreateNestedManyWithoutStartInput
    end_stages?: StageCreateNestedManyWithoutEndInput
    end_trains?: TrainCreateNestedManyWithoutEndInput
    wagons_destination?: WagonCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryCreateNestedManyWithoutDestinationInput
  }

  export type StationUncheckedCreateWithoutStart_trainsInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageUncheckedCreateNestedManyWithoutStartInput
    end_stages?: StageUncheckedCreateNestedManyWithoutEndInput
    end_trains?: TrainUncheckedCreateNestedManyWithoutEndInput
    wagons_destination?: WagonUncheckedCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryUncheckedCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type StationCreateOrConnectWithoutStart_trainsInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutStart_trainsInput, StationUncheckedCreateWithoutStart_trainsInput>
  }

  export type StationCreateWithoutEnd_trainsInput = {
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageCreateNestedManyWithoutStartInput
    end_stages?: StageCreateNestedManyWithoutEndInput
    start_trains?: TrainCreateNestedManyWithoutStartInput
    wagons_destination?: WagonCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryCreateNestedManyWithoutDestinationInput
  }

  export type StationUncheckedCreateWithoutEnd_trainsInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageUncheckedCreateNestedManyWithoutStartInput
    end_stages?: StageUncheckedCreateNestedManyWithoutEndInput
    start_trains?: TrainUncheckedCreateNestedManyWithoutStartInput
    wagons_destination?: WagonUncheckedCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryUncheckedCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type StationCreateOrConnectWithoutEnd_trainsInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutEnd_trainsInput, StationUncheckedCreateWithoutEnd_trainsInput>
  }

  export type WagonCreateWithoutTrainInput = {
    wagon_number: number
    destination: StationCreateNestedOneWithoutWagons_destinationInput
    actions?: ActionHistoryCreateNestedManyWithoutWagonInput
  }

  export type WagonUncheckedCreateWithoutTrainInput = {
    id?: number
    wagon_number: number
    destination_id: number
    actions?: ActionHistoryUncheckedCreateNestedManyWithoutWagonInput
  }

  export type WagonCreateOrConnectWithoutTrainInput = {
    where: WagonWhereUniqueInput
    create: XOR<WagonCreateWithoutTrainInput, WagonUncheckedCreateWithoutTrainInput>
  }

  export type WagonCreateManyTrainInputEnvelope = {
    data: WagonCreateManyTrainInput | WagonCreateManyTrainInput[]
    skipDuplicates?: boolean
  }

  export type ActionHistoryCreateWithoutTrainInput = {
    action_date: Date | string
    wagon: WagonCreateNestedOneWithoutActionsInput
    destination: StationCreateNestedOneWithoutActions_destInput
    dislocation: StationCreateNestedOneWithoutActions_dislInput
  }

  export type ActionHistoryUncheckedCreateWithoutTrainInput = {
    id?: number
    action_date: Date | string
    wagon_id: number
    destination_id: number
    dislocation_id: number
  }

  export type ActionHistoryCreateOrConnectWithoutTrainInput = {
    where: ActionHistoryWhereUniqueInput
    create: XOR<ActionHistoryCreateWithoutTrainInput, ActionHistoryUncheckedCreateWithoutTrainInput>
  }

  export type ActionHistoryCreateManyTrainInputEnvelope = {
    data: ActionHistoryCreateManyTrainInput | ActionHistoryCreateManyTrainInput[]
    skipDuplicates?: boolean
  }

  export type StationUpsertWithoutStart_trainsInput = {
    update: XOR<StationUpdateWithoutStart_trainsInput, StationUncheckedUpdateWithoutStart_trainsInput>
    create: XOR<StationCreateWithoutStart_trainsInput, StationUncheckedCreateWithoutStart_trainsInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutStart_trainsInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutStart_trainsInput, StationUncheckedUpdateWithoutStart_trainsInput>
  }

  export type StationUpdateWithoutStart_trainsInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUpdateManyWithoutStartNestedInput
    end_stages?: StageUpdateManyWithoutEndNestedInput
    end_trains?: TrainUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUpdateManyWithoutDestinationNestedInput
  }

  export type StationUncheckedUpdateWithoutStart_trainsInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUncheckedUpdateManyWithoutStartNestedInput
    end_stages?: StageUncheckedUpdateManyWithoutEndNestedInput
    end_trains?: TrainUncheckedUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUncheckedUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUncheckedUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type StationUpsertWithoutEnd_trainsInput = {
    update: XOR<StationUpdateWithoutEnd_trainsInput, StationUncheckedUpdateWithoutEnd_trainsInput>
    create: XOR<StationCreateWithoutEnd_trainsInput, StationUncheckedCreateWithoutEnd_trainsInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutEnd_trainsInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutEnd_trainsInput, StationUncheckedUpdateWithoutEnd_trainsInput>
  }

  export type StationUpdateWithoutEnd_trainsInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUpdateManyWithoutStartNestedInput
    end_stages?: StageUpdateManyWithoutEndNestedInput
    start_trains?: TrainUpdateManyWithoutStartNestedInput
    wagons_destination?: WagonUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUpdateManyWithoutDestinationNestedInput
  }

  export type StationUncheckedUpdateWithoutEnd_trainsInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUncheckedUpdateManyWithoutStartNestedInput
    end_stages?: StageUncheckedUpdateManyWithoutEndNestedInput
    start_trains?: TrainUncheckedUpdateManyWithoutStartNestedInput
    wagons_destination?: WagonUncheckedUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUncheckedUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type WagonUpsertWithWhereUniqueWithoutTrainInput = {
    where: WagonWhereUniqueInput
    update: XOR<WagonUpdateWithoutTrainInput, WagonUncheckedUpdateWithoutTrainInput>
    create: XOR<WagonCreateWithoutTrainInput, WagonUncheckedCreateWithoutTrainInput>
  }

  export type WagonUpdateWithWhereUniqueWithoutTrainInput = {
    where: WagonWhereUniqueInput
    data: XOR<WagonUpdateWithoutTrainInput, WagonUncheckedUpdateWithoutTrainInput>
  }

  export type WagonUpdateManyWithWhereWithoutTrainInput = {
    where: WagonScalarWhereInput
    data: XOR<WagonUpdateManyMutationInput, WagonUncheckedUpdateManyWithoutTrainInput>
  }

  export type ActionHistoryUpsertWithWhereUniqueWithoutTrainInput = {
    where: ActionHistoryWhereUniqueInput
    update: XOR<ActionHistoryUpdateWithoutTrainInput, ActionHistoryUncheckedUpdateWithoutTrainInput>
    create: XOR<ActionHistoryCreateWithoutTrainInput, ActionHistoryUncheckedCreateWithoutTrainInput>
  }

  export type ActionHistoryUpdateWithWhereUniqueWithoutTrainInput = {
    where: ActionHistoryWhereUniqueInput
    data: XOR<ActionHistoryUpdateWithoutTrainInput, ActionHistoryUncheckedUpdateWithoutTrainInput>
  }

  export type ActionHistoryUpdateManyWithWhereWithoutTrainInput = {
    where: ActionHistoryScalarWhereInput
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyWithoutTrainInput>
  }

  export type TrainCreateWithoutWagonsInput = {
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start: StationCreateNestedOneWithoutStart_trainsInput
    end: StationCreateNestedOneWithoutEnd_trainsInput
    actions?: ActionHistoryCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateWithoutWagonsInput = {
    id?: number
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start_id: number
    end_id: number
    actions?: ActionHistoryUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainCreateOrConnectWithoutWagonsInput = {
    where: TrainWhereUniqueInput
    create: XOR<TrainCreateWithoutWagonsInput, TrainUncheckedCreateWithoutWagonsInput>
  }

  export type StationCreateWithoutWagons_destinationInput = {
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageCreateNestedManyWithoutStartInput
    end_stages?: StageCreateNestedManyWithoutEndInput
    start_trains?: TrainCreateNestedManyWithoutStartInput
    end_trains?: TrainCreateNestedManyWithoutEndInput
    actions_disl?: ActionHistoryCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryCreateNestedManyWithoutDestinationInput
  }

  export type StationUncheckedCreateWithoutWagons_destinationInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageUncheckedCreateNestedManyWithoutStartInput
    end_stages?: StageUncheckedCreateNestedManyWithoutEndInput
    start_trains?: TrainUncheckedCreateNestedManyWithoutStartInput
    end_trains?: TrainUncheckedCreateNestedManyWithoutEndInput
    actions_disl?: ActionHistoryUncheckedCreateNestedManyWithoutDislocationInput
    actions_dest?: ActionHistoryUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type StationCreateOrConnectWithoutWagons_destinationInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutWagons_destinationInput, StationUncheckedCreateWithoutWagons_destinationInput>
  }

  export type ActionHistoryCreateWithoutWagonInput = {
    action_date: Date | string
    train: TrainCreateNestedOneWithoutActionsInput
    destination: StationCreateNestedOneWithoutActions_destInput
    dislocation: StationCreateNestedOneWithoutActions_dislInput
  }

  export type ActionHistoryUncheckedCreateWithoutWagonInput = {
    id?: number
    action_date: Date | string
    train_id: number
    destination_id: number
    dislocation_id: number
  }

  export type ActionHistoryCreateOrConnectWithoutWagonInput = {
    where: ActionHistoryWhereUniqueInput
    create: XOR<ActionHistoryCreateWithoutWagonInput, ActionHistoryUncheckedCreateWithoutWagonInput>
  }

  export type ActionHistoryCreateManyWagonInputEnvelope = {
    data: ActionHistoryCreateManyWagonInput | ActionHistoryCreateManyWagonInput[]
    skipDuplicates?: boolean
  }

  export type TrainUpsertWithoutWagonsInput = {
    update: XOR<TrainUpdateWithoutWagonsInput, TrainUncheckedUpdateWithoutWagonsInput>
    create: XOR<TrainCreateWithoutWagonsInput, TrainUncheckedCreateWithoutWagonsInput>
    where?: TrainWhereInput
  }

  export type TrainUpdateToOneWithWhereWithoutWagonsInput = {
    where?: TrainWhereInput
    data: XOR<TrainUpdateWithoutWagonsInput, TrainUncheckedUpdateWithoutWagonsInput>
  }

  export type TrainUpdateWithoutWagonsInput = {
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start?: StationUpdateOneRequiredWithoutStart_trainsNestedInput
    end?: StationUpdateOneRequiredWithoutEnd_trainsNestedInput
    actions?: ActionHistoryUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateWithoutWagonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start_id?: IntFieldUpdateOperationsInput | number
    end_id?: IntFieldUpdateOperationsInput | number
    actions?: ActionHistoryUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type StationUpsertWithoutWagons_destinationInput = {
    update: XOR<StationUpdateWithoutWagons_destinationInput, StationUncheckedUpdateWithoutWagons_destinationInput>
    create: XOR<StationCreateWithoutWagons_destinationInput, StationUncheckedCreateWithoutWagons_destinationInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutWagons_destinationInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutWagons_destinationInput, StationUncheckedUpdateWithoutWagons_destinationInput>
  }

  export type StationUpdateWithoutWagons_destinationInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUpdateManyWithoutStartNestedInput
    end_stages?: StageUpdateManyWithoutEndNestedInput
    start_trains?: TrainUpdateManyWithoutStartNestedInput
    end_trains?: TrainUpdateManyWithoutEndNestedInput
    actions_disl?: ActionHistoryUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUpdateManyWithoutDestinationNestedInput
  }

  export type StationUncheckedUpdateWithoutWagons_destinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUncheckedUpdateManyWithoutStartNestedInput
    end_stages?: StageUncheckedUpdateManyWithoutEndNestedInput
    start_trains?: TrainUncheckedUpdateManyWithoutStartNestedInput
    end_trains?: TrainUncheckedUpdateManyWithoutEndNestedInput
    actions_disl?: ActionHistoryUncheckedUpdateManyWithoutDislocationNestedInput
    actions_dest?: ActionHistoryUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type ActionHistoryUpsertWithWhereUniqueWithoutWagonInput = {
    where: ActionHistoryWhereUniqueInput
    update: XOR<ActionHistoryUpdateWithoutWagonInput, ActionHistoryUncheckedUpdateWithoutWagonInput>
    create: XOR<ActionHistoryCreateWithoutWagonInput, ActionHistoryUncheckedCreateWithoutWagonInput>
  }

  export type ActionHistoryUpdateWithWhereUniqueWithoutWagonInput = {
    where: ActionHistoryWhereUniqueInput
    data: XOR<ActionHistoryUpdateWithoutWagonInput, ActionHistoryUncheckedUpdateWithoutWagonInput>
  }

  export type ActionHistoryUpdateManyWithWhereWithoutWagonInput = {
    where: ActionHistoryScalarWhereInput
    data: XOR<ActionHistoryUpdateManyMutationInput, ActionHistoryUncheckedUpdateManyWithoutWagonInput>
  }

  export type TrainCreateWithoutActionsInput = {
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start: StationCreateNestedOneWithoutStart_trainsInput
    end: StationCreateNestedOneWithoutEnd_trainsInput
    wagons?: WagonCreateNestedManyWithoutTrainInput
  }

  export type TrainUncheckedCreateWithoutActionsInput = {
    id?: number
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start_id: number
    end_id: number
    wagons?: WagonUncheckedCreateNestedManyWithoutTrainInput
  }

  export type TrainCreateOrConnectWithoutActionsInput = {
    where: TrainWhereUniqueInput
    create: XOR<TrainCreateWithoutActionsInput, TrainUncheckedCreateWithoutActionsInput>
  }

  export type WagonCreateWithoutActionsInput = {
    wagon_number: number
    train?: TrainCreateNestedOneWithoutWagonsInput
    destination: StationCreateNestedOneWithoutWagons_destinationInput
  }

  export type WagonUncheckedCreateWithoutActionsInput = {
    id?: number
    wagon_number: number
    train_id?: number | null
    destination_id: number
  }

  export type WagonCreateOrConnectWithoutActionsInput = {
    where: WagonWhereUniqueInput
    create: XOR<WagonCreateWithoutActionsInput, WagonUncheckedCreateWithoutActionsInput>
  }

  export type StationCreateWithoutActions_destInput = {
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageCreateNestedManyWithoutStartInput
    end_stages?: StageCreateNestedManyWithoutEndInput
    start_trains?: TrainCreateNestedManyWithoutStartInput
    end_trains?: TrainCreateNestedManyWithoutEndInput
    wagons_destination?: WagonCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryCreateNestedManyWithoutDislocationInput
  }

  export type StationUncheckedCreateWithoutActions_destInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageUncheckedCreateNestedManyWithoutStartInput
    end_stages?: StageUncheckedCreateNestedManyWithoutEndInput
    start_trains?: TrainUncheckedCreateNestedManyWithoutStartInput
    end_trains?: TrainUncheckedCreateNestedManyWithoutEndInput
    wagons_destination?: WagonUncheckedCreateNestedManyWithoutDestinationInput
    actions_disl?: ActionHistoryUncheckedCreateNestedManyWithoutDislocationInput
  }

  export type StationCreateOrConnectWithoutActions_destInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutActions_destInput, StationUncheckedCreateWithoutActions_destInput>
  }

  export type StationCreateWithoutActions_dislInput = {
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageCreateNestedManyWithoutStartInput
    end_stages?: StageCreateNestedManyWithoutEndInput
    start_trains?: TrainCreateNestedManyWithoutStartInput
    end_trains?: TrainCreateNestedManyWithoutEndInput
    wagons_destination?: WagonCreateNestedManyWithoutDestinationInput
    actions_dest?: ActionHistoryCreateNestedManyWithoutDestinationInput
  }

  export type StationUncheckedCreateWithoutActions_dislInput = {
    id?: number
    station_id: number
    latitude: number
    longitude: number
    start_stages?: StageUncheckedCreateNestedManyWithoutStartInput
    end_stages?: StageUncheckedCreateNestedManyWithoutEndInput
    start_trains?: TrainUncheckedCreateNestedManyWithoutStartInput
    end_trains?: TrainUncheckedCreateNestedManyWithoutEndInput
    wagons_destination?: WagonUncheckedCreateNestedManyWithoutDestinationInput
    actions_dest?: ActionHistoryUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type StationCreateOrConnectWithoutActions_dislInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutActions_dislInput, StationUncheckedCreateWithoutActions_dislInput>
  }

  export type TrainUpsertWithoutActionsInput = {
    update: XOR<TrainUpdateWithoutActionsInput, TrainUncheckedUpdateWithoutActionsInput>
    create: XOR<TrainCreateWithoutActionsInput, TrainUncheckedCreateWithoutActionsInput>
    where?: TrainWhereInput
  }

  export type TrainUpdateToOneWithWhereWithoutActionsInput = {
    where?: TrainWhereInput
    data: XOR<TrainUpdateWithoutActionsInput, TrainUncheckedUpdateWithoutActionsInput>
  }

  export type TrainUpdateWithoutActionsInput = {
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start?: StationUpdateOneRequiredWithoutStart_trainsNestedInput
    end?: StationUpdateOneRequiredWithoutEnd_trainsNestedInput
    wagons?: WagonUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateWithoutActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start_id?: IntFieldUpdateOperationsInput | number
    end_id?: IntFieldUpdateOperationsInput | number
    wagons?: WagonUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type WagonUpsertWithoutActionsInput = {
    update: XOR<WagonUpdateWithoutActionsInput, WagonUncheckedUpdateWithoutActionsInput>
    create: XOR<WagonCreateWithoutActionsInput, WagonUncheckedCreateWithoutActionsInput>
    where?: WagonWhereInput
  }

  export type WagonUpdateToOneWithWhereWithoutActionsInput = {
    where?: WagonWhereInput
    data: XOR<WagonUpdateWithoutActionsInput, WagonUncheckedUpdateWithoutActionsInput>
  }

  export type WagonUpdateWithoutActionsInput = {
    wagon_number?: IntFieldUpdateOperationsInput | number
    train?: TrainUpdateOneWithoutWagonsNestedInput
    destination?: StationUpdateOneRequiredWithoutWagons_destinationNestedInput
  }

  export type WagonUncheckedUpdateWithoutActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    wagon_number?: IntFieldUpdateOperationsInput | number
    train_id?: NullableIntFieldUpdateOperationsInput | number | null
    destination_id?: IntFieldUpdateOperationsInput | number
  }

  export type StationUpsertWithoutActions_destInput = {
    update: XOR<StationUpdateWithoutActions_destInput, StationUncheckedUpdateWithoutActions_destInput>
    create: XOR<StationCreateWithoutActions_destInput, StationUncheckedCreateWithoutActions_destInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutActions_destInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutActions_destInput, StationUncheckedUpdateWithoutActions_destInput>
  }

  export type StationUpdateWithoutActions_destInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUpdateManyWithoutStartNestedInput
    end_stages?: StageUpdateManyWithoutEndNestedInput
    start_trains?: TrainUpdateManyWithoutStartNestedInput
    end_trains?: TrainUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUpdateManyWithoutDislocationNestedInput
  }

  export type StationUncheckedUpdateWithoutActions_destInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUncheckedUpdateManyWithoutStartNestedInput
    end_stages?: StageUncheckedUpdateManyWithoutEndNestedInput
    start_trains?: TrainUncheckedUpdateManyWithoutStartNestedInput
    end_trains?: TrainUncheckedUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUncheckedUpdateManyWithoutDestinationNestedInput
    actions_disl?: ActionHistoryUncheckedUpdateManyWithoutDislocationNestedInput
  }

  export type StationUpsertWithoutActions_dislInput = {
    update: XOR<StationUpdateWithoutActions_dislInput, StationUncheckedUpdateWithoutActions_dislInput>
    create: XOR<StationCreateWithoutActions_dislInput, StationUncheckedCreateWithoutActions_dislInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutActions_dislInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutActions_dislInput, StationUncheckedUpdateWithoutActions_dislInput>
  }

  export type StationUpdateWithoutActions_dislInput = {
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUpdateManyWithoutStartNestedInput
    end_stages?: StageUpdateManyWithoutEndNestedInput
    start_trains?: TrainUpdateManyWithoutStartNestedInput
    end_trains?: TrainUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUpdateManyWithoutDestinationNestedInput
    actions_dest?: ActionHistoryUpdateManyWithoutDestinationNestedInput
  }

  export type StationUncheckedUpdateWithoutActions_dislInput = {
    id?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    start_stages?: StageUncheckedUpdateManyWithoutStartNestedInput
    end_stages?: StageUncheckedUpdateManyWithoutEndNestedInput
    start_trains?: TrainUncheckedUpdateManyWithoutStartNestedInput
    end_trains?: TrainUncheckedUpdateManyWithoutEndNestedInput
    wagons_destination?: WagonUncheckedUpdateManyWithoutDestinationNestedInput
    actions_dest?: ActionHistoryUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type StageCreateManyStartInput = {
    id?: number
    length?: number
    end_id: number
  }

  export type StageCreateManyEndInput = {
    id?: number
    length?: number
    start_id: number
  }

  export type TrainCreateManyStartInput = {
    id?: number
    train_number: number
    train_index?: string | null
    is_move?: boolean
    end_id: number
  }

  export type TrainCreateManyEndInput = {
    id?: number
    train_number: number
    train_index?: string | null
    is_move?: boolean
    start_id: number
  }

  export type WagonCreateManyDestinationInput = {
    id?: number
    wagon_number: number
    train_id?: number | null
  }

  export type ActionHistoryCreateManyDislocationInput = {
    id?: number
    action_date: Date | string
    train_id: number
    wagon_id: number
    destination_id: number
  }

  export type ActionHistoryCreateManyDestinationInput = {
    id?: number
    action_date: Date | string
    train_id: number
    wagon_id: number
    dislocation_id: number
  }

  export type StageUpdateWithoutStartInput = {
    length?: FloatFieldUpdateOperationsInput | number
    end?: StationUpdateOneRequiredWithoutEnd_stagesNestedInput
  }

  export type StageUncheckedUpdateWithoutStartInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    end_id?: IntFieldUpdateOperationsInput | number
  }

  export type StageUncheckedUpdateManyWithoutStartInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    end_id?: IntFieldUpdateOperationsInput | number
  }

  export type StageUpdateWithoutEndInput = {
    length?: FloatFieldUpdateOperationsInput | number
    start?: StationUpdateOneRequiredWithoutStart_stagesNestedInput
  }

  export type StageUncheckedUpdateWithoutEndInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    start_id?: IntFieldUpdateOperationsInput | number
  }

  export type StageUncheckedUpdateManyWithoutEndInput = {
    id?: IntFieldUpdateOperationsInput | number
    length?: FloatFieldUpdateOperationsInput | number
    start_id?: IntFieldUpdateOperationsInput | number
  }

  export type TrainUpdateWithoutStartInput = {
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    end?: StationUpdateOneRequiredWithoutEnd_trainsNestedInput
    wagons?: WagonUpdateManyWithoutTrainNestedInput
    actions?: ActionHistoryUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateWithoutStartInput = {
    id?: IntFieldUpdateOperationsInput | number
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    end_id?: IntFieldUpdateOperationsInput | number
    wagons?: WagonUncheckedUpdateManyWithoutTrainNestedInput
    actions?: ActionHistoryUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateManyWithoutStartInput = {
    id?: IntFieldUpdateOperationsInput | number
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    end_id?: IntFieldUpdateOperationsInput | number
  }

  export type TrainUpdateWithoutEndInput = {
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start?: StationUpdateOneRequiredWithoutStart_trainsNestedInput
    wagons?: WagonUpdateManyWithoutTrainNestedInput
    actions?: ActionHistoryUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateWithoutEndInput = {
    id?: IntFieldUpdateOperationsInput | number
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start_id?: IntFieldUpdateOperationsInput | number
    wagons?: WagonUncheckedUpdateManyWithoutTrainNestedInput
    actions?: ActionHistoryUncheckedUpdateManyWithoutTrainNestedInput
  }

  export type TrainUncheckedUpdateManyWithoutEndInput = {
    id?: IntFieldUpdateOperationsInput | number
    train_number?: IntFieldUpdateOperationsInput | number
    train_index?: NullableStringFieldUpdateOperationsInput | string | null
    is_move?: BoolFieldUpdateOperationsInput | boolean
    start_id?: IntFieldUpdateOperationsInput | number
  }

  export type WagonUpdateWithoutDestinationInput = {
    wagon_number?: IntFieldUpdateOperationsInput | number
    train?: TrainUpdateOneWithoutWagonsNestedInput
    actions?: ActionHistoryUpdateManyWithoutWagonNestedInput
  }

  export type WagonUncheckedUpdateWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    wagon_number?: IntFieldUpdateOperationsInput | number
    train_id?: NullableIntFieldUpdateOperationsInput | number | null
    actions?: ActionHistoryUncheckedUpdateManyWithoutWagonNestedInput
  }

  export type WagonUncheckedUpdateManyWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    wagon_number?: IntFieldUpdateOperationsInput | number
    train_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActionHistoryUpdateWithoutDislocationInput = {
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutActionsNestedInput
    wagon?: WagonUpdateOneRequiredWithoutActionsNestedInput
    destination?: StationUpdateOneRequiredWithoutActions_destNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutDislocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train_id?: IntFieldUpdateOperationsInput | number
    wagon_id?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryUncheckedUpdateManyWithoutDislocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train_id?: IntFieldUpdateOperationsInput | number
    wagon_id?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryUpdateWithoutDestinationInput = {
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutActionsNestedInput
    wagon?: WagonUpdateOneRequiredWithoutActionsNestedInput
    dislocation?: StationUpdateOneRequiredWithoutActions_dislNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train_id?: IntFieldUpdateOperationsInput | number
    wagon_id?: IntFieldUpdateOperationsInput | number
    dislocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryUncheckedUpdateManyWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train_id?: IntFieldUpdateOperationsInput | number
    wagon_id?: IntFieldUpdateOperationsInput | number
    dislocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type WagonCreateManyTrainInput = {
    id?: number
    wagon_number: number
    destination_id: number
  }

  export type ActionHistoryCreateManyTrainInput = {
    id?: number
    action_date: Date | string
    wagon_id: number
    destination_id: number
    dislocation_id: number
  }

  export type WagonUpdateWithoutTrainInput = {
    wagon_number?: IntFieldUpdateOperationsInput | number
    destination?: StationUpdateOneRequiredWithoutWagons_destinationNestedInput
    actions?: ActionHistoryUpdateManyWithoutWagonNestedInput
  }

  export type WagonUncheckedUpdateWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    wagon_number?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
    actions?: ActionHistoryUncheckedUpdateManyWithoutWagonNestedInput
  }

  export type WagonUncheckedUpdateManyWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    wagon_number?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryUpdateWithoutTrainInput = {
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wagon?: WagonUpdateOneRequiredWithoutActionsNestedInput
    destination?: StationUpdateOneRequiredWithoutActions_destNestedInput
    dislocation?: StationUpdateOneRequiredWithoutActions_dislNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wagon_id?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
    dislocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryUncheckedUpdateManyWithoutTrainInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wagon_id?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
    dislocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryCreateManyWagonInput = {
    id?: number
    action_date: Date | string
    train_id: number
    destination_id: number
    dislocation_id: number
  }

  export type ActionHistoryUpdateWithoutWagonInput = {
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train?: TrainUpdateOneRequiredWithoutActionsNestedInput
    destination?: StationUpdateOneRequiredWithoutActions_destNestedInput
    dislocation?: StationUpdateOneRequiredWithoutActions_dislNestedInput
  }

  export type ActionHistoryUncheckedUpdateWithoutWagonInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train_id?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
    dislocation_id?: IntFieldUpdateOperationsInput | number
  }

  export type ActionHistoryUncheckedUpdateManyWithoutWagonInput = {
    id?: IntFieldUpdateOperationsInput | number
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    train_id?: IntFieldUpdateOperationsInput | number
    destination_id?: IntFieldUpdateOperationsInput | number
    dislocation_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StationCountOutputTypeDefaultArgs instead
     */
    export type StationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainCountOutputTypeDefaultArgs instead
     */
    export type TrainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WagonCountOutputTypeDefaultArgs instead
     */
    export type WagonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WagonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StageDefaultArgs instead
     */
    export type StageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StationDefaultArgs instead
     */
    export type StationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrainDefaultArgs instead
     */
    export type TrainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WagonDefaultArgs instead
     */
    export type WagonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WagonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActionHistoryDefaultArgs instead
     */
    export type ActionHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActionHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}