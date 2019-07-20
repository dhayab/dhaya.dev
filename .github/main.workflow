workflow "deploy" {
  resolves = "build and deploy"
  on = "push"
}

action "in master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "build and deploy" {
  uses = "JamesIves/github-pages-deploy-action@master"
  needs = "in master"
  secrets = ["ACCESS_TOKEN"]
  env = {
    BRANCH = "gh-pages"
    BUILD_SCRIPT = "npm ci && npm run build"
    FOLDER = "dist"
  }
}
