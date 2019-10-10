import yargs from 'yargs';

import {list, view} from './utils'

yargs.command ({
    command: 'list',
    describe: 'list',
    builder : {
        search : {
            describe: 'New search',
            demandOption: false,
            type: 'string'
        },

        status : {
            describe: 'New status',
            demandOption: false,
            type: 'string'
        },

        page : {
            describe: 'Page nº',
            demandOption: false,
            type: 'number'
        },

        
    },

    handler: function(argv){
        list(argv);
        
    }
})

yargs.command ({
    command: 'view',
    describe: 'view',
    builder : {
        id : {
            describe: 'New id',
            demandOption: true,
            type: 'number'
        },

    },

    handler: function(argv){
        view(argv);
    }
})

yargs.parse();