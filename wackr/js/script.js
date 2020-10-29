
// Get peer id (hash) from URL.
let getPeerId = window.location.hash.split("#")[1];

// Connect to Peer server
peer = new Peer(getPeerId, {
    host:"glajan.com",
    port: 8443,
    path:"/myapp",
    secure: true,
});

// Print pear id on connection "open" event.
peer.on("open", (id) => {
const myPeerIdEl = document.querySelector(".my-peer-id")
myPeerIdEl.innerHTML = id;
});

// Event listener for click "Refresh list"
const listPeersButtonEl = document.querySelector(".list-all-peers-button")
const listAllPeersEl = document.querySelector(".peers")
const btnForPeers = document.querySelector(".btnForPeers")

listPeersButtonEl.addEventListener("click", () => {
    peer.listAllPeers((peers) => {
        console.log(peers)
        //listAllPeersEl.innerHTML = peers
        //btnForPeers.innerHTML = peers
        const listItems = peers
        .filter((peerId) => {
            if (peerId === peer._id) return false;
            return true; 
        })

        .map((peers) => {
            return `
            <li>
                <button class="connect-button-peerId-${peers}">${peers}
            </li>
            `

        })
        .join("");

        listAllPeersEl.innerHTML = listItems;
        peers.map(function(peer){
            let divPost = createNode("div");
            let divBtn = createNode("div")

            divBtn.addClassName("btnForPeers")
            divPost.className("peers")

            let btnForPeers = createNode("button")
            btnForPeers.className("btnForPeers")
            let listAllPeersEl = createNode("li")

            listAllPeersEl.innerHTML = `${peer.peers}`
            btnForPeers.innerHTML = `${peer.peers}`;

            divPost.appendChild(btnForPeers)
            divPost.appendChild(listAllPeersEl)
        })
        function createNode(element) {
            return document.createElement(element);
        }
        
      

        function listPeersArray(){
            let mapArray = peers.map()
            console.log(mapArray);
            newDiv = document.createElement("li")
            document.body.insertBefore(newDiv, listAllPeersEl);
            listAllPeersEl.innerHTML = mapArray;
        }

        let newUser = createNode("button")
        newUser.ClassName="peers"

        let btnList = createNode("button")

        newUser.appendChild(btnList);
    })
})

function createNode(element) {
    return document.createElement(element);
}