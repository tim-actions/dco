module.exports = {
  getOutput(commitInfos) {
    const lines = commitInfos.map(info => `  ${info.sha}    ${info.message}`)

    return `The SoB (DCO) check failed

${lines.join('\n')}

  What should I do to fix it ?

  All proposed commits should include a Signed-Off-By: <your-email-address> line in their commit message.
  This is most conveniently done by using --signoff (-s) when running git commit.`

  },
}
