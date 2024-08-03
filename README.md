## README

#### MUST haves for a better repo structure

1. Code formatter & linting

- Eliminates devs own styling preferences. Makes focusing on the code quality and correctness the first thing
- Linter is not present at all in the repo, this could be a source for coding errors and subtle bugs that otherwise might be caught by proper linting

2. building

- Having esbuild params in npm scripts is not scalable. Need to introduce proper esbuild config files, this requires restructuring the codebase so there's a cleaner separation of concerns
- Current setup minifies code, not ideal during dev as makes debugging more difficult. Needs a proper dev/prod build setup

3. monorepo structure

- Code for client, server, libraries and development is currently maintained in single place, this might be ok for a small project but not ideal for a production ready codebase
- Current setup makes for a confusing dev experience as code that pertains to client and server is tangled together making watch building complicated and testing changes slower than what could be accomplished with a proper repo structure
- Separates deps for client and server, reducing bundle sizes
- Allows separation of concerns between deployable code and libraries and common code that supports them

4. testing

- Needed to ensure changes that happens on the repo lifecycle do not introduce bugs
- Tests could include unit, end to end, performance test, etc

5. CI/CD

- No ci/cd exists. Continuous collaboration on this repo is very limited

5. Development experience

- Needs additional npm scripts to watch changes in source code and build accordingly
- Running the project is fine but the scripts that allws this functionality are not scalable, build and run commands in a single npm script work for a small app but not for an evolving codebase nor something production ready, these scripts need to live in proper shell scripts or even makefiles
- Could benefit from adding a tmuxinator config file so build for server and client can be done concurrently through a tmux session. Building, watching for changes and running the apps would be easier to maintain than running npm scrips separately. This might introduce a learning curve for new and inexperienced dev but worth it in the long run.

##### Existing blockers to change current setup into a proper monorepo

- Framework setup makes hard to split the current repo into a more maintable codebase without refactoring files that use `startMswServer`. This can be time consuming an in order to honor the timeframe set for the challenge I've opted to only document my proposed setup

#### Ideal repo structure

```shell
.
├── package.json
└── apps
    ├── client
    ├──── package.json
    ├── server
    └──── package.json
└── packages
    ├── caching-fetch-library
    ├──── package.json
    ├── common
    ├──── package.json
    └── ...

```

This setup follows a turborepo structure where the apps directory contain deployable applications while packages contain libraries and common packages used by the apps. The repo needs to be restructure
so that client, server, framework and caching-fetch-library each becomes an npm application with its dedicated package.json and own dependencies. This allows a clear separation of concerns and introduces a folder structure that makes navigating the codebase easier. It requires extensive refactor of several files but this gives a good starting point to move for the repo to support CI/CD

#### CI/CD

A good approach would be to make use of github actions. Following the previously mentioned repo structure, a new `github/.workflows` directory can be introduced where workflows that would run on PRs and
merges on main can be introduced.

```shell
.github
├── dependabot.yml
└── worflows
    ├── client-pr.yml
    ├── client-push.yml
    ├── server-pr.yml
    └── server-push.yml

```

`client-pr` would build and run unit, e2e, performance, etc tests only for changes that happen on `apps/client` or its depending packages
`client-push` would build and run tests and deploys a new version of client when merges on main occur for the same files observer on `client-pr`

`server-pr` would build and run unit, performance, etc tests only for changes that happen on `apps/server` or its depending packages
`server-push` would build and run tests and deploys a new version of server when merges on main occur for the same files observed on `server-pr`

#### Deployment

- No requirements exist but the propesed repo structure makes it more manageable to add the required configs to deploy to the cloud of choice. Let's say we want to deploy to aws, we can add the proper
  `template.yml` that describes the stack structure using cloudformation for each app in the apps directory. We can refactor the npm scripts into proper shell scripts or even makefiles that encapsulate
  the build, test, and deploy steps for the given app.

For example, for `apps/client` our template can describe the bucket to use to hold the static files, the cloudfront distribution, route53 records associated with the desired client domain, logs for cloudwatch. Additionaly after our build scripts we can have deploy scripts that make use of aws cli to build the template and deploy it to the cloud

For `apps/server` the idea is the same but our template can include definitions for dynamo tables, ec2 instances, load balancers and api gateways associated with the server application
