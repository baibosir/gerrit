/**
 * @license
 * Copyright (C) 2020 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

export const htmlTemplate = html`
    <style include="shared-styles">
      form {
        display: flex;
      }
      gr-autocomplete {
        background-color: var(--view-background-color);
        border-radius: var(--border-radius);
        flex: 1;
        outline: none;
      }
    </style>
    <form>
      <gr-autocomplete show-search-icon="" id="searchInput" text="{{_inputVal}}" query="[[query]]" on-commit="_handleInputCommit" allow-non-suggested-values="" multi="" threshold="[[_threshold]]" tab-complete="" vertical-offset="30"></gr-autocomplete>
    </form>
    <gr-rest-api-interface id="restAPI"></gr-rest-api-interface>
`;
