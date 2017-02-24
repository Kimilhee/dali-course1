'use strict';

export default {
  errorFn: function(res) {
    console.log(`$http call Error! status=${res.status} data=`, res.data);
  }
};
