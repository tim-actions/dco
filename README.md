# dco-check

A GitHub Action that verifies commits in pull-request all include Developer Certificate of Origin (DCO) information

## Usage
Add .github/workflows/sanity-check.yml with the following:

```
name: Sanity check
on: [pull_request]

jobs:
  dco_check_job:
    runs-on: ubuntu-latest
    name: DCO Check
    steps:
    - name: DCO Check
      uses: Tim-Zhang/dco@master
      with:
        token: ${{ secrets.GITHUB_TOKEN }}

```
