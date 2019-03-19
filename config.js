//config.js 
//export const FEATURE = {
const FEATURE = {
    promo_code: false,
    tax: false,
    service_charge: true,
    total: false
}

module.exports = {
    isActive: function(name) {
        return FEATURE[name]
    }
}
