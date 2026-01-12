
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model CodingSession
 * 
 */
export type CodingSession = $Result.DefaultSelection<Prisma.$CodingSessionPayload>
/**
 * Model Tip
 * 
 */
export type Tip = $Result.DefaultSelection<Prisma.$TipPayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model FeatureVote
 * 
 */
export type FeatureVote = $Result.DefaultSelection<Prisma.$FeatureVotePayload>
/**
 * Model FeatureComment
 * 
 */
export type FeatureComment = $Result.DefaultSelection<Prisma.$FeatureCommentPayload>
/**
 * Model CommentReaction
 * 
 */
export type CommentReaction = $Result.DefaultSelection<Prisma.$CommentReactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FeatureStatus: {
  now: 'now',
  in_progress: 'in_progress',
  next: 'next',
  planned: 'planned',
  later: 'later',
  considering: 'considering'
};

export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus]


export const FeatureTag: {
  feature: 'feature',
  improvement: 'improvement',
  integration: 'integration',
  platform: 'platform',
  ai: 'ai',
  export: 'export'
};

export type FeatureTag = (typeof FeatureTag)[keyof typeof FeatureTag]

}

export type FeatureStatus = $Enums.FeatureStatus

export const FeatureStatus: typeof $Enums.FeatureStatus

export type FeatureTag = $Enums.FeatureTag

export const FeatureTag: typeof $Enums.FeatureTag

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs>;

  /**
   * `prisma.codingSession`: Exposes CRUD operations for the **CodingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodingSessions
    * const codingSessions = await prisma.codingSession.findMany()
    * ```
    */
  get codingSession(): Prisma.CodingSessionDelegate<ExtArgs>;

  /**
   * `prisma.tip`: Exposes CRUD operations for the **Tip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tips
    * const tips = await prisma.tip.findMany()
    * ```
    */
  get tip(): Prisma.TipDelegate<ExtArgs>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs>;

  /**
   * `prisma.featureVote`: Exposes CRUD operations for the **FeatureVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureVotes
    * const featureVotes = await prisma.featureVote.findMany()
    * ```
    */
  get featureVote(): Prisma.FeatureVoteDelegate<ExtArgs>;

  /**
   * `prisma.featureComment`: Exposes CRUD operations for the **FeatureComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureComments
    * const featureComments = await prisma.featureComment.findMany()
    * ```
    */
  get featureComment(): Prisma.FeatureCommentDelegate<ExtArgs>;

  /**
   * `prisma.commentReaction`: Exposes CRUD operations for the **CommentReaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentReactions
    * const commentReactions = await prisma.commentReaction.findMany()
    * ```
    */
  get commentReaction(): Prisma.CommentReactionDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    ApiKey: 'ApiKey',
    CodingSession: 'CodingSession',
    Tip: 'Tip',
    Feature: 'Feature',
    FeatureVote: 'FeatureVote',
    FeatureComment: 'FeatureComment',
    CommentReaction: 'CommentReaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "apiKey" | "codingSession" | "tip" | "feature" | "featureVote" | "featureComment" | "commentReaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      CodingSession: {
        payload: Prisma.$CodingSessionPayload<ExtArgs>
        fields: Prisma.CodingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload>
          }
          findFirst: {
            args: Prisma.CodingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload>
          }
          findMany: {
            args: Prisma.CodingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload>[]
          }
          create: {
            args: Prisma.CodingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload>
          }
          createMany: {
            args: Prisma.CodingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload>[]
          }
          delete: {
            args: Prisma.CodingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload>
          }
          update: {
            args: Prisma.CodingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload>
          }
          deleteMany: {
            args: Prisma.CodingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CodingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodingSessionPayload>
          }
          aggregate: {
            args: Prisma.CodingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodingSession>
          }
          groupBy: {
            args: Prisma.CodingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<CodingSessionCountAggregateOutputType> | number
          }
        }
      }
      Tip: {
        payload: Prisma.$TipPayload<ExtArgs>
        fields: Prisma.TipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload>
          }
          findFirst: {
            args: Prisma.TipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload>
          }
          findMany: {
            args: Prisma.TipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload>[]
          }
          create: {
            args: Prisma.TipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload>
          }
          createMany: {
            args: Prisma.TipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload>[]
          }
          delete: {
            args: Prisma.TipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload>
          }
          update: {
            args: Prisma.TipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload>
          }
          deleteMany: {
            args: Prisma.TipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipPayload>
          }
          aggregate: {
            args: Prisma.TipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTip>
          }
          groupBy: {
            args: Prisma.TipGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipCountArgs<ExtArgs>
            result: $Utils.Optional<TipCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      FeatureVote: {
        payload: Prisma.$FeatureVotePayload<ExtArgs>
        fields: Prisma.FeatureVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload>
          }
          findFirst: {
            args: Prisma.FeatureVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload>
          }
          findMany: {
            args: Prisma.FeatureVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload>[]
          }
          create: {
            args: Prisma.FeatureVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload>
          }
          createMany: {
            args: Prisma.FeatureVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload>[]
          }
          delete: {
            args: Prisma.FeatureVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload>
          }
          update: {
            args: Prisma.FeatureVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload>
          }
          deleteMany: {
            args: Prisma.FeatureVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeatureVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureVotePayload>
          }
          aggregate: {
            args: Prisma.FeatureVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureVote>
          }
          groupBy: {
            args: Prisma.FeatureVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureVoteCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureVoteCountAggregateOutputType> | number
          }
        }
      }
      FeatureComment: {
        payload: Prisma.$FeatureCommentPayload<ExtArgs>
        fields: Prisma.FeatureCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload>
          }
          findFirst: {
            args: Prisma.FeatureCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload>
          }
          findMany: {
            args: Prisma.FeatureCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload>[]
          }
          create: {
            args: Prisma.FeatureCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload>
          }
          createMany: {
            args: Prisma.FeatureCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload>[]
          }
          delete: {
            args: Prisma.FeatureCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload>
          }
          update: {
            args: Prisma.FeatureCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload>
          }
          deleteMany: {
            args: Prisma.FeatureCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeatureCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureCommentPayload>
          }
          aggregate: {
            args: Prisma.FeatureCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureComment>
          }
          groupBy: {
            args: Prisma.FeatureCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCommentCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCommentCountAggregateOutputType> | number
          }
        }
      }
      CommentReaction: {
        payload: Prisma.$CommentReactionPayload<ExtArgs>
        fields: Prisma.CommentReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload>
          }
          findFirst: {
            args: Prisma.CommentReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload>
          }
          findMany: {
            args: Prisma.CommentReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload>[]
          }
          create: {
            args: Prisma.CommentReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload>
          }
          createMany: {
            args: Prisma.CommentReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload>[]
          }
          delete: {
            args: Prisma.CommentReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload>
          }
          update: {
            args: Prisma.CommentReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload>
          }
          deleteMany: {
            args: Prisma.CommentReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentReactionPayload>
          }
          aggregate: {
            args: Prisma.CommentReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentReaction>
          }
          groupBy: {
            args: Prisma.CommentReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentReactionCountArgs<ExtArgs>
            result: $Utils.Optional<CommentReactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    apiKeys: number
    codingSessions: number
    tips: number
    createdFeatures: number
    featureVotes: number
    featureComments: number
    commentReactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    codingSessions?: boolean | UserCountOutputTypeCountCodingSessionsArgs
    tips?: boolean | UserCountOutputTypeCountTipsArgs
    createdFeatures?: boolean | UserCountOutputTypeCountCreatedFeaturesArgs
    featureVotes?: boolean | UserCountOutputTypeCountFeatureVotesArgs
    featureComments?: boolean | UserCountOutputTypeCountFeatureCommentsArgs
    commentReactions?: boolean | UserCountOutputTypeCountCommentReactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCodingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodingSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeatureVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureVoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeatureCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReactionWhereInput
  }


  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    votes: number
    comments: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | FeatureCountOutputTypeCountVotesArgs
    comments?: boolean | FeatureCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureVoteWhereInput
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureCommentWhereInput
  }


  /**
   * Count Type FeatureCommentCountOutputType
   */

  export type FeatureCommentCountOutputType = {
    replies: number
    reactions: number
  }

  export type FeatureCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | FeatureCommentCountOutputTypeCountRepliesArgs
    reactions?: boolean | FeatureCommentCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * FeatureCommentCountOutputType without action
   */
  export type FeatureCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCommentCountOutputType
     */
    select?: FeatureCommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCommentCountOutputType without action
   */
  export type FeatureCommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureCommentWhereInput
  }

  /**
   * FeatureCommentCountOutputType without action
   */
  export type FeatureCommentCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    emailVerified: boolean | null
    image: string | null
    bio: string | null
    theme: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    emailVerified: boolean | null
    image: string | null
    bio: string | null
    theme: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    emailVerified: number
    image: number
    bio: number
    theme: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    bio?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    bio?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    emailVerified?: true
    image?: true
    bio?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    emailVerified: boolean | null
    image: string | null
    bio: string | null
    theme: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    bio?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    codingSessions?: boolean | User$codingSessionsArgs<ExtArgs>
    tips?: boolean | User$tipsArgs<ExtArgs>
    createdFeatures?: boolean | User$createdFeaturesArgs<ExtArgs>
    featureVotes?: boolean | User$featureVotesArgs<ExtArgs>
    featureComments?: boolean | User$featureCommentsArgs<ExtArgs>
    commentReactions?: boolean | User$commentReactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    bio?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    emailVerified?: boolean
    image?: boolean
    bio?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    codingSessions?: boolean | User$codingSessionsArgs<ExtArgs>
    tips?: boolean | User$tipsArgs<ExtArgs>
    createdFeatures?: boolean | User$createdFeaturesArgs<ExtArgs>
    featureVotes?: boolean | User$featureVotesArgs<ExtArgs>
    featureComments?: boolean | User$featureCommentsArgs<ExtArgs>
    commentReactions?: boolean | User$commentReactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      codingSessions: Prisma.$CodingSessionPayload<ExtArgs>[]
      tips: Prisma.$TipPayload<ExtArgs>[]
      createdFeatures: Prisma.$FeaturePayload<ExtArgs>[]
      featureVotes: Prisma.$FeatureVotePayload<ExtArgs>[]
      featureComments: Prisma.$FeatureCommentPayload<ExtArgs>[]
      commentReactions: Prisma.$CommentReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      emailVerified: boolean | null
      image: string | null
      bio: string | null
      theme: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany"> | Null>
    codingSessions<T extends User$codingSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$codingSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "findMany"> | Null>
    tips<T extends User$tipsArgs<ExtArgs> = {}>(args?: Subset<T, User$tipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "findMany"> | Null>
    createdFeatures<T extends User$createdFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdFeaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany"> | Null>
    featureVotes<T extends User$featureVotesArgs<ExtArgs> = {}>(args?: Subset<T, User$featureVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "findMany"> | Null>
    featureComments<T extends User$featureCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$featureCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findMany"> | Null>
    commentReactions<T extends User$commentReactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentReactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly theme: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * User.codingSessions
   */
  export type User$codingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    where?: CodingSessionWhereInput
    orderBy?: CodingSessionOrderByWithRelationInput | CodingSessionOrderByWithRelationInput[]
    cursor?: CodingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodingSessionScalarFieldEnum | CodingSessionScalarFieldEnum[]
  }

  /**
   * User.tips
   */
  export type User$tipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    where?: TipWhereInput
    orderBy?: TipOrderByWithRelationInput | TipOrderByWithRelationInput[]
    cursor?: TipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[]
  }

  /**
   * User.createdFeatures
   */
  export type User$createdFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    cursor?: FeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * User.featureVotes
   */
  export type User$featureVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    where?: FeatureVoteWhereInput
    orderBy?: FeatureVoteOrderByWithRelationInput | FeatureVoteOrderByWithRelationInput[]
    cursor?: FeatureVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureVoteScalarFieldEnum | FeatureVoteScalarFieldEnum[]
  }

  /**
   * User.featureComments
   */
  export type User$featureCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    where?: FeatureCommentWhereInput
    orderBy?: FeatureCommentOrderByWithRelationInput | FeatureCommentOrderByWithRelationInput[]
    cursor?: FeatureCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureCommentScalarFieldEnum | FeatureCommentScalarFieldEnum[]
  }

  /**
   * User.commentReactions
   */
  export type User$commentReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    where?: CommentReactionWhereInput
    orderBy?: CommentReactionOrderByWithRelationInput | CommentReactionOrderByWithRelationInput[]
    cursor?: CommentReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentReactionScalarFieldEnum | CommentReactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */ 
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly token: FieldRef<"Verification", 'String'>
    readonly expires: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    lastUsed: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    lastUsed: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    key: number
    name: number
    lastUsed: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    lastUsed?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    lastUsed?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    lastUsed?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    key: string
    name: string | null
    lastUsed: Date | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    lastUsed?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    lastUsed?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    lastUsed?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string | null
      lastUsed: Date | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
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
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */ 
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly key: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly lastUsed: FieldRef<"ApiKey", 'DateTime'>
    readonly userId: FieldRef<"ApiKey", 'String'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model CodingSession
   */

  export type AggregateCodingSession = {
    _count: CodingSessionCountAggregateOutputType | null
    _min: CodingSessionMinAggregateOutputType | null
    _max: CodingSessionMaxAggregateOutputType | null
  }

  export type CodingSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    description: string | null
    interactionType: string | null
    language: string | null
    codeSnippet: string | null
    explanation: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type CodingSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    description: string | null
    interactionType: string | null
    language: string | null
    codeSnippet: string | null
    explanation: string | null
    startedAt: Date | null
    endedAt: Date | null
  }

  export type CodingSessionCountAggregateOutputType = {
    id: number
    userId: number
    description: number
    interactionType: number
    language: number
    codeSnippet: number
    explanation: number
    metadata: number
    startedAt: number
    endedAt: number
    _all: number
  }


  export type CodingSessionMinAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    interactionType?: true
    language?: true
    codeSnippet?: true
    explanation?: true
    startedAt?: true
    endedAt?: true
  }

  export type CodingSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    interactionType?: true
    language?: true
    codeSnippet?: true
    explanation?: true
    startedAt?: true
    endedAt?: true
  }

  export type CodingSessionCountAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    interactionType?: true
    language?: true
    codeSnippet?: true
    explanation?: true
    metadata?: true
    startedAt?: true
    endedAt?: true
    _all?: true
  }

  export type CodingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodingSession to aggregate.
     */
    where?: CodingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodingSessions to fetch.
     */
    orderBy?: CodingSessionOrderByWithRelationInput | CodingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodingSessions
    **/
    _count?: true | CodingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodingSessionMaxAggregateInputType
  }

  export type GetCodingSessionAggregateType<T extends CodingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCodingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodingSession[P]>
      : GetScalarType<T[P], AggregateCodingSession[P]>
  }




  export type CodingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodingSessionWhereInput
    orderBy?: CodingSessionOrderByWithAggregationInput | CodingSessionOrderByWithAggregationInput[]
    by: CodingSessionScalarFieldEnum[] | CodingSessionScalarFieldEnum
    having?: CodingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodingSessionCountAggregateInputType | true
    _min?: CodingSessionMinAggregateInputType
    _max?: CodingSessionMaxAggregateInputType
  }

  export type CodingSessionGroupByOutputType = {
    id: string
    userId: string
    description: string | null
    interactionType: string
    language: string | null
    codeSnippet: string | null
    explanation: string | null
    metadata: JsonValue | null
    startedAt: Date
    endedAt: Date | null
    _count: CodingSessionCountAggregateOutputType | null
    _min: CodingSessionMinAggregateOutputType | null
    _max: CodingSessionMaxAggregateOutputType | null
  }

  type GetCodingSessionGroupByPayload<T extends CodingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], CodingSessionGroupByOutputType[P]>
        }
      >
    >


  export type CodingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    description?: boolean
    interactionType?: boolean
    language?: boolean
    codeSnippet?: boolean
    explanation?: boolean
    metadata?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codingSession"]>

  export type CodingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    description?: boolean
    interactionType?: boolean
    language?: boolean
    codeSnippet?: boolean
    explanation?: boolean
    metadata?: boolean
    startedAt?: boolean
    endedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codingSession"]>

  export type CodingSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    description?: boolean
    interactionType?: boolean
    language?: boolean
    codeSnippet?: boolean
    explanation?: boolean
    metadata?: boolean
    startedAt?: boolean
    endedAt?: boolean
  }

  export type CodingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CodingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CodingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodingSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      description: string | null
      interactionType: string
      language: string | null
      codeSnippet: string | null
      explanation: string | null
      metadata: Prisma.JsonValue | null
      startedAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["codingSession"]>
    composites: {}
  }

  type CodingSessionGetPayload<S extends boolean | null | undefined | CodingSessionDefaultArgs> = $Result.GetResult<Prisma.$CodingSessionPayload, S>

  type CodingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CodingSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CodingSessionCountAggregateInputType | true
    }

  export interface CodingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodingSession'], meta: { name: 'CodingSession' } }
    /**
     * Find zero or one CodingSession that matches the filter.
     * @param {CodingSessionFindUniqueArgs} args - Arguments to find a CodingSession
     * @example
     * // Get one CodingSession
     * const codingSession = await prisma.codingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodingSessionFindUniqueArgs>(args: SelectSubset<T, CodingSessionFindUniqueArgs<ExtArgs>>): Prisma__CodingSessionClient<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CodingSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CodingSessionFindUniqueOrThrowArgs} args - Arguments to find a CodingSession
     * @example
     * // Get one CodingSession
     * const codingSession = await prisma.codingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, CodingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodingSessionClient<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CodingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodingSessionFindFirstArgs} args - Arguments to find a CodingSession
     * @example
     * // Get one CodingSession
     * const codingSession = await prisma.codingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodingSessionFindFirstArgs>(args?: SelectSubset<T, CodingSessionFindFirstArgs<ExtArgs>>): Prisma__CodingSessionClient<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CodingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodingSessionFindFirstOrThrowArgs} args - Arguments to find a CodingSession
     * @example
     * // Get one CodingSession
     * const codingSession = await prisma.codingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, CodingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodingSessionClient<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CodingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodingSessions
     * const codingSessions = await prisma.codingSession.findMany()
     * 
     * // Get first 10 CodingSessions
     * const codingSessions = await prisma.codingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codingSessionWithIdOnly = await prisma.codingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodingSessionFindManyArgs>(args?: SelectSubset<T, CodingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CodingSession.
     * @param {CodingSessionCreateArgs} args - Arguments to create a CodingSession.
     * @example
     * // Create one CodingSession
     * const CodingSession = await prisma.codingSession.create({
     *   data: {
     *     // ... data to create a CodingSession
     *   }
     * })
     * 
     */
    create<T extends CodingSessionCreateArgs>(args: SelectSubset<T, CodingSessionCreateArgs<ExtArgs>>): Prisma__CodingSessionClient<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CodingSessions.
     * @param {CodingSessionCreateManyArgs} args - Arguments to create many CodingSessions.
     * @example
     * // Create many CodingSessions
     * const codingSession = await prisma.codingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodingSessionCreateManyArgs>(args?: SelectSubset<T, CodingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodingSessions and returns the data saved in the database.
     * @param {CodingSessionCreateManyAndReturnArgs} args - Arguments to create many CodingSessions.
     * @example
     * // Create many CodingSessions
     * const codingSession = await prisma.codingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodingSessions and only return the `id`
     * const codingSessionWithIdOnly = await prisma.codingSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, CodingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CodingSession.
     * @param {CodingSessionDeleteArgs} args - Arguments to delete one CodingSession.
     * @example
     * // Delete one CodingSession
     * const CodingSession = await prisma.codingSession.delete({
     *   where: {
     *     // ... filter to delete one CodingSession
     *   }
     * })
     * 
     */
    delete<T extends CodingSessionDeleteArgs>(args: SelectSubset<T, CodingSessionDeleteArgs<ExtArgs>>): Prisma__CodingSessionClient<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CodingSession.
     * @param {CodingSessionUpdateArgs} args - Arguments to update one CodingSession.
     * @example
     * // Update one CodingSession
     * const codingSession = await prisma.codingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodingSessionUpdateArgs>(args: SelectSubset<T, CodingSessionUpdateArgs<ExtArgs>>): Prisma__CodingSessionClient<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CodingSessions.
     * @param {CodingSessionDeleteManyArgs} args - Arguments to filter CodingSessions to delete.
     * @example
     * // Delete a few CodingSessions
     * const { count } = await prisma.codingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodingSessionDeleteManyArgs>(args?: SelectSubset<T, CodingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodingSessions
     * const codingSession = await prisma.codingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodingSessionUpdateManyArgs>(args: SelectSubset<T, CodingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CodingSession.
     * @param {CodingSessionUpsertArgs} args - Arguments to update or create a CodingSession.
     * @example
     * // Update or create a CodingSession
     * const codingSession = await prisma.codingSession.upsert({
     *   create: {
     *     // ... data to create a CodingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodingSession we want to update
     *   }
     * })
     */
    upsert<T extends CodingSessionUpsertArgs>(args: SelectSubset<T, CodingSessionUpsertArgs<ExtArgs>>): Prisma__CodingSessionClient<$Result.GetResult<Prisma.$CodingSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CodingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodingSessionCountArgs} args - Arguments to filter CodingSessions to count.
     * @example
     * // Count the number of CodingSessions
     * const count = await prisma.codingSession.count({
     *   where: {
     *     // ... the filter for the CodingSessions we want to count
     *   }
     * })
    **/
    count<T extends CodingSessionCountArgs>(
      args?: Subset<T, CodingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodingSessionAggregateArgs>(args: Subset<T, CodingSessionAggregateArgs>): Prisma.PrismaPromise<GetCodingSessionAggregateType<T>>

    /**
     * Group by CodingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodingSessionGroupByArgs} args - Group by arguments.
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
      T extends CodingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodingSessionGroupByArgs['orderBy'] }
        : { orderBy?: CodingSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodingSession model
   */
  readonly fields: CodingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodingSession model
   */ 
  interface CodingSessionFieldRefs {
    readonly id: FieldRef<"CodingSession", 'String'>
    readonly userId: FieldRef<"CodingSession", 'String'>
    readonly description: FieldRef<"CodingSession", 'String'>
    readonly interactionType: FieldRef<"CodingSession", 'String'>
    readonly language: FieldRef<"CodingSession", 'String'>
    readonly codeSnippet: FieldRef<"CodingSession", 'String'>
    readonly explanation: FieldRef<"CodingSession", 'String'>
    readonly metadata: FieldRef<"CodingSession", 'Json'>
    readonly startedAt: FieldRef<"CodingSession", 'DateTime'>
    readonly endedAt: FieldRef<"CodingSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CodingSession findUnique
   */
  export type CodingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CodingSession to fetch.
     */
    where: CodingSessionWhereUniqueInput
  }

  /**
   * CodingSession findUniqueOrThrow
   */
  export type CodingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CodingSession to fetch.
     */
    where: CodingSessionWhereUniqueInput
  }

  /**
   * CodingSession findFirst
   */
  export type CodingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CodingSession to fetch.
     */
    where?: CodingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodingSessions to fetch.
     */
    orderBy?: CodingSessionOrderByWithRelationInput | CodingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodingSessions.
     */
    cursor?: CodingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodingSessions.
     */
    distinct?: CodingSessionScalarFieldEnum | CodingSessionScalarFieldEnum[]
  }

  /**
   * CodingSession findFirstOrThrow
   */
  export type CodingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CodingSession to fetch.
     */
    where?: CodingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodingSessions to fetch.
     */
    orderBy?: CodingSessionOrderByWithRelationInput | CodingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodingSessions.
     */
    cursor?: CodingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodingSessions.
     */
    distinct?: CodingSessionScalarFieldEnum | CodingSessionScalarFieldEnum[]
  }

  /**
   * CodingSession findMany
   */
  export type CodingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * Filter, which CodingSessions to fetch.
     */
    where?: CodingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodingSessions to fetch.
     */
    orderBy?: CodingSessionOrderByWithRelationInput | CodingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodingSessions.
     */
    cursor?: CodingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodingSessions.
     */
    skip?: number
    distinct?: CodingSessionScalarFieldEnum | CodingSessionScalarFieldEnum[]
  }

  /**
   * CodingSession create
   */
  export type CodingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a CodingSession.
     */
    data: XOR<CodingSessionCreateInput, CodingSessionUncheckedCreateInput>
  }

  /**
   * CodingSession createMany
   */
  export type CodingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodingSessions.
     */
    data: CodingSessionCreateManyInput | CodingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodingSession createManyAndReturn
   */
  export type CodingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CodingSessions.
     */
    data: CodingSessionCreateManyInput | CodingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CodingSession update
   */
  export type CodingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a CodingSession.
     */
    data: XOR<CodingSessionUpdateInput, CodingSessionUncheckedUpdateInput>
    /**
     * Choose, which CodingSession to update.
     */
    where: CodingSessionWhereUniqueInput
  }

  /**
   * CodingSession updateMany
   */
  export type CodingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodingSessions.
     */
    data: XOR<CodingSessionUpdateManyMutationInput, CodingSessionUncheckedUpdateManyInput>
    /**
     * Filter which CodingSessions to update
     */
    where?: CodingSessionWhereInput
  }

  /**
   * CodingSession upsert
   */
  export type CodingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the CodingSession to update in case it exists.
     */
    where: CodingSessionWhereUniqueInput
    /**
     * In case the CodingSession found by the `where` argument doesn't exist, create a new CodingSession with this data.
     */
    create: XOR<CodingSessionCreateInput, CodingSessionUncheckedCreateInput>
    /**
     * In case the CodingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodingSessionUpdateInput, CodingSessionUncheckedUpdateInput>
  }

  /**
   * CodingSession delete
   */
  export type CodingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
    /**
     * Filter which CodingSession to delete.
     */
    where: CodingSessionWhereUniqueInput
  }

  /**
   * CodingSession deleteMany
   */
  export type CodingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodingSessions to delete
     */
    where?: CodingSessionWhereInput
  }

  /**
   * CodingSession without action
   */
  export type CodingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodingSession
     */
    select?: CodingSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodingSessionInclude<ExtArgs> | null
  }


  /**
   * Model Tip
   */

  export type AggregateTip = {
    _count: TipCountAggregateOutputType | null
    _min: TipMinAggregateOutputType | null
    _max: TipMaxAggregateOutputType | null
  }

  export type TipMinAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    title: string | null
    explanation: string | null
    createdAt: Date | null
  }

  export type TipMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    content: string | null
    title: string | null
    explanation: string | null
    createdAt: Date | null
  }

  export type TipCountAggregateOutputType = {
    id: number
    userId: number
    content: number
    title: number
    explanation: number
    createdAt: number
    _all: number
  }


  export type TipMinAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    title?: true
    explanation?: true
    createdAt?: true
  }

  export type TipMaxAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    title?: true
    explanation?: true
    createdAt?: true
  }

  export type TipCountAggregateInputType = {
    id?: true
    userId?: true
    content?: true
    title?: true
    explanation?: true
    createdAt?: true
    _all?: true
  }

  export type TipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tip to aggregate.
     */
    where?: TipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tips to fetch.
     */
    orderBy?: TipOrderByWithRelationInput | TipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tips
    **/
    _count?: true | TipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipMaxAggregateInputType
  }

  export type GetTipAggregateType<T extends TipAggregateArgs> = {
        [P in keyof T & keyof AggregateTip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTip[P]>
      : GetScalarType<T[P], AggregateTip[P]>
  }




  export type TipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipWhereInput
    orderBy?: TipOrderByWithAggregationInput | TipOrderByWithAggregationInput[]
    by: TipScalarFieldEnum[] | TipScalarFieldEnum
    having?: TipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipCountAggregateInputType | true
    _min?: TipMinAggregateInputType
    _max?: TipMaxAggregateInputType
  }

  export type TipGroupByOutputType = {
    id: string
    userId: string
    content: string
    title: string | null
    explanation: string | null
    createdAt: Date
    _count: TipCountAggregateOutputType | null
    _min: TipMinAggregateOutputType | null
    _max: TipMaxAggregateOutputType | null
  }

  type GetTipGroupByPayload<T extends TipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipGroupByOutputType[P]>
            : GetScalarType<T[P], TipGroupByOutputType[P]>
        }
      >
    >


  export type TipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    title?: boolean
    explanation?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tip"]>

  export type TipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    content?: boolean
    title?: boolean
    explanation?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tip"]>

  export type TipSelectScalar = {
    id?: boolean
    userId?: boolean
    content?: boolean
    title?: boolean
    explanation?: boolean
    createdAt?: boolean
  }

  export type TipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      content: string
      title: string | null
      explanation: string | null
      createdAt: Date
    }, ExtArgs["result"]["tip"]>
    composites: {}
  }

  type TipGetPayload<S extends boolean | null | undefined | TipDefaultArgs> = $Result.GetResult<Prisma.$TipPayload, S>

  type TipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TipCountAggregateInputType | true
    }

  export interface TipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tip'], meta: { name: 'Tip' } }
    /**
     * Find zero or one Tip that matches the filter.
     * @param {TipFindUniqueArgs} args - Arguments to find a Tip
     * @example
     * // Get one Tip
     * const tip = await prisma.tip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipFindUniqueArgs>(args: SelectSubset<T, TipFindUniqueArgs<ExtArgs>>): Prisma__TipClient<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tip that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TipFindUniqueOrThrowArgs} args - Arguments to find a Tip
     * @example
     * // Get one Tip
     * const tip = await prisma.tip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipFindUniqueOrThrowArgs>(args: SelectSubset<T, TipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipClient<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipFindFirstArgs} args - Arguments to find a Tip
     * @example
     * // Get one Tip
     * const tip = await prisma.tip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipFindFirstArgs>(args?: SelectSubset<T, TipFindFirstArgs<ExtArgs>>): Prisma__TipClient<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipFindFirstOrThrowArgs} args - Arguments to find a Tip
     * @example
     * // Get one Tip
     * const tip = await prisma.tip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipFindFirstOrThrowArgs>(args?: SelectSubset<T, TipFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipClient<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tips
     * const tips = await prisma.tip.findMany()
     * 
     * // Get first 10 Tips
     * const tips = await prisma.tip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipWithIdOnly = await prisma.tip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipFindManyArgs>(args?: SelectSubset<T, TipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tip.
     * @param {TipCreateArgs} args - Arguments to create a Tip.
     * @example
     * // Create one Tip
     * const Tip = await prisma.tip.create({
     *   data: {
     *     // ... data to create a Tip
     *   }
     * })
     * 
     */
    create<T extends TipCreateArgs>(args: SelectSubset<T, TipCreateArgs<ExtArgs>>): Prisma__TipClient<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tips.
     * @param {TipCreateManyArgs} args - Arguments to create many Tips.
     * @example
     * // Create many Tips
     * const tip = await prisma.tip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipCreateManyArgs>(args?: SelectSubset<T, TipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tips and returns the data saved in the database.
     * @param {TipCreateManyAndReturnArgs} args - Arguments to create many Tips.
     * @example
     * // Create many Tips
     * const tip = await prisma.tip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tips and only return the `id`
     * const tipWithIdOnly = await prisma.tip.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipCreateManyAndReturnArgs>(args?: SelectSubset<T, TipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tip.
     * @param {TipDeleteArgs} args - Arguments to delete one Tip.
     * @example
     * // Delete one Tip
     * const Tip = await prisma.tip.delete({
     *   where: {
     *     // ... filter to delete one Tip
     *   }
     * })
     * 
     */
    delete<T extends TipDeleteArgs>(args: SelectSubset<T, TipDeleteArgs<ExtArgs>>): Prisma__TipClient<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tip.
     * @param {TipUpdateArgs} args - Arguments to update one Tip.
     * @example
     * // Update one Tip
     * const tip = await prisma.tip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipUpdateArgs>(args: SelectSubset<T, TipUpdateArgs<ExtArgs>>): Prisma__TipClient<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tips.
     * @param {TipDeleteManyArgs} args - Arguments to filter Tips to delete.
     * @example
     * // Delete a few Tips
     * const { count } = await prisma.tip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipDeleteManyArgs>(args?: SelectSubset<T, TipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tips
     * const tip = await prisma.tip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipUpdateManyArgs>(args: SelectSubset<T, TipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tip.
     * @param {TipUpsertArgs} args - Arguments to update or create a Tip.
     * @example
     * // Update or create a Tip
     * const tip = await prisma.tip.upsert({
     *   create: {
     *     // ... data to create a Tip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tip we want to update
     *   }
     * })
     */
    upsert<T extends TipUpsertArgs>(args: SelectSubset<T, TipUpsertArgs<ExtArgs>>): Prisma__TipClient<$Result.GetResult<Prisma.$TipPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipCountArgs} args - Arguments to filter Tips to count.
     * @example
     * // Count the number of Tips
     * const count = await prisma.tip.count({
     *   where: {
     *     // ... the filter for the Tips we want to count
     *   }
     * })
    **/
    count<T extends TipCountArgs>(
      args?: Subset<T, TipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipAggregateArgs>(args: Subset<T, TipAggregateArgs>): Prisma.PrismaPromise<GetTipAggregateType<T>>

    /**
     * Group by Tip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipGroupByArgs} args - Group by arguments.
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
      T extends TipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipGroupByArgs['orderBy'] }
        : { orderBy?: TipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tip model
   */
  readonly fields: TipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tip model
   */ 
  interface TipFieldRefs {
    readonly id: FieldRef<"Tip", 'String'>
    readonly userId: FieldRef<"Tip", 'String'>
    readonly content: FieldRef<"Tip", 'String'>
    readonly title: FieldRef<"Tip", 'String'>
    readonly explanation: FieldRef<"Tip", 'String'>
    readonly createdAt: FieldRef<"Tip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tip findUnique
   */
  export type TipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * Filter, which Tip to fetch.
     */
    where: TipWhereUniqueInput
  }

  /**
   * Tip findUniqueOrThrow
   */
  export type TipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * Filter, which Tip to fetch.
     */
    where: TipWhereUniqueInput
  }

  /**
   * Tip findFirst
   */
  export type TipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * Filter, which Tip to fetch.
     */
    where?: TipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tips to fetch.
     */
    orderBy?: TipOrderByWithRelationInput | TipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tips.
     */
    cursor?: TipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tips.
     */
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[]
  }

  /**
   * Tip findFirstOrThrow
   */
  export type TipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * Filter, which Tip to fetch.
     */
    where?: TipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tips to fetch.
     */
    orderBy?: TipOrderByWithRelationInput | TipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tips.
     */
    cursor?: TipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tips.
     */
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[]
  }

  /**
   * Tip findMany
   */
  export type TipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * Filter, which Tips to fetch.
     */
    where?: TipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tips to fetch.
     */
    orderBy?: TipOrderByWithRelationInput | TipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tips.
     */
    cursor?: TipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tips.
     */
    skip?: number
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[]
  }

  /**
   * Tip create
   */
  export type TipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * The data needed to create a Tip.
     */
    data: XOR<TipCreateInput, TipUncheckedCreateInput>
  }

  /**
   * Tip createMany
   */
  export type TipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tips.
     */
    data: TipCreateManyInput | TipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tip createManyAndReturn
   */
  export type TipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tips.
     */
    data: TipCreateManyInput | TipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tip update
   */
  export type TipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * The data needed to update a Tip.
     */
    data: XOR<TipUpdateInput, TipUncheckedUpdateInput>
    /**
     * Choose, which Tip to update.
     */
    where: TipWhereUniqueInput
  }

  /**
   * Tip updateMany
   */
  export type TipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tips.
     */
    data: XOR<TipUpdateManyMutationInput, TipUncheckedUpdateManyInput>
    /**
     * Filter which Tips to update
     */
    where?: TipWhereInput
  }

  /**
   * Tip upsert
   */
  export type TipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * The filter to search for the Tip to update in case it exists.
     */
    where: TipWhereUniqueInput
    /**
     * In case the Tip found by the `where` argument doesn't exist, create a new Tip with this data.
     */
    create: XOR<TipCreateInput, TipUncheckedCreateInput>
    /**
     * In case the Tip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipUpdateInput, TipUncheckedUpdateInput>
  }

  /**
   * Tip delete
   */
  export type TipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
    /**
     * Filter which Tip to delete.
     */
    where: TipWhereUniqueInput
  }

  /**
   * Tip deleteMany
   */
  export type TipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tips to delete
     */
    where?: TipWhereInput
  }

  /**
   * Tip without action
   */
  export type TipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tip
     */
    select?: TipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.FeatureStatus | null
    tag: $Enums.FeatureTag | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.FeatureStatus | null
    tag: $Enums.FeatureTag | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    tag: number
    createdAt: number
    updatedAt: number
    createdByUserId: number
    _all: number
  }


  export type FeatureMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    tag?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.FeatureStatus
    tag: $Enums.FeatureTag
    createdAt: Date
    updatedAt: Date
    createdByUserId: string | null
    _count: FeatureCountAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    createdBy?: boolean | Feature$createdByArgs<ExtArgs>
    votes?: boolean | Feature$votesArgs<ExtArgs>
    comments?: boolean | Feature$commentsArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    createdBy?: boolean | Feature$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    tag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
  }

  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Feature$createdByArgs<ExtArgs>
    votes?: boolean | Feature$votesArgs<ExtArgs>
    comments?: boolean | Feature$commentsArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Feature$createdByArgs<ExtArgs>
  }

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      votes: Prisma.$FeatureVotePayload<ExtArgs>[]
      comments: Prisma.$FeatureCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.FeatureStatus
      tag: $Enums.FeatureTag
      createdAt: Date
      updatedAt: Date
      createdByUserId: string | null
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
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
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Feature$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Feature$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    votes<T extends Feature$votesArgs<ExtArgs> = {}>(args?: Subset<T, Feature$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "findMany"> | Null>
    comments<T extends Feature$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Feature$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feature model
   */ 
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'String'>
    readonly title: FieldRef<"Feature", 'String'>
    readonly description: FieldRef<"Feature", 'String'>
    readonly status: FieldRef<"Feature", 'FeatureStatus'>
    readonly tag: FieldRef<"Feature", 'FeatureTag'>
    readonly createdAt: FieldRef<"Feature", 'DateTime'>
    readonly updatedAt: FieldRef<"Feature", 'DateTime'>
    readonly createdByUserId: FieldRef<"Feature", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature createManyAndReturn
   */
  export type FeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
  }

  /**
   * Feature.createdBy
   */
  export type Feature$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Feature.votes
   */
  export type Feature$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    where?: FeatureVoteWhereInput
    orderBy?: FeatureVoteOrderByWithRelationInput | FeatureVoteOrderByWithRelationInput[]
    cursor?: FeatureVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureVoteScalarFieldEnum | FeatureVoteScalarFieldEnum[]
  }

  /**
   * Feature.comments
   */
  export type Feature$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    where?: FeatureCommentWhereInput
    orderBy?: FeatureCommentOrderByWithRelationInput | FeatureCommentOrderByWithRelationInput[]
    cursor?: FeatureCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureCommentScalarFieldEnum | FeatureCommentScalarFieldEnum[]
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model FeatureVote
   */

  export type AggregateFeatureVote = {
    _count: FeatureVoteCountAggregateOutputType | null
    _min: FeatureVoteMinAggregateOutputType | null
    _max: FeatureVoteMaxAggregateOutputType | null
  }

  export type FeatureVoteMinAggregateOutputType = {
    id: string | null
    featureId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FeatureVoteMaxAggregateOutputType = {
    id: string | null
    featureId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FeatureVoteCountAggregateOutputType = {
    id: number
    featureId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type FeatureVoteMinAggregateInputType = {
    id?: true
    featureId?: true
    userId?: true
    createdAt?: true
  }

  export type FeatureVoteMaxAggregateInputType = {
    id?: true
    featureId?: true
    userId?: true
    createdAt?: true
  }

  export type FeatureVoteCountAggregateInputType = {
    id?: true
    featureId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type FeatureVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureVote to aggregate.
     */
    where?: FeatureVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureVotes to fetch.
     */
    orderBy?: FeatureVoteOrderByWithRelationInput | FeatureVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureVotes
    **/
    _count?: true | FeatureVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureVoteMaxAggregateInputType
  }

  export type GetFeatureVoteAggregateType<T extends FeatureVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureVote[P]>
      : GetScalarType<T[P], AggregateFeatureVote[P]>
  }




  export type FeatureVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureVoteWhereInput
    orderBy?: FeatureVoteOrderByWithAggregationInput | FeatureVoteOrderByWithAggregationInput[]
    by: FeatureVoteScalarFieldEnum[] | FeatureVoteScalarFieldEnum
    having?: FeatureVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureVoteCountAggregateInputType | true
    _min?: FeatureVoteMinAggregateInputType
    _max?: FeatureVoteMaxAggregateInputType
  }

  export type FeatureVoteGroupByOutputType = {
    id: string
    featureId: string
    userId: string
    createdAt: Date
    _count: FeatureVoteCountAggregateOutputType | null
    _min: FeatureVoteMinAggregateOutputType | null
    _max: FeatureVoteMaxAggregateOutputType | null
  }

  type GetFeatureVoteGroupByPayload<T extends FeatureVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureVoteGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureVoteGroupByOutputType[P]>
        }
      >
    >


  export type FeatureVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    userId?: boolean
    createdAt?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureVote"]>

  export type FeatureVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    userId?: boolean
    createdAt?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureVote"]>

  export type FeatureVoteSelectScalar = {
    id?: boolean
    featureId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type FeatureVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeatureVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeatureVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureVote"
    objects: {
      feature: Prisma.$FeaturePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      featureId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["featureVote"]>
    composites: {}
  }

  type FeatureVoteGetPayload<S extends boolean | null | undefined | FeatureVoteDefaultArgs> = $Result.GetResult<Prisma.$FeatureVotePayload, S>

  type FeatureVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeatureVoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeatureVoteCountAggregateInputType | true
    }

  export interface FeatureVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureVote'], meta: { name: 'FeatureVote' } }
    /**
     * Find zero or one FeatureVote that matches the filter.
     * @param {FeatureVoteFindUniqueArgs} args - Arguments to find a FeatureVote
     * @example
     * // Get one FeatureVote
     * const featureVote = await prisma.featureVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureVoteFindUniqueArgs>(args: SelectSubset<T, FeatureVoteFindUniqueArgs<ExtArgs>>): Prisma__FeatureVoteClient<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FeatureVote that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FeatureVoteFindUniqueOrThrowArgs} args - Arguments to find a FeatureVote
     * @example
     * // Get one FeatureVote
     * const featureVote = await prisma.featureVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureVoteClient<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FeatureVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureVoteFindFirstArgs} args - Arguments to find a FeatureVote
     * @example
     * // Get one FeatureVote
     * const featureVote = await prisma.featureVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureVoteFindFirstArgs>(args?: SelectSubset<T, FeatureVoteFindFirstArgs<ExtArgs>>): Prisma__FeatureVoteClient<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FeatureVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureVoteFindFirstOrThrowArgs} args - Arguments to find a FeatureVote
     * @example
     * // Get one FeatureVote
     * const featureVote = await prisma.featureVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureVoteClient<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FeatureVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureVotes
     * const featureVotes = await prisma.featureVote.findMany()
     * 
     * // Get first 10 FeatureVotes
     * const featureVotes = await prisma.featureVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureVoteWithIdOnly = await prisma.featureVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureVoteFindManyArgs>(args?: SelectSubset<T, FeatureVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FeatureVote.
     * @param {FeatureVoteCreateArgs} args - Arguments to create a FeatureVote.
     * @example
     * // Create one FeatureVote
     * const FeatureVote = await prisma.featureVote.create({
     *   data: {
     *     // ... data to create a FeatureVote
     *   }
     * })
     * 
     */
    create<T extends FeatureVoteCreateArgs>(args: SelectSubset<T, FeatureVoteCreateArgs<ExtArgs>>): Prisma__FeatureVoteClient<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FeatureVotes.
     * @param {FeatureVoteCreateManyArgs} args - Arguments to create many FeatureVotes.
     * @example
     * // Create many FeatureVotes
     * const featureVote = await prisma.featureVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureVoteCreateManyArgs>(args?: SelectSubset<T, FeatureVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeatureVotes and returns the data saved in the database.
     * @param {FeatureVoteCreateManyAndReturnArgs} args - Arguments to create many FeatureVotes.
     * @example
     * // Create many FeatureVotes
     * const featureVote = await prisma.featureVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeatureVotes and only return the `id`
     * const featureVoteWithIdOnly = await prisma.featureVote.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FeatureVote.
     * @param {FeatureVoteDeleteArgs} args - Arguments to delete one FeatureVote.
     * @example
     * // Delete one FeatureVote
     * const FeatureVote = await prisma.featureVote.delete({
     *   where: {
     *     // ... filter to delete one FeatureVote
     *   }
     * })
     * 
     */
    delete<T extends FeatureVoteDeleteArgs>(args: SelectSubset<T, FeatureVoteDeleteArgs<ExtArgs>>): Prisma__FeatureVoteClient<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FeatureVote.
     * @param {FeatureVoteUpdateArgs} args - Arguments to update one FeatureVote.
     * @example
     * // Update one FeatureVote
     * const featureVote = await prisma.featureVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureVoteUpdateArgs>(args: SelectSubset<T, FeatureVoteUpdateArgs<ExtArgs>>): Prisma__FeatureVoteClient<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FeatureVotes.
     * @param {FeatureVoteDeleteManyArgs} args - Arguments to filter FeatureVotes to delete.
     * @example
     * // Delete a few FeatureVotes
     * const { count } = await prisma.featureVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureVoteDeleteManyArgs>(args?: SelectSubset<T, FeatureVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureVotes
     * const featureVote = await prisma.featureVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureVoteUpdateManyArgs>(args: SelectSubset<T, FeatureVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeatureVote.
     * @param {FeatureVoteUpsertArgs} args - Arguments to update or create a FeatureVote.
     * @example
     * // Update or create a FeatureVote
     * const featureVote = await prisma.featureVote.upsert({
     *   create: {
     *     // ... data to create a FeatureVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureVote we want to update
     *   }
     * })
     */
    upsert<T extends FeatureVoteUpsertArgs>(args: SelectSubset<T, FeatureVoteUpsertArgs<ExtArgs>>): Prisma__FeatureVoteClient<$Result.GetResult<Prisma.$FeatureVotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FeatureVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureVoteCountArgs} args - Arguments to filter FeatureVotes to count.
     * @example
     * // Count the number of FeatureVotes
     * const count = await prisma.featureVote.count({
     *   where: {
     *     // ... the filter for the FeatureVotes we want to count
     *   }
     * })
    **/
    count<T extends FeatureVoteCountArgs>(
      args?: Subset<T, FeatureVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureVoteAggregateArgs>(args: Subset<T, FeatureVoteAggregateArgs>): Prisma.PrismaPromise<GetFeatureVoteAggregateType<T>>

    /**
     * Group by FeatureVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureVoteGroupByArgs} args - Group by arguments.
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
      T extends FeatureVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureVoteGroupByArgs['orderBy'] }
        : { orderBy?: FeatureVoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureVote model
   */
  readonly fields: FeatureVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeatureVote model
   */ 
  interface FeatureVoteFieldRefs {
    readonly id: FieldRef<"FeatureVote", 'String'>
    readonly featureId: FieldRef<"FeatureVote", 'String'>
    readonly userId: FieldRef<"FeatureVote", 'String'>
    readonly createdAt: FieldRef<"FeatureVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeatureVote findUnique
   */
  export type FeatureVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureVote to fetch.
     */
    where: FeatureVoteWhereUniqueInput
  }

  /**
   * FeatureVote findUniqueOrThrow
   */
  export type FeatureVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureVote to fetch.
     */
    where: FeatureVoteWhereUniqueInput
  }

  /**
   * FeatureVote findFirst
   */
  export type FeatureVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureVote to fetch.
     */
    where?: FeatureVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureVotes to fetch.
     */
    orderBy?: FeatureVoteOrderByWithRelationInput | FeatureVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureVotes.
     */
    cursor?: FeatureVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureVotes.
     */
    distinct?: FeatureVoteScalarFieldEnum | FeatureVoteScalarFieldEnum[]
  }

  /**
   * FeatureVote findFirstOrThrow
   */
  export type FeatureVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureVote to fetch.
     */
    where?: FeatureVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureVotes to fetch.
     */
    orderBy?: FeatureVoteOrderByWithRelationInput | FeatureVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureVotes.
     */
    cursor?: FeatureVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureVotes.
     */
    distinct?: FeatureVoteScalarFieldEnum | FeatureVoteScalarFieldEnum[]
  }

  /**
   * FeatureVote findMany
   */
  export type FeatureVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * Filter, which FeatureVotes to fetch.
     */
    where?: FeatureVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureVotes to fetch.
     */
    orderBy?: FeatureVoteOrderByWithRelationInput | FeatureVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureVotes.
     */
    cursor?: FeatureVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureVotes.
     */
    skip?: number
    distinct?: FeatureVoteScalarFieldEnum | FeatureVoteScalarFieldEnum[]
  }

  /**
   * FeatureVote create
   */
  export type FeatureVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureVote.
     */
    data: XOR<FeatureVoteCreateInput, FeatureVoteUncheckedCreateInput>
  }

  /**
   * FeatureVote createMany
   */
  export type FeatureVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureVotes.
     */
    data: FeatureVoteCreateManyInput | FeatureVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureVote createManyAndReturn
   */
  export type FeatureVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FeatureVotes.
     */
    data: FeatureVoteCreateManyInput | FeatureVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureVote update
   */
  export type FeatureVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureVote.
     */
    data: XOR<FeatureVoteUpdateInput, FeatureVoteUncheckedUpdateInput>
    /**
     * Choose, which FeatureVote to update.
     */
    where: FeatureVoteWhereUniqueInput
  }

  /**
   * FeatureVote updateMany
   */
  export type FeatureVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureVotes.
     */
    data: XOR<FeatureVoteUpdateManyMutationInput, FeatureVoteUncheckedUpdateManyInput>
    /**
     * Filter which FeatureVotes to update
     */
    where?: FeatureVoteWhereInput
  }

  /**
   * FeatureVote upsert
   */
  export type FeatureVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureVote to update in case it exists.
     */
    where: FeatureVoteWhereUniqueInput
    /**
     * In case the FeatureVote found by the `where` argument doesn't exist, create a new FeatureVote with this data.
     */
    create: XOR<FeatureVoteCreateInput, FeatureVoteUncheckedCreateInput>
    /**
     * In case the FeatureVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureVoteUpdateInput, FeatureVoteUncheckedUpdateInput>
  }

  /**
   * FeatureVote delete
   */
  export type FeatureVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
    /**
     * Filter which FeatureVote to delete.
     */
    where: FeatureVoteWhereUniqueInput
  }

  /**
   * FeatureVote deleteMany
   */
  export type FeatureVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureVotes to delete
     */
    where?: FeatureVoteWhereInput
  }

  /**
   * FeatureVote without action
   */
  export type FeatureVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureVote
     */
    select?: FeatureVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureVoteInclude<ExtArgs> | null
  }


  /**
   * Model FeatureComment
   */

  export type AggregateFeatureComment = {
    _count: FeatureCommentCountAggregateOutputType | null
    _min: FeatureCommentMinAggregateOutputType | null
    _max: FeatureCommentMaxAggregateOutputType | null
  }

  export type FeatureCommentMinAggregateOutputType = {
    id: string | null
    featureId: string | null
    userId: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentCommentId: string | null
  }

  export type FeatureCommentMaxAggregateOutputType = {
    id: string | null
    featureId: string | null
    userId: string | null
    body: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentCommentId: string | null
  }

  export type FeatureCommentCountAggregateOutputType = {
    id: number
    featureId: number
    userId: number
    body: number
    createdAt: number
    updatedAt: number
    parentCommentId: number
    _all: number
  }


  export type FeatureCommentMinAggregateInputType = {
    id?: true
    featureId?: true
    userId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    parentCommentId?: true
  }

  export type FeatureCommentMaxAggregateInputType = {
    id?: true
    featureId?: true
    userId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    parentCommentId?: true
  }

  export type FeatureCommentCountAggregateInputType = {
    id?: true
    featureId?: true
    userId?: true
    body?: true
    createdAt?: true
    updatedAt?: true
    parentCommentId?: true
    _all?: true
  }

  export type FeatureCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureComment to aggregate.
     */
    where?: FeatureCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureComments to fetch.
     */
    orderBy?: FeatureCommentOrderByWithRelationInput | FeatureCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureComments
    **/
    _count?: true | FeatureCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureCommentMaxAggregateInputType
  }

  export type GetFeatureCommentAggregateType<T extends FeatureCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureComment[P]>
      : GetScalarType<T[P], AggregateFeatureComment[P]>
  }




  export type FeatureCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureCommentWhereInput
    orderBy?: FeatureCommentOrderByWithAggregationInput | FeatureCommentOrderByWithAggregationInput[]
    by: FeatureCommentScalarFieldEnum[] | FeatureCommentScalarFieldEnum
    having?: FeatureCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCommentCountAggregateInputType | true
    _min?: FeatureCommentMinAggregateInputType
    _max?: FeatureCommentMaxAggregateInputType
  }

  export type FeatureCommentGroupByOutputType = {
    id: string
    featureId: string
    userId: string
    body: string
    createdAt: Date
    updatedAt: Date
    parentCommentId: string | null
    _count: FeatureCommentCountAggregateOutputType | null
    _min: FeatureCommentMinAggregateOutputType | null
    _max: FeatureCommentMaxAggregateOutputType | null
  }

  type GetFeatureCommentGroupByPayload<T extends FeatureCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureCommentGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureCommentGroupByOutputType[P]>
        }
      >
    >


  export type FeatureCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    userId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentCommentId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | FeatureComment$parentCommentArgs<ExtArgs>
    replies?: boolean | FeatureComment$repliesArgs<ExtArgs>
    reactions?: boolean | FeatureComment$reactionsArgs<ExtArgs>
    _count?: boolean | FeatureCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureComment"]>

  export type FeatureCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    featureId?: boolean
    userId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentCommentId?: boolean
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | FeatureComment$parentCommentArgs<ExtArgs>
  }, ExtArgs["result"]["featureComment"]>

  export type FeatureCommentSelectScalar = {
    id?: boolean
    featureId?: boolean
    userId?: boolean
    body?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentCommentId?: boolean
  }

  export type FeatureCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | FeatureComment$parentCommentArgs<ExtArgs>
    replies?: boolean | FeatureComment$repliesArgs<ExtArgs>
    reactions?: boolean | FeatureComment$reactionsArgs<ExtArgs>
    _count?: boolean | FeatureCommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parentComment?: boolean | FeatureComment$parentCommentArgs<ExtArgs>
  }

  export type $FeatureCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureComment"
    objects: {
      feature: Prisma.$FeaturePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      parentComment: Prisma.$FeatureCommentPayload<ExtArgs> | null
      replies: Prisma.$FeatureCommentPayload<ExtArgs>[]
      reactions: Prisma.$CommentReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      featureId: string
      userId: string
      body: string
      createdAt: Date
      updatedAt: Date
      parentCommentId: string | null
    }, ExtArgs["result"]["featureComment"]>
    composites: {}
  }

  type FeatureCommentGetPayload<S extends boolean | null | undefined | FeatureCommentDefaultArgs> = $Result.GetResult<Prisma.$FeatureCommentPayload, S>

  type FeatureCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeatureCommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeatureCommentCountAggregateInputType | true
    }

  export interface FeatureCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureComment'], meta: { name: 'FeatureComment' } }
    /**
     * Find zero or one FeatureComment that matches the filter.
     * @param {FeatureCommentFindUniqueArgs} args - Arguments to find a FeatureComment
     * @example
     * // Get one FeatureComment
     * const featureComment = await prisma.featureComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureCommentFindUniqueArgs>(args: SelectSubset<T, FeatureCommentFindUniqueArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FeatureComment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FeatureCommentFindUniqueOrThrowArgs} args - Arguments to find a FeatureComment
     * @example
     * // Get one FeatureComment
     * const featureComment = await prisma.featureComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FeatureComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCommentFindFirstArgs} args - Arguments to find a FeatureComment
     * @example
     * // Get one FeatureComment
     * const featureComment = await prisma.featureComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureCommentFindFirstArgs>(args?: SelectSubset<T, FeatureCommentFindFirstArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FeatureComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCommentFindFirstOrThrowArgs} args - Arguments to find a FeatureComment
     * @example
     * // Get one FeatureComment
     * const featureComment = await prisma.featureComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FeatureComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureComments
     * const featureComments = await prisma.featureComment.findMany()
     * 
     * // Get first 10 FeatureComments
     * const featureComments = await prisma.featureComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureCommentWithIdOnly = await prisma.featureComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureCommentFindManyArgs>(args?: SelectSubset<T, FeatureCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FeatureComment.
     * @param {FeatureCommentCreateArgs} args - Arguments to create a FeatureComment.
     * @example
     * // Create one FeatureComment
     * const FeatureComment = await prisma.featureComment.create({
     *   data: {
     *     // ... data to create a FeatureComment
     *   }
     * })
     * 
     */
    create<T extends FeatureCommentCreateArgs>(args: SelectSubset<T, FeatureCommentCreateArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FeatureComments.
     * @param {FeatureCommentCreateManyArgs} args - Arguments to create many FeatureComments.
     * @example
     * // Create many FeatureComments
     * const featureComment = await prisma.featureComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCommentCreateManyArgs>(args?: SelectSubset<T, FeatureCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeatureComments and returns the data saved in the database.
     * @param {FeatureCommentCreateManyAndReturnArgs} args - Arguments to create many FeatureComments.
     * @example
     * // Create many FeatureComments
     * const featureComment = await prisma.featureComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeatureComments and only return the `id`
     * const featureCommentWithIdOnly = await prisma.featureComment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FeatureComment.
     * @param {FeatureCommentDeleteArgs} args - Arguments to delete one FeatureComment.
     * @example
     * // Delete one FeatureComment
     * const FeatureComment = await prisma.featureComment.delete({
     *   where: {
     *     // ... filter to delete one FeatureComment
     *   }
     * })
     * 
     */
    delete<T extends FeatureCommentDeleteArgs>(args: SelectSubset<T, FeatureCommentDeleteArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FeatureComment.
     * @param {FeatureCommentUpdateArgs} args - Arguments to update one FeatureComment.
     * @example
     * // Update one FeatureComment
     * const featureComment = await prisma.featureComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureCommentUpdateArgs>(args: SelectSubset<T, FeatureCommentUpdateArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FeatureComments.
     * @param {FeatureCommentDeleteManyArgs} args - Arguments to filter FeatureComments to delete.
     * @example
     * // Delete a few FeatureComments
     * const { count } = await prisma.featureComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureCommentDeleteManyArgs>(args?: SelectSubset<T, FeatureCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureComments
     * const featureComment = await prisma.featureComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureCommentUpdateManyArgs>(args: SelectSubset<T, FeatureCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeatureComment.
     * @param {FeatureCommentUpsertArgs} args - Arguments to update or create a FeatureComment.
     * @example
     * // Update or create a FeatureComment
     * const featureComment = await prisma.featureComment.upsert({
     *   create: {
     *     // ... data to create a FeatureComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureComment we want to update
     *   }
     * })
     */
    upsert<T extends FeatureCommentUpsertArgs>(args: SelectSubset<T, FeatureCommentUpsertArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FeatureComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCommentCountArgs} args - Arguments to filter FeatureComments to count.
     * @example
     * // Count the number of FeatureComments
     * const count = await prisma.featureComment.count({
     *   where: {
     *     // ... the filter for the FeatureComments we want to count
     *   }
     * })
    **/
    count<T extends FeatureCommentCountArgs>(
      args?: Subset<T, FeatureCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureCommentAggregateArgs>(args: Subset<T, FeatureCommentAggregateArgs>): Prisma.PrismaPromise<GetFeatureCommentAggregateType<T>>

    /**
     * Group by FeatureComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCommentGroupByArgs} args - Group by arguments.
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
      T extends FeatureCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureCommentGroupByArgs['orderBy'] }
        : { orderBy?: FeatureCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureComment model
   */
  readonly fields: FeatureCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    parentComment<T extends FeatureComment$parentCommentArgs<ExtArgs> = {}>(args?: Subset<T, FeatureComment$parentCommentArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    replies<T extends FeatureComment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, FeatureComment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findMany"> | Null>
    reactions<T extends FeatureComment$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, FeatureComment$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeatureComment model
   */ 
  interface FeatureCommentFieldRefs {
    readonly id: FieldRef<"FeatureComment", 'String'>
    readonly featureId: FieldRef<"FeatureComment", 'String'>
    readonly userId: FieldRef<"FeatureComment", 'String'>
    readonly body: FieldRef<"FeatureComment", 'String'>
    readonly createdAt: FieldRef<"FeatureComment", 'DateTime'>
    readonly updatedAt: FieldRef<"FeatureComment", 'DateTime'>
    readonly parentCommentId: FieldRef<"FeatureComment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeatureComment findUnique
   */
  export type FeatureCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * Filter, which FeatureComment to fetch.
     */
    where: FeatureCommentWhereUniqueInput
  }

  /**
   * FeatureComment findUniqueOrThrow
   */
  export type FeatureCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * Filter, which FeatureComment to fetch.
     */
    where: FeatureCommentWhereUniqueInput
  }

  /**
   * FeatureComment findFirst
   */
  export type FeatureCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * Filter, which FeatureComment to fetch.
     */
    where?: FeatureCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureComments to fetch.
     */
    orderBy?: FeatureCommentOrderByWithRelationInput | FeatureCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureComments.
     */
    cursor?: FeatureCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureComments.
     */
    distinct?: FeatureCommentScalarFieldEnum | FeatureCommentScalarFieldEnum[]
  }

  /**
   * FeatureComment findFirstOrThrow
   */
  export type FeatureCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * Filter, which FeatureComment to fetch.
     */
    where?: FeatureCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureComments to fetch.
     */
    orderBy?: FeatureCommentOrderByWithRelationInput | FeatureCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureComments.
     */
    cursor?: FeatureCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureComments.
     */
    distinct?: FeatureCommentScalarFieldEnum | FeatureCommentScalarFieldEnum[]
  }

  /**
   * FeatureComment findMany
   */
  export type FeatureCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * Filter, which FeatureComments to fetch.
     */
    where?: FeatureCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureComments to fetch.
     */
    orderBy?: FeatureCommentOrderByWithRelationInput | FeatureCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureComments.
     */
    cursor?: FeatureCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureComments.
     */
    skip?: number
    distinct?: FeatureCommentScalarFieldEnum | FeatureCommentScalarFieldEnum[]
  }

  /**
   * FeatureComment create
   */
  export type FeatureCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureComment.
     */
    data: XOR<FeatureCommentCreateInput, FeatureCommentUncheckedCreateInput>
  }

  /**
   * FeatureComment createMany
   */
  export type FeatureCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureComments.
     */
    data: FeatureCommentCreateManyInput | FeatureCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureComment createManyAndReturn
   */
  export type FeatureCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FeatureComments.
     */
    data: FeatureCommentCreateManyInput | FeatureCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeatureComment update
   */
  export type FeatureCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureComment.
     */
    data: XOR<FeatureCommentUpdateInput, FeatureCommentUncheckedUpdateInput>
    /**
     * Choose, which FeatureComment to update.
     */
    where: FeatureCommentWhereUniqueInput
  }

  /**
   * FeatureComment updateMany
   */
  export type FeatureCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureComments.
     */
    data: XOR<FeatureCommentUpdateManyMutationInput, FeatureCommentUncheckedUpdateManyInput>
    /**
     * Filter which FeatureComments to update
     */
    where?: FeatureCommentWhereInput
  }

  /**
   * FeatureComment upsert
   */
  export type FeatureCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureComment to update in case it exists.
     */
    where: FeatureCommentWhereUniqueInput
    /**
     * In case the FeatureComment found by the `where` argument doesn't exist, create a new FeatureComment with this data.
     */
    create: XOR<FeatureCommentCreateInput, FeatureCommentUncheckedCreateInput>
    /**
     * In case the FeatureComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureCommentUpdateInput, FeatureCommentUncheckedUpdateInput>
  }

  /**
   * FeatureComment delete
   */
  export type FeatureCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    /**
     * Filter which FeatureComment to delete.
     */
    where: FeatureCommentWhereUniqueInput
  }

  /**
   * FeatureComment deleteMany
   */
  export type FeatureCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureComments to delete
     */
    where?: FeatureCommentWhereInput
  }

  /**
   * FeatureComment.parentComment
   */
  export type FeatureComment$parentCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    where?: FeatureCommentWhereInput
  }

  /**
   * FeatureComment.replies
   */
  export type FeatureComment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
    where?: FeatureCommentWhereInput
    orderBy?: FeatureCommentOrderByWithRelationInput | FeatureCommentOrderByWithRelationInput[]
    cursor?: FeatureCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureCommentScalarFieldEnum | FeatureCommentScalarFieldEnum[]
  }

  /**
   * FeatureComment.reactions
   */
  export type FeatureComment$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    where?: CommentReactionWhereInput
    orderBy?: CommentReactionOrderByWithRelationInput | CommentReactionOrderByWithRelationInput[]
    cursor?: CommentReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentReactionScalarFieldEnum | CommentReactionScalarFieldEnum[]
  }

  /**
   * FeatureComment without action
   */
  export type FeatureCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureComment
     */
    select?: FeatureCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureCommentInclude<ExtArgs> | null
  }


  /**
   * Model CommentReaction
   */

  export type AggregateCommentReaction = {
    _count: CommentReactionCountAggregateOutputType | null
    _min: CommentReactionMinAggregateOutputType | null
    _max: CommentReactionMaxAggregateOutputType | null
  }

  export type CommentReactionMinAggregateOutputType = {
    id: string | null
    commentId: string | null
    userId: string | null
    emoji: string | null
    createdAt: Date | null
  }

  export type CommentReactionMaxAggregateOutputType = {
    id: string | null
    commentId: string | null
    userId: string | null
    emoji: string | null
    createdAt: Date | null
  }

  export type CommentReactionCountAggregateOutputType = {
    id: number
    commentId: number
    userId: number
    emoji: number
    createdAt: number
    _all: number
  }


  export type CommentReactionMinAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    emoji?: true
    createdAt?: true
  }

  export type CommentReactionMaxAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    emoji?: true
    createdAt?: true
  }

  export type CommentReactionCountAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
    emoji?: true
    createdAt?: true
    _all?: true
  }

  export type CommentReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReaction to aggregate.
     */
    where?: CommentReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReactions to fetch.
     */
    orderBy?: CommentReactionOrderByWithRelationInput | CommentReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentReactions
    **/
    _count?: true | CommentReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentReactionMaxAggregateInputType
  }

  export type GetCommentReactionAggregateType<T extends CommentReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentReaction[P]>
      : GetScalarType<T[P], AggregateCommentReaction[P]>
  }




  export type CommentReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentReactionWhereInput
    orderBy?: CommentReactionOrderByWithAggregationInput | CommentReactionOrderByWithAggregationInput[]
    by: CommentReactionScalarFieldEnum[] | CommentReactionScalarFieldEnum
    having?: CommentReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentReactionCountAggregateInputType | true
    _min?: CommentReactionMinAggregateInputType
    _max?: CommentReactionMaxAggregateInputType
  }

  export type CommentReactionGroupByOutputType = {
    id: string
    commentId: string
    userId: string
    emoji: string
    createdAt: Date
    _count: CommentReactionCountAggregateOutputType | null
    _min: CommentReactionMinAggregateOutputType | null
    _max: CommentReactionMaxAggregateOutputType | null
  }

  type GetCommentReactionGroupByPayload<T extends CommentReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentReactionGroupByOutputType[P]>
            : GetScalarType<T[P], CommentReactionGroupByOutputType[P]>
        }
      >
    >


  export type CommentReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    emoji?: boolean
    createdAt?: boolean
    comment?: boolean | FeatureCommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReaction"]>

  export type CommentReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    userId?: boolean
    emoji?: boolean
    createdAt?: boolean
    comment?: boolean | FeatureCommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentReaction"]>

  export type CommentReactionSelectScalar = {
    id?: boolean
    commentId?: boolean
    userId?: boolean
    emoji?: boolean
    createdAt?: boolean
  }

  export type CommentReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | FeatureCommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | FeatureCommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentReaction"
    objects: {
      comment: Prisma.$FeatureCommentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      commentId: string
      userId: string
      emoji: string
      createdAt: Date
    }, ExtArgs["result"]["commentReaction"]>
    composites: {}
  }

  type CommentReactionGetPayload<S extends boolean | null | undefined | CommentReactionDefaultArgs> = $Result.GetResult<Prisma.$CommentReactionPayload, S>

  type CommentReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentReactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentReactionCountAggregateInputType | true
    }

  export interface CommentReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentReaction'], meta: { name: 'CommentReaction' } }
    /**
     * Find zero or one CommentReaction that matches the filter.
     * @param {CommentReactionFindUniqueArgs} args - Arguments to find a CommentReaction
     * @example
     * // Get one CommentReaction
     * const commentReaction = await prisma.commentReaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentReactionFindUniqueArgs>(args: SelectSubset<T, CommentReactionFindUniqueArgs<ExtArgs>>): Prisma__CommentReactionClient<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CommentReaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentReactionFindUniqueOrThrowArgs} args - Arguments to find a CommentReaction
     * @example
     * // Get one CommentReaction
     * const commentReaction = await prisma.commentReaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentReactionClient<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CommentReaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionFindFirstArgs} args - Arguments to find a CommentReaction
     * @example
     * // Get one CommentReaction
     * const commentReaction = await prisma.commentReaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentReactionFindFirstArgs>(args?: SelectSubset<T, CommentReactionFindFirstArgs<ExtArgs>>): Prisma__CommentReactionClient<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CommentReaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionFindFirstOrThrowArgs} args - Arguments to find a CommentReaction
     * @example
     * // Get one CommentReaction
     * const commentReaction = await prisma.commentReaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentReactionClient<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CommentReactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentReactions
     * const commentReactions = await prisma.commentReaction.findMany()
     * 
     * // Get first 10 CommentReactions
     * const commentReactions = await prisma.commentReaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentReactionWithIdOnly = await prisma.commentReaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentReactionFindManyArgs>(args?: SelectSubset<T, CommentReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CommentReaction.
     * @param {CommentReactionCreateArgs} args - Arguments to create a CommentReaction.
     * @example
     * // Create one CommentReaction
     * const CommentReaction = await prisma.commentReaction.create({
     *   data: {
     *     // ... data to create a CommentReaction
     *   }
     * })
     * 
     */
    create<T extends CommentReactionCreateArgs>(args: SelectSubset<T, CommentReactionCreateArgs<ExtArgs>>): Prisma__CommentReactionClient<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CommentReactions.
     * @param {CommentReactionCreateManyArgs} args - Arguments to create many CommentReactions.
     * @example
     * // Create many CommentReactions
     * const commentReaction = await prisma.commentReaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentReactionCreateManyArgs>(args?: SelectSubset<T, CommentReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentReactions and returns the data saved in the database.
     * @param {CommentReactionCreateManyAndReturnArgs} args - Arguments to create many CommentReactions.
     * @example
     * // Create many CommentReactions
     * const commentReaction = await prisma.commentReaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentReactions and only return the `id`
     * const commentReactionWithIdOnly = await prisma.commentReaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CommentReaction.
     * @param {CommentReactionDeleteArgs} args - Arguments to delete one CommentReaction.
     * @example
     * // Delete one CommentReaction
     * const CommentReaction = await prisma.commentReaction.delete({
     *   where: {
     *     // ... filter to delete one CommentReaction
     *   }
     * })
     * 
     */
    delete<T extends CommentReactionDeleteArgs>(args: SelectSubset<T, CommentReactionDeleteArgs<ExtArgs>>): Prisma__CommentReactionClient<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CommentReaction.
     * @param {CommentReactionUpdateArgs} args - Arguments to update one CommentReaction.
     * @example
     * // Update one CommentReaction
     * const commentReaction = await prisma.commentReaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentReactionUpdateArgs>(args: SelectSubset<T, CommentReactionUpdateArgs<ExtArgs>>): Prisma__CommentReactionClient<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CommentReactions.
     * @param {CommentReactionDeleteManyArgs} args - Arguments to filter CommentReactions to delete.
     * @example
     * // Delete a few CommentReactions
     * const { count } = await prisma.commentReaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentReactionDeleteManyArgs>(args?: SelectSubset<T, CommentReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentReactions
     * const commentReaction = await prisma.commentReaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentReactionUpdateManyArgs>(args: SelectSubset<T, CommentReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommentReaction.
     * @param {CommentReactionUpsertArgs} args - Arguments to update or create a CommentReaction.
     * @example
     * // Update or create a CommentReaction
     * const commentReaction = await prisma.commentReaction.upsert({
     *   create: {
     *     // ... data to create a CommentReaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentReaction we want to update
     *   }
     * })
     */
    upsert<T extends CommentReactionUpsertArgs>(args: SelectSubset<T, CommentReactionUpsertArgs<ExtArgs>>): Prisma__CommentReactionClient<$Result.GetResult<Prisma.$CommentReactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CommentReactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionCountArgs} args - Arguments to filter CommentReactions to count.
     * @example
     * // Count the number of CommentReactions
     * const count = await prisma.commentReaction.count({
     *   where: {
     *     // ... the filter for the CommentReactions we want to count
     *   }
     * })
    **/
    count<T extends CommentReactionCountArgs>(
      args?: Subset<T, CommentReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentReactionAggregateArgs>(args: Subset<T, CommentReactionAggregateArgs>): Prisma.PrismaPromise<GetCommentReactionAggregateType<T>>

    /**
     * Group by CommentReaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentReactionGroupByArgs} args - Group by arguments.
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
      T extends CommentReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentReactionGroupByArgs['orderBy'] }
        : { orderBy?: CommentReactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentReaction model
   */
  readonly fields: CommentReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentReaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends FeatureCommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureCommentDefaultArgs<ExtArgs>>): Prisma__FeatureCommentClient<$Result.GetResult<Prisma.$FeatureCommentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommentReaction model
   */ 
  interface CommentReactionFieldRefs {
    readonly id: FieldRef<"CommentReaction", 'String'>
    readonly commentId: FieldRef<"CommentReaction", 'String'>
    readonly userId: FieldRef<"CommentReaction", 'String'>
    readonly emoji: FieldRef<"CommentReaction", 'String'>
    readonly createdAt: FieldRef<"CommentReaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommentReaction findUnique
   */
  export type CommentReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * Filter, which CommentReaction to fetch.
     */
    where: CommentReactionWhereUniqueInput
  }

  /**
   * CommentReaction findUniqueOrThrow
   */
  export type CommentReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * Filter, which CommentReaction to fetch.
     */
    where: CommentReactionWhereUniqueInput
  }

  /**
   * CommentReaction findFirst
   */
  export type CommentReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * Filter, which CommentReaction to fetch.
     */
    where?: CommentReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReactions to fetch.
     */
    orderBy?: CommentReactionOrderByWithRelationInput | CommentReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentReactions.
     */
    cursor?: CommentReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentReactions.
     */
    distinct?: CommentReactionScalarFieldEnum | CommentReactionScalarFieldEnum[]
  }

  /**
   * CommentReaction findFirstOrThrow
   */
  export type CommentReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * Filter, which CommentReaction to fetch.
     */
    where?: CommentReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReactions to fetch.
     */
    orderBy?: CommentReactionOrderByWithRelationInput | CommentReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentReactions.
     */
    cursor?: CommentReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentReactions.
     */
    distinct?: CommentReactionScalarFieldEnum | CommentReactionScalarFieldEnum[]
  }

  /**
   * CommentReaction findMany
   */
  export type CommentReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * Filter, which CommentReactions to fetch.
     */
    where?: CommentReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentReactions to fetch.
     */
    orderBy?: CommentReactionOrderByWithRelationInput | CommentReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentReactions.
     */
    cursor?: CommentReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentReactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentReactions.
     */
    skip?: number
    distinct?: CommentReactionScalarFieldEnum | CommentReactionScalarFieldEnum[]
  }

  /**
   * CommentReaction create
   */
  export type CommentReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentReaction.
     */
    data: XOR<CommentReactionCreateInput, CommentReactionUncheckedCreateInput>
  }

  /**
   * CommentReaction createMany
   */
  export type CommentReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentReactions.
     */
    data: CommentReactionCreateManyInput | CommentReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentReaction createManyAndReturn
   */
  export type CommentReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CommentReactions.
     */
    data: CommentReactionCreateManyInput | CommentReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentReaction update
   */
  export type CommentReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentReaction.
     */
    data: XOR<CommentReactionUpdateInput, CommentReactionUncheckedUpdateInput>
    /**
     * Choose, which CommentReaction to update.
     */
    where: CommentReactionWhereUniqueInput
  }

  /**
   * CommentReaction updateMany
   */
  export type CommentReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentReactions.
     */
    data: XOR<CommentReactionUpdateManyMutationInput, CommentReactionUncheckedUpdateManyInput>
    /**
     * Filter which CommentReactions to update
     */
    where?: CommentReactionWhereInput
  }

  /**
   * CommentReaction upsert
   */
  export type CommentReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentReaction to update in case it exists.
     */
    where: CommentReactionWhereUniqueInput
    /**
     * In case the CommentReaction found by the `where` argument doesn't exist, create a new CommentReaction with this data.
     */
    create: XOR<CommentReactionCreateInput, CommentReactionUncheckedCreateInput>
    /**
     * In case the CommentReaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentReactionUpdateInput, CommentReactionUncheckedUpdateInput>
  }

  /**
   * CommentReaction delete
   */
  export type CommentReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
    /**
     * Filter which CommentReaction to delete.
     */
    where: CommentReactionWhereUniqueInput
  }

  /**
   * CommentReaction deleteMany
   */
  export type CommentReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentReactions to delete
     */
    where?: CommentReactionWhereInput
  }

  /**
   * CommentReaction without action
   */
  export type CommentReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentReaction
     */
    select?: CommentReactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentReactionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    emailVerified: 'emailVerified',
    image: 'image',
    bio: 'bio',
    theme: 'theme',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    lastUsed: 'lastUsed',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const CodingSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    description: 'description',
    interactionType: 'interactionType',
    language: 'language',
    codeSnippet: 'codeSnippet',
    explanation: 'explanation',
    metadata: 'metadata',
    startedAt: 'startedAt',
    endedAt: 'endedAt'
  };

  export type CodingSessionScalarFieldEnum = (typeof CodingSessionScalarFieldEnum)[keyof typeof CodingSessionScalarFieldEnum]


  export const TipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    content: 'content',
    title: 'title',
    explanation: 'explanation',
    createdAt: 'createdAt'
  };

  export type TipScalarFieldEnum = (typeof TipScalarFieldEnum)[keyof typeof TipScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    tag: 'tag',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdByUserId: 'createdByUserId'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const FeatureVoteScalarFieldEnum: {
    id: 'id',
    featureId: 'featureId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type FeatureVoteScalarFieldEnum = (typeof FeatureVoteScalarFieldEnum)[keyof typeof FeatureVoteScalarFieldEnum]


  export const FeatureCommentScalarFieldEnum: {
    id: 'id',
    featureId: 'featureId',
    userId: 'userId',
    body: 'body',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parentCommentId: 'parentCommentId'
  };

  export type FeatureCommentScalarFieldEnum = (typeof FeatureCommentScalarFieldEnum)[keyof typeof FeatureCommentScalarFieldEnum]


  export const CommentReactionScalarFieldEnum: {
    id: 'id',
    commentId: 'commentId',
    userId: 'userId',
    emoji: 'emoji',
    createdAt: 'createdAt'
  };

  export type CommentReactionScalarFieldEnum = (typeof CommentReactionScalarFieldEnum)[keyof typeof CommentReactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'FeatureStatus'
   */
  export type EnumFeatureStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureStatus'>
    


  /**
   * Reference to a field of type 'FeatureStatus[]'
   */
  export type ListEnumFeatureStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureStatus[]'>
    


  /**
   * Reference to a field of type 'FeatureTag'
   */
  export type EnumFeatureTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureTag'>
    


  /**
   * Reference to a field of type 'FeatureTag[]'
   */
  export type ListEnumFeatureTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureTag[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    theme?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    codingSessions?: CodingSessionListRelationFilter
    tips?: TipListRelationFilter
    createdFeatures?: FeatureListRelationFilter
    featureVotes?: FeatureVoteListRelationFilter
    featureComments?: FeatureCommentListRelationFilter
    commentReactions?: CommentReactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    codingSessions?: CodingSessionOrderByRelationAggregateInput
    tips?: TipOrderByRelationAggregateInput
    createdFeatures?: FeatureOrderByRelationAggregateInput
    featureVotes?: FeatureVoteOrderByRelationAggregateInput
    featureComments?: FeatureCommentOrderByRelationAggregateInput
    commentReactions?: CommentReactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    image?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    theme?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    codingSessions?: CodingSessionListRelationFilter
    tips?: TipListRelationFilter
    createdFeatures?: FeatureListRelationFilter
    featureVotes?: FeatureVoteListRelationFilter
    featureComments?: FeatureCommentListRelationFilter
    commentReactions?: CommentReactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    theme?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_accountId?: AccountProviderIdAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "providerId_accountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    token?: StringFilter<"Verification"> | string
    expires?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationIdentifierTokenCompoundUniqueInput
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    expires?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    token?: StringWithAggregatesFilter<"Verification"> | string
    expires?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    name?: StringNullableFilter<"ApiKey"> | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    userId?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringNullableFilter<"ApiKey"> | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    userId?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "key">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrderInput | SortOrder
    lastUsed?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    key?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    lastUsed?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    userId?: StringWithAggregatesFilter<"ApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type CodingSessionWhereInput = {
    AND?: CodingSessionWhereInput | CodingSessionWhereInput[]
    OR?: CodingSessionWhereInput[]
    NOT?: CodingSessionWhereInput | CodingSessionWhereInput[]
    id?: StringFilter<"CodingSession"> | string
    userId?: StringFilter<"CodingSession"> | string
    description?: StringNullableFilter<"CodingSession"> | string | null
    interactionType?: StringFilter<"CodingSession"> | string
    language?: StringNullableFilter<"CodingSession"> | string | null
    codeSnippet?: StringNullableFilter<"CodingSession"> | string | null
    explanation?: StringNullableFilter<"CodingSession"> | string | null
    metadata?: JsonNullableFilter<"CodingSession">
    startedAt?: DateTimeFilter<"CodingSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"CodingSession"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CodingSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    interactionType?: SortOrder
    language?: SortOrderInput | SortOrder
    codeSnippet?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CodingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CodingSessionWhereInput | CodingSessionWhereInput[]
    OR?: CodingSessionWhereInput[]
    NOT?: CodingSessionWhereInput | CodingSessionWhereInput[]
    userId?: StringFilter<"CodingSession"> | string
    description?: StringNullableFilter<"CodingSession"> | string | null
    interactionType?: StringFilter<"CodingSession"> | string
    language?: StringNullableFilter<"CodingSession"> | string | null
    codeSnippet?: StringNullableFilter<"CodingSession"> | string | null
    explanation?: StringNullableFilter<"CodingSession"> | string | null
    metadata?: JsonNullableFilter<"CodingSession">
    startedAt?: DateTimeFilter<"CodingSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"CodingSession"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CodingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    interactionType?: SortOrder
    language?: SortOrderInput | SortOrder
    codeSnippet?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: CodingSessionCountOrderByAggregateInput
    _max?: CodingSessionMaxOrderByAggregateInput
    _min?: CodingSessionMinOrderByAggregateInput
  }

  export type CodingSessionScalarWhereWithAggregatesInput = {
    AND?: CodingSessionScalarWhereWithAggregatesInput | CodingSessionScalarWhereWithAggregatesInput[]
    OR?: CodingSessionScalarWhereWithAggregatesInput[]
    NOT?: CodingSessionScalarWhereWithAggregatesInput | CodingSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodingSession"> | string
    userId?: StringWithAggregatesFilter<"CodingSession"> | string
    description?: StringNullableWithAggregatesFilter<"CodingSession"> | string | null
    interactionType?: StringWithAggregatesFilter<"CodingSession"> | string
    language?: StringNullableWithAggregatesFilter<"CodingSession"> | string | null
    codeSnippet?: StringNullableWithAggregatesFilter<"CodingSession"> | string | null
    explanation?: StringNullableWithAggregatesFilter<"CodingSession"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"CodingSession">
    startedAt?: DateTimeWithAggregatesFilter<"CodingSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"CodingSession"> | Date | string | null
  }

  export type TipWhereInput = {
    AND?: TipWhereInput | TipWhereInput[]
    OR?: TipWhereInput[]
    NOT?: TipWhereInput | TipWhereInput[]
    id?: StringFilter<"Tip"> | string
    userId?: StringFilter<"Tip"> | string
    content?: StringFilter<"Tip"> | string
    title?: StringNullableFilter<"Tip"> | string | null
    explanation?: StringNullableFilter<"Tip"> | string | null
    createdAt?: DateTimeFilter<"Tip"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    title?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TipWhereInput | TipWhereInput[]
    OR?: TipWhereInput[]
    NOT?: TipWhereInput | TipWhereInput[]
    userId?: StringFilter<"Tip"> | string
    content?: StringFilter<"Tip"> | string
    title?: StringNullableFilter<"Tip"> | string | null
    explanation?: StringNullableFilter<"Tip"> | string | null
    createdAt?: DateTimeFilter<"Tip"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    title?: SortOrderInput | SortOrder
    explanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TipCountOrderByAggregateInput
    _max?: TipMaxOrderByAggregateInput
    _min?: TipMinOrderByAggregateInput
  }

  export type TipScalarWhereWithAggregatesInput = {
    AND?: TipScalarWhereWithAggregatesInput | TipScalarWhereWithAggregatesInput[]
    OR?: TipScalarWhereWithAggregatesInput[]
    NOT?: TipScalarWhereWithAggregatesInput | TipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tip"> | string
    userId?: StringWithAggregatesFilter<"Tip"> | string
    content?: StringWithAggregatesFilter<"Tip"> | string
    title?: StringNullableWithAggregatesFilter<"Tip"> | string | null
    explanation?: StringNullableWithAggregatesFilter<"Tip"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tip"> | Date | string
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: StringFilter<"Feature"> | string
    title?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    status?: EnumFeatureStatusFilter<"Feature"> | $Enums.FeatureStatus
    tag?: EnumFeatureTagFilter<"Feature"> | $Enums.FeatureTag
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    createdByUserId?: StringNullableFilter<"Feature"> | string | null
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    votes?: FeatureVoteListRelationFilter
    comments?: FeatureCommentListRelationFilter
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    votes?: FeatureVoteOrderByRelationAggregateInput
    comments?: FeatureCommentOrderByRelationAggregateInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    title?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    status?: EnumFeatureStatusFilter<"Feature"> | $Enums.FeatureStatus
    tag?: EnumFeatureTagFilter<"Feature"> | $Enums.FeatureTag
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    createdByUserId?: StringNullableFilter<"Feature"> | string | null
    createdBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    votes?: FeatureVoteListRelationFilter
    comments?: FeatureCommentListRelationFilter
  }, "id">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feature"> | string
    title?: StringWithAggregatesFilter<"Feature"> | string
    description?: StringWithAggregatesFilter<"Feature"> | string
    status?: EnumFeatureStatusWithAggregatesFilter<"Feature"> | $Enums.FeatureStatus
    tag?: EnumFeatureTagWithAggregatesFilter<"Feature"> | $Enums.FeatureTag
    createdAt?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
    createdByUserId?: StringNullableWithAggregatesFilter<"Feature"> | string | null
  }

  export type FeatureVoteWhereInput = {
    AND?: FeatureVoteWhereInput | FeatureVoteWhereInput[]
    OR?: FeatureVoteWhereInput[]
    NOT?: FeatureVoteWhereInput | FeatureVoteWhereInput[]
    id?: StringFilter<"FeatureVote"> | string
    featureId?: StringFilter<"FeatureVote"> | string
    userId?: StringFilter<"FeatureVote"> | string
    createdAt?: DateTimeFilter<"FeatureVote"> | Date | string
    feature?: XOR<FeatureRelationFilter, FeatureWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FeatureVoteOrderByWithRelationInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    feature?: FeatureOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FeatureVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    featureId_userId?: FeatureVoteFeatureIdUserIdCompoundUniqueInput
    AND?: FeatureVoteWhereInput | FeatureVoteWhereInput[]
    OR?: FeatureVoteWhereInput[]
    NOT?: FeatureVoteWhereInput | FeatureVoteWhereInput[]
    featureId?: StringFilter<"FeatureVote"> | string
    userId?: StringFilter<"FeatureVote"> | string
    createdAt?: DateTimeFilter<"FeatureVote"> | Date | string
    feature?: XOR<FeatureRelationFilter, FeatureWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "featureId_userId">

  export type FeatureVoteOrderByWithAggregationInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: FeatureVoteCountOrderByAggregateInput
    _max?: FeatureVoteMaxOrderByAggregateInput
    _min?: FeatureVoteMinOrderByAggregateInput
  }

  export type FeatureVoteScalarWhereWithAggregatesInput = {
    AND?: FeatureVoteScalarWhereWithAggregatesInput | FeatureVoteScalarWhereWithAggregatesInput[]
    OR?: FeatureVoteScalarWhereWithAggregatesInput[]
    NOT?: FeatureVoteScalarWhereWithAggregatesInput | FeatureVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeatureVote"> | string
    featureId?: StringWithAggregatesFilter<"FeatureVote"> | string
    userId?: StringWithAggregatesFilter<"FeatureVote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FeatureVote"> | Date | string
  }

  export type FeatureCommentWhereInput = {
    AND?: FeatureCommentWhereInput | FeatureCommentWhereInput[]
    OR?: FeatureCommentWhereInput[]
    NOT?: FeatureCommentWhereInput | FeatureCommentWhereInput[]
    id?: StringFilter<"FeatureComment"> | string
    featureId?: StringFilter<"FeatureComment"> | string
    userId?: StringFilter<"FeatureComment"> | string
    body?: StringFilter<"FeatureComment"> | string
    createdAt?: DateTimeFilter<"FeatureComment"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureComment"> | Date | string
    parentCommentId?: StringNullableFilter<"FeatureComment"> | string | null
    feature?: XOR<FeatureRelationFilter, FeatureWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    parentComment?: XOR<FeatureCommentNullableRelationFilter, FeatureCommentWhereInput> | null
    replies?: FeatureCommentListRelationFilter
    reactions?: CommentReactionListRelationFilter
  }

  export type FeatureCommentOrderByWithRelationInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    feature?: FeatureOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parentComment?: FeatureCommentOrderByWithRelationInput
    replies?: FeatureCommentOrderByRelationAggregateInput
    reactions?: CommentReactionOrderByRelationAggregateInput
  }

  export type FeatureCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeatureCommentWhereInput | FeatureCommentWhereInput[]
    OR?: FeatureCommentWhereInput[]
    NOT?: FeatureCommentWhereInput | FeatureCommentWhereInput[]
    featureId?: StringFilter<"FeatureComment"> | string
    userId?: StringFilter<"FeatureComment"> | string
    body?: StringFilter<"FeatureComment"> | string
    createdAt?: DateTimeFilter<"FeatureComment"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureComment"> | Date | string
    parentCommentId?: StringNullableFilter<"FeatureComment"> | string | null
    feature?: XOR<FeatureRelationFilter, FeatureWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    parentComment?: XOR<FeatureCommentNullableRelationFilter, FeatureCommentWhereInput> | null
    replies?: FeatureCommentListRelationFilter
    reactions?: CommentReactionListRelationFilter
  }, "id">

  export type FeatureCommentOrderByWithAggregationInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentCommentId?: SortOrderInput | SortOrder
    _count?: FeatureCommentCountOrderByAggregateInput
    _max?: FeatureCommentMaxOrderByAggregateInput
    _min?: FeatureCommentMinOrderByAggregateInput
  }

  export type FeatureCommentScalarWhereWithAggregatesInput = {
    AND?: FeatureCommentScalarWhereWithAggregatesInput | FeatureCommentScalarWhereWithAggregatesInput[]
    OR?: FeatureCommentScalarWhereWithAggregatesInput[]
    NOT?: FeatureCommentScalarWhereWithAggregatesInput | FeatureCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeatureComment"> | string
    featureId?: StringWithAggregatesFilter<"FeatureComment"> | string
    userId?: StringWithAggregatesFilter<"FeatureComment"> | string
    body?: StringWithAggregatesFilter<"FeatureComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FeatureComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeatureComment"> | Date | string
    parentCommentId?: StringNullableWithAggregatesFilter<"FeatureComment"> | string | null
  }

  export type CommentReactionWhereInput = {
    AND?: CommentReactionWhereInput | CommentReactionWhereInput[]
    OR?: CommentReactionWhereInput[]
    NOT?: CommentReactionWhereInput | CommentReactionWhereInput[]
    id?: StringFilter<"CommentReaction"> | string
    commentId?: StringFilter<"CommentReaction"> | string
    userId?: StringFilter<"CommentReaction"> | string
    emoji?: StringFilter<"CommentReaction"> | string
    createdAt?: DateTimeFilter<"CommentReaction"> | Date | string
    comment?: XOR<FeatureCommentRelationFilter, FeatureCommentWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CommentReactionOrderByWithRelationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    comment?: FeatureCommentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    commentId_userId_emoji?: CommentReactionCommentIdUserIdEmojiCompoundUniqueInput
    AND?: CommentReactionWhereInput | CommentReactionWhereInput[]
    OR?: CommentReactionWhereInput[]
    NOT?: CommentReactionWhereInput | CommentReactionWhereInput[]
    commentId?: StringFilter<"CommentReaction"> | string
    userId?: StringFilter<"CommentReaction"> | string
    emoji?: StringFilter<"CommentReaction"> | string
    createdAt?: DateTimeFilter<"CommentReaction"> | Date | string
    comment?: XOR<FeatureCommentRelationFilter, FeatureCommentWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "commentId_userId_emoji">

  export type CommentReactionOrderByWithAggregationInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    _count?: CommentReactionCountOrderByAggregateInput
    _max?: CommentReactionMaxOrderByAggregateInput
    _min?: CommentReactionMinOrderByAggregateInput
  }

  export type CommentReactionScalarWhereWithAggregatesInput = {
    AND?: CommentReactionScalarWhereWithAggregatesInput | CommentReactionScalarWhereWithAggregatesInput[]
    OR?: CommentReactionScalarWhereWithAggregatesInput[]
    NOT?: CommentReactionScalarWhereWithAggregatesInput | CommentReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommentReaction"> | string
    commentId?: StringWithAggregatesFilter<"CommentReaction"> | string
    userId?: StringWithAggregatesFilter<"CommentReaction"> | string
    emoji?: StringWithAggregatesFilter<"CommentReaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CommentReaction"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    accountId: string
    providerId: string
    userId: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    key: string
    name?: string | null
    lastUsed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    key: string
    name?: string | null
    lastUsed?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    key: string
    name?: string | null
    lastUsed?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodingSessionCreateInput = {
    id?: string
    description?: string | null
    interactionType: string
    language?: string | null
    codeSnippet?: string | null
    explanation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    endedAt?: Date | string | null
    user: UserCreateNestedOneWithoutCodingSessionsInput
  }

  export type CodingSessionUncheckedCreateInput = {
    id?: string
    userId: string
    description?: string | null
    interactionType: string
    language?: string | null
    codeSnippet?: string | null
    explanation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CodingSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    interactionType?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    codeSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCodingSessionsNestedInput
  }

  export type CodingSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    interactionType?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    codeSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CodingSessionCreateManyInput = {
    id?: string
    userId: string
    description?: string | null
    interactionType: string
    language?: string | null
    codeSnippet?: string | null
    explanation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CodingSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    interactionType?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    codeSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CodingSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    interactionType?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    codeSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TipCreateInput = {
    id?: string
    content: string
    title?: string | null
    explanation?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTipsInput
  }

  export type TipUncheckedCreateInput = {
    id?: string
    userId: string
    content: string
    title?: string | null
    explanation?: string | null
    createdAt?: Date | string
  }

  export type TipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTipsNestedInput
  }

  export type TipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipCreateManyInput = {
    id?: string
    userId: string
    content: string
    title?: string | null
    explanation?: string | null
    createdAt?: Date | string
  }

  export type TipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedFeaturesInput
    votes?: FeatureVoteCreateNestedManyWithoutFeatureInput
    comments?: FeatureCommentCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    votes?: FeatureVoteUncheckedCreateNestedManyWithoutFeatureInput
    comments?: FeatureCommentUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedFeaturesNestedInput
    votes?: FeatureVoteUpdateManyWithoutFeatureNestedInput
    comments?: FeatureCommentUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    votes?: FeatureVoteUncheckedUpdateManyWithoutFeatureNestedInput
    comments?: FeatureCommentUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
  }

  export type FeatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeatureVoteCreateInput = {
    id?: string
    createdAt?: Date | string
    feature: FeatureCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutFeatureVotesInput
  }

  export type FeatureVoteUncheckedCreateInput = {
    id?: string
    featureId: string
    userId: string
    createdAt?: Date | string
  }

  export type FeatureVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutFeatureVotesNestedInput
  }

  export type FeatureVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureVoteCreateManyInput = {
    id?: string
    featureId: string
    userId: string
    createdAt?: Date | string
  }

  export type FeatureVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCommentCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feature: FeatureCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutFeatureCommentsInput
    parentComment?: FeatureCommentCreateNestedOneWithoutRepliesInput
    replies?: FeatureCommentCreateNestedManyWithoutParentCommentInput
    reactions?: CommentReactionCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentUncheckedCreateInput = {
    id?: string
    featureId: string
    userId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCommentId?: string | null
    replies?: FeatureCommentUncheckedCreateNestedManyWithoutParentCommentInput
    reactions?: CommentReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutFeatureCommentsNestedInput
    parentComment?: FeatureCommentUpdateOneWithoutRepliesNestedInput
    replies?: FeatureCommentUpdateManyWithoutParentCommentNestedInput
    reactions?: CommentReactionUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: FeatureCommentUncheckedUpdateManyWithoutParentCommentNestedInput
    reactions?: CommentReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentCreateManyInput = {
    id?: string
    featureId: string
    userId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCommentId?: string | null
  }

  export type FeatureCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentReactionCreateInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    comment: FeatureCommentCreateNestedOneWithoutReactionsInput
    user: UserCreateNestedOneWithoutCommentReactionsInput
  }

  export type CommentReactionUncheckedCreateInput = {
    id?: string
    commentId: string
    userId: string
    emoji: string
    createdAt?: Date | string
  }

  export type CommentReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: FeatureCommentUpdateOneRequiredWithoutReactionsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentReactionsNestedInput
  }

  export type CommentReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReactionCreateManyInput = {
    id?: string
    commentId: string
    userId: string
    emoji: string
    createdAt?: Date | string
  }

  export type CommentReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type CodingSessionListRelationFilter = {
    every?: CodingSessionWhereInput
    some?: CodingSessionWhereInput
    none?: CodingSessionWhereInput
  }

  export type TipListRelationFilter = {
    every?: TipWhereInput
    some?: TipWhereInput
    none?: TipWhereInput
  }

  export type FeatureListRelationFilter = {
    every?: FeatureWhereInput
    some?: FeatureWhereInput
    none?: FeatureWhereInput
  }

  export type FeatureVoteListRelationFilter = {
    every?: FeatureVoteWhereInput
    some?: FeatureVoteWhereInput
    none?: FeatureVoteWhereInput
  }

  export type FeatureCommentListRelationFilter = {
    every?: FeatureCommentWhereInput
    some?: FeatureCommentWhereInput
    none?: FeatureCommentWhereInput
  }

  export type CommentReactionListRelationFilter = {
    every?: CommentReactionWhereInput
    some?: CommentReactionWhereInput
    none?: CommentReactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CodingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountProviderIdAccountIdCompoundUniqueInput = {
    providerId: string
    accountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    lastUsed?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    lastUsed?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    lastUsed?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CodingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    interactionType?: SortOrder
    language?: SortOrder
    codeSnippet?: SortOrder
    explanation?: SortOrder
    metadata?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type CodingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    interactionType?: SortOrder
    language?: SortOrder
    codeSnippet?: SortOrder
    explanation?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }

  export type CodingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    interactionType?: SortOrder
    language?: SortOrder
    codeSnippet?: SortOrder
    explanation?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type TipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    title?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type TipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    title?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type TipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    title?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFeatureStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureStatus | EnumFeatureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureStatus[] | ListEnumFeatureStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureStatus[] | ListEnumFeatureStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureStatusFilter<$PrismaModel> | $Enums.FeatureStatus
  }

  export type EnumFeatureTagFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureTag | EnumFeatureTagFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureTag[] | ListEnumFeatureTagFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureTag[] | ListEnumFeatureTagFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTagFilter<$PrismaModel> | $Enums.FeatureTag
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    tag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type EnumFeatureStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureStatus | EnumFeatureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureStatus[] | ListEnumFeatureStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureStatus[] | ListEnumFeatureStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeatureStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureStatusFilter<$PrismaModel>
    _max?: NestedEnumFeatureStatusFilter<$PrismaModel>
  }

  export type EnumFeatureTagWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureTag | EnumFeatureTagFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureTag[] | ListEnumFeatureTagFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureTag[] | ListEnumFeatureTagFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTagWithAggregatesFilter<$PrismaModel> | $Enums.FeatureTag
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureTagFilter<$PrismaModel>
    _max?: NestedEnumFeatureTagFilter<$PrismaModel>
  }

  export type FeatureRelationFilter = {
    is?: FeatureWhereInput
    isNot?: FeatureWhereInput
  }

  export type FeatureVoteFeatureIdUserIdCompoundUniqueInput = {
    featureId: string
    userId: string
  }

  export type FeatureVoteCountOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FeatureVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FeatureVoteMinOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FeatureCommentNullableRelationFilter = {
    is?: FeatureCommentWhereInput | null
    isNot?: FeatureCommentWhereInput | null
  }

  export type FeatureCommentCountOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentCommentId?: SortOrder
  }

  export type FeatureCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentCommentId?: SortOrder
  }

  export type FeatureCommentMinOrderByAggregateInput = {
    id?: SortOrder
    featureId?: SortOrder
    userId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentCommentId?: SortOrder
  }

  export type FeatureCommentRelationFilter = {
    is?: FeatureCommentWhereInput
    isNot?: FeatureCommentWhereInput
  }

  export type CommentReactionCommentIdUserIdEmojiCompoundUniqueInput = {
    commentId: string
    userId: string
    emoji: string
  }

  export type CommentReactionCountOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentReactionMinOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type CodingSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<CodingSessionCreateWithoutUserInput, CodingSessionUncheckedCreateWithoutUserInput> | CodingSessionCreateWithoutUserInput[] | CodingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodingSessionCreateOrConnectWithoutUserInput | CodingSessionCreateOrConnectWithoutUserInput[]
    createMany?: CodingSessionCreateManyUserInputEnvelope
    connect?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
  }

  export type TipCreateNestedManyWithoutUserInput = {
    create?: XOR<TipCreateWithoutUserInput, TipUncheckedCreateWithoutUserInput> | TipCreateWithoutUserInput[] | TipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TipCreateOrConnectWithoutUserInput | TipCreateOrConnectWithoutUserInput[]
    createMany?: TipCreateManyUserInputEnvelope
    connect?: TipWhereUniqueInput | TipWhereUniqueInput[]
  }

  export type FeatureCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FeatureCreateWithoutCreatedByInput, FeatureUncheckedCreateWithoutCreatedByInput> | FeatureCreateWithoutCreatedByInput[] | FeatureUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutCreatedByInput | FeatureCreateOrConnectWithoutCreatedByInput[]
    createMany?: FeatureCreateManyCreatedByInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type FeatureVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<FeatureVoteCreateWithoutUserInput, FeatureVoteUncheckedCreateWithoutUserInput> | FeatureVoteCreateWithoutUserInput[] | FeatureVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureVoteCreateOrConnectWithoutUserInput | FeatureVoteCreateOrConnectWithoutUserInput[]
    createMany?: FeatureVoteCreateManyUserInputEnvelope
    connect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
  }

  export type FeatureCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<FeatureCommentCreateWithoutUserInput, FeatureCommentUncheckedCreateWithoutUserInput> | FeatureCommentCreateWithoutUserInput[] | FeatureCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutUserInput | FeatureCommentCreateOrConnectWithoutUserInput[]
    createMany?: FeatureCommentCreateManyUserInputEnvelope
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
  }

  export type CommentReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentReactionCreateWithoutUserInput, CommentReactionUncheckedCreateWithoutUserInput> | CommentReactionCreateWithoutUserInput[] | CommentReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReactionCreateOrConnectWithoutUserInput | CommentReactionCreateOrConnectWithoutUserInput[]
    createMany?: CommentReactionCreateManyUserInputEnvelope
    connect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type CodingSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CodingSessionCreateWithoutUserInput, CodingSessionUncheckedCreateWithoutUserInput> | CodingSessionCreateWithoutUserInput[] | CodingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodingSessionCreateOrConnectWithoutUserInput | CodingSessionCreateOrConnectWithoutUserInput[]
    createMany?: CodingSessionCreateManyUserInputEnvelope
    connect?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
  }

  export type TipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TipCreateWithoutUserInput, TipUncheckedCreateWithoutUserInput> | TipCreateWithoutUserInput[] | TipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TipCreateOrConnectWithoutUserInput | TipCreateOrConnectWithoutUserInput[]
    createMany?: TipCreateManyUserInputEnvelope
    connect?: TipWhereUniqueInput | TipWhereUniqueInput[]
  }

  export type FeatureUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FeatureCreateWithoutCreatedByInput, FeatureUncheckedCreateWithoutCreatedByInput> | FeatureCreateWithoutCreatedByInput[] | FeatureUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutCreatedByInput | FeatureCreateOrConnectWithoutCreatedByInput[]
    createMany?: FeatureCreateManyCreatedByInputEnvelope
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
  }

  export type FeatureVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeatureVoteCreateWithoutUserInput, FeatureVoteUncheckedCreateWithoutUserInput> | FeatureVoteCreateWithoutUserInput[] | FeatureVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureVoteCreateOrConnectWithoutUserInput | FeatureVoteCreateOrConnectWithoutUserInput[]
    createMany?: FeatureVoteCreateManyUserInputEnvelope
    connect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
  }

  export type FeatureCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeatureCommentCreateWithoutUserInput, FeatureCommentUncheckedCreateWithoutUserInput> | FeatureCommentCreateWithoutUserInput[] | FeatureCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutUserInput | FeatureCommentCreateOrConnectWithoutUserInput[]
    createMany?: FeatureCommentCreateManyUserInputEnvelope
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
  }

  export type CommentReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentReactionCreateWithoutUserInput, CommentReactionUncheckedCreateWithoutUserInput> | CommentReactionCreateWithoutUserInput[] | CommentReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReactionCreateOrConnectWithoutUserInput | CommentReactionCreateOrConnectWithoutUserInput[]
    createMany?: CommentReactionCreateManyUserInputEnvelope
    connect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type CodingSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CodingSessionCreateWithoutUserInput, CodingSessionUncheckedCreateWithoutUserInput> | CodingSessionCreateWithoutUserInput[] | CodingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodingSessionCreateOrConnectWithoutUserInput | CodingSessionCreateOrConnectWithoutUserInput[]
    upsert?: CodingSessionUpsertWithWhereUniqueWithoutUserInput | CodingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CodingSessionCreateManyUserInputEnvelope
    set?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
    disconnect?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
    delete?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
    connect?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
    update?: CodingSessionUpdateWithWhereUniqueWithoutUserInput | CodingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CodingSessionUpdateManyWithWhereWithoutUserInput | CodingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CodingSessionScalarWhereInput | CodingSessionScalarWhereInput[]
  }

  export type TipUpdateManyWithoutUserNestedInput = {
    create?: XOR<TipCreateWithoutUserInput, TipUncheckedCreateWithoutUserInput> | TipCreateWithoutUserInput[] | TipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TipCreateOrConnectWithoutUserInput | TipCreateOrConnectWithoutUserInput[]
    upsert?: TipUpsertWithWhereUniqueWithoutUserInput | TipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TipCreateManyUserInputEnvelope
    set?: TipWhereUniqueInput | TipWhereUniqueInput[]
    disconnect?: TipWhereUniqueInput | TipWhereUniqueInput[]
    delete?: TipWhereUniqueInput | TipWhereUniqueInput[]
    connect?: TipWhereUniqueInput | TipWhereUniqueInput[]
    update?: TipUpdateWithWhereUniqueWithoutUserInput | TipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TipUpdateManyWithWhereWithoutUserInput | TipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TipScalarWhereInput | TipScalarWhereInput[]
  }

  export type FeatureUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FeatureCreateWithoutCreatedByInput, FeatureUncheckedCreateWithoutCreatedByInput> | FeatureCreateWithoutCreatedByInput[] | FeatureUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutCreatedByInput | FeatureCreateOrConnectWithoutCreatedByInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutCreatedByInput | FeatureUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FeatureCreateManyCreatedByInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutCreatedByInput | FeatureUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutCreatedByInput | FeatureUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type FeatureVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeatureVoteCreateWithoutUserInput, FeatureVoteUncheckedCreateWithoutUserInput> | FeatureVoteCreateWithoutUserInput[] | FeatureVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureVoteCreateOrConnectWithoutUserInput | FeatureVoteCreateOrConnectWithoutUserInput[]
    upsert?: FeatureVoteUpsertWithWhereUniqueWithoutUserInput | FeatureVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeatureVoteCreateManyUserInputEnvelope
    set?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    disconnect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    delete?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    connect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    update?: FeatureVoteUpdateWithWhereUniqueWithoutUserInput | FeatureVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeatureVoteUpdateManyWithWhereWithoutUserInput | FeatureVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeatureVoteScalarWhereInput | FeatureVoteScalarWhereInput[]
  }

  export type FeatureCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeatureCommentCreateWithoutUserInput, FeatureCommentUncheckedCreateWithoutUserInput> | FeatureCommentCreateWithoutUserInput[] | FeatureCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutUserInput | FeatureCommentCreateOrConnectWithoutUserInput[]
    upsert?: FeatureCommentUpsertWithWhereUniqueWithoutUserInput | FeatureCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeatureCommentCreateManyUserInputEnvelope
    set?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    disconnect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    delete?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    update?: FeatureCommentUpdateWithWhereUniqueWithoutUserInput | FeatureCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeatureCommentUpdateManyWithWhereWithoutUserInput | FeatureCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeatureCommentScalarWhereInput | FeatureCommentScalarWhereInput[]
  }

  export type CommentReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentReactionCreateWithoutUserInput, CommentReactionUncheckedCreateWithoutUserInput> | CommentReactionCreateWithoutUserInput[] | CommentReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReactionCreateOrConnectWithoutUserInput | CommentReactionCreateOrConnectWithoutUserInput[]
    upsert?: CommentReactionUpsertWithWhereUniqueWithoutUserInput | CommentReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentReactionCreateManyUserInputEnvelope
    set?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    disconnect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    delete?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    connect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    update?: CommentReactionUpdateWithWhereUniqueWithoutUserInput | CommentReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentReactionUpdateManyWithWhereWithoutUserInput | CommentReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentReactionScalarWhereInput | CommentReactionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput> | ApiKeyCreateWithoutUserInput[] | ApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutUserInput | ApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutUserInput | ApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApiKeyCreateManyUserInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutUserInput | ApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutUserInput | ApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type CodingSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CodingSessionCreateWithoutUserInput, CodingSessionUncheckedCreateWithoutUserInput> | CodingSessionCreateWithoutUserInput[] | CodingSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CodingSessionCreateOrConnectWithoutUserInput | CodingSessionCreateOrConnectWithoutUserInput[]
    upsert?: CodingSessionUpsertWithWhereUniqueWithoutUserInput | CodingSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CodingSessionCreateManyUserInputEnvelope
    set?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
    disconnect?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
    delete?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
    connect?: CodingSessionWhereUniqueInput | CodingSessionWhereUniqueInput[]
    update?: CodingSessionUpdateWithWhereUniqueWithoutUserInput | CodingSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CodingSessionUpdateManyWithWhereWithoutUserInput | CodingSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CodingSessionScalarWhereInput | CodingSessionScalarWhereInput[]
  }

  export type TipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TipCreateWithoutUserInput, TipUncheckedCreateWithoutUserInput> | TipCreateWithoutUserInput[] | TipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TipCreateOrConnectWithoutUserInput | TipCreateOrConnectWithoutUserInput[]
    upsert?: TipUpsertWithWhereUniqueWithoutUserInput | TipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TipCreateManyUserInputEnvelope
    set?: TipWhereUniqueInput | TipWhereUniqueInput[]
    disconnect?: TipWhereUniqueInput | TipWhereUniqueInput[]
    delete?: TipWhereUniqueInput | TipWhereUniqueInput[]
    connect?: TipWhereUniqueInput | TipWhereUniqueInput[]
    update?: TipUpdateWithWhereUniqueWithoutUserInput | TipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TipUpdateManyWithWhereWithoutUserInput | TipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TipScalarWhereInput | TipScalarWhereInput[]
  }

  export type FeatureUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FeatureCreateWithoutCreatedByInput, FeatureUncheckedCreateWithoutCreatedByInput> | FeatureCreateWithoutCreatedByInput[] | FeatureUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FeatureCreateOrConnectWithoutCreatedByInput | FeatureCreateOrConnectWithoutCreatedByInput[]
    upsert?: FeatureUpsertWithWhereUniqueWithoutCreatedByInput | FeatureUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FeatureCreateManyCreatedByInputEnvelope
    set?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    disconnect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    delete?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    connect?: FeatureWhereUniqueInput | FeatureWhereUniqueInput[]
    update?: FeatureUpdateWithWhereUniqueWithoutCreatedByInput | FeatureUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FeatureUpdateManyWithWhereWithoutCreatedByInput | FeatureUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
  }

  export type FeatureVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeatureVoteCreateWithoutUserInput, FeatureVoteUncheckedCreateWithoutUserInput> | FeatureVoteCreateWithoutUserInput[] | FeatureVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureVoteCreateOrConnectWithoutUserInput | FeatureVoteCreateOrConnectWithoutUserInput[]
    upsert?: FeatureVoteUpsertWithWhereUniqueWithoutUserInput | FeatureVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeatureVoteCreateManyUserInputEnvelope
    set?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    disconnect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    delete?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    connect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    update?: FeatureVoteUpdateWithWhereUniqueWithoutUserInput | FeatureVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeatureVoteUpdateManyWithWhereWithoutUserInput | FeatureVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeatureVoteScalarWhereInput | FeatureVoteScalarWhereInput[]
  }

  export type FeatureCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeatureCommentCreateWithoutUserInput, FeatureCommentUncheckedCreateWithoutUserInput> | FeatureCommentCreateWithoutUserInput[] | FeatureCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutUserInput | FeatureCommentCreateOrConnectWithoutUserInput[]
    upsert?: FeatureCommentUpsertWithWhereUniqueWithoutUserInput | FeatureCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeatureCommentCreateManyUserInputEnvelope
    set?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    disconnect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    delete?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    update?: FeatureCommentUpdateWithWhereUniqueWithoutUserInput | FeatureCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeatureCommentUpdateManyWithWhereWithoutUserInput | FeatureCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeatureCommentScalarWhereInput | FeatureCommentScalarWhereInput[]
  }

  export type CommentReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentReactionCreateWithoutUserInput, CommentReactionUncheckedCreateWithoutUserInput> | CommentReactionCreateWithoutUserInput[] | CommentReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentReactionCreateOrConnectWithoutUserInput | CommentReactionCreateOrConnectWithoutUserInput[]
    upsert?: CommentReactionUpsertWithWhereUniqueWithoutUserInput | CommentReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentReactionCreateManyUserInputEnvelope
    set?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    disconnect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    delete?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    connect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    update?: CommentReactionUpdateWithWhereUniqueWithoutUserInput | CommentReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentReactionUpdateManyWithWhereWithoutUserInput | CommentReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentReactionScalarWhereInput | CommentReactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserCreateNestedOneWithoutCodingSessionsInput = {
    create?: XOR<UserCreateWithoutCodingSessionsInput, UserUncheckedCreateWithoutCodingSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodingSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCodingSessionsNestedInput = {
    create?: XOR<UserCreateWithoutCodingSessionsInput, UserUncheckedCreateWithoutCodingSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCodingSessionsInput
    upsert?: UserUpsertWithoutCodingSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCodingSessionsInput, UserUpdateWithoutCodingSessionsInput>, UserUncheckedUpdateWithoutCodingSessionsInput>
  }

  export type UserCreateNestedOneWithoutTipsInput = {
    create?: XOR<UserCreateWithoutTipsInput, UserUncheckedCreateWithoutTipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTipsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTipsNestedInput = {
    create?: XOR<UserCreateWithoutTipsInput, UserUncheckedCreateWithoutTipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTipsInput
    upsert?: UserUpsertWithoutTipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTipsInput, UserUpdateWithoutTipsInput>, UserUncheckedUpdateWithoutTipsInput>
  }

  export type UserCreateNestedOneWithoutCreatedFeaturesInput = {
    create?: XOR<UserCreateWithoutCreatedFeaturesInput, UserUncheckedCreateWithoutCreatedFeaturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedFeaturesInput
    connect?: UserWhereUniqueInput
  }

  export type FeatureVoteCreateNestedManyWithoutFeatureInput = {
    create?: XOR<FeatureVoteCreateWithoutFeatureInput, FeatureVoteUncheckedCreateWithoutFeatureInput> | FeatureVoteCreateWithoutFeatureInput[] | FeatureVoteUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureVoteCreateOrConnectWithoutFeatureInput | FeatureVoteCreateOrConnectWithoutFeatureInput[]
    createMany?: FeatureVoteCreateManyFeatureInputEnvelope
    connect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
  }

  export type FeatureCommentCreateNestedManyWithoutFeatureInput = {
    create?: XOR<FeatureCommentCreateWithoutFeatureInput, FeatureCommentUncheckedCreateWithoutFeatureInput> | FeatureCommentCreateWithoutFeatureInput[] | FeatureCommentUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutFeatureInput | FeatureCommentCreateOrConnectWithoutFeatureInput[]
    createMany?: FeatureCommentCreateManyFeatureInputEnvelope
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
  }

  export type FeatureVoteUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<FeatureVoteCreateWithoutFeatureInput, FeatureVoteUncheckedCreateWithoutFeatureInput> | FeatureVoteCreateWithoutFeatureInput[] | FeatureVoteUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureVoteCreateOrConnectWithoutFeatureInput | FeatureVoteCreateOrConnectWithoutFeatureInput[]
    createMany?: FeatureVoteCreateManyFeatureInputEnvelope
    connect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
  }

  export type FeatureCommentUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<FeatureCommentCreateWithoutFeatureInput, FeatureCommentUncheckedCreateWithoutFeatureInput> | FeatureCommentCreateWithoutFeatureInput[] | FeatureCommentUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutFeatureInput | FeatureCommentCreateOrConnectWithoutFeatureInput[]
    createMany?: FeatureCommentCreateManyFeatureInputEnvelope
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
  }

  export type EnumFeatureStatusFieldUpdateOperationsInput = {
    set?: $Enums.FeatureStatus
  }

  export type EnumFeatureTagFieldUpdateOperationsInput = {
    set?: $Enums.FeatureTag
  }

  export type UserUpdateOneWithoutCreatedFeaturesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedFeaturesInput, UserUncheckedCreateWithoutCreatedFeaturesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedFeaturesInput
    upsert?: UserUpsertWithoutCreatedFeaturesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedFeaturesInput, UserUpdateWithoutCreatedFeaturesInput>, UserUncheckedUpdateWithoutCreatedFeaturesInput>
  }

  export type FeatureVoteUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<FeatureVoteCreateWithoutFeatureInput, FeatureVoteUncheckedCreateWithoutFeatureInput> | FeatureVoteCreateWithoutFeatureInput[] | FeatureVoteUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureVoteCreateOrConnectWithoutFeatureInput | FeatureVoteCreateOrConnectWithoutFeatureInput[]
    upsert?: FeatureVoteUpsertWithWhereUniqueWithoutFeatureInput | FeatureVoteUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: FeatureVoteCreateManyFeatureInputEnvelope
    set?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    disconnect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    delete?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    connect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    update?: FeatureVoteUpdateWithWhereUniqueWithoutFeatureInput | FeatureVoteUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: FeatureVoteUpdateManyWithWhereWithoutFeatureInput | FeatureVoteUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: FeatureVoteScalarWhereInput | FeatureVoteScalarWhereInput[]
  }

  export type FeatureCommentUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<FeatureCommentCreateWithoutFeatureInput, FeatureCommentUncheckedCreateWithoutFeatureInput> | FeatureCommentCreateWithoutFeatureInput[] | FeatureCommentUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutFeatureInput | FeatureCommentCreateOrConnectWithoutFeatureInput[]
    upsert?: FeatureCommentUpsertWithWhereUniqueWithoutFeatureInput | FeatureCommentUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: FeatureCommentCreateManyFeatureInputEnvelope
    set?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    disconnect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    delete?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    update?: FeatureCommentUpdateWithWhereUniqueWithoutFeatureInput | FeatureCommentUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: FeatureCommentUpdateManyWithWhereWithoutFeatureInput | FeatureCommentUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: FeatureCommentScalarWhereInput | FeatureCommentScalarWhereInput[]
  }

  export type FeatureVoteUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<FeatureVoteCreateWithoutFeatureInput, FeatureVoteUncheckedCreateWithoutFeatureInput> | FeatureVoteCreateWithoutFeatureInput[] | FeatureVoteUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureVoteCreateOrConnectWithoutFeatureInput | FeatureVoteCreateOrConnectWithoutFeatureInput[]
    upsert?: FeatureVoteUpsertWithWhereUniqueWithoutFeatureInput | FeatureVoteUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: FeatureVoteCreateManyFeatureInputEnvelope
    set?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    disconnect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    delete?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    connect?: FeatureVoteWhereUniqueInput | FeatureVoteWhereUniqueInput[]
    update?: FeatureVoteUpdateWithWhereUniqueWithoutFeatureInput | FeatureVoteUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: FeatureVoteUpdateManyWithWhereWithoutFeatureInput | FeatureVoteUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: FeatureVoteScalarWhereInput | FeatureVoteScalarWhereInput[]
  }

  export type FeatureCommentUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<FeatureCommentCreateWithoutFeatureInput, FeatureCommentUncheckedCreateWithoutFeatureInput> | FeatureCommentCreateWithoutFeatureInput[] | FeatureCommentUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutFeatureInput | FeatureCommentCreateOrConnectWithoutFeatureInput[]
    upsert?: FeatureCommentUpsertWithWhereUniqueWithoutFeatureInput | FeatureCommentUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: FeatureCommentCreateManyFeatureInputEnvelope
    set?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    disconnect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    delete?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    update?: FeatureCommentUpdateWithWhereUniqueWithoutFeatureInput | FeatureCommentUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: FeatureCommentUpdateManyWithWhereWithoutFeatureInput | FeatureCommentUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: FeatureCommentScalarWhereInput | FeatureCommentScalarWhereInput[]
  }

  export type FeatureCreateNestedOneWithoutVotesInput = {
    create?: XOR<FeatureCreateWithoutVotesInput, FeatureUncheckedCreateWithoutVotesInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutVotesInput
    connect?: FeatureWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeatureVotesInput = {
    create?: XOR<UserCreateWithoutFeatureVotesInput, UserUncheckedCreateWithoutFeatureVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureVotesInput
    connect?: UserWhereUniqueInput
  }

  export type FeatureUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<FeatureCreateWithoutVotesInput, FeatureUncheckedCreateWithoutVotesInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutVotesInput
    upsert?: FeatureUpsertWithoutVotesInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutVotesInput, FeatureUpdateWithoutVotesInput>, FeatureUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutFeatureVotesNestedInput = {
    create?: XOR<UserCreateWithoutFeatureVotesInput, UserUncheckedCreateWithoutFeatureVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureVotesInput
    upsert?: UserUpsertWithoutFeatureVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeatureVotesInput, UserUpdateWithoutFeatureVotesInput>, UserUncheckedUpdateWithoutFeatureVotesInput>
  }

  export type FeatureCreateNestedOneWithoutCommentsInput = {
    create?: XOR<FeatureCreateWithoutCommentsInput, FeatureUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutCommentsInput
    connect?: FeatureWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeatureCommentsInput = {
    create?: XOR<UserCreateWithoutFeatureCommentsInput, UserUncheckedCreateWithoutFeatureCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type FeatureCommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<FeatureCommentCreateWithoutRepliesInput, FeatureCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutRepliesInput
    connect?: FeatureCommentWhereUniqueInput
  }

  export type FeatureCommentCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<FeatureCommentCreateWithoutParentCommentInput, FeatureCommentUncheckedCreateWithoutParentCommentInput> | FeatureCommentCreateWithoutParentCommentInput[] | FeatureCommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutParentCommentInput | FeatureCommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: FeatureCommentCreateManyParentCommentInputEnvelope
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
  }

  export type CommentReactionCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentReactionCreateWithoutCommentInput, CommentReactionUncheckedCreateWithoutCommentInput> | CommentReactionCreateWithoutCommentInput[] | CommentReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReactionCreateOrConnectWithoutCommentInput | CommentReactionCreateOrConnectWithoutCommentInput[]
    createMany?: CommentReactionCreateManyCommentInputEnvelope
    connect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
  }

  export type FeatureCommentUncheckedCreateNestedManyWithoutParentCommentInput = {
    create?: XOR<FeatureCommentCreateWithoutParentCommentInput, FeatureCommentUncheckedCreateWithoutParentCommentInput> | FeatureCommentCreateWithoutParentCommentInput[] | FeatureCommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutParentCommentInput | FeatureCommentCreateOrConnectWithoutParentCommentInput[]
    createMany?: FeatureCommentCreateManyParentCommentInputEnvelope
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
  }

  export type CommentReactionUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentReactionCreateWithoutCommentInput, CommentReactionUncheckedCreateWithoutCommentInput> | CommentReactionCreateWithoutCommentInput[] | CommentReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReactionCreateOrConnectWithoutCommentInput | CommentReactionCreateOrConnectWithoutCommentInput[]
    createMany?: CommentReactionCreateManyCommentInputEnvelope
    connect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
  }

  export type FeatureUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<FeatureCreateWithoutCommentsInput, FeatureUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutCommentsInput
    upsert?: FeatureUpsertWithoutCommentsInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutCommentsInput, FeatureUpdateWithoutCommentsInput>, FeatureUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutFeatureCommentsNestedInput = {
    create?: XOR<UserCreateWithoutFeatureCommentsInput, UserUncheckedCreateWithoutFeatureCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureCommentsInput
    upsert?: UserUpsertWithoutFeatureCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeatureCommentsInput, UserUpdateWithoutFeatureCommentsInput>, UserUncheckedUpdateWithoutFeatureCommentsInput>
  }

  export type FeatureCommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<FeatureCommentCreateWithoutRepliesInput, FeatureCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutRepliesInput
    upsert?: FeatureCommentUpsertWithoutRepliesInput
    disconnect?: FeatureCommentWhereInput | boolean
    delete?: FeatureCommentWhereInput | boolean
    connect?: FeatureCommentWhereUniqueInput
    update?: XOR<XOR<FeatureCommentUpdateToOneWithWhereWithoutRepliesInput, FeatureCommentUpdateWithoutRepliesInput>, FeatureCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type FeatureCommentUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<FeatureCommentCreateWithoutParentCommentInput, FeatureCommentUncheckedCreateWithoutParentCommentInput> | FeatureCommentCreateWithoutParentCommentInput[] | FeatureCommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutParentCommentInput | FeatureCommentCreateOrConnectWithoutParentCommentInput[]
    upsert?: FeatureCommentUpsertWithWhereUniqueWithoutParentCommentInput | FeatureCommentUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: FeatureCommentCreateManyParentCommentInputEnvelope
    set?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    disconnect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    delete?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    update?: FeatureCommentUpdateWithWhereUniqueWithoutParentCommentInput | FeatureCommentUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: FeatureCommentUpdateManyWithWhereWithoutParentCommentInput | FeatureCommentUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: FeatureCommentScalarWhereInput | FeatureCommentScalarWhereInput[]
  }

  export type CommentReactionUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentReactionCreateWithoutCommentInput, CommentReactionUncheckedCreateWithoutCommentInput> | CommentReactionCreateWithoutCommentInput[] | CommentReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReactionCreateOrConnectWithoutCommentInput | CommentReactionCreateOrConnectWithoutCommentInput[]
    upsert?: CommentReactionUpsertWithWhereUniqueWithoutCommentInput | CommentReactionUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentReactionCreateManyCommentInputEnvelope
    set?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    disconnect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    delete?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    connect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    update?: CommentReactionUpdateWithWhereUniqueWithoutCommentInput | CommentReactionUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentReactionUpdateManyWithWhereWithoutCommentInput | CommentReactionUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentReactionScalarWhereInput | CommentReactionScalarWhereInput[]
  }

  export type FeatureCommentUncheckedUpdateManyWithoutParentCommentNestedInput = {
    create?: XOR<FeatureCommentCreateWithoutParentCommentInput, FeatureCommentUncheckedCreateWithoutParentCommentInput> | FeatureCommentCreateWithoutParentCommentInput[] | FeatureCommentUncheckedCreateWithoutParentCommentInput[]
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutParentCommentInput | FeatureCommentCreateOrConnectWithoutParentCommentInput[]
    upsert?: FeatureCommentUpsertWithWhereUniqueWithoutParentCommentInput | FeatureCommentUpsertWithWhereUniqueWithoutParentCommentInput[]
    createMany?: FeatureCommentCreateManyParentCommentInputEnvelope
    set?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    disconnect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    delete?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    connect?: FeatureCommentWhereUniqueInput | FeatureCommentWhereUniqueInput[]
    update?: FeatureCommentUpdateWithWhereUniqueWithoutParentCommentInput | FeatureCommentUpdateWithWhereUniqueWithoutParentCommentInput[]
    updateMany?: FeatureCommentUpdateManyWithWhereWithoutParentCommentInput | FeatureCommentUpdateManyWithWhereWithoutParentCommentInput[]
    deleteMany?: FeatureCommentScalarWhereInput | FeatureCommentScalarWhereInput[]
  }

  export type CommentReactionUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentReactionCreateWithoutCommentInput, CommentReactionUncheckedCreateWithoutCommentInput> | CommentReactionCreateWithoutCommentInput[] | CommentReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentReactionCreateOrConnectWithoutCommentInput | CommentReactionCreateOrConnectWithoutCommentInput[]
    upsert?: CommentReactionUpsertWithWhereUniqueWithoutCommentInput | CommentReactionUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentReactionCreateManyCommentInputEnvelope
    set?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    disconnect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    delete?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    connect?: CommentReactionWhereUniqueInput | CommentReactionWhereUniqueInput[]
    update?: CommentReactionUpdateWithWhereUniqueWithoutCommentInput | CommentReactionUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentReactionUpdateManyWithWhereWithoutCommentInput | CommentReactionUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentReactionScalarWhereInput | CommentReactionScalarWhereInput[]
  }

  export type FeatureCommentCreateNestedOneWithoutReactionsInput = {
    create?: XOR<FeatureCommentCreateWithoutReactionsInput, FeatureCommentUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutReactionsInput
    connect?: FeatureCommentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentReactionsInput = {
    create?: XOR<UserCreateWithoutCommentReactionsInput, UserUncheckedCreateWithoutCommentReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type FeatureCommentUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<FeatureCommentCreateWithoutReactionsInput, FeatureCommentUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: FeatureCommentCreateOrConnectWithoutReactionsInput
    upsert?: FeatureCommentUpsertWithoutReactionsInput
    connect?: FeatureCommentWhereUniqueInput
    update?: XOR<XOR<FeatureCommentUpdateToOneWithWhereWithoutReactionsInput, FeatureCommentUpdateWithoutReactionsInput>, FeatureCommentUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentReactionsNestedInput = {
    create?: XOR<UserCreateWithoutCommentReactionsInput, UserUncheckedCreateWithoutCommentReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentReactionsInput
    upsert?: UserUpsertWithoutCommentReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentReactionsInput, UserUpdateWithoutCommentReactionsInput>, UserUncheckedUpdateWithoutCommentReactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumFeatureStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureStatus | EnumFeatureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureStatus[] | ListEnumFeatureStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureStatus[] | ListEnumFeatureStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureStatusFilter<$PrismaModel> | $Enums.FeatureStatus
  }

  export type NestedEnumFeatureTagFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureTag | EnumFeatureTagFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureTag[] | ListEnumFeatureTagFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureTag[] | ListEnumFeatureTagFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTagFilter<$PrismaModel> | $Enums.FeatureTag
  }

  export type NestedEnumFeatureStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureStatus | EnumFeatureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureStatus[] | ListEnumFeatureStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureStatus[] | ListEnumFeatureStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeatureStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureStatusFilter<$PrismaModel>
    _max?: NestedEnumFeatureStatusFilter<$PrismaModel>
  }

  export type NestedEnumFeatureTagWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureTag | EnumFeatureTagFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureTag[] | ListEnumFeatureTagFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureTag[] | ListEnumFeatureTagFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTagWithAggregatesFilter<$PrismaModel> | $Enums.FeatureTag
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureTagFilter<$PrismaModel>
    _max?: NestedEnumFeatureTagFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutUserInput = {
    id?: string
    key: string
    name?: string | null
    lastUsed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    name?: string | null
    lastUsed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyCreateManyUserInputEnvelope = {
    data: ApiKeyCreateManyUserInput | ApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CodingSessionCreateWithoutUserInput = {
    id?: string
    description?: string | null
    interactionType: string
    language?: string | null
    codeSnippet?: string | null
    explanation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CodingSessionUncheckedCreateWithoutUserInput = {
    id?: string
    description?: string | null
    interactionType: string
    language?: string | null
    codeSnippet?: string | null
    explanation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CodingSessionCreateOrConnectWithoutUserInput = {
    where: CodingSessionWhereUniqueInput
    create: XOR<CodingSessionCreateWithoutUserInput, CodingSessionUncheckedCreateWithoutUserInput>
  }

  export type CodingSessionCreateManyUserInputEnvelope = {
    data: CodingSessionCreateManyUserInput | CodingSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TipCreateWithoutUserInput = {
    id?: string
    content: string
    title?: string | null
    explanation?: string | null
    createdAt?: Date | string
  }

  export type TipUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    title?: string | null
    explanation?: string | null
    createdAt?: Date | string
  }

  export type TipCreateOrConnectWithoutUserInput = {
    where: TipWhereUniqueInput
    create: XOR<TipCreateWithoutUserInput, TipUncheckedCreateWithoutUserInput>
  }

  export type TipCreateManyUserInputEnvelope = {
    data: TipCreateManyUserInput | TipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeatureCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: FeatureVoteCreateNestedManyWithoutFeatureInput
    comments?: FeatureCommentCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: FeatureVoteUncheckedCreateNestedManyWithoutFeatureInput
    comments?: FeatureCommentUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutCreatedByInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutCreatedByInput, FeatureUncheckedCreateWithoutCreatedByInput>
  }

  export type FeatureCreateManyCreatedByInputEnvelope = {
    data: FeatureCreateManyCreatedByInput | FeatureCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type FeatureVoteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    feature: FeatureCreateNestedOneWithoutVotesInput
  }

  export type FeatureVoteUncheckedCreateWithoutUserInput = {
    id?: string
    featureId: string
    createdAt?: Date | string
  }

  export type FeatureVoteCreateOrConnectWithoutUserInput = {
    where: FeatureVoteWhereUniqueInput
    create: XOR<FeatureVoteCreateWithoutUserInput, FeatureVoteUncheckedCreateWithoutUserInput>
  }

  export type FeatureVoteCreateManyUserInputEnvelope = {
    data: FeatureVoteCreateManyUserInput | FeatureVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeatureCommentCreateWithoutUserInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feature: FeatureCreateNestedOneWithoutCommentsInput
    parentComment?: FeatureCommentCreateNestedOneWithoutRepliesInput
    replies?: FeatureCommentCreateNestedManyWithoutParentCommentInput
    reactions?: CommentReactionCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentUncheckedCreateWithoutUserInput = {
    id?: string
    featureId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCommentId?: string | null
    replies?: FeatureCommentUncheckedCreateNestedManyWithoutParentCommentInput
    reactions?: CommentReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentCreateOrConnectWithoutUserInput = {
    where: FeatureCommentWhereUniqueInput
    create: XOR<FeatureCommentCreateWithoutUserInput, FeatureCommentUncheckedCreateWithoutUserInput>
  }

  export type FeatureCommentCreateManyUserInputEnvelope = {
    data: FeatureCommentCreateManyUserInput | FeatureCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentReactionCreateWithoutUserInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    comment: FeatureCommentCreateNestedOneWithoutReactionsInput
  }

  export type CommentReactionUncheckedCreateWithoutUserInput = {
    id?: string
    commentId: string
    emoji: string
    createdAt?: Date | string
  }

  export type CommentReactionCreateOrConnectWithoutUserInput = {
    where: CommentReactionWhereUniqueInput
    create: XOR<CommentReactionCreateWithoutUserInput, CommentReactionUncheckedCreateWithoutUserInput>
  }

  export type CommentReactionCreateManyUserInputEnvelope = {
    data: CommentReactionCreateManyUserInput | CommentReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<ApiKeyCreateWithoutUserInput, ApiKeyUncheckedCreateWithoutUserInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutUserInput, ApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    key?: StringFilter<"ApiKey"> | string
    name?: StringNullableFilter<"ApiKey"> | string | null
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    userId?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type CodingSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: CodingSessionWhereUniqueInput
    update: XOR<CodingSessionUpdateWithoutUserInput, CodingSessionUncheckedUpdateWithoutUserInput>
    create: XOR<CodingSessionCreateWithoutUserInput, CodingSessionUncheckedCreateWithoutUserInput>
  }

  export type CodingSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: CodingSessionWhereUniqueInput
    data: XOR<CodingSessionUpdateWithoutUserInput, CodingSessionUncheckedUpdateWithoutUserInput>
  }

  export type CodingSessionUpdateManyWithWhereWithoutUserInput = {
    where: CodingSessionScalarWhereInput
    data: XOR<CodingSessionUpdateManyMutationInput, CodingSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type CodingSessionScalarWhereInput = {
    AND?: CodingSessionScalarWhereInput | CodingSessionScalarWhereInput[]
    OR?: CodingSessionScalarWhereInput[]
    NOT?: CodingSessionScalarWhereInput | CodingSessionScalarWhereInput[]
    id?: StringFilter<"CodingSession"> | string
    userId?: StringFilter<"CodingSession"> | string
    description?: StringNullableFilter<"CodingSession"> | string | null
    interactionType?: StringFilter<"CodingSession"> | string
    language?: StringNullableFilter<"CodingSession"> | string | null
    codeSnippet?: StringNullableFilter<"CodingSession"> | string | null
    explanation?: StringNullableFilter<"CodingSession"> | string | null
    metadata?: JsonNullableFilter<"CodingSession">
    startedAt?: DateTimeFilter<"CodingSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"CodingSession"> | Date | string | null
  }

  export type TipUpsertWithWhereUniqueWithoutUserInput = {
    where: TipWhereUniqueInput
    update: XOR<TipUpdateWithoutUserInput, TipUncheckedUpdateWithoutUserInput>
    create: XOR<TipCreateWithoutUserInput, TipUncheckedCreateWithoutUserInput>
  }

  export type TipUpdateWithWhereUniqueWithoutUserInput = {
    where: TipWhereUniqueInput
    data: XOR<TipUpdateWithoutUserInput, TipUncheckedUpdateWithoutUserInput>
  }

  export type TipUpdateManyWithWhereWithoutUserInput = {
    where: TipScalarWhereInput
    data: XOR<TipUpdateManyMutationInput, TipUncheckedUpdateManyWithoutUserInput>
  }

  export type TipScalarWhereInput = {
    AND?: TipScalarWhereInput | TipScalarWhereInput[]
    OR?: TipScalarWhereInput[]
    NOT?: TipScalarWhereInput | TipScalarWhereInput[]
    id?: StringFilter<"Tip"> | string
    userId?: StringFilter<"Tip"> | string
    content?: StringFilter<"Tip"> | string
    title?: StringNullableFilter<"Tip"> | string | null
    explanation?: StringNullableFilter<"Tip"> | string | null
    createdAt?: DateTimeFilter<"Tip"> | Date | string
  }

  export type FeatureUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: FeatureWhereUniqueInput
    update: XOR<FeatureUpdateWithoutCreatedByInput, FeatureUncheckedUpdateWithoutCreatedByInput>
    create: XOR<FeatureCreateWithoutCreatedByInput, FeatureUncheckedCreateWithoutCreatedByInput>
  }

  export type FeatureUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: FeatureWhereUniqueInput
    data: XOR<FeatureUpdateWithoutCreatedByInput, FeatureUncheckedUpdateWithoutCreatedByInput>
  }

  export type FeatureUpdateManyWithWhereWithoutCreatedByInput = {
    where: FeatureScalarWhereInput
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type FeatureScalarWhereInput = {
    AND?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    OR?: FeatureScalarWhereInput[]
    NOT?: FeatureScalarWhereInput | FeatureScalarWhereInput[]
    id?: StringFilter<"Feature"> | string
    title?: StringFilter<"Feature"> | string
    description?: StringFilter<"Feature"> | string
    status?: EnumFeatureStatusFilter<"Feature"> | $Enums.FeatureStatus
    tag?: EnumFeatureTagFilter<"Feature"> | $Enums.FeatureTag
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    createdByUserId?: StringNullableFilter<"Feature"> | string | null
  }

  export type FeatureVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: FeatureVoteWhereUniqueInput
    update: XOR<FeatureVoteUpdateWithoutUserInput, FeatureVoteUncheckedUpdateWithoutUserInput>
    create: XOR<FeatureVoteCreateWithoutUserInput, FeatureVoteUncheckedCreateWithoutUserInput>
  }

  export type FeatureVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: FeatureVoteWhereUniqueInput
    data: XOR<FeatureVoteUpdateWithoutUserInput, FeatureVoteUncheckedUpdateWithoutUserInput>
  }

  export type FeatureVoteUpdateManyWithWhereWithoutUserInput = {
    where: FeatureVoteScalarWhereInput
    data: XOR<FeatureVoteUpdateManyMutationInput, FeatureVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type FeatureVoteScalarWhereInput = {
    AND?: FeatureVoteScalarWhereInput | FeatureVoteScalarWhereInput[]
    OR?: FeatureVoteScalarWhereInput[]
    NOT?: FeatureVoteScalarWhereInput | FeatureVoteScalarWhereInput[]
    id?: StringFilter<"FeatureVote"> | string
    featureId?: StringFilter<"FeatureVote"> | string
    userId?: StringFilter<"FeatureVote"> | string
    createdAt?: DateTimeFilter<"FeatureVote"> | Date | string
  }

  export type FeatureCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: FeatureCommentWhereUniqueInput
    update: XOR<FeatureCommentUpdateWithoutUserInput, FeatureCommentUncheckedUpdateWithoutUserInput>
    create: XOR<FeatureCommentCreateWithoutUserInput, FeatureCommentUncheckedCreateWithoutUserInput>
  }

  export type FeatureCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: FeatureCommentWhereUniqueInput
    data: XOR<FeatureCommentUpdateWithoutUserInput, FeatureCommentUncheckedUpdateWithoutUserInput>
  }

  export type FeatureCommentUpdateManyWithWhereWithoutUserInput = {
    where: FeatureCommentScalarWhereInput
    data: XOR<FeatureCommentUpdateManyMutationInput, FeatureCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type FeatureCommentScalarWhereInput = {
    AND?: FeatureCommentScalarWhereInput | FeatureCommentScalarWhereInput[]
    OR?: FeatureCommentScalarWhereInput[]
    NOT?: FeatureCommentScalarWhereInput | FeatureCommentScalarWhereInput[]
    id?: StringFilter<"FeatureComment"> | string
    featureId?: StringFilter<"FeatureComment"> | string
    userId?: StringFilter<"FeatureComment"> | string
    body?: StringFilter<"FeatureComment"> | string
    createdAt?: DateTimeFilter<"FeatureComment"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureComment"> | Date | string
    parentCommentId?: StringNullableFilter<"FeatureComment"> | string | null
  }

  export type CommentReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentReactionWhereUniqueInput
    update: XOR<CommentReactionUpdateWithoutUserInput, CommentReactionUncheckedUpdateWithoutUserInput>
    create: XOR<CommentReactionCreateWithoutUserInput, CommentReactionUncheckedCreateWithoutUserInput>
  }

  export type CommentReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentReactionWhereUniqueInput
    data: XOR<CommentReactionUpdateWithoutUserInput, CommentReactionUncheckedUpdateWithoutUserInput>
  }

  export type CommentReactionUpdateManyWithWhereWithoutUserInput = {
    where: CommentReactionScalarWhereInput
    data: XOR<CommentReactionUpdateManyMutationInput, CommentReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentReactionScalarWhereInput = {
    AND?: CommentReactionScalarWhereInput | CommentReactionScalarWhereInput[]
    OR?: CommentReactionScalarWhereInput[]
    NOT?: CommentReactionScalarWhereInput | CommentReactionScalarWhereInput[]
    id?: StringFilter<"CommentReaction"> | string
    commentId?: StringFilter<"CommentReaction"> | string
    userId?: StringFilter<"CommentReaction"> | string
    emoji?: StringFilter<"CommentReaction"> | string
    createdAt?: DateTimeFilter<"CommentReaction"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCodingSessionsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCodingSessionsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCodingSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCodingSessionsInput, UserUncheckedCreateWithoutCodingSessionsInput>
  }

  export type UserUpsertWithoutCodingSessionsInput = {
    update: XOR<UserUpdateWithoutCodingSessionsInput, UserUncheckedUpdateWithoutCodingSessionsInput>
    create: XOR<UserCreateWithoutCodingSessionsInput, UserUncheckedCreateWithoutCodingSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCodingSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCodingSessionsInput, UserUncheckedUpdateWithoutCodingSessionsInput>
  }

  export type UserUpdateWithoutCodingSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCodingSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTipsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTipsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTipsInput, UserUncheckedCreateWithoutTipsInput>
  }

  export type UserUpsertWithoutTipsInput = {
    update: XOR<UserUpdateWithoutTipsInput, UserUncheckedUpdateWithoutTipsInput>
    create: XOR<UserCreateWithoutTipsInput, UserUncheckedCreateWithoutTipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTipsInput, UserUncheckedUpdateWithoutTipsInput>
  }

  export type UserUpdateWithoutTipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCreatedFeaturesInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedFeaturesInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedFeaturesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedFeaturesInput, UserUncheckedCreateWithoutCreatedFeaturesInput>
  }

  export type FeatureVoteCreateWithoutFeatureInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeatureVotesInput
  }

  export type FeatureVoteUncheckedCreateWithoutFeatureInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FeatureVoteCreateOrConnectWithoutFeatureInput = {
    where: FeatureVoteWhereUniqueInput
    create: XOR<FeatureVoteCreateWithoutFeatureInput, FeatureVoteUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureVoteCreateManyFeatureInputEnvelope = {
    data: FeatureVoteCreateManyFeatureInput | FeatureVoteCreateManyFeatureInput[]
    skipDuplicates?: boolean
  }

  export type FeatureCommentCreateWithoutFeatureInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeatureCommentsInput
    parentComment?: FeatureCommentCreateNestedOneWithoutRepliesInput
    replies?: FeatureCommentCreateNestedManyWithoutParentCommentInput
    reactions?: CommentReactionCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentUncheckedCreateWithoutFeatureInput = {
    id?: string
    userId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCommentId?: string | null
    replies?: FeatureCommentUncheckedCreateNestedManyWithoutParentCommentInput
    reactions?: CommentReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentCreateOrConnectWithoutFeatureInput = {
    where: FeatureCommentWhereUniqueInput
    create: XOR<FeatureCommentCreateWithoutFeatureInput, FeatureCommentUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureCommentCreateManyFeatureInputEnvelope = {
    data: FeatureCommentCreateManyFeatureInput | FeatureCommentCreateManyFeatureInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedFeaturesInput = {
    update: XOR<UserUpdateWithoutCreatedFeaturesInput, UserUncheckedUpdateWithoutCreatedFeaturesInput>
    create: XOR<UserCreateWithoutCreatedFeaturesInput, UserUncheckedCreateWithoutCreatedFeaturesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedFeaturesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedFeaturesInput, UserUncheckedUpdateWithoutCreatedFeaturesInput>
  }

  export type UserUpdateWithoutCreatedFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedFeaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeatureVoteUpsertWithWhereUniqueWithoutFeatureInput = {
    where: FeatureVoteWhereUniqueInput
    update: XOR<FeatureVoteUpdateWithoutFeatureInput, FeatureVoteUncheckedUpdateWithoutFeatureInput>
    create: XOR<FeatureVoteCreateWithoutFeatureInput, FeatureVoteUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureVoteUpdateWithWhereUniqueWithoutFeatureInput = {
    where: FeatureVoteWhereUniqueInput
    data: XOR<FeatureVoteUpdateWithoutFeatureInput, FeatureVoteUncheckedUpdateWithoutFeatureInput>
  }

  export type FeatureVoteUpdateManyWithWhereWithoutFeatureInput = {
    where: FeatureVoteScalarWhereInput
    data: XOR<FeatureVoteUpdateManyMutationInput, FeatureVoteUncheckedUpdateManyWithoutFeatureInput>
  }

  export type FeatureCommentUpsertWithWhereUniqueWithoutFeatureInput = {
    where: FeatureCommentWhereUniqueInput
    update: XOR<FeatureCommentUpdateWithoutFeatureInput, FeatureCommentUncheckedUpdateWithoutFeatureInput>
    create: XOR<FeatureCommentCreateWithoutFeatureInput, FeatureCommentUncheckedCreateWithoutFeatureInput>
  }

  export type FeatureCommentUpdateWithWhereUniqueWithoutFeatureInput = {
    where: FeatureCommentWhereUniqueInput
    data: XOR<FeatureCommentUpdateWithoutFeatureInput, FeatureCommentUncheckedUpdateWithoutFeatureInput>
  }

  export type FeatureCommentUpdateManyWithWhereWithoutFeatureInput = {
    where: FeatureCommentScalarWhereInput
    data: XOR<FeatureCommentUpdateManyMutationInput, FeatureCommentUncheckedUpdateManyWithoutFeatureInput>
  }

  export type FeatureCreateWithoutVotesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedFeaturesInput
    comments?: FeatureCommentCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    comments?: FeatureCommentUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutVotesInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutVotesInput, FeatureUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutFeatureVotesInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeatureVotesInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeatureVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeatureVotesInput, UserUncheckedCreateWithoutFeatureVotesInput>
  }

  export type FeatureUpsertWithoutVotesInput = {
    update: XOR<FeatureUpdateWithoutVotesInput, FeatureUncheckedUpdateWithoutVotesInput>
    create: XOR<FeatureCreateWithoutVotesInput, FeatureUncheckedCreateWithoutVotesInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutVotesInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutVotesInput, FeatureUncheckedUpdateWithoutVotesInput>
  }

  export type FeatureUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedFeaturesNestedInput
    comments?: FeatureCommentUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: FeatureCommentUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type UserUpsertWithoutFeatureVotesInput = {
    update: XOR<UserUpdateWithoutFeatureVotesInput, UserUncheckedUpdateWithoutFeatureVotesInput>
    create: XOR<UserCreateWithoutFeatureVotesInput, UserUncheckedCreateWithoutFeatureVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeatureVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeatureVotesInput, UserUncheckedUpdateWithoutFeatureVotesInput>
  }

  export type UserUpdateWithoutFeatureVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeatureVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeatureCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedFeaturesInput
    votes?: FeatureVoteCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    votes?: FeatureVoteUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureCreateOrConnectWithoutCommentsInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutCommentsInput, FeatureUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutFeatureCommentsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeatureCommentsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    commentReactions?: CommentReactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeatureCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeatureCommentsInput, UserUncheckedCreateWithoutFeatureCommentsInput>
  }

  export type FeatureCommentCreateWithoutRepliesInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feature: FeatureCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutFeatureCommentsInput
    parentComment?: FeatureCommentCreateNestedOneWithoutRepliesInput
    reactions?: CommentReactionCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    featureId: string
    userId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCommentId?: string | null
    reactions?: CommentReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentCreateOrConnectWithoutRepliesInput = {
    where: FeatureCommentWhereUniqueInput
    create: XOR<FeatureCommentCreateWithoutRepliesInput, FeatureCommentUncheckedCreateWithoutRepliesInput>
  }

  export type FeatureCommentCreateWithoutParentCommentInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feature: FeatureCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutFeatureCommentsInput
    replies?: FeatureCommentCreateNestedManyWithoutParentCommentInput
    reactions?: CommentReactionCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentUncheckedCreateWithoutParentCommentInput = {
    id?: string
    featureId: string
    userId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: FeatureCommentUncheckedCreateNestedManyWithoutParentCommentInput
    reactions?: CommentReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type FeatureCommentCreateOrConnectWithoutParentCommentInput = {
    where: FeatureCommentWhereUniqueInput
    create: XOR<FeatureCommentCreateWithoutParentCommentInput, FeatureCommentUncheckedCreateWithoutParentCommentInput>
  }

  export type FeatureCommentCreateManyParentCommentInputEnvelope = {
    data: FeatureCommentCreateManyParentCommentInput | FeatureCommentCreateManyParentCommentInput[]
    skipDuplicates?: boolean
  }

  export type CommentReactionCreateWithoutCommentInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentReactionsInput
  }

  export type CommentReactionUncheckedCreateWithoutCommentInput = {
    id?: string
    userId: string
    emoji: string
    createdAt?: Date | string
  }

  export type CommentReactionCreateOrConnectWithoutCommentInput = {
    where: CommentReactionWhereUniqueInput
    create: XOR<CommentReactionCreateWithoutCommentInput, CommentReactionUncheckedCreateWithoutCommentInput>
  }

  export type CommentReactionCreateManyCommentInputEnvelope = {
    data: CommentReactionCreateManyCommentInput | CommentReactionCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type FeatureUpsertWithoutCommentsInput = {
    update: XOR<FeatureUpdateWithoutCommentsInput, FeatureUncheckedUpdateWithoutCommentsInput>
    create: XOR<FeatureCreateWithoutCommentsInput, FeatureUncheckedCreateWithoutCommentsInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutCommentsInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutCommentsInput, FeatureUncheckedUpdateWithoutCommentsInput>
  }

  export type FeatureUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedFeaturesNestedInput
    votes?: FeatureVoteUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    votes?: FeatureVoteUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type UserUpsertWithoutFeatureCommentsInput = {
    update: XOR<UserUpdateWithoutFeatureCommentsInput, UserUncheckedUpdateWithoutFeatureCommentsInput>
    create: XOR<UserCreateWithoutFeatureCommentsInput, UserUncheckedCreateWithoutFeatureCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeatureCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeatureCommentsInput, UserUncheckedUpdateWithoutFeatureCommentsInput>
  }

  export type UserUpdateWithoutFeatureCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeatureCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    commentReactions?: CommentReactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeatureCommentUpsertWithoutRepliesInput = {
    update: XOR<FeatureCommentUpdateWithoutRepliesInput, FeatureCommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<FeatureCommentCreateWithoutRepliesInput, FeatureCommentUncheckedCreateWithoutRepliesInput>
    where?: FeatureCommentWhereInput
  }

  export type FeatureCommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: FeatureCommentWhereInput
    data: XOR<FeatureCommentUpdateWithoutRepliesInput, FeatureCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type FeatureCommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutFeatureCommentsNestedInput
    parentComment?: FeatureCommentUpdateOneWithoutRepliesNestedInput
    reactions?: CommentReactionUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: CommentReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUpsertWithWhereUniqueWithoutParentCommentInput = {
    where: FeatureCommentWhereUniqueInput
    update: XOR<FeatureCommentUpdateWithoutParentCommentInput, FeatureCommentUncheckedUpdateWithoutParentCommentInput>
    create: XOR<FeatureCommentCreateWithoutParentCommentInput, FeatureCommentUncheckedCreateWithoutParentCommentInput>
  }

  export type FeatureCommentUpdateWithWhereUniqueWithoutParentCommentInput = {
    where: FeatureCommentWhereUniqueInput
    data: XOR<FeatureCommentUpdateWithoutParentCommentInput, FeatureCommentUncheckedUpdateWithoutParentCommentInput>
  }

  export type FeatureCommentUpdateManyWithWhereWithoutParentCommentInput = {
    where: FeatureCommentScalarWhereInput
    data: XOR<FeatureCommentUpdateManyMutationInput, FeatureCommentUncheckedUpdateManyWithoutParentCommentInput>
  }

  export type CommentReactionUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentReactionWhereUniqueInput
    update: XOR<CommentReactionUpdateWithoutCommentInput, CommentReactionUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentReactionCreateWithoutCommentInput, CommentReactionUncheckedCreateWithoutCommentInput>
  }

  export type CommentReactionUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentReactionWhereUniqueInput
    data: XOR<CommentReactionUpdateWithoutCommentInput, CommentReactionUncheckedUpdateWithoutCommentInput>
  }

  export type CommentReactionUpdateManyWithWhereWithoutCommentInput = {
    where: CommentReactionScalarWhereInput
    data: XOR<CommentReactionUpdateManyMutationInput, CommentReactionUncheckedUpdateManyWithoutCommentInput>
  }

  export type FeatureCommentCreateWithoutReactionsInput = {
    id?: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feature: FeatureCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutFeatureCommentsInput
    parentComment?: FeatureCommentCreateNestedOneWithoutRepliesInput
    replies?: FeatureCommentCreateNestedManyWithoutParentCommentInput
  }

  export type FeatureCommentUncheckedCreateWithoutReactionsInput = {
    id?: string
    featureId: string
    userId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCommentId?: string | null
    replies?: FeatureCommentUncheckedCreateNestedManyWithoutParentCommentInput
  }

  export type FeatureCommentCreateOrConnectWithoutReactionsInput = {
    where: FeatureCommentWhereUniqueInput
    create: XOR<FeatureCommentCreateWithoutReactionsInput, FeatureCommentUncheckedCreateWithoutReactionsInput>
  }

  export type UserCreateWithoutCommentReactionsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionCreateNestedManyWithoutUserInput
    tips?: TipCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentReactionsInput = {
    id?: string
    email: string
    name?: string | null
    emailVerified?: boolean | null
    image?: string | null
    bio?: string | null
    theme?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutUserInput
    codingSessions?: CodingSessionUncheckedCreateNestedManyWithoutUserInput
    tips?: TipUncheckedCreateNestedManyWithoutUserInput
    createdFeatures?: FeatureUncheckedCreateNestedManyWithoutCreatedByInput
    featureVotes?: FeatureVoteUncheckedCreateNestedManyWithoutUserInput
    featureComments?: FeatureCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentReactionsInput, UserUncheckedCreateWithoutCommentReactionsInput>
  }

  export type FeatureCommentUpsertWithoutReactionsInput = {
    update: XOR<FeatureCommentUpdateWithoutReactionsInput, FeatureCommentUncheckedUpdateWithoutReactionsInput>
    create: XOR<FeatureCommentCreateWithoutReactionsInput, FeatureCommentUncheckedCreateWithoutReactionsInput>
    where?: FeatureCommentWhereInput
  }

  export type FeatureCommentUpdateToOneWithWhereWithoutReactionsInput = {
    where?: FeatureCommentWhereInput
    data: XOR<FeatureCommentUpdateWithoutReactionsInput, FeatureCommentUncheckedUpdateWithoutReactionsInput>
  }

  export type FeatureCommentUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutFeatureCommentsNestedInput
    parentComment?: FeatureCommentUpdateOneWithoutRepliesNestedInput
    replies?: FeatureCommentUpdateManyWithoutParentCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: FeatureCommentUncheckedUpdateManyWithoutParentCommentNestedInput
  }

  export type UserUpsertWithoutCommentReactionsInput = {
    update: XOR<UserUpdateWithoutCommentReactionsInput, UserUncheckedUpdateWithoutCommentReactionsInput>
    create: XOR<UserCreateWithoutCommentReactionsInput, UserUncheckedCreateWithoutCommentReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentReactionsInput, UserUncheckedUpdateWithoutCommentReactionsInput>
  }

  export type UserUpdateWithoutCommentReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUpdateManyWithoutUserNestedInput
    tips?: TipUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutUserNestedInput
    codingSessions?: CodingSessionUncheckedUpdateManyWithoutUserNestedInput
    tips?: TipUncheckedUpdateManyWithoutUserNestedInput
    createdFeatures?: FeatureUncheckedUpdateManyWithoutCreatedByNestedInput
    featureVotes?: FeatureVoteUncheckedUpdateManyWithoutUserNestedInput
    featureComments?: FeatureCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreateManyUserInput = {
    id?: string
    key: string
    name?: string | null
    lastUsed?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodingSessionCreateManyUserInput = {
    id?: string
    description?: string | null
    interactionType: string
    language?: string | null
    codeSnippet?: string | null
    explanation?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: Date | string
    endedAt?: Date | string | null
  }

  export type TipCreateManyUserInput = {
    id?: string
    content: string
    title?: string | null
    explanation?: string | null
    createdAt?: Date | string
  }

  export type FeatureCreateManyCreatedByInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.FeatureStatus
    tag?: $Enums.FeatureTag
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureVoteCreateManyUserInput = {
    id?: string
    featureId: string
    createdAt?: Date | string
  }

  export type FeatureCommentCreateManyUserInput = {
    id?: string
    featureId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCommentId?: string | null
  }

  export type CommentReactionCreateManyUserInput = {
    id?: string
    commentId: string
    emoji: string
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodingSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    interactionType?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    codeSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CodingSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    interactionType?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    codeSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CodingSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    interactionType?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    codeSnippet?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: FeatureVoteUpdateManyWithoutFeatureNestedInput
    comments?: FeatureCommentUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: FeatureVoteUncheckedUpdateManyWithoutFeatureNestedInput
    comments?: FeatureCommentUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumFeatureStatusFieldUpdateOperationsInput | $Enums.FeatureStatus
    tag?: EnumFeatureTagFieldUpdateOperationsInput | $Enums.FeatureTag
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateOneRequiredWithoutVotesNestedInput
  }

  export type FeatureVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateOneRequiredWithoutCommentsNestedInput
    parentComment?: FeatureCommentUpdateOneWithoutRepliesNestedInput
    replies?: FeatureCommentUpdateManyWithoutParentCommentNestedInput
    reactions?: CommentReactionUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: FeatureCommentUncheckedUpdateManyWithoutParentCommentNestedInput
    reactions?: CommentReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: FeatureCommentUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type CommentReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    commentId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureVoteCreateManyFeatureInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FeatureCommentCreateManyFeatureInput = {
    id?: string
    userId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentCommentId?: string | null
  }

  export type FeatureVoteUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeatureVotesNestedInput
  }

  export type FeatureVoteUncheckedUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureVoteUncheckedUpdateManyWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureCommentUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeatureCommentsNestedInput
    parentComment?: FeatureCommentUpdateOneWithoutRepliesNestedInput
    replies?: FeatureCommentUpdateManyWithoutParentCommentNestedInput
    reactions?: CommentReactionUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: FeatureCommentUncheckedUpdateManyWithoutParentCommentNestedInput
    reactions?: CommentReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateManyWithoutFeatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCommentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeatureCommentCreateManyParentCommentInput = {
    id?: string
    featureId: string
    userId: string
    body: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentReactionCreateManyCommentInput = {
    id?: string
    userId: string
    emoji: string
    createdAt?: Date | string
  }

  export type FeatureCommentUpdateWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feature?: FeatureUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutFeatureCommentsNestedInput
    replies?: FeatureCommentUpdateManyWithoutParentCommentNestedInput
    reactions?: CommentReactionUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: FeatureCommentUncheckedUpdateManyWithoutParentCommentNestedInput
    reactions?: CommentReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type FeatureCommentUncheckedUpdateManyWithoutParentCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    featureId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReactionUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentReactionsNestedInput
  }

  export type CommentReactionUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentReactionUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureCountOutputTypeDefaultArgs instead
     */
    export type FeatureCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureCommentCountOutputTypeDefaultArgs instead
     */
    export type FeatureCommentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureCommentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationDefaultArgs instead
     */
    export type VerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiKeyDefaultArgs instead
     */
    export type ApiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CodingSessionDefaultArgs instead
     */
    export type CodingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CodingSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TipDefaultArgs instead
     */
    export type TipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureDefaultArgs instead
     */
    export type FeatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureVoteDefaultArgs instead
     */
    export type FeatureVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureVoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeatureCommentDefaultArgs instead
     */
    export type FeatureCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeatureCommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentReactionDefaultArgs instead
     */
    export type CommentReactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentReactionDefaultArgs<ExtArgs>

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