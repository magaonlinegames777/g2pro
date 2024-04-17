

$(document).ready(function(){
    
    GETCURRENTDATE();
   // GET_IP_ADDRESS();
    $('.LOGIN_PAGE').hide();
            
});


// SHOW CARTS 10/08/2022
function getProductPrice(){
    var hm = jQuery(this).children("product_price");
    alert(hm);
}




var MENU_CHECKER_MAN = 0;
function show_menu(){
    $('.menu_list_drp').removeClass('hide');
    console.log('Remove');
    setTimeout(
        function(){
            MENU_CHECKER_MAN = 1;
        },300
    );
}
function showBanksMenu(){
    $('#menu_bank_lists').removeClass('hide');
    setTimeout(
        function(){
            MENU_CHECKER_MAN = 1;
        },300
    );
}
function showBTCPAYMENT(){
    $('.ALCNTS').addClass('hide');
    $('.BITCOIN_SECTION').removeClass('hide');
}
function hideBTCPAYMENT(){
    $('.BITCOIN_SECTION').addClass('hide');
}
function hideBanksMenu(){
    $('#menu_bank_lists').addClass('hide');
}


function hideAll(){
    
    if (MENU_CHECKER_MAN != 0) {
        $('.menu_list_drp').addClass('hide');
        $('#menu_bank_lists').addClass('hide');
        MENU_CHECKER_MAN = 0;
        
    }
}


function CLOSE_NOTICE(){
    $('.notice').fadeOut();
}
function SHOW_NOTICE(){
    //$('.notice').show();
}
function GETCURRENTDATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    var hr = d.getHours();
    var mins = d.getMinutes();
    
        var output = (day<10 ? '0' : '') + day+ '/' +
        (month<10 ? '0' : '') + month + '/' +
        d.getFullYear();
        
        GH_DATE = output;


        var output_usa_date = (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day+'/' +
        d.getFullYear();
        USA_DATE = output_usa_date;
        
        var output_full = (day<10 ? '0' : '') + day+ '/' +
        (month<10 ? '0' : '') + month + '/' +
        d.getFullYear() + '- ' +hr+ ':' +mins;

        //setDate(output,output_usa_date);

}



    var WHOAREYOU;
function GET_IP_ADDRESS(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log(e.ip);
    WHOAREYOU = e.ip;
    DDOS_VERIFY(WHOAREYOU);
    });

    

    
}

function DDOS_VERIFY(ip){
    var CLIENT_IDD;
    console.log('VERIFING DATABASE');
   $('.LOGIN_PAGE').hide();
    firebase.firestore().collection("FIREWALL").where("IP", "==", ip)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            CLIENT_IDD = doc.data().CLIENT_ID;
            console.log(doc.id, "=== => ", doc.data().CLIENT_ID);
            firebaseGetUser(doc.data().CLIENT_ID);
            $('.LOGIN_PAGE').show();
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
       $('.LOGIN_PAGE').show();
    });

    
    setTimeout(
        function(){
            if (CLIENT_IDD == undefined) {
                console.log('BITCH IS BAD');
               $('.LOGIN_PAGE').show();
            }else{
                //alert('BITCH IS good+ '+ CLIENT_IDD);
            }
        }, 6000
    );
}
function VERIFICATIONMAN(){
    var username;
    var docRef = firebase.firestore().collection("accounts").doc(user_id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("USERNAME data:", doc.data());
            username = doc.data().username;
            accessAccount();
            //$('#nameOfUser').text(doc.data().username);
            
           // REGISTER_IP(user_id);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document for: !", user_id);
            $('#login_btn').show();
            hideReczone();
            //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
            $('.EG_verify').text('User logins incorrect. Try again with the right logins or create a new account');
        }
    }).catch((error) => {
        console.log("Error getting document for: ", error);
        $('#signup_loader').addClass('hide');
        $('#login_btn').show();
        $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');

        setTimeout(
            function(){
                $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
            },4000
        );
    });
}
function REGISTER_IP(whichDoc){
    var IPS_LOGS = firebase.firestore().collection("FIREWALL").doc(whichDoc);
    var ip_address = WHOAREYOU;
    // Set the "capital" field of the city 'DC'
    return IPS_LOGS.set({
        IP: ip_address,
        CLIENT_ID: whichDoc
    })
    .then(() => {
        console.log("IP  updated!");
        accessAccount();
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating IP: ", error);
    });
}

//LOGIN USER SECTION
function loginUser(){
    var username = $('#username_input').val().toLowerCase();
    var password = $('.passcode_input').val().toLowerCase();
    var captureVerify =  $('#verifyCapture').val(); 
    if (captureVerify != '') {
        console.log('User and Password: '+username+' and Password: '+password);
        var images = $('#captureImg').attr('src');
        if (images == '2.JPG' && captureVerify == '50759') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password);
        }else if (images == '0.JPG' && captureVerify == '84531') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }
        else if (images == '1.JPG' && captureVerify == '29846') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }else if (images == '3.JPG' && captureVerify == '81248') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }else if (images == '4.JPG' && captureVerify == '63619') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password);
        }
        else if (images == '5.JPG' && captureVerify == '00836') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password);
        }
        else{
            //RANDOMIZE AND SHOW NEW CAPTURE
            $('.EG_verify').text('Verification code incorrect');
            //$('#signup_btn').show();
            setTimeout(
                function(){
                    $('.EG_verify').text('');
                },9000
            );
        }
    }else{
        if(username == '' | password == ''){
            $('.EG_verify').text('Login with the correct logins.');
            setTimeout(
                function(){
                    $('.EG_verify').text(' ');
                },5000
            );
        }else{
            alert('Enter verification...');
            $('#signup_btn').show();
            $('#verifyCapture').css('border-color','red');
        }   
        
    }
    
}

function loginUserGod(){

    if ( $('.username_input').val() != '' || $('.passcode_input').val()) {
        var username = $('.username_input').val().toLowerCase();
        var password = $('.passcode_input').val().toLowerCase();
        var logins = username+ password;
        console.log("User id: "+ logins);

        firebaseGetUser(logins);
    }else{
        console.log("Enter inputs..");
        $('.EG_verify').text('Incorrect logins');
        setTimeout(
            function(){
                $('.EG_verify').text('');
            },3000
        );
    }

}
    var LOGOUT_USER_ID;                                    
function firebaseGetUser(usernamepassword){
    console.log('GET USER AFTER VERIFICATION');
    $('.LOGIN_PAGE').show();
    $('#login_btn').hide();
    $('#signup_loader').removeClass('hide');
    var user_id= usernamepassword;
    LOGOUT_USER_ID = user_id;
    //alert(user_id);
    var docRef = firebase.firestore().collection("ACCOUNT").doc(user_id);

    setTimeout(
        function(){
            docRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    $('.account_user_name').text(doc.data().username);
                    $('.account_user_balance').text(doc.data().balance);
                    ACCOUNT_BALANCE = doc.data().balance;
                    ACCOUNT_EMAIL = doc.data().email;
                    //HIDE LOW BALANCE FOR >300$
                    var blce = doc.data().balance;
                    blce = parseInt(blce);
                    if (blce > 300) {
                        $('.low_balance_txt').text();
                    }
                    ACCOUNT_DIR = doc.data().account_dir;
                    //USE ONLY TO ADD TRANSACTIONS UPDATE 2.0
                    //GET TRAANSACTION
                    GET_ALL_TRANSACTION(ACCOUNT_DIR);
                    //ADD_TRANSACTION_ID(ACCOUNT_DIR, 4,'October 8, 2022 : 7:23 PM','$600','ACCOUNT TOP UP','credit','completed');
                    saveIPCODE(USERIPADDRESS,ACCOUNT_DIR);
                    //REGISTER_IP(user_id);
                    //$('ACCOUNT_PAGE').show();
                    SHOW_ACCOUNT();

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document for: !", user_id);
                    //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
                    $('#login_btn').show();
                    $('.EG_verify').text('User logins incorrect. Try again with the right logins or create a new account');
                }
            }).catch((error) => {
                console.log("Error getting document for: ", error);
                $('#login_btn').show();
                   $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
        
                setTimeout(
                    function(){
                        $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
                    },4000
                );
            });
        },3000
    );
    
}
//END OF LOGIN USER SECTION

function openMenu(){
    $('.menu_mobile').addClass('menu_mobile_effect');
    console.log('Run effect');
    
}
function closeMenu(){
    $('.menu_mobile').removeClass('menu_mobile_effect');
}


function move2Register(){
   $('.LOGIN_PAGE').addClass('hide');

    $('#registerForm').removeClass('hide');
}
function move2Login(){
   $('.LOGIN_PAGE').removeClass('hide');

    $('#registerForm').addClass('hide');
}

function accessAccount(){
    $('.crd_6_lyf').show();

    //$('#HOME_CONTENT').removeClass('hide');
    
}
function signUp(){
    $('#signup_btn').hide();
    var username, password, confirmPassword;

    username = $('.username_input').val().toLowerCase();
  
    password = $('.passcode_input').val().toLowerCase();
    confirmPassword = $('.verify_passcode_input').val().toLowerCase();

    //VERIFY USER REGISTRATION
    if (username != '' && confirmPassword != '' && password != '') {
        firebaseAddUser(username,password);
        
    }else{
        $('#signup_btn').show();
        if (username == '' || password == '' || confirmPassword == '') {
            $('#register_btns .error').text('Input fields cannot be left blank');
            setTimeout(
                function(){
                    $('#register_btns .error').text('');
                },6000
            );
        }
    }
    
    

}
function firebaseAddUser(username,password,email){
    var client_id = username + password;
    firebase.firestore().collection("accounts").doc(client_id).set({
        username: username,
        password: password,
        email: email,
        balance: '0.00',
        date: 08052022
    })
    .then((docRef) => {
        console.log("ACCOUNT CREATED: ");
        //REGISTER_IP(client_id);
        hideReczone();
        //APRIL 18 2022
       
        GET_IP_ADDRESS();
        //end of april
        
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert('Failed to register user. Try again later');
        setTimeout(
            function(){
                location.reload();
            },3000
        );
    });
}

function registerUser(){
    $('#signup_btn').hide();
    var username, password, confirmPassword, email;
    username = $('.username_input').val().toLowerCase();
    password = $('.passcode_input').val().toLowerCase();
    confirmPassword = $('.verify_passcode_input').val().toLowerCase();
    email = $('.email_input').val().toLowerCase();
    GET_DATE_TIME();

    if (username != '' || password != '' || confirmPassword != '') {
        if (confirmPassword == password) {
            var docID = username + password;
            firebaseJoinUser(docID,username,password,email);
        }else{
            $('#signup_btn').show();
            $('.EG_verify').text('Password does not match. Try again');
            setTimeout(
                function(){
                    $('.EG_verify').text('');
                },6000
            );
        }
    }else{
        $('#signup_btn').show();
        $('.EG_verify').text('Please fill all input fields and try again');
            setTimeout(
                function(){
                    $('.EG_verify').text('');
                },6000
            );
    }
}

function firebaseJoinUser(docID, username,password,email){
    // Add a new document in collection "cities"
    var db = firebase.firestore();
    db.collection("ACCOUNT").doc(docID).set({
        username: username,
        password: password,
        email: email,
        account_dir: docID,
        date_registered: CURRENTDATETIME,
        balance: "0"
    })
    .then(() => {
        saveIPCODE(USERIPADDRESS,docID);
        console.log("Document successfully written!");
        ACCOUNT_DIR = docID;
       setTimeout(
        function(){
            loginUserGod();
        },3000
       );
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        $('.LOGIN_PAGE').show();
        showReczone();
    });
}
    

function logout(){
    var db = firebase.firestore();
    $(this).hide();
    db.collection("FIREWALL").doc(LOGOUT_USER_ID).delete().then(() => {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error LOGING OUT USER: ", error);
        //location.reload();
    });
}

var num = 0;
function showBalanceMore(){
 
    if (num == 0) {
        $('.balance_2').fadeIn();
        num = 1;
    }else {
        $('.balance_2').hide();
        $('.balance_2').fadeOut();
        num = 0;
    }
    
}

function SHOW_NEWS(){
    $('.SEC').hide();

    $('.NEWS').show();
}

//AUGUST 2022
function GET_IP_ADDRESS_NB(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
      console.log("USER IP: "+e.ip);
      if (e.ip != "") {
        
        $.get("https://ipinfo.io", function(response) {
          var IPCODE = response.ip;
          var IP_CITY = response.city;
          var IP_COUNTRY = response.country;  
          USERIPADDRESS = IPCODE;
         // IPCOUNTRY = IP_COUNTRY;
         
         JUDGEMENT(IPCODE);

          //console.log("Country of origin: "+response.city, response.country);
          //setDate();
        }, "jsonp");
        return e.ip;
      }
    });
}


//OCTOBER 8 2022
function ADD_TRANSACTION_ID(accDir,number, date,sum,description,type,status){
    // twisted reality
    var db = firebase.firestore();
    db.collection("USER_TRANSACTIONS").add({
        account_dir: accDir,
        number: number,
        date_of_transaction: date,
        amount_paid: sum,
        description: description,
        type: type,
        status: status
    })
    .then(() => {
        console.log("TRANSACTION successfully written!");
    })
    .catch((error) => {
        console.error("Error writing TRANSACTION: ", error);
    });
}

function GET_ALL_TRANSACTION(FOR){
    var db = firebase.firestore();
    db.collection("USER_TRANSACTIONS").where("account_dir", "==", FOR)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            $(".thistry_body").append(' <tr><td class="">'+doc.data().number+'</td><td class="">'+doc.data().date_of_transaction+'</td><td class="">'+doc.data().amount_paid+'</td><td class="">'+doc.data().description+'</td><td class="">'+doc.data().type+'</td><td class="">'+doc.data().status+'</td></tr>');
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}    


//ADD ORDER HISTORY 2.0
function ADD_ORDER_HISTORY(accDir,number, date,sum,description){
    // twisted reality
    var db = firebase.firestore();
    db.collection("USER_ORDER_HISTORY").add({
        account_dir: accDir,
        number: number,
        date_of_order: date,
        amount_paid: sum,
        description: description
    })
    .then(() => {
        console.log("ORDER HISTORY successfully written!");
        //MOVE TO ORDER HISTORY 
        $('.AFTER_PURCHASED').removeClass('hide');
        $('.buy_prod_now').addClass('hide');
        //$('.FMONEY_1').addClass('hide');
        $('.FMONEY').removeClass('hide');
        //WORKOUT BALANCE
        var newBalance = balanceINT - priceINT ;
        // alert(newBalance);
        // alert(balanceINT);
        UPDATE_BALANCE(newBalance);
       
    })
    .catch((error) => {
        console.error("Error writing ORDER HISTORY: ", error);
    });
}

function GET_ORDER_HISTORY(){
    $(".order_history tr").remove();
    $('.transac_his').removeClass('hide');
    var db = firebase.firestore();
    db.collection("USER_ORDER_HISTORY").where("account_dir", "==", ACCOUNT_DIR)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            $(".order_history").append(' <tr><td class="">'+doc.data().description+'</td><td class="">'+1+'</td><td class="">'+doc.data().amount_paid+'</td></tr>');
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}