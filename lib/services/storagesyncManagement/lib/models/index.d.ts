/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the StorageSyncErrorDetails class.
 * @constructor
 * Error Details object.
 *
 * @member {string} [code] Error code of the given entry.
 * @member {string} [message] Error message of the given entry.
 * @member {string} [target] Target of the given entry.
 */
export interface StorageSyncErrorDetails {
  code?: string;
  message?: string;
  target?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageSyncApiError class.
 * @constructor
 * Error type
 *
 * @member {string} [code] Error code of the given entry.
 * @member {string} [message] Error message of the given entry.
 * @member {string} [target] Target of the given error entry.
 * @member {object} [details] Error details of the given entry.
 * @member {string} [details.code] Error code of the given entry.
 * @member {string} [details.message] Error message of the given entry.
 * @member {string} [details.target] Target of the given entry.
 */
export interface StorageSyncApiError {
  code?: string;
  message?: string;
  target?: string;
  details?: StorageSyncErrorDetails;
}

/**
 * @class
 * Initializes a new instance of the StorageSyncError class.
 * @constructor
 * Error type
 *
 * @member {object} [error] Error details of the given entry.
 * @member {string} [error.code] Error code of the given entry.
 * @member {string} [error.message] Error message of the given entry.
 * @member {string} [error.target] Target of the given error entry.
 * @member {object} [error.details] Error details of the given entry.
 * @member {string} [error.details.code] Error code of the given entry.
 * @member {string} [error.details.message] Error message of the given entry.
 * @member {string} [error.details.target] Target of the given entry.
 * @member {object} [innererror] Error details of the given entry.
 * @member {string} [innererror.code] Error code of the given entry.
 * @member {string} [innererror.message] Error message of the given entry.
 * @member {string} [innererror.target] Target of the given error entry.
 * @member {object} [innererror.details] Error details of the given entry.
 * @member {string} [innererror.details.code] Error code of the given entry.
 * @member {string} [innererror.details.message] Error message of the given
 * entry.
 * @member {string} [innererror.details.target] Target of the given entry.
 */
export interface StorageSyncError {
  error?: StorageSyncApiError;
  innererror?: StorageSyncApiError;
}

/**
 * @class
 * Initializes a new instance of the SubscriptionState class.
 * @constructor
 * Subscription State object.
 *
 * @member {string} [state] State of Azure Subscription. Possible values
 * include: 'Registered', 'Unregistered', 'Warned', 'Suspended', 'Deleted'
 * @member {boolean} [istransitioning] Is Transitioning
 * @member {object} [properties] Subscription state properties.
 */
export interface SubscriptionState {
  state?: string;
  readonly istransitioning?: boolean;
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Fully qualified resource Id for the resource. Ex -
 * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
 * @member {string} [name] The name of the resource
 * @member {string} [type] The type of the resource. Ex-
 * Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * The resource model definition for a ARM tracked top level resource
 *
 * @member {object} [tags] Resource tags.
 * @member {string} location The geo-location where the resource lives
 */
export interface TrackedResource extends Resource {
  tags?: { [propertyName: string]: string };
  location: string;
}

/**
 * @class
 * Initializes a new instance of the StorageSyncService class.
 * @constructor
 * Storage Sync Service object.
 *
 * @member {number} [storageSyncServiceStatus] Storage Sync service status.
 * @member {string} [storageSyncServiceUid] Storage Sync service Uid
 */
export interface StorageSyncService extends TrackedResource {
  readonly storageSyncServiceStatus?: number;
  readonly storageSyncServiceUid?: string;
}

/**
 * @class
 * Initializes a new instance of the SyncGroup class.
 * @constructor
 * Sync Group object.
 *
 * @member {string} [uniqueId] Unique Id
 * @member {string} [syncGroupStatus] Sync group status
 */
export interface SyncGroup extends Resource {
  uniqueId?: string;
  readonly syncGroupStatus?: string;
}

/**
 * @class
 * Initializes a new instance of the CloudEndpoint class.
 * @constructor
 * Cloud Endpoint object.
 *
 * @member {string} [storageAccountResourceId] Storage Account Resource Id
 * @member {string} [storageAccountShareName] Storage Account Share name
 * @member {string} [storageAccountTenantId] Storage Account Tenant Id
 * @member {string} [partnershipId] Partnership Id
 * @member {string} [friendlyName] Friendly Name
 * @member {boolean} [backupEnabled] Backup Enabled
 * @member {string} [provisioningState] CloudEndpoint Provisioning State
 * @member {string} [lastWorkflowId] CloudEndpoint lastWorkflowId
 * @member {string} [lastOperationName] Resource Last Operation Name
 */
export interface CloudEndpoint extends Resource {
  storageAccountResourceId?: string;
  storageAccountShareName?: string;
  storageAccountTenantId?: string;
  partnershipId?: string;
  friendlyName?: string;
  readonly backupEnabled?: boolean;
  provisioningState?: string;
  lastWorkflowId?: string;
  lastOperationName?: string;
}

/**
 * @class
 * Initializes a new instance of the RecallActionParameters class.
 * @constructor
 * The parameters used when calling recall action on server endpoint.
 *
 * @member {string} [pattern] Pattern of the files.
 * @member {string} [recallPath] Recall path.
 */
export interface RecallActionParameters {
  pattern?: string;
  recallPath?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageSyncServiceCreateParameters class.
 * @constructor
 * The parameters used when creating a storage sync service.
 *
 * @member {string} [location] Required. Gets or sets the location of the
 * resource. This will be one of the supported and registered Azure Geo Regions
 * (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource
 * cannot be changed once it is created, but if an identical geo region is
 * specified on update, the request will succeed.
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used for viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key with a length no greater than 128
 * characters and a value with a length no greater than 256 characters.
 */
export interface StorageSyncServiceCreateParameters {
  location?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SyncGroupCreateParameters class.
 * @constructor
 * The parameters used when creating a sync group.
 *
 * @member {string} [location] Required. Gets or sets the location of the
 * resource. This will be one of the supported and registered Azure Geo Regions
 * (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource
 * cannot be changed once it is created, but if an identical geo region is
 * specified on update, the request will succeed.
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used for viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key with a length no greater than 128
 * characters and a value with a length no greater than 256 characters.
 * @member {object} [properties] The parameters used to create the sync group
 */
export interface SyncGroupCreateParameters {
  location?: string;
  tags?: { [propertyName: string]: string };
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the CloudEndpointCreateParameters class.
 * @constructor
 * The parameters used when creating a storage sync service.
 *
 * @member {string} [location] Required. Gets or sets the location of the
 * resource. This will be one of the supported and registered Azure Geo Regions
 * (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource
 * cannot be changed once it is created, but if an identical geo region is
 * specified on update, the request will succeed.
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used for viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key with a length no greater than 128
 * characters and a value with a length no greater than 256 characters.
 * @member {string} [storageAccountResourceId] Storage Account Resource Id
 * @member {string} [storageAccountShareName] Storage Account Share name
 * @member {string} [storageAccountTenantId] Storage Account Tenant Id
 */
export interface CloudEndpointCreateParameters {
  location?: string;
  tags?: { [propertyName: string]: string };
  storageAccountResourceId?: string;
  storageAccountShareName?: string;
  storageAccountTenantId?: string;
}

/**
 * @class
 * Initializes a new instance of the ServerEndpointCreateParameters class.
 * @constructor
 * The parameters used when creating a storage sync service.
 *
 * @member {string} [location] Required. Gets or sets the location of the
 * resource. This will be one of the supported and registered Azure Geo Regions
 * (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource
 * cannot be changed once it is created, but if an identical geo region is
 * specified on update, the request will succeed.
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used for viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key with a length no greater than 128
 * characters and a value with a length no greater than 256 characters.
 * @member {string} [serverLocalPath] Server Local path.
 * @member {string} [cloudTiering] Cloud Tiering. Possible values include:
 * 'on', 'off'
 * @member {number} [volumeFreeSpacePercent] Level of free space to be
 * maintained by Cloud Tiering if it is enabled.
 * @member {string} [friendlyName] Friendly Name
 * @member {string} [serverResourceId] Server Resource Id.
 */
export interface ServerEndpointCreateParameters {
  location?: string;
  tags?: { [propertyName: string]: string };
  serverLocalPath?: string;
  cloudTiering?: string;
  volumeFreeSpacePercent?: number;
  friendlyName?: string;
  serverResourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the RegisteredServerCreateParameters class.
 * @constructor
 * The parameters used when creating a storage sync service.
 *
 * @member {string} [location] Required. Gets or sets the location of the
 * resource. This will be one of the supported and registered Azure Geo Regions
 * (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource
 * cannot be changed once it is created, but if an identical geo region is
 * specified on update, the request will succeed.
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used for viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key with a length no greater than 128
 * characters and a value with a length no greater than 256 characters.
 * @member {string} [serverCertificate] Registered Server Certificate
 * @member {string} [agentVersion] Registered Server Agent Version
 * @member {string} [serverOSVersion] Registered Server OS Version
 * @member {string} [lastHeartBeat] Registered Server last heart beat
 * @member {string} [serverRole] Registered Server serverRole
 * @member {string} [clusterId] Registered Server clusterId
 * @member {string} [clusterName] Registered Server clusterName
 * @member {string} [serverId] Registered Server serverId
 * @member {string} [friendlyName] Friendly Name
 */
export interface RegisteredServerCreateParameters {
  location?: string;
  tags?: { [propertyName: string]: string };
  serverCertificate?: string;
  agentVersion?: string;
  serverOSVersion?: string;
  lastHeartBeat?: string;
  serverRole?: string;
  clusterId?: string;
  clusterName?: string;
  serverId?: string;
  friendlyName?: string;
}

/**
 * @class
 * Initializes a new instance of the ServerEndpointUpdateParameters class.
 * @constructor
 * Parameters for updating an Server Endpoint.
 *
 * @member {object} [tags] The user-specified tags associated with the server
 * endpoint.
 * @member {string} [cloudTiering] Cloud Tiering. Possible values include:
 * 'on', 'off'
 * @member {number} [volumeFreeSpacePercent] Level of free space to be
 * maintained by Cloud Tiering if it is enabled.
 */
export interface ServerEndpointUpdateParameters {
  tags?: { [propertyName: string]: string };
  cloudTiering?: string;
  volumeFreeSpacePercent?: number;
}

/**
 * @class
 * Initializes a new instance of the ServerEndpoint class.
 * @constructor
 * Server Endpoint object.
 *
 * @member {string} [serverLocalPath] Server Local path.
 * @member {string} [cloudTiering] Cloud Tiering. Possible values include:
 * 'on', 'off'
 * @member {number} [volumeFreeSpacePercent] Level of free space to be
 * maintained by Cloud Tiering if it is enabled.
 * @member {string} [friendlyName] Friendly Name
 * @member {string} [serverResourceId] Server Resource Id.
 * @member {string} [provisioningState] ServerEndpoint Provisioning State
 * @member {string} [lastWorkflowId] ServerEndpoint lastWorkflowId
 * @member {string} [lastOperationName] Resource Last Operation Name
 * @member {object} [syncStatus] Sync Health Status
 */
export interface ServerEndpoint extends Resource {
  serverLocalPath?: string;
  cloudTiering?: string;
  volumeFreeSpacePercent?: number;
  friendlyName?: string;
  serverResourceId?: string;
  provisioningState?: string;
  lastWorkflowId?: string;
  lastOperationName?: string;
  syncStatus?: any;
}

/**
 * @class
 * Initializes a new instance of the RegisteredServer class.
 * @constructor
 * Registered Server resource.
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} [serverCertificate] Registered Server Certificate
 * @member {string} [agentVersion] Registered Server Agent Version
 * @member {string} [serverOSVersion] Registered Server OS Version
 * @member {number} [serverManagementtErrorCode] Registered Server Management
 * Error Code
 * @member {string} [lastHeartBeat] Registered Server last heart beat
 * @member {string} [provisioningState] Registered Server Provisioning State
 * @member {string} [serverRole] Registered Server serverRole
 * @member {string} [clusterId] Registered Server clusterId
 * @member {string} [clusterName] Registered Server clusterName
 * @member {string} [serverId] Registered Server serverId
 * @member {string} [storageSyncServiceUid] Registered Server
 * storageSyncServiceUid
 * @member {string} [lastWorkflowId] Registered Server lastWorkflowId
 * @member {string} [lastOperationName] Resource Last Operation Name
 * @member {string} [discoveryEndpointUri] Resource discoveryEndpointUri
 * @member {string} [resourceLocation] Resource Location
 * @member {string} [serviceLocation] Service Location
 * @member {string} [friendlyName] Friendly Name
 * @member {string} [managementEndpointUri] Management Endpoint Uri
 */
export interface RegisteredServer extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  serverCertificate?: string;
  agentVersion?: string;
  serverOSVersion?: string;
  serverManagementtErrorCode?: number;
  lastHeartBeat?: string;
  provisioningState?: string;
  serverRole?: string;
  clusterId?: string;
  clusterName?: string;
  serverId?: string;
  storageSyncServiceUid?: string;
  lastWorkflowId?: string;
  lastOperationName?: string;
  discoveryEndpointUri?: string;
  resourceLocation?: string;
  serviceLocation?: string;
  friendlyName?: string;
  managementEndpointUri?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourcesMoveInfo class.
 * @constructor
 * Resource Move Info.
 *
 * @member {string} [targetResourceGroup] Target resource group.
 * @member {array} [resources] Collection of Resources.
 */
export interface ResourcesMoveInfo {
  targetResourceGroup?: string;
  resources?: string[];
}

/**
 * @class
 * Initializes a new instance of the Workflow class.
 * @constructor
 * Workflow resource.
 *
 * @member {string} [lastStepName] last step name
 * @member {string} [status] workflow status. Possible values include:
 * 'active', 'expired', 'succeeded', 'aborted', 'failed'
 * @member {string} [operation] operation direction. Possible values include:
 * 'do', 'undo', 'cancel'
 * @member {string} [steps] workflow steps
 * @member {string} [lastOperationId] workflow last operation identifier.
 */
export interface Workflow extends Resource {
  lastStepName?: string;
  status?: string;
  operation?: string;
  steps?: string;
  lastOperationId?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplayInfo class.
 * @constructor
 * The operation supported by storage sync.
 *
 * @member {string} [description] The description of the operation.
 * @member {string} [operation] The action that users can perform, based on
 * their permission level.
 * @member {string} [provider] Service provider: Microsoft StorageSync.
 * @member {string} [resource] Resource on which the operation is performed.
 */
export interface OperationDisplayInfo {
  description?: string;
  operation?: string;
  provider?: string;
  resource?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationEntity class.
 * @constructor
 * The operation supported by storage sync.
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
 * @member {object} [display] The operation supported by storage sync.
 * @member {string} [display.description] The description of the operation.
 * @member {string} [display.operation] The action that users can perform,
 * based on their permission level.
 * @member {string} [display.provider] Service provider: Microsoft StorageSync.
 * @member {string} [display.resource] Resource on which the operation is
 * performed.
 * @member {string} [origin] The origin.
 */
export interface OperationEntity {
  name?: string;
  display?: OperationDisplayInfo;
  origin?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplayResource class.
 * @constructor
 * Operation Display Resource object.
 *
 * @member {string} [provider] Operation Display Resource Provider.
 * @member {string} [resource] Operation Display Resource.
 * @member {string} [operation] Operation Display Resource Operation.
 * @member {string} [description] Operation Display Resource Description.
 */
export interface OperationDisplayResource {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityParameters class.
 * @constructor
 * Parameters for a check name availability request.
 *
 * @member {string} name The name to check for availability
 */
export interface CheckNameAvailabilityParameters {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityResult class.
 * @constructor
 * The CheckNameAvailability operation response.
 *
 * @member {boolean} [nameAvailable] Gets a boolean value that indicates
 * whether the name is available for you to use. If true, the name is
 * available. If false, the name has already been taken or invalid and cannot
 * be used.
 * @member {string} [reason] Gets the reason that a Storage Sync Service name
 * could not be used. The Reason element is only returned if NameAvailable is
 * false. Possible values include: 'Invalid', 'AlreadyExists'
 * @member {string} [message] Gets an error message explaining the Reason value
 * in more detail.
 */
export interface CheckNameAvailabilityResult {
  readonly nameAvailable?: boolean;
  readonly reason?: string;
  readonly message?: string;
}

/**
 * @class
 * Initializes a new instance of the RestoreFileSpec class.
 * @constructor
 * Restore file spec.
 *
 * @member {string} [path] Restore file spec path
 * @member {boolean} [isdir] Restore file spec isdir
 */
export interface RestoreFileSpec {
  path?: string;
  readonly isdir?: boolean;
}

/**
 * @class
 * Initializes a new instance of the PostRestoreRequest class.
 * @constructor
 * Post Restore Request
 *
 * @member {string} [partition] Post Restore partition.
 * @member {string} [replicaGroup] Post Restore replica group.
 * @member {string} [requestId] Post Restore request id.
 * @member {string} [azureFileShareUri] Post Restore Azure file share uri.
 * @member {string} [status] Post Restore Azure status.
 * @member {string} [sourceAzureFileShareUri] Post Restore Azure source azure
 * file share uri.
 * @member {string} [failedFileList] Post Restore Azure failed file list.
 * @member {array} [restoreFileSpec] Post Restore restore file spec array.
 */
export interface PostRestoreRequest {
  partition?: string;
  replicaGroup?: string;
  requestId?: string;
  azureFileShareUri?: string;
  status?: string;
  sourceAzureFileShareUri?: string;
  failedFileList?: string;
  restoreFileSpec?: RestoreFileSpec[];
}

/**
 * @class
 * Initializes a new instance of the PreRestoreRequest class.
 * @constructor
 * Pre Restore request object.
 *
 * @member {string} [partition] Pre Restore partition.
 * @member {string} [replicaGroup] Pre Restore replica group.
 * @member {string} [requestId] Pre Restore request id.
 * @member {string} [azureFileShareUri] Pre Restore Azure file share uri.
 * @member {string} [status] Pre Restore Azure status.
 * @member {string} [sourceAzureFileShareUri] Pre Restore Azure source azure
 * file share uri.
 * @member {string} [backupMetadataPropertyBag] Pre Restore backup metadata
 * property bag.
 * @member {array} [restoreFileSpec] Pre Restore restore file spec array.
 * @member {number} [pauseWaitForSyncDrainTimePeriodInSeconds] Pre Restore
 * pause wait for sync drain time period in seconds.
 */
export interface PreRestoreRequest {
  partition?: string;
  replicaGroup?: string;
  requestId?: string;
  azureFileShareUri?: string;
  status?: string;
  sourceAzureFileShareUri?: string;
  backupMetadataPropertyBag?: string;
  restoreFileSpec?: RestoreFileSpec[];
  pauseWaitForSyncDrainTimePeriodInSeconds?: number;
}

/**
 * @class
 * Initializes a new instance of the BackupRequest class.
 * @constructor
 * Backup request
 *
 * @member {string} [azureFileShare] Azure File Share.
 */
export interface BackupRequest {
  azureFileShare?: string;
}

/**
 * @class
 * Initializes a new instance of the PostBackupResponse class.
 * @constructor
 * Post Backup Response
 *
 * @member {string} [cloudEndpointName] cloud endpoint Name.
 */
export interface PostBackupResponse {
  readonly cloudEndpointName?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkflowArray class.
 * @constructor
 * Array of Workflow
 *
 * @member {array} [value] Collection of workflow items.
 */
export interface WorkflowArray {
  value?: Workflow[];
}

/**
 * @class
 * Initializes a new instance of the StorageSyncServiceUpdateParameters class.
 * @constructor
 * Parameters for updating an Storage sync service.
 *
 * @member {object} [tags] The user-specified tags associated with the storage
 * sync service.
 * @member {object} [properties] The properties of the storage sync service.
 */
export interface StorageSyncServiceUpdateParameters {
  tags?: { [propertyName: string]: string };
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the ProxyResource class.
 * @constructor
 * The resource model definition for a ARM proxy resource. It will have
 * everything other than required location and tags
 *
 */
export interface ProxyResource extends Resource {
}

/**
 * @class
 * Initializes a new instance of the AzureEntityResource class.
 * @constructor
 * The resource model definition for a Azure Resource Manager resource with an
 * etag.
 *
 * @member {string} [etag] Resource Etag.
 */
export interface AzureEntityResource extends Resource {
  readonly etag?: string;
}


/**
 * @class
 * Initializes a new instance of the OperationEntityListResult class.
 * @constructor
 * The list of storage sync operations.
 *
 * @member {string} [nextLink] The link used to get the next page of
 * operations.
 */
export interface OperationEntityListResult extends Array<OperationEntity> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageSyncServiceArray class.
 * @constructor
 * Array of StorageSyncServices
 *
 */
export interface StorageSyncServiceArray extends Array<StorageSyncService> {
}

/**
 * @class
 * Initializes a new instance of the SyncGroupArray class.
 * @constructor
 * Array of SyncGroup
 *
 */
export interface SyncGroupArray extends Array<SyncGroup> {
}

/**
 * @class
 * Initializes a new instance of the CloudEndpointArray class.
 * @constructor
 * Array of CloudEndpoint
 *
 */
export interface CloudEndpointArray extends Array<CloudEndpoint> {
}

/**
 * @class
 * Initializes a new instance of the ServerEndpointArray class.
 * @constructor
 * Array of ServerEndpoint
 *
 */
export interface ServerEndpointArray extends Array<ServerEndpoint> {
}

/**
 * @class
 * Initializes a new instance of the RegisteredServerArray class.
 * @constructor
 * Array of RegisteredServer
 *
 */
export interface RegisteredServerArray extends Array<RegisteredServer> {
}
