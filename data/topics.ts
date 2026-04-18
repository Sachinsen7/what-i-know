export type Topic = {
  id: string;
  title: string;
  preview: string;
  explanation: string;
};

export type Category = {
  id: string;
  label: string;
  description: string;
  topics: Topic[];
};

export const categories: Category[] = [
  // {
  //   id: "go",
  //   label: "Go",
  //   description: "Concurrency, APIs, and practical backend patterns from production-flavored tutorials.",
  //   topics: [
  //     {
  //       id: "go-goroutines",
  //       title: "Goroutines and worker pools",
  //       preview: "Learning how to split jobs without making code unreadable.",
  //       explanation: "I am mapping how goroutines, buffered channels, and worker pools fit together for API-side workloads. The focus is not just speed, but predictable shutdown, back pressure, and keeping concurrency understandable."
  //     },
  //     {
  //       id: "go-http",
  //       title: "HTTP servers in Go",
  //       preview: "Understanding clean handlers, middleware, and request lifecycles.",
  //       explanation: "I am collecting patterns for building HTTP services with small handlers, explicit dependencies, and middleware that handles logging, tracing, and auth without turning into magic."
  //     },
  //     {
  //       id: "go-testing",
  //       title: "Testing services",
  //       preview: "Seeing how table tests and interfaces support safer refactors.",
  //       explanation: "The goal here is to learn how Go teams keep service code testable: table-driven tests for behavior, lightweight interfaces for seams, and focused integration tests around storage or transport boundaries."
  //     }
  //   ]
  // },
  // {
  //   id: "rust",
  //   label: "Rust",
  //   description: "Ownership, safety, and systems thinking with modern tooling and real examples.",
  //   topics: [
  //     {
  //       id: "rust-ownership",
  //       title: "Ownership mental model",
  //       preview: "Translating borrow checker feedback into design choices.",
  //       explanation: "I am treating ownership as an architectural tool, not just a compiler rule. The videos help connect borrowing, lifetimes, and move semantics to cleaner APIs and fewer accidental shared-state bugs."
  //     },
  //     {
  //       id: "rust-error-handling",
  //       title: "Result-driven error handling",
  //       preview: "Learning when to bubble errors up and when to enrich them.",
  //       explanation: "This thread focuses on composing Result types, using the question-mark operator well, and designing errors that make CLI tools and backend services easier to debug."
  //     },
  //     {
  //       id: "rust-async",
  //       title: "Async runtimes",
  //       preview: "Understanding Tokio without memorizing every primitive first.",
  //       explanation: "I am connecting futures, executors, and async tasks to concrete backend workloads like queues, network services, and parallel IO. The priority is building intuition before chasing framework-specific details."
  //     }
  //   ]
  // },
  // {
  //   id: "assembly",
  //   label: "Assembly",
  //   description: "Low-level execution, registers, and memory flow from a curious builder's perspective.",
  //   topics: [
  //     {
  //       id: "asm-registers",
  //       title: "Register-level reasoning",
  //       preview: "Tracking how values move through instructions step by step.",
  //       explanation: "I am using assembly to slow down and really see computation happen. Register usage, stack frames, and jumps make higher-level abstractions feel more concrete once you watch them unfold instruction by instruction."
  //     },
  //     {
  //       id: "asm-memory",
  //       title: "Stack and memory layout",
  //       preview: "Connecting function calls to real memory behavior.",
  //       explanation: "This topic is about understanding what function calls, local variables, and return addresses look like in memory. It helps bridge the gap between source code and what the machine is actually doing."
  //     },
  //     {
  //       id: "asm-syscalls",
  //       title: "Syscalls and bare interaction",
  //       preview: "Seeing how programs talk to the OS without thick abstractions.",
  //       explanation: "I am exploring simple syscall-based programs to understand how execution crosses from user code into operating-system services, and how little machinery is required to make something visible happen."
  //     }
  //   ]
  // },
  {
    id: "backend",
    label: "Backend Engineering",
    description:
      "System design, data flow, and service reliability patterns for real-world apps.",
    topics: [
      {
        id: "backend-high-level",
        title: "A High Level Understanding",
        preview:
          "The story of what backend is, why it exists, and how to think about it as an engineer.",
        explanation: `Backend engineering starts from first principles — not just how to write code, but why the backend exists in the first place.

What is a backend?
The backend is the engine behind every product. It handles computing power, database access, business logic, and communication between systems — things the frontend simply cannot and should not do. If everything ran on the frontend, there would be no security, no shared data, and no scalability.

How does it work at a high level?
When a user interacts with an app, requests travel through layers — DNS resolves the domain, HTTPS encrypts the connection over TCP, the request hits a server sitting behind Nginx as a reverse proxy, which processes it and talks to a database or other services. AWS or similar cloud infrastructure hosts all of this at scale. Firewalls protect the boundary.

Why does this matter for you as an engineer?
When you join a new backend codebase, the biggest challenge is forming a mental map — seeing the bigger picture before touching anything. Understanding the high level architecture tells you where things live, why decisions were made, and how to navigate without getting lost.

This mental model helps you:
- Onboard 10x faster on new projects
- Avoid syntax fatigue by focusing on concepts over specifics
- Choose the right tool for the right job
- Think in systems, not just in code`,
      },
      {
  id: "backend-http",
  title: "HTTP Protocol",
  preview: "How the web actually communicates — requests, responses, headers, methods, and security.",
  explanation: `HTTP is the foundation of every web application. Before writing a single route, understanding how HTTP works under the hood makes everything else click.

CLIENT & SERVER MODEL
HTTP is a client-server protocol. The client (browser or app) sends a request, the server processes it and sends back a response. HTTP is stateless — the server has no memory of previous requests. Each request is independent, which is why state management, cookies, and sessions exist to work around this.

OSI LAYERS
HTTP lives at the Application layer (Layer 7). Below it are:
- Presentation layer — data formatting and encryption (SSL/TLS)
- Session layer — managing connections
- Transport layer — TCP, reliable delivery
- Network layer — IP routing
- Data link and Physical — the actual hardware

HEADERS
Request headers tell the server about the client and the request:
- User-Agent — what browser or client is making the request
- Authorization — carries tokens or credentials
- Cookie — sends stored cookies back to the server
- Accept — what content types the client can handle

General headers apply to both requests and responses:
- Date — timestamp of the message
- Cache-Control — caching instructions
- Connection — keep-alive or close

Representation headers describe the body:
- Content-Type — format of the data (JSON, form data etc.)
- Content-Length — size of the body
- Content-Encoding — compression used
- ETag — version identifier for caching

Security headers protect the client:
- Strict-Transport-Security (HSTS) — forces HTTPS only
- Content-Security-Policy (CSP) — controls what resources can load
- X-Frame-Options — prevents clickjacking via iframes
- X-Content-Type-Options — stops MIME type sniffing
- Set-Cookie — sends cookies with security flags like HttpOnly and Secure

HTTP METHODS
- GET — fetch a resource, no body
- POST — create a resource
- PUT — replace a resource completely
- PATCH — update part of a resource
- DELETE — remove a resource

Idempotent methods produce the same result no matter how many times you call them — GET, PUT, DELETE are idempotent. POST and PATCH are non-idempotent because repeated calls can create duplicates or different results.

CORS
CORS (Cross-Origin Resource Sharing) controls which origins can talk to your server.
- Simple requests — GET or POST with basic headers, sent directly
- Preflighted requests — browser sends an OPTIONS request first to check permissions before the real request

A preflight is triggered when:
1. Method is PUT, DELETE or anything other than GET/POST
2. Request includes non-simple headers like Authorization or X-Custom-Header
3. Content-Type is not application/x-www-form-urlencoded, multipart/form-data, or text/plain

The server responds to preflight with:
- Access-Control-Allow-Origin
- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Max-Age (how long to cache the preflight result)

STATUS CODES
- 1xx Informational — request received, processing
- 2xx Success — 200 OK, 201 Created, 204 No Content
- 3xx Redirection — 301 Moved Permanently, 304 Not Modified
- 4xx Client Error — 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
- 5xx Server Error — 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable

HANDLING LARGE REQUESTS & RESPONSES
- Multipart requests — used for file uploads, splits data into named parts
- Streaming responses — server sends data in chunks instead of waiting for the full response
- Real time uploads — chunked transfer encoding allows progressive uploads

SSL, TLS & HTTPS
SSL was the original encryption protocol — now deprecated. TLS is the modern, more secure replacement. HTTPS = HTTP running over TLS. It encrypts the connection between client and server so data cannot be read or tampered with in transit.`
},
{
  id: "backend-routing",
  title: "Routing",
  preview: "How incoming requests find the right handler — static, dynamic, nested and versioned.",
  explanation: `Routing is how a server maps an incoming URL to the correct piece of code that handles it.

STATIC ROUTES
Fixed paths that never change. Same URL, different method = different handler.
- GET  /api/books → fetch all books
- POST /api/books → create a new book

DYNAMIC ROUTES
Routes with variable segments — the value changes but the shape stays the same.
- /api/users/:id → the :id is a route parameter, readable in code
- /api/users/123 → id = 123
- /api/users/456 → id = 456

QUERY PARAMETERS
Key-value pairs appended to the URL for filtering or searching.
- /api/search?query=some+value
- /api/products?category=books&page=2
Unlike route params, query params are optional and do not define the route shape.

NESTED ROUTES
Routes that reflect relationships between resources.
- /api/users/123/posts/456 → post 456 belonging to user 123
Keeps the URL structure readable and RESTful.

ROUTE VERSIONING
When you update an API but cannot break existing clients, you version the route.
- /api/v1/products → old version, kept alive for existing consumers
- /api/v2/products → new version with breaking changes
Old versions are deprecated gradually, not deleted immediately.

CATCH-ALL ROUTES
A wildcard route that matches anything not caught by a specific route.
- /api/v3/products/* → catches any path under this prefix
Useful for fallbacks, proxies, or dynamic sub-path handling.`
},
{
  id: "backend-serialization",
  title: "Serialization & Deserialization",
  preview: "How data is packed for travel and unpacked at the destination — across languages, protocols and databases.",
  explanation: `Serialization is converting data (objects, structs) into a format that can be transmitted or stored. Deserialization is the reverse — reading that format back into usable data.

WHY IT MATTERS
Every language has its own data types. Go structs, Rust enums, JS objects — they cannot talk to each other directly. Serialization gives them a common language for transmission over HTTP, WebSockets, gRPC, or storage in databases.

WHERE IT HAPPENS (OSI MODEL)
Serialization lives at the Presentation layer (Layer 6) — responsible for translating data into a format both sides understand before it hits the network.

COMMON USE CASES
- HTTP request/response bodies
- WebSocket message payloads
- gRPC data transmission
- Storing records in relational DBs (PostgreSQL, MySQL, SQLite)
- Storing documents in non-relational DBs (MongoDB, DynamoDB)

TEXT-BASED FORMATS

JSON (JavaScript Object Notation) — most common for client-server communication:

    {
      "name": "Rahul",
      "age": 21,
      "isDeveloper": true,
      "skills": ["Go", "Rust", "Backend"]
    }

YAML — human readable, common in config files:

    name: Rahul
    age: 21
    skills:
      - Go
      - Rust

XML — verbose, older standard, still used in enterprise systems:

    <user>
      <name>Rahul</name>
      <age>21</age>
    </user>

BINARY FORMATS
Protocol Buffers (Protobuf) — Google's binary serialization format used with gRPC.
Faster and smaller than JSON but not human readable.
You define a schema first, then the data is compiled into tight binary.
Preferred in high performance, internal service-to-service communication.`
},
{
  id: "backend-auth",
  title: "Authentication & Authorization",
  preview: "Who are you and what can you do — sessions, JWTs, OAuth and everything in between.",
  explanation: `Authentication = who are you. Authorization = what are you allowed to do. Two different problems, often solved together.

CRYPTOGRAPHY UNDERNEATH
Both rely on cryptographic algorithms to verify identity securely. Modern auth also includes MFA (Multi Factor Authentication), passwordless login, biometrics, behavioral analysis, and post-quantum cryptography on the horizon.

━━━━━━━━━━━━━━━━━━━━━━━━

1. STATEFUL — SESSION BASED
Used in traditional web applications.

How it works:
- User logs in with username and password
- Server creates a session, stores it in a database or Redis (in-memory, fast)
- Server sends back a session ID via a cookie
- Cookie is HTTP-only (inaccessible to JS), expires in ~15 minutes
- Every request sends the cookie, server looks up the session

SESSION FLOW DIAGRAM:
Client → Server: Login (username/password)
Server → DB/Redis: Create session
Server → Client: Set-Cookie: session_id
Client → Server: Request + Cookie
Server → DB/Redis: Lookup session
Server → Client: Response

Pros: Centralized control, easy to revoke
Cons: Limited scalability, server must store all sessions

━━━━━━━━━━━━━━━━━━━━━━━━

2. STATELESS — JWT BASED
Ideal for distributed and scaled systems.

How it works:
- User logs in, server signs a JWT with a secret key
- JWT contains a self-contained payload (user ID, roles, metadata)
- Sent in Authorization header on every request
- Server verifies the signature — no DB lookup needed

Pros: Scalable, perfect for distributed architecture, low latency
Cons: Token revocation is complex — you cannot invalidate a JWT until it expires

━━━━━━━━━━━━━━━━━━━━━━━━

3. API KEY BASED
For machine-to-machine communication.

How it works:
- A static key is issued to a client (developer or service)
- Sent in headers on every request
- Server validates the key

Best for: Internal services, developer APIs, AI model access (like OpenAI)
Pros: Simple, fast
Cons: No expiry by default, harder to rotate safely

━━━━━━━━━━━━━━━━━━━━━━━━

4. OAUTH 2.0
For third party delegation — website to website communication.

The problem it solves: Instead of giving your password to a third party app, you delegate access. Overcomes security fatigue and avoids credential sharing risks.

How it works:
- Resource servers (Google, Facebook, Discord) hold your data
- Clients request access on your behalf
- You approve, they get a bearer token — not your password

OAuth 2.0 Flow Types:
- Authorization Code Flow — most secure, for web apps
- Implicit Flow — older, less secure, deprecated
- Client Credentials Flow — machine to machine, no user involved
- Device Code Flow — for devices with no browser (smart TVs etc.)

AUTHORIZATION CODE FLOW DIAGRAM:
Client → User: Redirect to /authorize
User → Resource Server: Login & approve
Resource Server → Client: Auth code
Client → Resource Server: Exchange code for token
Client → Resource Server: Access with token

In 2014, OpenID Connect was built on top of OAuth 2.0.
OAuth 2.0 = authorization. OpenID Connect = authentication.
OpenID Connect adds an ID token (a JWT) so you know who the user is.
This powers: Sign in with Google, Sign in with Discord, Sign in with Facebook.

━━━━━━━━━━━━━━━━━━━━━━━━

ROLE BASED ACCESS CONTROL (RBAC)
After authentication, authorization decides what a user can do.
Common roles: user, moderator, admin — each with different permissions.

ZERO TRUST ARCHITECTURE
Never trust, always verify. Even internal services must authenticate every request. No implicit trust based on network location.

SECURITY THINGS TO KEEP IN MIND
- Never leak detailed error messages (do not say "wrong password", say "invalid credentials")
- Protect against timing attacks — compare hashes in constant time
- Decentralized and blockchain based identity is emerging
- Behavioral biometrics is a growing passwordless approach`
},
{
  id: "backend-validation",
  title: "Validation & Transformation",
  preview: "Ensuring data is correct before it touches your business logic.",
  explanation: `Validation is checking that incoming data is what you expect. Transformation is reshaping that data into the format your system needs.

Example: A user submits a login form — email and password must be validated before anything else runs.

TYPES OF VALIDATION

Syntactic — is the shape correct?
- Is this actually an email format? user@example.com ✓
- Is the password a string with minimum length? ✓

Type Validation — is the data type correct?
- page must be a number, not a string
- limit must be less than 1000

Semantic — does the value make logical sense?
- Date of birth must be in the past (less than today)
- Password confirmation must match the password field
- Age must be greater than 18 for certain routes

Query Parameter Example:
- /api/posts?page=0 → invalid, page must be >= 1
- /api/posts?limit=5000 → invalid, limit must be <= 1000
- /api/posts?page=abc → invalid, page must be a number

TRANSFORMATION
After validation, data is reshaped before use.

- Email → lowercased and trimmed: "  User@Gmail.com " → "user@gmail.com"
- /bookmarks?sort=22 → parsed and mapped to internal sort enum
- Query param "page" string → converted to integer before DB query

Schema example:
{
  email: { type: string, required: true, transform: toLowerCase },
  page:  { type: number, min: 1, max: 500 },
  dob:   { type: date, mustBeBefore: today }
}

FRONTEND vs BACKEND VALIDATION

Frontend:
- Instant feedback to the user
- Improves UX — no round trip needed
- But can be bypassed — never trust it alone

Backend:
- The real source of truth
- Cannot be skipped or bypassed
- Always validate again even if frontend already did it

Rule: Frontend validation is for UX. Backend validation is for security.`
},
{
  id: "backend-middleware-context",
  title: "Middlewares & Request Context",
  preview: "The pipeline every request walks through before reaching your handler.",
  explanation: `Every request travels through a pipeline before it reaches your business logic. Middlewares sit in that pipeline and handle cross-cutting concerns.

REQUEST LIFECYCLE

Client → Middleware Chain → Controller → Service → Repository → DB
         ↓                  ↓            ↓          ↓
       (security)        (binding)    (logic)    (query)

MIDDLEWARE TYPES

1. SECURITY
- CORS — controls which origins can access your API
- Security headers — HSTS, CSP, X-Frame-Options
- Rate limiting — blocks abuse, limits requests per IP per window

2. LOGGING & MONITORING
- Logs every incoming request — method, path, timestamp
- Logs response status and duration
- Feeds into observability tools

3. GLOBAL ERROR HANDLING
- Catches unhandled errors before they crash the server
- Returns clean messages: 400 for client errors, 500 for server errors
- Never leaks stack traces to the client

4. AUTHENTICATION
- Reads and verifies JWT or session on every protected route
- Attaches user identity to the request context
- Rejects with 401 if invalid

5. DATA PARSING
- Parses request body (JSON, form data, multipart)
- Makes body available to the controller layer

REQUEST CONTEXT
A key-value store attached to each request that lives for its entire lifetime.

Examples of what gets stored:
- userId — extracted from JWT by auth middleware
- role — user, admin, moderator
- requestId — unique ID for tracing this request through logs

Context is read-only after being set. Passed down through controller → service → repository without needing function arguments.

CONTROLLER → SERVICE → REPOSITORY

Controller layer:
- Binds and validates the request (body, params, query)
- Bad body → 400 Bad Request immediately
- Example: GET /books?sort=name → binds sort="name"
- Knows about HTTP, calls the service, returns the response
- No business logic here

Service layer:
- Pure business logic — no HTTP, no request objects
- Example: check if email already exists before creating user
- Handles success/failure and returns data or throws errors

Repository layer:
- Only talks to the database
- No logic — just queries
- Example: findUserByEmail(), createBook(), deletePost()`
},
{
  id: "backend-rest",
  title: "RESTful Architecture & Best Practices",
  preview: "How the web was designed to work — and how REST gave it a blueprint.",
  explanation: `REST is not a library or a framework. It is an architectural style that describes how the web should communicate.

THE ORIGIN OF THE WEB
Tim Berners-Lee invented the World Wide Web in 1990.
Three things he created together:
- URI — Uniform Resource Identifier, the address of a resource
- HTTP — HyperText Transfer Protocol, how resources are transferred
- HTML — HyperText Markup Language, how resources are displayed

WWW = what you see is what you get. A browser requests a URI over HTTP and renders the HTML it receives.

━━━━━━━━━━━━━━━━━━━━━━━━

WHAT IS REST?
REST = Representational State Transfer
Invented by Roy Fielding in his 2000 doctoral dissertation — the paper that gave the web its architectural blueprint.

The core idea: resources live at URLs. Clients interact with those resources using HTTP methods. The server sends back a representation of the resource — JSON, XML, or HTML.

REST CONSTRAINTS
- Client-Server — UI and data are separated
- Stateless — every request contains all the info needed, no session on server
- Cache — responses can be cached to improve performance
- Uniform Interface — consistent URL patterns and methods
- Layered System — client does not know if it is talking to the real server or a proxy
- Code on Demand — server can optionally send executable code (rare)

STATE & TRANSFER
State = the current data snapshot. Example: your Amazon shopping cart.
Transfer = moving that state representation over HTTP.
GET /cart → server transfers a representation of your cart state back to you.

━━━━━━━━━━━━━━━━━━━━━━━━

HTTP METHODS IN REST
- GET    → read a resource
- POST   → create a resource
- PUT    → replace a resource completely
- PATCH  → update part of a resource
- DELETE → remove a resource

━━━━━━━━━━━━━━━━━━━━━━━━

REAL URL DESIGN — SLUGS
A slug is the human-readable part of a URL.

Example:
/blog/harry-potter-and-the-chamber-of-secrets

- human readable ✓
- SEO friendly ✓
- describes the resource ✓

Compare to:
/blog/post?id=8472 → not readable, not descriptive ✗

━━━━━━━━━━━━━━━━━━━━━━━━

REST API DESIGN BEST PRACTICES
- Use nouns not verbs → /users not /getUsers
- Use plural resources → /books not /book
- Be consistent across all endpoints
- Provide sensible defaults → default page=1, limit=20
- Avoid abbreviations → /configurations not /cfg
- Nest related resources → /users/:id/posts
- Version your API → /api/v1/products
- Return correct status codes always
- Never expose internal implementation details in URLs

━━━━━━━━━━━━━━━━━━━━━━━━

SWAGGER / OPENAPI
Swagger is a toolset built around the OpenAPI standard.
It auto-generates interactive documentation from your API definition.

What it gives you:
- A visual UI to browse all your endpoints
- Ability to test requests directly from the browser
- A contract between frontend and backend teams
- Auto-generated client SDKs in multiple languages

Good REST APIs are intuitive — a developer should be able to guess the next endpoint without reading the docs. Swagger makes sure that when they do need docs, everything is clear, consistent and testable.`
},
{
  id: "backend-databases",
  title: "Mastering Databases with PostgreSQL",
  preview: "Relational vs non-relational, PostgreSQL data types, and why migrations matter.",
  explanation: `A database is where your application's data lives permanently. Choosing the right type and understanding its primitives is foundational.

RELATIONAL vs NON-RELATIONAL

Relational (SQL):
- Data lives in tables with rows and columns
- Strict schema — every row follows the same structure
- Relationships enforced with foreign keys
- Examples: PostgreSQL, MySQL, SQLite

Non-Relational (NoSQL):
- Data lives in documents, key-value pairs, or graphs
- Flexible schema — each document can have different fields
- Better for unstructured or rapidly changing data
- Examples: MongoDB, DynamoDB, Redis

━━━━━━━━━━━━━━━━━━━━━━━━

POSTGRESQL DATA TYPES

STRING TYPES
- VARCHAR(n) — variable length string with a maximum of n characters
- TEXT — unlimited length string, use this over CHAR for any string data
- Never use CHAR — it pads with spaces to fill fixed length, wasteful and confusing

NUMERIC TYPES
- SMALLINT — small whole numbers (-32,768 to 32,767)
- INTEGER — standard whole number (-2.1B to 2.1B)
- BIGINT — very large whole numbers, use for IDs at scale
- SERIAL — auto-incrementing integer, classic primary key
- DECIMAL / NUMERIC — exact precision, use for money
- REAL / DOUBLE PRECISION — floating point, use for scientific data, not money
- Never use FLOAT for financial values — rounding errors will cost you

SPECIAL TYPES
- UUID — Universally Unique Identifier
  Example: a3f4c2d1-bc12-4e78-9f01-abc123def456
  Better than SERIAL for distributed systems — no collision across servers

- JSON — stores raw JSON text
- JSONB — stores JSON in binary format, faster to query, supports indexing
  Use JSONB over JSON always unless you need to preserve exact formatting

- INTEGER[] — array of integers stored in a single column
  Example: tags INTEGER[] stores [1, 4, 7] in one field

- INET — stores IP addresses
  Example: used in a project management platform to log which IP accessed a resource

━━━━━━━━━━━━━━━━━━━━━━━━

MIGRATIONS

A migration is a versioned file that describes a change to your database schema.

UP migration — applies the change:
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

DOWN migration — reverses the change:
DROP TABLE users;

WHY MIGRATIONS MATTER
1. Keeping track of DB changes — every schema change is recorded in version control, just like code. Your team always knows what the DB looks like.
2. Rollback — if a bad migration goes to production, you run the DOWN migration and undo it safely.
3. Consistency — every environment (local, staging, production) runs the exact same migrations in the exact same order. No more "works on my machine" DB issues.

SCHEMA
The schema is the overall structure of your database — all tables, columns, types, constraints, and relationships defined together. Migrations are how you evolve the schema over time safely.`
},
{
  id: "backend-caching",
  title: "Caching",
  preview: "The secret behind fast systems — from CPU registers to CDNs.",
  explanation: `Caching is storing a copy of data closer to where it is needed so you do not have to fetch it from the original slow source every time.

━━━━━━━━━━━━━━━━━━━━━━━━

HARDWARE CACHE — CLOSEST TO THE CPU

L1 Cache — fastest, smallest, inside the CPU core itself. ~32KB
L2 Cache — slightly slower, still on chip. ~256KB
L3 Cache — shared across cores, larger. ~8-32MB
RAM — volatile memory, much larger but slower than L1/L2/L3
Hard Disk — permanent storage, slowest of all
Network — slowest possible source, data comes from another machine

The rule: the closer the cache is to the CPU, the faster but smaller it is.

RAM (Random Access Memory)
- Volatile — data is lost when power is off
- Stores actively running processes and frequently accessed data
- Much faster than disk but more expensive per GB
- Your application runs in RAM — database results, sessions, computed values all live here temporarily

━━━━━━━━━━━━━━━━━━━━━━━━

DNS RESOLUTION — HOW A URL BECOMES AN IP

When you type google.com:
1. Browser checks local cache first
2. Asks Local Resolver (your ISP or router)
3. Resolver asks Root Server → finds .com TLD server
4. TLD server points to Google's nameserver
5. Nameserver returns 192.168.x.x (the IP)
6. Result is cached at every step for next time

DNS itself is a caching system — TTL controls how long each answer is cached.

━━━━━━━━━━━━━━━━━━━━━━━━

CDN — Content Delivery Network

A CDN is a globally distributed network of servers that cache your static assets (images, JS, CSS, videos) geographically close to the user.

How it connects to DNS:
- Your DNS points to the CDN instead of your origin server
- CDN resolves to the geographically closest edge node
- User in Mumbai gets served from Mumbai, not from a server in the US
- If the edge node does not have the file, it fetches from origin and caches it

CDN caches: images, fonts, static files, API responses (sometimes)
CDN does NOT cache: authenticated, personalized, or real-time data

━━━━━━━━━━━━━━━━━━━━━━━━

REDIS

Redis is an in-memory key-value store — a NoSQL database that lives entirely in RAM. Microsecond response times. Used as the backbone of application-level caching.

What Redis stores:
- Session data
- JWT blocklists
- Rate limit counters
- Computed query results
- Leaderboards, queues, pub/sub messages

Redis is not just a cache — it is a data structure server:
- Strings, Lists, Sets, Sorted Sets, Hashes, Streams

━━━━━━━━━━━━━━━━━━━━━━━━

CACHING STRATEGIES

Cache Aside (Lazy Caching) — most common:
1. App checks Redis first
2. Cache hit → return data instantly
3. Cache miss → query DB, store result in Redis, return data
Best for: read-heavy workloads

Write Through:
- Write to cache and DB at the same time
- Cache is always in sync
- Slightly slower writes, always consistent reads

━━━━━━━━━━━━━━━━━━━━━━━━

CACHE EVICTION POLICIES

When Redis runs out of memory, it must remove something. Policies decide what gets removed:

- LRU (Least Recently Used) — removes the item not accessed for the longest time. Most common.
- LFU (Least Frequently Used) — removes the item accessed the fewest times overall
- TTL (Time To Live) — every key has an expiry time set manually. After TTL expires, key is deleted automatically.
- No Eviction — Redis returns an error when full. Use only when data must never be lost.

TTL example:
- Cache a DB query result for 60 seconds
- After 60s Redis deletes it automatically
- Next request is a cache miss, fresh data is fetched

━━━━━━━━━━━━━━━━━━━━━━━━

ELASTICSEARCH

A distributed search and analytics engine built on top of Lucene.
Not a traditional cache but acts like one for search queries.
Stores data in inverted indexes — makes full text search extremely fast.
Used when your DB is too slow for complex search queries.
Example: searching millions of product names, logs, or documents instantly.`
},
{
  id: "backend-task-queues",
  title: "Task Queuing & Scheduling",
  preview: "Offloading slow work so your API stays fast and reliable.",
  explanation: `Some work is too slow or too risky to do inside a request. Task queues move that work out of the request lifecycle into a background worker.

WHY QUEUES EXIST
If a user signs up and you send a welcome email inside the request — what happens if the email service is down? The whole request fails. A queue decouples the work. The request succeeds, the email is sent when possible.

Common background tasks:
- Sending emails and push notifications
- Processing images and videos (resize, compress, transcode)
- Generating reports and exports
- Charging payments
- Syncing data to third party services

━━━━━━━━━━━━━━━━━━━━━━━━

TASK TYPES

1. ONE-OFF TASKS
A single task triggered by an event, runs once.
Example: User signs up → queue a welcome email → worker picks it up and sends it.

2. RECURRING TASKS (CRON)
Tasks scheduled to run on a fixed interval using cron syntax.
Example: Every day at 9am → send digest emails to all users.
Linux cron: 0 9 * * * → runs at 9:00 every day.

3. CHAINED TASKS
Output of one task becomes input of the next.
Example: Upload video → compress video → generate thumbnail → send notification.
Each step runs only after the previous one succeeds.

4. BATCH TASKS
Group many small tasks and process them together for efficiency.
Example: Instead of sending 10,000 emails one by one, batch into groups of 500 and process in parallel.

━━━━━━━━━━━━━━━━━━━━━━━━

PRODUCTION CONCERNS

Idempotency — if a task runs twice due to a retry, the result must be the same. Never charge a card twice. Never send two welcome emails. Design tasks to be safe to repeat.

Error Handling — tasks will fail. Define retry limits, backoff delays, and a dead letter queue for tasks that fail too many times.

Monitoring — watch queue length, worker count, failure rate, and processing time. A growing queue means workers cannot keep up.

Scaling — add more workers when queue length grows. Workers are stateless so scaling horizontally is straightforward.

Ordering — most queues are FIFO but do not guarantee strict order at scale. If order matters, design for it explicitly.

Rate Limiting — some downstream services (email providers, SMS APIs) have rate limits. Throttle your workers to stay within those limits.

━━━━━━━━━━━━━━━━━━━━━━━━

BEST PRACTICES
- Keep tasks small and focused — one task does one thing
- Avoid long running tasks — break them into smaller chained steps
- Always use proper error handling and logging inside workers
- Monitor queue length — if it stays high, add workers or optimize tasks
- Set TTL on queued jobs — stale tasks should expire, not pile up
- Never put business logic in the queue layer — keep workers thin`
},
{
  id: "backend-config-management",
  title: "Config Management",
  preview: "Keeping your app settings clean, secure and environment-aware.",
  explanation: `Configuration is every value your app needs to run that is not code. Database URLs, API keys, feature flags, business rules — all of it is config.

WHY IT MATTERS
Hard-coding values into your codebase is dangerous and inflexible. Config management separates what your app does from how it is configured to behave in a given environment.

TYPES OF CONFIG

Environment Settings:
- Database connection strings
- API keys (Stripe, SendGrid, Clerk)
- Port numbers, base URLs
- Never commit these to Git — use .env files and secret managers

Business Rules:
- Max orders per user per day
- Minimum order amount for free shipping
- Feature flags — enable/disable features without redeploying

Distributed Systems Config:
- Service discovery — where is the payments service running?
- Timeouts and retry limits per service
- Rate limit thresholds per environment

BEST PRACTICES
- Validate all config at startup — if a required env variable is missing, crash immediately with a clear message rather than failing silently later
- Use different config per environment — local, staging, production
- Never log secret values — mask API keys in logs
- Use a secrets manager in production (AWS Secrets Manager, Vault) instead of plain .env files
- Keep business rule config in a database if it changes frequently — avoids redeployments`
},

{
  id: "backend-observability",
  title: "Logging, Monitoring & Observability",
  preview: "Seeing exactly what your backend is doing in production.",
  explanation: `Observability is your ability to understand the internal state of your system by looking at its outputs. Three pillars: logs, metrics, and traces.

THE THREE PILLARS

Logging — what happened?
A timestamped record of events inside your app.
- Info: "User 123 logged in"
- Warn: "Payment retry attempt 2 of 3"
- Error: "DB connection failed — timeout after 5000ms"

Monitoring — is everything healthy?
Tracks numbers over time — request rate, error rate, response time, CPU, memory. Alerts you when something crosses a threshold.

Distributed Tracing — where did it go slow?
Follows a single request across multiple services. Shows exactly which service, which function, and which line took the most time.

━━━━━━━━━━━━━━━━━━━━━━━━

TOOLS

Winston — the most popular Node.js logger.
Structured JSON logs, multiple transports (console, file, remote).
Morgan — HTTP request logger middleware for Express. Logs every incoming request automatically.
Use Winston + Morgan together: Morgan captures the request, Winston handles everything else.

Prometheus — open source metrics collection. Scrapes numbers from your app on an interval and stores them as time series data.
→ https://prometheus.io

Grafana — visualization layer for Prometheus data. Build dashboards showing request rates, error rates, latency over time.
→ https://grafana.com

New Relic — all-in-one observability platform. Logs, metrics, traces, and alerts in one place. Great for production apps that need everything out of the box.
→ https://newrelic.com

━━━━━━━━━━━━━━━━━━━━━━━━

WHAT GOOD OBSERVABILITY LOOKS LIKE
- Every request has a unique requestId traced through all logs
- Errors include context — which user, which endpoint, what payload
- Dashboards show p50, p95, p99 response times — not just averages
- Alerts fire before users notice the problem`
},

{
  id: "backend-graceful-shutdown",
  title: "Graceful Shutdown",
  preview: "Closing your server politely — finishing what it started before turning off.",
  explanation: `A graceful shutdown means your server stops accepting new work, finishes everything already in progress, cleans up resources, and only then exits. No dropped requests. No corrupted data.

THE RESTAURANT ANALOGY
A restaurant closing at 10pm does not throw customers out mid-meal. It stops seating new customers at 9:45, lets existing customers finish, then cleans up and locks the door. Your server works the same way.

━━━━━━━━━━━━━━━━━━━━━━━━

UNIX SIGNALS — HOW THE OS TALKS TO YOUR PROCESS

IPC (Inter Process Communication) — how processes send messages to each other. Signals are the simplest form of IPC.

SIGTERM (Signal 15) — polite shutdown request.
"Please stop when you are ready."
Sent by process managers (Docker, Kubernetes, systemd) when stopping a service.
Your app should catch this and begin graceful shutdown.

SIGINT (Signal 2) — interrupt from keyboard.
"The developer pressed Ctrl+C."
Same as SIGTERM in behavior — catch it and shutdown gracefully.

SIGKILL (Signal 9) — forced kill, cannot be caught.
"Stop right now, no exceptions."
OS kills the process immediately. No cleanup possible.
Only used when graceful shutdown fails or hangs.

━━━━━━━━━━━━━━━━━━━━━━━━

GRACEFUL SHUTDOWN SEQUENCE

1. Catch SIGTERM or SIGINT
2. Stop accepting new connections — close the HTTP server to new requests
3. Finish in-flight requests — wait for all active requests to complete
4. Finish critical background work — example: a payment being processed must complete, never drop mid-transaction
5. Clean up resources — close DB connections, flush log buffers, disconnect from Redis
6. Exit with code 0 — clean exit signals success to the process manager

SHUTDOWN TIMEOUT
Set a maximum wait time (example: 15-20 seconds). If in-flight work is not done by then, force exit anyway. Prevents the server from hanging forever waiting for a stuck request.

WHAT HAPPENS WITHOUT IT
- Active HTTP requests get connection reset errors
- Database transactions are abandoned mid-write — corrupted data
- Payment processing cuts off — money moves but order never records
- Log buffers are lost — you cannot debug what just happened`
},
{
  id: "backend-scaling-performance",
  title: "Scaling & Performance",
  preview: "Why average metrics lie, how systems break under load, and how to scale intelligently.",
  explanation: `Performance is not just about speed. It is about understanding where time goes, what breaks under load, and how to scale without creating new problems.

━━━━━━━━━━━━━━━━━━━━━━━━

LATENCY
Latency is the time between a request being sent and a response being received.

Why averages are misleading:
- Average of 50ms + 200ms = 125ms — but one user waited 200ms
- Averages hide the worst experiences
- Use percentiles instead

P50 — 50% of users experience this latency or better. The median.
P90 — 90% of users are at or below this. The majority experience.
P99 — 99% of users are at or below this. Your worst real users.

A system with P50=50ms and P99=4000ms feels fast to most but broken to some. Fix the P99 first.

CDN helps latency by serving static assets from the closest geographic node — cutting network travel time dramatically.

━━━━━━━━━━━━━━━━━━━━━━━━

THROUGHPUT
Throughput is how much work your system completes per unit of time.
- 1000 requests per second = high throughput
- 1 request per 2 seconds = low throughput

With 1 million users, 150ms average response time, and 1000 RPS — your system needs to sustain that load without degrading.

━━━━━━━━━━━━━━━━━━━━━━━━

UTILIZATION & THE LATENCY CURVE

The cafe analogy:
One customer — shopkeeper is fast, no waiting.
100 customers — shopkeeper works at the same speed but everyone waits.

The road analogy:
One car on a highway — overtaking is easy.
100 cars — overtaking is impossible, 50% chance of collision.

Rule: Never run your system at 100% utilization.
Keep CPU and memory at 60-80%. The remaining 20-40% is your buffer for traffic spikes. At 100% utilization, latency explodes non-linearly — a small increase in load causes massive slowdowns.

━━━━━━━━━━━━━━━━━━━━━━━━

FINDING BOTTLENECKS

Flame Graphs — visual representation of where CPU time is spent. Each bar is a function call. Wider bars = more time spent. Find the widest bar and optimize that first.

Distributed Tracing — follow a request across every service it touches. See exactly which service and which function is slow.

N+1 Query Problem — the most common backend performance killer.
Fetching 100 posts then running a separate DB query for each post's author = 101 queries.
Fix: use a JOIN or batch load authors in one query.

Connection Pooling — opening a new DB connection per request is expensive. A connection pool keeps connections open and reuses them. Internal pooling (inside your app) vs external pooling (PgBouncer sitting between app and DB).

Database Indexes — without an index, every query scans every row. An index lets the DB jump directly to matching rows. Essential on columns you filter or sort by frequently.

━━━━━━━━━━━━━━━━━━━━━━━━

CACHING STRATEGIES
Cache Hit Rate — percentage of requests served from cache vs DB. Higher is better. Low hit rate means your cache keys or TTL are poorly designed.
TTL (Time To Live) — how long a cached value lives before expiring.
Cache Invalidation — hardest problem in caching. When data changes, stale cache must be cleared or updated immediately.
Cache Size — too small and eviction removes useful data. Too large and memory costs spike.

━━━━━━━━━━━━━━━━━━━━━━━━

VERTICAL SCALING (Scale Up)
Add more power to the same machine:
- More CPU cores
- More RAM
- Faster storage
- Better network

Tools: AWS, GCP, DigitalOcean — upgrade instance size.
Hard limit: there is a maximum machine size. You cannot scale vertically forever.
Single point of failure — if this one machine goes down, everything goes down.
No geographic distribution — all users hit the same location.

━━━━━━━━━━━━━━━━━━━━━━━━

HORIZONTAL SCALING (Scale Out)
Add more machines instead of bigger ones:
- 1000 RPS on 1 server → 5000 RPS on 5 servers
- Redundancy — if one server dies, others keep running
- Geo distribution — deploy servers in multiple regions, serve users from the closest one

Load Balancer — sits in front of all servers and distributes incoming requests using algorithms:
- Round Robin — send to each server in turn
- Least Connections — send to the server with fewest active requests
- IP Hash — same user always hits the same server

Disadvantages of horizontal scaling:
- Complexity increases — distributed systems are hard
- Shared state is harder — sessions, caches must be centralized (Redis)
- More infrastructure to manage and monitor`
},
{
  id: "backend-scaling-performance-2",
  title: "Scaling & Performance — Part 2",
  preview: "Load balancing, database scaling, CDN, microservices and serverless — the full picture.",
  explanation: `This continues from Part 1. Now we go deeper into how real systems scale horizontally across machines, regions, and architectures.

━━━━━━━━━━━━━━━━━━━━━━━━

STATELESS HORIZONTAL SCALING
For horizontal scaling to work, your servers must be stateless — no server stores session data locally. All shared state (sessions, cache) lives in a central store like Redis. Any server can handle any request because they all read from the same place.

━━━━━━━━━━━━━━━━━━━━━━━━

LOAD BALANCER
Sits in front of all your servers and distributes incoming requests.

Algorithms:
- Round Robin — requests go to A, B, C, A, B, C in order
- Least Connections — next request goes to whichever server has fewest active connections
- Least Response Time — routes to the fastest responding server
- Resource Based — routes based on CPU and memory of each server

Health Checks:
If server A starts returning 500 errors, the load balancer detects it via health checks and stops sending traffic to A. Requests go to B and C only until A recovers. This is automatic failover.

━━━━━━━━━━━━━━━━━━━━━━━━

DATABASE SCALING

Read Replicas:
~70% of database queries are reads. ~30% are writes.
Read replicas are copies of your primary DB that handle SELECT queries only.
Writes go to the primary → primary replicates changes to all replicas → reads are distributed across replicas.
Both PostgreSQL and MySQL support native read replication.

Sharding (Horizontal Partitioning):
Split one large table into smaller chunks across multiple databases.
Example: orders table split into two shards:
- Shard 1: users with ID 1-10
- Shard 2: users with ID 11-20
Query: SELECT * FROM orders WHERE user_id = 10 → hits Shard 1 only.
Benefits: reduces query latency and allows independent scaling per shard.

━━━━━━━━━━━━━━━━━━━━━━━━

CDN — CONTENT DELIVERY NETWORK

Light travels through fiber optic cables at ~200,000 km/s.
Distance from Tokyo to Virginia = ~13,000 km.
Round trip latency = ~130ms just from physics — before any processing.

At scale this compounds:
- 5,500km = ~55ms
- 13,000km = ~130ms
- For 600ms total response, 130ms on network alone is significant

CDN fixes this with Points of Presence (PoPs) — edge servers distributed globally.
User in Tokyo hits the Tokyo PoP, not Virginia. Latency drops to ~5ms.

CDN caches:
- Static assets — JS, CSS, HTML, images
- API responses — product catalog, public data

Cache Purging — when content changes, you purge by cache tag to invalidate all related cached responses instantly.

Cloudflare is one of the largest CDN and security providers. It operates hundreds of PoPs globally — far more nodes than primary data centers. CDN nodes must always outnumber primary data centers. The more PoPs, the closer the cache is to every user.

━━━━━━━━━━━━━━━━━━━━━━━━

ASYNC PROCESSING & BACKGROUND JOBS
Already covered in Task Queues — Redis and Kafka are the backbone.
CPU-bound work (image processing, video encoding) belongs in background workers written in languages like Go or Rust — not Node.js which is single-threaded and not suited for CPU-heavy tasks.
Node.js is excellent for I/O-bound async work. Wrong tool for CPU-bound work.

━━━━━━━━━━━━━━━━━━━━━━━━

MONOLITHIC vs MICROSERVICES

Monolith — single deployable unit. Everything in one codebase.
Simple to develop, debug, and deploy. Perfect for small teams and early stage products.

Microservices — split by business domain:
- Orders service
- Payments service
- Notifications service
Each deploys independently, scales independently, fails independently.

Microservices tradeoffs:
- Network latency between services
- Distributed failure modes — harder to debug
- Data consistency across services is complex
- Only worth it for large teams with clear domain boundaries

━━━━━━━━━━━━━━━━━━━━━━━━

CAPACITY PLANNING vs AUTO SCALING vs SERVERLESS

Capacity Planning:
Manually decide how much RAM, CPU, SSD your servers need.
Example: 8GB to 30GB RAM depending on load.
Risk: over-provision (expensive) or under-provision (crashes).

Auto Scaling:
Automatically add or remove servers based on load.
Set min and max instance count. Scaling triggers when CPU or memory crosses a threshold.
Drawback: boot time — spinning up a new OS and configuring it takes time. You cannot scale instantly.

Reactive Auto Scaling:
Always keep minimum servers running (always-on cost) and scale reactively when load spikes. Faster than cold auto scaling but more expensive at idle.

Serverless:
You provide only your function code. No OS, no RAM config, no server management.
Events trigger your function via API Gateway.
Scales to zero — you pay only when code runs.
Cold start problem — first invocation after idle period has latency while the runtime initializes.
Not a universal replacement for servers — poor fit for long-running processes, WebSockets, or CPU-heavy work.

━━━━━━━━━━━━━━━━━━━━━━━━

THE SCALING MINDSET
1. Start with the problem — do not over-engineer before you have real load
2. Simple solution first — a single well-tuned server handles more than you think
3. Scale for the problem you have — not the problem you imagine
4. Measure everything — profile before optimizing, data beats intuition
5. Mindset — premature scaling is as dangerous as no scaling`
},

    ],
  },
];
