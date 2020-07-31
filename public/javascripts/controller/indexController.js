app.controller('indexController', ['$scope', 'indexFactory', ($scope, indexFactory) => {

    $scope.init = () => {
        const username = prompt('Please enter username');

        if (username)
            initSocket(username);
        else
            return false;
    };

    function initSocket(username) {
        const connectionOptions = {
            reconnectionAttempts: 3,
            reconnecitonDelay: 600
        };
    
    

    indexFactory.connectSocket('http://localhost:3000', connectionOptions)
        .then((socket) => {
            socket.emit('newUser', { username:username });
        }).catch((err) => {
            console.log(err);
        });
    }
}]);