function TicketCtrl($scope) {
  $scope.tickets = [
    {title:'Aliens', director:'James Cameron', seat:'156', time:'1:30'},
    {title:'Star Wars', director:'George Lucas', seat:'G101', time:'Midnight'},
    {title:'The Silence of the Lambs', director:'Jonathan Demme', seat:'19F', time:'2:30'}
    ];

  $scope.addTicket = function() {
    $scope.tickets.push({title:$scope.ticketTitle, director:$scope.ticketDir, seat:$scope.ticketSeat, time:$scope.ticketTime});
    $scope.ticketTitle = "";
    $scope.ticketDir = "";
    $scope.ticketSeat = "";
    $scope.ticketTime = "";
  }


}