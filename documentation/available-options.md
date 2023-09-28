<h1 style="text-align:center"> Available options </h1>

### Table of contents

- [Table of contents](#table-of-contents)
- [production](#production)
- [apiToken](#apitoken)
- [logLevels](#loglevels)
- [apiLogLevels](#apiloglevels)

### production

- **Type:** `boolean`
- **Default:** `false`
- **Required:** `false`
- **Description:** If set to `true` logger will not print logs with `debug` level. It will also not send logs to external logging service.

### apiToken

- **Type:** `string`
- **Default:** `undefined`
- **Required:** `true`
- **Description:** Token used to authenticate with external logging service.tha

### logLevels

- **Type:** `string[]`
- **Default:** `['debug', 'log', 'warn', 'error']`
- **Required:** `false`
- **Description:** Array of log levels that will be printed to console
- **Accepted values:** `"log" | "error" | "warn" | "debug" | "verbose" | "fatal"`

### apiLogLevels

- **Type:** `string[]`
- **Default:** `['log', 'warn', 'error']`
- **Required:** `false`
- **Description:** Array of log levels that will be sent to console
- **Accepted values:** `"log" | "error" | "warn" | "debug" | "verbose" | "fatal"`
