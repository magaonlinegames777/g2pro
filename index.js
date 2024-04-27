var menu_a_height=0;
var fly_profile_var = 0;
var priceOfProduct;
var IPCOUNTRY, USA_DATE, GH_DATE;

var ACCOUNT_DIR, CURRENTDATETIME, BANKER;
var VIEWS = 0;
var USERIPADDRESS=0;
var USER_DIRECTORY;
var ACCOUNT_BALANCE, ACCOUNT_EMAIL, BANK_NAME;
var priceINT,balanceINT;
$(document).ready(function(){

    //17 AUGUST 2022
    $.get('https://www.google.com/search?q=btc+value', function(p) {
    console.log(p);
    $('.btcRate').text(p);
    }); 
    GET_IP_ADDRESS_NB();

    //GET_BTC_NOW('100');
    btc_usd();
    //GET_IP_ADDRESS_NB();
   $(".LOGIN_PAGE").css('display','block');
    //showBOA();
    hideReczone();
    close_settings();

    //AUGUST 2022
    $(".topUpBTC").click(
        function(){
            TOP_UP_BTC();
            console.log('HERE IS YOUR TOP UP: ');
        }
    );

   $('.usa_bank_clicked .arw, .usa_bank_clicked_link').click(
       function(){
        $('.usa_bank_clicked').addClass('menu_a_after');
        if (menu_a_height == 0) {
            $(".usa_bank_clicked").animate({
                height : $(".usa_bank_clicked")[0].scrollHeight
            },10);

            menu_a_height = 1;
        }else if(menu_a_height == 1){
            $('.usa_bank_clicked, .all_menus').removeClass('menu_a_after');
            $(".usa_bank_clicked").css('height','fit-content');
            $('.all_menus').css('height','fit-content');
            menu_a_height = 0;
        }
        
       }
   );
   $('.usa_bank_fullz_clicked .arw, .usa_bank_fullz_clicked_link').click(
    function(){
     $('.usa_bank_fullz_clicked').addClass('menu_a_after');
     if (menu_a_height == 0) {
         $(".usa_bank_fullz_clicked").animate({
             height : $(".usa_bank_fullz_clicked")[0].scrollHeight
         },10);

         menu_a_height = 1;
     }else if(menu_a_height == 1){
        $('.usa_bank_fullz_clicked, .all_menus').removeClass('menu_a_after');
         $(".usa_bank_fullz_clicked").css('height','fit-content');
         $('.all_menus').css('height','fit-content');
         menu_a_height = 0;
     }
     
    }
    );
    $('.canada_bank_fullz_clicked .arw, .canada_bank_fullz_clicked_link').click(
        function(){
         $('.canada_bank_fullz_clicked').addClass('menu_a_after');
         if (menu_a_height == 0) {
             $(".canada_bank_fullz_clicked").animate({
                 height : $(".canada_bank_fullz_clicked")[0].scrollHeight
             },10);
    
             menu_a_height = 1;
         }else if(menu_a_height == 1){
            $('.canada_bank_fullz_clicked, .all_menus').removeClass('menu_a_after');
             $(".canada_bank_fullz_clicked").css('height','fit-content');
             $('.all_menus').css('height','fit-content');
             menu_a_height = 0;
         }
         
        }
    );
    $('.uk_bank_fullz_clicked .arw, .uk_bank_fullz_clicked_link').click(
        function(){
         $('.uk_bank_fullz_clicked').addClass('menu_a_after');
         if (menu_a_height == 0) {
             $(".uk_bank_fullz_clicked").animate({
                 height : $(".uk_bank_fullz_clicked")[0].scrollHeight
             },10);
    
             menu_a_height = 1;
         }else if(menu_a_height == 1){
            $('.uk_bank_fullz_clicked, .all_menus').removeClass('menu_a_after');
             $(".uk_bank_fullz_clicked").css('height','fit-content');
             $('.all_menus').css('height','fit-content');
             menu_a_height = 0;
         }
         
        }
    );
    $('.Shopwithscript_clicked .arw, .Shopwithscript_clicked_link').click(
        function(){
         $('.Shopwithscript_clicked').addClass('menu_a_after');
         if (menu_a_height == 098) {
             $(".Shopwithscript_clicked").animate({
                 height : $(".Shopwithscript_clicked")[0].scrollHeight
             },10);
    
             menu_a_height = 1;
         }else if(menu_a_height == 187){
            $('.Shopwithscript_clicked, .all_menus').removeClass('menu_a_after');
             $(".Shopwithscript_clicked").css('height','fit-content');
             $('.all_menus').css('height','fit-content');
             menu_a_height = 0;
         }
         
        }
    );
    $('.othertools_clicked .arw, .othertools_clicked_link').click(
        function(){
         $('.othertools_clicked').addClass('menu_a_after');
         if (menu_a_height == 000) {
             $(".othertools_clicked").animate({
                 height : $(".othertools_clicked")[0].scrollHeight
             },10);
    
             menu_a_height = 1;
         }else if(menu_a_height == 1111){
            $('.othertools_clicked, .all_menus').removeClass('menu_a_after');
             $(".othertools_clicked").css('height','fit-content');
             $('.all_menus').css('height','fit-content');
             menu_a_height = 0;
         }
         
        }
    );

    $('.God_table a').click(
       function(){
           open_btc();
       }
    );
    $('#menu_gd').click(
        function(){
            open_menu();
            //hideDash();
            $('#menu_gd').hide();
            $('#profile_gd').hide();
        }
     );

    $('.ALL_MENU_LINKS, .ubank ul li').click(
        function(){
            MENU_CLICKS();
        }
    );

    $('.BUY_PRODUCT_BTNsds').click(
        function(){
            BUY_PRODUCT();
        }
    );
    $(".BUY_PRODUCT_BTN").on("click", function(){
        var dataId = $(this).attr("data-price");
        priceOfProduct = dataId;
        GET_BTC_NOW(priceOfProduct);
        $('.LSD_EFFECTS').hide();
        setTimeout(
            function(){
                $('.LSD_EFFECTS').show();
                $('.INSUFICIENT_BX').show();
                //BUY_PRODUCT();
            },3000
        );
        
        //alert("The data-id of clicked item is: " + dataId);
    });

    setTimeout(
        function(){
            $(".LOGIN_PAGE").css('display','block');
        }, 3000
    );

 
});

// MAY LOGIN ---> 
function BTC_CHECKER_COUNTER(){
    var db = firebase.firestore();

    db.collection("BTC").doc('COUNTER').get().then(function(doc) {
        if (doc.exists) {
            console.log("BTC DOC  exists");
            // 
                if (doc.data().number == '1') {
                   console.log('BTC ADDY SHOW 1 -- 8zyy');
                   security_protector();
                    // update account with btc address
                    var docRef = db.collection("BTC").doc('COUNTER');

                    docRef.update({
                        number: '2'
                    })
                    .then(function() {
                        console.log("btc admin successfully updated!");
                    })
                    .catch(function(error) {
                        console.error("Error updating btc admin: ", error);
                    });
                }
                if (doc.data().number == '2') {
                    console.log('BTC ADDY SHOW 2-- sWh1s');
                    security_protector_1();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '3'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                }
                if (doc.data().number == '3') {
                    console.log('BTC ADDY SHOW 3 ---CVn2pW ');
                    security_protector_2();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '1'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                 }

        } else {
            console.log("BTC DOC does not exist");
            // 
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function security_protector(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());    
}

function security_protector_1(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());
    
}

function security_protector_2(){
   
        // Your code password
        $('#btc_p').text('');
        $('#btc_p').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());
    
}

//AUGUST 2022
function JUDGEMENT(ip){
    //CHECK IF IP ADDRESS IS REGISTERED
    $('.login_bx').addClass('hide');
    checkIPAddress(ip);
}
function checkIPAddress(ipaddress){
    GET_DATE_TIME();
    console.log('checking ip: ');
    var docRef = firebase.firestore().collection("FIREWALL").doc(ipaddress);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            firebaseGetUser(doc.data().account_dir);
        } else {
            // doc.data() will be undefined in this case
            USERIPADDRESS = ipaddress;
            $('.login_bx').removeClass('hide');
            console.log("No such IPDOC!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    
}

function saveIPCODE(ip, dir){
    console.log('NEW USER IP: '+ip);
    firebase.firestore().collection("FIREWALL").doc(ip).set({
        account_dir: dir,
        time: CURRENTDATETIME
    })
    .then((docRef) => {
        console.log("IP SAVED TO FIREWALL: ");
    })
    .catch((error) => {
        console.error("IP FAILED TO SAVE TO FIREWALL: ", error);
    });
}


function GET_BTC_NOW(x){
    //var amount = jQuery('#usd').val();
    // var raw_price = x.substring(1);
    var raw_price = x;
    var raw_price =  parseInt(raw_price);
    console.log('This is raw price: ',raw_price);
    var amount = raw_price;

    btc    = jQuery('#btcvalue')
    
    $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",function(data){
     let BTC_amount = amount / data["USD"],
         final_value = BTC_amount.toFixed(4)
         $('.btc-man span').text(final_value);
         $('#price_of_product').text(x);
        // $('.').text(final_value)
         console.log('BTC VALUE: '+ final_value);
         //auguts 2022
        $('.btc_amount').text(final_value);
    });
}

function clickOnCC(){
    $('.cc_normal').hide();

    setTimeout(
        function(){
            $('.cc_insufficient').removeClass('hide');
        },2000
    );
    setTimeout(
        function(){
            $('.cc_insufficient .progress').hide();
        },4000
    );
}
function payThisAmount(x){
    GET_BTC_NOW(x);
    $('.INSUFICIENT_BX').show();
    $('.insu_card').hide();
    //$('.LSD_EFFECTS').hide();

    $('.BTC_CARD').removeClass('hide');
}

function setDate(output,output_usa_date){
    if (IPCOUNTRY == 'GH') {
        console.log('Ip In GH');
        TODAY_DATE=output;
        $('.GOD_DATE').text(TODAY_DATE);
        $('.date').text(TODAY_DATE);

        $('#server_time').text(TODAY_DATE);
        $('#server_time').text(TODAY_DATE);
        console.log('Todays date: ' + TODAY_DATE);
    }else if (IPCOUNTRY == 'US') {
        TODAY_DATE=output_usa_date;
        console.log('Ip In US');
        $('.GOD_DATE').text(TODAY_DATE);
        $('.date').text(TODAY_DATE);

        $('#server_time').text(TODAY_DATE);
        $('#server_time').text(TODAY_DATE);
    }else{
        console.log('IP FOR ALL: '+IPCOUNTRY);
    }
}

function GET_IP_ADDRESS_NBB(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
      console.log("USER IP: "+e.ip);
      if (e.ip != "") {
        
        $.get("https://ipinfo.io", function(response) {
          var IPCODE = response.ip;
          var IP_CITY = response.city;
          var IP_COUNTRY = response.country;  
          IPCOUNTRY = IP_COUNTRY;
          USERIPADDRESS = IPCODE;

          JUDGEMENT(IPCODE);

          console.log("Country of origin: "+response.city, response.country);
          //setDate();
        }, "jsonp");
        return e.ip;
      }
    });
}

function TIMER(){
    var doUpdate = function() {
        $('.countdown').each(function() {
          var count = parseInt($(this).html());
          if (count !== 0) {
            $(this).html(count - 1);
          }
        });
      };
    
      // Schedule the update to happen once every second
      setInterval(doUpdate, 1000);
}

function menu_god_checker(){
    $('.canada_bank_fullz_clicked, .all_menus').removeClass('menu_a_after');
        $(".canada_bank_fullz_clicked").css('height','fit-content');
        $('.all_menus').css('height','fit-content');
        menu_a_height = 0;
}

function copyToClipboard() {
    // Create a "hidden" input
    var aux = document.createElement("input");
    var valueBTC  = $('.btc_p').innerHTML;
    
    console.log('BTC: '+ valueBTC);
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById('btc_p').innerHTML);
    //aux.setAttribute('value',' ')
    // Append it to the body
    document.body.appendChild(aux);
    
   // aux = 'bc1q3mw2s5huh6trgus462wqn60f6kgedgkzywxm5j';
    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);
  $('#btc_p').hide();
  setTimeout(
      function(){
       // M.toast({html: 'COPIED'});

        $('#btc_p').show();
      },2000
  );
}

function clickToShowBTC(){
    console.log('SHOW BTC SHOWERS ');
    //load
    $('.click_to_copy_loader').removeClass('hide');
    $('.click_to_copy').addClass('hide');
    GET_DATE_TIME();

    // SHOW BTC
    setTimeout(
        function(){
            $('.btc_address_data').css('filter','blur(0px');
            $('.btc_address_data').css('box-shadow','none');
            // GET_BTC_COUNTER(); //changed on 4/27/2024
            $('.btc_address_god').text('1EFWzLjgL7HECnfMmJUra7AkWuZdoLEx5x');
            $('.click_to_copy_loader').addClass('hide');


        },2000
    );
}
function GET_BTC_COUNTER(){
    var db = firebase.firestore();
    var docRef = db.collection("CONTROL_PANEL").doc("btc_counter");

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            var numberBX = doc.data().number;
            if (numberBX == '1') {
                console.log('Show BTC Address for: '+ numberBX);
                //SHOW BTC ADDRESS FOR 1
                //SEND ACCOUNT INFORMATION TO CP AND CHANGE BTC COUNTER
                //
                SHOW_BTC_ADDRESS('1');
            }if (numberBX == '2') {
                console.log('Show BTC Address for: '+ numberBX);
                SHOW_BTC_ADDRESS('2');
            }if (numberBX == '3') {
                console.log('Show BTC Address for: '+ numberBX);
                SHOW_BTC_ADDRESS('3');
            }if (numberBX == '4') {
                console.log('Show BTC Address for: '+ numberBX);
                SHOW_BTC_ADDRESS('4');
            }if (numberBX == '5') {
                console.log('Show BTC Address for: '+ numberBX);
                SHOW_BTC_ADDRESS('5');
            }if (numberBX == '6') {
                console.log('Show BTC Address for: '+ numberBX);
                SHOW_BTC_ADDRESS('6');
            }  else {
                console.log('WTH IS GOING ON...');
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
function SEND_USER_INFO(){
    //SEND USER NAME, ACCOUNT DIR, BALANCE, PAYMENT_STATUS, DATE TIME,
    var name, account_dir, balance, status, date_time, btcaddress;
    name = $('.account_user_name').text();
    balance =  $('.account_user_balance').text();
    status =  'unconfirmed';
    btcaddress = $('.btc_address_god').text();
    account_dir = ACCOUNT_DIR;
    date_time = CURRENTDATETIME;
    
    
    var db = firebase.firestore();
    console.log('Sending User Info');
    db.collection("TRANSACTIONS").doc(ACCOUNT_DIR).set({
        user: name,
        account_dir: account_dir,
        balance: balance,
        status: status,
        btc_address: btcaddress,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        date_time: date_time
    })
    .then(() => {
        console.log("CONTROL_PANEL BTC UPDATED");
        //START TIME OUT TO BLUR BTC
    })
    .catch((error) => {
        console.error("Error writing CONTROL_PANEL: ", error);
    });
}
function GET_DATE_TIME(){
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

        console.log('Date time: '+ datetime);
        CURRENTDATETIME = datetime;
}
function START_TIMEOUT_BTC(){
    SEND_USER_INFO();
    $('.btcinfo').hide();
    $('.btc_ui_1').removeClass('hide');
    setTimeout(() => {
        //OFF LOAD
        $('.click_to_copy_loader').addClass('hide');
        $('.click_to_copy').removeClass('hide');

        $('.btc_ui_1').addClass('hide');
        $('.btc_address_data').css('filter','blur(4px');
        $('.btc_address_data').css('box-shadow','inset 0 0 0 50vw rgba(255,255,255,0.2');
    }, 60000);
}
function SHOW_BTC_ADDRESS(number){
    if (number == '1') {
        $('.btc_address_god').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        //UPDATE BTC COUNTER TO 2
        UPDATE_BTC_COUNTER('1');
    }else if (number == '2') {
        $('.btc_address_god').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        UPDATE_BTC_COUNTER('2');
    }else if (number == '3') {
        $('.btc_address_god').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        UPDATE_BTC_COUNTER('3');
    }else if (number == '4') {
        $('.btc_address_god').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        UPDATE_BTC_COUNTER('4');
    }else if (number == '5') {
        $('.btc_address_god').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        UPDATE_BTC_COUNTER('5');
    }else if (number == '5') {
        $('.btc_address_god').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        UPDATE_BTC_COUNTER('5');
    }else if (number == '6') {
        $('.btc_address_god').text('16YkA1CMB1mRfVSXLsXa6cGhwhf6X1mgjC');
        UPDATE_BTC_COUNTER('1');
    }     else {
        console.log('WE DONT KNOW WHAT IS GOING ON...');
    }
}

function UPDATE_BTC_COUNTER(x){
    // Add a new document in collection "cities"
    var db = firebase.firestore();
    if (x=="1") {
        db.collection("CONTROL_PANEL").doc("btc_counter").set({
            number: "2"
        })
        .then(() => {
            console.log("CONTROL_PANEL BTC UPDATED");
            START_TIMEOUT_BTC();
        })
        .catch((error) => {
            console.error("Error writing CONTROL_PANEL: ", error);
        });
    }
    if (x=="2") {
        db.collection("CONTROL_PANEL").doc("btc_counter").set({
            number: "3"
        })
        .then(() => {
            console.log("CONTROL_PANEL BTC UPDATED");
            START_TIMEOUT_BTC();
        })
        .catch((error) => {
            console.error("Error writing CONTROL_PANEL: ", error);
        });
    }
    if (x=="3") {
        db.collection("CONTROL_PANEL").doc("btc_counter").set({
            number: "4"
        })
        .then(() => {
            console.log("CONTROL_PANEL BTC UPDATED");
            START_TIMEOUT_BTC();
        })
        .catch((error) => {
            console.error("Error writing CONTROL_PANEL: ", error);
        });
    }
    if (x=="4") {
        db.collection("CONTROL_PANEL").doc("btc_counter").set({
            number: "5"
        })
        .then(() => {
            console.log("CONTROL_PANEL BTC UPDATED");
            START_TIMEOUT_BTC();
        })
        .catch((error) => {
            console.error("Error writing CONTROL_PANEL: ", error);
        });
    }
    if (x=="5") {
        db.collection("CONTROL_PANEL").doc("btc_counter").set({
            number: "6"
        })
        .then(() => {
            console.log("CONTROL_PANEL BTC UPDATED");
            START_TIMEOUT_BTC();
        })
        .catch((error) => {
            console.error("Error writing CONTROL_PANEL: ", error);
        });
    }
    if (x=="6") {
        db.collection("CONTROL_PANEL").doc("btc_counter").set({
            number: "1"
        })
        .then(() => {
            console.log("CONTROL_PANEL BTC UPDATED");
            START_TIMEOUT_BTC();
        })
        .catch((error) => {
            console.error("Error writing CONTROL_PANEL: ", error);
        });
    }
    
}


function closeOpenMenu(){ //GOD TRIBES
    if (menu_a_height == 0) {
        $(".usa_bank_fullz_clicked").animate({
            height : $(".usa_bank_fullz_clicked")[0].scrollHeight
        },10);

        menu_a_height = 1;
    }else if(menu_a_height == 1){
       $('.usa_bank_fullz_clicked, .all_menus').removeClass('menu_a_after');
        $(".usa_bank_fullz_clicked").css('height','fit-content');
        $('.all_menus').css('height','fit-content');
        menu_a_height = 0;
    }
}

function showBOA(){
    $('.BOA_GOD').removeClass('hide');
    console.log('Done boa');
}
function close_menu(){
    $('.menu_bx').hide();
    $('#menu_gd').show();
    $('#profile_gd').show();
    $('.header_gd').removeClass('header_new_height');
}
function open_menu(){
    $('.fly_profile').hide();
    $('.menu_bx').show();
    $('.header_gd').addClass('header_new_height');
}
function close_btc(){
    $('.INSUSFICIENT_BX').hide();
}
function open_btc(){
    $('.INSUSFICIENT_BX').show();
}
function topUp(){
    $('.insu_card').hide();
    //$('.LSD_EFFECTS').hide();

    $('.BTC_CARD').removeClass('hide');

}

function hideDash(){
    $('.dash').hide();
    $('.dashie').hide();

    $('.credit_cards').hide();
}
function showDash(){
    $('.dash').hide();
    $('.dashie').show();

    $('.credit_cards').show();
}
function showUS(WHAT){
    $('.GO_BACK_BX').show();
    menu_god_checker();
    //SSN
    if (WHAT == 'SSN_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.SSN_GOD').removeClass('hide');
        $('.SSN_GOD').show();
    }
    //---ssn

    //SSN
    if (WHAT == 'SSN_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.SSN_GOD').removeClass('hide');
        $('.SSN_GOD').show();
    }
    //---ssn

    //CASHAPP
     if (WHAT == 'CASHAPP_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.CASHAPP_GOD').removeClass('hide');
        $('.CASHAPP_GOD').show();
    }
    //---CASHAPP

     //paypal
     if (WHAT == 'PAYPAL_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.PAYPAL_GOD').removeClass('hide');
        $('.PAYPAL_GOD').show();
    }
    //---paypal

    //COINBASE
    if (WHAT == 'COINBASE_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.COINBASE_GOD').removeClass('hide');
        $('.COINBASE_GOD').show();
    }
    //---COINBASE

    if (WHAT == 'CHASE_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.CHASE_GOD').removeClass('hide');
        $('.CHASE_GOD').show();
    }
    if (WHAT == 'WELLS_FARGO_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.WELLS_FARGO_GOD').removeClass('hide');
        $('.WELLS_FARGO_GOD').show();
    }
    if (WHAT == 'CITI_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        
        hideDash();
        $('.CITI_GOD').removeClass('hide');
        $('.CITI_GOD').show();
    }
    if (WHAT == 'PNC_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.PNC_GOD').removeClass('hide');
        $('.PNC_GOD').show();
    }
    if (WHAT == 'HUNTINGTON_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.HUNTINGTON_GOD').removeClass('hide');
        $('.HUNTINGTON_GOD').show();
    }
    if (WHAT == 'WOOD_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.WOOD_GOD').removeClass('hide');
        $('.WOOD_GOD').show();
    }
    if (WHAT == 'CHIME_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.CHIME_GOD').removeClass('hide');
        $('.CHIME_GOD').show();
    }
    if (WHAT == 'BBVA_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.BBVA_GOD').removeClass('hide');
        $('.BBVA_GOD').show();
    }
    if (WHAT == 'BOA_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.BOA_GOD').removeClass('hide');
        $('.BOA_GOD').show();
    }
    if (WHAT == 'SUNTRUST_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        
        $('.SUNTRUST_GOD').removeClass('hide');
        $('.SUNTRUST_GOD').show();
    }
    //CANADA BANKS
    if (WHAT == 'SCOTIA_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.SCOTIA_GOD').removeClass('hide');
        $('.SCOTIA_GOD').show();
    }
    if (WHAT == 'RBC_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.RBC_GOD').removeClass('hide');
        $('.RBC_GOD').show();
    }
    if (WHAT == 'TD_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.TD_GOD').removeClass('hide');
        $('.TD_GOD').show();
    }
    if (WHAT == 'MONTREAL_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.MONTREAL_GOD').removeClass('hide');
        $('.MONTREAL_GOD').show();
    }

    //UKBANKS
    if (WHAT == 'LLYOD_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.LLYOD_GOD').removeClass('hide');
        $('.LLYOD_GOD').show();
    }
    if (WHAT == 'HSBC_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.HSBC_GOD').removeClass('hide');
        $('.HSBC_GOD').show();
    }
    if (WHAT == 'BARCLAYS_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.BARCLAYS_GOD').removeClass('hide');
        $('.BARCLAYS_GOD').show();
    }
    if (WHAT == 'STANDARDCHARTERED_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.STANDARDCHARTERED_GOD').removeClass('hide');
        $('.STANDARDCHARTERED_GOD').show();
    }
    if (WHAT == 'SANTANDER_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.SANTANDER_GOD').removeClass('hide');
        $('.SANTANDER_GOD').show();
    }
    if (WHAT == 'NATIONWIDE_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.NATIONWIDE_GOD').removeClass('hide');
        $('.NATIONWIDE_GOD').show();
    }
    if (WHAT == 'SCHRODERS_GOD') {
        $('.PRODUCTS_BX').addClass('hide');
        hideDash();
        $('.SCHRODERS_GOD').removeClass('hide');
        $('.SCHRODERS_GOD').show();
    }
}


function fly_profile(){
    if (fly_profile_var == 0) {
        console.log('Open');
        $('.fly_profile').show();
        //hideDash();
        fly_profile_var = 1;
        console.log(fly_profile_var);
    }else if (fly_profile_var == 1) {
        //showDash();
        console.log('Close');
        $('.fly_profile').hide();
        fly_profile_var = 0;
        console.log(fly_profile_var);
    }
}
function close_all_pop(){
    $('.fly_profile').hide();
    close_menu();
}

function logout(){
    $('.GOD_ACCOUNT').hide();
}
function login(){
    $('.GOD_ACCOUNT').show();
}
function register(){
    $('.GOD_ACCOUNT').show();
}

function hideReczone(){
    $('.loginzone').removeClass('hide');
    $('.rgszone').addClass('hide');
}

function showReczone(){
    $('.rgszone').removeClass('hide');
    $('.loginzone').addClass('hide');

    $('.LOGINS_REGISTER_FORM input').val('');
}

function close_settings(){
    $('.menu_settings').hide();
    $('.dashie').show();
}
function open_settings(){
    $('.purchases').hide();
    if ($(window).width() < 728) {
        $('.dash').hide();
        $('.menu_settings').show();
        $('.dashie').hide();
     }
     else {
        $('.dash').hide();
        $('.menu_settings').show();
        $('.dashie').hide();
     }
}

function open_purchased(){
    $('.PRODUCTS_BX').hide();
    $('.dash').hide();
    $('.dashie').hide();
    $('.dashie_2').hide();

    $('.purchases').show();
    
    
    fly_profile();
}


function MENU_CLICKS(){
    if ($(window).width() < 1149) {
        close_menu();
     }
     else {
       console.log('ntd_here');
     }
}

function BUY_PRODUCT(){
    //var id = this.event.target.id;
    //var listID = this.attr('data-price');
    var idd = $(this).attr("data-price");

    //alert(idd);
    GET_BTC_NOW(x);
}
function HOME(){
    $('.GO_BACK_BX').hide();
    $('.PRODUCTS_BX').hide();

    $('.dashie').show(); 
}
function CLOSE_BTC_PAGE(){
    $('.INSUFICIENT_BX').hide();
}
function GET_BTC_NOW(x){
    //BUY_GOD();
    //var amount = jQuery('#usd').val();
   // var raw_price = x.substring(1);
    var raw_price = x;
    var raw_price =  parseInt(raw_price);
    console.log('This is raw price: ',raw_price);
    $('#dollar').text('$'+raw_price);
    var amount = raw_price;
    btc    = jQuery('#btcvalue')
    $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD",function(data){
     let BTC_amount = amount / data["USD"],
         final_value = BTC_amount.toFixed(4)
         //$('.btc-man span').text(final_value)
         //$('.btcRate').text(final_value);
        // $('.').text(final_value)
         console.log('BTC VALUE: '+ final_value);
         $('.btc_amount').text(final_value);
    });
}


function btc_usd(){
    $.getJSON( "https://api.coindesk.com/v1/bpi/currentprice/usd.json", 
    function( data) {
    var amountInBtc = 1.000; //convert 0.005 btc to usd
    var exchangeRate = parseInt(data.bpi.USD.rate_float);
    var amount = amountInBtc * exchangeRate;
    console.log(amount);
    $('.btcRate').text(amount);
    });
}

// OPEN MENU WEBSITE
function menu_handler(x){
    var BOG = $(x).text();
    BANKER = BOG;
    //OPEN PRODUCT
    openProduct();
}
function openProduct(){
    $('.ALCNTS').addClass('hide');
    $('.bank_name_db').text(BANKER);
    if (VIEWS == 0) {
        //
        $('.PRODUCTS_SECTION_0').removeClass('hide');
        VIEWS = 1;
    }
    else if (VIEWS == 1) {
        
        $('.PRODUCTS_SECTION_1').removeClass('hide');
        VIEWS = 2;
    }
    else if (VIEWS == 2) {
        
        $('.PRODUCTS_SECTION_2').removeClass('hide');
        VIEWS = 3;
    }
    else if (VIEWS == 3) {
        $('.PRODUCTS_SECTION_3').removeClass('hide');
        VIEWS = 4;
    }
    else if (VIEWS == 4) {
        $('.PRODUCTS_SECTION_4').removeClass('hide');
        VIEWS = 5;
        
    }
    else if (VIEWS == 5) {
        alert("HERE: "+VIEWS);
        $('.PRODUCTS_SECTION_5').removeClass('hide');
        VIEWS = 6;
    }
    else if (VIEWS == 6) {
        $('.PRODUCTS_SECTION_6').removeClass('hide');
        VIEWS = 7;
        
    }
    else if (VIEWS == 7) {
        $('.PRODUCTS_SECTION_7').removeClass('hide');
        VIEWS = 8;
    }
    else if (VIEWS == 8) {
        $('.PRODUCTS_SECTION_8').removeClass('hide');
        VIEWS = 9;
    }
    else if (VIEWS == 9) {
        $('.PRODUCTS_SECTION_9').removeClass('hide');
        VIEWS = 10;
    }
    else {
        $('.PRODUCTS_SECTION_10').removeClass('hide');
        VIEWS = 0;
    }
}

//AFTER LOGIN 2022 AUGUST 15 ---:
function SHOW_ACCOUNT(){
    $('.crd_6_lyf').removeClass('hide');
    showNews();
}

function showNews(){
    $('.ALCNTS').addClass('hide');

    $('.NEWS_SECTION').removeClass('hide');
}

function homeSideMenu_clicked(x){
    $('.ALCNTS').addClass('hide');
    var BOA_NAME = $(x).attr("data-bank");
    BANK_NAME = BOA_NAME;
     $('.bank_name_db').text(BOA_NAME);
    showProductTable();
   // alert(informant);
}
function showProductTable(){
    $('.TABLE_PRODUCT').addClass('hide');

    $('.TABLE_PRODUCT').removeClass('hide');
    
    if(VIEWS == 0){
        console.log('View 0: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_1').removeClass('hide');
        VIEWS = 1;
    }else if (VIEWS == 1) {
        console.log('View 1: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_2').removeClass('hide');
        VIEWS = 2;
    }else if (VIEWS == 2) {
        console.log('View 2: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_3').removeClass('hide');
        VIEWS = 3;
    }else if (VIEWS == 3) {
        console.log('View 1: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_4').removeClass('hide');
        VIEWS = 4;
    }else if (VIEWS == 4) {
        console.log('View 1: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_5').removeClass('hide');
        VIEWS = 5;
    }else if (VIEWS == 5) {
        console.log('View 1: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_6').removeClass('hide');
        VIEWS = 6;
    }else if (VIEWS == 6) {
        console.log('View 1: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_7').removeClass('hide');
        VIEWS = 7;
    }else if (VIEWS == 7) {
        console.log('View 1: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_8').removeClass('hide');
        VIEWS = 8;
    }else if (VIEWS == 8) {
        console.log('View 1: '+ VIEWS);
        $('.all_table').addClass('hide');
        $('.table_8').removeClass('hide');
        VIEWS = 9;
    }else if (VIEWS == 9) {
        console.log('View 1: '+ VIEWS);
        VIEWS = 10;
    }else if (VIEWS == 10) {
        console.log('View 1: '+ VIEWS);
        VIEWS = 0;
    }
}


// 17 AUGUST 2022
function BUY_THIS_PRODUCT(x){
    var bankNameDB = $('.real_bank_name').text();
    //alert(bankNameDB);
    BANK_NAME = bankNameDB;
    var priceOfProduct = $(x).attr("data-price");
     priceINT = parseInt(priceOfProduct);
     balanceINT = parseInt(ACCOUNT_BALANCE);
   // alert(priceINT + 'AND ' + balanceINT);
    if (balanceINT > priceINT) {
        //OPEN PURCHASE AND HIDE TOPUP
        $('.ALCNTS').addClass('hide');
        $('.CART_SECTION').removeClass('hide');
        $('.dollar_amount').text(priceOfProduct);
        $('.btc_amount_balance').text(priceOfProduct);

        GET_BTC_NOW(priceOfProduct);
        console.log('PRICE: '+ priceOfProduct);

        $('.topUpBTC').addClass('hide');
        $('.buy_prod_now_btn').removeClass('hide');
    }else{
         //OPEN BTC 
        $('.ALCNTS').addClass('hide');
        $('.CART_SECTION').removeClass('hide');
        $('.dollar_amount').text(priceOfProduct);
        $('.btc_amount_balance').text(priceOfProduct);

        GET_BTC_NOW(priceOfProduct);
        console.log('PRICE: '+ priceOfProduct);
    }

   
}

function TOP_UP_BTC(){
    $('.ALCNTS').addClass('hide');
    $('.BITCOIN_SECTION').removeClass('hide');
}

function OPEN_MYORDERS(){
    $('.ALCNTS').addClass('hide');
    $('.MYORDERS').removeClass('hide');
    //
    GET_ORDER_HISTORY();
}
function OPEN_TRANSACTIONS(){
    $('.ALCNTS').addClass('hide');
    $('.TRANSACTION_SECTION').removeClass('hide');
}
function LOGOUT_USER_ACC(){
    console.log("User IP Address: " + USERIPADDRESS);
    var db = firebase.firestore();
    db.collection("FIREWALL").doc(USERIPADDRESS).delete().then(() => {
        console.log("Account successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing acc from firewall: ", error);
    });
}


//UPDATE 2.0 
function PURCHASELOGS(){
    //alert(BANK_NAME);
    $('.FMONEY').addClass('hide');
    $('.FMONEY_1').removeClass('hide');
    //SEND TO ORDER HISTORY
    var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
    var myProductAmount = $('.dollar_amount').text();

    setTimeout(
        function(){
           
            $('.FMONEY_1').addClass('hide');
            //SHOW ACC
            $('.buy_prod_now').removeClass('hide');
            $('.bank_name_txt').text(BANK_NAME);
            $('.user_email_txt').text(ACCOUNT_EMAIL);
            $('.AFTER_PURCHASED').addClass('hide');
        },3000
    );

    setTimeout(
        function(){
            //alert();
            ADD_ORDER_HISTORY(ACCOUNT_DIR,1,myTimestamp,myProductAmount,BANK_NAME);
        }, 6000
    );
    
   
   
}

function UPDATE_BALANCE(x){
    var db = firebase.firestore();
    var washingtonRef = db.collection("ACCOUNT").doc(ACCOUNT_DIR);

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        balance: x
    })
    .then(() => {
        console.log("balance successfully updated!");
        $('.account_user_balance').text(x);
        ACCOUNT_BALANCE = x;
        OPEN_MYORDERS();
    })
    .catch((error) => {
        // The balance probably doesn't exist.
        console.error("Error updating balance: ", error);
    });
}


function INTERESTED(){
    $('.controller_1_img').addClass('hide');
    $('.controller_3_img').removeClass('hide');

}
