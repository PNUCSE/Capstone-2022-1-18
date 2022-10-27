var Auction_sol;
var Item_sol;
var Supply_sol;
let governance;
var flag = false;
let exrate = 1.0;


// 페이지 로드될때마다, 컨트랙트랑 연동시켜주기

const options = {
	filter: {
	},
	fromBlock: 'latest'
}


async function test(){
	var _itemId = 1000000;
	
	console.log(idx);
	console.log(idx.length);
}



async function startApp() {
	var ItemAddress = "0x07D0239EDA2084953922DB4285727Cc897567350";
	var SupplyAddress = "0xC22Ad83d0c13E9bF99da5C42029d9BB87c15b06b";
	var AuctionAddress = "0x69962491ECE70b6617Bf7e7C7Cdc5E62d34eC96B";
	governance = AuctionAddress;
		
	Auction_sol = await new web3.eth.Contract(AuctionABI, AuctionAddress);
	console.log("Auction Create");
	Item_sol = await new web3.eth.Contract(ItemABI, ItemAddress);
	Supply_sol = await new web3.eth.Contract(SupplyABI, SupplyAddress);
	console.log("Supply create");
	Auction_sol.events.TransferSingle(options, async (error, event) => {
		if (error) {
		console.log(error)
		return
		}
		console.log("거래 트랜잭션 발생");
	
	
		console.log(event);
	
		// Initiate transaction confirmation	
		return
	  });
}



window.addEventListener('load', function() {
	// Web3가 브라우저에 주입되었는지 확인(Mist/MetaMask)
	if (typeof web3 !== 'undefined') {
	// Mist/MetaMask의 프로바이더 사용
		web3 = new Web3(window.ethereum);

		
 		//console.log(web3)
	} else {
		this.alert("메타 마스크를 설치하세요");
	}

	startApp();


	console.log("smart contract , 메타마스크 연결 완료");
	
})
