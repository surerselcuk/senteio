const colors = require('chalk');
const figures = require('figures');
const packageJson = require('../package.json');
const core = require('./core')

let config = {};

config.defaultLanguage  = 'en';
config.defaultLanguageKeywords = ['tr','en','de'] ;
config.defaultEnvironment = 'dev-env1';
config.senteLogo = `\n
███████╗███████╗███╗   ██╗████████╗███████╗
██╔════╝██╔════╝████╗  ██║╚══██╔══╝██╔════╝
███████╗█████╗  ██╔██╗ ██║   ██║   █████╗  
╚════██║██╔══╝  ██║╚██╗██║   ██║   ██╔══╝  
███████║███████╗██║ ╚████║   ██║   ███████╗
╚══════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
${colors.yellow(figures.play + ' Next Generation Test Automation Framework')}
                                     ${'v' + packageJson.version}  
                                                                   
`;
config.senteVersion = packageJson.version;
config.testTypes = ['web-gui','backend','performance'];



module.exports = config;