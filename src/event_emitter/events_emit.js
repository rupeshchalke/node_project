function main(req,res){

    const EventEmitter = require('node:events');
    const emitter = new EventEmitter();
    
// emitter.on('event_1',()=>{
//    console.log('event_1 is created');
// });

// emitter.emit('event_1');
// emitter.emit('event_1');
// emitter.emit('event_1');
// emitter.emit('event_1');
// emitter.emit('event_1');
// emitter.emit('event_1');
// emitter.emit('event_1');
// emitter.emit('event_1');

// emitter.emit('event_1');
// emitter.emit('event_1');
// emitter.emit('event_11);
// emitter.emit('event_1');

        emitter.setMaxListeners(emitter.getMaxListeners()+10)

emitter.on('event_1',()=>{
    console.log('event_1 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_2 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_3 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_4 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_5 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_6 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_7 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_8 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_9 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_10 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_11 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_12 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_13 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_14 is created');
 });

 emitter.on('event_1',()=>{
    console.log('event_15 is created');
 });


 emitter.emit('event_1');
//  emitter.emit('event_1');
//  emitter.emit('event_1');
//  emitter.emit('event_4');
//  emitter.emit('event_5');
//  emitter.emit('event_6');
//  emitter.emit('event_7');
//  emitter.emit('event_8');
//  emitter.emit('event_9');
//  emitter.emit('event_10');
//  emitter.emit('event_11');
//  emitter.emit('event_12');
//  emitter.emit('event_13');
//  emitter.emit('event_14');
//  emitter.emit('event_15');


}

module.exports={
    main:main
}