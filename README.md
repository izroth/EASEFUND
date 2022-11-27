EASEFUND : Crowdfunding Platform Powered by Ethereum Blockchain

<!-- ## Problem Statement and Necessity 
Crowdfunding is one of the most popular ways to raise funds for any project, cause or for helping any individual in need. With the onset of Covid we have seen a rise in Crowdfunding activities across the globe which includes small campaigns to help people get oxygen and medical help to large funds such as PM Cares.

The major problems with the Current Crowdfunding Platforms that we wanted to solve were : 
- Security : As the funds become larger, they need to be heavily secure, although stringent measures such as symmetric encryption are in place to make e-payment safe and secure,it is still vulnerable to hacking. Blockchain — which has never been compromised yet — can provide that level of security.
- Transparency and Anti-Fraud  : We have seen, and continue to see a lot of crowdfunding scams happening around. There is no way to see where the funds are being used. We wanted to make the entire flow of funds transparent at every stage, so that there is no possibility of the money being misused.
- Global contribution : With some of the platforms being country specific, it becomes hard for people from other countries to contribute to various campaigns. Using blockchain anyone in the world can contribute to the campaign. Transactions are quick and convenient.

We were highly inspired by the CryptoRelief initiative ([www.cryptorelief.in](https://www.cryptorelief.in))  which raised ~1 billion dollars for Covid Relief in India from the entire global community, in a highly transparent manner.  -->
<!-- 
## Detailed Report and PPT
- A Detailed Report of the Project can be [found here](https://docs.google.com/document/d/1_CdJ5pEimTrejDSBnq9Ze6kz2BcKJ6qtiikqWs0rglc/edit?usp=sharing)
- A Presentation on the Application can be [found here](https://docs.google.com/presentation/d/1X5CMPB_Mece3C7NI5dvB7eTKJjbn0E70NY3pjVZn5ho/edit?usp=sharing) -->

## Screenshots 
#### Home Page :
![image](https://user-images.githubusercontent.com/66385632/204150244-8fc820b0-802c-4476-97ba-1ad9e8207161.png)
### Campaign Page :
![image](https://user-images.githubusercontent.com/66385632/204150234-9c34c9df-68ce-4b11-8f06-e75df7971bfc.png)
### Create Campaign Page :
![image](https://user-images.githubusercontent.com/66385632/204150218-6e0baee5-6cb9-4b99-b9c4-ee3dca16d561.png)
### Withdrawal Request Page :
![image](https://user-images.githubusercontent.com/66385632/204150204-dbdce163-9d3a-4369-a82f-9973e5c03463.png)
### New Withdrawal Request Page :
![image](https://user-images.githubusercontent.com/66385632/204150174-8fae0de9-119a-4926-b0e0-53bf2f7b1870.png)

## Tech Stack 
- Next JS
- Chakra UI
- Solidity
- Web3.js

## To run the application locally
- Fork the Project 
- run `yarn install` to install all the dependencies
- run `yarn dev` to run the application locally

## Prerequisites to create Campaign and Contribute
1. Install **Metamask** as Google Chrome Extension and Create an account.
2.  Request Goerli by sharing your ethereum address in <br>(`https://goerlifaucet.com/)`

## To Deploy your own Contract 
1. Create an account in [https://infura.io](https://infura.io/)
2. Create .env file in Ethereum directory and add these line to it.
	> mnemonic = 'Your mnemonic code' <br>
	link = 'Your infura end point link '
3. Do the Changes that you want to do inside the Solidity File
4. Compile the Contract by going into smart-contract Directory and run
  `node compile.js`
5. Deploy Contract by going into smart-contract Directory and run
	`node deploy.js`
	
   Copy the contract deploy address and replace it in factory.js file.
  
  
6. Replace your "infura end point link" in web3.js file


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
