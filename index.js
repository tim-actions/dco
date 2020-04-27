const core = require('@actions/core')
const github = require('@actions/github')

const helper = require('./libs/helper.js')
const getDcoStatus = require('./libs/dco.js')

const validEvent = ['pull_request']

async function main() {
  try {
    const { eventName, payload: {repository: repo, pull_request: pr} } = github.context

    if (validEvent.indexOf(eventName) < 0) {
      core.error(`Invalid event: ${eventName}`)
      return
    }

    const token = core.getInput('token')
    const octokit = new github.GitHub(token)

    const commits = await octokit.pulls.listCommits({
      owner: repo.owner.login,
      repo: repo.name,
      pull_number: pr.number,
    });

    const dcoFailed = await getDcoStatus(commits.data, () => true, pr.html_url)
    if (dcoFailed.length == 0) return

    const summary = helper.getOutput(dcoFailed)
    core.setFailed(summary)
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
