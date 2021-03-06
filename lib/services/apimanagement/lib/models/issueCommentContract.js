/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Issue Comment Contract details.
 *
 * @extends models['Resource']
 */
class IssueCommentContract extends models['Resource'] {
  /**
   * Create a IssueCommentContract.
   * @member {string} text Comment text.
   * @member {date} [createdDate] Date and time when the comment was created.
   * @member {string} userId A resource identifier for the user who left the
   * comment.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IssueCommentContract
   *
   * @returns {object} metadata of IssueCommentContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IssueCommentContract',
      type: {
        name: 'Composite',
        className: 'IssueCommentContract',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          text: {
            required: true,
            serializedName: 'properties.text',
            type: {
              name: 'String'
            }
          },
          createdDate: {
            required: false,
            serializedName: 'properties.createdDate',
            type: {
              name: 'DateTime'
            }
          },
          userId: {
            required: true,
            serializedName: 'properties.userId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IssueCommentContract;
