// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(parent) {
  // [START networkmanagement_list_connectivity_tests_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent resource of the Connectivity Tests:
   *      `projects/{project_id}/locations/global`
   */
  // const parent = 'abc123'
  /**
   *  Number of `ConnectivityTests` to return.
   */
  // const pageSize = 1234
  /**
   *  Page token from an earlier query, as returned in `next_page_token`.
   */
  // const pageToken = 'abc123'
  /**
   *  Lists the `ConnectivityTests` that match the filter expression. A filter
   *  expression filters the resources listed in the response. The expression
   *  must be of the form `<field> <operator> <value>` where operators: `<`, `>`,
   *  `<=`,
   *  `>=`,
   *  `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is
   *  roughly synonymous with equality). <field> can refer to a proto or JSON
   *  field, or a synthetic field. Field names can be camelCase or snake_case.
   *  Examples:
   *  - Filter by name:
   *    name = "projects/proj-1/locations/global/connectivityTests/test-1
   *  - Filter by labels:
   *    - Resources that have a key called `foo`
   *      labels.foo:*
   *    - Resources that have a key called `foo` whose value is `bar`
   *      labels.foo = bar
   */
  // const filter = 'abc123'
  /**
   *  Field to use to sort the list.
   */
  // const orderBy = 'abc123'

  // Imports the Networkmanagement library
  const {ReachabilityServiceClient} =
    require('@google-cloud/network-management').v1;

  // Instantiates a client
  const networkmanagementClient = new ReachabilityServiceClient();

  async function listConnectivityTests() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await networkmanagementClient.listConnectivityTestsAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  listConnectivityTests();
  // [END networkmanagement_list_connectivity_tests_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
