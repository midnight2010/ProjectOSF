      function breadcrumb(result) {
         let breadcrumbs = {};
         let key = '';
         let value = '';
         for(let i = 0; i < result.length; i++) {
             key = key ? key + '-' + result[i] : result[i];
             value = value + '/' + key;
             breadcrumbs[key[0].toUpperCase() + key.slice(1)] = value;   
         }  
         return breadcrumbs;
        }

module.exports = breadcrumb