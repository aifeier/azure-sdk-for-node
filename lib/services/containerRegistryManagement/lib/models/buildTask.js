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
 * The build task that has the resource properties and all build items. The
 * build task will have all information to schedule a build against it.
 *
 * @extends models['Resource']
 */
class BuildTask extends models['Resource'] {
  /**
   * Create a BuildTask.
   * @member {string} [provisioningState] The provisioning state of the build
   * task. Possible values include: 'Creating', 'Updating', 'Deleting',
   * 'Succeeded', 'Failed', 'Canceled'
   * @member {date} [creationDate] The creation date of build task.
   * @member {string} alias The alternative updatable name for a build task.
   * @member {string} [status] The current status of build task. Possible
   * values include: 'Disabled', 'Enabled'
   * @member {object} sourceRepository The properties that describes the
   * source(code) for the build task.
   * @member {string} [sourceRepository.sourceControlType] The type of source
   * control service. Possible values include: 'Github',
   * 'VisualStudioTeamService'
   * @member {string} [sourceRepository.repositoryUrl] The full URL to the
   * source code respository
   * @member {boolean} [sourceRepository.isCommitTriggerEnabled] The value of
   * this property indicates whether the source control commit trigger is
   * enabled or not.
   * @member {object} [sourceRepository.sourceControlAuthProperties] The
   * authorization properties for accessing the source code repository.
   * @member {string} [sourceRepository.sourceControlAuthProperties.tokenType]
   * The type of Auth token. Possible values include: 'PAT', 'OAuth'
   * @member {string} [sourceRepository.sourceControlAuthProperties.token] The
   * access token used to access the source control provider.
   * @member {string}
   * [sourceRepository.sourceControlAuthProperties.refreshToken] The refresh
   * token used to refresh the access token.
   * @member {string} [sourceRepository.sourceControlAuthProperties.scope] The
   * scope of the access token.
   * @member {number} [sourceRepository.sourceControlAuthProperties.expiresIn]
   * Time in seconds that the token remains valid
   * @member {object} platform The platform properties against which the build
   * has to happen.
   * @member {string} [platform.osType] The operating system type required for
   * the build. Possible values include: 'Windows', 'Linux'
   * @member {number} [platform.cpu] The CPU configuration in terms of number
   * of cores required for the build.
   * @member {number} [timeout] Build timeout in seconds. Default value: 3600 .
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BuildTask
   *
   * @returns {object} metadata of BuildTask
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BuildTask',
      type: {
        name: 'Composite',
        className: 'BuildTask',
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
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          creationDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationDate',
            type: {
              name: 'DateTime'
            }
          },
          alias: {
            required: true,
            serializedName: 'properties.alias',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          sourceRepository: {
            required: true,
            serializedName: 'properties.sourceRepository',
            type: {
              name: 'Composite',
              className: 'SourceRepositoryProperties'
            }
          },
          platform: {
            required: true,
            serializedName: 'properties.platform',
            type: {
              name: 'Composite',
              className: 'PlatformProperties'
            }
          },
          timeout: {
            required: false,
            serializedName: 'properties.timeout',
            defaultValue: 3600,
            constraints: {
              InclusiveMaximum: 28800,
              InclusiveMinimum: 300
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = BuildTask;
