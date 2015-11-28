/**
 * Created by laura on 28.11.15.
 */
'use strict';

module.exports = (function(){
    /**
     * @param email
     * @returns {*}
     * @private
     */
    function _queryFromSecurityGroup(security_group){
        return {
            "bool": {
                "must": [
                    {
                        "term": {
                            "security_group": security_group
                        }
                    }
                ]
            }
        };
    }

    function _queryFromUsername(username){
        return {
            "bool": {
                "must": [
                    {
                        "term": {
                            "username": username
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
            username: {
                type: 'string',
                defaultsTo: null
            },

            security_groups: {
                collection: 'security_group',
                via: 'adsg'
            },

            folders: {
                collection: 'folder',
                via: 'adsg'
            },

            /**
             * @returns {string}
             */
            getUsername: function () {
                return this.username;
            }
        },

        mapping: {
            username: {
                type: 'string',
                analyzer: 'standard',
                index: 'analyzed'
            },
            security_group: {
                type: 'string',
                analyzer: 'standard',
                index: 'analyzed'
            },
            folders: {
                type: 'string',
                analyzer: 'standard',
                index: 'analyzed'
            },
            date: {
                type: 'date',
                format: 'dateOptionalTime',
                index: 'analyzed'
            }
        },

        /**
         * @returns {Object} udkUserModelTemplate
         */
        getTemplate: function () {
            return {
                username       : null,
                security_group : null,
                folders        : null,
                date           : null
            }
        }
    }
})();