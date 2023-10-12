export default {
    install: (app, options) => {
        app.config.globalProperties.$translate = (v) => {
            if(typeof v === 'string'){
                return v.toUpperCase()
            }
        }
    }
}