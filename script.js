let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600",
    backgroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c",
    }
}

document.body.style.backgroundColor = dog.backgroundColor;
document.getElementById('name').innerHTML = dog.name;
document.getElementById('price').innerHTML = dog.price;
document.getElementById('description').innerHTML = dog.description;
document.getElementById('NFT_1').src = dog.nft;
document.getElementsByClassName('card1')[0].style.backgroundColor = dog.cardColor;
document.getElementById('owner').innerHTML = dog.otherData.owner;
document.getElementById('daysLeft').innerHTML = dog.otherData.daysLeft;
document.getElementById('profileImg').src = dog.otherData.profileImg;




