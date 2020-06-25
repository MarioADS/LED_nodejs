const socket = io();

function changeState (){
    socket.emit('onOff');
}
        

        