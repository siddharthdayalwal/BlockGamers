pragma solidity ^0.4.17;

contract tictactoe{
    //address public Manager;
    address[] public Players;

    //function Lottery() public{
    //    Manager=msg.sender;//this copies the address of contract creator to the manager
   // }

    function enter() public payable{

        require(msg.value > .01 ether);//validation function which allows the function
        //to run if the condition is satisfied
        require(Players.length<2);
        Players.push(msg.sender);
    }

    /* function random() private view returns(uint){
        //designing a pseudo-random generator
        return uint(keccak256(block.difficulty,now,Players));
    } */
    function pickWinner(uint index) public {

      //uint index=random()%Players.length;
      Players[index].transfer(this.balance);
      Players=new address[](0);//resetting the players array state so that
      //new lottery scheme can be relaunched once a winner is selected.
      //this syntax means we want to create a new dynamic size array where initial size is 0.
    }

    // modifier restricted(){//to reduce code repeatability
    //      require(msg.sender == Manager);//it ensures that only the contract creator can call the
    //     //winner picking process
    //     _;
    // }

    function getPlayers() public view returns (address[]){
        return Players;//to return all the players of lottery competition for use of
        //some type of web application
    }
}
