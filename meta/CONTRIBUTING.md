[issues]: https://github.com/lisy09/k8s-project-template/issues
[all-proposals]: https://github.com/lisy09/k8s-project-template/projects/1
[_drafts]: https://github.com/lisy09/k8s-project-template/new/master/_drafts
[roadmap]: meta/ROADMAP.md
[proposal_template]: meta/proposal_template
[license]: ../LICENSE.md

# Contributing

Contributions to this project are released to the public under the [project's open source license][license].

Everyone is welcome to contribute. Contributing doesn’t just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting or triaging [issues][issues], and participating in the [Development Process](#development-process).

No matter how you want to get involved, we ask that you first learn what’s expected of anyone who participates in the project by reading the [Contributor Covenant Code of Conduct](http://contributor-covenant.org). By participating, you are expected to uphold this code.

We love pull requests. Here's a quick guide:

1. If you're adding a new feature or changing user-facing APIs, check out the [Development Process](#development-process).
2. Check for [existing issues][issues] for duplicates and confirm that it hasn't been fixed already in the master branch
3. Fork the repo, and clone it locally
4. Create a new branch for your contribution
5. Add test
6. Push to your fork and submit a pull request

At this point you're waiting on us. We like to at least comment on, if not
accept, pull requests within a few days. We may suggest some changes or improvements or alternatives.

Some things that will increase the chance that your pull request is accepted:

* Make sure the tests pass
* Update the documentation: code comments, example code, guides. Basically,
  update everything affected by your contribution.
* Include any information that would be relevant to reproducing bugs, use cases for new features, etc.

* Discuss the impact on existing versions (e.g. backwards compatibility)
  * If the change does break compatibility, how can it be updated to become backwards compatible, while directing users to the new way of doing things?
* Your commits are associated with your GitHub user: https://help.github.com/articles/why-are-my-commits-linked-to-the-wrong-user/
* Make pull requests against a feature branch,
* Follow our commit message conventions:
  * use imperative, present tense: “change” not “changed” nor “changes”
  * Commit test files with `test: …` or `test(scope): …` prefix.
  * Commit bug fixes with `fix: …` or `fix(scope): …` prefix
  * Commit features with `feature: …` or `feature(scope): …` prefix
  * Commit breaking changes by adding `BREAKING CHANGE:` in the commit body.
    The commit subject does not matter. A commit can have multiple `BREAKING CHANGE:`
    sections
  * Commit changes to README files or comments with `docs(README): …`
  * Cody style changes with `style: standard`

# Stale issue and pull request policy

Issues and pull requests have a shelf life and sometimes they are no longer relevant. All issues and pull requests that have not had any activity for 90 days will be marked as `stale`. Simply leave a comment with information about why it may still be relevant to keep it open. If no activity occurs in the next 7 days, it will be automatically closed.

The goal of this process is to keep the list of open issues and pull requests focused on work that is actionable and important for the maintainers and the community.

# Pull Request Reviews & releasing

Full automated releasing: TODO
May consider github ci/travis ci + [semantic-release](https://github.com/semantic-release/semantic-release). 
Once merged into the `master` branch, will automatically release a new version based on the commit messages of the pull request. For it to work correctly, make sure that the correct commit message conventions have been used. The ones relevant are

* `fix: …` will bump the fix version, e.g. 1.2.3 → 1.2.4
* `feature: …` will bump the feature version, e.g. 1.2.3 → 1.3.0
* `BREAKING CHANGE: …` in the commit body will bump the breaking change version, e.g. 1.2.3 → 2.0.0

# Development Process

This document outlines how a new feature grows from a rough idea into something that can improve workflows for millions of developers.

This process covers all changes to this project, such as new features or adding, changing, or removing any APIs (no matter how small). Smaller changes, such as bug fixes, optimizations, or other improvements can be contributed via the normal contribution process on the relevant repository.

## Goals

This process aims to leverage the collective ideas, insights, and experience of the community to improve the Hubot project and ecosystem. Its two primary goals are:

* Engage the wider community in the ongoing evolution of this project, and
* Maintain the vision and conceptual coherence of this project.

There is a natural tension between these two goals. Open evolution processes are, by nature, chaotic. Yet, maintaining a coherent vision requires some level of coordination. 

## Participation

Everyone is welcome to propose, discuss, and review ideas to improve this project.

The maintainers are responsible for the strategic direction of this project. Maintainers initiate, participate in, and manage the public review of proposals and have the authority to accept or reject changes.

## How to propose a change

1. **Check prior proposals**: many ideas come up frequently, and may either be in active discussion, or may have been discussed and rejected. Please check the [list of proposals][all-proposals] before proposing something new.
2. **Consider the goals of the upcoming release**: Each major release is focused on a [specific set of goals in the roadmap][roadmap] described early in the release cycle. When proposing a change, please consider how your proposal fits in with the larger goals of the upcoming release. Proposals that are out of scope may still be considered, but will likely be postponed.
3. **Socialize the idea**: Before starting the review process, it's helpful to gauge interest from the community. Ideally, the idea would have come up in a discussion in another issue and the consensus was to start an evolution proposal.
4. **Develop the proposal**: open a Pull Request with a rough sketch of the proposal using the [proposal template][proposal_template] in the [_drafts][_drafts] directory. Prototyping an implementation and its uses along with the proposal is encouraged, because it helps ensure both technical feasibility of the proposal as well as validating that the proposal solves the problems it is meant to solve.
5. **Request a review**: When you are ready for feedback from the Hubot community, change the frontmatter in your proposal from `state: In Progress` to `state: In Review`.
6. **Address feedback**: be responsive to questions and feedback about the proposal. When the proposal is sufficiently detailed and clear, and addresses feedback from earlier discussions of the idea, the `accepted` label will be added and a maintainer will be assigned to manage the review.

## Review process

When you change the frontmatter in your proposal from `state: In Progress` to `state: In Review`, a message will be posted in the [#evolution channel in chat (TODO)] requesting feedback from the community.

Reviews should usually be completed in a single week, but can run longer for particularly large or complex proposals. To avoid delays, it is important that the proposal authors be available to answer questions, address feedback, and clarify their intent during the review period.

After feedback from the community has been gathered, the maintainers will make a decision on whether to `accept` or `reject` the proposal.

Once a proposal has been accepted, the file should be renamed to `proposals/###-feature-name.md`, where `###` is the Pull Request number. It is usually up to the proposal author to implement it or discuss with the maintainers who will lead the implementation.

Once a proposal has been implemented, the Pull Request will be merged.

## Proposal states

A proposal can be in one of several states:

* **In Progress**: The authors are still working on the proposal and are not yet ready for review.
* **In Review**: The proposal is ready for review and comments from the community.
* **Withdrawn**: The proposal has been withdrawn by the original submitter.
* **Deferred**: Consideration of the proposal has been deferred because it does not meet the [roadmap of the upcoming release][roadmap]. Deferred proposals will be reconsidered when scoping the next major release.
* **Accepted**: The proposal has been accepted and is either awaiting implementation or is actively being implemented.
* **Rejected**: The proposal has been considered and rejected.