const core = require('@actions/core')

const helper = require('./libs/helper.js')
const getDcoStatus = require('./libs/dco.js')

const validEvent = ['pull_request']

async function main() {
  try {
    const { eventName, payload: {pull_request: pr} } = github.context

    if (validEvent.indexOf(eventName) < 0) {
      core.error(`Invalid event: ${eventName}`)
      return
    }

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
