const PORT = process.env.PORT || 5000;
const io = require("socket.io")(PORT, {
    cors: {
        origin: "http://localhost:3000"
    }
});
io.on('connection', socket => {
    console.log(`User connected to ${socket.id}`)
    socket.on('message', (msg, id, user, msgid) => {
        io.emit('receive-message', {msg, id, user, msgid})
    })

    socket.on('like', (msgid, id) => {
        io.emit('like-received', {msgid, id})
    })
})

