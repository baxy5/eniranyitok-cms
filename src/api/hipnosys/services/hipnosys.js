'use strict';

/**
 * hipnosys service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hipnosys.hipnosys');
