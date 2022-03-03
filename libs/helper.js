module.exports = {
  getOutput(commitInfos) {
    const lines = commitInfos.map(info => `  ${info.sha}    ${info.message}`)

    return `The SoB (DCO) check failed

${lines.join('\n')}

  What should I do to fix it ?

  All proposed commits should include a Signed-off-by: <your-name> <your-email-address> line in their commit message.
  This is most conveniently done by using --signoff (-s) when running git commit.
  Please follow the steps to resolve the issue:
  $ git config --global user.name 'your_name'
  $ git config --global user.email 'you_email'
  That is  it. Git will add the correct paragraph at the end of your commit message.
  COMMAND:  $ git commit -s -S -m 'your_commit_message'
  '-s' = 'Signed-off-by'
  '-S' = 'Verify commit using gpg key'
  ALL COMMITS MUST BE SIGNED
  'https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits\ `

  },
}
