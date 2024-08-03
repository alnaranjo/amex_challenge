README

---

#### MUST haves for a better repo structure

1. Code formatter

- Eliminates devs own styling preferences. Makes focusing on the code quality and correctness the first thing

2. building

- Having esbuild params in npm scripts is not scalable. Need to introduce proper esbuild config files
- Current setup minifies code, not ideal during dev as makes debug more difficult. Need dev/prod build setup

3. monorepo structure

- Code for client, server, libraries, and development is currently maintained in single place, ok for a small project but not ideal for production ready codebase
- Separates deps for client and server, reducing bundle sizes

4. testing

- Needed to ensure changes that happens on the repo lifecycle do not introduce bugs

5. Development experience

- Needs additional npm scripts to watch changes in source code and build accordingly
- Could benefit from tmux session
