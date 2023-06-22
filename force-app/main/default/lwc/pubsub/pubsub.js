var callbacks = {};
/**
 * Register a callback for an event
 * @param {string} eventName -Name of the to listen for.
 * @param {function} callback - Function to invoke when said event is fired.
 */
const register  = (eventName, callback)=>{
if(!callbacks[eventName]){
callbacks[eventName] = new Set();
}
callbacks[eventName].add(callback);
};
/**
 * unregister a callback for an event
 * @param {string} eventName -Name of the to unregister from.
 * @param {function} callback - Function to unregister.
 */
const unregister = (eventName,callback)=>{
if(callbacks[eventName]){
callbacks[eventName].delete(callback);
}
};
const unregisterAll = () =>{
Callbacks={};
};
/**
 * Fires an event to listeners.
 * @param {string} eventName -Name of event to fire.
 * @param {*} payload - payload of the event to fire.
 */
const fire =(eventName, payload) => {
if(callbacks[eventName]) {
    callbacks[eventName].forEach(callback => {
try{
callback(payload);
} catch(error) {
}
});
}
};

export default {
register,
unregister,
fire,
unregisterAll
};