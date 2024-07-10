# Duara Votes: A Blockchain Voting System for Transparency and Accountability

![protest_image](https://github.com/Nyamisachela/Duara/assets/140169644/5c0fbf15-91ee-42c5-bd95-d84aa3c7c125)

## Motivation

Initially, this project aimed to develop a simple voting system for my women's microfinance group, "Duara." Our group needed a transparent and reliable method to manage votes for various decisions. However, as I worked on the project over the weeks, I was inspired by the recent GenZ/Millennial protests in Kenya. The call for transparency and accountability in governance made me realize the broader potential of my project.

I decided to pivot the project to focus on creating a transparent voting system for Kenyan elections. The goal is to foster transparency, ensure accountability, and promote trust in the electoral process. This system could serve as a tool to empower citizens and enhance democratic practices.

## Project Overview

The Duara Voting System is a decentralized application (dApp) built on the Ethereum blockchain. It provides a secure, transparent, and immutable platform for conducting elections. The smart contract handles the voting process, ensuring that votes are counted accurately and transparently.

### How the Contract Works

1. **Profile Creation**:
   - Users create a profile by providing their name, ID number, and voter number. This information is stored on the blockchain to ensure uniqueness and prevent duplicate voting.

2. **Login**:
   - Users log in using their ID number and voter number. The contract verifies the details to grant access to the voting process.

3. **Voting**:
   - Users can vote for their preferred candidate (Mary, Jane, or Joyce). Each user can vote only once, and their vote is recorded on the blockchain.

4. **Close Voting**:
   - Once the voting period ends, the contract owner can close the voting. This action prevents any further votes from being cast.

5. **Get Winner**:
   - After voting is closed, anyone can query the contract to determine the winner. The candidate with the most votes is declared the winner.

### Smart Contract Details

Here is an overview of the smart contract functions and their roles:

- **createProfile(string memory _name, uint256 _idNumber, uint256 _voterNumber)**: Allows users to create a profile.
- **login(uint256 _idNumber, uint256 _voterNumber) public view returns (bool)**: Verifies user credentials for login.
- **vote(string memory _candidate)**: Records a vote for the specified candidate.
- **closeVoting()**: Closes the voting process to prevent further votes.
- **getWinner() public view returns (string memory)**: Returns the name of the winning candidate.

### Strengths and Weaknesses

#### Strengths

- **Transparency**: Every vote is recorded on the blockchain, ensuring transparency and accountability.
- **Security**: The decentralized nature of the blockchain makes it difficult for malicious actors to tamper with the voting process.
- **Immutability**: Once recorded, votes cannot be altered, ensuring the integrity of the election results.
- **Accessibility**: The system can be accessed from anywhere, allowing for broader participation.

#### Weaknesses

- **Gas Fees**: Transactions on the Ethereum blockchain incur gas fees, which can be a barrier for some users.
- **Scalability**: The current implementation may face challenges in scaling to handle a large number of users and votes.
- **User Verification**: The system relies on users providing correct information, which could be a point of vulnerability.

### Future Improvements

1. **Blockchain Alternatives**: Exploring different blockchains like Binance Smart Chain, Polkadot, or Solana to reduce gas fees and improve scalability.
2. **Optimization**: Implementing layer 2 solutions or sidechains to optimize performance and reduce costs.
3. **Enhanced Security**: Integrating additional security measures to ensure user verification and prevent fraudulent activities.
4. **User Experience**: Improving the frontend interface to make it more user-friendly and accessible.

### Contributions

This project is open-source, and I welcome contributions from the community. Whether you have ideas for new features, optimizations, or security improvements, your input is valuable. Together, we can build a robust and reliable voting system that promotes transparency and trust in the electoral process.

### How to Contribute

1. **Fork the Repository**: Create a fork of the project repository on GitHub.
2. **Clone the Repository**: Clone your fork to your local machine.
3. **Create a Branch**: Create a new branch for your feature or bug fix.
4. **Make Changes**: Implement your changes and test thoroughly.
5. **Submit a Pull Request**: Push your changes to your fork and submit a pull request to the main repository.

### Contact

For any questions or suggestions, feel free to reach out to me at nyamisachelagat@gmail.com. Let's work together to create a transparent and trustworthy voting system for a better future.

This project is part of the ALX Africa #ALX-SE cohort 20. I am Laura Chelagat Ongeri, also known as Nyamisa Chelagat. I am still learning, and I greatly appreciate any insights or contributions you can provide.

Thank you for your interest in the Duara Voting System. Your contributions and feedback are highly appreciated!
