import createLogger from 'react-native-log-level'
class Logger{
    constructor(){
        this.log = createLogger({
            level: 'debug' // Optionally set the log level. Defaults to 'info'
        })
    }

}
export default (new Logger)