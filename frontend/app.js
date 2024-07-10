const contractAddress = "0xF27374C91BF602603AC5C9DaCC19BE431E3501cb"; // Replace with your contract address
const contractABI = [ /*[
	{
		"inputs": [],
		"name": "closeVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_idNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_voterNumber",
				"type": "uint256"
			}
		],
		"name": "createProfile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_candidate",
				"type": "string"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_candidate",
				"type": "string"
			}
		],
		"name": "getVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWinner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_voterNumber",
				"type": "uint256"
			}
		],
		"name": "login",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "profiles",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "idNumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "voterNumber",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "votes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingClosed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]*/ ]; // Replace with your contract ABI

let web3;
let contract;
let account;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            account = accounts[0];
            contract = new web3.eth.Contract(contractABI, contractAddress);
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }

    document.getElementById('createProfileBtn').addEventListener('click', createProfile);
    document.getElementById('loginBtn').addEventListener('click', login);
    document.querySelectorAll('.voteBtn').forEach(btn => {
        btn.addEventListener('click', vote);
    });
    document.getElementById('closeVotingBtn').addEventListener('click', closeVoting);
    document.getElementById('getWinnerBtn').addEventListener('click', getWinner);
});

async function createProfile() {
    const name = document.getElementById('name').value;
    const idNumber = document.getElementById('idNumber').value;
    const voterNumber = document.getElementById('voterNumber').value;

    try {
        await contract.methods.createProfile(name, idNumber, voterNumber).send({ from: account });
        alert('Profile created successfully');
    } catch (error) {
        console.error('Error creating profile', error);
    }
}

async function login() {
    const idNumber = document.getElementById('loginIdNumber').value;
    const voterNumber = document.getElementById('loginVoterNumber').value;

    try {
        const result = await contract.methods.login(idNumber, voterNumber).call({ from: account });
        if (result) {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Error logging in', error);
    }
}

async function vote(event) {
    const candidate = event.target.getAttribute('data-candidate');

    try {
        await contract.methods.vote(candidate).send({ from: account });
        alert(`Voted for ${candidate} successfully`);
    } catch (error) {
        console.error('Error voting', error);
    }
}

async function closeVoting() {
    try {
        await contract.methods.closeVoting().send({ from: account });
        alert('Voting closed successfully');
    } catch (error) {
        console.error('Error closing voting', error);
    }
}

async function getWinner() {
    try {
        const winner = await contract.methods.getWinner().call({ from: account });
        document.getElementById('winner').innerText = `Winner is ${winner}`;
    } catch (error) {
        console.error('Error getting winner', error);
    }
}

