//Capturando URL base
var url_whole       = location.href.substring(location.href);
var sep_url         = url_whole.split("/");
//var url_base        = sep_url[2];
var url_base        = "";

var widthScreen = $(window).width();


for (i=0;i<(sep_url.length-1);i++) {
	url_base += sep_url[i]+"/";
}

function formatRSCoin() {
	var str = document.getElementById("valueRS").innerHTML; 
	var res = str.replace(".", ",");
	document.getElementById("valueRS").innerHTML = res;
}

hide('all');

function id(el) {
	return document.getElementById(el);
}
function hide(el) {
	id(el).style.display = 'none';//escondendo tudo
}
window.onload = function() {
	id('all').style.display = 'block';//liberando qndo terminar
	hide('loading');
	hide('table-loading');
}

function loadPages(pageL){

	if (pageL == "") {
		pageL = "Home";
	}

    $("#main-content").load("view/templates/v1.0/pages/"+pageL+"/index.html");

}

loadPages("");

function loadParts(item){
	switch(item) {
		case "menu":
		// code block
		$("#menu-left").load("view/templates/v1.0/parts/"+item+".html");
		break;
		case "header":
		$("#main-header").load("view/templates/v1.0/parts/"+item+".html");
		break;
		case "footer":
		$("#main-footer").load("view/templates/v1.0/parts/"+item+".html");
		break;
		case "management-menu":
		$("#box-panels").load("view/templates/v1.0/parts/"+item+".html");
		break;
		default:
		// code block
		
	}
}


function openMenu() {
	if (widthScreen >= 576) {
		$('#menu-left').css('display','inherit').css('width','30%').css('transition','0.5s');
		$('#empty-space-menu').css('display','inherit').css('top','0').css('right','0').css('width','70%').css('transition','0.5s');
	} else {
		$('#menu-left').css('display','inherit').css('width','70%').css('transition','0.5s');
		$('#empty-space-menu').css('display','inherit').css('top','0').css('right','0').css('width','30%').css('transition','0.5s');
	}
	
}

function closeMenu() {
	$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
	$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
}

/*
function ManagementMenu(statusMenu) {
	if (statusMenu == 1) {
		$('#management-menu').css('display','inherit');
	} else if (statusMenu == 0) {
		$('#management-menu').css('display','none');
		showManegementPanel('');
	}
}
*/

// Get actual date
var actualDate = new Date();

// Save each part in a variable 
var day     	= actualDate.getDate();           // 1-31
var week_day 	= actualDate.getDay();            // 0-6 (zero=domingo)
var month     	= actualDate.getMonth();          // 0-11 (zero=janeiro)
var year2    	= actualDate.getYear();           // 2 dígitos
var year4    	= actualDate.getFullYear();       // 4 dígitos
var hour    	= actualDate.getHours();          // 0-23
var min     	= actualDate.getMinutes();        // 0-59
var sec     	= actualDate.getSeconds();        // 0-59
var mSec    	= actualDate.getMilliseconds();   // 0-999
var tz      	= actualDate.getTimezoneOffset(); // em minutos

// Format the date and hour (see the mounth +1)
var str_date = year4+'-'+("00" + (month+1)).slice(-2)+'-'+("00" + day).slice(-2);

//Attributing the date at the page
$('#field-actual-date').attr('value',str_date);


/*
function showManegementPanel(panel) 
{
	switch(panel) {
		case "management-salary-income":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "management-benefits":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "new-cash-entrance":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "new-debt-for-pay":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income, #management-benefits, #new-cash-entrance, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "edit-debt-for-pay":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "edit-cash-entrance":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #sync").css('display','none');
		break;
		case "search-debt":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #edit-debt-for-pay, #new-debt-for-pay, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "management-protection":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #edit-debt-for-pay, #new-debt-for-pay, #search-debt, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "create-password":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #edit-debt-for-pay, #new-debt-for-pay, #search-debt, #management-protection, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "edit-password":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #edit-debt-for-pay, #new-debt-for-pay, #search-debt, #management-protection, #create-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		break;
		case "tips":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "tutorials":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "releases":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "privacy":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #about-this-apk, #sync").css('display','none');
		break;
		case "about-this-apk":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income, #management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #edit-cash-entrance, #sync").css('display','none');
		break;
		case "sync":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income, #management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #edit-cash-entrance").css('display','none');
		break;
		case "back-to-home":
			// code block
			$("#"+panel).css('display','inherit');
			$("#option-menu, #management-salary-income,#management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #edit-cash-entrance, #sync").css('display','none');
			ManagementMenu(0);
		break;
		default:
			// code block
			$("#option-menu").css('display','inherit');
			$("#management-salary-income,#management-benefits, #new-cash-entrance, #new-debt-for-pay, #edit-debt-for-pay, #search-debt, #management-protection, #create-password, #edit-password, #login, #tips, #tutorials, #releases, #privacy, #about-this-apk, #edit-cash-entrance, #sync").css('display','none');
		
	}
}

function loadPanel(type) {

	if (type == "salary-income") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("management-salary-income");

	} else if (type == "new-cash-entrance") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("new-cash-entrance");

	} else if (type == "new-debt") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("new-debt-for-pay");

	} else if (type == "edit-cash-entrance") {

		$('#management-menu').css('display','inherit');
		showManegementPanel("edit-cash-entrance");

	} else if (type == "edit-debt") {

		$('#management-menu').css('display','inherit');
		showManegementPanel("edit-debt-for-pay");

	} else if (type == "search-debt") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("search-debt");
		
	} else if (type == "management-protection") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("management-protection");
		
	} else if (type == "create-password") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("create-password");
		
	} else if (type == "edit-password") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("edit-password");
		
	} else if (type == "tips") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("tips");
		
	} else if (type == "tutorials") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("tutorials");
		
	} else if (type == "releases") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("releases");
		
	} else if (type == "privacy") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("privacy");
	
	} else if (type == "about-this-apk") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("about-this-apk");
		
	} else if (type == "sync") {

		$('#management-menu').css('display','inherit');
		$('#menu-left').css('width','0%').css('transition','0.5s').css('display','none');
		$('#empty-space-menu').css('display','none').css('width','0').css('transition','0.5s');
		showManegementPanel("sync");
	
	} 

}

*/

function ShowFormRegisterID() {
	$('#login-id').css('display','none');
	$('#create-id').css('display','block');
}

function ShowFormLoginID() {
	$('#create-id').css('display','none');
	$('#recover-pass').css('display','none');
	$('#login-id').css('display','block');
}

function ShowFormRecoveryID() {
	$('#recover-pass').css('display','block');
	$('#login-id').css('display','none');
}

function showOnHome(type)
{
	
	if (type == "debts") {
		$('#entrances').css('display','none');
		$('#debts').css('display','inherit');
		$('#my-debts').css('color','#380518').css('border','#380518 solid 1px').css('background-color','#ffffff').css('border-top-left-radius','5px');
		$('#my-entrances').css('color','#ffffff').css('border','#380518 solid 1px').css('background-color','#380518').css('border-top-right-radius','0px');
	} else if (type == "entrances") {
		$('#entrances').css('display','inherit');
		$('#debts').css('display','none');
		$('#my-entrances').css('color','#380518').css('border','#380518 solid 1px').css('background-color','#ffffff').css('border-top-right-radius','5px');
		$('#my-debts').css('color','#ffffff').css('border','#380518 solid 1px').css('background-color','#380518').css('border-top-left-radius','0px');
	}

}

style = "color:blue;font-size:1.1em;";
style2 = "color:green; font-weight:bold;font-size:1.1em;";
console.groupCollapsed("Creditos do desenvolvedor:");
   console.info("%c-------------------------------------------------------------",style);
   console.info("%cEste apk foi desenvolvido por Lauro Damaceno", style2);
   //console.info("%chttp://www.site.com.br",style);
   console.info("%cTodos os direitos reservados ©Lauro Damaceno 2019",style);
   console.info("%c-------------------------------------------------------------",style);
   console.info("");
console.groupEnd();

window.addEventListener('load', loaded);
var db = openDatabase("financeControlDB", "1.0", "Data Base for APP Finance Control", 2 * 1024 * 1024);


function loaded(){    

    $('#include-salary').bind('click', function() { IncludeSalary(); });
    $('#edit-salary').bind('click', function() { EditSalary(); }); 
    $('#include-benefit').bind('click', function() { IncludeBenefit(); }); 
    $('#edit-benefit').bind('click', function() { EditBenefit(); }); 
    $('#include-cash-receipt').bind('click', function() { IncludeCashReceipt(); }); 
    $('#include-cash-out').bind('click', function() { AddCashOut(); }); 
    $('#edit-cash-out').bind('click', function() { EditCashOut(); }); 
    $('#bt-edit-cash-receipt').bind('click', function() { EditCashReceipt(); }); 
    $('#modify-protection').bind('click', function() { ActivateProtection(); }); 
    $('#bt-create-password').bind('click', function() { CreatePassword(); }); 
    $('#bt-edit-password').bind('click', function() { EditPassword(); }); 
    $('#bt-open-session').bind('click', function() { Login(); }); 
    /*
    $('#btn-register-id').bind('click', function() { CreateIDforSync(); });
    $('#bt-login-sync').bind('click', function() { LoginSyncID(); });
    */
    
    db.transaction(function(tx) {
        //tx.executeSql("DROP TABLE received" );
        //tx.executeSql("DROP TABLE cash_outflow" );
        //tx.executeSql("DROP TABLE admin_fc" );
        
        tx.executeSql("CREATE TABLE IF NOT EXISTS received ( id INTEGER PRIMARY KEY,title TEXT,description TEXT, value TEXT, day_r INTEGER, month_r INTEGER, year_r INTEGER)" );
        tx.executeSql("CREATE TABLE IF NOT EXISTS cash_outflow ( id INTEGER PRIMARY KEY,title TEXT,value TEXT, day_dc INTEGER, month_dc INTEGER, year_dc INTEGER, description TEXT, day_pc INTEGER, month_pc INTEGER, year_pc INTEGER, due_status INTEGER)" );
        tx.executeSql("CREATE TABLE IF NOT EXISTS admin_fc ( id INTEGER PRIMARY KEY, email TEXT, id_user TEXT, password TEXT, password_sync TEXT, protected_status INTEGER)" );
        tx.executeSql("CREATE TABLE IF NOT EXISTS history_sync (id INTEGER PRIMARY KEY, code_user TEXT, device TEXT, ip TEXT, moment_sync TEXT)" );

    });
    
    //Including initial display functions
    CheckSessionView();
    ShowActualBalance();
    ShowCashReceipt(0,1);
    ShowGrossSalaryView();
    ShowCashOut(0);
    ShowTotalPay();
    ShowFinalBalanceForecast();
    ShowCashReceipt(1,1);
    ShowStatusProtection();
    CheckIDSyncDAO();
       
} 

/*

	==========================================================================

		Functions for Sync DAO

	==========================================================================

*/

function CheckIDSyncDAO()
{

	db.transaction(function(tx) {

		tx.executeSql('SELECT * FROM admin_fc WHERE id=?', [1], function (tx, resultado) {

			var rows 		= resultado.rows;
			var recorders 	= rows.length;


			if (recorders > 0) {

		        if (rows[0].id_user == "" || rows[0].password_sync == "") {
		        	
		        	$('#space-sync').css('display','none');
		        	$('#create-id').css('display','block');

		        } else {

		        	$('#space-sync').css('display','block');
					$('#create-id').css('display','none');

					$('#field-id_user-sync').val(rows[0].id_user);
					$('#field-pass_user-sync').val(rows[0].password_sync);

		        }

		    }

	    });

    });

}

function CreateIDforSyncDAO(email,code_user,pass,encryptPass)
{

	var vMail 		= email;
	var vIdUser 	= code_user;
	var vPassword 	= encryptPass;

	alert(vIdUser+"- "+vPassword);

	$.ajax({
      url: 'sync/register-id.php',
      type: 'POST',
      data: {
          	id_user: vIdUser,
			password: vPassword
          },
      dataType: 'html',
      success: function(response) {
          alert(response);
      },
      error: function(xhr, status, error) {
          alert(xhr.responseText);
      }
  });

	//Variable
	/*
	var vUrl = "/sync/register-id.php";
	var vData = {
		id_user: vIdUser,
		password: vPassword
	};
	*/

	/*
	$.post(
		"sync/register-id.php", //Required URL of the page on server
		{
			id_user: vIdUser,
			password: vPassword
		},

		function(response,status)
		{
			alert("Data: " + response + "\nStatus: " + status);
			// tratando o status de retorno. Sucesso significa que o envio e retorno foi executado com sucesso.
			if(status == "success")
			{

				db.transaction(function(tx) {

					tx.executeSql('INSERT INTO admin_fc (email,id_user,password_sync) VALUES (?,?,?)', [vMail,vIdUser,vPassword], function (tx, resultado) {

						if(tx)
						{
							alert("MENSAGEM:\n\n"+response+"\nIntegrado corretamente na base local!");
						}
						else
						{
							alert("MENSAGEM:\n\n"+response+"\nErro de integração na base local!");
						}

				    });

			    });

			}
			else
			{
				ErrorMessages(53);
			}    	
		}
	);
	*/
			
}



/*

	==========================================================================

		Functions for Sync Model

	==========================================================================

*/
/*function Sync()
{
	var userId 					= $('#id_user').val();
	var passUser 				= $('#pass_user').val();
	var hystorySync 			= $('#history_sync_recorders').val();
	var receivedRecorders 		= $('#received_recorders').val();
	var cashOutflowRecorders 	= $('#cash_outflow_recorders'),val();

	// criando as variáveis
	var vUrl = "sync/sync.php";
	var vData = { 
		id_user:userId,
		pass_user:passUser,
		history_sync:encryptPass,
		cash_outflow:cashOutflowRecorders,
		received:receivedRecorders,
	};

	$.post(
		vUrl, //Required URL of the page on server
		vData,

		function(response,status)
		{
			// tratando o status de retorno. Sucesso significa que o envio e retorno foi executado com sucesso.
			if(status == "success")
			{
				// pegando os dados jSON
				//var obj = jQuery.parseJSON(response);

				//$("#result").html(

				//	"Nome enviado: " + obj.nome + "<br>" +
				//	"E-mail enviado: " + obj.email

				//);

				

			}
			else
			{
				ErrorMessages(56);
			}     	
		}
	);

}*/

function CreateIDforSync()
{

	alert(1);

	var email 		= $('#field-email').val();
	var conf_email 	= $('#field-conf-email').val();
	var pass 		= $('#field-password-sync').val();
	var conf_pass 	= $('#field-conf-password-sync').val();

	if ((email == "") || (conf_email == "") || (pass == "") || (conf_pass == "")) {
		ErrorMessages(45);
	} else if (email == "") {
		ErrorMessages(46);
	} else if (conf_email == "") {
		ErrorMessages(47);
	} else if (pass == "") {
		ErrorMessages(48);
	} else if (conf_pass == "") {
		ErrorMessages(49);
	} else if (email != conf_email) {
		ErrorMessages(50);
	} else if (pass != conf_pass) {
		ErrorMessages(51);
	} else {

		var explodeJS = email.split("@");
		var code_user = explodeJS[0];
		var encryptPass = CryptoJS.SHA256(pass);

		CreateIDforSyncDAO(email,code_user,pass,encryptPass);

	}
}

function LoginSyncID()
{
	var vMail = $('#field-email-login').val();
	var explodeJS = vMail.split("@");
	var vUser = explodeJS[0];
	var pass = $('#field-password-sync-login').val();
	var encryptPass = CryptoJS.SHA256(pass);

	// criando as variáveis
	var vUrl = "sync/login.php";
	var vData = { 
		user:vUser,
		password:encryptPass,
	};

	$.post(
		vUrl, //Required URL of the page on server
		vData,

		function(response,status)
		{
			// tratando o status de retorno. Sucesso significa que o envio e retorno foi executado com sucesso.
			if(status == "success")
			{
				// pegando os dados jSON
				//var obj = jQuery.parseJSON(response);

				//$("#result").html(

				//	"Nome enviado: " + obj.nome + "<br>" +
				//	"E-mail enviado: " + obj.email

				//);
				db.transaction(function(tx) {

					tx.executeSql('INSERT INTO admin_fc (email,id_user,password_sync) VALUES (?,?,?)', [vMail,vUser,encryptPass], function (tx, resultado) {

						if(tx)
						{
							alert("MENSAGEM:\n\n"+response+"\nEste login está sincronizado corretemente!");
							//SuccessfulMessages(15);
						}
						else
						{
							alert("MENSAGEM:\n\n"+response+"\nEste login não foi sincronizado corretemente na base de dados locais!");
						}

				    });

			    });

			}
			else
			{
				ErrorMessages(53);
			}     	
		}
	);

}




/*

	==========================================================================

		Functions for Balances DAO

	==========================================================================

*/

//
function ShowActualBalanceDAO(actualMonth,actualYear)
{

	db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM received WHERE title !=? AND title !=? AND title !=?', ['VT','VR','VA'], function (tx, resultado) {
            var rows = resultado.rows;
            
            if (rows.length > 0) {

            	var receiv = 0;
	            for(var i = 0; i < rows.length; i++){
	                    receiv += parseFloat(rows[i].value);                  
	            }

	            db.transaction(function(tx) {
		            tx.executeSql('SELECT * FROM cash_outflow WHERE due_status=? AND month_dc=? AND year_dc=?', [1,actualMonth,actualYear], function (tx, resultado) {
		                
		                var rows = resultado.rows;

		                var recorders = rows.length;

		                var val = 0;
		                for(var i = 0; i < rows.length; i++){
		                    val += rows[i].value;
		                }                   
		                
		                var calculate = receiv - val;
		                var calculate = calculate.toFixed(2).toString().replace(".", ",");

		                ShowActualBalanceView(calculate);

		            }, null);
		        });

            } else {
            	var receiv = 0;
            	ShowActualBalanceView('0,00');      
            }
            
        }, null);
    });

}

//
function ShowBalanceWithBenefitsDAO() 
{
	var totalBenefits 	= ShowBenefit(0,2,onlyValue);
	var currentBalance	= ShowCurrentBalance();
	var calculate		= totalBenefits+currentBalance;

	return calculate;

}

//
function ShowCurrentBalanceDAO(actualMounthDate,actualYearDate) 
{
	var salary 				= ShowNetSalary();
	var received 			= ShowCashReceipt(itemC,typeSearchC);
	var totalReceived		= salary+received;

	db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM cash_outflow WHERE due_status=? AND mounth_dc=? AND year_dc=?', [0,actualMounthDate,actualYearDate], function (tx, resultado) {
            var rows = resultado.rows;
            if (rows.length == 0) {
            	//table.innerHTML = '<tr><td>Não há benefícios cadastrados!</td></tr>';
            } else {
            	totalD = 0;
	            for(var i = 0; i < rows.length; i++){
	                    total += rows.value;                   
	            }
				var totalDue = totalD;
            }
        }, null);
    });

    var result 				= totalReceived-totalDue;

    return result;

}

//
function ShowFinalBalanceForecastDAO(actualMonthDate,actualYearDate) 
{

    db.transaction(function(tx) {
        
        tx.executeSql('SELECT * FROM received WHERE title !=? AND title !=? AND title !=?', ['VT','VR','VA'], function (tx, resultado) {
            var rows = resultado.rows;
            
            if (rows.length > 0) {
                var receiv = 0;
                for(var i = 0; i < rows.length; i++){
                        receiv += parseFloat(rows[i].value);                  
                }
                //var val = receiv.toFixed(2).toString().replace(".", ",");
                //var receiv = val;
            } else {
                var receiv = 0;      
            }

            tx.executeSql('SELECT * FROM cash_outflow WHERE month_dc=? AND year_dc=?', [actualMonthDate,actualYearDate], function (tx, resultado) {
            
                var rows = resultado.rows;

                var recorders = rows.length;

                if (recorders == 0) {

                    var cash_outflow = 0;

                } else {

                    var cash_outflow = 0;
                    for(var i = 0; i < rows.length; i++){
                        cash_outflow += parseFloat(rows[i].value);                   
                    }
                }

                var calculate = receiv - cash_outflow;
                var calculate = calculate.toFixed(2).toString().replace(".", ",");

                ShowFinalBalanceForecastView(calculate);
                
            }, null);
            
        }, null);

    });
    
}

//
function ShowTotalPayDAO(actualMonth,actualYear) 
{
	db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM cash_outflow WHERE due_status=? AND month_dc=? AND year_dc=?', [0,actualMonth,actualYear], function (tx, resultado) {
            var rows = resultado.rows;
            if (rows.length == 0) {
            	//table.innerHTML = '<tr><td>Não há benefícios cadastrados!</td></tr>';
                var totV = "R$ 0,00";
            } else {
            	var totalV = 0;
	            for(var i = 0; i < rows.length; i++){
	                    totalV += parseFloat(rows[i].value);                   
                }

                var val = totalV.toFixed(2).toString().replace(".", ",");
                var totV = "R$ "+val;

            }

            db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM received WHERE title !=? AND title !=? AND title !=?', ['VT','VR','VA'], function (tx, resultado) {
                    var rows = resultado.rows;
                    
                    if (rows.length > 0) {
                        var receiv = 0;
                        for(var i = 0; i < rows.length; i++){
                                receiv += parseFloat(rows[i].value);                  
                        }
                    } else {
                        var receiv = 0;      
                    }

                    ShowTotalPayView(totV,totalV,receiv);
                    
                }, null);
            });

        }, null);
    });
}


/*

	==========================================================================

		Functions for Cash Outflow DAO

	==========================================================================

*/


//
function AddCashOutDAO(title,value,day,month,year,description) 
{

	db.transaction(function(tx) {
		//Add the Benefit
		tx.executeSql('INSERT INTO cash_outflow (title, value, day_dc, month_dc, year_dc, description, due_status) VALUES (?, ?, ?, ?, ?, ?, ?)', [title,value,day,month,year,description,0],

			function(tx, result){
	            console.log('Funcionou!');
	            console.log(result);
	        },

	        function(tx, error){
	            console.log('Houve erro!');
	            console.log(error);
	        }

		);
		
		//If transaction has been successful return true
		if (tx) 
		{

			//alert(title+", "+value+", "+day+", "+mounth+", "+year+", "+description);

			SuccessfulMessages(8);
			$('#field-title-cash-out-ad').val();
			$('#field-value-cash-out-ad').val();
			$('#field-due-date-cash-out-ad').val
			$('#new-cash-entrance-modal').modal('hide');

		//Else transaction isn't successful return false
		} else {
			ErrorMessages(20);
		}
	});
}

//
function DeleteCashOutDAO(idC) 
{
	var confirm = ConfirmMessages(2);

	if (confirm) {

		db.transaction(function(tx) {
			//Delete the Benefit
			tx.executeSql('DELETE FROM cash_outflow WHERE id=?', [idC]);
			
			//If transaction has been successful return true
			if (tx) 
			{
				SuccessfulMessages(13);

			//Else transaction isn't successful return false
			} else {
				ErrorMessages(26);
			}
		});

	}
}

//
function EditCashOutDAO(title,value,day,month,year,description,id) 
{
	db.transaction(function(tx) {
		//Updating the Cash Outflow
		tx.executeSql('UPDATE cash_outflow SET title=?, value=?, day_dc=?, month_dc=?, year_dc=?, description=? WHERE id=?', [title,value,day,month,year,description,id],

			function(tx, result){
	            console.log('Funcionou!');
	            console.log(result);
	        },

	        function(tx, error){
	            console.log('Houve erro!');
	            console.log(error);
	        }

			);
		
		//If transaction has been successful return true
		if (tx) 
		{
			SuccessfulMessages(13);
			$('#field-title-cash-out').val();
			$('#field-value-cash-out').val();
			$('#field-due-date-cash-out').val();
			$('#edit-debt-for-pay-modal').modal('hide');

		//Else transaction isn't successful return false
		} else {
			ErrorMessages(25);
		}
	});
}

//
function EditingCashOutDAO(id)
{

	db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM cash_outflow WHERE id=?', [id], function (tx, resultado) {

            var rows = resultado.rows;
	            
	        var title 		= rows[0].title;
	        var value 		= rows[0].value; 
	        var day_dc 		= ("00" + (rows[0].day_dc)).slice(-2);
	        var month_dc 	= ("00" + (rows[0].month_dc)).slice(-2);
	        var year_dc 	= rows[0].year_dc;
	        var description = rows[0].description;
	                        
            EditingCashOutView(id,title,value,day_dc,month_dc,year_dc,description);
            
        }, null);
    });

}

//
function PayBillDAO(dayP,monthP,yearP,idP) 
{

	db.transaction(function(tx) {
		
		tx.executeSql('SELECT * FROM cash_outflow WHERE id=?', [idP], function (tx, resultado) {

		    var rows = resultado.rows;		    
		    var due_status_ = rows[0].due_status; 

		    //alert(idP);

		    if (due_status_ == 0) {
		    	var new_status = 1; 
		    } else {
		    	var new_status = 0;
		    }            

		    //Updating the Cash Outflow
			tx.executeSql('UPDATE cash_outflow SET day_pc=?, month_pc=?, year_pc=?, due_status=? WHERE id=?', [dayP,monthP,yearP,new_status,idP], null);
			
			//If transaction has been successful return true
			if (tx) 
			{
				SuccessfulMessages(10);

			//Else transaction isn't successful return false
			} else {
				ErrorMessages(33);
			}
			    
		}, null);

	});
	

}

//
function SearchCashOutDAO(itemSearch,dateType,day,mounth,year) 
{

	if (dateType == "d" ((day == "") && (mounth == "") && (year = ""))) {
		var querySql = "SELECT * FROM cash_outflow WHERE (title=? AND year_dc=? AND mounth_dc=? AND day_dc=?) OR (title=? OR year_dc=? AND mounth_dc=? AND day_dc=?)";
		var itensSearch = [itemSearch, mounth, year, day, itemSearch, mounth, year, day];
	} else if (dateType == "p" ((day == "") && (mounth == "") && (year = ""))) {
		var querySql = "SELECT * FROM cash_outflow WHERE (title=? AND year_pc=? AND mounth_pc=? AND day_pc=?) OR (title=? OR year_pc=? AND mounth_pc=? AND day_pc=?)";
		var itensSearch = [itemSearch, mounth, year, day, itemSearch, mounth, year, day];
	} else {
		var querySql = "SELECT * FROM cash_outflow WHERE title=?";
		var itensSearch = [itemSearch];
	}

	db.transaction(function(tx) {
        tx.executeSql(querySql, itensSearch, function (tx, resultado) {
            var rows = resultado.rows;
            if (rows == 0) {
            	table.innerHTML = '<tr><td>Não há saída de dinheiro localizadas!</td></tr>';
            } else {
            	var tr = '';
	            for(var i = 0; i < rows.length; i++){
	                    tr += '<tr>';
	                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].title + '</td>';
	                    tr += '<td> R$' + rows[i].value + '</td>';
	                    tr += '</tr>';                   
	            }
	                table.innerHTML = tr; 
            }
        }, null);
    });
}

//
function ShowCashOutDAO(typeCO,actualMonth,actualYear) 
{

    if (typeCO == "tableComplete") {

    	db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM cash_outflow WHERE month_dc=? AND year_dc=? ORDER BY day_dc ASC, value DESC', [actualMonth,actualYear], function (tx, resultado) {
                
                var rows = resultado.rows;

                var recorders = rows.length;


                var listMonths = ['','Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

                var filterMonths = '<select name=\"\" id=\"field-month-search-cash-out\" class=\"form-control-sm col-3\" onChange=\"ShowCashOut(2)\">';
                filterMonths += '<option value=\"\">Selecione um Mês</option>';
                for (i = 1;i<=12;i++){
                    var selectedMonth = '';
                    if (i == actualMonth) {
                        selectedMonth = ' selected=\"selected\"';
                    }
                    filterMonths += '<option value=\"'+i+'\"'+selectedMonth+'>'+listMonths[i]+'</option>';
                }
                filterMonths += '</select>';

                if (recorders == 0) {
                	tr = 'Filtros: '+filterMonths+'<br>';
                    tr += '<p>Não há dívidas lançadas até o momento para o mês selecionado!</p>';
                } else {

                	var tr = 'Filtros: '+filterMonths+'<table style=\"width:100%; overflow-x:auto\"><tr><th>Título</th><th>Descrição</th><th>Vencimento</th><th>Valor</th><th>Opções</th></tr>';
    	            for(var i = 0; i < rows.length; i++){
                        if (rows[i].due_status == 0) {
                            var iconPaid = "check_as_paid_out.png";
                            var class_css = '';
                        } else {
                            var iconPaid = "check_as_paid_out_ok.png";
                            var class_css = 'paid';
                        }

                        tr += '<tr class=\"'+ class_css +'\">';
                        tr += '<td>' + rows[i].title + '</td>';
                        tr += '<td>' + rows[i].description + '</td>';
                        var nMonth = ("0000" + rows[i].month_dc).slice(-2);
                        tr += '<td>' + rows[i].day_dc +'/' + nMonth + '/' + rows[i].year_dc + '</td>';
                        var val = parseFloat(rows[i].value).toFixed(2).toString().replace(".", ",");
                        tr += '<td> R$ <span id=\"valueRS\">' + val + '</span></td>';
                        tr += '<td><img src=\"view/templates/v1.0/images/icons/edit.png\" onClick=\"EditingCashOut(' + rows[i].id + ')\"> <img src=\"view/templates/v1.0/images/icons/delete.png\" onClick=\"DeleteCashOut(' + rows[i].id + ')\" data-toggle=\"modal\" data-target=\"#edit-debt-for-pay-modal\"> <img src=\"view/templates/v1.0/images/icons/' + iconPaid + '\" onClick=\"PayBill(' + rows[i].id + ')\"></td>';
                        tr += '</tr>';                   
                }
                    tr += '</table>';
                }
                ShowCashOutView(tr);
            }, null);
        });

    } else if (typeCO == "onlyValue") {

        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM cash_outflow WHERE month_dc=? AND year_dc=?', [actualMonth,actualYear], function (tx, resultado) {
                
                var rows = resultado.rows;

                var recorders = rows.length;

                var val = 0;
                for(var i = 0; i < rows.length; i++){
                    val += rows[i].value;
                }                   
                
                //ShowCashOutView(tr);
            }, null);
        });

    }

}



/*

	==========================================================================

		Functions for Lock System DAO

	==========================================================================

*/



//
function ActivateProtectionDAO(sP)
{
	db.transaction(function(tx) {

        tx.executeSql('SELECT * FROM admin_fc WHERE id=?', [1], function (tx, resultado) {

            var rows = resultado.rows;
            var recorders = rows.length;
	            
	        if (recorders < 1 && sP == 0) { 

	        	CheckSession();
	        	ShowActualBalance();
			    ShowCashReceipt(0,1);
			    ShowGrossSalaryView();
			    ShowCashOut(0);
			    ShowTotalPay();
			    ShowFinalBalanceForecast();
			    ShowCashReceipt(1,1);
			    ShowStatusProtection();			    
			    //showManegementPanel('back-to-home');

	        } else if (recorders < 1 && sP == 1) {


	        	tx.executeSql('INSERT INTO admin_fc (password,protected_status) VALUES (?,?)', ['',sP], function (tx, resultado) {

	        		if (tx) {
	        			loadPanel('create-password');
	        		} else {
	        			ErrorMessages(37);
	        		}

	        	});

	        } else {

	        	tx.executeSql('UPDATE admin_fc SET protected_status=? WHERE id=?', [sP,1], function (tx, resultado) {

	        		if (tx) {
	        			if (sP == 0) {
	        				tx.executeSql('DELETE FROM admin_fc WHERE id=?', [1]);
	        			} else {
	        				//loadPanel('edit-password');
	        			}
	        		} else {
	        			ErrorMessages(37);
	        		}

	        	});

	        }

        });
    });
}

//
function CheckSessionDAO()
{
	db.transaction(function(tx) {

        tx.executeSql('SELECT * FROM admin_fc', [], function (tx, resultado) {

        	var rows = resultado.rows;
            var recorders = rows.length;

            if (recorders < 1) {
            	CheckSession(0)
            } else {
            	CheckSession(1)
            }

        });

    });
}

//
function CreatePasswordDAO(p)
{
	db.transaction(function(tx) {
		
		tx.executeSql('UPDATE admin_fc SET password=? WHERE id=?', [p,1], function (tx, resultado) {

			if (tx) {
				
				//Open session
				sessionStorage.setItem("Login", p);
				SuccessfulMessages(11);
				$('#new-password-protection').val();
				$('#conf-new-password-protection').val();
				create-password-modal
				$('#create-password-modal').modal('hide');

			} else {
				tx.executeSql('DELETE FROM admin_fc WHERE id=?', [1]);
				ErrorMessages(41);			
			}

		});

	});
}

//
function EditPasswordDAO(nP)
{
	db.transaction(function(tx) {
		
		tx.executeSql('UPDATE admin_fc SET password=? WHERE id=?', [nP,1], function (tx, resultado) {

			if (tx) {
				
				//Close previous session and open session with a new password
				sessionStorage.removeItem("Login");
				sessionStorage.setItem("Login", nP);
				SuccessfulMessages(11);
				$('#edit-password-protection').val();
				$('#conf-edit-password-protection').val();
				$('#create-password-modal').modal('hide');

			} else {
				//tx.executeSql('DELETE FROM admin_fc WHERE id=?', [1]);
				ErrorMessages(41);			
			}

		});

	});
}

//
function LoginDAO(p)
{
	db.transaction(function(tx) {

        tx.executeSql('SELECT * FROM admin_fc WHERE password=?', [p], function (tx, resultado) {

        	var rows = resultado.rows;
            var recorders = rows.length;

            if (recorders < 1) {
            	ErrorMessages(44);
            } else {
            	sessionStorage.setItem("Login", p);
				SuccessfulMessages(12);
            }

        });

    });
}

//
function Logoff()
{
	
}

//
function ShowStatusProtectionDAO()
{
	db.transaction(function(tx) {

		tx.executeSql('SELECT * FROM admin_fc WHERE id=?', [1], function (tx, resultado) {

    		var rows = resultado.rows;
            var recorders = rows.length;
	            
	        if (recorders < 1) {
	        	ShowStatusProtectionView(0);
	        } else {
	        	ShowStatusProtectionView(1);
	        }

    	});

	});
}



/*

	==========================================================================

		Functions for Received DAO :: Benefit

	==========================================================================

*/


//
function DeleteBenefitDAO(idB) 
{

	var confirm = ConfirmMessages(0);

	if (confirm) {

		db.transaction(function(tx) {
			//Delete the Benefit
			var transactionDB = tx.executeSql('DELETE FROM received WHERE id=?', [idB]);
			
			//If transaction has been successful return true
			if (transactionDB) 
			{
				SuccessfulMessages(4);

			//Else transaction isn't successful return false
			} else {
				ErrorMessages(11);
			}
		});

	}

}

//
function EditBenefitDAO(titleB,descriptionB,valueB) 
{
	db.transaction(function(tx) {
		//Add the Salary
		tx.executeSql('UPDATE received SET title=?, description=?, value=? WHERE title=?', [titleB,descriptionB,valueB,titleB],

		function(tx, result){
            console.log('Funcionou!');
            console.log(result);
        },

        function(tx, error){
            console.log('Houve erro!');
            console.log(error);
        }

		);
		
		//If transaction has been successful return true
		if (tx) 
		{
			SuccessfulMessages(3);
			$('#field-title-benefit').val();
			$('#field-description-benefit').val();
			$('#field-value-benefit').val();
			$('#management-benefits-modal').modal('hide');

		//Else transaction isn't successful return false
		} else {
			ErrorMessages(10);
		}
	});
}

//
function IncludeBenefitDAO(titleB,descriptionB,dayR,mounthR,yearR,valueB) 
{
	db.transaction(function(tx) {
		//Add the Benefit
		tx.executeSql('INSERT INTO received (title,description,value,day_r,month_r,year_r) VALUES (?, ?, ?, ?, ?, ?)', [titleB,descriptionB,dayR,mounthR,yearR,valueB],

		function(tx, result){
            console.log('Funcionou!');
            console.log(result);
        },

        function(tx, error){
            console.log('Houve erro!');
            console.log(error);
        }

		);
		
		//If transaction has been successful return true
		if (tx) 
		{
			SuccessfulMessages(2);
			$('#field-title-benefit').val();
			$('#field-description-benefit').val();
			$('#field-value-benefit').val();
			$('#field-actual-date').val();
			$('#management-benefits-modal').modal('hide');

		//Else transaction isn't successful return false
		} else {
			ErrorMessages(5);
		}
	});
}

//
//function ShowBenefitDAO(itemB,typeSearchB,onlyValue) 
function ShowBenefitDAO(typeSearch,itemB) 
{
	if (typeSearch == 0) {

		db.transaction(function(tx) {
	        tx.executeSql('SELECT * FROM received WHERE title=?', [itemB], function (tx, resultado) {
	            var rows = resultado.rows;
	            
	            var description = rows[0].description;
	            var value 		= rows[0].value;

	            //alert(rows[0].value);
	            
	            ShowBenefitView(typeSearch,itemB,itemB,description,value);
	        });
	    });

	} 

/*
	else if (typeSearchB != 0 && onlyValue == 1) {

		db.transaction(function(tx) {
	        tx.executeSql('SELECT * FROM received', [], function (tx, resultado) {
	            var rows = resultado.rows;
	            if (rows == 0) {
	            	//table.innerHTML = '<tr><td>Não há benefícios cadastrados!</td></tr>';
	            } else {
	            	var totalB = 0;
		            for(var i = 0; i < rows.length; i++){
		                    totalB += rows.value;                  
		            }
		            return totalB;
	            }
	        }, null);
	    });

	} else if (typeSearchB != 0 && onlyValue == 0) {

		db.transaction(function(tx) {
	        tx.executeSql('SELECT * FROM received', [], function (tx, resultado) {
	            var rows = resultado.rows;
	            if (rows == 0) {
	            	table.innerHTML = '<tr><td>Não há benefícios cadastrados!</td></tr>';
	            } else {
	            	var tr = '';
		            for(var i = 0; i < rows.length; i++){
		                    tr += '<tr>';
		                    tr += '<td onClick="atualizar(' + rows[i].id + ')">' + rows[i].title + '</td>';
		                    tr += '<td> R$' + rows[i].value + '</td>';
		                    tr += '</tr>';                   
		            }
		                table.innerHTML = tr; 
	            }
	        }, null);
	    });

	}
	*/
}



/*

	==========================================================================

		Functions for Received DAO :: Cash

	==========================================================================

*/


//
function DeleteCashReceiptDAO(idC) 
{
	var confirm = ConfirmMessages(1);

	if (confirm) {

		db.transaction(function(tx) {
			//Delete the Benefit
			tx.executeSql('DELETE FROM received WHERE id=?', [idC]);
			
			//If transaction has been successful return true
			if (tx) 
			{
				SuccessfulMessages(8);

			//Else transaction isn't successful return false
			} else {
				ErrorMessages(19);
			}
		});

	}
}

//
function EditCashReceiptDAO(titleC,descriptionC,valueC,idC) 
{
	db.transaction(function(tx) {
		//Edit the Cash Receipt
		tx.executeSql('UPDATE received SET title=?, description=?, value=? WHERE id=?', [titleC,descriptionC,valueC,idC]);
		
		//If transaction has been successful return true
		if (tx) 
		{
			SuccessfulMessages(6);
			$('#field-title-cash-receipt').val();
			$('#field-description-cash-receipt').val();
			$('#field-value-cash-receipt').val();
			$('#field-id-cash-receipt').val();
			$('#edit-debt-for-pay-modal').modal('hide');

		//Else transaction isn't successful return false
		} else {
			ErrorMessages(18);
		}
	});
}

//
function EditingCashReceiptDAO(id)
{

	db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM received WHERE id=?', [id], function (tx, resultado) {

            var rows = resultado.rows;
	            
	        var title 		= rows[0].title;
	        var value 		= rows[0].value; 
	        var day_r 		= ("00" + (rows[0].day_r)).slice(-2);
	        var month_r 	= ("00" + (rows[0].month_r)).slice(-2);
	        var year_r 		= rows[0].year_r;
	        var description = rows[0].description;
	                        
            EditingCashReceiptView(id,title,value,day_r,month_r,year_r,description);
            
        }, null);
    });

}

//
function IncludeCashReceiptDAO(titleB,descriptionB,valueB,day,month,year) 
{
	db.transaction(function(tx) {
		//Add the Benefit
		tx.executeSql('INSERT INTO received (title,description,value,day_r,month_r,year_r) VALUES (?, ?, ?, ?, ?, ?)', [titleB,descriptionB,valueB,day,month,year]);
		
		//If transaction has been successful return true
		if (tx) 
		{
			SuccessfulMessages(5);
			$('#field-title-cash').val();
			$('#field-description-cash').val();
			$('#field-value-cash').val();
			$('#field-actual-date').val();
			$('#new-debt-for-pay-modal').modal('hide');

		//Else transaction isn't successful return false
		} else {
			ErrorMessages(17);
		}
	});
}

//
function ShowCashReceiptDAO(itemC,typeSearchC) 
{
	if (typeSearchC == 0) {

		db.transaction(function(tx) {
	        tx.executeSql('SELECT * FROM received WHERE title=?', [itemC], function (tx, resultado) {
	            var rows = resultado.rows[0];
	            return rows.value;
	        });
	    });

	/*} else if (typeSearchC == 1 && itemC == 1) {*/
	} else {

		db.transaction(function(tx) {
	        tx.executeSql('SELECT * FROM received', [], function (tx, resultado) {
	            var rows = resultado.rows;

                var recorders = rows.length;

                var tr = '';
                if (recorders == 0) {
                    tr += '<p>Não há entradas lançadas até o momento!</p>';
                } else {

                	tr += '<table style=\"width:100%; overflow-x:auto;\"><tr><th>Título</th><th>Descrição</th><th>Recebido em:</th><th>Valor</th><th>Opções</th></tr>';
                	for(var i = 0; i < rows.length; i++){

                		tr += '<tr>';
                        tr += '<td>' + rows[i].title + '</td>';
                        tr += '<td>' + rows[i].description + '</td>';
                        var nMonth = ("0000" + rows[i].month_r).slice(-2);
                        tr += '<td>' + rows[i].day_r +'/' + nMonth + '/' + rows[i].year_r + '</td>';
                        var val = parseFloat(rows[i].value).toFixed(2).toString().replace(".", ",");
                        tr += '<td> R$ <span id=\"valueRS\">' + val + '</span></td>';
                        tr += '<td><img src=\"view/templates/v1.0/images/icons/edit.png\" onClick=\"EditingCashReceipt(' + rows[i].id + ')\"  data-toggle="modal" data-target="#edit-cash-entrance-modal""> <img src=\"view/templates/v1.0/images/icons/delete.png\" onClick=\"DeleteCashReceipt(' + rows[i].id + ')\"></td>';
                        tr += '</tr>';  

                	}
                	tr += '</table>';
                }
                ShowCashReceiptView(tr);
	        });
	    });

	} /*else {

		db.transaction(function(tx) {
	        tx.executeSql('SELECT * FROM received WHERE title !=? AND title !=? AND title !=?', ['VT','VR','VA'], function (tx, resultado) {
	            var rows = resultado.rows;
	            
	            if (rows.length > 0) {
	            	var receiv = 0;
		            for(var i = 0; i < rows.length; i++){
		                    receiv += parseFloat(rows[i].value);                  
		            }
		            var val = receiv.toFixed(2).toString().replace(".", ",");
		            var receiv = "R$ "+val;
	            } else {
	            	var receiv = "R$ 0,00";      
	            }

	            //ShowCashReceiptView(receiv);
	            
	        }, null);
	    });

	}*/
}



/*

	==========================================================================

		Functions for Received DAO :: Salary

	==========================================================================

*/



//
function EditSalaryDAO(valSalary) 
{
	db.transaction(function(tx) {
		//Add the Salary
		var transactionDB = tx.executeSql('UPDATE received SET value=? WHERE title=?', [valSalary,'Salário'],

		function(tx, result){
            console.log('Funcionou!');
            console.log(result);
        },

        function(tx, error){
            console.log('Houve erro!');
            console.log(error);
        }

        );
		
		//If transaction has been successful return true
		if (tx) 
		{
			SuccessfulMessages(1);
			$('#management-salary-income-modal').modal('hide');

		//Else transaction isn't successful return false
		} else {
			ErrorMessages(3);
		}
	});
}

//
function IncludeSalaryDAO(valSalary,dayR,mounthR,yearR) 
{
	db.transaction(function(tx) {
		//Add the Salary
		tx.executeSql('INSERT INTO received (title,value,day_r,month_r,year_r) VALUES (?, ?, ?, ?, ?)', ['Salário',valSalary,dayR,mounthR,yearR],

		function(tx, result){
            console.log('Funcionou!');
            console.log(result);
        },

        function(tx, error){
            console.log('Houve erro!');
            console.log(error);
        }

        );

		//If transaction has been successful return true
		if (tx) {

			//alert(valSalary+" - "+tx+" - "+db);
			CalculateINSSDAO(valSalary);
			SuccessfulMessages(0);
			$('#management-salary-income-modal').modal('hide');

		//Else transaction isn't successful return false
		} else {
			
			ErrorMessages(2);
		}

	});

}

//
function ShowGrossSalaryDAO() 
{
	db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM received WHERE title=?', ['Salário'], function (tx, resultado) {
            var rows = resultado.rows;

            if (rows.length < 1) {

            } else {
            	var result = rows[0].value;

            	ShowGrossSalary(result);
            }

        });
    });
}

//
function ShowNetSalaryDAO() 
{
	db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM received WHERE title=?', ['Salário'], function (tx, resultado) {
            var rows 			= resultado.rows[0];
            var grossSalary 	= rows.value;

            var inss 	= CalculateINSSDAO(grossSalary); 
            var vt 		= CalculateVTDAO(grossSalary); 
            var va 		= CalculateVADAO(grossSalary); 

            var netSalary = grossSalary - inss - vt - va;

            return netSalary;

        });
    });
}



/*

	==========================================================================

		Functions for Received DAO (Calculate Functions for Brasilian items)

	==========================================================================

*/



//Table of 2019
function CalculateINSSDAO(salary) 
{
	if ((salary >= 2919.73) && (salary <= 5839.45)) {
		var inss = salary * 0.11;
	} else if ((salary >= 1751.82) && (salary <= 2919.72)) {
		var inss = salary * 0.09;
	} else if (salary <= 1751.81) {
		var inss = salary * 0.08;
	}

	return inss;
	
}

//Food stamps
function CalculateVADAO(salary) 
{
	//The discount limit is 20%
	var va = salary * 0.00;
	return va;
	
}

//Transportation Vouchers
function CalculateVTDAO(salary) 
{
	var vt = salary * 0.06;
	return vt;
	
}

/*

	==========================================================================

		Functions for Balances Model

	==========================================================================

*/

//
function ShowActualBalance()
{
	// Get actual date
	var actualDate = new Date();

	// Save each part in a variable
	var month     	= actualDate.getMonth();          // 0-11 (zero=janeiro)
	var year    	= actualDate.getFullYear();       // 2 dígitos

	var month = month+1;

	ShowActualBalanceDAO(month,year);
}

//
function ShowBalanceWithBenefits() 
{
	ShowBalanceWithBenefitsDAO();
}

//
function ShowCurrentBalance() 
{

	var dateAtual = $('#field-actual-date').val();

	var sepDate = dateP.split("-");

	var mounth 		= sepDate[1];
	var year 		= sepDate[0];

	if (dateAtual == "") {
		ErrorMessages(37);
	} else {
		ShowCurrentBalanceDAO(actualMounthDate,actualYearDate);
	}

}

//
function ShowFinalBalanceForecast() 
{
	var dateActual = $('#field-actual-date').val();

	var sepDate = dateActual.split("-");

	var month 		= sepDate[1];
	var year 		= sepDate[0];

	if (dateActual == "") {
		ErrorMessages(37);
	} else {
		ShowFinalBalanceForecastDAO(month,year);
	}
}

//
function ShowTotalPay() 
{

	var dateAtual = $('#field-actual-date').val();

	var sepDate = dateAtual.split("-");

	var month 		= sepDate[1];
	var year 		= sepDate[0];

	if (dateAtual == "") {
		ErrorMessages(37);
	} else {
		ShowTotalPayDAO(month,year);
	}

}



/*

	==========================================================================

		Functions for Cash Outflow Model

	==========================================================================

*/


//
function AddCashOut() 
{
	var title 			= $('#field-title-cash-out-ad').val();
	var value 			= $('#field-value-cash-out-ad').val();
	var dateD 			= $('#field-due-date-cash-out-ad').val();

	var sepDate = dateD.split("-");

	var dayD 		= sepDate[2];
	var monthD 		= sepDate[1];
	var yearD 		= sepDate[0];

	var description 	= $('#field-description-cash-out-ad').val();

	var testN = value % 1 !== 0;
	
	if ((title == "") || (value == "") || (dayD == "") || (monthD == "") || (yearD == "")) {
		ErrorMessages(21);
	} else if (title == "") {
		ErrorMessages(22);
	} else if (value == "") {
		ErrorMessages(23);
	} /* else if(testN === false) {
		ErrorMessages(1);
	} */ else if ((dayD == "") || (monthD == "") || (yearD == "")) {
		ErrorMessages(24);
	} else {
		AddCashOutDAO(title,value,dayD,monthD,yearD,description);
	}
}

//
function DeleteCashOut(id) 
{
	//var id = $('#field-id-cash-out').val();

	if (id == "") {
		ErrorMessages(27);
	} else {
		DeleteCashOutDAO(id);
	}
}

//
function EditCashOut() 
{
	var title 			= $('#field-title-cash-out').val();
	var value 			= $('#field-value-cash-out').val();
	var dateD 			= $('#field-due-date-cash-out').val();

	var sepDate = dateD.split("-");

	var day 		= sepDate[2];
	var month 		= sepDate[1];
	var year 		= sepDate[0];

	var description 	= $('#field-description-cash-out').val();
	var id 				= $('#field-id-cash-out').val();

	if ((title == "") || (value == "") || (day == "") || (month == "") || (year == "")) {
		ErrorMessages(21);
	} else if (title == "") {
		ErrorMessages(22);
	} else if (value == "") {
		ErrorMessages(23);
	} else if ((day == "") || (month == "") || (year == "")) {
		ErrorMessages(24);
	} else {
		EditCashOutDAO(title,value,day,month,year,description,id);
	}
}

//
function EditingCashOut(id)
{

	EditingCashOutDAO(id);

}

//
function PayBill(id) 
{
	//var dateP 	= $('#field-date-pay-bill').val();
	var dateP 	= $('#field-actual-date').val();

	var sepDate = dateP.split("-");

	var day 		= sepDate[2];
	var month 		= sepDate[1];
	var year 		= sepDate[0];

	if (id == "" || dateP == "") {
		ErrorMessages(34);
	} else if (id == "") {
		ErrorMessages(35);
	} else if (dateP == "") {
		ErrorMessages(36);
	} else {

		PayBillDAO(day,month,year,id);

	}
}

//
function SearchCashOut(type,month,year) 
{

	if (type == 1) {


		var monthSelected = $('#field-month-search-cash-out').val();

		//alert(monthSelected);

		ShowCashOutDAO('tableComplete',monthSelected,year);

	} else {

		var title 		= $('#field-title-cash-out').val();
		var dateType 	= $('#field-type-date-cash-out').val();
		var dateC 		= $('#field-date-cash-out').val();

		var sepDate = dateC.split("-");

		var day 		= sepDate[2];
		var month 		= sepDate[1];
		var year 		= sepDate[0];

		if (title == "" && dateType == "" && ((day == "") || (month == "") || (year == ""))) {
			ErrorMessages(28);
		} else if (title == "") {
			ErrorMessages(29);
		} else if (dateType != "" && ((day == "") || (month == "") || (year == ""))) {
			ErrorMessages(30);
		} else {

			SearchCashOutDAO(title,dateType,day,month,year);
			
		}

	}

}

//
function ShowCashOut(typeShow) 
{

	// Get actual date
	var actualDate = new Date();

	// Save each part in a variable
	var month     	= actualDate.getMonth();          // 0-11 (zero=janeiro)
	var year    	= actualDate.getFullYear();       // 2 dígitos

	var month = month+1;	

	if (typeShow == 0) {					

		ShowCashOutDAO("tableComplete",month,year);

	} else if (typeShow == 1) {

		ShowCashOutDAO("onlyValue",month,year);

	} else if (typeShow == 2) {

		var monthSelected = $('#field-month-search-cash-out').val();

		ShowCashOutDAO("tableComplete",monthSelected,year);

	}

}



/*

	==========================================================================

		Functions for Lock System Model

	==========================================================================

*/



//
function ActivateProtection()
{
	var statusProtection = $('#status-protection').val();

	ActivateProtectionDAO(statusProtection);
	
}

//
function CheckSession(r)
{

	var checkLogin = r;

	var checkSessionLogin = sessionStorage.getItem("Login");

	if (checkLogin == 1 && checkSessionLogin == null) {
		//loadPanel('login');
		//showManegementPanel('login');
		$("#login").css('display','inherit');
	} else {
		$("#login").css('display','none');
	}

}

//
function CreatePassword()
{
	var password = $('#new-password-protection').val();
	var confPassword = $('#conf-new-password-protection').val();

	if (password == "" && password == "") {
		ErrorMessages(38);
	} else if (password == "") {
		ErrorMessages(39);
	} else if (password != confPassword) {
		ErrorMessages(40);
	} else {
		var encryptPassword = CryptoJS.SHA256(password);
		CreatePasswordDAO(encryptPassword);
	}
}

//
function EditPassword()
{
	var password = $('#edit-password-protection').val();
	var confPassword = $('#conf-edit-password-protection').val();

	if (password == "" && password == "") {
		ErrorMessages(38);
	} else if (password == "") {
		ErrorMessages(39);
	} else if (password != confPassword) {
		ErrorMessages(40);
	} else {
		var encryptPassword = CryptoJS.SHA256(password);
		EditPasswordDAO(encryptPassword);
	}
}

//
function Login()
{
	var password = $('#field-password-login').val();

	if (password == "") {
		ErrorMessages(43);
	} else {
		var encryptPassword = CryptoJS.SHA256(password);
		LoginDAO(encryptPassword);
	}

}

//
function Logoff()
{
	sessionStorage.removeItem("Login");
	CheckSessionView();
    ShowActualBalance();
    ShowCashReceipt(0,1);
    ShowGrossSalaryView();
    ShowCashOut(0);
    ShowTotalPay();
    ShowFinalBalanceForecast();
    ShowCashReceipt(1,1);
    ShowStatusProtection();
}

//
function ShowStatusProtection()
{
	ShowStatusProtectionDAO();
}



/*

	==========================================================================

		Functions for Received Model :: Benefits

	==========================================================================

*/


//
function DeleteBenefit() 
{
	var id = $('#field-id-benefit').val();

	if (id == "") {
		ErrorMessages(12);
	} else {
		DeleteBenefitDAO(id);
	}
}

//
function EditBenefit() 
{
	var title 			= $('#field-title-benefit').val();
	var description 	= $('#field-description-benefit').val();
	var value 			= $('#field-value-benefit').val();

	if ((title == "") || (value == "")) {
		ErrorMessages(6);
	} else if (title == "") {
		ErrorMessages(7);
	} else if (value == "") {
		ErrorMessages(9);
	} else {
		EditBenefitDAO(title,description,value,title);
	}

}

//
function IncludeBenefit() 
{
	var title 			= $('#field-title-benefit').val();
	var description 	= $('#field-description-benefit').val();
	var value 			= $('#field-value-benefit').val();
	var dateC 			= $('#field-actual-date').val();

	var sepDate = dateC.split("-");

	var day 		= sepDate[2];
	var mounth 		= sepDate[1];
	var year 		= sepDate[0];

	var testN = value % 1 !== 0;

	if ((title == "") || (value == "")) {
		ErrorMessages(6);
	} else if (title == "") {
		ErrorMessages(7);
	} /* else if (testN === false) {
		ErrorMessages(1);
	} */ else if (value == "") {
		ErrorMessages(9);
	} else {
		IncludeBenefitDAO(title,description,value,day,mounth,year);
	}
}

//
//function ShowBenefit(itemB,typeSearchB,onlyValue) 
function ShowBenefit(typeB) 
{

	if (typeB == 0) {
		var benefit = $("#field-title-benefit").val();
		ShowBenefitDAO(typeB,benefit);
	}
		

//	if (itemB == "") {
//		ShowBenefitDAO(0,1,0);
//	} else {
//		ShowBenefitDAO(itemB,2,onlyValue);
//	}

}



/*

	==========================================================================

		Functions for Received Model :: Cash

	==========================================================================

*/



//
function DeleteCashReceipt(id) 
{
	//var id = $('#field-id-cash').val();

	if (id == "") {
		ErrorMessages(19);
	} else {
		//DeleteBenefitDAO(id);
		DeleteCashReceiptDAO(id);
	}
}

//
function EditCashReceipt() 
{
	var title 			= $('#field-title-cash-receipt').val();
	var description 	= $('#field-description-cash-receipt').val();
	var value 			= $('#field-value-cash-receipt').val();
	var id 				= $('#field-id-cash-receipt').val();

	if ((title == "") || (value == "")) {
		ErrorMessages(13);
	} else if (title == "") {
		ErrorMessages(14);
	} else if (value == "") {
		ErrorMessages(16);
	} else {
		EditCashReceiptDAO(title,description,value,id);
	}
	
}

//
function EditingCashReceipt(id)
{

	EditingCashReceiptDAO(id);

}

//
function IncludeCashReceipt() 
{
	var title 			= $('#field-title-cash').val();
	var description 	= $('#field-description-cash').val();
	var value 			= $('#field-value-cash').val();
	var dateC 			= $('#field-actual-date').val();

	var sepDate = dateC.split("-");

	var day 		= sepDate[2];
	var mounth 		= sepDate[1];
	var year 		= sepDate[0];

	var testN = value % 1 !== 0;

	if ((title == "") || (value == "")) {
		ErrorMessages(13);
	} else if (title == "") {
		ErrorMessages(14);
	} else if (value == "") {
		ErrorMessages(16);
	} else if (testN === false) {
		ErrorMessages(1);
	} else {
		IncludeCashReceiptDAO(title,description,value,day,mounth,year);
	}
}

//
function ShowCashReceipt(itemC,typeSearchC) 
{
	if (typeSearchC == 0) {
		ShowCashReceiptDAO(itemC,1);
	} else {
	 	ShowCashReceiptDAO(0,1);
	}

}



/*

	==========================================================================

		Functions for Received Model :: Salary

	==========================================================================

*/



//
function EditSalary() 
{
	//
	var salary = $('#field-salary').val();

	var testN = salary % 1 !== 0;

	if (salary == "")
	{
		ErrorMessages(0);
	} /* else if(testN === false) {
		ErrorMessages(1);
	} */ else {
		EditSalaryDAO(salary);
	}
}

//
function IncludeSalary()
{
	//
	var salary 			= $('#field-salary').val();
	var dateC 			= $('#field-actual-date').val();

	var sepDate = dateC.split("-");

	var day 		= sepDate[2];
	var mounth 		= sepDate[1];
	var year 		= sepDate[0];

	var testN = salary % 1 !== 0;

	if (salary == "") {
		ErrorMessages(0);
	} /* else if(testN === false) {
		ErrorMessages(1);
	} */ else {
		IncludeSalaryDAO(salary,day,mounth,year);
	}

}

//
function ShowGrossSalary(valueS) 
{

	if (valueS <= 0) {
        $("#include-salary").css('display','inherit');
        $("#edit-salary").css('display','none');
    } else {
    	$("#field-salary").val(valueS);
    	$("#include-salary").css('display','none');
        $("#edit-salary").css('display','inherit');
    }

}

//
function ShowGrossSalary(valueS) 
{

	if (valueS <= 0) {
        $("#include-salary").css('display','inherit');
        $("#edit-salary").css('display','none');
    } else {
    	$("#field-salary").val(valueS);
    	$("#include-salary").css('display','none');
        $("#edit-salary").css('display','inherit');
    }

}

//
function ShowNetSalary() 
{
	ShowNetSalaryDAO() 
}



function ClearFields()
{
	$('#field-title-cash').val(''); 
    $('#field-description-cash').val(''); 
    $('#field-value-cash').val('');
    $('#field-title-cash-receipt').val(''); 
    $('#field-description-cas-receipt').val(''); 
    $('#field-value-cash-receipt').val('');
    $('#field-title-cash-out-ad').val(''); 
    $('#field-due-date-cash-out-ad').val(''); 
    $('#field-description-cash-out-ad').val('');
    $('#field-value-cash-out-ad').val('');
    $('#field-title-cash-out').val('');
    $('#field-due-date-cash-out').val('');
    $('#field-description-cash-out').val(''); 
    $('#field-value-cash-out').val('');
}

function ConfirmMessages(codeMsg)
{
	var listMsg = new Array (
		[0,'Tem certeza que você deseja excluir este benefício?'],
		[1,'Tem certeza que você deseja excluir esta entrada de dinheiro?'],
		[2,'Tem certeza que você deseja excluir esta saída de dinheiro?']
	);

	var question = confirm(listMsg[codeMsg][1]);

	return question;
}

function ErrorMessages(codeMsg)
{
	var listMsg = new Array (
		[0,'Você precisa preencher o campo de salário!','field-salary'],
		[1,'Você precisa digitar um valor decimal!','field-salary'],
		[2,'Erro ao cadastrar o salário! Código: #isDAO01','field-salary'],
		[3,'Erro ao atualizar o salário! Código: #esDAO02','field-salary'],
		[4,'Erro ao calcular o INSS! Código #ciDAO03',''],
		[5,'Erro ao cadastrar o benefício! Código: #ibDAO04','field-title-benefit'],
		[6,'Você precisa preencher os campos!','field-title-benefit'],
		[7,'Escolha o título do benefício!','field-title-benefit'],
		[8,'Você precisa descrever a descrição do benefício!','field-description-benefit'],
		[9,'Você precisa preencher o valor do benefício!','field-value-benefit'],
		[10,'Erro ao atualizar o benefício! Código: #ebDAO05','field-title-benefit'],
		[11,'Erro ao excluir benefício! Código: #dbDAO06','field-title-benefit'],
		[12,'Erro de ID de benefício! #db07',''],
		[13,'Você precisa preencher os campos!',''],
		[14,'Escolha o título para a entrada de dinheiro!',''],
		[15,'Você precisa descrever a descrição para a entrada de dinheiro!',''],
		[16,'Você precisa preencher o valor da entrada de dinheiro!',''],
		[17,'Erro ao cadastrar entrada de dinheiro! #icrDAO08',''],
		[18,'Erro ao atualizar a entrada de dinheiro! Código: #ecrDAO09',''],
		[19,'Erro ao excluir a entrada de dinheiro! Código: #dcrDAO10',''],
		[20,'Erro ao lançar saída de dinheiro! Código: #acoDAO11',''],
		[21,'Você precisa preencher os campos!',''],
		[22,'Você precisa preencher o título da saída de dinheiro!',''],
		[23,'Erro ao identificar a data da saída de dinheiro! Código: #acoDAO12',''],
		[24,'Você precisa preencher a descrição da saída de dinheiro!',''],
		[25,'Erro ao atualizar a saída de dinheiro! Código: #ecoDAO13',''],
		[26,'Erro ao deletar a saída de dinheiro! Código: #dcoDAO14',''],
		[27,'Erro de ID de Saída de dinheiro! #dcoDAO15',''],
		[28,'Você precisa preencher pelo menos o campo de título!',''],
		[29,'Você precisa preencher pelo menos o campo de título!',''],
		[30,'Escolha uma data!',''],
		[31,'A data está no formato errado. Por favor corrija.',''],
		[32,'Valores inválidos para o dia, mês ou ano. Por favor corrija.',''],
		[33,'Erro ao lançar o pagamento de conta! Código: #pbDAO16',''],
		[34,'Houve erro de dados no lançamento de pagamento! Código: #pb17',''],
		[35,'Houve erro de dados no lançamento de pagamento! Código: #pb18',''],
		[36,'Houve erro de dados no lançamento de pagamento! Código: #pb19',''],
		[37,'Erro ao identificar a data atual! Código: #stp20',''],
		[38,'Erro ao ativar a proteção! #apDAO21',''],
		[39,'Você precisa preencher os campos!',''],
		[40,'Você precisa preencher a sua senha!',''],
		[41,'Senha e confirmação diferentes!',''],
		[42,'Erro ao registrar a senha! #cpDAO22',''],
		[43,'Você precisa preencher a sua senha!',''],
		[44,'A senha digitada não está correta!',''],
		[45,'Você precisa preencher todos os campos!','field-email'],
		[46,'Você precisa preencher o campo de e-mail!','field-email'],
		[47,'Você precisa preencher o campo de confirmação do e-mail!','field-conf-email'],
		[48,'Você precisa preencher o campo de senha!','field-password-sync'],
		[49,'Você precisa preencher o campo de confirmação senha!','field-conf-password-sync'],
		[50,'O e-mail e a confirmação não estão iguais!','field-email-sync'],
		[51,'A senha e a confirmação não estão iguais!','field-password-sync'],
		[51,'A senha e a confirmação não estão iguais!','field-password-sync'],
		[52,'Houve um erro ao registrar o ID de Sync! #cis23','field-email-sync'],
		[53,'Houve um erro ao logar com o ID de Sync!','field-email-login'],
		[54,'Houve erro ao registrar o ID de Sync Local!','field-email-login'],
		[55,'Houve erro ao registrar o ID de Sync Local!','field-email-login'],
		[56,'Houve erro ao tentar realizar a sincronização!',''],
	);

	alert(listMsg[codeMsg][1]);
	$('#'+listMsg[codeMsg][2]).focus();

}

function SuccessfulMessages(codeMsg)
{
	var listMsg = new Array(
		[0,'Salário cadastrado com sucesso!',''],
		[1,'Salário atualizado com sucesso!',''],
		[2,'Benefício incluído com sucesso!',''],
		[3,'Benefício alterado com sucesso!',''],
		[4,'Benefício excluído com sucesso!',''],
		[5,'Nova entrada de dinheiro realizada com sucesso!',''],
		[6,'Entrada de dinheiro atualizada com sucesso!',''],
		[7,'Entrada de dinheiro excluída com sucesso!',''],
		[8,'Saída de dinheiro lançada com sucesso!',''],
		[9,'Saída de dinheiro editada com sucesso!',''],
		[10,'Pagamento lançado com sucesso!',''],
		[11,'Sua senha foi criada com sucesso e seu Finance Control está protegido!',''],
		[12,'Acesso permitido ao Finance Control!',''],
		[13,'Saída de dinheiro excluida com sucesso!',''],
		[14,'Seu ID foi registrado com sucesso!',''],
		[15,'Login de sincronização bem sucedido!',''],
	);

	alert(listMsg[codeMsg][1]);
	//$(location).attr('href', listLinks[codeMsg]);;
	
	CheckSessionView();
    ShowActualBalance();
    ShowCashReceipt(0,1);
    ShowGrossSalaryView();
    ShowCashOut(0);
    ShowTotalPay();
    ShowFinalBalanceForecast();
    ShowCashReceipt(1,1);
    ShowStatusProtection();
    ClearFields();

    //showManegementPanel('back-to-home');
    

    //location.reload();
}

/*

	==========================================================================

		Functions for Balances View

	==========================================================================

*/

//
function ShowActualBalanceView(valueActual)
{

	$('#insert-cash-receipt-mobile').html("R$ "+valueActual);

	if (parseFloat(valueActual) < 0) {
		$('#insert-cash-receipt-mobile').css('color','red');
	} else {
		$('#insert-cash-receipt-mobile').css('color','green');
	}
}

//
function ShowFinalBalanceForecastView(val)
{
	$('#final-balance-forecast').html("R$ "+val);

	if (parseFloat(val) < 0) {
		$('#final-balance-forecast').css('color','red');
	} else {
		$('#final-balance-forecast').css('color','green');
	}
}

//
function ShowTotalPayView(valueP,totalV,receiv)
{
	$('#total-for-pay').html(valueP);

	if (totalV > receiv) {
		$('#total-for-pay').css('color','red');
	} else {
		$('#total-for-pay').css('color','green');
	}
}



/*

	==========================================================================

		Functions for Cash Outflow View

	==========================================================================

*/



//
function EditingCashOutView(id,title,value,day_dc,month_dc,year_dc,description)
{

	$('#field-id-cash-out').val(id);
	$('#field-title-cash-out').val(title);
	$('#field-due-date-cash-out').val(year_dc+'-'+month_dc+'-'+day_dc);
	$('#field-description-cash-out').val(description);
	$('#field-value-cash-out').val(value);

	loadPanel('edit-debt');

}

//
function ShowCashOutView(showCashOut)
{
	$('#table-debts').html(showCashOut);
}



/*

	==========================================================================

		Functions for Lock System View

	==========================================================================

*/



//
function CheckSessionView()
{
	CheckSessionDAO();
}

//
function ShowStatusProtectionView(r)
{
	$('#status-protection').val(r);
	if (r == 1) {
		$('#bt-edit-protection-management').css('display','inherit');
	}
}



/*

	==========================================================================

		Functions for Received View :: Benefits

	==========================================================================

*/

//
function ShowBenefitView(typeV,itemB,title,description,value) 
{

	if (typeV == 0) {

		$('#'+itemB).attr('selected','selected');
		$('#field-title-benefit').val(title);
		$('#field-description-benefit').val(description);
		$('#field-value-benefit').val(value);
		$('#include-benefit').css('display','none');
		$('#edit-benefit').css('display','inherit');

	}
}



/*

	==========================================================================

		Functions for Received View :: Cash

	==========================================================================

*/



//
function EditingCashReceiptView(id,title,value,day_r,month_r,year_r,description)
{

	$('#field-id-cash-receipt').val(id);
	$('#field-title-cash-receipt').val(title);
	$('#field-due-date-cash-receipt').val(year_r+'-'+month_r+'-'+day_r);
	$('#field-description-cash-receipt').val(description);
	$('#field-value-cash-receipt').val(value);

	loadPanel('edit-cash-entrance');

}

//
function ShowCashReceiptView(valueC)
{

	$("#table-entrances").html(valueC);

}



/*

	==========================================================================

		Functions for Received View :: Salary

	==========================================================================

*/



//
function ShowGrossSalaryView()
{
	ShowGrossSalaryDAO();
}



/*

	Functions for Sync

*/

function loadLocalData(){
	
	db.transaction(function(tx) {

    	tx.executeSql('SELECT * FROM received', [], function (tx, resultado) {
			var receivedObj = resultado.rows;
			var receivedJSON = JSON.stringify(receivedObj);
			$('#received_recorders').html(receivedJSON);
		});

		tx.executeSql('SELECT * FROM cash_outflow', [], function (tx, resultado) {
			var cash_outflowObj = resultado.rows;
			var cash_outflowJSON = JSON.stringify(cash_outflowObj);
			$('#cash_outflow_recorders').html(cash_outflowJSON);
		});

		tx.executeSql('SELECT * FROM history_sync', [], function (tx, resultado) {
			var history_syncObj = resultado.rows;
			var history_syncJSON = JSON.stringify(history_syncObj);
			$('#history_sync_recorders').html(history_syncJSON);
		});

	});

}