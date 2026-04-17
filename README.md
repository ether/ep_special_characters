[![Backend Tests Status](https://github.com/ether/ep_special_characters/actions/workflows/test-and-release.yml/badge.svg)](https://github.com/ether/ep_special_characters/actions/workflows/test-and-release.yml)

> ⚠️ **Known issue:** Clicking a character in the picker currently throws
> `ReferenceError: require is not defined` because [`static/js/main.js:16`](static/js/main.js)
> uses a browser-side `require()` that Etherpad's current esbuild bundler
> doesn't expose. Tracking fix in [#87](https://github.com/ether/ep_special_characters/issues/87).

# Special Character Picker for Etherpad
TODO: Describe the plugin.

## Installation

From the Etherpad working directory, run:

```shell
pnpm run plugins install ep_special_characters
```

Or, install from Etherpad's `/admin/plugins` page.

## Configuration

TODO

## Testing

To run the backend tests, run the following from the Etherpad working directory:

```shell
(cd src && npm test)
```

To run the frontend tests, visit: http://localhost:9001/tests/frontend/

## Copyright and License

Copyright © the ep_special_characters authors and contributors

Licensed under the [Apache License, Version 2.0](LICENSE) (the "License"); you
may not use this file except in compliance with the License. You may obtain a
copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
