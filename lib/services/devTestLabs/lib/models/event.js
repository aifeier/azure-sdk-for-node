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

/**
 * An event to be notified for.
 *
 */
class Event {
  /**
   * Create a Event.
   * @member {string} [eventName] The event type for which this notification is
   * enabled (i.e. AutoShutdown, Cost). Possible values include:
   * 'AutoShutdown', 'Cost'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Event
   *
   * @returns {object} metadata of Event
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Event',
      type: {
        name: 'Composite',
        className: 'Event',
        modelProperties: {
          eventName: {
            required: false,
            serializedName: 'eventName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Event;
