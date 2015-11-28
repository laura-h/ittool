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

            folders: {
                collection: 'folder',
                via: 'security_group'
            },

            adsg:{
                collection: 'adsg',
                via: 'security_groups'
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
            folders: {
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
                folders : null
            }
        }
    }
})();