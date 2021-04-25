# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

[DOC](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'


### Action payload

```json
{
  "after": "13de96b118560761f070209dfbfe6e0129fbd8fd",
  "base_ref": "refs/heads/master",
  "before": "0000000000000000000000000000000000000000",
  "commits": [],
  "compare": "https://github.com/finvernizzi/SDK/compare/0.0.2",
  "created": true,
  "deleted": false,
  "forced": false,
  "head_commit": {
    "author": {
      "email": "fabrizio.invernizzi@quandopasso.com",
      "name": "Fabrizio Invernizzi",
      "username": "finvernizzi"
    },
    "committer": {
      "email": "fabrizio.invernizzi@quandopasso.com",
      "name": "Fabrizio Invernizzi",
      "username": "finvernizzi"
    },
    "distinct": true,
    "id": "13de96b118560761f070209dfbfe6e0129fbd8fd",
    "message": "Test",
    "timestamp": "2021-04-25T09:16:06+02:00",
    "tree_id": "e950c5bd2671992466ba0eac0f4fe6683fd1ab9c",
    "url": "https://github.com/finvernizzi/SDK/commit/13de96b118560761f070209dfbfe6e0129fbd8fd"
  },
  "pusher": {
    "email": "nisi1973@gmail.com",
    "name": "finvernizzi"
  },
  "ref": "refs/tags/0.0.2",
  "repository": {
    "archive_url": "https://api.github.com/repos/finvernizzi/SDK/{archive_format}{/ref}",
    "archived": false,
    "assignees_url": "https://api.github.com/repos/finvernizzi/SDK/assignees{/user}",
    "blobs_url": "https://api.github.com/repos/finvernizzi/SDK/git/blobs{/sha}",
    "branches_url": "https://api.github.com/repos/finvernizzi/SDK/branches{/branch}",
    "clone_url": "https://github.com/finvernizzi/SDK.git",
    "collaborators_url": "https://api.github.com/repos/finvernizzi/SDK/collaborators{/collaborator}",
    "comments_url": "https://api.github.com/repos/finvernizzi/SDK/comments{/number}",
    "commits_url": "https://api.github.com/repos/finvernizzi/SDK/commits{/sha}",
    "compare_url": "https://api.github.com/repos/finvernizzi/SDK/compare/{base}...{head}",
    "contents_url": "https://api.github.com/repos/finvernizzi/SDK/contents/{+path}",
    "contributors_url": "https://api.github.com/repos/finvernizzi/SDK/contributors",
      "html_url": "https://github.com/finvernizzi",
      "id": 7287898,
      "login": "finvernizzi",
      "name": "finvernizzi",
      "node_id": "MDQ6VXNlcjcyODc4OTg=",
      "organizations_url": "https://api.github.com/users/finvernizzi/orgs",
      "received_events_url": "https://api.github.com/users/finvernizzi/received_events",
      "repos_url": "https://api.github.com/users/finvernizzi/repos",
      "site_admin": false,
      "starred_url": "https://api.github.com/users/finvernizzi/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/finvernizzi/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/finvernizzi"
    },
    "private": true,
    "pulls_url": "https://api.github.com/repos/finvernizzi/SDK/pulls{/number}",
    "pushed_at": 1619334983,
    "releases_url": "https://api.github.com/repos/finvernizzi/SDK/releases{/id}",
    "size": 317,
    "ssh_url": "git@github.com:finvernizzi/SDK.git",
    "stargazers": 0,
    "stargazers_count": 0,
    "stargazers_url": "https://api.github.com/repos/finvernizzi/SDK/stargazers",
    "statuses_url": "https://api.github.com/repos/finvernizzi/SDK/statuses/{sha}",
    "subscribers_url": "https://api.github.com/repos/finvernizzi/SDK/subscribers",
    "subscription_url": "https://api.github.com/repos/finvernizzi/SDK/subscription",
    "svn_url": "https://github.com/finvernizzi/SDK",
    "tags_url": "https://api.github.com/repos/finvernizzi/SDK/tags",
    "teams_url": "https://api.github.com/repos/finvernizzi/SDK/teams",
    "trees_url": "https://api.github.com/repos/finvernizzi/SDK/git/trees{/sha}",
    "updated_at": "2021-04-25T07:16:16Z",
    "url": "https://github.com/finvernizzi/SDK",
    "watchers": 0,
    "watchers_count": 0
  },
  "sender": {
    "avatar_url": "https://avatars.githubusercontent.com/u/7287898?v=4",
    "events_url": "https://api.github.com/users/finvernizzi/events{/privacy}",
    "followers_url": "https://api.github.com/users/finvernizzi/followers",
    "following_url": "https://api.github.com/users/finvernizzi/following{/other_user}",
    "gists_url": "https://api.github.com/users/finvernizzi/gists{/gist_id}",
    "gravatar_id": "",
    "html_url": "https://github.com/finvernizzi",
    "id": 7287898,
    "login": "finvernizzi",
    "node_id": "MDQ6VXNlcjcyODc4OTg=",
    "organizations_url": "https://api.github.com/users/finvernizzi/orgs",
    "received_events_url": "https://api.github.com/users/finvernizzi/received_events",
    "repos_url": "https://api.github.com/users/finvernizzi/repos",
    "site_admin": false,
    "starred_url": "https://api.github.com/users/finvernizzi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/finvernizzi/subscriptions",
    "type": "User",
    "url": "https://api.github.com/users/finvernizzi"
  }
}
```