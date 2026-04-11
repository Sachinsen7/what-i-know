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
  {
    id: "go",
    label: "Go",
    description: "Concurrency, APIs, and practical backend patterns from production-flavored tutorials.",
    topics: [
      {
        id: "go-goroutines",
        title: "Goroutines and worker pools",
        preview: "Learning how to split jobs without making code unreadable.",
        explanation: "I am mapping how goroutines, buffered channels, and worker pools fit together for API-side workloads. The focus is not just speed, but predictable shutdown, back pressure, and keeping concurrency understandable."
      },
      {
        id: "go-http",
        title: "HTTP servers in Go",
        preview: "Understanding clean handlers, middleware, and request lifecycles.",
        explanation: "I am collecting patterns for building HTTP services with small handlers, explicit dependencies, and middleware that handles logging, tracing, and auth without turning into magic."
      },
      {
        id: "go-testing",
        title: "Testing services",
        preview: "Seeing how table tests and interfaces support safer refactors.",
        explanation: "The goal here is to learn how Go teams keep service code testable: table-driven tests for behavior, lightweight interfaces for seams, and focused integration tests around storage or transport boundaries."
      }
    ]
  },
  {
    id: "rust",
    label: "Rust",
    description: "Ownership, safety, and systems thinking with modern tooling and real examples.",
    topics: [
      {
        id: "rust-ownership",
        title: "Ownership mental model",
        preview: "Translating borrow checker feedback into design choices.",
        explanation: "I am treating ownership as an architectural tool, not just a compiler rule. The videos help connect borrowing, lifetimes, and move semantics to cleaner APIs and fewer accidental shared-state bugs."
      },
      {
        id: "rust-error-handling",
        title: "Result-driven error handling",
        preview: "Learning when to bubble errors up and when to enrich them.",
        explanation: "This thread focuses on composing Result types, using the question-mark operator well, and designing errors that make CLI tools and backend services easier to debug."
      },
      {
        id: "rust-async",
        title: "Async runtimes",
        preview: "Understanding Tokio without memorizing every primitive first.",
        explanation: "I am connecting futures, executors, and async tasks to concrete backend workloads like queues, network services, and parallel IO. The priority is building intuition before chasing framework-specific details."
      }
    ]
  },
  {
    id: "assembly",
    label: "Assembly",
    description: "Low-level execution, registers, and memory flow from a curious builder's perspective.",
    topics: [
      {
        id: "asm-registers",
        title: "Register-level reasoning",
        preview: "Tracking how values move through instructions step by step.",
        explanation: "I am using assembly to slow down and really see computation happen. Register usage, stack frames, and jumps make higher-level abstractions feel more concrete once you watch them unfold instruction by instruction."
      },
      {
        id: "asm-memory",
        title: "Stack and memory layout",
        preview: "Connecting function calls to real memory behavior.",
        explanation: "This topic is about understanding what function calls, local variables, and return addresses look like in memory. It helps bridge the gap between source code and what the machine is actually doing."
      },
      {
        id: "asm-syscalls",
        title: "Syscalls and bare interaction",
        preview: "Seeing how programs talk to the OS without thick abstractions.",
        explanation: "I am exploring simple syscall-based programs to understand how execution crosses from user code into operating-system services, and how little machinery is required to make something visible happen."
      }
    ]
  },
  {
    id: "backend",
    label: "Backend Engineering",
    description: "System design, data flow, and service reliability patterns for real-world apps.",
    topics: [
      {
        id: "backend-caching",
        title: "Caching layers",
        preview: "Learning when caching helps and when it quietly adds risk.",
        explanation: "I am studying how caches change system behavior: reducing latency, shifting load, and introducing invalidation complexity. The useful lesson is choosing where caching belongs instead of adding it everywhere."
      },
      {
        id: "backend-queues",
        title: "Queues and background jobs",
        preview: "Breaking long work into reliable asynchronous pipelines.",
        explanation: "This topic covers job queues, retries, idempotency, and observability. I want a mental model for when async work improves user experience and how to keep those pipelines operationally sane."
      },
      {
        id: "backend-observability",
        title: "Logs, metrics, and traces",
        preview: "Understanding how backend teams see production behavior clearly.",
        explanation: "I am mapping how logs, metrics, and distributed traces complement each other. The main insight is that debugging becomes faster when you design telemetry as part of the system, not as a patch afterward."
      }
    ]
  }
];
