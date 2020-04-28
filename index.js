const core = require('@actions/core')
const github = require('@actions/github')

const helper = require('./libs/helper.js')
const getDcoStatus = require('./libs/dco.js')

async function main() {
  try {
    const {payload: {pull_request: pr}} = github.context

    const commitsString = core.getInput('commits')
    const commits = JSON.parse(commitsString)

    const dcoFailed = await getDcoStatus(commits, () => true, pr.html_url)
    if (dcoFailed.length == 0) return

    const summary = helper.getOutput(dcoFailed)
    core.setFailed(summary)
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
