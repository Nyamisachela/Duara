// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.17;

contract DuaraVoting {
    // Structure to store user profile details
    struct Profile {
        string name;         // Name of the user
        uint256 idNumber;    // ID number of the user
        uint256 voterNumber; // Voter number of the user
    }

    // Mapping to store profiles of users based on their address
    mapping(address => Profile) public profiles;

    // Mapping to track whether a user has already voted
    mapping(address => bool) public hasVoted;

    // List of candidates for the voting
    string[] public candidates = ["Mary", "Jane", "Joyce"];

    // Mapping to store the vote count for each candidate
    mapping(string => uint256) public votes;

    // Variable to track whether the voting has closed
    bool public votingClosed = false;

    // Function to create a user profile
    function createProfile(string memory _name, uint256 _idNumber, uint256 _voterNumber) public {
        profiles[msg.sender] = Profile(_name, _idNumber, _voterNumber);
    }

    // Function to check if a user can log in with their ID and voter number
    function login(uint256 _idNumber, uint256 _voterNumber) public view returns (bool) {
        Profile memory profile = profiles[msg.sender]; // Retrieve the user's profile
        // Check if the provided ID and voter numbers match the stored profile
        return (profile.idNumber == _idNumber && profile.voterNumber == _voterNumber);
    }

    // Function to allow a user to vote for a candidate
    function vote(string memory _candidate) public {
        require(!hasVoted[msg.sender], "You have already voted."); // Ensure the user hasn't voted already
        require(login(profiles[msg.sender].idNumber, profiles[msg.sender].voterNumber), "You need to log in first."); // Ensure the user is logged in
        require(validCandidate(_candidate), "Invalid candidate."); // Ensure the chosen candidate is valid
        require(!votingClosed, "Voting is closed."); // Ensure voting is not closed

        votes[_candidate]++; // Increment the vote count for the chosen candidate
        hasVoted[msg.sender] = true; // Mark the user as having voted
    }

    // Internal function to check if a given candidate is valid
    function validCandidate(string memory _candidate) internal view returns (bool) {
        for (uint256 i = 0; i < candidates.length; i++) {
            // Compare the candidate with the list of valid candidates
            if (keccak256(abi.encodePacked(candidates[i])) == keccak256(abi.encodePacked(_candidate))) {
                return true;
            }
        }
        return false;
    }

    // Function to get the vote count for a specific candidate
    function getVotes(string memory _candidate) public view returns (uint256) {
        return votes[_candidate]; // Return the vote count for the given candidate
    }

    // Function to close the voting
    function closeVoting() public {
        votingClosed = true;
    }

    // Function to determine and return the winner
    function getWinner() public view returns (string memory) {
        require(votingClosed, "Voting is not closed yet."); // Ensure the voting is closed

        string memory winner;
        uint256 highestVotes = 0;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (votes[candidates[i]] > highestVotes) {
                highestVotes = votes[candidates[i]];
                winner = candidates[i];
            }
        }

        return winner; // Return the candidate with the highest votes
    }
}
