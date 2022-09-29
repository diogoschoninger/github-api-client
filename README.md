# Github Clone

## Objective

- Develop a frontend application to consume the Github API

## Routes

The API makes the following set of routes available for consumption:

```
  current_user_url: /user
  authorizations_url: /authorizations
  code_search_url: /search/code?q={query}{&page,per_page,sort,order}
  commit_search_url: /search/commits?q={query}{&page,per_page,sort,order}
  emails_url: /user/emails
  emojis_url: /emojis
  events_url: /events
  feeds_url: /feeds
  followers_url: /user/followers
  following_url: /user/following{/target}
  gists_url: /gists{/gist_id}
  hub_url: /hub
  issue_search_url: /search/issues?q={query}{&page,per_page,sort,order}
  issues_url: /issues
  keys_url: /user/keys
  label_search_url: /search/labels?q={query}&repository_id={repository_id}{&page,per_page}
  notifications_url: /notifications
  organization_url: /orgs/{org}
  organization_repositories_url: /orgs/{org}/repos{?type,page,per_page,sort}
  organization_teams_url: /orgs/{org}/teams
  public_gists_url: /gists/public
  rate_limit_url: /rate_limit
  repository_url: /repos/{owner}/{repo}
  repository_search_url: /search/repositories?q={query}{&page,per_page,sort,order}
  current_user_repositories_url: /user/repos{?type,page,per_page,sort}
  starred_url: /user/starred{/owner}{/repo}
  starred_gists_url: /gists/starred
  topic_search_url: /search/topics?q={query}{&page,per_page}
  user_url: /users/{user}
  user_organizations_url: /user/orgs
  user_repositories_url: /users/{user}/repos{?type,page,per_page,sort}
  user_search_url: /search/users?q={query}{&page,per_page,sort,order
```

The ultimate goal of this project is to consume all routes efficiently
