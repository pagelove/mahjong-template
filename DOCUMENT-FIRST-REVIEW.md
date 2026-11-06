# Document-first review — Mahjong

Guide: Pagelove Document-first development edition2.4, revised2026-11-04; supplied source SHA256 `322d0c1c1c016787edeb67702c62c69610f26916933d0f34ec3dd7b2468b26dc`. Actor: Codex. Review source: `5b0f2d5d709a98ce7c3d3b58b9a791f92087b84d`. Maintainer: repository maintainers. Profiles: A5/A6.

## Model, authority and lifecycle

content/levels.html is authoritative level/layout content. tools/build.mjs derives immutable dist/site gameplay packages; core/garden models parse authored content. Personal photos are media; run timers/tile positions and compact checkpoint encoding are specialized A6 state, not competing editable level definitions.

## Operation, state and recovery contract

Stable level IDs and source digests identify definitions; game progress, studio drafts, undo and checkpoints use existing versioned local storage contracts. Shared scores are separately configured and remain unaccepted for a new target until checked. Owner CLI install preserves existing records and unrelated paths.

See GAME-PLAN.md, REVIEW.md, tools/contracts.mjs and scoring/storage tests for bounds, bytes and version policies. Imported unsupported/hostile content is rejected and existing progress retained. Exact live shared board policy, real phone and assistive acceptance remain separate.

## Enforcement and effects

Only fictional/public preview and local gameplay acceptance are claimed. No anti-cheat, production private-data or provider-wide authorization guarantee from passing local game tests.

## W1–W8 / R01–R12 acceptance

- W1–W3 / R01–R04: selected profiles, HTML preference, stable identities, owned aggregates and the representation exception above are the governing source contract. Derived caches/runtime arrays cannot become independent editable authorities.
- W4 / R05–R07: inspect exact canonical address/selector, actor, source revision and actual enforcement before enabling a newly relied-on mutation. Local fixtures and declaration review do not establish target-host privacy or validation.
- W5–W6 / R08–R10: distinguish working draft, frozen pending command, accepted state and unknown outcome. Preserve original data on rejected/future imports. No automatic external-effect replay. Offline collaboration/subscription features are not implied by browser storage; add tested scope/disposal/reconnect contracts before offering them.
- W7–W8 / R09–R12: audit/CHANGELOG.md records current commands, revisions and results. Existing REVIEW evidence remains historical. Re-run the appropriate source/shape/round-trip/concurrency/negative checks, then actual affected browser tasks. Never label pending live, maximum-device, assistive, restore or security checks as passed.

## Release and maintenance gates

Preserve user records, mutable source paths and incompatible backups during code updates. Do not replace a live document containing user records with a seed. Exclude credentials/private payloads from source, logs, public examples and previews. Pin coupled runtime/definition versions and retain rollback assets. Before real private or consequential use, verify supported read/write paths with valid and known-invalid/unauthorized requests on the actual host, exercise restoration in isolation, and record device/performance/accessibility limits. No new service or identity provider is authorized by this record. Re-review when format, source route, write adapter, host configuration, rules or runtime changes.
