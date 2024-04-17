$(document).ready(function(){

    LISTEN_BTC_TRANSACTIONS();

  
});


function LISTEN_BTC_TRANSACTIONS(){
    var db = firebase.firestore();

    db.collection("TRANSACTIONS").where("status", "==", "unconfirmed")
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("New TRANSACTION ADDED: ", change.doc.data());
                appendController(change.doc.data().user,change.doc.data().btc_address,change.doc.data().balance,change.doc.data().account_dir,change.doc.data().date_time);
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });
}

function appendController(username,btcAddress,balancee,accDir,time){
    var name = username;
    var btc =  btcAddress;
    var balance = balancee;
    var acc_dir = accDir;
    var time = time;
    $(".controller").append('<div class="cc_card"><ul><li><a class="">Username: '+name+'</a><a class="">BTC Address: '+btc+'</a><a class="">Acc Dir: '+acc_dir+'</a><a class="">Date: '+time+'</a></li></ul><div><input type="text" name="" id=""></div> <br><div> <a class="btn blue" href="https://www.blockchain.com/btc/address/'+btc+'" target="_blank">Check</a><a class="btn green dataUpdater" data-update="'+ accDir +'" onclick="update(this);">Update</a></div></div>');
  //  $(".controller").append('<div class="cc_card"><i class="ccicons material-icons left">account_circle</i><input class="" type="text" name="" placeholder="account name" value="'+acc_dir+'"><br><i class="ccicons material-icons left">account_balance_wallet</i><input class="" type="text" name="" placeholder="btcaddress"><br><i class="ccicons material-icons left">account_balance_wallet</i><input class="" type="text" name="" placeholder="Date/time"><div class="ctrl_btn row"><a class="btn col s4">Save</a><a class="btn col blue s4">Pending</a><a class="btn red col s4">Cancel</a></div></div>');
}

function update(x){
    //console.log($('this').getAttribute("data-value"));
    //alert("Data-value: "+ $(x).data("update"));
    var dir = $(x).data("update");
    firebase.firestore().collection('ACCOUNT').doc(dir).update({
        balance: '10'
    })
    .then(() => {
        console.log("Document successfully updated!");
        //SET TRANSACTION HISTORY CONFIRMED
        confirmTransaction(dir);
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function confirmTransaction(dir){
    firebase.firestore().collection('TRANSACTIONS').doc(dir).update({
        status: 'confirmed'
    })
    .then(() => {
        console.log("TRANSACTION CONFIRMED updated!");
        //MOVE TO HOME PAGE
        $('.ALCNTS').addClass('hide');
        $('.NEWS_SECTION').removeClass('hide');
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating TRANSACTION: ", error);
    });
}
