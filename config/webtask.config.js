'use strict';
/*
 *  Boilerplate: This configuration file will be sent to the Webstask runtime (merged with the default configuration) when creating the webtask
 *
 *  All secrets should go under the `secret` section, the rest of configuration params should go under `params`
 *
 */
export default () => {
  return {
    webtaskName: 'todo-microservice',
    secret:      {
      MONGO_URL: 'mongodb://todos-api:Otw8p61kJUc03LltbW2jOIpyDU37S4DYAZhZDuNh@ds057954.mongolab.com:57954/todos'
    },
    param:       {
    }
  };
}
