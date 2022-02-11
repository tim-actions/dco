# dco-check

A GitHub Action that verifies commits in pull-request all include Developer Certificate of Origin (DCO) information

## Usage

Add .github/workflows/sanity-check.yml with the following:

```yaml
name: Sanity check
on: [pull_request]

jobs:
  commits_check_job:
    runs-on: ubuntu-latest
    name: Commits Check
    steps:
    - name: Get PR Commits
      id: 'get-pr-commits'
      uses: tim-actions/get-pr-commits@master
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
    - name: DCO Check
      uses: tim-actions/dco@master
      with:
        commits: ${{ steps.get-pr-commits.outputs.commits }}
```
## Copyright and License

Copyright Tim Zhang and Contributors.

ICS license, see [LICENSE.txt](LICENSE.txt) for details.
