## 2024-01-27 - [Image Optimization Tools]
**Learning:** `@squoosh/cli` failed with URL parsing errors in this environment (likely due to WASM/Undici interaction). `sharp-cli` proved to be a reliable alternative for image conversion.
**Action:** Use `sharp-cli` for image optimizations in future tasks if `@squoosh/cli` fails.

## 2024-01-27 - [Mintlify Structure]
**Learning:** Mintlify documentation repositories may not have a `package.json` or standard Node.js build scripts (`lint`, `test`) in the root.
**Action:** Rely on static analysis and manual verification (file existence, references) when working with Mintlify repos without local `mint` CLI access.
