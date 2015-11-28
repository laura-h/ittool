/**
 * Created by laura on 28.11.15.
 */
module.exports = (function(){
    /**
     * @param email
     * @returns {*}
     * @private
     */
    function _queryFromName(name){
        return {
            "bool": {
                "must": [
                    {
                        "term": {
                            "name": name
                        }
                    }
                ]
            }
        };
    }

    return {
        connection: 'sailsCbes',

        autosubscribe: true,
        attributes: {
            name: {
                type: 'string',
                defaultsTo: null
            },

            security_group: {
                collection: 'security_group',
                via: 'folders'
            },

            adsg:{
                collection: 'adsg',
                via: 'folders'
            },

            /**
             * @returns {string}
             */
            getName: function () {
                return this.name;
            }
        },

        mapping: {
            name: {
                type: 'string',
                analyzer: 'standard',
                index: 'analyzed'
            },
            security_group: {
                type: 'string',
                analyzer: 'standard',
                index: 'analyzed'
            }
        },

        /**
         * @returns {Object} udkUserModelTemplate
         */
        getTemplate: function () {
            return {
                name    : null,
                security_group : null
            }
        }
    }
})();